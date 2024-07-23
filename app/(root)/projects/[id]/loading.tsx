import { Skeleton } from '@/components/ui/skeleton';
import React from 'react';

const Loading = () => {
	return (
		<div className="flex-column section-container items-start justify-start gap-8 px-0 py-[22px] xl:size-full xl:gap-16 xl:p-16">
			<div className="flex w-full items-center justify-between border-b-2">
				<Skeleton className="h-6 w-36" />
				<Skeleton className="size-8 rounded-full" />
			</div>

			<div className="w-full">
				<Skeleton className="mb-4 h-10 w-3/4" />
				<Skeleton className="h-4 w-full" />
				<Skeleton className="mt-2 h-4 w-full" />
			</div>

			<div className="flex-column w-full gap-8">
				<Skeleton className="h-4 w-1/2" />
				<Skeleton className="h-4 w-1/3" />
				<Skeleton className="h-4 w-1/4" />
			</div>

			<Skeleton className="aspect-video w-full" />

			<div className="flex-column w-full gap-4 xl:flex-row">
				<div className="flex-1">
					<Skeleton className="mb-4 h-8 w-1/3" />
					<Skeleton className="h-4 w-full" />
					<Skeleton className="mt-2 h-4 w-full" />
					<Skeleton className="mt-2 h-4 w-3/4" />
				</div>
				<Skeleton className="aspect-square w-full max-w-[500px]" />
			</div>

			<div className="flex-column w-full gap-4 xl:flex-row">
				<Skeleton className="aspect-square w-full max-w-[500px] max-xl:hidden" />
				<div className="flex-1">
					<Skeleton className="mb-4 h-8 w-1/2" />
					<Skeleton className="h-4 w-full" />
					<Skeleton className="mt-2 h-4 w-full" />
					<Skeleton className="mt-2 h-4 w-3/4" />
				</div>
			</div>

			<div className="w-full">
				<Skeleton className="mb-4 h-8 w-1/3" />
				<Skeleton className="aspect-video w-full" />
			</div>

			<div className="flex-column w-full gap-4 xl:flex-row">
				<div className="flex-1">
					<Skeleton className="mb-4 h-8 w-2/3" />
					<Skeleton className="h-4 w-full" />
					<Skeleton className="mt-2 h-4 w-full" />
					<Skeleton className="mt-2 h-4 w-3/4" />
				</div>
				<Skeleton className="aspect-square w-full max-w-[500px]" />
			</div>

			<div className="flex w-full flex-col-reverse gap-4 xl:flex-row">
				<Skeleton className="aspect-square w-full max-w-[500px]" />
				<div className="flex-1">
					<Skeleton className="mb-4 h-8 w-1/2" />
					<Skeleton className="h-4 w-full" />
					<Skeleton className="mt-2 h-4 w-full" />
					<Skeleton className="mt-2 h-4 w-3/4" />
				</div>
			</div>

			<div className="flex w-full items-center justify-between border-t-2">
				<Skeleton className="h-6 w-36" />
			</div>
		</div>
	);
};

export default Loading;
