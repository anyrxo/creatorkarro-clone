import React from 'react'
import Link from 'next/link'
import { generateBlogPostSchema } from '@/lib/blog-schema'

// Comprehensive SEO Metadata
export const metadata = {
  title: "Make App Automation: Complete Workflow Builder Guide 2026",
  description: "Complete guide to make app automation - proven strategies, tools, and techniques for 2026",
  keywords: ["make", "app", "automation", "make 2026", "make app automation", "AI tools", "business growth", "productivity", "2026 strategies"],
  authors: [{ name: "Anyro", url: "https://iimagined.ai" }],
  creator: "IImagined.ai",
  publisher: "IImagined.ai",
  category: "Technology",
  openGraph: {
    title: "Make App Automation: Complete Workflow Builder Guide 2026",
    description: "Complete guide to make app automation - proven strategies, tools, and techniques for 2026",
    url: "https://iimagined.ai/blog/make-app-automation",
    siteName: "IImagined.ai",
    type: "article",
    publishedTime: "2026-02-28T10:00:00.000Z",
    modifiedTime: "2026-08-03T06:14:29.975Z",
    authors: ["Anyro"],
    tags: ["make", "app", "automation", "make 2026", "make app automation", "AI tools", "business growth", "productivity"],
    images: [{
      url: "https://iimagined.ai/images/make-app-automation-og.jpg",
      width: 1200,
      height: 630,
      alt: "Make App Automation",
      type: "image/jpeg"
    }],
    locale: "en_US"
  },
  twitter: {
    card: "summary_large_image",
    site: "@iimagined_ai",
    creator: "@iimagined_ai", 
    title: "Make App Automation: Complete Workflow Builder Guide 2026",
    description: "Complete guide to make app automation - proven strategies, tools, and techniques for 2026",
    images: [{
      url: "https://iimagined.ai/images/make-app-automation-og.jpg",
      alt: "Make App Automation"
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
    canonical: "https://iimagined.ai/blog/make-app-automation"
  }
}

export default function MakeAppAutomationPage() {

const schema = generateBlogPostSchema({
  title: metadata.title,
  description: metadata.description,
  slug: "make-app-automation",
  publishedTime: metadata.openGraph.publishedTime,
  modifiedTime: metadata.openGraph.modifiedTime,
  category: metadata.category || "Technology",
  keywords: metadata.keywords || [],
  image: metadata.openGraph.images[0].url
})

  return (
    <div className="min-h-screen bg-dark">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <section className="section-spacing">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Make App Automation
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              This page is being rebuilt with improved content. Please check back soon.
            </p>
            <Link 
              href="/blog" 
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Back to Blog
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
