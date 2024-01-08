import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from './ui/components/Header';
import Footer from './ui/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Welcome to Nova',
    description:
        'Welcome to Nova, a captivating space where words come alive. Explore insightful articles, personal stories, and engaging content that reflect my journey and passions. Join me on this immersive blog as we delve into topics ranging from lifestyle, travel, tech, and more. Lets embark on a journey of discovery together at Nova.',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en'>
            <body className={inter.className}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
