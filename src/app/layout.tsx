import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
// Professional icon system deployment
import Script from "next/script";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ClientOnlyFortress from "@/components/ClientOnlyFortress";
import ScrollProgressIndicator from "@/components/ScrollProgressIndicator";
import LoadingBar from "@/components/LoadingBar";
import PageTransition, { RouteLoader } from "@/components/PageTransition";
import { siteConfig, defaultSEO, schemas, pageSEO } from "@/config/seo";
import { generateDynamicMeta } from "@/lib/meta-generator";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import ClientOnlyBackground from "@/components/ClientOnlyBackground";
import SkipToContent from "@/components/SkipToContent";
import ErrorBoundary from "@/components/ErrorBoundary";
import { WebVitals } from "./web-vitals";
import { AuthProvider } from "@/components/auth/AuthProvider";
import AffiliateTracker from "@/components/AffiliateTracker"; // Import tracking component
import { Suspense } from "react";

const montserrat = Montserrat({ subsets: ["latin"] });

// Generate AI-powered meta tags
const dynamicMeta = generateDynamicMeta({
  title: pageSEO.home.title,
  description: pageSEO.home.description,
  keywords: siteConfig.keywords
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: dynamicMeta.title,
    template: `%s | ${siteConfig.name}`
  },
  description: dynamicMeta.description,
  keywords: dynamicMeta.keywords,
  authors: [{ name: "Anyro", url: `${siteConfig.url}/about` }],
  creator: "Anyro",
  publisher: siteConfig.name,
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    title: defaultSEO.title,
    description: defaultSEO.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: defaultSEO.openGraph.images,
    locale: defaultSEO.openGraph.locale,
    type: defaultSEO.openGraph.type as 'website',
  },
  twitter: {
    card: defaultSEO.twitter.cardType as 'summary_large_image',
    title: defaultSEO.title,
    description: defaultSEO.description,
    creator: defaultSEO.twitter.handle,
    site: defaultSEO.twitter.site,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Preload critical images */}
        <link rel="preload" href="/hero-bg.webp" as="image" type="image/webp" />

        {/* Resource Hints for Better Performance */}
        <link rel="prefetch" href="/instagram-ignited" />
        <link rel="prefetch" href="/n8n-ai-automations" />
        <link rel="prefetch" href="/digital-products" />

        {/* Favicon set */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Additional SEO meta tags */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

        {/* RSS Feed */}
        <link rel="alternate" type="application/rss+xml" title={`${siteConfig.name} Blog`} href={`${siteConfig.url}/rss.xml`} />

        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.organization) }}
        />

        {/* Structured Data - Website */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.website) }}
        />

      </head>
      <body className={montserrat.className}>
        <AuthProvider>
          <Suspense fallback={null}>
            <AffiliateTracker /> {/* Track referrals on every page load */}
          </Suspense>
          <SkipToContent />

          {/* ===== ANALYTICS CONFIGURATION ===== */}

          {/* Google Analytics 4 (GA4) */}
          {process.env.NEXT_PUBLIC_GA_ID && (
            <>
              <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              />
              <Script
                id="google-analytics"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                  __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
                `,
                }}
              />
            </>
          )}

          {/* Facebook Pixel */}
          {process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID && (
            <Script
              id="facebook-pixel"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '${process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID}');
                fbq('track', 'PageView');
              `,
              }}
            />
          )}

          {/* Google Analytics - Direct Integration */}
          <Script
            strategy="afterInteractive"
            src="https://www.googletagmanager.com/gtag/js?id=G-KXTFWR75V4"
            width="0" 
            height="0"
          />
          <Script
            id="google-analytics-direct"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-KXTFWR75V4');
            `,
            }}
          />

          {/* Microsoft Clarity */}
          <Script
            id="microsoft-clarity"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "u6hrhbzb63");
            `,
            }}
          />

          {/* Polar Checkout Script */}
          <Script
            src="https://cdn.jsdelivr.net/npm/@polar-sh/checkout@0.1/dist/embed.global.js"
            strategy="afterInteractive"
            defer
            data-auto-init
          />

          <ErrorBoundary>
            <ClientOnlyFortress>
              <ClientOnlyBackground />
              <LoadingBar />
              <RouteLoader />
              <ScrollProgressIndicator />
              <Navigation />
              <PageTransition>
                <main id="main-content" className="pt-20 page-enter relative z-10">
                  {children}
                </main>
              </PageTransition>
              <Footer />
              {/* Vercel Analytics - Disabled to reduce client-side JS */}
              {/* <Analytics />
            <SpeedInsights /> */}
            </ClientOnlyFortress>
          </ErrorBoundary>

          {/* Web Vitals Performance Monitoring */}
          <WebVitals />
        </AuthProvider>
      </body>
    </html>
  );
}
