import "dotenv/config";
import { getAstraVectorStore } from "@/lib/vectorStore/astra";
import { textSplitter } from "@/lib/textSplitter";
import { PuppeteerWebBaseLoader } from "@langchain/community/document_loaders/web/puppeteer";
import { Document } from "@langchain/core/documents";

const portfolioUrl =
	process.env.PORTFOLIO_URL || "https://chanawin-portfolio.vercel.app/";

async function main() {
	console.log("Scraping portfolio page:", portfolioUrl);

	const loader = new PuppeteerWebBaseLoader(portfolioUrl, {
		launchOptions: {
			headless: true,
		},
	});
}
