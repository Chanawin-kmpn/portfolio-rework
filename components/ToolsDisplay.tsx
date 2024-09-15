import React from 'react';
import ToolCard from './Card/ToolCard';
import { ToolsDisplayProps } from '@/types/types';

const ToolsDisplay: React.FC<ToolsDisplayProps> = ({ tools }) => {
	return (
		<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
			<ToolCard tools={tools} />
		</div>
	);
};

export default ToolsDisplay;
