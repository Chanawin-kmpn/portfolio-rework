'use client';

import { useState, useEffect } from 'react';

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
				className="invert-bg rounded-full p-6 transition-transform duration-300 hover:scale-110"
				aria-label="Button to top"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="invert-text size-8"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
					/>
				</svg>
			</button>
		</div>
	);
}

export default ScrollToTopButton;
