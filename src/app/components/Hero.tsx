import Link from 'next/link';

export default function Hero() {
    return (
        <section className='w-full mx-auto px-8 max-w-[1440px] mt-32'>
            <div className='lg:py-16 '>
                <h1 className='text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl xl:text-6xl  '>
                    Welcome to Nova
                </h1>
                <p className='max-w-[600px] text-gray-500 md:text-xl py-4 mb-4'>
                    Explore the world of knowledge and creativity with engaging
                    articles and stories.
                </p>
                <Link
                    className='bg-slate-900 text-white rounded-lg px-6 py-3 block text-center md:inline hover:bg-slate-800 transition-all'
                    href='/'
                >
                    Explore Now
                </Link>
            </div>
        </section>
    );
}
