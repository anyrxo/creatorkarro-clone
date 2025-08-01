import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { siteConfig, defaultSEO, schemas } from "@/config/seo";
import { generateDynamicMeta } from "@/lib/meta-generator";

const montserrat = Montserrat({ subsets: ["latin"] });

// Generate AI-powered meta tags
const dynamicMeta = generateDynamicMeta({
  title: 'Master AI Automation & Instagram Growth | Transform Your Business Today',
  description: 'Revolutionary AI automation, Instagram growth, and digital product strategies that have generated $2.3M+ revenue. Join 127K+ entrepreneurs who dominate their markets.',
  keywords: [
    'ai automation mastery', 'instagram growth secrets', 'digital product empire',
    'passive income blueprint', 'content creation automation', 'social media domination',
    'youtube shorts viral', 'chatgpt business automation', 'comfyui workflows pro',
    'online business systems', 'make money online fast', 'entrepreneur success'
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
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
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
        {/* Google Analytics */}
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
        
        {/* Facebook Pixel */}
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
        
        <Navigation />
        <main className="pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
