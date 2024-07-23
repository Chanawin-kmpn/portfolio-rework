'use client';
import HeroSection from '@/components/Sections/HeroSection';
import Navbar from '../../../components/Navbar/Navbar';
import AboutmeSection from '@/components/Sections/AboutmeSection';
import ProjectSection from '@/components/Sections/ProjectSection';
import ContactSection from '@/components/Sections/ContactSection';
import Intro from '@/components/Intro';
import SkillSection from '@/components/Sections/SkillSection';
import FooterSection from '@/components/Sections/FooterSection';
import HeroLoading from '@/components/SectionLoading/HeroLoading';
import { Suspense } from 'react';
import AboutmeLoading from '@/components/SectionLoading/AboutmeLoading';
import SkillLoading from '@/components/SectionLoading/SkillLoading';

const Home = () => {
	return (
		<>
			{/* <Intro /> */}
			<Navbar />
			<div className="flex-column section-container z-40 max-xl:gap-8 xl:gap-16">
				<section id="hero" className=" section">
					<Suspense fallback={<HeroLoading />}>
						<HeroSection />
					</Suspense>
				</section>
				<hr className="horizon-line" />
				<section id="about" className=" section">
					<Suspense fallback={<AboutmeLoading />}>
						<AboutmeSection />
					</Suspense>
				</section>
				<hr className="horizon-line" />
				<section id="skills" className=" section">
					<Suspense fallback={<SkillLoading />}>
						<SkillSection />
					</Suspense>
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
			<FooterSection />
		</>
	);
};

export default Home;
