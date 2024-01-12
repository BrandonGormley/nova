import BlogPost from './BlogPost';

export interface BlogPost {
    id: number;
    title: string;
    body: string;
    date: string;
    recent: string;
}

async function getData() {
    const res = await fetch(`http://localhost:4000/blogposts`, {
        next: {
            revalidate: 0,
        },
    });
    return res.json();
}

export default async function BlogPostList() {
    const blogposts: BlogPost[] = await getData();
    return (
        <ul className='flex flex-wrap'>
            {blogposts.map((blogpost) => (
                <li
                    className='border border-slate-100 shadow-md rounded-md m-4 w-full md:max-w-[45%] lg:max-w-[22%]'
                    key={blogpost.id}
                >
                    <BlogPost {...blogpost} />
                </li>
            ))}
        </ul>
    );
}
