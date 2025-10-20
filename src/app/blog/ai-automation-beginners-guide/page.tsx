import React from 'react'
import { Metadata } from 'next'
import Link from 'next/link'
import { generateOptimizedMeta } from '@/utils/metaGenerator'
import FAQSchema from '@/components/seo/FAQSchema'

export const metadata: Metadata = {
  "title": "Ai Automation Beginners Guide: Complete Guide [2025] | IImagined.ai",
  "description": "Master Ai Automation Beginners Guide with this comprehensive guide. Step-by-step tutorials, expert tips, and proven strategies for real results.",
  "keywords": "artificial intelligence, machine learning, ai automation, ai tools, ai workflows, ai productivity, ai business solutions, ai integration, ai optimization, ai-powered systems, business automation, workflow automation, process automation, marketing automation, sales automation, productivity automation, automation tools, automation systems, automation strategies, Ai Automation Beginners Guide",
  "openGraph": {
    "title": "Ai Automation Beginners Guide: Complete Guide [2025] | IImagined.ai",
    "description": "Master Ai Automation Beginners Guide with this comprehensive guide. Step-by-step tutorials, expert tips, and proven strategies for real results.",
    "images": [
      {
        "url": "/api/og?title=Ai%20Automation%20Beginners%20Guide%3A%20Complete%20Guide%20%5B2025%5D&urgency=true",
        "width": 1200,
        "height": 630,
        "alt": "Ai Automation Beginners Guide: Complete Guide [2025] | IImagined.ai"
      }
    ],
    "type": "website",
    "siteName": "IImagined.ai"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Ai Automation Beginners Guide: Complete Guide [2025] | IImagined.ai",
    "description": "Master Ai Automation Beginners Guide with this comprehensive guide. Step-by-step tutorials, expert tips, and proven strategies for real results.",
    "images": [
      "/api/og?title=Ai%20Automation%20Beginners%20Guide%3A%20Complete%20Guide%20%5B2025%5D&urgency=true"
    ]
  },
  "robots": {
    "index": true,
    "follow": true,
    "googleBot": {
      "index": true,
      "follow": true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  "alternates": {
    "canonical": "https://iimagined.ai/ai-automation-beginners-guide"
  }
}

export default function AiAutomationBeginnersGuidePage() {
  const tableOfContents = ["Introduction","Fundamentals","Advanced Strategies"]
  const faqs: Array<{question: string, answer: string}> = []

  // Get the image URL safely
  const imageUrl = Array.isArray(metadata.openGraph?.images)
    ? (metadata.openGraph.images[0] as any)?.url
    : (metadata.openGraph?.images as any)?.url || '/api/og';

  // SEO Schema
  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: metadata.title || 'Blog Post',
    description: metadata.description || '',
    image: imageUrl,
    datePublished: '2025-01-15T00:00:00Z',
    dateModified: new Date().toISOString(),
    author: {
      '@type': 'Organization',
      name: 'IImagined.ai',
      url: 'https://iimagined.ai'
    },
    publisher: {
      '@type': 'Organization',
      name: 'IImagined.ai',
      url: 'https://iimagined.ai',
      logo: {
        '@type': 'ImageObject',
        url: 'https://iimagined.ai/logo.png'
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://iimagined.ai/blog/ai-automation-beginners-guide'
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <div className="min-h-screen bg-dark text-white">
      <FAQSchema faqs={faqs} displayType="accordion" />
      
      <article className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Complete Guide</h1>
          <p className="text-xl text-zinc-300 mb-8">Master this topic with proven strategies.</p>
          
          {/* Table of Contents */}
          <div className="bg-zinc-900/50 rounded-xl p-6 mb-12">
            <h2 className="text-2xl font-bold mb-4">Table of Contents</h2>
            <ul className="space-y-2">
              {tableOfContents.map((item, index) => (
                <li key={index}>
                  <a href={`#section-${index + 1}`} className="text-blue-400 hover:text-blue-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Content sections would go here */}
          {/* Content would go here */}
          
          {/* FAQ Section */}
          <section className="mt-16">
            <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
            <FAQSchema faqs={faqs} displayType="accordion" />
          </section>
          
          {/* CTA Section */}
          <section className="mt-16 text-center bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-4">Ready to Master Ai Automation Beginners Guide?</h2>
            <p className="text-xl text-zinc-300 mb-6">
              Join 127K+ students who have transformed their results with our proven system.
            </p>
            <Link 
              href="/courses"
              className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-4 px-8 rounded-xl text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
            >
              Get Started Today - 73% OFF
            </Link>
          </section>
        </div>
      </article>
    </div>
  </>
  )
}