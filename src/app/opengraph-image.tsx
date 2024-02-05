import { ImageResponse } from 'next/og';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const alt = 'About Acme';
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = 'image/png';

// Image generation
export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    display: 'flex',
                    height: '100%',
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    backgroundImage:
                        'linear-gradient(to bottom, white, #60efff)',
                    fontSize: 108,
                    letterSpacing: -2,
                    fontWeight: 700,
                    textAlign: 'center',
                }}
            >
                <div
                    style={{
                        backgroundImage:
                            'linear-gradient(90deg, rgb(0, 124, 240), rgb(0, 223, 216))',
                        backgroundClip: 'text',
                        color: 'transparent',
                        transform: 'translateY(28px)',
                    }}
                >
                    NOVA
                </div>
                <div
                    style={{
                        backgroundImage:
                            'linear-gradient(90deg, rgb(0, 124, 240), rgb(0, 223, 216))',
                        backgroundClip: 'text',
                        color: 'transparent',
                        transform: 'translateY(-24px)',
                        opacity: '.1',
                    }}
                >
                    Nova
                </div>
            </div>
        )
    );
}
