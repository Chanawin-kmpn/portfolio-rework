// scripts/index-portfolio-from-web.ts
import "dotenv/config";
import { DataAPIClient } from "@datastax/astra-db-ts";
import { PuppeteerWebBaseLoader } from "@langchain/community/document_loaders/web/puppeteer";
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";
import OpenAI from "openai";

type SimilarityMetric = "dot_product" | "cosine" | "euclidean";

// ----- ENV -----
const {
	// ชื่อแบบใหม่ที่คุณใช้ตอนนี้
	ASTRA_DB_ENDPOINT,
	ASTRA_DB_TOKEN,
	ASTRA_DB_NAMESPACE,
	ASTRA_DB_COLLECTION,
	OPENAI_API_KEY,
	PORTFOLIO_URL,
} = process.env;

// เลือก endpoint / token จากสองรูปแบบ
const dbEndpoint = ASTRA_DB_ENDPOINT;
const dbToken = ASTRA_DB_TOKEN;
const collectionName = ASTRA_DB_COLLECTION || "portfolio_vectors";
const portfolioUrl = PORTFOLIO_URL || "https://chanawin-portfolio.vercel.app/";

if (!dbEndpoint) {
	throw new Error(
		"❌ ASTRA_DB_API_ENDPOINT หรือ ASTRA_DB_ENDPOINT ยังไม่ได้ตั้งค่าใน .env"
	);
}
if (!dbToken) {
	throw new Error(
		"❌ ASTRA_DB_APPLICATION_TOKEN หรือ ASTRA_DB_TOKEN ยังไม่ได้ตั้งค่าใน .env"
	);
}
if (!OPENAI_API_KEY) {
	throw new Error("❌ OPENAI_API_KEY ยังไม่ได้ตั้งค่าใน .env");
}

// ----- CLIENTS -----
const openai = new OpenAI({ apiKey: OPENAI_API_KEY });

const client = new DataAPIClient(dbToken);
const db = ASTRA_DB_NAMESPACE
	? client.db(dbEndpoint, { namespace: ASTRA_DB_NAMESPACE })
	: client.db(dbEndpoint);

const splitter = new RecursiveCharacterTextSplitter({
	chunkSize: 512,
	chunkOverlap: 100,
});

// ----- CREATE COLLECTION -----
const createCollection = async (
	similarityMetric: SimilarityMetric = "dot_product"
) => {
	// เช็กก่อนว่ามี collection แล้วหรือยัง
	const collections = await db.listCollections();
	const exists = collections.find((c) => c.name === collectionName);

	if (exists) {
		console.log(`ℹ️ Collection "${collectionName}" มีอยู่แล้ว`);
		return;
	}

	console.log(`🆕 Creating Astra collection: ${collectionName}`);

	const res = await db.createCollection(collectionName, {
		vector: {
			dimension: 1536, // ต้องตรงกับ text-embedding-3-small
			metric: similarityMetric,
		},
	});

	console.log("✅ Collection created:", res);
};

// ----- LOAD PORTFOLIO DATA -----
const loadPortfolioData = async () => {
	console.log("🌐 Scraping portfolio page:", portfolioUrl);

	const collection = await db.collection(collectionName);

	const content = await scrapePage(portfolioUrl);
	const chunks = await splitter.splitText(content);

	console.log(
		`✂️ Split portfolio content into ${chunks.length} chunks. Indexing...`
	);

	for (const chunk of chunks) {
		const embeddingRes = await openai.embeddings.create({
			model: "text-embedding-3-small",
			input: chunk,
			encoding_format: "float", // ให้ได้เป็น number[]
		});

		const vector = embeddingRes.data[0].embedding;

		const res = await collection.insertOne({
			$vector: vector,
			text: chunk,
			source: "portfolio-web",
			url: portfolioUrl,
		});

		console.log("Inserted document id:", res.insertedId);
	}

	console.log("✅ Finished indexing portfolio into Astra collection.");
};

// ----- SCRAPE PAGE -----
const scrapePage = async (url: string): Promise<string> => {
	const loader = new PuppeteerWebBaseLoader(url, {
		launchOptions: {
			headless: "new",
		},
		gotoOptions: {
			waitUntil: "networkidle0",
		},
		evaluate: async (page, browser) => {
			// ดึงเฉพาะข้อความ (ไม่เอา HTML tag)
			const result = await page.evaluate(() => document.body.innerText);
			await browser.close();
			return result;
		},
	});

	// ใช้ .load() ของ community loader -> ได้เป็น Document[]
	const docs = await loader.load();
	// รวมเนื้อหาทุก doc เป็น string เดียว
	return docs.map((d) => d.pageContent).join("\n\n");
};

// ----- RUN -----
createCollection()
	.then(() => loadPortfolioData())
	.catch((err) => {
		console.error("❌ Error while indexing portfolio:", err);
		process.exit(1);
	});
