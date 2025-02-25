import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// Define public routes that don’t require authentication
const isPublicRoute = createRouteMatcher([
  "/",
  "/sign-in",
  "/sign-up",
]);

export default clerkMiddleware(async (auth, req) => {
  // Allow access to public routes
  if (isPublicRoute(req)) {
    return NextResponse.next();
  }

  // Await the auth() function before accessing userId
  const authObject = await auth();
  
  if (!authObject.userId) {
    return NextResponse.redirect(new URL("/sign-in", req.url));
  }

  return NextResponse.next();
});

// Ensure middleware runs on all routes except system paths
export const config = {
  matcher: "/((?!_next|static|favicon.ico).*)",
};
