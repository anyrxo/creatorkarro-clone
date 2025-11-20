import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client for middleware
// Note: Middleware runs on Edge Runtime, so standard env vars work
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// Define public routes that don't require authentication
const isPublicRoute = createRouteMatcher([
  '/',
  '/sign-in(.*)',
  '/sign-up(.*)',
  '/instagram-ignited',
  '/ai-influencers',
  '/digital-products',
  '/ai-automations',
  '/blog(.*)',
  '/story',
  '/resources',
  '/testimonials',
  '/contact',
  '/api/webhook(.*)',
  '/api/cron(.*)',
  '/api/indexnow(.*)',
  '/redeem',
  '/terms',
  '/privacy-policy',
  '/cookie-policy',
  '/refund-policy',
  '/favicon.ico',
  '/sitemap(.*)',
  '/robots.txt'
]);

// Routes that should NOT be treated as vanity codes
const reservedRoutes = [
  'admin', 'affiliate', 'learning', 'dashboard', 'settings', 'profile'
];

export default clerkMiddleware(async (auth, request) => {
  const url = new URL(request.url);
  const pathname = url.pathname.slice(1); // Remove leading slash

  // 1. Check for Vanity URL (Single segment path that isn't a known route)
  // e.g. iimagined.ai/callan
  if (pathname && !pathname.includes('/') && !reservedRoutes.includes(pathname) && !isPublicRoute(request)) {
    // Check if this code exists in Supabase
    const { data } = await supabase
      .from('affiliate_profiles')
      .select('user_id')
      .eq('code', pathname)
      .single();

    if (data) {
      // Redirect to homepage with ref param
      const redirectUrl = new URL('/', request.url);
      redirectUrl.searchParams.set('ref', data.user_id);
      return NextResponse.redirect(redirectUrl);
    }
  }

  // 2. Protect private routes
  if (!isPublicRoute(request)) {
    await auth.protect();
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and static files
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
