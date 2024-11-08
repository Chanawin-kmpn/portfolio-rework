import { techStackData } from '@/constants';
import { ReactNode } from 'react';

interface ProblemDetail {
	title: string;
	descriptions: string[];
}

interface ThoughtProcessDetail {
	title: string;
	descriptions: string[];
}

interface LessonDetail {
	title: string;
	points: string[];
}

export interface ProjectProp {
	id: number;
	name: string;
	description: string;
	createdAt: string;
	status: 'complete' | 'incomplete';
	stack: (keyof typeof techStackData)[];
	liveDemo: string;
	heroImage: string;
	purpose: string;
	objectives: string[];
	keyFeatures: string[];
	expectedBenefits: string[];
	webStackExplanation: string[];
	problemsAndThought: {
		problems: {
			title: string;
			list: ProblemDetail[];
		};
		thoughtProcess: {
			title: string;
			list: ThoughtProcessDetail[];
		};
	};
	lessonsLearned: {
		introduction: string;
		lessons: LessonDetail[];
		conclusion: string;
	};
	screenshots: string[];
}

export interface ThemeContextType {
	mode: string;
	setMode: (mode: string) => void;
}

export interface SkillProps {
	skill: string;
	imgSkill: string;
	theme?: boolean;
}

export interface EmailTemplateProps {
	username: string;
	email: string;
	subject: string;
	message: string;
}

export interface DirectionProps {
	direction: string;
}

export interface FilterHeadingProps {
	selectedCategories: string[];
}

export interface ScrollLinkProps {
	href: string;
	isMobile?: boolean;
	isGradient?: boolean;
	children: ReactNode;
}

export interface Tool {
	name: string;
	url: string;
	description: string;
	recommend: boolean;
	tag: string;
	category: string;
}

export interface Category {
	category_name: string;
	tag: string;
	tools: Tool[];
}

export interface MyToolsData {
	categories: Category[];
}

export interface ToolsDisplayProps {
	tools: Tool[];
}

export interface CategoriesFilterProps {
	categories: Category[];
	onFilter: (categories: string[], recommendedOnly: boolean) => void;
	initialSelected: string[];
	initialRecommended: boolean;
}
