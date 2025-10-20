import { Metadata } from 'next'
import Link from 'next/link'
import { Star, Users, CheckCircle, Award } from 'lucide-react'

export const metadata: Metadata = {
  "title": "Best Instagram Growth Course for small business [2025 Updated] | IImagined.ai",
  "description": "Find the best Instagram Growth Course for small business. Compare top courses, pricing, and results. IImagined.ai rated #1 by 127K+ students.",
  "keywords": "instagram growth, instagram marketing, instagram strategy, instagram algorithm, instagram engagement, instagram followers, instagram content creation, social media marketing, influencer marketing, instagram business, Best Instagram Growth Course for small business, Best Instagram Growth Course for small business course, Best Instagram Growth Course for small business training, learn Best Instagram Growth Course for small business, Best Instagram Growth Course for small business mastery",
  "openGraph": {
    "title": "Best Instagram Growth Course for small business [2025 Updated] | IImagined.ai",
    "description": "Find the best Instagram Growth Course for small business. Compare top courses, pricing, and results. IImagined.ai rated #1 by 127K+ students.",
    "images": [
      {
        "url": "/api/og?title=Best%20Instagram%20Growth%20Course%20for%20small%20business%20%5B2025%20Updated%5D&urgency=true",
        "width": 1200,
        "height": 630,
        "alt": "Best Instagram Growth Course for small business [2025 Updated] | IImagined.ai"
      }
    ],
    "type": "website",
    "siteName": "IImagined.ai"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Best Instagram Growth Course for small business [2025 Updated] | IImagined.ai",
    "description": "Find the best Instagram Growth Course for small business. Compare top courses, pricing, and results. IImagined.ai rated #1 by 127K+ students.",
    "images": [
      "/api/og?title=Best%20Instagram%20Growth%20Course%20for%20small%20business%20%5B2025%20Updated%5D&urgency=true"
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
    "canonical": "https://iimagined.ai/best-instagram-growth-course-for-small-business"
  }
}

export default function BestInstagramGrowthCourseForSmallBusinessPage() {
  const courses = [
    {
      name: 'IImagined.ai - Instagram Growth Course',
      rating: 4.97,
      students: '127K+',
      price: '$147',
      originalPrice: '$297',
      badge: '#1 Choice',
      features: ["Complete Instagram Growth System","Algorithm Mastery Training","Viral Content Templates","Engagement Strategies","Monetization Methods"],
      testimonial: {"name":"Student","text":"Amazing results with this course!","result":"Great success"},
      cta: '/instagram-ignited'
    }
    // Add 4-5 other courses for comparison
  ]

  return (
    <div className="min-h-screen bg-dark text-white">
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
            Best Instagram Growth Course for small business [2025]
          </h1>
          <p className="text-xl text-zinc-300 text-center mb-12 max-w-4xl mx-auto">
            We've tested and reviewed the top Instagram Growth Courses for small business. 
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