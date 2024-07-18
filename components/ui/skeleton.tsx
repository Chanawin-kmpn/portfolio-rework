import { cn } from '@/lib/utils';

function Skeleton({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) {
	return (
		<div
			className={cn(
				'animate-pulse rounded-md bg-dark-200/10 dark:bg-light-900/10',
				className
			)}
			{...props}
		/>
	);
}

export { Skeleton };
