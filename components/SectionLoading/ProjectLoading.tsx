import React from 'react';
import { Skeleton } from '../ui/skeleton';
import { projects } from '@/data/projects';

const ProjectLoading = () => {
	return (
		<div className="flex-column text-dark200_light800 xl:invert-text items-center gap-8 xl:self-end">
			<h2 className="h2-bold">My Project</h2>
			<div className="flex w-full flex-col-reverse gap-8 xl:flex-row xl:gap-16">
				<div className="xl:flex-column flex h-fit snap-x snap-mandatory gap-8 overflow-auto p-4 xl:p-0">
					{projects.map((project) => (
						<Skeleton className="mx-auto h-[448px] min-w-[250px] xl:size-[668px]" />
					))}
				</div>
				<Skeleton className="h-[220px] w-[580px] max-xl:w-full" />
			</div>
		</div>
	);
};

export default ProjectLoading;
