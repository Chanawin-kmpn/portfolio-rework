'use client';

import { ScrollLinkProps } from '@/types/types';

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
