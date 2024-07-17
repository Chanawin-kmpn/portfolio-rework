import { Skeleton } from '../ui/skeleton';

const HeroLoading = () => {
	return (
		<div className="flex-column items-start justify-start gap-16 md:mt-2 md:flex md:size-full md:flex-row 2xl:mt-16 ">
			<Skeleton className="h-[887px] w-[532px] max-md:hidden" />

			<div className="flex-column gap-8 py-16 max-md:w-[398px]">
				<Skeleton className="h-[170px] w-[30rem] max-md:w-full" />
				<Skeleton className="h-[130px] w-[50rem] max-md:w-full" />
				<Skeleton className="h-[130px] w-[60rem] max-md:w-full" />
				<Skeleton className="h-[60px] w-48" />
				<Skeleton className="mt-24 h-[60px] w-48 self-end" />
			</div>
		</div>
	);
};

export default HeroLoading;
