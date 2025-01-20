import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.scss';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
	title: 'Hashstack | Under-collateralized loans | Defi',
	description:
		'Borrow 500% of your collateral for liquidity mining &trading needs.',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang='en'
			className={`${inter.className} ${inter.variable}`}>
			<body>{children}</body>
		</html>
	);
}
