import BlogPost from '../components/ui/BlogPost';

export default function Blog() {
    return (
        <main className='flex-1 py-8 px-6 flex flex-col min-h-screen w-full max-w-[1440px] mx-auto'>
            <h2 className='text-2xl font-bold mb-8 w-full mx-auto text-gray-800'>
                Latest Articles
            </h2>
            <section className='flex flex-wrap w-full justify-center'>
                <BlogPost />
                <BlogPost />
                <BlogPost />
            </section>
        </main>
    );
}
