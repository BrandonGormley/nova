import { NextResponse } from 'next/server';

interface BlogPostProps {
    params: {
        id?: string;
    };
}

export async function GET({ params }: BlogPostProps) {
    const res = await fetch(`http://localhost:4000/blogposts/${params.id}`);
    const blogpost = await res.json();

    if (!res.ok) {
        return NextResponse.json(
            {
                error: 'Can not find the blog post, sorry :(',
            },
            {
                status: 404,
            }
        );
    }

    return NextResponse.json(blogpost, {
        status: 200,
    });
}
