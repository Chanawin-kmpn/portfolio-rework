import React from 'react';
import Image from 'next/image';
import SocialLink from '../SocialLink';
import { useTheme } from '@/context/ThemeProvider';

const ContactSection = () => {
	const { mode } = useTheme();
	return (
		<div className="flex-column md:gap-10">
			<hr className="invert-bg" />
			<div className="flex-column md:gap-16">
				<h2 className="h2-bold md:self-end">Contact</h2>
				<div className="md:flex">
					<div className="flex-column flex-1 md:gap-12">
						<div className="flex-column gap-4">
							<h3 className="h3-bold text-dark200_light800">
								Let's buld somthing together
							</h3>
							<p className="paragraph-regular text-dark200_light800">
								If you’re looking for a developer feel free to contact me.
							</p>
						</div>
						<form action="">
							<div>Form</div>
						</form>
						<div className="flex-column md:gap-6">
							<div className="flex items-center gap-4">
								<p className="paragraph-bold inline-block">
									Or you can send me a message directly to this email.
								</p>
								<span className="invert-bg inline-block h-[2px] w-full max-w-[176px] max-md:hidden  max-md:flex-1"></span>
							</div>
							<h4 className="h4-bold">pchanawin@gmail.com</h4>
						</div>
					</div>
					<div className="flex-column gap-16">
						<Image
							src={`/assets/images/backgrounds/${mode}-contact-bg.webp`}
							width={382}
							height={608}
							alt="Contact background"
							unoptimized={true}
							className="max-md:hidden"
						/>
						<SocialLink direction="column" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactSection;
