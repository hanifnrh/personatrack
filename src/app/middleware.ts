// src/app/middleware.ts
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
    const token = req.cookies.get('access_token');

    // If there's no token, redirect to home
    if (!token) {
        return NextResponse.redirect(new URL('/', req.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: '/dashboard', // Apply the middleware only on the /dashboard route
};
