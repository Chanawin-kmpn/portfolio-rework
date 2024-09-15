import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { CategoriesFilterProps } from '@/types/types';

const CategoriesFilter: React.FC<CategoriesFilterProps> = ({
	categories,
	onFilter,
	initialSelected,
	initialRecommended,
}) => {
	const [selectedCategories, setSelectedCategories] =
		useState<string[]>(initialSelected);
	const [recommendedOnly, setRecommendedOnly] = useState(false);

	useEffect(() => {
		setSelectedCategories(initialSelected);
		setRecommendedOnly(initialRecommended);
	}, [initialSelected, initialRecommended]);

	const handleCategoryChange = (categoryName: string) => {
		const updatedCategories = selectedCategories.includes(categoryName)
			? selectedCategories.filter((category) => category !== categoryName) //Toggle select category. If category has been in selectedCategories then return filtered array that not include that category name
			: [...selectedCategories, categoryName]; // If category not include in selected Categories then add to array of selectedCategories

		setSelectedCategories(updatedCategories);
		onFilter(updatedCategories, recommendedOnly); // Send updatedCategories and recommendedOnly to filter function
	};

	const handleRecommendedChange = () => {
		const newRecommendedOnly = !recommendedOnly;
		setRecommendedOnly(newRecommendedOnly);
		onFilter(selectedCategories, newRecommendedOnly);
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
							className="sr-only"
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
			<label className="flex cursor-pointer items-center gap-2">
				<input
					type="checkbox"
					checked={recommendedOnly}
					onChange={handleRecommendedChange}
					className="size-5 text-blue-600"
				/>
				<span className="text-dark200_light800">Recommended Only</span>
			</label>
		</div>
	);
};

export default CategoriesFilter;
