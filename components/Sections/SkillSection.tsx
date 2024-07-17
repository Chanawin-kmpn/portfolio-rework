import { mySkills } from '@/constants';
import { useTheme } from '@/context/ThemeProvider';
import Image from 'next/image';
import React from 'react';
import SkillLoading from '../SectionLoading/SkillLoading';

const SkillSection = () => {
	const { mode } = useTheme();

	return (
		<div className="flex-column items-center gap-16 md:flex-row ">
			<div
				className="relative max-md:hidden"
				style={{ width: '423px', height: '1024px' }}
			>
				<Image
					src={`/assets/images/backgrounds/${mode}-skill-bg.webp`}
					alt="Skill background"
					unoptimized={true}
					fill
					style={{ objectFit: 'contain' }}
				/>
			</div>
			<div className="flex-column max-w-[953px] items-center gap-8 md:gap-16 md:py-16 md:pr-16">
				<h2 className="h2-bold md:self-end">My SKill</h2>
				<div className="flex-column gap-8 md:gap-16 ">
					<p className="paragraph-medium text-dark200_light800">
						I learned writing language from various sources such as Documents,
						Online Courses, Youtube, Online platform and Bootcamp. So these are
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
							<li
								key={skill.skill}
								className="text-dark200_light800 relative size-20 max-md:size-[50px]"
							>
								<Image
									src={`/assets/icons/skills/${skill.theme ? `${mode}-` : ''}${skill.imgSkill}`}
									fill
									alt={`${skill.skill} icon`}
									style={{ objectFit: 'contain' }}
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
