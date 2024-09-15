'use client';

import { navLinks } from '@/constants';
import ScrollLink from '../ScrollLink';
import Image from 'next/image';
import MobileNav from './MobileNav';
import Theme from './Theme';
import Link from 'next/link';
// import Audio from './Audio';

const Navbar = () => {
	return (
		<nav className="flex-between bg-light800_dark200 transition-theme top-0 z-50 w-full px-4 py-[22px] xl:sticky xl:px-16">
			<div className="flex items-center gap-12">
				<ScrollLink href="hero">
					<Image
						src="/assets/images/chanawin-logo.webp"
						width={130}
						height={85}
						alt="Chanawin Logo"
					/>
				</ScrollLink>
				<Link
					className="paragraph-bold text-dark200_light800 cursor-pointer max-sm:hidden"
					href="/myTools"
				>
					My Tools
				</Link>
			</div>
			<div className="flex">
				<div className="xl:flex-between hidden xl:gap-4">
					<div className="flex-center gap-4">
						{/* <Audio /> */}
						<Theme />
					</div>
					{navLinks.map((link) => (
						<ScrollLink key={link.label} href={link.route}>
							{link.label}
						</ScrollLink>
					))}
				</div>
				<div className="xl:hidden">
					<MobileNav />
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
