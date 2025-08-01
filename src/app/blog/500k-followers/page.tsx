'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useScrollAnimation, useScrollAnimations } from '@/hooks/useScrollAnimation'

export default function BlogPost() {
  // Scroll animations
  const heroAnimation = useScrollAnimation({ threshold: 0.2 })
  const contentAnimation = useScrollAnimation({ threshold: 0.1 })
  const statsAnimation = useScrollAnimation({ threshold: 0.1 })
  const takeawaysAnimation = useScrollAnimation({ threshold: 0.1 })
  const ctaAnimation = useScrollAnimation({ threshold: 0.2 })

  return (
    <div className="min-h-screen bg-dark">
      {/* Hero Section */}
      <section className="section-spacing overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={heroAnimation.elementRef}
            className={`text-center max-w-5xl mx-auto scroll-fade-up ${heroAnimation.isVisible ? 'visible' : ''}`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
              <span className="text-blue-400 text-sm font-semibold">GROWTH GUIDE</span>
            </div>

            <h1 className="text-3xl md:text-6xl font-bold mb-6 leading-tight">
              From 0 to <span className="text-blue-400">500K Followers</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-400 mb-8">
              The complete Instagram blueprint that took me from zero to <span className="text-white font-semibold">half a million followers</span> and $15K/month
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <div className="flex items-center gap-2 text-gray-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>12 min read</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>Jan 15, 2024</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section 
        ref={statsAnimation.elementRef}
        className={`py-16 px-4 border-y border-gray-800 scroll-fade-up ${statsAnimation.isVisible ? 'visible' : ''}`}
      >
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">500K</div>
              <div className="text-gray-400">Followers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">10 Months</div>
              <div className="text-gray-400">Timeline</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">8.5%</div>
              <div className="text-gray-400">Engagement</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">$15K+</div>
              <div className="text-gray-400">Monthly</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section 
        ref={contentAnimation.elementRef}
        className={`section-spacing scroll-fade-up ${contentAnimation.isVisible ? 'visible' : ''}`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              When I started on Instagram 10 months ago, I had zero followers and zero clue about what I was doing. Today, I have over 500,000 engaged followers and a thriving business. Here's exactly how I did it and what you can learn from my journey.
            </p>

            <h2 className="text-3xl font-bold text-white mb-6">The Foundation: Getting Crystal Clear on Your Niche</h2>
            
            <div className="bg-zinc-900 rounded-2xl p-8 mb-8">
              <p className="text-gray-300 mb-6">
                The biggest mistake I see creators make is trying to appeal to everyone. I spent my first month posting random content:
              </p>
              
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="bg-zinc-800 rounded-lg p-4 text-center">
                  <div className="text-2xl mb-2">🏋️</div>
                  <div className="text-gray-400">Workout videos</div>
                </div>
                <div className="bg-zinc-800 rounded-lg p-4 text-center">
                  <div className="text-2xl mb-2">🍔</div>
                  <div className="text-gray-400">Food pics</div>
                </div>
                <div className="bg-zinc-800 rounded-lg p-4 text-center">
                  <div className="text-2xl mb-2">💭</div>
                  <div className="text-gray-400">Random quotes</div>
                </div>
              </div>
              
              <p className="text-gray-300">
                <span className="text-red-400 font-semibold">Result:</span> My engagement was terrible because my audience had no idea what to expect from me.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-white mb-6">The 80/20 Rule That Changed Everything</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-zinc-900 rounded-xl p-6 border border-blue-500/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-4xl font-bold text-blue-400">80%</div>
                  <h3 className="text-white font-semibold text-lg">Value Content</h3>
                </div>
                <ul className="space-y-2 text-gray-300">
                  <li>• Educational carousels</li>
                  <li>• Actionable tips</li>
                  <li>• Behind-the-scenes insights</li>
                  <li>• Case studies</li>
                </ul>
              </div>
              
              <div className="bg-zinc-900 rounded-xl p-6 border border-purple-500/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-4xl font-bold text-purple-400">20%</div>
                  <h3 className="text-white font-semibold text-lg">Personal Content</h3>
                </div>
                <ul className="space-y-2 text-gray-300">
                  <li>• My story</li>
                  <li>• Struggles & wins</li>
                  <li>• Personality posts</li>
                  <li>• Life updates</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mb-6">Growth Strategies That Actually Worked</h2>
            
            <div className="space-y-6 mb-8">
              <div className="bg-zinc-900 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-3">1. The Carousel Strategy</h3>
                <p className="text-gray-300 mb-4">Carousels consistently got 3-5x more engagement than single images. My template:</p>
                <ul className="space-y-2 text-gray-300">
                  <li><span className="text-blue-400 font-semibold">Slide 1:</span> Eye-catching hook + promise</li>
                  <li><span className="text-purple-400 font-semibold">Slides 2-8:</span> Step-by-step value</li>
                  <li><span className="text-pink-400 font-semibold">Slide 9:</span> Summary + call-to-action</li>
                  <li><span className="text-green-400 font-semibold">Slide 10:</span> Follow for more + tag friends</li>
                </ul>
              </div>
              
              <div className="bg-zinc-900 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-3">2. Strategic Hashtag Research</h3>
                <p className="text-gray-300 mb-4">I stopped using random hashtags and started researching:</p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400">5</div>
                    <div className="text-white font-semibold">Large Hashtags</div>
                    <div className="text-gray-400 text-sm">500K+ posts</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-400">15</div>
                    <div className="text-white font-semibold">Medium Hashtags</div>
                    <div className="text-gray-400 text-sm">100K-500K posts</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-pink-400">10</div>
                    <div className="text-white font-semibold">Small Hashtags</div>
                    <div className="text-gray-400 text-sm">Under 100K posts</div>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mb-6">Monetization: From Followers to Revenue</h2>
            
            <div className="bg-zinc-900 rounded-xl p-6 mb-8">
              <p className="text-gray-300 mb-6">At 50K followers, I started monetizing through:</p>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-white font-semibold">Digital Products</div>
                    <div className="text-gray-400 text-sm">Instagram Growth Course</div>
                  </div>
                  <div className="text-green-400 font-bold text-xl">$8K/mo</div>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-white font-semibold">Brand Partnerships</div>
                    <div className="text-gray-400 text-sm">Sponsored posts</div>
                  </div>
                  <div className="text-blue-400 font-bold text-xl">$5K/mo</div>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-white font-semibold">Coaching</div>
                    <div className="text-gray-400 text-sm">1-on-1 strategy calls</div>
                  </div>
                  <div className="text-purple-400 font-bold text-xl">$2K/mo</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Takeaways */}
      <section 
        ref={takeawaysAnimation.elementRef}
        className={`section-spacing bg-zinc-900 scroll-fade-up ${takeawaysAnimation.isVisible ? 'visible' : ''}`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Key Takeaways</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-zinc-800 rounded-lg p-6">
              <div className="text-2xl mb-3">🎯</div>
              <h3 className="text-white font-semibold mb-2">Niche Focus</h3>
              <p className="text-gray-400">Pick one specific audience and serve them deeply</p>
            </div>
            
            <div className="bg-zinc-800 rounded-lg p-6">
              <div className="text-2xl mb-3">📅</div>
              <h3 className="text-white font-semibold mb-2">Consistency</h3>
              <p className="text-gray-400">Post regularly and engage authentically</p>
            </div>
            
            <div className="bg-zinc-800 rounded-lg p-6">
              <div className="text-2xl mb-3">💎</div>
              <h3 className="text-white font-semibold mb-2">Value First</h3>
              <p className="text-gray-400">Always lead with value before asking for anything</p>
            </div>
            
            <div className="bg-zinc-800 rounded-lg p-6">
              <div className="text-2xl mb-3">⚙️</div>
              <h3 className="text-white font-semibold mb-2">System Over Hustle</h3>
              <p className="text-gray-400">Follow proven frameworks rather than random tactics</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        ref={ctaAnimation.elementRef}
        className={`section-spacing scroll-fade-up ${ctaAnimation.isVisible ? 'visible' : ''}`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Get The Creator Playbook
          </h2>
          
          <p className="text-xl text-gray-400 mb-8">
            Join <span className="text-white font-semibold">10,000+ creators</span> getting actionable strategies delivered weekly.
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