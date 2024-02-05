import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(request: Request) {
    const blogpost = await request.json();

    // Get supabase instance
    const supabase = createRouteHandlerClient({ cookies });

    // Get current user session
    const {
        data: { session },
    } = await supabase.auth.getSession();

    // Insert data into supabase
    const { data, error } = await supabase
        .from('blogposts')
        .insert({ ...blogpost })
        .select()
        .single();

    return NextResponse.json({ data, error });
}
