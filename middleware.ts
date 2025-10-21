import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('admin_token')?.value || 
                request.headers.get('authorization')?.replace('Bearer ', '');
  
  // Allow access to login page
  if (request.nextUrl.pathname === '/admin/login') {
    return NextResponse.next();
  }
  
  // Check if accessing admin routes
  if (request.nextUrl.pathname.startsWith('/admin')) {
    // For now, we'll use localStorage on client side
    // In production, you'd want proper JWT validation
    return NextResponse.next();
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: '/admin/:path*',
};
