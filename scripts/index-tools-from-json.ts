// src/scripts/index-tools-from-json.ts
import "dotenv/config";
import { promises as fs } from "fs";
import path from "path";
import { Document } from "@langchain/core/documents";
import { DataAPIClient } from "@datastax/astra-db-ts";
import OpenAI from "openai";

import { textSplitter } from "../lib/textSplitter";

type ToolItem = {
	name: string;
	url: string;
	description: string;
	recommend: boolean;
	tag: string;
	[key: string]: any;
};

type ToolCategory = {
	category_name: string;
	tag: string;
	tools: ToolItem[];
	[key: string]: any;
};

type ToolsJson = {
	categories: ToolCategory[];
	[key: string]: any;
};

const TOOLS_FILE = path.join(process.cwd(), "data", "myTools.json");

// ----- ENV -----
const {
	ASTRA_DB_ENDPOINT,
	ASTRA_DB_TOKEN,
	ASTRA_DB_COLLECTION,
	ASTRA_DB_NAMESPACE,
	OPENAI_API_KEY,
} = process.env;

if (!ASTRA_DB_ENDPOINT) {
	throw new Error("❌ ASTRA_DB_ENDPOINT ยังไม่ได้ตั้งค่าใน .env");
}
if (!ASTRA_DB_TOKEN) {
	throw new Error("❌ ASTRA_DB_TOKEN ยังไม่ได้ตั้งค่าใน .env");
}
if (!OPENAI_API_KEY) {
	throw new Error("❌ OPENAI_API_KEY ยังไม่ได้ตั้งค่าใน .env");
}

const collectionName = ASTRA_DB_COLLECTION || "portfolio_vectors";

// ----- CLIENTS -----
const openai = new OpenAI({ apiKey: OPENAI_API_KEY });

const client = new DataAPIClient(ASTRA_DB_TOKEN);
const db = ASTRA_DB_NAMESPACE
	? client.db(ASTRA_DB_ENDPOINT, { namespace: ASTRA_DB_NAMESPACE })
	: client.db(ASTRA_DB_ENDPOINT);

// ----- TYPES / HELPERS -----
type SimilarityMetric = "dot_product" | "cosine" | "euclidean";

const createCollection = async (
	similarityMetric: SimilarityMetric = "cosine"
) => {
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

async function loadTools(): Promise<Document[]> {
	const raw = await fs.readFile(TOOLS_FILE, "utf-8");
	const json: ToolsJson = JSON.parse(raw);

	const docs: Document[] = [];

	for (const category of json.categories || []) {
		const { category_name, tag: categoryTag, tools = [] } = category;

		for (const tool of tools) {
			const { name, url, description, recommend, tag: toolTag, ...rest } = tool;

			const recommendText = recommend
				? "This tool is recommended."
				: "This tool is not marked as recommended.";

			const contentLines: string[] = [
				`Tool Name: ${name}`,
				`Category: ${category_name}`,
				`Tag: ${toolTag || categoryTag}`,
				`URL: ${url}`,
				`Description: ${description}`,
				recommendText,
			];

			Object.entries(rest).forEach(([key, value]) => {
				if (value == null) return;
				contentLines.push(`${key}: ${JSON.stringify(value)}`);
			});

			const content = contentLines.join("\n\n");

			docs.push(
				new Document({
					pageContent: content,
					metadata: {
						source: "tools-json",
						category_name,
						category_tag: categoryTag,
						tool_name: name,
						tool_url: url,
						tool_tag: toolTag || categoryTag,
						recommend,
					},
				})
			);
		}
	}

	return docs;
}

// ----- MAIN -----
async function main() {
	console.log("Indexing tools from:", TOOLS_FILE);

	const docs = await loadTools();
	console.log(`Loaded ${docs.length} tool docs.`);

	const splitDocs = await textSplitter.splitDocuments(docs);
	console.log(`Split into ${splitDocs.length} chunks.`);

	const collection = await db.collection(collectionName);

	for (const doc of splitDocs) {
		const embeddingRes = await openai.embeddings.create({
			model: "text-embedding-3-small",
			input: doc.pageContent,
			encoding_format: "float",
		});

		const vector = embeddingRes.data[0].embedding;

		const res = await collection.insertOne({
			$vector: vector,
			text: doc.pageContent,
			...doc.metadata,
		});

		console.log("Inserted tool chunk id:", res.insertedId);
	}

	console.log("✅ Indexed tools JSON into Astra collection.");
}

createCollection()
	.then(() => main())
	.catch((err) => {
		console.error("❌ Error while indexing tools:", err);
		process.exit(1);
	});
