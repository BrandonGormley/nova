import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import BlogPostCard from './BlogPostCard';
import { BlogPost } from '@/app/lib/definitions';
import { cookies } from 'next/headers';

async function getData() {
    const supabase = createServerComponentClient({ cookies });

    const { data, error } = await supabase.from('blogposts').select();

    if (error) {
        console.log(error.message);
    }

    return data;
}

export default async function BlogPostList() {
    const blogposts: BlogPost[] | null = await getData();

    return (
        <ul className='flex flex-wrap w-full justify-center'>
            {blogposts &&
                blogposts.map((blogpost) => (
                    <li
                        className='border border-slate-100 shadow-md rounded-md m-4 w-full md:max-w-[40%] lg:max-w-[25%]'
                        key={blogpost.id}
                    >
                        <BlogPostCard {...blogpost} />
                    </li>
                ))}
            {!blogposts && <p>No blog posts available</p>}
        </ul>
    );
}
