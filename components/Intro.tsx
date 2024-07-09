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
				<div className="bg-light800_dark200 fixed z-[999999] flex size-full flex-col items-center justify-center">
					<div className="relative" style={{ perspective: '1000px' }}>
						<div
							className="animate-flipIn text-center opacity-0"
							style={{
								transformOrigin: '0% 100%',
								transformStyle: 'preserve-3d',
								backfaceVisibility: 'hidden',
							}}
						>
							<h1 className="h1-intro font-baiJamjuree">สวัสดี</h1>
						</div>
						<div
							className="absolute top-0 animate-flipInDelay text-center opacity-0"
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
