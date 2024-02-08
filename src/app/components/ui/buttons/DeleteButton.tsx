'use client';

import { useState } from 'react';
import { TiDelete } from 'react-icons/ti';
import { useRouter } from 'next/navigation';

interface DeleteButtonprops {
    id: string;
}

export default function DeleteButton({ id }: DeleteButtonprops) {
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleDelete = async () => {
        setIsLoading(true);
        const res = await fetch(`/api/blogposts/${id}`, {
            method: 'DELETE',
        });
        const data = await res.json();

        if (data.error) {
            console.log(data.error);
        }

        if (!data.error) {
            setIsLoading(false);
            router.push('/blog');
            router.refresh();
        }
    };
    return (
        <button
            className='bg-red-400 hover:bg-red-500 transition-all text-white text-center ml-auto flex items-center text-xs rounded-full py-1 px-2'
            onClick={handleDelete}
        >
            {!isLoading && (
                <>
                    <TiDelete />
                    Delete
                </>
            )}
            {isLoading && (
                <>
                    <TiDelete />
                    Deleting...
                </>
            )}
        </button>
    );
}
