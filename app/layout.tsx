import React from 'react';
import type { Metadata } from 'next';
import { Bai_Jamjuree, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/context/ThemeProvider';

const baiJamjuree = Bai_Jamjuree({
	subsets: ['thai'],
	weight: ['500'],
	variable: '--font-bai-jamjuree',
});

const jetBrainsMono = JetBrains_Mono({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
	variable: '--font-jetbrains-mono',
});

export const metadata: Metadata = {
	title: 'Chanawin | Portfolio',
	description: "Chanawin's portfolio",
	icons: {
		icon: '/assets/images/chanawin-logo.svg',
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={`${jetBrainsMono.variable} ${baiJamjuree.variable}`}>
				<ThemeProvider>{children}</ThemeProvider>
			</body>
		</html>
	);
}
