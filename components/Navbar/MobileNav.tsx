'use client';
import React, { useState } from 'react';
import ScrollLink from '../ScrollLink';
import Image from 'next/image';
import Theme from './Theme';
import Audio from './Audio';
import { useTheme } from '@/context/ThemeProvider';
import { navLinks, projectCards } from '@/constants';
import Link from 'next/link';

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
					width={40}
					height={40}
					alt="Mobile menu"
				/>
			</button>

			<div
				className={`bg-mobile-nav fixed left-0 top-0 size-full gap-32 px-4 py-[22px] ${isOpen ? 'flex-column' : 'hidden'} transition-theme`}
			>
				<div className="flex min-h-[85px] items-center gap-8 pl-[214px]">
					<Audio />
					<Theme />
				</div>
				<div className="flex-column gap-4">
					{navLinks.map((link) => (
						<div
							key={link.label}
							className="flex-column gap-[10px] p-[10px]"
							onClick={() => setIsOpen(false)}
						>
							<ScrollLink href={link.route} isMobile={true}>
								{link.label}
							</ScrollLink>
							{link.route === 'projects' && (
								<div className="flex-column text-dark200_light800 gap-[10px] px-4 text-xl font-bold">
									{projectCards.map((link) => (
										<Link href={link.route} key={link.title}>
											{link.title}
										</Link>
									))}
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
