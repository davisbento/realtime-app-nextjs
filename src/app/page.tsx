import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return <div className='text-red-500'>Hello world</div>;
}
