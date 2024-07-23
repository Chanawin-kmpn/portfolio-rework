'use client';

import { navLinks } from '@/constants';
import ScrollLink from '../ScrollLink';
import Image from 'next/image';
import MobileNav from './MobileNav';
import Theme from './Theme';
import Audio from './Audio';

const Navbar = () => {
	return (
		<nav className="flex-between bg-light800_dark200 transition-theme top-0 z-50 w-full px-4 py-[22px] md:sticky md:px-16">
			<ScrollLink href="hero">
				<Image
					src="/assets/images/chanawin-logo.webp"
					width={130}
					height={85}
					alt="Chanawin Logo"
				/>
			</ScrollLink>
			<div className="flex">
				<div className="md:flex-between hidden md:gap-4">
					<div className="flex-center gap-4">
						<Audio />
						<Theme />
					</div>
					{navLinks.map((link) => (
						<ScrollLink key={link.label} href={link.route}>
							{link.label}
						</ScrollLink>
					))}
				</div>
				<div className="md:hidden">
					<MobileNav />
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
