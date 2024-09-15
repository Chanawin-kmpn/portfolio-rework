'use client';
import React, { useState, useEffect } from 'react';
import CategoriesFilter from '@/components/CategoriesFilter';
import Theme from '@/components/Navbar/Theme';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import ToolsDisplay from '@/components/ToolsDisplay';
import Link from 'next/link';
import myToolsData from '@/data/myTools.json';
import FilterHeading from '@/components/FilterHeading';
import { useRouter, useSearchParams } from 'next/navigation';
import { Category, MyToolsData, Tool } from '@/types/types';

const Page: React.FC = () => {
	const router = useRouter();
	const searchParams = useSearchParams();

	const [categories, setCategories] = useState<Category[]>([]);
	const [allTools, setAllTools] = useState<Tool[]>([]);
	const [filteredTools, setFilteredTools] = useState<Tool[]>([]);
	const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

	useEffect(() => {
		const processToolsData = () => {
			const data = myToolsData as MyToolsData;
			setCategories(data.categories);

			const tools = data.categories.flatMap((category) =>
				category.tools.map((tool) => ({
					...tool,
					category: category.category_name,
				}))
			);
			setAllTools(tools);

			// Get categories from URL query
			const categoriesFromQuery =
				searchParams.get('categories')?.split(',') || [];
			setSelectedCategories(categoriesFromQuery);

			// Apply initial filter based on URL query
			if (categoriesFromQuery.length > 0) {
				const filtered = tools.filter((tool) =>
					categoriesFromQuery.includes(tool.category)
				);
				setFilteredTools(filtered);
			} else {
				setFilteredTools(tools);
			}
		};

		processToolsData();
	}, [searchParams]);

	const handleFilter = (newSelectedCategories: string[]) => {
		setSelectedCategories(newSelectedCategories);

		// Update URL query
		const params = new URLSearchParams(searchParams);
		if (newSelectedCategories.length > 0) {
			params.set('categories', newSelectedCategories.join(','));
		} else {
			params.delete('categories');
		}

		// Use router.push with the updated search params
		router.push(`${window.location.pathname}?${params.toString()}`);

		if (newSelectedCategories.length === 0) {
			setFilteredTools(allTools);
		} else {
			const filtered = allTools.filter((tool) =>
				newSelectedCategories.includes(tool.category)
			);
			setFilteredTools(filtered);
		}
	};

	return (
		<div className="flex-column section-container items-start justify-start gap-8 px-0 py-[22px] xl:size-full xl:gap-16 xl:p-16 ">
			<ScrollToTopButton />
			<div className="border-light800_dark200 flex w-full items-center justify-between border-b-2 ">
				<Link className="body-semibold" href="/">
					Back to main page
				</Link>
				<Theme />
			</div>
			<div className="flex-column w-full gap-8">
				<CategoriesFilter
					categories={categories}
					onFilter={handleFilter}
					initialSelected={selectedCategories}
				/>
				<div className="invert-bg h-[2px] w-full border-r-2 border-black" />
				<FilterHeading selectedCategories={selectedCategories} />
				<ToolsDisplay tools={filteredTools} />
			</div>
		</div>
	);
};

export default Page;
