import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    const res = await fetch(`http://localhost:4000/blogposts`);
    const blogposts = await res.json();

    return NextResponse.json(blogposts, {
        status: 200,
    });
}

export async function POST(request: Request) {
    const blogpost = await request.json();

    const res = await fetch('http://localhost:4000/blogposts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(blogpost),
    });

    const newBlogPost = await res.json();

    return NextResponse.json(newBlogPost, {
        status: 201,
    });
}
