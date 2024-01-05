import Link from 'next/link';
import Image from 'next/image';

export default function About() {
    return (
        <main className='p-8'>
            <section className='px-4 py-6 md:px-6 lg:py-16 md:py-12 max-w-[1440px] mx-auto'>
                <div className='w-full max-w-[768px] mx-auto'>
                    <h1 className='text-4xl font-extrabold tracking-tight lg:text-5xl lg:leading-[3.5rem]'>
                        About Me
                    </h1>
                </div>
                <div className='mx-auto w-full max-w-[768px]'>
                    <p className='mt-8 mb-2 w-full max-w-[75%] text-gray-700'>
                        Hello! I am Brandon Gormley, a software engineer with a
                        passion for technology & fitness. Explore the world of
                        knowledge and creativity with engaging articles and
                        stories.
                    </p>
                    <p className='w-full max-w-[75%] text-gray-500 mb-6'>
                        Oh, by the way, I love ☕️
                    </p>
                    <figure>
                        <Image
                            src='/profile.jpeg'
                            alt='alt text'
                            width={200}
                            height={100}
                            className='rounded-full'
                        />
                        <figcaption className='my-8 text-gray-400'>
                            Brandon Gormley
                        </figcaption>
                    </figure>
                    <h2 className='text-2xl font-bold'>Contact</h2>
                    <p className='my-8 text-gray-700'>
                        You can reach me via email at johndoe@example.com or
                        follow me on Twitter @johndoe.
                    </p>
                    <h2 className='text-2xl font-bold'>Fun Facts About Me</h2>
                    <ul className='my-8 list-inside list-disc'>
                        <li>I started coding in 2018</li>
                        <li>My favorite programming language is Javascript</li>
                        <li>
                            When I am not coding, you can find me in the gym or
                            exploring the outdoors
                        </li>
                    </ul>
                    <div className='flex flex-col gap-2 min-[400px]:flex-row'>
                        <Link
                            className='bg-slate-900 text-white rounded-lg px-6 py-3 block text-center md:inline hover:bg-slate-800 transition-all'
                            href='/blog'
                        >
                            Explore the Blog
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
