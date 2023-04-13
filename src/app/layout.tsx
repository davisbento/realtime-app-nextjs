import Providers from '@/components/Providers';
import './globals.css';

export const metadata = {
	title: 'Realtime Next.js Chat',
	description: 'A realtime chat app built with Next.js, Redis'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
