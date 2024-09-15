import React, { Suspense } from 'react';
import Theme from '@/components/Navbar/Theme';
import ScrollToTopButton from '@/components/ScrollToTopButton';

import Link from 'next/link';
import dynamic from 'next/dynamic';

const MyToolsContent = dynamic(() => import('@/components/MyToolsContent'), {
	ssr: false,
});

const page = () => {
	return (
		<div className="flex-column section-container items-start justify-start gap-8 px-0 py-[22px] xl:size-full xl:gap-16 xl:p-16 ">
			<ScrollToTopButton />
			<div className="border-light800_dark200 flex w-full items-center justify-between border-b-2 ">
				<Link className="body-semibold" href="/">
					Back to main page
				</Link>
				<Theme />
			</div>
			<Suspense fallback={<div>Loading...</div>}>
				<MyToolsContent />
			</Suspense>
		</div>
	);
};

export default page;
