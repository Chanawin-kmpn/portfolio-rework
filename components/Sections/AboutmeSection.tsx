import { useTheme } from '@/context/ThemeProvider';
import Image from 'next/image';
import React from 'react';

const AboutmeSection = () => {
	const { mode } = useTheme();
	return (
		<div className="flex-column items-center md:p-16">
			<div className="max-md:flex-column flex w-full items-center justify-center gap-16">
				<div className="flex-column items-center justify-center gap-8 self-start md:gap-16">
					<h2 className="h2-bold md:self-start">About me</h2>
					<div className="aspect-square w-fit overflow-hidden rounded-full border-2 border-dark-200 dark:border-light-800 md:hidden">
						<Image
							src="/assets/images/chanawin-protrait.webp"
							width={300}
							height={300}
							className="size-[300px] object-cover object-top md:size-[350px]"
							sizes="(min-width: 768px) 350px, 300px"
							alt="Chanawin Protrait"
						/>
					</div>
					<div className="flex-column max-w-[898px] gap-6 md:gap-8">
						<p className="paragraph-medium">
							Hello there! I’m Chanawin Kamolpanus you can call me Pond who
							likes and enjoys creating things with creative design and solving
							problem.
						</p>
						<p className="paragraph-medium">
							First of all I’m want to tell that I’m graduate from Silpakorn
							University department of electrical engineering and this is my
							story that what make me want to become Front-end developer.
						</p>
						<p className="paragraph-medium">
							My first experience with programming was in my first year at
							university, coding in C++ for an Arduino. At that time, I still
							felt indifferent about programming.{' '}
						</p>
						<p className="paragraph-medium">
							In my last year I had the opportunity to participate in a program
							of my department. On the topic of creating a Web Application using
							HTML, CSS, JavaScript, Bootstrap and PHP.
						</p>
						<p className="paragraph-medium">
							After graduated from university I decided to participate in
							Generation's Junior Software developer Bootcamp for changing my
							career path and learn about technical skill and soft skill that
							suit for this career.
						</p>
					</div>
				</div>
				<div className="flex-column gap-16 max-md:hidden">
					<div className="aspect-square w-fit overflow-hidden rounded-full border-2 border-dark-200 dark:border-light-800">
						<Image
							src="/assets/images/chanawin-protrait.webp"
							width={300}
							height={300}
							className="size-[300px] object-cover object-top md:size-[350px]"
							sizes="(min-width: 768px) 350px, 300px"
							alt="Chanawin Protrait"
						/>
					</div>
					<div>
						<Image
							src={`/assets/images/backgrounds/${mode}-about-bg.webp`}
							width={350}
							height={482}
							alt="About me background"
							unoptimized={true}
							className="max-md:hidden"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutmeSection;
