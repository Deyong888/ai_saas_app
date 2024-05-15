import { authMiddleware } from "@clerk/nextjs";
import { NextRequest, NextResponse } from "next/server";

export default function middleware(req: NextRequest) {
  const userAgent = req.headers.get('user-agent') || '';

  // Allow Googlebot to bypass authentication
  if (userAgent.includes('Googlebot')) {
    return NextResponse.next();
  }

  // Define a dummy event object
  const event = {
    request: req,
    response: NextResponse.next(),
  };

  // Use Clerk's authMiddleware for other requests
  return authMiddleware({
    publicRoutes: ['/', '/api/webhooks/clerk', '/api/webhooks/stripe']
  })(req, event);
}

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
