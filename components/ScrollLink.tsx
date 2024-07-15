'use client';

import { projectCards } from '@/constants';
import Link from 'next/link';
import { ReactNode } from 'react';
import { toast } from './ui/use-toast';

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
	const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
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

		toast({
			title: 'Your message has been send!.',
			description:
				'Thank you for contacting me. I will reply to you as soon as possible. 🙏',
		});
	};

	return (
		<button
			onClick={handleClick}
			className={`paragraph-bold text-dark200_light800 cursor-pointer ${isGradient ? 'gradient-btn' : ''}`}
		>
			{children}
		</button>
	);
};

export default ScrollLink;
