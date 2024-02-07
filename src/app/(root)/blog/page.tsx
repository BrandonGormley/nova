import type { Metadata } from 'next';
import { Suspense } from 'react';
import Loading from '@/app/(root)/blog/loading';
import BlogPostList from '@/app/components/ui/BlogPostList';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Nova | Blog',
};

export default function Blog() {
    return (
        <main className='flex-1 py-8 px-6 flex flex-col min-h-screen w-full max-w-[1440px] mx-auto'>
            <div className='flex justify-start items-center mb-4'>
                <h2 className='text-2xl font-bold text-gray-800 ml-4'>
                    All Posts
                </h2>
                <Link
                    className='bg-secondary hover:bg-secondary-light transition-all text-white rounded-md text-xs px-2 py-1 text-center ml-4'
                    href='/blog/create'
                >
                    Add +
                </Link>
            </div>
            <section className='flex flex-wrap w-full'>
                <Suspense fallback={<Loading />}>
                    <BlogPostList />
                </Suspense>
            </section>
        </main>
    );
}
