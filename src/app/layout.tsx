import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
// Professional icon system deployment
import Script from "next/script";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { FortressProvider } from "@/components/FortressProvider";
import ScrollProgressIndicator from "@/components/ScrollProgressIndicator";
import LoadingBar from "@/components/LoadingBar";
import PageTransition, { RouteLoader } from "@/components/PageTransition";
import { siteConfig, defaultSEO, schemas } from "@/config/seo";
import { generateDynamicMeta } from "@/lib/meta-generator";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import NodeBackground from "@/components/NodeBackground";

const montserrat = Montserrat({ subsets: ["latin"] });

// Generate AI-powered meta tags
const dynamicMeta = generateDynamicMeta({
  title: 'AI Automation Course & Instagram Growth Training | 10K+/Month Business Systems',
  description: 'Master N8N automation, Claude 4 AI, and Instagram growth strategies. 127K+ students building $10K+/month businesses with proven AI tools, social media marketing, and digital products systems.',
  keywords: [
    // High-Volume Course Keywords
    'ai automation course', 'instagram growth course', 'n8n course', 'automation training', 'social media course',
    'business automation course', 'digital marketing course', 'make money online course', 'passive income course',
    // AI & Automation Terms
    'ai automation', 'ai agents', 'workflow automation', 'business automation', 'marketing automation',
    'claude 4 ai', 'n8n automation', 'ai tools', 'automation tools', 'ai business tools',
    // Instagram Growth Keywords
    'instagram growth', 'how to grow instagram', 'instagram marketing', 'instagram followers',
    'instagram course', 'social media growth', 'instagram strategy', 'viral content creation',
    // Business & Income Keywords  
    'make money online', 'passive income', 'online business', 'digital products', 'side hustle',
    '10k per month', 'business course', 'entrepreneur course', 'income generation',
    // Tech Training Keywords
    'ai course', 'automation course', 'tech course', 'coding course', 'no code automation',
    'workflow course', 'productivity course', 'business systems', 'process automation'
  ]
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
  verification: {
    google: 'google-site-verification-code',
    yandex: 'yandex-verification-code',
    yahoo: 'yahoo-site-verification-code'
  },
  other: {
    'msvalidate.01': 'bing-site-verification-code',
    'facebook-domain-verification': 'facebook-domain-verification-code',
    'pinterest-verification': 'pinterest-site-verification-code',
    'p:domain_verify': 'pinterest-domain-verification-code'
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
        {/* DNS Prefetch & Preconnect for Performance */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://connect.facebook.net" />
        <link rel="dns-prefetch" href="https://vitals.vercel-insights.com" />
        
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://connect.facebook.net" />
        
        {/* Non-blocking font loading */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap"
          media="print"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var link = document.querySelector('link[href*="fonts.googleapis.com"]');
                if (link) {
                  link.media = 'all';
                }
              })();
            `
          }}
        />
        <noscript>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap"
          />
        </noscript>
        
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
        
        {/* Critical CSS - Inline for immediate rendering */}
        <style dangerouslySetInnerHTML={{
          __html: `
            /* Critical above-the-fold styles */
            body { margin: 0; padding: 0; background: #0a0a0a; color: #f9fafb; font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif; }
            .hero-section { min-height: 100vh; background: radial-gradient(ellipse at center, rgba(15, 23, 42, 0.15) 0%, rgba(15, 23, 42, 0.8) 70%, rgba(15, 23, 42, 1) 100%); }
            h1, h2 { font-weight: 700; line-height: 1.2; }
            .nav-fixed { position: fixed; top: 0; width: 100%; z-index: 50; backdrop-filter: blur(10px); }
            .gradient-text { background: linear-gradient(to right, #3b82f6, #8b5cf6); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
            @media (max-width: 768px) { h1 { font-size: 2.25rem; } }
          `
        }} />
      </head>
      <body className={montserrat.className}>
        {/* Google Analytics - Optimized Loading */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`} // Replace with actual GA ID
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX'); // Replace with actual GA ID
            `,
          }}
        />
        
        {/* Facebook Pixel - Deferred Loading */}
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
              fbq('init', 'YOUR_PIXEL_ID'); // Replace with actual Pixel ID
              fbq('track', 'PageView');
            `,
          }}
        />
        
        <FortressProvider>
          <NodeBackground />
          <LoadingBar />
          <RouteLoader />
          <ScrollProgressIndicator />
          <Navigation />
          <PageTransition>
            <main className="pt-20 page-enter relative z-10">
              {children}
            </main>
          </PageTransition>
          <Footer />
          <Analytics />
          <SpeedInsights />
        </FortressProvider>
      </body>
    </html>
  );
}
