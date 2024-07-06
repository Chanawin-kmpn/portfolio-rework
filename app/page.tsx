import Intro from '@/components/Intro';

export default function Home() {
	return (
		<div className="flex flex-col justify-center items-center h-full bg-light800_dark200">
			<Intro />
			<div>
				<h1 className="h1-bold text-dark200_light800">Homepage</h1>
				{/* <button className="gradient-btn bg-gradient-btn bg-600 rounded-custom p-btn transition-transform duration-250 animate-gradientBtn">
					Button Text
				</button> */}
			</div>
		</div>
	);
}
