import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isProtectedRoute = createRouteMatcher([
    '/dashboard(.*)',
    '/events(.*)',
    '/meetings(.*)',
    '/availability(.*)',
]);

export default clerkMiddleware((auth,req)=>{
    if(!auth().userId && isProtectedRoute(req)){
      const signInUrl = new URL("/sign-in", req.url);
      return NextResponse.redirect(signInUrl);
        // return auth().redirectToSignIn();
    }
}); 



export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};