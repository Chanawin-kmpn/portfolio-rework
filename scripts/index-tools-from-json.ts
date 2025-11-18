// src/scripts/index-tools-from-json.ts
import "dotenv/config";
import { promises as fs } from "fs";
import path from "path";
import { Document } from "@langchain/core/documents";
import { textSplitter } from "../lib/textSplitter";
import { getAstraVectorStore } from "@/lib/vectorStore/astra";

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

async function main() {
	console.log("Indexing tools from:", TOOLS_FILE);

	const docs = await loadTools();
	console.log(`Loaded ${docs.length} tool docs.`);

	const splitDocs = await textSplitter.splitDocuments(docs);
	console.log(`Split into ${splitDocs.length} chunks.`);

	const store = await getAstraVectorStore();
	await store.addDocuments(splitDocs);

	console.log("✅ Indexed tools JSON into Astra vector store.");
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
