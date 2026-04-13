import { NextResponse } from 'next/server'

export function middleware() {
  // Allow all requests to pass through without locale routing
  return NextResponse.next()
}

export const config = {
  // Match all routes except static files and API routes
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)'],
}
