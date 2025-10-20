import { Metadata } from 'next'
import Link from 'next/link'
import { Star, Users, CheckCircle, Award } from 'lucide-react'

export const metadata: Metadata = {
  "title": "Best Ai Automation Course for entrepreneurs [2025 Updated] | IImagined.ai",
  "description": "Find the best Ai Automation Course for entrepreneurs. Compare top courses, pricing, and results. IImagined.ai rated #1 by 127K+ students.",
  "keywords": "artificial intelligence, machine learning, ai automation, ai tools, ai workflows, ai productivity, ai business solutions, ai integration, ai optimization, ai-powered systems, business automation, workflow automation, process automation, marketing automation, sales automation, productivity automation, automation tools, automation systems, automation strategies, Best Ai Automation Course for entrepreneurs",
  "openGraph": {
    "title": "Best Ai Automation Course for entrepreneurs [2025 Updated] | IImagined.ai",
    "description": "Find the best Ai Automation Course for entrepreneurs. Compare top courses, pricing, and results. IImagined.ai rated #1 by 127K+ students.",
    "images": [
      {
        "url": "/api/og?title=Best%20Ai%20Automation%20Course%20for%20entrepreneurs%20%5B2025%20Updated%5D&urgency=true",
        "width": 1200,
        "height": 630,
        "alt": "Best Ai Automation Course for entrepreneurs [2025 Updated] | IImagined.ai"
      }
    ],
    "type": "website",
    "siteName": "IImagined.ai"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Best Ai Automation Course for entrepreneurs [2025 Updated] | IImagined.ai",
    "description": "Find the best Ai Automation Course for entrepreneurs. Compare top courses, pricing, and results. IImagined.ai rated #1 by 127K+ students.",
    "images": [
      "/api/og?title=Best%20Ai%20Automation%20Course%20for%20entrepreneurs%20%5B2025%20Updated%5D&urgency=true"
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
    "canonical": "https://iimagined.ai/best-ai-automation-course-for-entrepreneurs"
  }
}

export default function BestAiAutomationCourseForEntrepreneursPage() {
  const courses = [
    {
      name: 'IImagined.ai - Ai Automation Course',
      rating: 4.97,
      students: '127K+',
      price: '$147',
      originalPrice: '$297',
      badge: '#1 Choice',
      features: ["AI Workflow Templates","Automation Setup Guides","Tool Integration Training","Business Applications","Revenue Generation"],
      testimonial: {"name":"Mike C.","text":"Scaled my business 10x using these strategies. ROI was incredible.","result":"10x business growth"},
      cta: '/n8n-ai-automations'
    }
    // Add 4-5 other courses for comparison
  ]

  return (
    <div className="min-h-screen bg-dark text-white">
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
            Best Ai Automation Course for entrepreneurs [2025]
          </h1>
          <p className="text-xl text-zinc-300 text-center mb-12 max-w-4xl mx-auto">
            We've tested and reviewed the top Ai Automation Courses for entrepreneurs. 
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