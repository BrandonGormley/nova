import Link from 'next/link';
import BlogPostList from '../components/ui/blog/BlogPostList';

export default function Home() {
    return (
        <main className='min-h-screen'>
            <section className='w-full mx-auto px-8 max-w-[1440px] mt-32'>
                <div className='lg:py-16'>
                    <h1 className='text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl xl:text-6xl text-gray-800'>
                        Welcome to Nova
                    </h1>
                    <p className='max-w-[600px] text-gray-500 md:text-xl py-4 mb-4'>
                        Explore the world of knowledge and creativity with
                        engaging articles and stories.
                    </p>
                    <Link
                        className='bg-gray-800 text-white rounded-lg px-6 py-3 block text-center md:inline hover:bg-gray-700 transition-all'
                        href='/blog'
                    >
                        Explore Now
                    </Link>
                </div>
                <BlogPostList />
            </section>
        </main>
    );
}
