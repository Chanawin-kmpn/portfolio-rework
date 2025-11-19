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

const RESUME_URL =
	process.env.RESUME_URL ||
	"https://drive.google.com/file/d/1SfS4WXDyYthn_EZMQMAGKG08Pg1GpUxw/view";

const EN_NAME = "Chanawin";
const TH_NAME = "ชนาวินทร์";

// ใช้ official client สำหรับ embeddings
const openaiEmbeddingClient = new OpenAI({ apiKey: OPENAI_API_KEY });

// สร้าง Astra client / db / collection
const client = new DataAPIClient(ASTRA_DB_TOKEN);
const db = ASTRA_DB_NAMESPACE
	? client.db(ASTRA_DB_ENDPOINT, { namespace: ASTRA_DB_NAMESPACE })
	: client.db(ASTRA_DB_ENDPOINT);
const collection = db.collection(collectionName);

// ---------- Static context: Skills ----------
const SKILLS_CONTEXT = `
Chanawin's core skills (from the "My Skills" section):

[EN]
- Languages: HTML, CSS, JavaScript, TypeScript
- Frontend / UI: Tailwind CSS, shadcn/ui, styled-components, GSAP, THREE.js, React, Next.js
- Backend / Runtime: Node.js, Express
- Database / Backend services: MongoDB, Firebase
- Tools & Others: Git, Visual Studio Code, Figma

[TH]
- ภาษาโปรแกรม: HTML, CSS, JavaScript, TypeScript
- ด้าน Frontend / UI: Tailwind CSS, shadcn/ui, styled-components, GSAP, THREE.js, React, Next.js
- ด้าน Backend / Runtime: Node.js, Express
- ด้านฐานข้อมูล / Backend services: MongoDB, Firebase
- เครื่องมืออื่น ๆ: Git, Visual Studio Code, Figma
`;

// ---------- Helpers: intent + language ----------
type Intent = "skill" | "project" | "tool" | "resume" | "other";

function detectIntent(message: string): Intent {
	const m = message.toLowerCase();

	if (/skill|skills|tech\s*stack|สกิล|ทักษะ|ความสามารถ/.test(m)) {
		return "skill";
	}

	if (/project|projects|โปรเจค|โปรเจ็กต์|ผลงาน|งานที่ทำ/.test(m)) {
		return "project";
	}

	if (
		/tool|tools|เครื่องมือ|ใช้เว็บอะไร|ใช้เครื่องมืออะไร|ไอคอน|icon|favicon|extension|ส่วนขยาย/.test(
			m
		)
	) {
		return "tool";
	}

	if (
		/resume|curriculum vitae|cv|ซีวี|เรซูเม่|เรซูเม|ประวัติการทำงาน/.test(m)
	) {
		return "resume";
	}

	return "other";
}

function looksLikeThai(text: string): boolean {
	return /[\u0E00-\u0E7F]/.test(text);
}

// จับชื่อโปรเจกต์จากข้อความ user เพื่อ map เป็น slug
function extractProjectSlug(message: string): string | null {
	const m = message.toLowerCase();

	if (m.includes("prioritask")) return "prioritask";
	if (m.includes("freshpork") || m.includes("fresh pork"))
		return "pp-freshpork";
	if (m.includes("learn css thai") || m.includes("css thai"))
		return "learn-css-thai";

	return null;
}

// ---------- RAG: ดึง context จาก Astra ----------
async function getRelevantContext(
	query: string,
	k: number = 6,
	intent: Intent = "other",
	projectSlug?: string | null
) {
	const embeddingRes = await openaiEmbeddingClient.embeddings.create({
		model: "text-embedding-3-small",
		input: query,
		encoding_format: "float",
	});

	const vector = embeddingRes.data[0].embedding;

	// ใช้ filter ตาม intent / slug
	const filter: any = {};

	if (intent === "project") {
		filter.type = "project";
		if (projectSlug) {
			filter.slug = projectSlug;
		}
	}

	const cursor = collection.find(filter, {
		sort: { $vector: vector },
		limit: k,
	});

	const docs = await cursor.toArray();

	const context = docs
		.map((doc: any, idx: number) => {
			const text = doc.text || "";
			const source = doc.source || doc.metadata?.source || "unknown";
			const type = doc.type || doc.metadata?.type || "unknown";
			const slug = doc.slug || doc.metadata?.slug;
			const name = doc.name || doc.metadata?.name;
			return `[#${idx + 1} | source: ${source} | type: ${type} | slug: ${slug} | name: ${name}]\n${text}`;
		})
		.join("\n\n----\n\n");

	return { context, rawDocs: docs };
}

// ---------- Streaming handler ----------
export async function POST(req: Request) {
	try {
		const body = await req.json().catch(() => null);
		const message: string | undefined = body?.message;

		if (!message) {
			return new Response("Missing 'message' in body", { status: 400 });
		}

		const intent = detectIntent(message);
		const userIsThai = looksLikeThai(message);

		if (intent === "resume") {
			const systemPrompt = `
You are an AI assistant for Chanawin's portfolio website.

The user is asking about Chanawin's resume/CV.

- Always answer in the same language as the user (${
				userIsThai
					? `มีครับ คุณสามารถดาวน์โหลดเรซูเม่ของ Chanawin ได้ที่ 
<a href="${RESUME_URL}" target="_blank" rel="noopener noreferrer">
คลิกที่นี่เพื่อดาวน์โหลดเรซูเม่
</a>`
					: `Yes, you can download Chanawin's resume here:
<a href="${RESUME_URL}" target="_blank" rel="noopener noreferrer">
Download Chanawin's resume
</a>`
			}).
- Always include this direct link to download Chanawin's resume:
  ${RESUME_URL}
- Keep the answer short (1–3 sentences).
- Include the link as a clickable Markdown link in the answer.
`;

			const userPrompt = `
User question:
${message}

Now answer the user, include the resume link as a Markdown hyperlink.
`;

			const result = await streamText({
				model: openaiModel("gpt-3.5-turbo"),
				system: systemPrompt,
				messages: [{ role: "user", content: userPrompt }],
				temperature: 0.1,
			});

			return result.toTextStreamResponse();
		}
		const projectSlug = extractProjectSlug(message);

		const { context } = await getRelevantContext(
			message,
			6,
			intent,
			projectSlug
		);

		// ต่อ static context เพิ่มตาม intent
		let finalContext = context;
		if (intent === "skill") {
			finalContext += `\n\n[Skills Summary]\n${SKILLS_CONTEXT}`;
		}

		const systemPrompt = `
You are an AI assistant for ${EN_NAME}'s portfolio website.

GOAL
- Help visitors understand ${EN_NAME}'s skills, tech stack, projects, and the tools he uses.
- Always stay faithful to the provided portfolio context.

USER LANGUAGE
- The user is currently writing in ${userIsThai ? "Thai" : "English"}.
- Answer in the same language as the user.

NAME RULES
- The owner's English name is "${EN_NAME}".
- The correct Thai name is "${TH_NAME}".
- When answering in Thai, ALWAYS refer to him as "${TH_NAME}".
- NEVER use the misspelled form "ชนวิน", "ชนาวิน" or any shortened/alternative spelling.

INTENT
- The detected high-level intent for the latest question is: ${intent.toUpperCase()}.

DEFINITIONS
- "Skills" / "สกิล" / "ทักษะ" / "ความสามารถ":
  programming languages, frameworks, libraries, technologies, and relevant tools Chanawin can use.
- "Projects" / "โปรเจกต์" / "โปรเจค" / "ผลงาน":
  web applications or sites Chanawin has built, including their goals and tech stacks.
- "Tools" / "เครื่องมือ":
  design tools, icon/background/font resources, VS Code extensions, and other utilities Chanawin uses in his workflow.
- External websites such as BGJar, SVGL, icon libraries, and font sites are tools/resources, not core skills.

ANSWERING RULES
1. Use ONLY information that appears in the provided CONTEXT about Chanawin, his skills, tools, and projects.
2. Respect the detected INTENT:
   - If intent = SKILL:
     - Summarise Chanawin's skills using the skills summary and relevant context.
     - Answer as a structured bullet list with sections such as:
       - Languages
       - Frontend / UI
       - Backend / Runtime
       - Database / Backend services
       - Tools & Others
   - If intent = PROJECT:
     - Focus on project-related context.
     - If the question is general, list 2–4 key projects.
     - For each project, include:
       - Project name
       - 1–2 sentence summary
       - Tech stack (only technologies mentioned in the context)
     - If the user mentions a specific project name (e.g. "Prioritask"), prioritise that project and give a concise summary + tech stack.
   - If intent = TOOL:
     - Focus on tools Chanawin uses:
       - Design tools (e.g. Figma)
       - Icon / illustration / background / font resources
       - VS Code extensions or other developer tools
     - Briefly explain what each tool is for and why it's useful.
   - If intent = OTHER:
     - Answer based on the CONTEXT and general portfolio information.

3. Never treat BGJar, SVGL, icon or font sites as the main "skills". They are tools/resources.
4. If the CONTEXT does not clearly contain the answer, say that the portfolio does not specify this,
   and avoid inventing technologies, tools, or projects.
5. Be friendly and concise. Prefer 3–8 bullet points or 1–3 short paragraphs.
`;

		const userPrompt = `
You will answer a visitor's question about Chanawin using the CONTEXT below.

STEP 1 — Understand intent
- The pre-detected intent is: ${intent}.
- Double-check by reading the user's question (which may be in Thai or English).

STEP 2 — Select relevant context
- From CONTEXT, mentally select only the parts that are clearly related to that intent.
- Ignore unrelated examples, decorative assets, icon/background/font websites unless the user explicitly asks about tools/resources.

STEP 3 — Answer
- Use the same language as the user.
- If the question is about skills/tech stack:
  - Answer with a clear bullet list grouped into sections (Languages, Frontend / UI, Backend / Runtime, Database / Backend services, Tools & Others).
- If the question is about projects:
  - List the relevant projects (or the specific one asked) with a short summary and their tech stack.
- If the question is about tools:
  - List the relevant tools/resources and explain their use briefly.
- For other questions, answer in 1–3 short paragraphs or 3–8 bullet points.
- If something is not specified in CONTEXT, clearly say that the portfolio does not provide that information.

USER QUESTION:
${message}

CONTEXT (from Chanawin's portfolio, projects, tools, etc.):
${finalContext}

Now write the final answer for the user.
`;

		const result = await streamText({
			model: openaiModel("gpt-3.5-turbo"),
			system: systemPrompt,
			messages: [
				{
					role: "user",
					content: userPrompt,
				},
			],
			temperature: 0.15,
		});

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
