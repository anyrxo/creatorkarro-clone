import React from 'react'
import Link from 'next/link'
import { generateBlogPostSchema } from '@/lib/blog-schema'

export const metadata = {
  title: "Trading Psychology: Master Your Emotions for Consistent Profits",
  description: "Master trading psychology to overcome fear, greed, and revenge trading. Learn proven mental strategies used by professional traders to stay disciplined.",
  keywords: ["trading psychology","trader mindset","emotional trading","trading discipline","fear and greed"],
  authors: [{ name: "IImagined.ai Expert Team", url: "https://iimagined.ai" }],
  creator: "IImagined.ai",
  publisher: "IImagined.ai",
  category: "Trading Psychology",
  openGraph: {
    title: "Trading Psychology: Master Your Emotions for Consistent Profits",
    description: "Master trading psychology to overcome fear, greed, and revenge trading. Learn proven mental strategies used by professional traders to stay disciplined.",
    url: "https://iimagined.ai/blog/trading-psychology-master-your-emotions",
    siteName: "IImagined.ai",
    type: "article",
    publishedTime: "2025-01-20T10:00:00.000Z",
    modifiedTime: "2025-10-20T12:50:48.601Z",
    authors: ["IImagined.ai Expert Team"],
    tags: ["trading psychology","trader mindset","emotional trading","trading discipline","fear and greed"],
    images: [{
      url: "https://iimagined.ai/images/trading-psychology-master-your-emotions-og.jpg",
      width: 1200,
      height: 630,
      alt: "Trading Psychology: Master Your Emotions for Consistent Profits",
      type: "image/jpeg"
    }],
    locale: "en_US"
  },
  twitter: {
    card: "summary_large_image",
    site: "@iimagined_ai",
    creator: "@iimagined_ai",
    title: "Trading Psychology: Master Your Emotions for Consistent Profits",
    description: "Master trading psychology to overcome fear, greed, and revenge trading. Learn proven mental strategies used by professional traders to stay disciplined.",
    images: [{
      url: "https://iimagined.ai/images/trading-psychology-master-your-emotions-og.jpg",
      alt: "Trading Psychology: Master Your Emotions for Consistent Profits"
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
    canonical: "https://iimagined.ai/blog/trading-psychology-master-your-emotions"
  }
}

const schema = generateBlogPostSchema({
  title: metadata.title,
  description: metadata.description,
  slug: "trading-psychology-master-your-emotions",
  publishedTime: metadata.openGraph.publishedTime,
  modifiedTime: metadata.openGraph.modifiedTime,
  category: metadata.category || "Trading Psychology",
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
              <span className="text-blue-400 text-sm font-semibold">TRADING PSYCHOLOGY</span>
            </div>

            <h1 className="text-3xl md:text-6xl font-bold mb-6 leading-tight text-white">
              Trading Psychology: Master Your Emotions for Consistent Profits
            </h1>

            <p className="text-lg md:text-xl text-gray-400 mb-8">
              Master trading psychology to overcome fear, greed, and revenge trading. Learn proven mental strategies used by professional traders to stay disciplined.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="prose prose-invert prose-lg max-w-none">
            
      <h2>The #1 Reason Traders Fail (And How to Fix It)</h2>
      <p>95% of traders fail not because of bad strategy, but because of poor psychology. Your mind is either your greatest asset or your worst enemy.</p>

      <h3>The Big 3 Psychological Traps</h3>
      <h4>1. Fear of Missing Out (FOMO)</h4>
      <p>FOMO causes you to chase entries after the move has already happened. Solution: Wait for your setup, stick to your plan, and remember there's always another trade.</p>

      <h4>2. Revenge Trading</h4>
      <p>After a loss, you immediately take another trade to "get your money back." This is gambling, not trading. Solution: Take a 30-minute break after every loss.</p>

      <h4>3. Fear of Pulling the Trigger</h4>
      <p>You see your setup but can't execute because you fear losing money. Solution: Trade smaller size until confidence builds naturally.</p>

      <h3>The Professional Trader Mindset</h3>
      <p>Professional traders view trading as probability, not certainty. They know each trade is independent and focus on process over outcomes.</p>

      <h3>Daily Mental Routine</h3>
      <ul>
        <li>Morning: Review your trading plan and rules</li>
        <li>Pre-market: Visualize executing your strategy perfectly</li>
        <li>During trading: Focus on process, not P&L</li>
        <li>Post-market: Journal what you did well mentally</li>
      </ul>

      <h3>Handling Losing Streaks</h3>
      <p>Even the best systems have losing streaks. Reduce size by 50% after 3 consecutive losses. This protects capital and rebuilds confidence.</p>

      <h3>The Power of Journaling</h3>
      <p>Write down your emotional state before, during, and after each trade. Patterns will emerge showing when you trade best and when to stay away.</p>
    
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
