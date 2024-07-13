import React from 'react';
import ScrollLink from '../ScrollLink';
import Image from 'next/image';

const FooterSection = () => {
	return (
		<div className="flex-column md:flex-between bg-light800_dark200 transition-theme items-center px-4 py-[22px] max-md:gap-8 md:px-16">
			<ScrollLink href="hero">
				<Image
					src="/assets/images/chanawin-logo.webp"
					width={130}
					height={85}
					alt="Chanawin Logo"
				/>
			</ScrollLink>
			<p className="paragraph-bold">&copy; 2024 Chanawin</p>
		</div>
	);
};

export default FooterSection;
