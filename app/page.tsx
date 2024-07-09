'use client';
import HeroSection from '@/components/Sections/HeroSection';
import Navbar from '../components/Navbar/Navbar';
import AboutmeSection from '@/components/Sections/AboutmeSection';
import ProjectSection from '@/components/Sections/ProjectSection';
import ContactSection from '@/components/Sections/ContactSection';
import Intro from '@/components/Intro';

const Home = () => {
	return (
		<div className="flex-column">
			{/* <Intro /> */}
			<Navbar />
			<div className="flex-column px-4 md:px-16">
				<section id="hero" className="h-screen">
					<HeroSection />
				</section>
				<section id="about" className="h-screen">
					<AboutmeSection />
				</section>
				<section id="projects" className="h-screen">
					<ProjectSection />
				</section>
				<section id="contact" className="h-screen">
					<ContactSection />
				</section>
			</div>
		</div>
	);
};

export default Home;
