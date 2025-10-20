import React from 'react'
import Link from 'next/link'
import { generateBlogPostSchema } from '@/lib/blog-schema'

export const metadata = {
  title: "Topstep vs MyFundedTrader: Complete 2025 Comparison",
  description: "Detailed comparison of Topstep and MyFundedTrader prop firms. Discover which funded trading program offers better profit splits, evaluation rules, and trader support.",
  keywords: ["topstep","myfundedtrader","prop firm comparison","funded trading","futures trading","prop firm review"],
  authors: [{ name: "IImagined.ai Expert Team", url: "https://iimagined.ai" }],
  creator: "IImagined.ai",
  publisher: "IImagined.ai",
  category: "Prop Firms",
  openGraph: {
    title: "Topstep vs MyFundedTrader: Complete 2025 Comparison",
    description: "Detailed comparison of Topstep and MyFundedTrader prop firms. Discover which funded trading program offers better profit splits, evaluation rules, and trader support.",
    url: "https://iimagined.ai/blog/topstep-vs-myfundedtrader-comparison",
    siteName: "IImagined.ai",
    type: "article",
    publishedTime: "2025-01-20T10:00:00.000Z",
    modifiedTime: "2025-10-20T12:50:48.596Z",
    authors: ["IImagined.ai Expert Team"],
    tags: ["topstep","myfundedtrader","prop firm comparison","funded trading","futures trading","prop firm review"],
    images: [{
      url: "https://iimagined.ai/images/topstep-vs-myfundedtrader-comparison-og.jpg",
      width: 1200,
      height: 630,
      alt: "Topstep vs MyFundedTrader: Complete 2025 Comparison",
      type: "image/jpeg"
    }],
    locale: "en_US"
  },
  twitter: {
    card: "summary_large_image",
    site: "@iimagined_ai",
    creator: "@iimagined_ai",
    title: "Topstep vs MyFundedTrader: Complete 2025 Comparison",
    description: "Detailed comparison of Topstep and MyFundedTrader prop firms. Discover which funded trading program offers better profit splits, evaluation rules, and trader support.",
    images: [{
      url: "https://iimagined.ai/images/topstep-vs-myfundedtrader-comparison-og.jpg",
      alt: "Topstep vs MyFundedTrader: Complete 2025 Comparison"
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
    canonical: "https://iimagined.ai/blog/topstep-vs-myfundedtrader-comparison"
  }
}

const schema = generateBlogPostSchema({
  title: metadata.title,
  description: metadata.description,
  slug: "topstep-vs-myfundedtrader-comparison",
  publishedTime: metadata.openGraph.publishedTime,
  modifiedTime: metadata.openGraph.modifiedTime,
  category: metadata.category || "Prop Firms",
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
              <span className="text-blue-400 text-sm font-semibold">PROP FIRMS</span>
            </div>

            <h1 className="text-3xl md:text-6xl font-bold mb-6 leading-tight text-white">
              Topstep vs MyFundedTrader: Complete 2025 Comparison
            </h1>

            <p className="text-lg md:text-xl text-gray-400 mb-8">
              Detailed comparison of Topstep and MyFundedTrader prop firms. Discover which funded trading program offers better profit splits, evaluation rules, and trader support.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="prose prose-invert prose-lg max-w-none">
            
      <h2>Topstep vs MyFundedTrader: Which Prop Firm is Right for You?</h2>
      <p>Choosing the right prop firm can make or break your funded trading career. In this comprehensive comparison, we'll analyze Topstep and MyFundedTrader across key metrics.</p>

      <h3>Account Sizes & Profit Targets</h3>
      <p>Topstep offers account sizes from $50K to $150K with daily loss limits of $2K-$3K. MyFundedTrader provides $50K-$150K accounts with more flexible profit targets and drawdown rules.</p>

      <h3>Evaluation Process</h3>
      <p>Topstep requires traders to meet profit targets while staying within daily and total loss limits. MyFundedTrader uses a similar model but with different scaling options.</p>

      <h3>Profit Splits</h3>
      <p>Both firms offer competitive profit splits starting at 80%, with Topstep reaching 90% for experienced traders and MyFundedTrader offering up to 90% immediately.</p>

      <h3>Trading Rules & Restrictions</h3>
      <p>Topstep allows overnight holding with position limits. MyFundedTrader offers more flexibility but enforces consistency rules to prevent gambling behavior.</p>

      <h3>Platform & Tools</h3>
      <p>Topstep integrates with major platforms like NinjaTrader and TradingView. MyFundedTrader supports multiple platforms with real-time risk management dashboards.</p>

      <h3>Cost Comparison</h3>
      <p>Topstep charges $165/month for evaluation accounts. MyFundedTrader ranges from $99-$499 depending on account size, with one-time payment options.</p>

      <h3>Verdict</h3>
      <p>Topstep excels for conservative traders who value structure. MyFundedTrader suits aggressive traders seeking flexibility and faster payouts.</p>
    
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
