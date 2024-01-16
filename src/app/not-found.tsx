import Link from 'next/link';

export default function NotFound() {
    return (
        <div className='flex items-center justify-center h-screen bg-gray-100'>
            <div className='text-center'>
                <h1 className='text-6xl font-bold text-secondary mb-4'>404</h1>
                <p className='text-xl text-gray-700 mb-8'>
                    Oops! Page not found.
                </p>
                <p className='text-gray-600'>
                    The page you are looking for might be under construction.
                </p>
                <Link
                    href='/'
                    className='text-secondary hover:underline mt-4 block'
                >
                    Go back to Home
                </Link>
            </div>
        </div>
    );
}
