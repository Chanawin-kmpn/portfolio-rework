import { techStackData } from '@/constants';
import { useTheme } from '@/context/ThemeProvider';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface Project {
	id: number;
	title: string;
	iconProject: string;
	imgProject: string;
	description: string;
	route: string;
	stack: (string | number)[];
	// เพิ่ม properties อื่นๆ ตามที่คุณมีในข้อมูล project
}

interface Props {
	project: Project;
}

const ProjectCard = ({ project }: Props) => {
	const { mode } = useTheme();
	return (
		<div className="flex-column max-md:card-shadow text-dark200_light800 relative max-w-[668px] snap-center rounded-[10px]">
			<div className="h-[200px] w-[250px] overflow-hidden rounded-t-[10px] md:size-full  md:rounded-b-[10px]">
				<Image
					src={project.imgProject}
					width={668}
					height={668}
					alt="Project image"
					className="h-[200px] w-[250px] object-cover md:size-full"
				/>
			</div>
			<div className="flex-column bg-project-detail gap-4 p-4 max-md:rounded-b-[10px] md:absolute md:right-0 md:h-full md:w-[267px]">
				<div className="flex-column gap-2">
					<div className="flex items-center justify-between">
						<h4 className="h4-bold">{project.title}</h4>
						<Image
							src={project.iconProject}
							width={32}
							height={32}
							alt="Project icon"
							className="rounded-full"
						/>
					</div>
					<p className="small-regular">{project.description}</p>
				</div>
				<div className="flex-column gap-2 md:flex-1">
					<div className="flex flex-wrap justify-between md:justify-start md:gap-5">
						{project.stack.map((tech, index) => (
							<Image
								src={`/assets/icons/skills/${techStackData[tech].theme ? `${mode}-` : ''}${techStackData[tech].imgSkill}`}
								width={24}
								height={24}
								alt={`${techStackData[tech]} icon`}
								key={index}
								className="object-cover md:size-[40px]"
							/>
						))}
					</div>
					<Link
						href={project.route}
						className="body-medium flex items-center gap-2 md:mt-auto"
					>
						More Detail
						<Image
							src={`/assets/icons/${mode}-arrow.svg`}
							width={24}
							height={24}
							alt="Arrow"
						/>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
