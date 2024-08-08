import React from 'react';
import Image from 'next/image';
import SocialLink from '../SocialLink';
import { useTheme } from '@/context/ThemeProvider';
import ContactForm from '../Form/ContactForm';

const ContactSection = () => {
	const { mode } = useTheme();
	return (
		<div className="flex-column xl:gap-10">
			<hr className="invert-bg max-xl:hidden" />
			<div className="flex-column gap-4 xl:gap-16">
				<h2 className="h2-bold self-center xl:self-end">Contact</h2>
				<div className="flex-column gap-12 xl:flex-row xl:gap-4">
					<div className="flex-column flex-1 gap-8 xl:gap-12">
						<div className="flex-column gap-6 xl:gap-4">
							<h3 className="h3-bold text-dark200_light800">
								Let's build something together
							</h3>
							<p className="paragraph-regular text-dark200_light800">
								If you’re looking for a developer feel free to contact me.
							</p>
						</div>
						<ContactForm />
						<div className="flex-column gap-2 xl:gap-6">
							<div className="flex items-center gap-4">
								<p className="body-semibold inline-block">
									Or you can send me a message directly to this email.
								</p>
								<span className="invert-bg inline-block h-[2px] w-full max-w-[176px] max-xl:hidden  max-xl:flex-1"></span>
							</div>
							<h4 className="project-name">pchanawin@gmail.com</h4>
						</div>
					</div>
					<div className="flex-column gap-16">
						<Image
							src={`/assets/images/backgrounds/${mode}-contact-bg.webp`}
							width={382}
							height={608}
							alt="Contact background"
							unoptimized={true}
							className="max-xl:hidden"
						/>
						<SocialLink direction="column" />
					</div>
				</div>
			</div>
			<hr className="invert-bg max-xl:hidden" />
		</div>
	);
};

export default ContactSection;
