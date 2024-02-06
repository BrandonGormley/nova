import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

interface BlogPostProps {
    params: {
        id?: string | undefined;
    };
}

export async function DELETE(request: Request, { params }: BlogPostProps) {
    const id = params.id;
    console.log(id);

    const supabase = createRouteHandlerClient({ cookies });

    const { error } = await supabase.from('blogposts').delete().eq('id', id);

    return NextResponse.json({ error });
}
