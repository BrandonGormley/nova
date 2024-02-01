'use client';
import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CreateBlogPostForm() {
    const router = useRouter();

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [date, setDate] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        setIsLoading(true);

        const blogPost = {
            title,
            body,
            date,
        };

        const res = await fetch('http://localhost:4000/blogposts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(blogPost),
        });

        if (res.status === 201) {
            router.refresh();
            router.push('/blog');
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className='w-1/2 mx-auto flex flex-col bg-gray-100 rounded-lg p-8'
        >
            <label className='flex flex-col text-gray-600'>
                <span className='my-2'>Date:</span>
                <input
                    className='rounded py-1 outline-gray-400 border-none pl-2'
                    type='text'
                    required
                    onChange={(e) => setDate(e.target.value)}
                    value={date}
                />
            </label>
            <label className='flex flex-col text-gray-600'>
                <span className='my-2'>Title:</span>
                <input
                    className='rounded py-1 outline-gray-400 border-none pl-2'
                    type='text'
                    required
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />
            </label>
            <label className='flex flex-col text-gray-600'>
                <span className='my-2'>Body:</span>
                <textarea
                    className='rounded py-1 outline-gray-400 border-none pl-2'
                    required
                    onChange={(e) => setBody(e.target.value)}
                    value={body}
                ></textarea>
            </label>
            <button
                className='bg-secondary text-white rounded-md text-center px-4 py-2 w-full mx-auto max-w-[33%] my-4'
                disabled={isLoading}
            >
                {isLoading && 'Adding...'}
                {!isLoading && 'Add Blog Post'}
            </button>
        </form>
    );
}
