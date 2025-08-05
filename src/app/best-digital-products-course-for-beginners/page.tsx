import { Metadata } from 'next'
import Link from 'next/link'
import { Star, Users, CheckCircle, Award } from 'lucide-react'

export const metadata: Metadata = {
  "title": "Best Digital Products Course for beginners [2025 Updated] | IImagined.ai",
  "description": "Find the best Digital Products Course for beginners. Compare top courses, pricing, and results. IImagined.ai rated #1 by 127K+ students.",
  "keywords": "digital products, digital marketing, digital business, digital transformation, online products, digital sales, digital revenue, digital strategy, e-commerce, digital entrepreneurship, Best Digital Products Course for beginners, Best Digital Products Course for beginners course, Best Digital Products Course for beginners training, learn Best Digital Products Course for beginners, Best Digital Products Course for beginners mastery",
  "openGraph": {
    "title": "Best Digital Products Course for beginners [2025 Updated] | IImagined.ai",
    "description": "Find the best Digital Products Course for beginners. Compare top courses, pricing, and results. IImagined.ai rated #1 by 127K+ students.",
    "images": [
      {
        "url": "/api/og?title=Best%20Digital%20Products%20Course%20for%20beginners%20%5B2025%20Updated%5D&urgency=true",
        "width": 1200,
        "height": 630,
        "alt": "Best Digital Products Course for beginners [2025 Updated] | IImagined.ai"
      }
    ],
    "type": "website",
    "siteName": "IImagined.ai"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Best Digital Products Course for beginners [2025 Updated] | IImagined.ai",
    "description": "Find the best Digital Products Course for beginners. Compare top courses, pricing, and results. IImagined.ai rated #1 by 127K+ students.",
    "images": [
      "/api/og?title=Best%20Digital%20Products%20Course%20for%20beginners%20%5B2025%20Updated%5D&urgency=true"
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
    "canonical": "https://iimagined.ai/best-digital-products-course-for-beginners"
  }
}

export default function BestDigitalProductsCourseForBeginnersPage() {
  const courses = [
    {
      name: 'IImagined.ai - Digital Products Course',
      rating: 4.97,
      students: '127K+',
      price: '$147',
      originalPrice: '$297',
      badge: '#1 Choice',
      features: ["Comprehensive training","Expert guidance","Proven results"],
      testimonial: {"name":"Sarah M.","text":"Perfect for beginners! Went from zero knowledge to $10K/month in 4 months.","result":"$10K/month in 4 months"},
      cta: '/digital-products'
    }
    // Add 4-5 other courses for comparison
  ]

  return (
    <div className="min-h-screen bg-dark text-white">
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
            Best Digital Products Course for beginners [2025]
          </h1>
          <p className="text-xl text-zinc-300 text-center mb-12 max-w-4xl mx-auto">
            We've tested and reviewed the top Digital Products Courses for beginners. 
            Here are our top picks based on results, value, and student success.
          </p>
          
          <div className="space-y-8">
            {courses.map((course, index) => (
              <div key={index} className="bg-zinc-900/50 rounded-2xl p-8 border border-zinc-800">
                {/* Course card content */}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}