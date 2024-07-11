'use client';
import HeroSection from '@/components/Sections/HeroSection';
import Navbar from '../components/Navbar/Navbar';
import AboutmeSection from '@/components/Sections/AboutmeSection';
import ProjectSection from '@/components/Sections/ProjectSection';
import ContactSection from '@/components/Sections/ContactSection';
import Intro from '@/components/Intro';
import SkillSection from '@/components/Sections/SkillSection';

const Home = () => {
	return (
		<div className="flex-column bg-light800_dark200 transition-theme">
			{/* <Intro /> */}
			<Navbar />
			<div className="flex-column section-container z-40 max-md:gap-8">
				<section id="hero" className=" section">
					<HeroSection />
				</section>
				<hr className="horizon-line" />
				<section id="about" className=" section">
					<AboutmeSection />
				</section>
				<hr className="horizon-line" />
				<section id="skill" className=" section">
					<SkillSection />
				</section>
				<hr className="horizon-line" />
				<section id="projects" className=" section">
					<ProjectSection />
				</section>
				<hr className="horizon-line" />
				<section id="contact" className=" section">
					<ContactSection />
				</section>
				<hr className="horizon-line" />
			</div>
		</div>
	);
};

export default Home;
