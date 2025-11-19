// src/scripts/index-projects-from-ts.ts
import "dotenv/config";
import { Document } from "@langchain/core/documents";
import { DataAPIClient } from "@datastax/astra-db-ts";
import OpenAI from "openai";

import { textSplitter } from "../lib/textSplitter";
import { projects } from "../data/projects";

type Challenge = {
	title: string;
	solving: string;
};

type LessonSection = {
	title: string;
	points: string[];
};

type LessonsLearned = {
	introduction?: string;
	lessons?: LessonSection[];
	conclusion?: string;
};

type Screenshots = {
	imageFolder: string;
	imageGallery: string[];
};

type Project = {
	id: number | string;
	slug: string;
	name: string;
	description?: string;
	createdAt?: string;
	status?: string;
	stack?: string[];
	liveDemo?: string;
	heroImage?: string;
	purpose?: string;
	objectives?: string[];
	keyFeatures?: string[];
	expectedBenefits?: string[];
	webStackExplanation?: string[];
	challengesAndProblemSolving?: Challenge[];
	lessonsLearned?: LessonsLearned;
	futureDevelopmentPlan?: string[];
	screenshots?: Screenshots;
	[key: string]: any;
};

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

// ----- HELPERS -----
function projectToDocument(project: Project): Document {
	const {
		id,
		slug,
		name,
		description,
		createdAt,
		status,
		stack,
		liveDemo,
		heroImage,
		purpose,
		objectives,
		keyFeatures,
		expectedBenefits,
		webStackExplanation,
		challengesAndProblemSolving,
		lessonsLearned,
		futureDevelopmentPlan,
		screenshots,
		...rest
	} = project;

	const lines: string[] = [];

	lines.push(`Project Name: ${name}`);
	lines.push(`Slug: ${slug}`);
	if (typeof id !== "undefined") lines.push(`Project ID: ${id}`);
	if (createdAt) lines.push(`Created At: ${createdAt}`);
	if (status) lines.push(`Status: ${status}`);
	if (description) lines.push(`Description: ${description}`);
	if (purpose) lines.push(`Purpose: ${purpose}`);

	if (stack && stack.length > 0) {
		lines.push(`Tech Stack: ${stack.join(", ")}`);
	}

	if (liveDemo) lines.push(`Live Demo: ${liveDemo}`);

	if (objectives && objectives.length > 0) {
		lines.push(`Objectives:\n- ${objectives.join("\n- ")}`);
	}

	if (keyFeatures && keyFeatures.length > 0) {
		lines.push(`Key Features:\n- ${keyFeatures.join("\n- ")}`);
	}

	if (expectedBenefits && expectedBenefits.length > 0) {
		lines.push(`Expected Benefits:\n- ${expectedBenefits.join("\n- ")}`);
	}

	if (webStackExplanation && webStackExplanation.length > 0) {
		lines.push(`Web Stack Explanation:\n- ${webStackExplanation.join("\n- ")}`);
	}

	if (challengesAndProblemSolving && challengesAndProblemSolving.length > 0) {
		const challengeText = challengesAndProblemSolving
			.map(
				(c, idx) => `Challenge #${idx + 1}: ${c.title}\nSolution: ${c.solving}`
			)
			.join("\n\n");
		lines.push(`Challenges & Problem Solving:\n${challengeText}`);
	}

	if (lessonsLearned) {
		const { introduction, lessons, conclusion } = lessonsLearned;
		if (introduction) {
			lines.push(`Lessons Learned (Introduction): ${introduction}`);
		}
		if (lessons && lessons.length > 0) {
			const lessonsText = lessons
				.map((section) => {
					const pts = section.points?.map((p) => `- ${p}`).join("\n") || "";
					return `Section: ${section.title}\n${pts}`;
				})
				.join("\n\n");
			lines.push(`Lessons Learned (Sections):\n${lessonsText}`);
		}
		if (conclusion) {
			lines.push(`Lessons Learned (Conclusion): ${conclusion}`);
		}
	}

	if (futureDevelopmentPlan && futureDevelopmentPlan.length > 0) {
		lines.push(
			`Future Development Plan:\n- ${futureDevelopmentPlan.join("\n- ")}`
		);
	}

	if (screenshots) {
		const { imageFolder, imageGallery } = screenshots;
		lines.push(
			`Screenshots Folder: ${imageFolder}\nScreens: ${
				imageGallery?.join(", ") ?? ""
			}`
		);
	}

	// field อื่น ๆ ที่เหลือ (ถ้ามี)
	Object.entries(rest).forEach(([key, value]) => {
		if (value == null) return;
		if (typeof value === "string") {
			lines.push(`${key}: ${value}`);
		} else {
			lines.push(`${key}: ${JSON.stringify(value)}`);
		}
	});

	const content = lines.join("\n\n");

	return new Document({
		pageContent: content,
		metadata: {
			source: "project-ts",
			projectId: id,
			slug,
			name,
			status,
			createdAt,
			liveDemo,
		},
	});
}

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
			dimension: 1536, // text-embedding-3-small
			metric: similarityMetric,
		},
	});

	console.log("✅ Collection created:", res);
};

async function main() {
	console.log("Indexing projects from TS file...");

	const docs: Document[] = (projects as Project[]).map((p) =>
		projectToDocument(p)
	);

	console.log(`Loaded ${docs.length} project docs.`);

	const splitDocs = await textSplitter.splitDocuments(docs);
	console.log(
		`Split into ${splitDocs.length} chunks (avg ${
			splitDocs.length / (docs.length || 1)
		} per project).`
	);

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

		console.log("Inserted project chunk id:", res.insertedId);
	}

	console.log("✅ Indexed TS projects into Astra collection.");
}

createCollection()
	.then(() => main())
	.catch((err) => {
		console.error("❌ Error while indexing projects:", err);
		process.exit(1);
	});
