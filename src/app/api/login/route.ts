import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
    const { SPOTIFY_CLIENT_ID, SPOTIFY_REDIRECT_URI } = process.env;

    if (!SPOTIFY_CLIENT_ID || !SPOTIFY_REDIRECT_URI) {
        throw new Error('Environment variables SPOTIFY_CLIENT_ID or SPOTIFY_REDIRECT_URI are not set.');
    }

    // Ubah scope di sini menjadi 'user-top-read' untuk mendapatkan top artists
    const scope = 'user-top-read';
    const spotifyAuthUrl = `https://accounts.spotify.com/authorize?response_type=code&client_id=${SPOTIFY_CLIENT_ID}&scope=${encodeURIComponent(
        scope
    )}&redirect_uri=${encodeURIComponent(SPOTIFY_REDIRECT_URI)}`;

    return NextResponse.redirect(spotifyAuthUrl);
}
