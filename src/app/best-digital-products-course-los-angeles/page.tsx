'use client'

import { Metadata } from 'next'
import Link from 'next/link'
import { useState } from 'react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'
import ProductSchema from '@/components/seo/ProductSchema'
import ShimmerButton from '@/components/magicui/shimmer-button'
import NumberTicker from '@/components/magicui/number-ticker'
import { ChevronRight, MapPin, Users, Star, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Best digital products Course | Los Angeles | IImagined.ai',
  description: 'Master digital products course in Los Angeles. Join 516+ successful students with our proven system. 90% success rate, lifetime access.',
  keywords: 'best digital-products-course los-angeles, digital-products-course course los-angeles, digital-products-course training los-angeles, learn digital-products-course los-angeles, los-angeles digital-products-course expert, online digital-products-course course',
  openGraph: {
    title: 'Best digital products Course in Los Angeles',
    description: 'Master digital products course in Los Angeles. Join 516+ successful students with our proven system. 90% success rate, lifetime access.',
    images: [{ url: '/og-geo-best-digital-products-course-los-angeles.jpg', width: 1200, height: 630 }]
  }
}

export default function BestDigitalProductsCourseLosAngelesPage() {
  const [selectedPlan, setSelectedPlan] = useState('complete')
  const heroAnimation = useScrollAnimation({ threshold: 0.3 })
  const statsAnimation = useScrollAnimation({ threshold: 0.2 })
  const testimonialsAnimation = useScrollAnimation({ threshold: 0.1 })

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': ['Service', 'Course'],
    'name': 'Best digital products course Training in Los Angeles',
    'description': 'Comprehensive digital products course course designed for Los Angeles entrepreneurs looking to build successful online businesses.',
    'provider': {
      '@type': 'Organization',
      'name': 'IImagined.ai',
      'url': 'https://iimagined.ai',
      'logo': 'https://iimagined.ai/logo.png'
    },
    'areaServed': {
      '@type': 'City',
      'name': 'Los Angeles',
      'addressCountry': 'US'
    },
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': '4.9',
      'reviewCount': '76',
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
    <div className="min-h-screen bg-dark">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <BreadcrumbSchema 
        items={[
          { name: 'Home', url: 'https://iimagined.ai' },
          { name: 'Services', url: 'https://iimagined.ai/services' },
          { name: 'Los Angeles', url: 'https://iimagined.ai/best-digital-products-course-los-angeles' }
        ]}
      />

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-blue-900/20 to-pink-900/30"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div 
            className={`text-center scroll-fade-up ${heroAnimation.isVisible ? 'visible' : ''}`}
            ref={heroAnimation.elementRef}
          >
            <div className="flex items-center justify-center gap-2 mb-6">
              <MapPin className="w-6 h-6 text-blue-400" />
              <span className="text-blue-400 font-semibold">Los Angeles</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Best digital products Course
            </h1>
            
            <p className="text-xl md:text-2xl text-zinc-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Join 516+ entrepreneurs in Los Angeles who have mastered digital products course with our battle-tested strategies and achieved real results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <ShimmerButton
                className="shadow-2xl hover:shadow-blue-500/25 transition-all duration-300"
                shimmerColor="#ffffff"
                shimmerSize="0.1em"
                background="linear-gradient(135deg, #2563eb, #9333ea)"
                borderRadius="12px"
              >
                <span className="whitespace-nowrap text-lg font-bold px-8 py-3">
                  Start Learning Today - $147
                </span>
              </ShimmerButton>
              
              <Link 
                href="/testimonials"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-all duration-300 border border-white/20"
              >
                See Success Stories
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-zinc-900/50">
        <div className="container mx-auto px-4">
          <div 
            className={`grid md:grid-cols-4 gap-8 text-center scroll-fade-up ${statsAnimation.isVisible ? 'visible' : ''}`}
            ref={statsAnimation.elementRef}
          >
            <div className="p-6 bg-zinc-800/50 rounded-2xl">
              <div className="text-4xl font-bold text-blue-400 mb-2">
                <NumberTicker value={516} />+
              </div>
              <p className="text-zinc-300">Students in Los Angeles</p>
            </div>
            
            <div className="p-6 bg-zinc-800/50 rounded-2xl">
              <div className="text-4xl font-bold text-green-400 mb-2">
                <NumberTicker value={4.9} decimalPlaces={1} />★
              </div>
              <p className="text-zinc-300">Average Rating</p>
            </div>
            
            <div className="p-6 bg-zinc-800/50 rounded-2xl">
              <div className="text-4xl font-bold text-purple-400 mb-2">
                $<NumberTicker value={127} />K+
              </div>
              <p className="text-zinc-300">Average Revenue Generated</p>
            </div>
            
            <div className="p-6 bg-zinc-800/50 rounded-2xl">
              <div className="text-4xl font-bold text-orange-400 mb-2">
                <NumberTicker value={90} />%
              </div>
              <p className="text-zinc-300">Success Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              Why Los Angeles Entrepreneurs Choose IImagined.ai
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {[
                'Local success stories from Los Angeles students',
                'Proven strategies that work in your market',
                'Live support from industry experts',
                'Community of local entrepreneurs',
                'Lifetime access to all course materials',
                'Regular updates with latest strategies'
              ].map((benefit, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-zinc-900/50 rounded-xl">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-zinc-200">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Start Your Success Story in Los Angeles?
          </h2>
          
          <p className="text-xl text-zinc-300 mb-8 max-w-2xl mx-auto">
            Join hundreds of successful entrepreneurs in Los Angeles who have transformed their businesses with our proven system.
          </p>
          
          <ShimmerButton
            className="shadow-2xl hover:shadow-blue-500/25 transition-all duration-300"
            shimmerColor="#ffffff"
            shimmerSize="0.1em"
            background="linear-gradient(135deg, #2563eb, #9333ea)"
            borderRadius="12px"
          >
            <span className="whitespace-nowrap text-lg font-bold px-12 py-4">
              Get Started Now - Limited Time Offer
            </span>
          </ShimmerButton>
        </div>
      </section>
    </div>
  )
}
