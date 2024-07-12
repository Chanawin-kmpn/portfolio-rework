'use client';

import { projectCards } from '@/constants';
import Link from 'next/link';
import { ReactNode } from 'react';

interface ScrollLinkProps {
	href: string;
	isMobile?: boolean;
	isGradient?: boolean;
	children: ReactNode;
}

const ScrollLink = ({
	href,
	isMobile,
	isGradient,
	children,
}: ScrollLinkProps) => {
	const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
		e.preventDefault();
		const element = document.getElementById(href);
		if (element) {
			const navHeight = href === 'hero' || !isMobile ? 129 : 44.5;
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
			className={`paragraph-bold text-dark200_light800 cursor-pointer ${isGradient ? 'gradient-btn' : ''}`}
		>
			{children}
		</Link>
	);
};

export default ScrollLink;
