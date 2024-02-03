import Header from '@/app/components/Header';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const supabase = createServerComponentClient({ cookies });
    const { data } = await supabase.auth.getSession();

    return (
        <>
            <Header user={data.session?.user} />
            {children}
        </>
    );
}
