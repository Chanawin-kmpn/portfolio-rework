import { Toaster } from '@/components/ui/toaster';
import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="flex-column bg-light800_dark200 transition-theme min-h-screen">
			{children}
			<Toaster />
		</div>
	);
};

export default Layout;
