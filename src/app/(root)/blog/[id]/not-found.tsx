import Link from 'next/link';

export default function NotFound() {
    return (
        <div className='flex items-center justify-center h-screen'>
            <div className='text-center'>
                <h1 className='text-6xl font-bold text-secondary mb-4'>404</h1>
                <p className='text-xl text-gray-700 mb-8'>
                    Oops! That blog is not available
                </p>
                <Link
                    href='/blog'
                    className='text-secondary hover:underline mt-4 block'
                >
                    Go back to blog articles
                </Link>
            </div>
        </div>
    );
}
