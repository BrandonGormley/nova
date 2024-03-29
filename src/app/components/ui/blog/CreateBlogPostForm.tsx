'use client';
import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CreateBlogPostForm() {
    const router = useRouter();

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [date, setDate] = useState('');
    const [createdBy, setCreatedBy] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        setIsLoading(true);

        const blogPost = {
            title,
            body,
            date,
            createdBy,
        };

        const res = await fetch('/api/blogposts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(blogPost),
        });

        const data = await res.json();

        if (data.error) {
            console.log(data.error.message);
        }

        if (data.data) {
            router.push('/blog');
            router.refresh();
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className='w-full lg:w-1/3 mx-auto flex flex-col bg-gray-100 rounded-lg p-8'
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
            <label className='flex flex-col text-gray-600'>
                <span className='my-2'>Created By:</span>
                <input
                    className='rounded py-1 outline-gray-400 border-none pl-2'
                    required
                    type='text'
                    onChange={(e) => setCreatedBy(e.target.value)}
                    value={createdBy}
                ></input>
            </label>
            <button
                className='bg-secondary text-white rounded-md text-center px-4 py-2 w-full mx-auto  my-4 hover:bg-secondary-light transition-all'
                disabled={isLoading}
            >
                {isLoading && 'Adding...'}
                {!isLoading && 'Add Blog Post'}
            </button>
        </form>
    );
}
