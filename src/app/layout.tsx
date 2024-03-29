import type { Metadata } from 'next';
import './globals.css';
import Footer from '@/app/components/Footer';
import { rubik } from '@/app/lib/fonts';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
    metadataBase: new URL('https://nova-bg.vercel.app/'),
    title: 'Welcome to Nova',
    description:
        'Welcome to Nova, a captivating space where words come alive. Explore insightful articles, personal stories, and engaging content that reflect my journey and passions. Join me on this immersive blog as we delve into topics ranging from lifestyle, travel, tech, and more. Lets embark on a journey of discovery together at Nova.',

    openGraph: {
        title: 'Welcome to Nova',
        description:
            'Welcome to Nova, a captivating space where words come alive. Explore insightful articles, personal stories, and engaging content that reflect my journey and passions. Join me on this immersive blog as we delve into topics ranging from lifestyle, travel, tech, and more. Lets embark on a journey of discovery together at Nova.',
        url: 'https://nova-bg.vercel.app/',
        siteName: 'Nova',
        locale: 'en_US',
        type: 'website',
    },
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
