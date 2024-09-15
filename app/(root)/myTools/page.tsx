import React from 'react';
import Theme from '@/components/Navbar/Theme';
import ScrollToTopButton from '@/components/ScrollToTopButton';

import Link from 'next/link';

import MyToolsContent from '@/components/MyToolsContent';

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
			<MyToolsContent />
		</div>
	);
};

export default page;
