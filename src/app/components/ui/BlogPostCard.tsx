import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import Link from 'next/link';
import DeleteButton from './DeleteButton';

interface BlogPostProps {
    id: string;
    title: string;
    body: string;
    date: string;
    createdBy: string;
}

export default async function BlogPost({
    id,
    title,
    body,
    date,
    createdBy,
}: BlogPostProps) {
    const supabase = createServerComponentClient({ cookies });
    const data = await supabase.auth.getSession();

    return (
        <div className='p-6 flex flex-col relative'>
            {data.data.session && <DeleteButton id={id} />}
            <div className='flex justify-between text-slate-400 text-sm md:text-xs xl:text-sm'>
                <p>{date}</p>
                <p>{createdBy}</p>
            </div>
            <div className='py-4 text-slate-600'>
                <p className='font-bold'>{title}</p>
                <p className='text-sm text-slate-500 mb-2'>
                    {body.slice(0, 200)}...
                </p>
                <Link
                    className='text-xs text-slate-400 hover:text-slate-500 transition-all'
                    href={`/blog/${id}`}
                >
                    Read More...
                </Link>
            </div>
        </div>
    );
}
