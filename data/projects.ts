import { techStackData } from '@/constants';
import { ProjectProp } from '@/types/types';
import { read } from 'fs';
import { use } from 'react';
import { start } from 'repl';

export const projects: ProjectProp[] = [
	{
		id: 1,
		slug: 'pp-freshpork',
		name: 'P.P Freshpork',
		description:
			'P.P Freshpork is a family business website development project aimed at enhancing product accessibility and building trust between customers and the company',
		createdAt: 'October 7, 2024',
		status: 'complete',
		stack: [
			'nextjs',
			'typescript',
			'tailwindcss',
			'shadcn',
			'figma',
			'git',
			'vscode',
		],
		liveDemo: 'https://pp-fresh-pork-rework.vercel.app/',
		heroImage: '/assets/images/project-screenshots/ppfreshpork/heroImage.webp',
		purpose:
			'To develop a professional website for P.P Freshpork, a family-owned fresh pork business, to enhance digital presence and customer engagement.',
		objectives: [
			'Create a user-friendly online platform for customers to access product information',
			'Establish a strong digital presence to increase brand credibility',
			'Improve customer service through digital channels',
			'Expand market reach',
		],
		keyFeatures: [
			'Product catalog with detailed information',
			'Contact information and business hours',
			'About us section highlighting company history and values',
			'Mobile-responsive design',
		],
		expectedBenefits: [
			'Increased customer base',
			'Improved brand visibility',
			'Enhanced customer trust and loyalty',
			'More efficient business operations',
			'Competitive advantage in the digital marketplace',
		],
		webStackExplanation: [
			"P.P Freshpork's website is built using a modern frontend technology stack. The foundation is TypeScript, a powerful programming language that extends JavaScript by adding static type definitions, helping us catch errors early in development and making the code more maintainable and reliable.",
			'The website is developed using Next.js, a React framework that provides essential features like server-side rendering, static site generation, and optimized routing. This ensures fast page loads, excellent SEO performance, and a smooth user experience.',
			'For styling and UI components, I combine TailwindCSS with Shadcn UI. TailwindCSS provides utility-first CSS classes that make it easy to create responsive and customized designs, while Shadcn UI offers a collection of beautifully designed, accessible, and customizable components. This combination allows us to build a professional and consistent user interface efficiently while maintaining high standards of accessibility and user experience.',
		],

		challengesAndProblemSolving: [
			{
				title: 'No guidelines for website layout design',
				solving:
					'This project was designed by me from scratch as a website about product information and manufacturing plants. I studied various websites to determine what sections should be included on each page.',
			},
			{
				title: 'Finding methods to filter products',
				solving:
					'This company has various types of products which posed a problem of how to categorize them. Eventually, I chose to categorize them based on production methods and packaging.',
			},
			{
				title: 'Poor responsive display of products',
				solving:
					'On the product display page, I chose to use Grid for layout to make it easier to implement responsiveness.',
			},
			{
				title: 'Performance issues on product pages with many images to load',
				solving:
					'Modified each image to load lazily so they only load when visible to the user.',
			},
		],
		lessonsLearned: {
			introduction:
				"Throughout the development of P.P Freshpork's website, I gained invaluable experience in end-to-end project development. Here are the key learnings:",
			lessons: [
				{
					title: 'Business Understanding',
					points: [
						'Learned to identify and analyze business problems and requirements',
						'Understood the importance of client communication and expectation management',
						'Gained insights into how traditional businesses transition to digital presence',
					],
				},
				{
					title: 'Project Planning & Design',
					points: [
						'Developed skills in UX/UI design focused on business needs',
						'Learned to structure information architecture for optimal user experience',
						'Practiced creating user flows and wireframes that align with business goals',
					],
				},
				{
					title: 'Technical Development',
					points: [
						'Enhanced proficiency in modern web technologies (Next.js, TypeScript)',
						'Improved understanding of data structure design and implementation',
						'Gained experience in responsive design and mobile-first development',
					],
				},
				{
					title: 'Problem-Solving',
					points: [
						'Developed ability to translate business requirements into technical solutions',
						'Learned to balance aesthetic design with functional requirements',
						'Improved decision-making skills in choosing appropriate technologies',
					],
				},
				{
					title: 'Professional Growth',
					points: [
						'Enhanced project management and time estimation skills',
						'Gained confidence in handling end-to-end project development',
					],
				},
			],
			conclusion:
				'This project has been a comprehensive learning experience, combining business analysis, design thinking, and technical implementation into a cohesive development process.',
		},
		futureDevelopmentPlan: [
			'Add an Admin system to be able to add or remove desired products',
			'Move all product data to an actual Database (currently pulling data from json files)',
			'Upgrade to an E-commerce system',
			'Add a popular product recommendation system',
		],
		screenshots: {
			imageFolder: 'ppfreshpork',
			imageGallery: [
				'homepage',
				'productpage',
				'servicepage',
				'aboutpage',
				'contactpage',
			],
		},
	},
	{
		id: 2,
		slug: 'devflow',
		name: 'DevFlow',
		description:
			'Devflow is a comprehensive Q&A platform inspired by StackOverflow, designed for developers to ask questions, share knowledge, and solve coding challenges. The platform features a robust voting system, view tracking, user reputation, and content filtering capabilities to ensure high-quality technical discussions and community engagement.',
		createdAt: '2023-05-01',
		status: 'incomplete',
		stack: ['nextjs', 'typescript', 'tailwindcss', 'mongodb', 'shadcn'],
		liveDemo: 'https://project2-demo.com',
		heroImage: '/assets/images/project-screenshots/devflow/heroImage.png',
		purpose: 'Purpose and goal of DevFlow',
		objectives: ['Objectives'],
		keyFeatures: ['Key Features'],
		expectedBenefits: ['Expected Benefites'],
		webStackExplanation: ['Detailed explanation of web stack for DevFlow'],
		challengesAndProblemSolving: [
			{
				title: '',
				solving: '',
			},
		],
		lessonsLearned: {
			introduction: 'Lesson Introduction',
			lessons: [
				{
					title: 'Lesson title',
					points: ['Lesson point'],
				},
			],
			conclusion: 'Conclusion',
		},
		futureDevelopmentPlan: [],
		screenshots: {
			imageFolder: 'devflow',
			imageGallery: [
				'https://fakeimg.pl/650/',
				'https://fakeimg.pl/650/',
				'https://fakeimg.pl/650/',
				'https://fakeimg.pl/650/',
				'https://fakeimg.pl/650/',
			],
		},
	},
	{
		id: 3,
		slug: 'learn-css-thai',
		name: 'Learn CSS Thai',
		description:
			'This project is a CSS documentation article created for Thai people who are beginning to learn CSS on their own. The content covers everything from basics to more complex techniques, with examples that can be modified and tested by yourself. It helps reduce language barriers and increases opportunities for website development skills for Thai people, providing a foundation for further study and advancement.',
		createdAt: 'March 3, 2025',
		status: 'complete',
		stack: [
			'typescript',
			'nextjs',
			'tailwindcss',
			'shadcn',
			'mdxjs',
			'figma',
			'git',
			'vscode',
		],
		liveDemo: 'https://learn-css-thai.vercel.app/',
		heroImage:
			'/assets/images/project-screenshots/learn-css-thai/heroImage.png',
		purpose:
			'The Learn CSS Thai project originated from the need to address the lack of modern, easy-to-understand CSS learning resources in Thai language with immediate examples for practice. I found that many students and beginners struggle to learn CSS from existing English documentation. Although I personally support self-learning in English because it opens up vast knowledge and techniques, my goal in creating this project is to help beginners learning CSS to easily access content when starting out, to understand various concepts before they begin searching for techniques or knowledge elsewhere. Nevertheless, I still emphasize and prioritize reading the documentation of that technology.',
		objectives: [
			'To help CSS beginners understand basic content before studying various techniques on their own',
			"To share the author's learning experiences as a guide for readers",
		],
		keyFeatures: [
			'Content in each topic has been arranged appropriately for learning progression',
			'Includes a Code Editor to experiment with different properties to learn their usage',
			'Contains comparative images to visualize differences',
			'Short article content for easy reader comprehension',
			'Supplementary content, techniques, and warnings interspersed throughout the main content',
		],
		expectedBenefits: [
			'Readers can build upon this for their own learning journey',
			'Readers can utilize examples from the articles',
			'Readers gain confidence when starting to learn CSS',
		],
		webStackExplanation: [
			'Learn CSS Thai is built with a modern tech stack, with a focus on fast rendering because it needs to display numerous examples such as Code Editor, Code Block, and Callout Information. Additionally, these displays are divided into Components that accept various Properties to allow customization as needed.',
			'This website is developed with Next.js version 15, the latest version, which helps load components faster and manages SEO excellently. For content display, MDX was chosen for writing and rendering content, as MDX provides convenience in writing content without needing various Element Tags, while also allowing the addition of Interactive Components.',
			'For the website design, I drew inspiration from the TailwindCSS website because it has a clean, simple look. For Layout management, I chose Jun Layout as I had tried it at a Workshop and became interested, so I experimented with it in this project. I also used Shadcn/ui to manage image galleries, various buttons, and for searching different topics.',
		],
		challengesAndProblemSolving: [
			{
				title: 'How to create a CodeEditor',
				solving:
					'Studied from open source projects that allow modifications including the use of various custom hooks for debouncing, dragging both panes, and formatting code in the editor.',
			},
			{
				title: 'Making the Code Editor run best performance',
				solving:
					'Had to customize library loading with Lazy Loading and using debounce for display result.',
			},
			{
				title: 'Managing large amounts of lesson data',
				solving:
					'Developed an efficient MDX file management system and data caching.',
			},
			{
				title: 'How to start writing documentation with MDX',
				solving:
					'Studied what MDX is, the differences between creating regular page content versus writing with MDX, then examined documentation websites of various open source projects before experimenting in my own project.',
			},
			{
				title: 'How to organize and arrange content effectively',
				solving:
					'Studied websites that teach CSS to see how they typically organize their content, then categorized topics into appropriate sections.',
			},
		],
		lessonsLearned: {
			introduction: 'Lesson Introduction',
			lessons: [
				{
					title: 'Creating a Documentation Website',
					points: [
						"In this project, I tried creating a CSS Document website that displays content using MDX for the first time. I learned that when creating this type of website, it's not necessary to write with regular HTML tags.",
					],
				},
				{
					title: 'Learning Code from Various Open Source Projects',
					points: [
						'This project utilized Code Editor and MDX, which were very new to me. I studied working examples and customized them to suit my needs.',
						"From reading other developers' open source code, I learned and saw the benefits of their thought processes in creating components or various custom hooks that could be applied to the Code Editor.",
					],
				},
				{
					title: 'Lessons Learned from Writing Explanatory Content',
					points: [
						"This project was the first time I used my knowledge to write explanations for others to read, which served as a review for myself. I learned that there are still some topics I need to understand better and many things I don't yet know.",
						'I practiced planning content for beginners, determining what should be studied first. I referenced various learning resources combined with my own thoughts from when I was first learning about what would be a good starting point.',
					],
				},
				{
					title: 'Design and Styling',
					points: [
						"In this project, I used TailwindCSS as the CSS framework for styling, along with regular CSS, allowing for flexible customization. I learned that creating classes with TailwindCSS enables very quick styling that's also easy to modify.",
						'For the Layout, I used Jun Layout, a package I had the opportunity to try during a TailwindCSS Layout Workshop at Skooldio. Using it saved me a significant amount of time in managing layouts.',
						'In this project, I tried creating Animated SVG with Lottie, which allowed me to have SVGs that can move, making the website more interesting.',
					],
				},
			],
			conclusion: 'Conclusion',
		},
		futureDevelopmentPlan: [
			'Add error notifications when there are code errors',
			'Add exercises for each chapter',
			'Add fullscreen mode for the CodeEditor',
			'Improve the Homepage design',
			'Add a popular blogs category',
			'Add English language support',
		],
		screenshots: {
			imageFolder: 'learn-css-thai',
			imageGallery: ['coverImage', 'image-1', 'image-2', 'image-3', 'image-4'],
		},
	},
	// Add similar objects for Project 2 and Project 3
];
