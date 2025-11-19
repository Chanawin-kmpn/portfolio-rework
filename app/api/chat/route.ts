// src/app/api/chat/route.ts
import "dotenv/config";
import { DataAPIClient } from "@datastax/astra-db-ts";
import OpenAI from "openai";
import { streamText } from "ai";
import { openai as openaiModel } from "@ai-sdk/openai";

const {
	ASTRA_DB_ENDPOINT,
	ASTRA_DB_TOKEN,
	ASTRA_DB_COLLECTION,
	ASTRA_DB_NAMESPACE,
	OPENAI_API_KEY,
} = process.env;

if (!ASTRA_DB_ENDPOINT) {
	throw new Error("ASTRA_DB_ENDPOINT is not set in env");
}
if (!ASTRA_DB_TOKEN) {
	throw new Error("ASTRA_DB_TOKEN is not set in env");
}
if (!OPENAI_API_KEY) {
	throw new Error("OPENAI_API_KEY is not set in env");
}

const collectionName = ASTRA_DB_COLLECTION || "portfolio_vectors";

// ใช้ official client สำหรับ embeddings
const openaiEmbeddingClient = new OpenAI({ apiKey: OPENAI_API_KEY });

// สร้าง Astra client / db / collection
const client = new DataAPIClient(ASTRA_DB_TOKEN);
const db = ASTRA_DB_NAMESPACE
	? client.db(ASTRA_DB_ENDPOINT, { namespace: ASTRA_DB_NAMESPACE })
	: client.db(ASTRA_DB_ENDPOINT);
const collection = db.collection(collectionName);

// ดึง context จาก Astra (RAG)
async function getRelevantContext(query: string, k: number = 6) {
	// 1) ทำ embedding จากคำถาม
	const embeddingRes = await openaiEmbeddingClient.embeddings.create({
		model: "text-embedding-3-small",
		input: query,
		encoding_format: "float",
	});

	const vector = embeddingRes.data[0].embedding;

	// 2) หาเอกสารที่ใกล้ที่สุดใน Astra
	const cursor = collection.find(
		{},
		{
			sort: { $vector: vector },
			limit: k,
		}
	);

	const docs = await cursor.toArray();

	// 3) รวมเป็น context text
	const context = docs
		.map((doc: any, idx: number) => {
			const text = doc.text || "";
			const source = doc.source || doc.metadata?.source || "unknown";
			return `[#${idx + 1} | source: ${source}]\n${text}`;
		})
		.join("\n\n----\n\n");

	return { context, rawDocs: docs };
}

// Streaming handler ด้วย streamText
export async function POST(req: Request) {
	try {
		const body = await req.json().catch(() => null);
		const message: string | undefined = body?.message;

		if (!message) {
			return new Response("Missing 'message' in body", { status: 400 });
		}

		const { context } = await getRelevantContext(message, 6);

		const systemPrompt = `
You are an AI assistant for Chanawin's portfolio website.
You answer in a friendly, concise style.
Use ONLY the provided context about projects, tools, and portfolio.
If something is not in the context, say you are not sure and answer briefly from general developer knowledge.
If the user speaks Thai, reply in Thai. If they speak English, reply in English.
`;

		const userPrompt = `
User question:
${message}

Relevant context from the portfolio (projects, tools, etc.):
${context}

Answer the user's question using this context.
If the question is about how to contact the developer, you can mention the email shown in the portfolio if it appears in the context.
`;

		// ใช้ streamText ของ ai
		const result = await streamText({
			model: openaiModel("gpt-3.5-turbo"), // หรือ gpt-4o-mini / gpt-4.1
			system: systemPrompt,
			messages: [
				{
					role: "user",
					content: userPrompt,
				},
			],
			temperature: 0.5,
		});

		// ส่งออกเป็น text stream response
		return result.toTextStreamResponse();
	} catch (err: any) {
		console.error("Error in /api/chat:", err);
		return new Response(
			JSON.stringify({
				error: "Something went wrong",
				detail: err?.message,
			}),
			{
				status: 500,
				headers: { "Content-Type": "application/json" },
			}
		);
	}
}
