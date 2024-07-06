import type { Metadata } from 'next';
import { Bai_Jamjuree, Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const baiJamjuree = Bai_Jamjuree({
	subsets: ['thai'],
	weight: ['500'],
	variable: '--font-bai-jamjuree',
});

const jetBrainsMono = JetBrains_Mono({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
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
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${jetBrainsMono.className} ${baiJamjuree.variable}`}>
				{children}
			</body>
		</html>
	);
}
