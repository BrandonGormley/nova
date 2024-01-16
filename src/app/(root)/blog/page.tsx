import type { Metadata } from 'next';
import BlogPostList from '../../components/ui/BlogPostList';
import { Suspense } from 'react';
import Loading from '@/app/loading';

export const metadata: Metadata = {
    title: 'Nova | Blog',
};

export default function Blog() {
    return (
        <main className='flex-1 py-8 px-6 flex flex-col min-h-screen w-full max-w-[1440px] mx-auto'>
            <h2 className='text-2xl font-bold mb-8 w-full mx-auto text-gray-800'>
                All Articles
            </h2>
            <section className='flex flex-wrap w-full justify-center'>
                <Suspense fallback={<Loading />}>
                    <BlogPostList />
                </Suspense>
            </section>
        </main>
    );
}
