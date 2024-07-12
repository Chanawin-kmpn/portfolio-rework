export const themes = [
	{ value: 'light', icon: '/assets/icons/sun.svg' },
	{ value: 'dark', icon: '/assets/icons/moon.svg' },
];

export const navLinks = [
	{
		route: 'about',
		label: 'About',
	},
	{
		route: 'skill',
		label: 'Skill',
	},
	{
		route: 'projects',
		label: 'Projects',
	},
	{
		route: 'contact',
		label: 'Contact',
	},
];

interface Skill {
	skill: string;
	imgSkill: string;
	theme?: boolean;
}

export const techStackData: { [key: string]: Omit<Skill, 'skill'> } = {
	html: { imgSkill: 'html.svg' },
	css: { imgSkill: 'css.svg' },
	javascript: { imgSkill: 'javascript.svg' },
	typescript: { imgSkill: 'typescript.svg' },
	tailwindcss: { imgSkill: 'tailwindcss.svg' },
	styledComponents: { imgSkill: 'styled-components.svg' },
	nodejs: { imgSkill: 'nodejs.svg' },
	express: { imgSkill: 'express.svg', theme: true },
	react: { imgSkill: 'react.svg' },
	nextjs: { imgSkill: 'nextjs.svg', theme: true },
	mongodb: { imgSkill: 'mongodb.svg' },
	figma: { imgSkill: 'figma.svg' },
	git: { imgSkill: 'git.svg', theme: true },
	vscode: { imgSkill: 'vscode.svg' },
};

export const mySkills: Skill[] = [
	{ skill: 'HTML', ...techStackData.html },
	{ skill: 'CSS', ...techStackData.css },
	{ skill: 'JavaScript', ...techStackData.javascript },
	{ skill: 'TypeScript', ...techStackData.typescript },
	{ skill: 'TailwindCss', ...techStackData.tailwindcss },
	{ skill: 'styled-component', ...techStackData.styledComponents },
	{ skill: 'Node.js', ...techStackData.nodejs },
	{ skill: 'express', ...techStackData.express },
	{ skill: 'React', ...techStackData.react },
	{ skill: 'Next.js', ...techStackData.nextjs },
	{ skill: 'MongoDb', ...techStackData.mongodb },
	{ skill: 'Figma', ...techStackData.figma },
	{ skill: 'Git', ...techStackData.git },
	{ skill: 'Visual Studio Code', ...techStackData.vscode },
];

interface ProjectCard {
	id: number;
	title: string;
	iconProject: string;
	imgProject: string;
	description: string;
	stack: (keyof typeof techStackData)[];
	route: string;
}

export const projectCards: ProjectCard[] = [
	{
		id: 1,
		title: 'Project 1',
		iconProject: 'https://fakeimg.pl/32/',
		imgProject: 'https://fakeimg.pl/668/',
		description:
			'" LunarFit is a user-friendly web app that helps fitness enthusiasts track workouts, set goals, and monitor progress with an intuitive interface "',
		stack: [
			'react',
			'nodejs',
			'express',
			'tailwindcss',
			'styledComponents',
			'mongodb',
			'git',
		],
		route: '/project1',
	},
	{
		id: 2,
		title: 'Project 2',
		iconProject: 'https://fakeimg.pl/32/',
		imgProject: 'https://fakeimg.pl/668/',
		description: 'lorem',
		stack: ['react'],
		route: '/project2',
	},
	{
		id: 3,
		title: 'Project 3',
		iconProject: 'https://fakeimg.pl/32/',
		imgProject: 'https://fakeimg.pl/668/',
		description: 'lorem',
		stack: ['react', 'express'],
		route: '/project3',
	},
];

export const socialLink = [
	{
		label: 'Github',
		href: 'https://github.com/Chanawin-kmpn',
		socialImg: 'github.svg',
	},
	{
		label: 'LinkedIn',
		href: 'https://www.linkedin.com/in/chanawin-kamolpanus-30422524a/',
		socialImg: 'linkedin.svg',
	},
	{
		label: 'Facebook',
		href: 'https://www.facebook.com/pond.kamolpanas/?locale=th_TH',
		socialImg: 'facebook.svg',
	},
	{
		label: 'Instragram',
		href: 'https://www.instagram.com/qpondp/',
		socialImg: 'instagram.svg',
	},
];
