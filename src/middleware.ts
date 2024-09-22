import axios from 'axios'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked async if using await inside
export function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname
    const isPublicPath = path === '/admin' || path === '/'
     || path === '/about'
     || path.startsWith('/resources') 
     || path === '/podcast-list' 
     || path === '/recruiter' 
     || path === '/candidate'
    const token = request.cookies.get('token')?.value || ''

    // If the requested page isn't public, redirect them back to login
    if (!isPublicPath && !token) {
        if (path==='/admin') {
            return NextResponse.redirect(new URL('/admin', request.url))
        }
        if (path==='/candidate') {
            return NextResponse.redirect(new URL('/candidate', request.url))
        }
        if (path==='/recruiter') {
            return NextResponse.redirect(new URL('/recruiter', request.url))
        }
        
    }
    // If the requested page is public and the user has a token, redirect them to the dashboard
    if (isPublicPath && token) {
        if (path==='/admin') {
            return NextResponse.redirect(new URL('/admin/dashboard', request.url))
        }
        if (path==='/candidate') {
            return NextResponse.redirect(new URL('/candidate/dashboard', request.url))
        }
        if (path==='/recruiter') {
            return NextResponse.redirect(new URL('/recruiter/dashboard', request.url))
        }
    }
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: [
        '/',
        '/about',
        '/resources/:path*',
        '/podcast-list',
        '/podcast-list/:path*',
        '/admin/:path*',
        '/admin',
        '/recruiter',
        '/recruiter/:path*',
        '/candidate',
        '/candidate/:path*',
    ],
}