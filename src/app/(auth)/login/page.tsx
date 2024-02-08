'use client';
import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import LoginForm from '@/app/components/ui/auth/LoginForm';

export default function LoginPage() {
    const router = useRouter();
    const [formError, setFormError] = useState('');

    const handleSubmit = async (
        e: FormEvent,
        email: string,
        password: string
    ) => {
        e.preventDefault();
        setFormError('');

        const supabase = createClientComponentClient();
        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            setFormError(error.message);
        }

        if (!error) {
            router.push('/');
            router.refresh();
        }
    };
    return (
        <main className='flex-1 py-8 px-6 flex flex-col min-h-screen w-full max-w-[1440px] mx-auto'>
            <h2 className='text-2xl font-bold mb-8 w-full mx-auto text-gray-800 text-center'>
                Login
            </h2>
            <LoginForm handleSubmit={handleSubmit} />
            {formError && (
                <div className='text-red-400 font-bold text-center my-4 text-xs'>
                    {formError}
                </div>
            )}
        </main>
    );
}
