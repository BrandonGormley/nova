'use client';

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';

export default function LogoutButton() {
    const router = useRouter();
    const handleLogOut = async () => {
        const supabase = createClientComponentClient();
        const { error } = await supabase.auth.signOut();

        if (!error) {
            router.push('/login');
            router.refresh();
        }

        if (error) {
            console.log(error);
        }
    };
    return (
        <button
            onClick={handleLogOut}
            className='bg-secondary hover:bg-secondary-light transition-all text-white rounded-md text-center px-4 py-2 my-4'
        >
            Logout
        </button>
    );
}
