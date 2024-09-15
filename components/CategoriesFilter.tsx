import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Category } from '@/app/(root)/myTools/page';

interface CategoriesFilterProps {
	categories: Category[];
	onFilter: (selectedCategories: string[]) => void;
	initialSelected: string[];
}

const CategoriesFilter: React.FC<CategoriesFilterProps> = ({
	categories,
	onFilter,
	initialSelected,
}) => {
	const [selectedCategories, setSelectedCategories] =
		useState<string[]>(initialSelected);

	useEffect(() => {
		setSelectedCategories(initialSelected);
	}, [initialSelected]);

	const handleCategoryChange = (categoryName: string) => {
		const updatedCategories = selectedCategories.includes(categoryName)
			? selectedCategories.filter((c) => c !== categoryName)
			: [...selectedCategories, categoryName];

		setSelectedCategories(updatedCategories);
		onFilter(updatedCategories);
	};

	return (
		<div className="flex flex-col gap-4">
			<h2 className="h1-bold text-dark200_light800 mb-2">Categories</h2>
			<div className="flex flex-wrap gap-2">
				{categories.map((category) => (
					<label
						key={category.tag}
						className={`text-dark200_light800 flex cursor-pointer items-center gap-2 rounded-full border border-dark-200 p-2 transition-colors duration-200 dark:border-light-800 ${
							selectedCategories.includes(category.category_name)
								? 'invert-text bg-[#181616] dark:bg-white'
								: ' bg-white text-gray-700 hover:bg-gray-300 dark:bg-[#181616]'
						}`}
					>
						<input
							type="checkbox"
							checked={selectedCategories.includes(category.category_name)}
							onChange={() => handleCategoryChange(category.category_name)}
							className="sr-only" // This hides the checkbox visually but keeps it accessible
						/>
						<Image
							src={`/assets/icons/tools/${category.tag}-icon.png`}
							width={40}
							height={40}
							alt={`${category.tag}-icons`}
						/>
						{category.category_name}
					</label>
				))}
			</div>
		</div>
	);
};

export default CategoriesFilter;
