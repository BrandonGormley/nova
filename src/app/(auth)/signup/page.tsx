'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/app/utils/supabase/client';
import SignUpForm from '@/app/components/ui/SignUpForm';
import { FormEvent } from 'react';

export default function SignupPage() {
    const router = useRouter();
    const [formError, setFormError] = useState('');

    const handleSubmit = async (
        e: FormEvent,
        email: string,
        password: string
    ) => {
        e.preventDefault();

        const supabase = createClient();
        const { error } = await supabase.auth.signUp({
            email,
            password,
            options: {
                emailRedirectTo: `${location.origin}/api/auth/callback`,
            },
        });

        if (error) {
            setFormError(error.message);
        }

        if (!error) {
            router.push('/verify');
        }
    };

    return (
        <main className='flex-1 py-8 px-6 flex flex-col min-h-screen w-full max-w-[1440px] mx-auto'>
            <h2 className='text-2xl font-bold mb-8 w-full mx-auto text-gray-800 text-center'>
                Sign Up
            </h2>
            <SignUpForm handleSubmit={handleSubmit} />
            {formError && <div className='text-red'>{formError}</div>}
        </main>
    );
}
