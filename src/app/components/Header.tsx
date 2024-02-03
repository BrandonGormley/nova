import Image from 'next/image';
import Link from 'next/link';
import LogoutButton from './ui/LogoutButton';

interface HeaderProps {
    user: any;
}

export default function Header({ user }: HeaderProps) {
    return (
        <header className='flex flex-row p-4 py-8 lg:p-8 w-full justify-between items-center max-w-[1440px] mx-auto'>
            <Link href='/'>
                <Image
                    src='/nova-logo.png'
                    width={125}
                    height={75}
                    alt='Company Logo'
                    quality={100}
                />
            </Link>
            <nav className='flex w-full text-xs md:text-sm items-center justify-center'>
                <ul className='flex flex-row items-center justify-center w-full font-medium text-gray-600 transition-all ml-4'>
                    {user && (
                        <span className='text-xs text-secondary'>
                            Hello {user.email}
                        </span>
                    )}
                    <li className='mr-4 ml-auto'>
                        <Link
                            className='hover:underline underline-offset-4 hover:text-gray-700'
                            href='/blog'
                        >
                            Blog
                        </Link>
                    </li>
                    <li className='mr-4'>
                        <Link
                            className='hover:underline underline-offset-4 hover:text-gray-700'
                            href='/about'
                        >
                            About
                        </Link>
                    </li>
                    {!user && (
                        <li>
                            <Link
                                className='hover:underline underline-offset-4 hover:text-gray-700'
                                href='/login'
                            >
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    viewBox='0 0 24 24'
                                    fill='currentColor'
                                    className='w-6 h-6 text-gray-800 hover:text-gray-700 transition-all'
                                >
                                    <path
                                        fillRule='evenodd'
                                        d='M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z'
                                        clipRule='evenodd'
                                    />
                                </svg>
                            </Link>
                        </li>
                    )}
                    {user && <LogoutButton />}
                </ul>
            </nav>
        </header>
    );
}
