import { notFound } from 'next/navigation';
import { BlogPost } from '@/app/lib/definitions';
import { Suspense } from 'react';
import { LoadingSpinner } from '@/app/components/ui/LoadingSkeletons';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

interface BlogPostProps {
    params: {
        id: string;
    };
}

export async function generateMetadata({ params }: BlogPostProps) {
    const supabase = createServerComponentClient({ cookies });
    const { data: blogpost, error } = await supabase
        .from('blogposts')
        .select()
        .eq('id', params.id)
        .single();

    return {
        title: `Nova | ${blogpost?.title || 'Blogpost not found'}`,
    };
}

// Statically Builds pages ahead of time
// export async function generateStaticParams() {
//     const res = await fetch(`http://localhost:4000/blogposts`);
//     const blogposts = await res.json();

//     return blogposts.map((blogpost: BlogPost) => ({
//         id: blogpost.id,
//     }));
// }

async function getData(id: string) {
    const supabase = createServerComponentClient({ cookies });
    const { data } = await supabase
        .from('blogposts')
        .select()
        .eq('id', id)
        .single();

    if (!data) {
        notFound();
    }
    return data;
}

export default async function BlogPostDetail({ params }: BlogPostProps) {
    const blogpost: BlogPost = await getData(params.id);
    return (
        <main className='min-h-screen flex-1 py-8 px-6 flex flex-col w-full max-w-[1440px] mx-auto'>
            <Suspense fallback={<LoadingSpinner />}>
                <div className='p-6 flex flex-col'>
                    <div className='flex justify-between text-slate-400 text-sm md:text-xs xl:text-sm'>
                        <p>Blog Post: {blogpost.id}</p>
                        <p>{blogpost.date}</p>
                    </div>
                    <div className='py-4 text-slate-600'>
                        <p className='font-bold text-3xl'>{blogpost.title}</p>
                        <p className='text-base text-slate-500 my-2'>
                            {blogpost.body}
                        </p>
                    </div>
                </div>
            </Suspense>
        </main>
    );
}
