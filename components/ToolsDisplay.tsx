import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ToolCard from './Card/ToolCard';

interface Tool {
	name: string;
	url: string;
	description: string;
	recommend: boolean;
	tag: string;
	category: string;
}

interface ToolsDisplayProps {
	tools: Tool[];
}

const ToolsDisplay: React.FC<ToolsDisplayProps> = ({ tools }) => {
	return (
		<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
			<ToolCard tools={tools} />
		</div>
	);
};

export default ToolsDisplay;
