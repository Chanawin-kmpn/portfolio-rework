import { techStackData } from '@/constants';

export interface Project {
	id: number;
	name: string;
	description: string;
	createdAt: string;
	stack: (keyof typeof techStackData)[];
	liveDemo: string;
	heroImage: string;
	purpose: string;
	webStackExplanation: string;
	problems: string;
	lessonsLearned: string;
	screenshots: string[];
}

export const projects: Project[] = [
	{
		id: 1,
		name: 'Project 1',
		description: 'Description of Project 1',
		createdAt: '2023-05-01',
		stack: ['react', 'nextjs', 'tailwindcss'],
		liveDemo: 'https://project1-demo.com',
		heroImage: 'https://fakeimg.pl/1312x736/',
		purpose: 'Purpose and goal of Project 1',
		webStackExplanation: 'Detailed explanation of web stack for Project 1',
		problems: 'Problems faced and thought process for Project 1',
		lessonsLearned: 'Lessons learned from Project 1',
		screenshots: [
			'https://fakeimg.pl/650/',
			'https://fakeimg.pl/650/',
			'https://fakeimg.pl/650/',
			'https://fakeimg.pl/650/',
			'https://fakeimg.pl/650/',
		],
	},
	{
		id: 2,
		name: 'Project 2',
		description: 'Description of Project 2',
		createdAt: '2023-05-01',
		stack: ['react', 'nextjs', 'tailwindcss'],
		liveDemo: 'https://project2-demo.com',
		heroImage: 'https://fakeimg.pl/1312x736/',
		purpose: 'Purpose and goal of Project 2',
		webStackExplanation: 'Detailed explanation of web stack for Project 2',
		problems: 'Problems faced and thought process for Project 2',
		lessonsLearned: 'Lessons learned from Project 2',
		screenshots: [
			'https://fakeimg.pl/650/',
			'https://fakeimg.pl/650/',
			'https://fakeimg.pl/650/',
			'https://fakeimg.pl/650/',
			'https://fakeimg.pl/650/',
		],
	},
	{
		id: 3,
		name: 'Project 3',
		description: 'Description of Project 3',
		createdAt: '2023-05-01',
		stack: ['react', 'nextjs', 'tailwindcss'],
		liveDemo: 'https://project3-demo.com',
		heroImage: 'https://fakeimg.pl/1312x736/',
		purpose: 'Purpose and goal of Project 3',
		webStackExplanation: 'Detailed explanation of web stack for Project 3',
		problems: 'Problems faced and thought process for Project 3',
		lessonsLearned: 'Lessons learned from Project 3',
		screenshots: [
			'https://fakeimg.pl/650/',
			'https://fakeimg.pl/650/',
			'https://fakeimg.pl/650/',
			'https://fakeimg.pl/650/',
			'https://fakeimg.pl/650/',
		],
	},
	// Add similar objects for Project 2 and Project 3
];
