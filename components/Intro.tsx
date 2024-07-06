'use client';
import React, { useEffect, useState } from 'react';

const Intro = () => {
	const [displayIntro, setDisplayIntro] = useState(true);
	useEffect(() => {
		const timer = setTimeout(() => {
			setDisplayIntro(false);
		}, 3500);
		return () => clearTimeout(timer);
	}, []);

	return (
		<>
			{displayIntro && (
				<div className="fixed w-full h-full flex flex-col justify-center items-center bg-light800_dark200 ">
					<div className="relative" style={{ perspective: '1000px' }}>
						<div
							className="flip-text text-center opacity-0 transform rotate-x-[-90deg] animate-flipIn"
							style={{
								transformOrigin: '0% 100%',
								transformStyle: 'preserve-3d',
								backfaceVisibility: 'hidden',
							}}
						>
							<h1 className="h1-intro font-baiJamjuree">สวัสดี</h1>
						</div>
						<div
							className="flip-text top-0 text-center absolute opacity-0 transform rotate-x-[-90deg] animate-flipInDelay"
							style={{
								transformOrigin: '0% 100%',
								transformStyle: 'preserve-3d',
								backfaceVisibility: 'hidden',
							}}
						>
							<h1 className="h1-intro">Hello</h1>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default Intro;
