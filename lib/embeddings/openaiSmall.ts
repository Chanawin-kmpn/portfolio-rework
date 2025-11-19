// src/lib/embeddings/openaiSmall.ts
import type { EmbeddingsInterface } from "@langchain/core/embeddings";
import { openai } from "../openai";

export class OpenAISmallEmbeddings implements EmbeddingsInterface {
	private model = "text-embedding-3-small";

	async embedDocuments(texts: string[]): Promise<number[][]> {
		const res = await openai.embeddings.create({
			model: this.model,
			input: texts,
		});

		// OpenAI v4: res.data: { embedding: number[] }[]
		return res.data.map((item) => item.embedding);
	}

	async embedQuery(text: string): Promise<number[]> {
		const res = await openai.embeddings.create({
			model: this.model,
			input: text,
		});

		return res.data[0].embedding;
	}
}
