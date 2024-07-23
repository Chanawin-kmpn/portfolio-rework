import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import ScrollLink from './ScrollLink';

const AnimateMessage = () => {
	const [isRotated, setIsRotated] = useState(false);
	const [isMessageVisible, setIsMessageVisible] = useState(false);
	const { ref, inView } = useInView({
		threshold: 0.5,
		triggerOnce: true,
	});

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY >= 4200 && !isRotated) {
				setIsRotated(true);
				setTimeout(() => setIsMessageVisible(true), 500); // Delay message appearance
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [isRotated]);

	return (
		<div className="md:flex-column max-md:hidden" ref={ref}>
			<div
				className={`cloud-message ${isMessageVisible ? 'fade-in' : 'invisible'}`}
			>
				<p className="paragraph-regular invert-text">
					If you are interested in me, please feel free to contact me.
				</p>
				<ScrollLink href="contact" isGradient={true}>
					Contact me!
				</ScrollLink>
			</div>

			<div
				className="relative -translate-y-20 translate-x-full self-end"
				style={{ width: '280px', height: '614px' }}
			>
				<Image
					src="/assets/images/chanawin-illustrator.webp"
					alt="Chanawin illustrator"
					fill
					sizes="(max-width: 768px) 100vw, 280px"
					style={{ objectFit: 'contain' }}
					className={`overflow-hidden transition-transform duration-500 ${
						isRotated ? '-rotate-45' : ''
					}`}
				/>
			</div>
		</div>
	);
};

export default AnimateMessage;
