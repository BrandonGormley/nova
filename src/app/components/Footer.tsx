import Link from 'next/link';

export default function Footer() {
    return (
        <footer className='w-full py-6 border-t mx-auto max-w-[1440px] flex justify-center'>
            <div className='container px-4 md:px-6 flex items-center justify-between'>
                <div className='flex gap-4'>
                    <Link href='#'>
                        <FacebookIcon className='w-4 h-4 hover:text-[#1877F2]' />
                    </Link>
                    <Link href='#'>
                        <TwitterIcon className='w-4 h-4 hover:text-[#1DA1F2]' />
                    </Link>
                    <Link href='#'>
                        <InstagramIcon className='w-4 h-4 hover:text-[#962fbf]' />
                    </Link>
                    <Link href='#'>
                        <LinkedinIcon className='w-4 h-4 hover:text-[#0077b5]' />
                    </Link>
                    <Link href='#'>
                        <YoutubeIcon className='w-4 h-4 hover:text-[#CD201F]' />
                    </Link>
                    <Link href='#'>
                        <GithubIcon className='w-4 h-4 hover:text-gray-700' />
                    </Link>
                </div>
                <p className='text-xs text-gray-500 dark:text-gray-400'>
                    © Nova. All rights reserved.
                </p>
                <nav className='flex gap-4'>
                    <Link
                        className='text-xs hover:underline underline-offset-4'
                        href='#'
                    >
                        Terms of Service
                    </Link>
                    <Link
                        className='text-xs hover:underline underline-offset-4'
                        href='#'
                    >
                        Privacy Policy
                    </Link>
                </nav>
            </div>
        </footer>
    );
}

function FacebookIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
        >
            <path d='M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' />
        </svg>
    );
}

function InstagramIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
        >
            <rect width='20' height='20' x='2' y='2' rx='5' ry='5' />
            <path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z' />
            <line x1='17.5' x2='17.51' y1='6.5' y2='6.5' />
        </svg>
    );
}

function LinkedinIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
        >
            <path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z' />
            <rect width='4' height='12' x='2' y='9' />
            <circle cx='4' cy='4' r='2' />
        </svg>
    );
}

function TwitterIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
        >
            <path d='M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z' />
        </svg>
    );
}

function YoutubeIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
        >
            <path d='M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17' />
            <path d='m10 15 5-3-5-3z' />
        </svg>
    );
}

function GithubIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
        >
            <path d='M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4' />
            <path d='M9 18c-4.51 2-5-2-7-2' />
        </svg>
    );
}
