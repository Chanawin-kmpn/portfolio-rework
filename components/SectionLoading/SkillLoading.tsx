import React from 'react';
import { Skeleton } from '../ui/skeleton';

const SkillLoading = () => {
	return (
		<div className="flex-column items-center gap-16 md:flex-row">
			<Skeleton className="h-[1024px] w-[423px] max-md:hidden" />
			<div className="flex-column w-full max-w-[953px] items-center gap-8 md:gap-16 md:py-16 md:pr-16">
				<h2 className="h2-bold md:self-end">My SKill</h2>
				<div className="flex w-full max-w-[953px] flex-1 flex-col gap-8 md:gap-16">
					<Skeleton className="h-32 w-full" />
					<Skeleton className="h-[404px] w-full md:h-[310px]" />
					<Skeleton className="h-[210px] w-full" />
				</div>
			</div>
		</div>
	);
};

export default SkillLoading;
