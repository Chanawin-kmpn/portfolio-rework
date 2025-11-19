import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";

export const textSplitter = new RecursiveCharacterTextSplitter({
	chunkSize: 512,
	chunkOverlap: 100,
});
