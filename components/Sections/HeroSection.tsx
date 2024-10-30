import { useTheme } from '@/context/ThemeProvider';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import SocialLink from '../SocialLink';

const HeroSection = () => {
	const { mode } = useTheme();
	return (
		<div className="flex-column items-start justify-start gap-16 xl:mt-2 xl:flex xl:size-full xl:flex-row 2xl:mt-16 ">
			<Image
				src={`/assets/images/backgrounds/${mode || 'light'}-hero-bg.webp`}
				width={532}
				height={887}
				alt="Hero background"
				unoptimized={true}
				className="max-xl:hidden"
				priority={true}
			/>
			<div className="flex-column w-full gap-12 py-1 xl:gap-44 xl:py-16">
				<div className="flex-column gap-44 xl:gap-8">
					<div className="flex-column gap-8">
						<h1 className="h1-bold xl:h1-bold text-dark200_light800">
							Hi, <span className="inline-block animate-waveHand">👋</span>{' '}
							<br /> I'm Chanawin
						</h1>
						<h1 className="h1-outline ">Frontend Developer</h1>
						<p className="body-medium text-dark200_light800">
							I’m passionate about crafting high-quality websites with custom
							designs and pixel-perfect precision.
						</p>
					</div>
					<div className="mt-auto xl:mt-0">
						<Link
							href="https://drive.google.com/file/d/10GccFwt5qwXSpqnqILcOgv4P87tvYin1/view?usp=sharing"
							target="_blank"
							className="border-light800_dark200 text-dark200_light800 body-semibold flex w-fit items-center gap-2 rounded-[10px] border-2 px-2 py-4 shadow-[-5px_5px_0_#121212] transition hover:translate-x-[-5px] hover:translate-y-[5px] hover:shadow-[0_0_0] dark:shadow-[-5px_5px_0_#e0e0e2] hover:dark:shadow-[0_0_0] "
						>
							Download CV
							<Image
								src={`/assets/icons/${mode}-download.svg`}
								width={32}
								height={32}
								alt="Download icon"
							/>
						</Link>
					</div>
				</div>
				<SocialLink direction="row" />
			</div>
		</div>
	);
};

export default HeroSection;
