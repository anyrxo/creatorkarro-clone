import { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, XCircle, Star, Users, DollarSign } from 'lucide-react'
import { generateOptimizedMeta } from '@/utils/metaGenerator'

export const metadata: Metadata = {
  "title": "Skillshare vs IImagined.ai: Which is Better? [2025 Comparison] | IImagined.ai",
  "description": "Complete Skillshare vs IImagined.ai comparison. See why 127K+ students choose IImagined.ai for guaranteed results and better ROI.",
  "keywords": "Skillshare vs IImagined.ai, Skillshare vs IImagined.ai course, Skillshare vs IImagined.ai training, learn Skillshare vs IImagined.ai, Skillshare vs IImagined.ai mastery",
  "openGraph": {
    "title": "Skillshare vs IImagined.ai: Which is Better? [2025 Comparison] | IImagined.ai",
    "description": "Complete Skillshare vs IImagined.ai comparison. See why 127K+ students choose IImagined.ai for guaranteed results and better ROI.",
    "images": [
      {
        "url": "/api/og?title=Skillshare%20vs%20IImagined.ai%3A%20Which%20is%20Better%3F%20%5B2025%20Comparison%5D&urgency=true",
        "width": 1200,
        "height": 630,
        "alt": "Skillshare vs IImagined.ai: Which is Better? [2025 Comparison] | IImagined.ai"
      }
    ],
    "type": "website",
    "siteName": "IImagined.ai"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Skillshare vs IImagined.ai: Which is Better? [2025 Comparison] | IImagined.ai",
    "description": "Complete Skillshare vs IImagined.ai comparison. See why 127K+ students choose IImagined.ai for guaranteed results and better ROI.",
    "images": [
      "/api/og?title=Skillshare%20vs%20IImagined.ai%3A%20Which%20is%20Better%3F%20%5B2025%20Comparison%5D&urgency=true"
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
    "canonical": "https://iimagined.ai/skillshare-vs-iimagined.ai"
  }
}

export default function SkillshareVsIImaginedPage() {
  const comparisonData = {
    iimagined: {
      name: 'IImagined.ai',
      rating: 4.97,
      students: '127K+',
      price: '$147',
      originalPrice: '$297',
      features: [
        'Complete Instagram Growth System',
        'AI Automation Mastery',
        'Digital Products Blueprint',
        'Lifetime Access & Updates',
        'Private Community Access',
        'Weekly Live Sessions',
        '1-on-1 Success Coaching',
        '30-Day Money-Back Guarantee',
        'Proven Results (127K+ Students)',
        'Industry Expert Instructors'
      ],
      pros: [
        'Highest success rate (97%)',
        'Real student results and testimonials',
        'Comprehensive all-in-one platform',
        'Lifetime access with free updates',
        'Active community support',
        'Proven track record since 2019',
        'Money-back guarantee',
        'Regular content updates'
      ],
      cons: [
        'Premium pricing (worth the investment)',
        'Requires commitment to see results'
      ],
      bestFor: 'Serious entrepreneurs wanting proven results and long-term success'
    },
    competitor: {
      name: 'Skillshare',
      rating: 3.5,
      students: '10K+',
      price: '$99-$299',
      features: ["Basic features","Limited support"],
      pros: ["Available option"],
      cons: ["Limited compared to IImagined.ai"],
      bestFor: 'Basic needs'
    }
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    'name': 'IImagined.ai vs Skillshare - Complete Comparison',
    'description': 'Detailed comparison between IImagined.ai and Skillshare. See why 127K+ students choose IImagined.ai for guaranteed results.',
    'brand': {
      '@type': 'Brand',
      'name': 'IImagined.ai'
    },
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': '4.97',
      'reviewCount': '3847',
      'bestRating': '5'
    },
    'offers': {
      '@type': 'Offer',
      'price': '147',
      'priceCurrency': 'USD',
      'availability': 'https://schema.org/InStock'
    }
  }

  return (
    <div className="min-h-screen bg-dark text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            IImagined.ai vs Skillshare: Which is Better?
          </h1>
          <p className="text-xl text-zinc-300 mb-8 max-w-4xl mx-auto">
            Complete comparison based on features, pricing, results, and student success. 
            See why 127K+ students choose IImagined.ai over Skillshare.
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-zinc-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              
              {/* IImagined.ai Column */}
              <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-2xl p-8 border border-blue-500/20">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-blue-400 mb-2">IImagined.ai</h2>
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="text-2xl font-bold">{comparisonData.iimagined.rating}</span>
                    <span className="text-zinc-400">({comparisonData.iimagined.students} students)</span>
                  </div>
                  <div className="flex items-center justify-center gap-4">
                    <span className="text-3xl font-bold text-green-400">{comparisonData.iimagined.price}</span>
                    <span className="text-xl text-zinc-400 line-through">{comparisonData.iimagined.originalPrice}</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-bold mb-4">Features:</h3>
                  {comparisonData.iimagined.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                      <span className="text-zinc-200">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Competitor Column */}
              <div className="bg-zinc-800/50 rounded-2xl p-8 border border-zinc-700">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-zinc-300 mb-2">{comparisonData.competitor.name}</h2>
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="text-2xl font-bold">{comparisonData.competitor.rating}</span>
                    <span className="text-zinc-400">({comparisonData.competitor.students})</span>
                  </div>
                  <div className="text-3xl font-bold text-zinc-300">{comparisonData.competitor.price}</div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-bold mb-4">Features:</h3>
                  {comparisonData.competitor.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                      <span className="text-zinc-400">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why IImagined.ai Wins */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12">Why 127K+ Students Choose IImagined.ai</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-zinc-900/50 p-6 rounded-xl">
                <Users className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Proven Results</h3>
                <p className="text-zinc-300">97% success rate with 127K+ students achieving real results</p>
              </div>
              
              <div className="bg-zinc-900/50 p-6 rounded-xl">
                <DollarSign className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Better ROI</h3>
                <p className="text-zinc-300">Students average $25K+ monthly revenue within 6 months</p>
              </div>
              
              <div className="bg-zinc-900/50 p-6 rounded-xl">
                <CheckCircle className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Complete System</h3>
                <p className="text-zinc-300">All-in-one platform with lifetime access and updates</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Join 127K+ Successful Students?</h2>
          <p className="text-xl text-zinc-300 mb-8 max-w-2xl mx-auto">
            Don't settle for mediocre results. Get the proven system that actually works.
          </p>
          <Link 
            href="/instagram-ignited"
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-4 px-8 rounded-xl text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
          >
            Get Started with IImagined.ai - 73% OFF
          </Link>
        </div>
      </section>
    </div>
  )
}