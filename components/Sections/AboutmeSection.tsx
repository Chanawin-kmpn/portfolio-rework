import { useTheme } from "@/context/ThemeProvider";
import Image from "next/image";
import React from "react";

const AboutmeSection = () => {
	const { mode } = useTheme();
	return (
		<>
			<div className="flex-column col-span-full items-center justify-center gap-8 self-start xl:col-span-4 xl:gap-16 xl:py-16 xl:pl-16">
				<h2 className="h2-bold xl:self-start">About me</h2>
				<div className="aspect-square w-fit overflow-hidden rounded-full border-2 border-dark-200 dark:border-light-800 xl:hidden">
					<Image
						src="/assets/images/chanawin-protrait.png"
						width={300}
						height={300}
						className="size-[300px] object-cover object-top xl:size-[350px]"
						sizes="(min-width: 768px) 350px, 300px"
						alt="Chanawin Protrait"
					/>
				</div>
				<div className="flex-column max-w-[898px] gap-6 xl:gap-8">
					<p className="paragraph-medium">
						Hello, I'm Chanawin Kamolpanus, a passionate software developer with
						a focus on crafting impressive digital experiences. My journey began
						with a foundation in Electronic and Computer System Engineering from
						Silpakorn University, where I developed a keen interest in
						technology and its applications.
					</p>
					<p className="paragraph-medium">
						Since then, I've evolved from working on IoT projects to becoming a
						Front-end Development specialist. My expertise spans HTML, CSS,
						JavaScript, and TypeScript, with proficiency in modern frameworks
						and libraries such as React, Tailwind CSS, and styled-components.
						This skill set allows me to create beautiful, type-safe, and
						user-friendly interfaces that not only look great but also perform
						exceptionally.
					</p>
					<p className="paragraph-medium">
						I'm a firm believer in continuous learning and growth. Currently,
						I'm expanding my skills with Next.js to become a full-stack
						developer, ready to tackle the challenges in the rapidly evolving
						tech landscape.
					</p>

					<p className="paragraph-medium">
						When I'm not coding, you can find me exploring the latest tech
						trends, contributing to open-source projects, or collaborating with
						fellow developers to push the boundaries of what's possible in web
						development.
					</p>
					<p className="paragraph-medium">
						I'm looking forward to leveraging my skills and passion to create
						valuable, robust solutions and contribute meaningfully to exciting
						projects. Let's connect and build something amazing together!"
					</p>
				</div>
			</div>
			<div
				className="flex-column gap-16 max-xl:hidden"
				style={{ gridColumn: "6/-1" }}
			>
				<div className="aspect-square w-fit overflow-hidden rounded-full border-2 border-dark-200 dark:border-light-800">
					<Image
						src="/assets/images/chanawin-protrait.png"
						width={300}
						height={300}
						className="size-[300px] object-cover object-top xl:size-[350px]"
						sizes="(min-width: 768px) 350px, 300px"
						alt="Chanawin Protrait"
						priority
					/>
				</div>
				<div>
					<Image
						src={`/assets/images/backgrounds/${mode}-about-bg.webp`}
						width={350}
						height={482}
						alt="About me background"
						unoptimized={true}
						className="max-xl:hidden"
					/>
				</div>
			</div>
		</>
	);
};

export default AboutmeSection;
