// lib/vectorStore/astra.ts
import { AstraDBVectorStore } from "@langchain/community/vectorstores/astradb";
import { OpenAISmallEmbeddings } from "../embeddings/openaiSmall";
// ✅ ต้องติดตั้งแพ็กเกจนี้ก่อน ถ้ายังไม่มี
// npm install @datastax/astra-db-ts
import { DataAPIClient } from "@datastax/astra-db-ts";

const astraToken = process.env.ASTRA_DB_TOKEN!;
const astraEndpoint = process.env.ASTRA_DB_ENDPOINT!;
const astraCollection = process.env.ASTRA_DB_COLLECTION || "portfolio_vectors";

console.log("Astra endpoint from env:", astraEndpoint);

const embeddings = new OpenAISmallEmbeddings();

// ฟังก์ชันช่วย: สร้าง collection ถ้ายังไม่มี
async function ensureCollectionExists() {
	const client = new DataAPIClient(astraToken);
	const db = client.db(astraEndpoint);

	// ดูว่ามี collection นี้อยู่แล้วหรือยัง
	const collections = await db.listCollections();
	const exists = collections.find((c) => c.name === astraCollection);

	if (!exists) {
		console.log(`Creating Astra collection: ${astraCollection}`);
		await db.createCollection(astraCollection, {
			vector: {
				dimension: 1536, // ต้องตรงกับ text-embedding-3-small
				metric: "cosine",
			},
		});
		console.log("✅ Collection created");
	} else {
		console.log(`Collection "${astraCollection}" already exists`);
	}
}

export async function getAstraVectorStore() {
	// ✅ ให้แน่ใจก่อนเสมอว่า collection มีแล้ว
	await ensureCollectionExists();

	const store = new AstraDBVectorStore(embeddings, {
		token: astraToken,
		endpoint: astraEndpoint,
		collection: astraCollection,
		// ตรงนี้ไม่จำเป็นต้องส่ง collectionOptions ซ้ำ
		// เพราะเราใช้ตอน createCollection ไปแล้ว
	});

	return store;
}
