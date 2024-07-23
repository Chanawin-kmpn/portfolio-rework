import { Skeleton } from '../ui/skeleton';

const HeroLoading = () => {
	return (
		<div className="flex-column items-start justify-start gap-16 xl:mt-2 xl:flex xl:size-full xl:flex-row 2xl:mt-16 ">
			<Skeleton className="h-[887px] w-[532px] max-xl:hidden" />

			<div className="flex-column gap-8 py-16 max-xl:w-[398px]">
				<Skeleton className="h-[170px] w-[30rem] max-xl:w-full" />
				<Skeleton className="h-[130px] w-[50rem] max-xl:w-full" />
				<Skeleton className="h-[130px] w-[60rem] max-xl:w-full" />
				<Skeleton className="h-[60px] w-48" />
				<Skeleton className="mt-24 h-[60px] w-48 self-end" />
			</div>
		</div>
	);
};

export default HeroLoading;
