import Link from 'next/link';

interface BlogPostProps {
    id: number;
    title: string;
    body: string;
    date: string;
}

export default function BlogPost({ id, title, body, date }: BlogPostProps) {
    return (
        <div className='p-6 flex flex-col'>
            <div className='flex justify-between text-slate-400 text-sm md:text-xs xl:text-sm'>
                <p>Blog Post: {id}</p>
                <p>{date}</p>
            </div>
            <div className='py-4 text-slate-600'>
                <p className='font-bold'>{title}</p>
                <p className='text-sm text-slate-500 mb-2'>
                    {body.slice(0, 200)}
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
