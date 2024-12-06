// callback/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const code = searchParams.get('code');

    if (!code) {
        return NextResponse.json({ error: 'Authorization code is missing.' }, { status: 400 });
    }

    try {
        const response = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization: `Basic ${Buffer.from(
                    `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
                ).toString('base64')}`,
            },
            body: new URLSearchParams({
                grant_type: 'authorization_code',
                code,
                redirect_uri: process.env.SPOTIFY_REDIRECT_URI!,
            }).toString(),
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('Error while exchanging code for token:', errorData);
            return NextResponse.json({ error: 'Failed to exchange code.', details: errorData }, { status: 400 });
        }

        const data = await response.json();
        const token = data.access_token;

        // Optionally, store the token in an HttpOnly cookie
        const res = NextResponse.redirect(`${req.nextUrl.origin}/dashboard`);
        res.cookies.set('access_token', token, {
            path: '/', // Cookie tersedia di seluruh aplikasi
            maxAge: 60 * 60 * 24 * 7, // Cookie berlaku selama 7 hari
            secure: process.env.NODE_ENV === 'production', // Secure hanya di produksi
        });
        return res;


    } catch (error) {
        console.error('Unexpected error occurred:', error);
        return NextResponse.json({ error: 'Unexpected error occurred.', details: error instanceof Error ? error.message : error }, { status: 500 });
    }
}
