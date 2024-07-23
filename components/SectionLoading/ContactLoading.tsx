import React from 'react';
import { Skeleton } from '../ui/skeleton';

const ContactLoading = () => {
	return (
		<div className="flex-column xl:gap-10">
			<hr className="invert-bg max-xl:hidden" />
			<div className="flex-column gap-4 xl:gap-16">
				<h2 className="h2-bold self-center xl:self-end">Contact</h2>
				<div className="flex-column gap-12 xl:flex-row xl:gap-4 ">
					<div className="flex-column flex-1 gap-8 xl:gap-12">
						<div className="flex-column gap-6 xl:gap-4">
							<Skeleton className="h-[120px] w-full" />
						</div>
						<div className="flex-column gap-8">
							<div className="flex-column gap-8 xl:flex xl:gap-16">
								<div className="flex-column flex-1 gap-2 ">
									<Skeleton className="h-[26px] w-[60px]" />
									<Skeleton className="h-[60px] w-full" />
								</div>
								<div className="flex-column flex-1 gap-2">
									<Skeleton className="h-[26px] w-[60px]" />
									<Skeleton className="h-[60px] w-full" />
								</div>
							</div>
							<div className="flex-column flex-1 gap-2">
								<Skeleton className="h-[26px] w-[60px]" />
								<Skeleton className="h-[60px] w-full" />
							</div>
							<div className="flex-column flex-1 gap-2">
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
						<Skeleton className="h-[608px] w-[382px] max-xl:hidden" />
						<Skeleton className="mx-auto h-6 w-[382px] xl:h-[382px] xl:w-6" />
					</div>
				</div>
			</div>
			<hr className="invert-bg max-xl:hidden" />
		</div>
	);
};

export default ContactLoading;
