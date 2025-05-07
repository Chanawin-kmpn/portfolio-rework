'use client';
import React, { useState } from 'react';
import ScrollLink from '../ScrollLink';
import Image from 'next/image';
import Theme from './Theme';
// import Audio from './Audio';
import { useTheme } from '@/context/ThemeProvider';
import { navLinks } from '@/constants';
import Link from 'next/link';
import { projects } from '@/data/projects';

const MobileNav = () => {
	const [isOpen, setIsOpen] = useState(false);
	const { mode } = useTheme();

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="flex-column">
			<button
				onClick={toggleMenu}
				className={`fixed right-4 top-[28.5px] z-50 size-[72px] p-4 ${isOpen ? 'bg-none' : 'invert-bg'} rounded-full`}
			>
				<Image
					src={`/assets/icons/${isOpen ? `${mode}-close-menu.svg` : `${mode === 'dark' ? 'light' : 'dark'}-menu.svg`}`}
					fill
					alt="Mobile menu"
					className="m-auto max-h-10 max-w-10"
				/>
			</button>

			<div
				className={`bg-blur fixed left-0 top-0 size-full gap-32 px-4 py-[22px] ${isOpen ? 'flex-column' : 'hidden'} transition-theme`}
			>
				<div className="flex min-h-[85px] items-center gap-8 ">
					{/* <Audio /> */}
					<Theme />
					<Link
						className="paragraph-bold text-dark200_light800 cursor-pointer"
						href="/myTools"
					>
						My Tools
					</Link>
				</div>
				<div className="flex-column gap-4">
					{navLinks.map((link) => (
						<div
							key={link.label}
							className="flex-column w-full gap-[10px] self-start p-[10px]"
							onClick={() => setIsOpen(false)}
						>
							<ScrollLink href={link.route} isMobile={true}>
								{link.label}
							</ScrollLink>
							{link.route === 'projects' && (
								<div className="flex-column text-dark200_light800 gap-[10px] text-xl font-bold">
									{projects.map((project) => {
										if (project.status === 'complete') {
											return (
												<div className="mx-auto" key={project.id}>
													<Link href={`/projects/${project.slug}`}>
														{project.name}
													</Link>
												</div>
											);
										}
									})}
								</div>
							)}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default MobileNav;
