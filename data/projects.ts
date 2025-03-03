import { techStackData } from '@/constants';
import { ProjectProp } from '@/types/types';

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
			'typescript',
			'nextjs',
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

		problemsAndThought: {
			problems: {
				title: 'Problems',
				list: [
					{
						title: 'Limited Product Showcase',
						descriptions: [
							'Lack of channels to demonstrate product quality and standards',
							'Customers unable to clearly see product details and quality',
							'Need space to display various certification standards',
						],
					},
					{
						title: 'Brand Identity Communication',
						descriptions: [
							'Need to establish trust as a family business',
							'Lack of company history and story presentation',
							'Need to communicate corporate values and vision',
						],
					},
					{
						title: 'Service Visibility',
						descriptions: [
							'Need to advertise company services, especially as a manufacturing representative',
							'Lack of channels to present manufacturing capabilities',
							'Need to demonstrate production potential',
						],
					},
					{
						title: 'Product Portfolio Display',
						descriptions: [
							"Need to showcase company's complete product range",
							'Lack of clear product categorization',
							'Need for an efficient product display system',
						],
					},
				],
			},
			thoughtProcess: {
				title: 'Thought Process',
				list: [
					{
						title: 'Research & Analysis',
						descriptions: [
							'Analyzed company accessibility statistics from Google Maps to understand user behavior',
							'Defined clear target audiences to design relevant user experiences',
							'Studied customer needs and expectations',
						],
					},
					{
						title: 'Design Strategy',
						descriptions: [
							'Designed UI/UX reflecting family business values, creating warmth and credibility',
							'Emphasized product quality and standards through organized layouts',
							'Created simple yet professional user experience',
						],
					},
					{
						title: 'Technical Implementation',
						descriptions: [
							'Utilized modern technologies (Next.js, TypeScript) for maximum efficiency',
							'Developed responsive website supporting all devices',
							'Focused on image optimization and SEO for fast loading and efficient searching',
						],
					},
					{
						title: 'Content Strategy',
						descriptions: [
							'Organized information for easy access and systematic presentation',
							'Presented company story through engaging design',
							'Clearly displayed production capabilities and portfolio',
						],
					},
				],
			},
		},
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
		screenshots: [
			'homepage',
			'productpage',
			'servicepage',
			'aboutpage',
			'contactpage',
		],
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
		problemsAndThought: {
			problems: {
				title: 'Problems title',
				list: [
					{
						title: 'List title',
						descriptions: ['List Descriptions'],
					},
				],
			},
			thoughtProcess: {
				title: 'Thought Process title',
				list: [
					{
						title: 'List title',
						descriptions: ['List Descriptions'],
					},
				],
			},
		},
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
		slug: 'learn-css-thai',
		name: 'Project 3',
		description: 'Description of Project 3',
		createdAt: '2023-05-01',
		status: 'incomplete',
		stack: ['react', 'nextjs', 'tailwindcss'],
		liveDemo: 'https://project3-demo.com',
		heroImage: 'https://fakeimg.pl/1312x736/',
		purpose: 'Purpose and goal of Project 3',
		objectives: ['Objectives'],
		keyFeatures: ['Key Features'],
		expectedBenefits: ['Expected Benefites'],
		webStackExplanation: ['Detailed explanation of web stack for Project 3'],
		problemsAndThought: {
			problems: {
				title: 'Problems title',
				list: [
					{
						title: 'List title',
						descriptions: ['List Descriptions'],
					},
				],
			},
			thoughtProcess: {
				title: 'Thought Process title',
				list: [
					{
						title: 'List title',
						descriptions: ['List Descriptions'],
					},
				],
			},
		},
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
