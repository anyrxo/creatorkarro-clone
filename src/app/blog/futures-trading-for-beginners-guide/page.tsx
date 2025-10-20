import React from 'react'
import Link from 'next/link'
import { generateBlogPostSchema } from '@/lib/blog-schema'

export const metadata = {
  title: "Futures Trading for Beginners: Complete 2025 Guide",
  description: "Learn futures trading from scratch. Understand contracts, margin requirements, tick values, and proven strategies to start trading futures profitably.",
  keywords: ["futures trading","how to trade futures","futures contracts","futures for beginners","es futures","nq futures"],
  authors: [{ name: "IImagined.ai Expert Team", url: "https://iimagined.ai" }],
  creator: "IImagined.ai",
  publisher: "IImagined.ai",
  category: "Futures Trading",
  openGraph: {
    title: "Futures Trading for Beginners: Complete 2025 Guide",
    description: "Learn futures trading from scratch. Understand contracts, margin requirements, tick values, and proven strategies to start trading futures profitably.",
    url: "https://iimagined.ai/blog/futures-trading-for-beginners-guide",
    siteName: "IImagined.ai",
    type: "article",
    publishedTime: "2025-01-20T10:00:00.000Z",
    modifiedTime: "2025-10-20T12:50:48.606Z",
    authors: ["IImagined.ai Expert Team"],
    tags: ["futures trading","how to trade futures","futures contracts","futures for beginners","es futures","nq futures"],
    images: [{
      url: "https://iimagined.ai/images/futures-trading-for-beginners-guide-og.jpg",
      width: 1200,
      height: 630,
      alt: "Futures Trading for Beginners: Complete 2025 Guide",
      type: "image/jpeg"
    }],
    locale: "en_US"
  },
  twitter: {
    card: "summary_large_image",
    site: "@iimagined_ai",
    creator: "@iimagined_ai",
    title: "Futures Trading for Beginners: Complete 2025 Guide",
    description: "Learn futures trading from scratch. Understand contracts, margin requirements, tick values, and proven strategies to start trading futures profitably.",
    images: [{
      url: "https://iimagined.ai/images/futures-trading-for-beginners-guide-og.jpg",
      alt: "Futures Trading for Beginners: Complete 2025 Guide"
    }]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  alternates: {
    canonical: "https://iimagined.ai/blog/futures-trading-for-beginners-guide"
  }
}

const schema = generateBlogPostSchema({
  title: metadata.title,
  description: metadata.description,
  slug: "futures-trading-for-beginners-guide",
  publishedTime: metadata.openGraph.publishedTime,
  modifiedTime: metadata.openGraph.modifiedTime,
  category: metadata.category || "Futures Trading",
  keywords: metadata.keywords || [],
  image: metadata.openGraph.images[0].url
})

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-dark">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <section className="section-spacing overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-5xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
              <span className="text-blue-400 text-sm font-semibold">FUTURES TRADING</span>
            </div>

            <h1 className="text-3xl md:text-6xl font-bold mb-6 leading-tight text-white">
              Futures Trading for Beginners: Complete 2025 Guide
            </h1>

            <p className="text-lg md:text-xl text-gray-400 mb-8">
              Learn futures trading from scratch. Understand contracts, margin requirements, tick values, and proven strategies to start trading futures profitably.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="prose prose-invert prose-lg max-w-none">
            
      <h2>Futures Trading 101: Everything Beginners Need to Know</h2>
      <p>Futures trading offers leverage, liquidity, and 24-hour markets. This guide covers everything you need to start trading futures successfully.</p>

      <h3>What Are Futures Contracts?</h3>
      <p>Futures are standardized contracts to buy or sell an asset at a predetermined price on a specific date. You don't own the underlying asset - you're speculating on price movement.</p>

      <h3>Popular Futures Markets</h3>
      <ul>
        <li>ES (E-mini S&P 500): $50/point, most liquid</li>
        <li>NQ (E-mini Nasdaq): $20/point, tech-heavy</li>
        <li>YM (E-mini Dow): $5/point, industrial focus</li>
        <li>CL (Crude Oil): $1,000/point, volatile energy market</li>
        <li>GC (Gold): $100/point, safe-haven asset</li>
      </ul>

      <h3>Understanding Margin Requirements</h3>
      <p>Futures use initial margin (to open position) and maintenance margin (to keep position open). ES requires $12,650 initial margin, $11,500 maintenance.</p>

      <h3>Tick Size & Tick Value</h3>
      <p>ES tick = 0.25 points = $12.50. If ES moves from 4500.00 to 4500.25, that's $12.50 per contract profit/loss.</p>

      <h3>Trading Sessions</h3>
      <ul>
        <li>Pre-market: 6 PM - 9:30 AM ET</li>
        <li>Regular Session: 9:30 AM - 4:00 PM ET</li>
        <li>After Hours: 4:00 PM - 6:00 PM ET</li>
      </ul>

      <h3>Risk Management Essentials</h3>
      <p>Never risk more than 1-2% of your account per trade. Use stop losses ALWAYS. Start with micro futures (MES, MNQ) that are 1/10th the size.</p>

      <h3>Beginner Strategy: Opening Range Breakout</h3>
      <p>Mark the high/low of the first 30 minutes. Buy breakout above high, short breakout below low. Simple and effective.</p>

      <h3>Common Beginner Mistakes</h3>
      <ul>
        <li>Trading full ES contract with small account (use MES instead)</li>
        <li>No stop loss or stop too wide</li>
        <li>Trading overnight news without experience</li>
        <li>Overtrading during low-volume periods</li>
      </ul>

      <h3>Next Steps</h3>
      <p>Open a sim account with a futures broker. Practice for 3 months or until you're consistently profitable. Then start with 1 micro contract.</p>
    
          </div>

          <div className="mt-16 p-8 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl border border-blue-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Start Trading?</h3>
            <p className="text-gray-300 mb-6">
              Access our FX Trading course with live market analysis, real-time charts, and proven strategies.
            </p>
            <Link href="/fx-trading" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-semibold text-white hover:from-blue-500 hover:to-purple-500 transition-all">
              Explore FX Trading →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
