import Intro from '@/components/Intro';
import Image from 'next/image';

export default function Home() {
	return (
		<div className="flex flex-col justify-center items-center h-full ">
			<Intro />
			<div>
				<h1 className="h1-bold text-dark200_light800">Homepage</h1>
				<div className=" px-4 py-6 border ">
					<button className="flex-between w-full invert-colors">
						Download CV
						<Image
							src="/assets/icons/dark-download-circle-fill.svg"
							width={32}
							height={32}
							alt="CV download button"
							className="icon-dark"
						/>
					</button>
				</div>
				{/* <button className="gradient-btn bg-gradient-btn bg-600 rounded-custom p-btn transition-transform duration-250 animate-gradientBtn">
					Button Text
				</button> */}
			</div>
		</div>
	);
}
