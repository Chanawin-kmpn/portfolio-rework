import { Skeleton } from '../ui/skeleton';

const AboutmeLoading = () => {
	return (
		<div className="max-md:flex-column flex w-full items-center justify-center gap-16">
			<div className="flex-column w-full items-center gap-16 self-start md:w-[898px]">
				<h2 className="h2-bold md:self-start">About me</h2>
				<Skeleton className="mx-auto size-[350px] rounded-full md:hidden" />
				<Skeleton className="h-[640px] w-full" />
			</div>
			<div className=" flex-column flex-1 gap-8 max-md:hidden">
				<Skeleton className="mx-auto size-[350px] rounded-full" />
				<Skeleton className="h-[500px] w-full" />
			</div>
		</div>
	);
};

export default AboutmeLoading;
