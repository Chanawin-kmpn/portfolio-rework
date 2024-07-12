import { projectCards } from '@/constants';
import Image from 'next/image';
import React from 'react';
import ScrollLink from '../ScrollLink';
import ProjectCard from '../Card/ProjectCard';

const ProjectSection = () => {
	return (
		<div className="flex-column text-dark200_light800 md:invert-text gap-8">
			<h2 className="h2-bold text-dark200_light800">My Project</h2>
			<div className="flex flex-col-reverse gap-8 md:flex-row md:gap-16">
				<div className="md:flex-column flex h-fit snap-x snap-mandatory gap-8 overflow-auto p-4 md:p-0">
					{projectCards.map((project) => (
						<ProjectCard key={project.id} project={project} />
					))}
				</div>
				<div className="md:flex-column top-[193px] self-start overflow-hidden md:sticky md:gap-16 ">
					<div className="flex-column md:invert-bg md: gap-4 rounded-[10px] md:w-[580px] md:gap-8 md:p-8">
						<h3 className="h3-bold">In every my project.</h3>
						<p className="paragraph-regular">
							I like to spend time honing my skills based on challenges I come
							across online or come up with my own ideas and here are some
							examples of my work.
						</p>
					</div>
					<div className="md:flex-column max-md:hidden">
						<div className="cloud-message">
							<p className="paragraph-regular">
								If you are interesting me please contact me.
							</p>
							<ScrollLink href="contact">Contact me!</ScrollLink>
						</div>

						<Image
							src="/assets/images/chanawin-illustrator.webp"
							width={280}
							height={300}
							alt="Chanawin illustrator"
							className="self-end overflow-hidden"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectSection;
