import React from 'react';
import { Skeleton } from '../ui/skeleton';
import { projects } from '@/data/projects';

const ProjectLoading = () => {
	return (
		<div className="flex-column text-dark200_light800 md:invert-text items-center gap-8 md:self-end">
			<h2 className="h2-bold">My Project</h2>
			<div className="flex w-full flex-col-reverse gap-8 md:flex-row md:gap-16">
				<div className="md:flex-column flex h-fit snap-x snap-mandatory gap-8 overflow-auto p-4 md:p-0">
					{projects.map((project) => (
						<Skeleton className="mx-auto h-[448px] min-w-[250px] md:size-[668px]" />
					))}
				</div>
				<Skeleton className="h-[220px] w-[580px] max-md:w-full" />
			</div>
		</div>
	);
};

export default ProjectLoading;
