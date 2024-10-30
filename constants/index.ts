import { SkillProps } from '@/types/types';

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
		route: 'skills',
		label: 'Skills',
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

export const techStackData: { [key: string]: Omit<SkillProps, 'skill'> } = {
	html: { imgSkill: 'html.svg' },
	css: { imgSkill: 'css.svg' },
	javascript: { imgSkill: 'javascript.svg' },
	typescript: { imgSkill: 'typescript.svg' },
	tailwindcss: { imgSkill: 'tailwindcss.svg' },
	styledComponents: { imgSkill: 'styled-components.svg' },
	shadcn: { imgSkill: 'shadcn.svg' },
	nodejs: { imgSkill: 'nodejs.svg' },
	express: { imgSkill: 'express.svg', theme: true },
	react: { imgSkill: 'react.svg' },
	nextjs: { imgSkill: 'nextjs.svg', theme: true },
	mongodb: { imgSkill: 'mongodb.svg' },
	figma: { imgSkill: 'figma.svg' },
	git: { imgSkill: 'git.svg', theme: true },
	vscode: { imgSkill: 'vscode.svg' },
};

export const mySkills: SkillProps[] = [
	{ skill: 'HTML', ...techStackData.html },
	{ skill: 'CSS', ...techStackData.css },
	{ skill: 'JavaScript', ...techStackData.javascript },
	{ skill: 'TypeScript', ...techStackData.typescript },
	{ skill: 'TailwindCss', ...techStackData.tailwindcss },
	{ skill: 'shadcn/ui', ...techStackData.shadcn },
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

// interface ProjectCard {
// 	id: number;
// 	title: string;
// 	iconProject: string;
// 	imgProject: string;
// 	description: string;
// 	stack: (keyof typeof techStackData)[];
// 	route: string;
// }

// export const projectCards: ProjectCard[] = [
// 	{
// 		id: 1,
// 		title: 'Project 1',
// 		iconProject: 'https://fakeimg.pl/32/',
// 		imgProject: 'https://fakeimg.pl/668/',
// 		description: '" A web application that build from scratch "',
// 		stack: [
// 			'react',
// 			'nodejs',
// 			'express',
// 			'tailwindcss',
// 			'styledComponents',
// 			'mongodb',
// 			'git',
// 		],
// 		route: 'projects/project1',
// 	},
// 	{
// 		id: 2,
// 		title: 'Project 2',
// 		iconProject: 'https://fakeimg.pl/32/',
// 		imgProject: 'https://fakeimg.pl/668/',
// 		description: 'A web application that build from scratch',
// 		stack: ['react'],
// 		route: 'projects/project2',
// 	},
// 	{
// 		id: 3,
// 		title: 'Project 3',
// 		iconProject: 'https://fakeimg.pl/32/',
// 		imgProject: 'https://fakeimg.pl/668/',
// 		description: 'A web application that build from scratch',
// 		stack: ['react', 'express'],
// 		route: 'projects/project3',
// 	},
// ];

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
