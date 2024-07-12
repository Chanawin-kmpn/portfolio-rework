import { mySkills } from '@/constants';
import { useTheme } from '@/context/ThemeProvider';
import Image from 'next/image';
import React from 'react';

const SkillSection = () => {
	const { mode } = useTheme();
	return (
		<div className="flex-column items-center gap-16 md:flex-row ">
			<div className="max-md:hidden ">
				<Image
					src={`/assets/images/backgrounds/${mode}-skill-bg.webp`}
					width={423}
					height={1024}
					alt="Skill background"
					unoptimized={true}
				/>
			</div>
			<div className="flex-column max-w-[953px] items-center gap-8 md:gap-16 md:py-16 md:pr-16">
				<h2 className="h2-bold md:self-end">My SKill</h2>
				<div className="flex-column gap-8 md:gap-16 ">
					<p className="paragraph-medium text-dark200_light800">
						I learned writing language from various sources such as Documents,
						Online Courses, Youtube, Learning website and Bootcamp. So these are
						the skills I learned that are used in the real-world scenarios and
						application.
					</p>
					<ul className="columns-2 gap-8 md:columns-3">
						{mySkills.map((skill, index) => (
							<li
								key={index}
								className="paragraph-medium text-dark200_light800 mb-8"
							>
								{index + 1}.{skill.skill}
							</li>
						))}
					</ul>
					<ul className="flex flex-wrap gap-4 md:gap-12">
						{mySkills.map((skill) => (
							<li key={skill.skill} className="text-dark200_light800">
								<Image
									src={`/assets/icons/skills/${skill.theme ? `${mode}-` : ''}${skill.imgSkill}`}
									width={80}
									height={80}
									alt={`${skill.skill} icon`}
									className="max-md:aspect-square max-md:w-[50px]"
								/>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default SkillSection;
