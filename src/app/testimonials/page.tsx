'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useScrollAnimation, useScrollAnimations } from '@/hooks/useScrollAnimation'

export default function TestimonialsPage() {
  // Scroll animations for different sections
  const heroAnimation = useScrollAnimation({ threshold: 0.3 })
  const statsAnimation = useScrollAnimation({ threshold: 0.2 })
  const videoAnimation = useScrollAnimation({ threshold: 0.2 })
  const successAnimation = useScrollAnimation({ threshold: 0.1 })
  const ctaAnimation = useScrollAnimation({ threshold: 0.3 })

  // For testimonial grid animations (10 testimonials)
  const testimonialAnimations = useScrollAnimations(10, { threshold: 0.1 })

  const testimonials = [
    {
      name: "Marcus Rivera",
      role: "Content Creator",
      course: "Instagram Ignited",
      avatar: "https://ext.same-assets.com/1161517358/1430260149.webp",
      content: "Instagram Ignited completely transformed my content strategy! I went from 800 followers to 125K in just 8 months using Anyro's viral carousel techniques. My engagement rate jumped from 2% to 12%, and I'm now making $15K/month through sponsored posts and digital products.",
      results: "800 to 125K followers, $15K/month revenue"
    },
    {
      name: "Sophia Chen",
      role: "Digital Entrepreneur",
      course: "Digital Products",
      avatar: "https://ext.same-assets.com/1161517358/3465280603.webp",
      content: "The Digital Products course is pure gold! I launched my first info product and hit $10K in sales within 3 weeks. Anyro's pricing psychology and launch strategies are game-changing. I've now built a sustainable $25K/month business selling educational content.",
      results: "$10K in 3 weeks, $25K/month business"
    },
    {
      name: "Devon Mitchell",
      role: "Automation Specialist",
      course: "N8N AI Automations",
      avatar: "https://ext.same-assets.com/1161517358/366375215.webp",
      content: "N8N AI Automations saved me 40+ hours per week! I automated my entire content workflow - from research to posting across 5 platforms. My productivity skyrocketed and I can now focus on strategy instead of repetitive tasks. The workflows Anyro provides are incredibly detailed!",
      results: "40+ hours saved weekly, 5x productivity increase"
    },
    {
      name: "Isabella Torres",
      role: "AI Content Creator",
      course: "AI Influencers",
      avatar: "https://ext.same-assets.com/1161517358/432373971.webp",
      content: "AI Influencers opened up a completely new revenue stream for me! I created 3 AI personas that generate content 24/7. Within 2 months, my AI influencers gained 200K combined followers and started earning $8K/month through partnerships. Anyro's approach is revolutionary!",
      results: "200K combined followers, $8K/month AI revenue"
    },
    {
      name: "Ryan Blackwood",
      role: "Visual Artist",
      course: "ComfyUI & Workflows",
      avatar: "https://ext.same-assets.com/1161517358/2908592891.webp",
      content: "ComfyUI & Workflows turned me into an AI art powerhouse! I can now create stunning visuals in minutes instead of hours. My client work rate increased 500% and I'm charging premium prices for AI-enhanced designs. The workflow templates are incredibly professional!",
      results: "500% productivity increase, premium pricing"
    },
    {
      name: "Elena Rodriguez",
      role: "Lifestyle Blogger",
      course: "Instagram Ignited",
      avatar: "https://ext.same-assets.com/1161517358/430339476.webp",
      content: "The Instagram OS module alone was worth the entire course! I finally understood the algorithm and my first viral carousel got 2.3M views. Within 3 months, I grew from 5K to 85K followers and landed my first $25K brand partnership.",
      results: "2.3M views, 5K to 85K followers, $25K partnership"
    },
    {
      name: "Cameron Lee",
      role: "Tech Entrepreneur",
      course: "N8N AI Automations",
      avatar: "https://ext.same-assets.com/1161517358/640627202.jpeg",
      content: "N8N AI Automations completely transformed my business operations! I automated lead generation, customer onboarding, and content distribution. My team productivity increased 300% and we're scaling without adding headcount. Incredible ROI!",
      results: "300% team productivity, automated business operations"
    },
    {
      name: "Alex Morgan",
      role: "Digital Product Creator",
      course: "Digital Products",
      avatar: "https://ext.same-assets.com/1161517358/2128294924.webp",
      content: "The Digital Products framework is genius! I used Anyro's validation methods to test my course idea, then his launch strategies to generate $22K in the first week. The pricing psychology section alone 3x my conversion rates!",
      results: "$22K first week launch, 3x conversion rates"
    },
    {
      name: "Zara Williams",
      role: "AI Artist",
      course: "ComfyUI & Workflows",
      avatar: "https://ext.same-assets.com/1161517358/1695287196.jpeg",
      content: "ComfyUI & Workflows opened up endless creative possibilities! I went from basic Midjourney prompts to creating complex, professional AI art workflows. My art business revenue jumped 400% and I'm booked solid with client work!",
      results: "Transformed barber business"
    },
    {
      name: "Jack Connors",
      role: "Content Creator",
      avatar: "https://ext.same-assets.com/1161517358/527605891.webp",
      content: "After joining the program and applying the teachings, I saw rapid results. I went from a few hundred followers to 50K, and now I've reached 100K+ followers and launched my own paid community.",
      results: "100K+ followers, paid community"
    }
  ]

  return (
    <div className="min-h-screen bg-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 section-spacing">
        <div className="max-w-7xl mx-auto">
          {/* Page Title */}
          <div
            ref={heroAnimation.elementRef}
            className={`text-center mb-16 scroll-fade-up ${heroAnimation.isVisible ? 'visible' : ''}`}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-8">TESTIMONIALS</h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
              Real stories from real students who transformed their lives with IImagined.
              These are just some of the incredible success stories from our community.
            </p>
          </div>

          {/* Stats Section */}
          <div
            ref={statsAnimation.elementRef}
            className={`grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-16 scroll-fade-up ${statsAnimation.isVisible ? 'visible' : ''}`}
          >
            <div className={`bg-zinc-900 rounded-lg p-4 md:p-6 text-center hover-lift scroll-scale ${statsAnimation.isVisible ? 'visible scroll-stagger-1' : ''}`}>
              <div className="text-2xl md:text-3xl font-bold text-blue-400 mb-2">2,000+</div>
              <p className="text-gray-400 text-sm md:text-base">Students Served</p>
            </div>
            <div className={`bg-zinc-900 rounded-lg p-4 md:p-6 text-center hover-lift scroll-scale ${statsAnimation.isVisible ? 'visible scroll-stagger-2' : ''}`}>
              <div className="text-2xl md:text-3xl font-bold text-green-400 mb-2">10M+</div>
              <p className="text-gray-400 text-sm md:text-base">Combined Views Generated</p>
            </div>
            <div className={`bg-zinc-900 rounded-lg p-4 md:p-6 text-center hover-lift scroll-scale ${statsAnimation.isVisible ? 'visible scroll-stagger-3' : ''}`}>
              <div className="text-2xl md:text-3xl font-bold text-purple-400 mb-2">500K+</div>
              <p className="text-gray-400 text-sm md:text-base">Total Followers Gained</p>
            </div>
            <div className={`bg-zinc-900 rounded-lg p-4 md:p-6 text-center hover-lift scroll-scale ${statsAnimation.isVisible ? 'visible scroll-stagger-4' : ''}`}>
              <div className="text-2xl md:text-3xl font-bold text-yellow-400 mb-2">$1M+</div>
              <p className="text-gray-400 text-sm md:text-base">Revenue Generated by Students</p>
            </div>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                ref={testimonialAnimations.setElementRef(index)}
                className={`testimonial-card card-hover hover-lift group scroll-fade-up ${testimonialAnimations.visibleElements[index] ? `visible scroll-stagger-${Math.min(index + 1, 6)}` : ''}`}
              >
                <div className="flex items-center mb-4">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full mr-4 group-hover:scale-110 transition-transform duration-300"
                  />
                  <div>
                    <h4 className="font-semibold group-hover:text-blue-400 transition-colors duration-300">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed mb-4 group-hover:text-white transition-colors duration-300 text-sm md:text-base">
                  "{testimonial.content}"
                </p>
                <div className="bg-blue-600/10 border border-blue-600/30 rounded-lg p-3 group-hover:bg-blue-600/20 group-hover:border-blue-500/50 transition-all duration-300">
                  <p className="text-sm font-semibold text-blue-300 group-hover:text-blue-200 transition-colors duration-300">{testimonial.results}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Video Testimonials Section */}
          <div
            ref={videoAnimation.elementRef}
            className={`bg-zinc-900/50 rounded-2xl p-6 md:p-8 mb-16 hover-lift scroll-scale ${videoAnimation.isVisible ? 'visible' : ''}`}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Video Content</h2>
            <p className="text-lg md:text-xl text-gray-400 mb-8 text-center">
              Check out my YouTube channel for more insights and strategies
            </p>
            <div className="text-center">
              <div className="bg-zinc-900 rounded-lg p-8 inline-block max-w-md hover-lift">
                <div className="flex items-center justify-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold text-white">YouTube Channel</h3>
                    <p className="text-gray-400 text-sm">Free content & tutorials</p>
                  </div>
                </div>
                <Link
                  href="https://www.youtube.com/@anyrxo"
                  target="_blank"
                  className="cta-button inline-block w-full text-center"
                >
                  Visit Channel
                </Link>
              </div>
            </div>
          </div>

          {/* Success Story Highlights */}
          <div
            ref={successAnimation.elementRef}
            className={`space-y-16 mb-16 scroll-fade-up ${successAnimation.isVisible ? 'visible' : ''}`}
          >
            <div className={`bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-600/30 rounded-2xl p-6 md:p-8 hover-lift scroll-scale ${successAnimation.isVisible ? 'visible scroll-stagger-1' : ''}`}>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-center">Featured Success: Houston's Journey</h3>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed text-center mb-6">
                Houston joined IImagined with just a few thousand followers and big dreams.
                In his first month alone, he hit 20K followers using our viral content strategies.
                Today, he's making over $7K per month and has grown his brand to 80K+ followers.
                His transformation shows what's possible when you have the right system and take consistent action.
              </p>
              <div className="text-center">
                <span className="inline-block bg-green-600/20 text-green-400 px-4 py-2 rounded-full text-sm font-semibold">
                  20K followers in 30 days • $7K+/month revenue
                </span>
              </div>
            </div>

            <div className={`bg-gradient-to-r from-green-600/10 to-blue-600/10 border border-green-600/30 rounded-2xl p-6 md:p-8 hover-lift scroll-scale ${successAnimation.isVisible ? 'visible scroll-stagger-2' : ''}`}>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-center">Featured Success: Tochi's Transformation</h3>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed text-center mb-6">
                Tochi started with just 400 followers and was struggling to see any results.
                After taking IImagined, she grew her following to 240K in under 12 months
                and launched her own community and newsletter. Her story proves that with
                the right guidance, anyone can build a massive audience and successful business.
              </p>
              <div className="text-center">
                <span className="inline-block bg-purple-600/20 text-purple-400 px-4 py-2 rounded-full text-sm font-semibold">
                  400 → 240K followers in 12 months
                </span>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div
            ref={ctaAnimation.elementRef}
            className={`bg-zinc-900/50 rounded-2xl p-6 md:p-8 text-center hover-lift scroll-fade-up ${ctaAnimation.isVisible ? 'visible' : ''}`}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to become our next success story?</h2>
            <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
              Join thousands of creators who have transformed their lives with IImagined.
              Your success story could be featured here next.
            </p>
            <Link
              href="/creator-world"
              className="cta-button inline-block text-lg hover-lift"
            >
              Start Your Transformation Today
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
