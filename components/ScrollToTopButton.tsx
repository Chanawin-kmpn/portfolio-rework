'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

function ScrollToTopButton() {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const toggleVisibility = () => {
			if (window.pageYOffset > 90) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		window.addEventListener('scroll', toggleVisibility);

		return () => window.removeEventListener('scroll', toggleVisibility);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	return (
		<div
			className={`fixed bottom-4 right-4 z-40 transition-opacity duration-300 ease-in-out xl:bottom-16 xl:right-16 ${
				isVisible ? 'opacity-100' : 'pointer-events-none opacity-0'
			}`}
		>
			<button
				onClick={scrollToTop}
				className="invert-bg rounded-full p-4 transition-transform duration-300 hover:scale-110"
			>
				<Image
					src="/assets/icons/arrow-top.svg"
					width={40}
					height={40}
					alt="Arrow top"
					className="invert-text"
				/>
			</button>
		</div>
	);
}

export default ScrollToTopButton;
