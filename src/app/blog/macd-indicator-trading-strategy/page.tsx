import React from 'react'
import Link from 'next/link'
import { generateBlogPostSchema } from '@/lib/blog-schema'

export const metadata = {
  title: "MACD Indicator: Complete Trading Strategy Guide 2025",
  description: "Master MACD indicator trading with this complete guide. Learn MACD crossover strategies, divergence trading, and histogram analysis for profitable trades.",
  keywords: ["macd indicator","macd strategy","macd crossover","macd divergence","moving average convergence divergence"],
  authors: [{ name: "IImagined.ai Expert Team", url: "https://iimagined.ai" }],
  creator: "IImagined.ai",
  publisher: "IImagined.ai",
  category: "Trading & Finance",
  openGraph: {
    title: "MACD Indicator: Complete Trading Strategy Guide 2025",
    description: "Master MACD indicator trading with this complete guide. Learn MACD crossover strategies, divergence trading, and histogram analysis for profitable trades.",
    url: "https://iimagined.ai/blog/macd-indicator-trading-strategy",
    siteName: "IImagined.ai",
    type: "article",
    publishedTime: "2025-01-20T10:00:00.000Z",
    modifiedTime: "2025-10-20T12:50:48.604Z",
    authors: ["IImagined.ai Expert Team"],
    tags: ["macd indicator","macd strategy","macd crossover","macd divergence","moving average convergence divergence"],
    images: [{
      url: "https://iimagined.ai/images/macd-indicator-trading-strategy-og.jpg",
      width: 1200,
      height: 630,
      alt: "MACD Indicator: Complete Trading Strategy Guide 2025",
      type: "image/jpeg"
    }],
    locale: "en_US"
  },
  twitter: {
    card: "summary_large_image",
    site: "@iimagined_ai",
    creator: "@iimagined_ai",
    title: "MACD Indicator: Complete Trading Strategy Guide 2025",
    description: "Master MACD indicator trading with this complete guide. Learn MACD crossover strategies, divergence trading, and histogram analysis for profitable trades.",
    images: [{
      url: "https://iimagined.ai/images/macd-indicator-trading-strategy-og.jpg",
      alt: "MACD Indicator: Complete Trading Strategy Guide 2025"
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
    canonical: "https://iimagined.ai/blog/macd-indicator-trading-strategy"
  }
}

const schema = generateBlogPostSchema({
  title: metadata.title,
  description: metadata.description,
  slug: "macd-indicator-trading-strategy",
  publishedTime: metadata.openGraph.publishedTime,
  modifiedTime: metadata.openGraph.modifiedTime,
  category: metadata.category || "Technical Analysis",
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
              <span className="text-blue-400 text-sm font-semibold">TECHNICAL ANALYSIS</span>
            </div>

            <h1 className="text-3xl md:text-6xl font-bold mb-6 leading-tight text-white">
              MACD Indicator: Complete Trading Strategy Guide 2025
            </h1>

            <p className="text-lg md:text-xl text-gray-400 mb-8">
              Master MACD indicator trading with this complete guide. Learn MACD crossover strategies, divergence trading, and histogram analysis for profitable trades.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="prose prose-invert prose-lg max-w-none">
            
      <h2>MACD Indicator: From Basics to Profitable Trading</h2>
      <p>MACD (Moving Average Convergence Divergence) is a trend-following momentum indicator that shows the relationship between two moving averages.</p>

      <h3>Understanding MACD Components</h3>
      <ul>
        <li>MACD Line: 12 EMA - 26 EMA</li>
        <li>Signal Line: 9 EMA of MACD line</li>
        <li>Histogram: MACD line - Signal line</li>
      </ul>

      <h3>MACD Crossover Strategy</h3>
      <h4>Bullish Crossover</h4>
      <p>MACD line crosses above signal line = Buy signal. Strongest when crossing from below zero line.</p>

      <h4>Bearish Crossover</h4>
      <p>MACD line crosses below signal line = Sell signal. Strongest when crossing from above zero line.</p>

      <h3>MACD Histogram Trading</h3>
      <p>Growing histogram = strengthening trend. Shrinking histogram = weakening momentum, potential reversal ahead.</p>

      <h3>MACD Divergence Patterns</h3>
      <h4>Regular Divergence</h4>
      <p>Price and MACD moving in opposite directions signals potential trend reversal. Wait for MACD crossover confirmation.</p>

      <h4>Hidden Divergence</h4>
      <p>Signals trend continuation. Less reliable than regular divergence but useful for re-entries.</p>

      <h3>MACD Zero Line Strategy</h3>
      <p>MACD crossing above zero = bullish momentum building. MACD crossing below zero = bearish momentum building.</p>

      <h3>Best Timeframes for MACD</h3>
      <ul>
        <li>Day Trading: 5-min, 15-min charts</li>
        <li>Swing Trading: 1-hour, 4-hour charts</li>
        <li>Position Trading: Daily, weekly charts</li>
      </ul>

      <h3>MACD + Price Action</h3>
      <p>Combine MACD signals with support/resistance, trendlines, and candlestick patterns for higher win rates.</p>

      <h3>Avoiding MACD Whipsaws</h3>
      <p>MACD lags price action. Use it for confirmation, not primary entry signals. Best in trending markets, avoid in choppy conditions.</p>
    
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
