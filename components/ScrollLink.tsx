'use client';

import { projectLinks } from '@/constants';
import Link from 'next/link';
import { ReactNode } from 'react';

interface ScrollLinkProps {
	href: string;
	isMobile?: boolean;
	children: ReactNode;
}

const ScrollLink = ({ href, isMobile, children }: ScrollLinkProps) => {
	const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
		e.preventDefault();
		const targetId = href.replace('#', '');
		const element = document.getElementById(targetId);
		if (element) {
			const navHeight = href === '#hero' || !isMobile ? 129 : 44.5;
			const elementPosition = element.getBoundingClientRect().top;
			const offsetPosition = elementPosition + window.pageYOffset - navHeight;

			window.scrollTo({
				top: offsetPosition,
				behavior: 'smooth',
			});
		}
		console.log(href);
	};

	return (
		<Link
			href={href}
			onClick={handleClick}
			className={`paragraph-bold md:paragraph-bold-desktop text-dark200_light800`}
		>
			{children}
		</Link>
	);
};

export default ScrollLink;
