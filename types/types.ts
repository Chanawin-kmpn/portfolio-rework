import { techStackData } from '@/constants';
import { ReactNode } from 'react';

export interface ProjectProp {
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
	onFilter: (selectedCategories: string[]) => void;
	initialSelected: string[];
}
