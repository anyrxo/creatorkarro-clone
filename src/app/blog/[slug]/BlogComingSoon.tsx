'use client'

import Link from 'next/link'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function BlogComingSoon() {
  const heroAnimation = useScrollAnimation({ threshold: 0.2 })
  const contentAnimation = useScrollAnimation({ threshold: 0.1 })
  const ctaAnimation = useScrollAnimation({ threshold: 0.2 })

  return (
    <div className="min-h-screen bg-dark">
      {/* Hero Section */}
      <section className="section-spacing overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={heroAnimation.elementRef}
            className={`text-center max-w-4xl mx-auto scroll-fade-up ${heroAnimation.isVisible ? 'visible' : ''}`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 mb-6">
              <span className="text-yellow-400 text-sm font-semibold">COMING SOON</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              This Blog Post is <span className="text-yellow-400">Coming Soon</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-400 mb-8">
              We're working on bringing you this content. Check back soon or explore our other articles below.
            </p>

            <Link
              href="/blog"
              className="cta-button inline-flex items-center gap-3"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              Back to Blog
            </Link>
          </div>
        </div>
      </section>

      {/* Existing Posts Section */}
      <section 
        ref={contentAnimation.elementRef}
        className={`section-spacing scroll-fade-up ${contentAnimation.isVisible ? 'visible' : ''}`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Read These Instead</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Link href="/blog/500k-followers" className="bg-zinc-900 rounded-xl p-6 hover:bg-zinc-800 transition-all duration-300 group">
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                From 0 to 500K Followers
              </h3>
              <p className="text-gray-400">The complete Instagram blueprint that took me from zero to half a million followers.</p>
            </Link>

            <Link href="/blog/digital-products-that-sell" className="bg-zinc-900 rounded-xl p-6 hover:bg-zinc-800 transition-all duration-300 group">
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                Why Most Digital Products Fail
              </h3>
              <p className="text-gray-400">And how to build one that sells $1K+/day using psychology and proven frameworks.</p>
            </Link>

            <Link href="/blog/instagram-growth-2025" className="bg-zinc-900 rounded-xl p-6 hover:bg-zinc-800 transition-all duration-300 group">
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                Instagram Growth Hacks 2025
              </h3>
              <p className="text-gray-400">Proven strategies to grow your Instagram following organically and sustainably.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section 
        ref={ctaAnimation.elementRef}
        className={`section-spacing bg-zinc-900 scroll-fade-up ${ctaAnimation.isVisible ? 'visible' : ''}`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Get Notified When This Post Goes Live
          </h2>
          
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Join thousands of creators getting actionable insights on Instagram growth, digital products, and AI automation delivered weekly.
          </p>
          
          <a
            href="https://anyro.beehiiv.com/subscribe"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button inline-flex items-center gap-3"
          >
            Join Free Newsletter
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </section>
    </div>
  )
}
