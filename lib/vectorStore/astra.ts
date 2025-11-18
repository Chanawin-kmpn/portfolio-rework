// src/lib/vectorstore/astra.ts
import { AstraDBVectorStore } from "@langchain/community/vectorstores/astradb";
import { OpenAISmallEmbeddings } from "../embeddings/openaiSmall";

const astraToken = process.env.ASTRA_DB_TOKEN!;
const astraEndpoint = process.env.ASTRA_DB_ENDPOINT!;
const astraCollection = process.env.ASTRA_DB_COLLECTION || "portfolio_vectors";

const embeddings = new OpenAISmallEmbeddings();

export async function getAstraVectorStore() {
	const store = new AstraDBVectorStore(embeddings, {
		token: astraToken,
		endpoint: astraEndpoint,
		collection: astraCollection,
		collectionOptions: {
			// ขนาด vector ต้องตรงกับขนาดของ text-embedding-3-small (1536)
			vector: {
				dimension: 1536,
				metric: "cosine",
			},
		},
	});

	return store;
}
