import { techStackData } from '@/constants';
import { useTheme } from '@/context/ThemeProvider';
import { ProjectProp } from '@/types/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Button } from '../ui/button';
import clsx from 'clsx';

interface Props {
	project: ProjectProp;
}

const ProjectCard: React.FC<Props> = ({ project }) => {
	const { mode } = useTheme();
	return (
		<div className="flex-column max-xl:card-shadow text-dark200_light800 relative  min-h-[448px] min-w-[300px]  rounded-[10px] border border-dark-200 xl:aspect-square xl:max-w-[668px]">
			<div className="w-full overflow-hidden rounded-t-[10px] max-xl:max-h-[200px] xl:size-full xl:rounded-b-[10px]">
				<Image
					src={project.heroImage}
					width={668}
					height={668}
					alt="Project image"
					className="object-cover object-top transition-transform duration-300 hover:scale-105 xl:size-full "
				/>
			</div>
			<div className="bg-project-detail flex-column flex-1 gap-4 overflow-hidden p-4 max-xl:rounded-b-[10px] xl:absolute xl:right-0 xl:h-full xl:w-[267px] xl:rounded-r-[10px]">
				<div className="flex-column gap-2">
					<p className="project-name">{project.name}</p>
					<p className="small-regular">{project.description}</p>
				</div>
				<div className="flex-column mt-auto gap-2  xl:flex-1">
					<div className="project-tech-stack">
						{project.stack.map((tech, index) => (
							<Image
								src={`/assets/icons/skills/${techStackData[tech]?.theme ? `${mode}-` : ''}${techStackData[tech]?.imgSkill}`}
								width={24}
								height={24}
								alt={`${techStackData[tech]} icon`}
								key={index}
								className="object-cover xl:size-[40px]"
							/>
						))}
					</div>
					<Button
						disabled={project.status === 'incomplete'}
						variant={'ghost'}
						className={clsx(
							'text-dark200_light800 hover:bg-transparent hover:dark:bg-transparent xl:mt-auto'
						)}
						asChild
					>
						{project.status === 'incomplete' ? (
							<span className="group flex items-center gap-2 text-sm">
								Working on this project...
							</span>
						) : (
							<Link
								href={`/projects/${project.slug}`}
								className="group flex items-center gap-2 text-xl"
							>
								More Detail
								<Image
									src={`/assets/icons/${mode}-arrow.svg`}
									width={24}
									height={24}
									alt="Arrow"
									className={clsx(
										`invert-text transition-transform duration-300 `,
										{
											'group-hover:translate-x-2':
												project.status === 'complete',
										}
									)}
								/>
							</Link>
						)}
					</Button>
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
