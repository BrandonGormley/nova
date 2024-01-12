import Hero from './components/Hero';

export default function Home() {
    return (
        <main className='min-h-screen'>
            <Hero />
            <section className='p-8 flex flex-wrap justify-center mx-auto max-w-[1440px]'></section>
        </main>
    );
}
