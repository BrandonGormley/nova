import BlogPostCard from './BlogPostCard';
import { BlogPost } from '@/app/lib/definitions';

async function getData() {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const res = await fetch(`http://localhost:4000/blogposts`, {
        next: {
            revalidate: 60,
        },
    });
    return res.json();
}

export default async function BlogPostList() {
    const blogposts: BlogPost[] = await getData();
    return (
        <ul className='flex flex-wrap w-full'>
            {blogposts.map((blogpost) => (
                <li
                    className='border border-slate-100 shadow-md rounded-md m-4 w-full max-w-[25%]'
                    key={blogpost.id}
                >
                    <BlogPostCard {...blogpost} />
                </li>
            ))}
            {blogposts.length === 0 && <p>No blog posts available</p>}
        </ul>
    );
}
