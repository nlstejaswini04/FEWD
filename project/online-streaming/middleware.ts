import { authMiddleware, clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

// Create route matchers for public routes
const isPublicRoute = createRouteMatcher(['/','/sign-in(.*)', '/sign-up(.*)', '/api/webhooks(.*)',"/api/uploadthing","/:username","/search"])

// Middleware to handle Clerk auth and protect private routes
export default clerkMiddleware((auth, req) => {
  if (!isPublicRoute(req)) {
    auth().protect() // Protect private routes
  }
})

// Export config for the middleware matcher
export const config = {
  matcher: [
    // Exclude Next.js internals and static assets, except when required for search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always match API routes
    '/(api|trpc)(.*)',
  ],
}
