import React from 'react';
import ContactForm from '../Form/ContactForm';
import SocialLink from '../SocialLink';
import { Skeleton } from '../ui/skeleton';

const ContactLoading = () => {
	return (
		<div className="flex-column md:gap-10">
			<hr className="invert-bg max-md:hidden" />
			<div className="flex-column gap-4 md:gap-16">
				<h2 className="h2-bold self-center md:self-end">Contact</h2>
				<div className="flex-column gap-12 md:flex-row md:gap-4 ">
					<div className="flex-column flex-1 gap-8 md:gap-12">
						<div className="flex-column gap-6 md:gap-4">
							<Skeleton className="h-[120px] w-full" />
						</div>
						<div className="flex-column gap-8">
							<div className="flex md:gap-16">
								<div className="flex-column flex-1 md:gap-2">
									<Skeleton className="h-[26px] w-[60px]" />
									<Skeleton className="h-[60px] w-full" />
								</div>
								<div className="flex-column flex-1 md:gap-2">
									<Skeleton className="h-[26px] w-[60px]" />
									<Skeleton className="h-[60px] w-full" />
								</div>
							</div>
							<div className="flex-column flex-1 md:gap-2">
								<Skeleton className="h-[26px] w-[60px]" />
								<Skeleton className="h-[60px] w-full" />
							</div>
							<div className="flex-column flex-1 md:gap-2">
								<Skeleton className="h-[26px] w-[60px]" />
								<Skeleton className="h-[300px] w-full" />
							</div>
							<Skeleton className="h-[56px] w-[120px]" />
						</div>
						<div>
							<Skeleton className="h-[116px] w-full" />
						</div>
					</div>
					<div className="flex-column gap-16">
						<Skeleton className="h-[608px] w-[382px]" />
						<Skeleton className="mx-auto h-[382px] w-[24px]" />
					</div>
				</div>
			</div>
			<hr className="invert-bg max-md:hidden" />
		</div>
	);
};

export default ContactLoading;
