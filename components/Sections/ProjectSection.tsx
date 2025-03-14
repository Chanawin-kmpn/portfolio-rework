import React from 'react';
import ProjectCard from '../Card/ProjectCard';
import AnimateMessage from '../AnimateMessage';
import { projects } from '@/data/projects';
import { ProjectProp } from '@/types/types';

const ProjectSection = () => {
	return (
		<div className="flex-column text-dark200_light800 xl:invert-text gap-8 xl:p-16">
			<h2 className="h2-bold max-xl:self-center">My Projects</h2>
			<div className="flex flex-col-reverse gap-8 xl:flex-row xl:gap-16">
				<div className="flex-column flex h-fit gap-8 overflow-auto p-4 md:flex-row xl:flex-col xl:p-0">
					{projects.map((project: ProjectProp) => (
						<ProjectCard key={project.id} project={project} />
					))}
				</div>
				<div className="xl:flex-column top-[193px] flex-1 self-start overflow-hidden xl:sticky xl:gap-16 ">
					<div className="flex-column xl:invert-bg xl: gap-4 rounded-[10px] xl:w-[580px] xl:gap-8 xl:p-8">
						<h4 className="h4-bold">In every my project.</h4>
						<p className="paragraph-regular xl:invert-text">
							I enjoy developing my skills through online challenges,
							collaborating with teammates in bootcamps, and pursuing personal
							projects. Here are some examples of my work.
						</p>
					</div>
					<AnimateMessage />
				</div>
			</div>
		</div>
	);
};

export default ProjectSection;
