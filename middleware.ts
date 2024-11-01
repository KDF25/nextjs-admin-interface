import { NextResponse } from 'next/server';

export function middleware(req: Request) {
  // Your middleware logic here
  return NextResponse.next();
}

// Optional: Configure your middleware to run on specific routes
export const config = {
  matcher: ['/your-route/(.*)'], // Adjust this to your routing needs
};
