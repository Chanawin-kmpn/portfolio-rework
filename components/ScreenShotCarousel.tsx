'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel';

const ScreenShotCarousel = ({
	projectScreenshot,
}: {
	projectScreenshot: string[];
}) => {
	const [open, setOpen] = useState(false);

	const handleZoom = () => {
		setOpen((prev) => !prev);
	};

	const handleClose = () => {
		setOpen(false);
	};

	useEffect(() => {
		const handleEscapeKey = (event: { key: string }) => {
			if (event.key === 'Escape') {
				handleClose();
			}
		};

		if (open) {
			document.addEventListener('keydown', handleEscapeKey);
		}

		return () => {
			document.removeEventListener('keydown', handleEscapeKey);
		};
	}, [open]);

	return (
		<>
			<div className="grid w-full grid-cols-2 gap-4 xl:grid-cols-4 ">
				{projectScreenshot.map((img, index) =>
					index === 0 ? (
						<div
							className="relative col-span-2 aspect-square w-full xl:row-span-2"
							key={index}
							onClick={handleZoom}
						>
							<Image
								src={img}
								fill
								sizes="100%"
								alt="Project screenshot"
								className="object-cover"
								priority
							/>
						</div>
					) : (
						<div
							className="relative aspect-square w-full"
							key={index}
							onClick={handleZoom}
						>
							<Image
								src={img}
								fill
								sizes="100%"
								alt="Project screenshot"
								className="object-cover"
								priority
							/>
						</div>
					)
				)}
			</div>
			{open && (
				<div
					className="bg-blur fixed inset-0 z-50 flex size-full items-center justify-center"
					onClick={handleClose}
				>
					<div
						onClick={(e) => e.stopPropagation()}
						className="z-50 flex  items-center px-4 xl:size-1/2"
					>
						<Carousel
							className=""
							opts={{
								align: 'center',
							}}
						>
							<CarouselContent className="">
								{projectScreenshot.map((img, index) => (
									<CarouselItem key={index} className="max-w-fit">
										<Image
											src={img}
											width={650}
											height={650}
											alt="Project screenshot"
											className="object-cover"
										/>
									</CarouselItem>
								))}
							</CarouselContent>
							<CarouselPrevious className="carousel-arrow" />
							<CarouselNext className="carousel-arrow" />
						</Carousel>
					</div>
				</div>
			)}
		</>
	);
};

export default ScreenShotCarousel;
