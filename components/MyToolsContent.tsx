'use client';

import React, { useEffect, useState } from 'react';
import myToolsData from '@/data/myTools.json';
import FilterHeading from '@/components/FilterHeading';
import { useRouter, useSearchParams } from 'next/navigation';
import { Category, MyToolsData, Tool } from '@/types/types';
import CategoriesFilter from '@/components/CategoriesFilter';
import ToolsDisplay from '@/components/ToolsDisplay';

const MyToolsContent = () => {
	const router = useRouter();
	const searchParams = useSearchParams();

	const [categories, setCategories] = useState<Category[]>([]);
	const [allTools, setAllTools] = useState<Tool[]>([]);
	const [filteredTools, setFilteredTools] = useState<Tool[]>([]);
	const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
	const [recommendedOnly, setRecommendedOnly] = useState(false);

	const handleFilter = (
		newSelectedCategories: string[],
		newRecommendedOnly: boolean
	) => {
		setSelectedCategories(newSelectedCategories);
		setRecommendedOnly(newRecommendedOnly);

		// Update URL query
		const params = new URLSearchParams(searchParams);
		if (newSelectedCategories.length > 0) {
			params.set('categories', newSelectedCategories.join(','));
		} else {
			params.delete('categories');
		}
		params.set('recommended', newRecommendedOnly.toString());

		// Use router.push with the updated search params
		router.push(`${window.location.pathname}?${params.toString()}`);

		let filtered = allTools;

		if (newRecommendedOnly) {
			filtered = filtered.filter((tool) => tool.recommend); //If recommended true just return only filter item that hame recommed true
		}

		if (newSelectedCategories.length > 0) {
			filtered = filtered.filter((tool) =>
				newSelectedCategories.includes(tool.category)
			); //Return array of filtered which item in filtered was included in newSelectedCategories
		}

		filtered.sort((a, b) => {
			if (a.category !== b.category) {
				return (
					newSelectedCategories.indexOf(a.category) -
					newSelectedCategories.indexOf(b.category)
				);
			}
			if (a.recommend === b.recommend) return 0;
			return a.recommend ? -1 : 1;
		});

		setFilteredTools(filtered);
	};

	useEffect(() => {
		const processToolsData = () => {
			const data = myToolsData as MyToolsData;
			const categories = data.categories;
			const tools = categories.flatMap((category) =>
				category.tools.map((tool) => ({
					...tool,
					category: category.category_name,
				}))
			);

			// Get categories from URL query
			const categoriesFromQuery =
				searchParams.get('categories')?.split(',').filter(Boolean) || [];

			// Get recommended filter from URL query
			const recommendedFromQuery = searchParams.get('recommended') === 'true';

			// Set all states at once
			setCategories(categories);
			setAllTools(tools);
			setSelectedCategories(categoriesFromQuery);
			setRecommendedOnly(recommendedFromQuery);

			// Apply filter
			let filtered = tools; //Define filtered to all tools

			if (recommendedFromQuery) {
				filtered = filtered.filter((tool) => tool.recommend);
			}

			if (categoriesFromQuery.length > 0) {
				filtered = filtered.filter((tool) =>
					categoriesFromQuery.includes(tool.category)
				);
			}

			filtered.sort((a, b) => {
				if (a.category !== b.category) {
					return (
						categoriesFromQuery.indexOf(a.category) -
						categoriesFromQuery.indexOf(b.category)
					);
				}
				if (a.recommend === b.recommend) return 0;
				return a.recommend ? -1 : 1;
			});

			setFilteredTools(filtered);
		};

		processToolsData();
	}, [searchParams]);

	return (
		<div className="flex-column w-full gap-8">
			<CategoriesFilter
				categories={categories}
				onFilter={handleFilter}
				initialSelected={selectedCategories}
				initialRecommended={recommendedOnly}
			/>
			<div className="invert-bg h-[2px] w-full border-r-2 border-black" />
			<FilterHeading selectedCategories={selectedCategories} />
			<ToolsDisplay tools={filteredTools} />
		</div>
	);
};

export default MyToolsContent;
