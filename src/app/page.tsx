import BlogPost from './components/BlogPost';
import Hero from './components/Hero';

export default function Home() {
    return (
        <main>
            <Hero />
            <section className='p-8 flex flex-wrap justify-center mx-auto max-w-[1440px]'>
                <BlogPost />
                <BlogPost />
                <BlogPost />
                <BlogPost />
                <BlogPost />
            </section>
        </main>
    );
}
