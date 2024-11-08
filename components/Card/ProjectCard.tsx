import { techStackData } from '@/constants';
import { useTheme } from '@/context/ThemeProvider';
import { ProjectProp } from '@/types/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Button } from '../ui/button';

interface Props {
	project: ProjectProp;
}

const ProjectCard: React.FC<Props> = ({ project }) => {
	const { mode } = useTheme();
	return (
		<div className="flex-column max-xl:card-shadow text-dark200_light800  relative min-h-[448px] max-w-[668px] snap-center rounded-[10px] xl:aspect-square">
			<div className="h-[200px] w-[250px] overflow-hidden rounded-t-[10px] xl:size-full xl:rounded-b-[10px]">
				<Image
					src={project.heroImage}
					width={668}
					height={668}
					alt="Project image"
					className="h-[200px] w-[250px] object-cover transition-transform duration-300 hover:scale-105 xl:size-full xl:object-cover"
				/>
			</div>
			<div className="bg-project-detail flex-column flex-1 gap-4 p-4 max-xl:rounded-b-[10px] xl:absolute xl:right-0 xl:h-full xl:w-[267px]">
				<div className="flex-column gap-2">
					<p className="project-name">{project.name}</p>
					<p className="small-regular">{project.description}</p>
				</div>
				<div className="flex-column mt-auto gap-2 xl:flex-1">
					<div className="flex flex-wrap justify-between xl:justify-start xl:gap-5">
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
						variant="ghost"
						className={`${
							project.status === 'incomplete' && 'cursor-not-allowed'
						} bg-none xl:mt-auto`}
						asChild
					>
						{project.status === 'incomplete' ? (
							<span className="group flex items-center gap-2 text-xl">
								More Detail
								<Image
									src={`/assets/icons/${mode}-arrow.svg`}
									width={24}
									height={24}
									alt="Arrow"
									className="text-dark-200 transition-transform duration-300"
								/>
							</span>
						) : (
							<Link
								href={`/projects/${project.id}`}
								className="group flex items-center gap-2 text-xl"
							>
								More Detail
								<Image
									src={`/assets/icons/${mode}-arrow.svg`}
									width={24}
									height={24}
									alt="Arrow"
									className="text-dark-200 transition-transform duration-300 group-hover:translate-x-2"
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
