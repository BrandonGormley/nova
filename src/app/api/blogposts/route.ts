import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    return NextResponse.json({
        blogposts: [
            {
                id: '4',
                title: 'Maintaing habits & goals',
                body: 'Maintaining habits and goals requires dedication and strategic planning. Starting small and staying consistent are key principles in forming positive habits. Breaking down larger goals into manageable tasks and prioritizing them fosters progress. Goals provide direction and purpose, but maintaining focus and adapting to changes are ongoing challenges. Celebrating milestones reinforces positive behavior. Resilience is crucial in overcoming challenges, viewing them as opportunities for learning. A support system provides encouragement, and reflection allows for adjustments. In the journey of personal development, embracing the process and celebrating small victories contribute to lasting success.',
                date: 'January 12th, 2024',
                recent: 'true',
            },
            {
                id: '3',
                title: 'Everyday Learner',
                body: "In the intricate tapestry of life, every day presents itself as a unique lesson waiting to be learned. The experiences we encounter, much like a temporal dance, shape our understanding of the world around us. January 4th, 2024 becomes a milestone in our continual quest for knowledge and self-discovery. The sagittis of daily challenges pierce through the mundane, revealing the extraordinary within the ordinary. As we navigate the routine, the potential for transformation lies dormant, waiting to be awakened. Each moment, each encounter, contributes to the ongoing journey of growth. Adapting to life's varius experiences, we become the architects of our own wisdom. The wisdom gained from everyday learning becomes a guiding force, illuminating our path through the intricate maze of existence. May the symphony of tristique moments compose the soundtrack of our ongoing journey into the realms of understanding.",
                date: 'January 4th, 2024',
                recent: 'false',
            },
            {
                id: '2',
                title: 'New Year, New Me',
                body: 'With the arrival of 2024, a fresh canvas awaits, ready to be painted with the colors of change. The journey of self-discovery continues, and as January 1st, 2024 unfolds, it brings with it the promise of growth and transformation. The melody of time echoes in the air, reminding us that change is an inevitable part of life. As we navigate the twists and turns, facing challenges with resilience, we unsheathe the sword of determination. Each moment is an opportunity to carve our path and embrace the courage required for the journey ahead. Embracing the strength within, we stride confidently into the unknown, ready to embrace the possibilities that the new year holds. Let the strokes of change paint a vibrant picture of self-renewal as we welcome the dawn of a new chapter.',
                date: 'January 1st, 2024',
                recent: 'false',
            },
            {
                id: '1',
                title: 'End of 2023',
                body: "As we approach the end of 2023, it's a time for reflection and contemplation. The journey of the past year has been a tapestry of experiences, leading us to this significant moment. On December 31st, 2023, we stand at the threshold of a new chapter. The symphony of time plays its tune, marking the passage of moments like a well-composed melody. In the complex dance of life, where challenges may arise and potentials unfold, we find ourselves at a point of transition. Drawing strength from within, we navigate the uncertainties that lie ahead. Each experience, like the strokes of a painter's brush, contributes to the masterpiece of our lives. Let us bid farewell to the known and embrace the unknown as we step into the canvas of a new year.",
                date: 'December 31st, 2023',
                recent: 'false',
            },
        ],
    });
}
