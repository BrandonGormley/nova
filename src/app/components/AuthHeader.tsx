import Link from 'next/link';
import Image from 'next/image';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function AuthHeader() {
    const supabase = createServerComponentClient({ cookies });
    const { data } = await supabase.auth.getSession();

    if (data.session) {
        redirect('/');
    }

    return (
        <header className='flex flex-row p-4 py-8 lg:p-8 w-full justify-between max-w-[1440px] mx-auto'>
            <Link href='/'>
                <Image
                    src='/nova-logo.png'
                    width={125}
                    height={75}
                    alt='Company  Logo'
                />
            </Link>
            <nav className='flex ml-4 w-full max-w-[100px] text-sm'>
                <ul className='flex flex-row items-center justify-between w-full font-medium'>
                    <li>
                        <Link
                            className='hover:underline underline-offset-4'
                            href='/login'
                        >
                            Login
                        </Link>
                    </li>
                    <li>
                        <Link
                            className='hover:underline underline-offset-4'
                            href='/signup'
                        >
                            Signup
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
