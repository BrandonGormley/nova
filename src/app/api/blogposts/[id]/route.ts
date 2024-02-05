import { NextResponse } from 'next/server';

interface BlogPostProps {
    params: {
        id?: string | undefined;
    };
}

// @ts-ignore
export async function GET(request: Request, { params }: BlogPostProps) {
    const res = await fetch(`/blogposts/${params.id}`);
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
