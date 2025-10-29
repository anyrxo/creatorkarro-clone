// International Layout - Country-specific pages
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Montserrat } from "next/font/google"
import Script from "next/script"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { 
  INTERNATIONAL_MARKETS, 
  generateInternationalMeta, 
  generateHreflangTags,
  generateInternationalSchema
} from "@/lib/international-seo"

const montserrat = Montserrat({ subsets: ["latin"] })

interface Props {
  children: React.ReactNode
  params: Promise<{ country: string }>
}

// Generate metadata for international pages
export async function generateMetadata({ params }: { params: Promise<{ country: string }> }): Promise<Metadata> {
  const resolvedParams = await params
  const countryCode = resolvedParams.country.toUpperCase()
  
  if (!INTERNATIONAL_MARKETS[countryCode]) {
    return {}
  }
  
  const meta = generateInternationalMeta(countryCode, '/')
  
  return {
    title: {
      default: meta.title,
      template: `%s | IImagined.ai - ${INTERNATIONAL_MARKETS[countryCode].country}`
    },
    description: meta.description,
    keywords: meta.keywords,
    alternates: {
      canonical: meta.canonical,
      languages: Object.fromEntries(
        Object.entries(INTERNATIONAL_MARKETS).map(([code, config]) => [
          config.hreflang,
          code === 'US' ? 'https://iimagined.ai/' : `https://iimagined.ai/${code.toLowerCase()}/`
        ])
      )
    },
    openGraph: {
      title: meta.openGraph.title,
      description: meta.openGraph.description,
      url: meta.openGraph.url,
      locale: meta.openGraph.locale,
      siteName: meta.openGraph.site_name,
      images: [{
        url: 'https://iimagined.ai/og-image.jpg',
        width: 1200,
        height: 630,
        alt: meta.title
      }]
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.twitter.title,
      description: meta.twitter.description,
      images: ['https://iimagined.ai/og-image.jpg']
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
    }
  }
}

// Generate static params for all supported countries
export async function generateStaticParams() {
  return Object.keys(INTERNATIONAL_MARKETS)
    .filter(code => code !== 'US') // US is the default route
    .map(country => ({
      country: country.toLowerCase()
    }))
}

export default async function CountryLayout({ children, params }: Props) {
  const resolvedParams = await params
  const countryCode = resolvedParams.country.toUpperCase()
  
  // Return 404 if country not supported
  if (!INTERNATIONAL_MARKETS[countryCode]) {
    notFound()
  }
  
  const config = INTERNATIONAL_MARKETS[countryCode]
  const hreflangs = generateHreflangTags('/')
  const schema = generateInternationalSchema(countryCode, 'home')
  
  return (
    <html lang={config.hreflang.split('-')[0]}>
      <head>
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* International SEO - Hreflang tags */}
        {hreflangs.map((hreflang, index) => (
          <div key={index} dangerouslySetInnerHTML={{ __html: hreflang }} />
        ))}
        
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
        
        {/* Country-specific meta */}
        <meta name="geo.region" content={countryCode} />
        <meta name="geo.country" content={countryCode} />
        <meta name="currency" content={config.currency} />
        <meta name="language" content={config.language} />
        
        {/* RSS Feed */}
        <link 
          rel="alternate" 
          type="application/rss+xml" 
          title={`IImagined.ai ${config.country} Blog`} 
          href={`https://iimagined.ai/${resolvedParams.country}/rss.xml`} 
        />
        
        {/* Structured Data - International Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className={montserrat.className}>
        {/* Google Analytics with country tracking */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX', {
                custom_map: {
                  'custom_parameter_1': 'country'
                }
              });
              gtag('event', 'page_view', {
                country: '${countryCode}',
                language: '${config.language}',
                currency: '${config.currency}'
              });
            `,
          }}
        />
        
        {/* Facebook Pixel with country tracking */}
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
              fbq('init', 'YOUR_PIXEL_ID');
              fbq('track', 'PageView', {
                country: '${countryCode}',
                language: '${config.language}',
                currency: '${config.currency}'
              });
            `,
          }}
        />
        
        {/* Country-specific navigation context */}
        <div data-country={countryCode} data-currency={config.currency} data-language={config.language}>
          <Navigation />
          <main className="pt-20">
            {children}
          </main>
          <Footer />
        </div>
        
        {/* Country-specific footer scripts */}
        <Script
          id="country-specific-tracking"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              // Set global country context
              window.iimaginedConfig = {
                country: '${countryCode}',
                currency: '${config.currency}',
                language: '${config.language}',
                timezone: '${config.timezone}'
              };
              
              // Track international page views
              if (typeof gtag !== 'undefined') {
                gtag('event', 'international_page_view', {
                  event_category: 'International',
                  country: '${countryCode}',
                  page_path: window.location.pathname
                });
              }
            `,
          }}
        />
      </body>
    </html>
  )
}