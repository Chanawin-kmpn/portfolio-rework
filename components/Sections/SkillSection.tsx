import { mySkills } from "@/constants";
import { useTheme } from "@/context/ThemeProvider";
import Image from "next/image";
import React from "react";

const SkillSection = () => {
	const { mode } = useTheme();

	return (
		<>
			<div
				className="relative max-xl:hidden"
				style={{ width: "423px", height: "1024px", gridColumn: "1/4" }}
			>
				<Image
					src={`/assets/images/backgrounds/${mode}-skill-bg.webp`}
					alt="Skill background"
					unoptimized={true}
					fill
					style={{ objectFit: "contain" }}
				/>
			</div>
			<div
				className="flex-column max-w-[953px] items-center gap-8 xl:gap-16 xl:py-16 xl:pr-16"
				style={{ gridColumn: "4/-1" }}
			>
				<h2 className="h2-bold xl:self-end">My Skills</h2>
				<div className="flex-column gap-8 xl:gap-16">
					<p className="text-dark200_light800 paragraph-medium">
						I learned writing language from various sources such as Documents,
						Online Courses, Youtube, Online platform and Bootcamp. So these are
						the skills I learned that are used in the real-world scenarios and
						application.
					</p>
					<ul className="columns-2 gap-8 xl:columns-3">
						{mySkills.map((skill, index) => (
							<li
								key={index}
								className="text-dark200_light800 paragraph-medium mb-8"
							>
								{index + 1}.{skill.skill}
							</li>
						))}
					</ul>
					<ul className="skill-tech-stack">
						{mySkills.map((skill) => (
							<li
								key={skill.skill}
								className="text-dark200_light800 relative size-20 max-xl:size-[50px]"
							>
								<Image
									src={`/assets/icons/skills/${skill.theme ? `${mode}-` : ""}${skill.imgSkill}`}
									fill
									alt={`${skill.skill} icon`}
									style={{ objectFit: "contain" }}
								/>
							</li>
						))}
					</ul>
				</div>
			</div>
		</>
	);
};

export default SkillSection;
