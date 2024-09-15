import { FilterHeadingProps } from '@/types/types';
import React from 'react';

const FilterHeading: React.FC<FilterHeadingProps> = ({
	selectedCategories,
}) => {
	const uniqueCategories = new Set(
		selectedCategories.map(
			(category) => category.slice(0, 1).toUpperCase() + category.slice(1)
		)
	);

	const headingText =
		selectedCategories.length > 0
			? `Categories: ${Array.from(uniqueCategories).join(', ')}`
			: 'All Categories';

	return <h1 className="h2-bold">{headingText}</h1>;
};

export default FilterHeading;
