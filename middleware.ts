import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';

export default async function middleware(request: NextRequest) {
    const defaultLocale = 'en';
    const locales = ['en', 'de'];
    const { pathname } = request.nextUrl;

    // Step 1: Skip middleware for root homepage
    if (pathname === '/') {
        return NextResponse.next();
    }

    // Step 2: Redirect "/locale/home" to "/locale"
    const segments = pathname.split('/').filter(Boolean); // Remove empty segments
    if (segments.length === 2 && locales.includes(segments[0]) && segments[1] === 'home') {
        const url = new URL(`/${segments[0]}`, request.url);
        return NextResponse.redirect(url, 308);
    }

    // Step 3: Use next-intl middleware for locale handling
    const handleI18nRouting = createMiddleware({
        locales,
        defaultLocale
    });

    return handleI18nRouting(request);
}

export const config = {
    // Match only internationalized pathnames
    matcher: ['/', '/(de|en)/:path*']
};
