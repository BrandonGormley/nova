import Link from 'next/link';

export default function NotFound() {
    return (
        <div className='flex items-center justify-center h-screen'>
            <div className='text-center'>
                <h1 className='text-6xl font-bold text-red-500 mb-4'>404</h1>
                <p className='text-lg text-gray-800 mb-8'>Page Not Found</p>
                <p className='text-gray-600'>
                    Looks like this page is in another castle...
                </p>
                <Link
                    className='my-4 block text-gray-800 hover:text-gray-600 transition-all'
                    href={'/'}
                >
                    Back home
                </Link>
            </div>
        </div>
    );
}
