import Hero from './components/Hero';
import BlogPostList from './components/ui/BlogPostList';

export default function Home() {
    return (
        <main className='min-h-screen'>
            <Hero />
            <section className='p-8 flex flex-wrap justify-center mx-auto max-w-[1440px]'>
                <BlogPostList />
            </section>
        </main>
    );
}
