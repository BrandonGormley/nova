import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    const res = await fetch(`http://localhost:4000/blogposts`);
    const blogposts = await res.json();

    return NextResponse.json(blogposts, {
        status: 200,
    });
}
