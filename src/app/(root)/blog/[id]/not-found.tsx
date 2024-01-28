import Link from 'next/link';

export default function NotFound() {
    return (
        <div className='flex items-center justify-center h-screen bg-gray-100'>
            <div className='text-center'>
                <h1 className='text-6xl font-bold text-red-500 mb-4'>404</h1>
                <p className='text-lg text-gray-800 mb-8'>
                    Article not found :(
                </p>
                <p className='text-gray-600'>
                    Looks like this aticle does not exist yet
                </p>
                <Link
                    className='my-4 block text-gray-800 hover:text-gray-600 transition-all'
                    href={'/blog'}
                >
                    Back to blog articles
                </Link>
            </div>
        </div>
    );
}
