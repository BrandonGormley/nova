interface BlogPostProps {
    params: {
        id: string;
    };
}

export interface BlogPost {
    id: number;
    title: string;
    body: string;
    date: string;
}

async function getData(id: string) {
    const res = await fetch(`https://nova-bg.vercel.app/api/blogposts/${id}`, {
        next: {
            revalidate: 0,
        },
    });
    return res.json();
}

export default async function BlogPost({ params }: BlogPostProps) {
    const blogpost: BlogPost = await getData(params.id);
    return (
        <main className='min-h-screen flex-1 py-8 px-6 flex flex-col w-full max-w-[1440px] mx-auto'>
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
        </main>
    );
}
