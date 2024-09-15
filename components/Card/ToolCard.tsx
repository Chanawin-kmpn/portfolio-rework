import { ToolsDisplayProps } from '@/types/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import RecommandTag from '../RecommandTag';
import { link } from 'fs';

const ToolCard: React.FC<ToolsDisplayProps> = ({ tools }) => {
	return (
		<>
			{tools.map((tool) => (
				<div
					key={tool.name}
					className="flex-column card-bg relative gap-4 rounded-lg border border-dark-200 p-4 shadow-md transition-transform hover:scale-105 dark:border-light-800"
				>
					{tool.recommend && <RecommandTag />}
					<div className="flex items-center justify-between">
						<Image
							src={`/assets/icons/tools/${tool.tag}-icon.png`}
							width={40}
							height={40}
							alt={`${tool.tag}-icons`}
						/>
						<Link
							href={tool.url}
							target="_blank"
							className="z-20"
							aria-label={`Access to ${tool.name} website`}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="text-dark200_light800 size-8"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
								/>
							</svg>
						</Link>
					</div>

					<div className="text-dark200_light800">
						<p className="paragraph-bold font-semibold">{tool.name}</p>
						<p className="text-sm text-gray-600">{tool.category}</p>
						<p className="small-regular mt-2">{tool.description}</p>
					</div>
				</div>
			))}
		</>
	);
};

export default ToolCard;
