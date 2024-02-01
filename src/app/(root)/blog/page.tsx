import type { Metadata } from 'next';
import { Suspense } from 'react';
import Loading from '@/app/(root)/blog/loading';
import BlogPostList from '@/app/components/ui/BlogPostList';

export const metadata: Metadata = {
    title: 'Nova | Blog',
};

export default function Blog() {
    return (
        <main className='flex-1 py-8 px-6 flex flex-col min-h-screen w-full max-w-[1440px] mx-auto'>
            <h2 className='text-2xl font-bold mb-8 w-full mx-auto text-gray-800'>
                All Articles
            </h2>
            <section className='flex flex-wrap w-full'>
                <Suspense fallback={<Loading />}>
                    <BlogPostList />
                </Suspense>
            </section>
        </main>
    );
}
