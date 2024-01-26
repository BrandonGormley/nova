import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';
import './globals.css';
import Footer from './components/Footer';

const rubik = Rubik({ subsets: ['latin'] });

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
            <body className={rubik.className}>
                {children}
                <Footer />
            </body>
        </html>
    );
}
