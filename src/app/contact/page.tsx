'use client'

import Link from 'next/link'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function ContactPage() {
  // Scroll animations for different sections
  const heroAnimation = useScrollAnimation({ threshold: 0.3 })
  const contentAnimation = useScrollAnimation({ threshold: 0.2 })
  const faqAnimation = useScrollAnimation({ threshold: 0.1 })

  return (
    <div className="min-h-screen bg-dark relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 section-spacing">
        <div className="max-w-4xl mx-auto">
          {/* Page Title */}
          <div
            ref={heroAnimation.elementRef}
            className={`text-center mb-16 scroll-fade-up ${heroAnimation.isVisible ? 'visible' : ''}`}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-8">CONTACT</h1>
          </div>

          {/* Contact Content */}
          <div
            ref={contentAnimation.elementRef}
            className={`grid md:grid-cols-2 gap-8 md:gap-12 scroll-fade-up ${contentAnimation.isVisible ? 'visible' : ''}`}
          >
            {/* Left Column - Contact Info */}
            <div className={`space-y-8 scroll-fade-left ${contentAnimation.isVisible ? 'visible scroll-stagger-1' : ''}`}>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Get in touch
                </h2>
                <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                  I'd love to hear from you! Whether you have questions about my courses,
                  need support, or want to collaborate, feel free to reach out.
                </p>
              </div>

              <div className="space-y-8">
                {/* Email */}
                <div className="flex items-center space-x-4 p-4 bg-zinc-800/50 rounded-lg hover:bg-zinc-800/70 transition-colors duration-300">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Email</h3>
                    <a
                      href="mailto:anyro@iimagined.ai"
                      className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
                    >
                      anyro@iimagined.ai
                    </a>
                  </div>
                </div>

                {/* Website */}
                <div className="flex items-center space-x-4 p-4 bg-zinc-800/50 rounded-lg hover:bg-zinc-800/70 transition-colors duration-300">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Website</h3>
                    <a
                      href="https://anyro.net"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-400 hover:text-purple-300 transition-colors duration-300"
                    >
                      anyro.net
                    </a>
                  </div>
                </div>

                {/* Telegram Community */}
                <div className="flex items-center space-x-4 p-4 bg-zinc-800/50 rounded-lg hover:bg-zinc-800/70 transition-colors duration-300">
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Telegram Community</h3>
                    <a
                      href="https://t.me/IImagined"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-400 hover:text-green-300 transition-colors duration-300"
                    >
                      /IImagined
                    </a>
                  </div>
                </div>

                {/* Social Media */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Follow me everywhere @anyrxo</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <a
                      href="https://www.instagram.com/anyrxo/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-3 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-lg hover:from-pink-500/30 hover:to-purple-500/30 transition-all duration-300 group"
                    >
                      <svg className="w-5 h-5 text-pink-400 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                      <span className="text-sm font-medium">Instagram</span>
                    </a>
                    <a
                      href="https://www.youtube.com/@anyrxo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-3 bg-red-500/20 rounded-lg hover:bg-red-500/30 transition-all duration-300 group"
                    >
                      <svg className="w-5 h-5 text-red-400 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                      <span className="text-sm font-medium">YouTube</span>
                    </a>
                    <a
                      href="https://twitter.com/anyrxo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-3 bg-blue-500/20 rounded-lg hover:bg-blue-500/30 transition-all duration-300 group"
                    >
                      <svg className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                      <span className="text-sm font-medium">Twitter</span>
                    </a>
                    <a
                      href="https://tiktok.com/@anyrxo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-3 bg-gray-500/20 rounded-lg hover:bg-gray-500/30 transition-all duration-300 group"
                    >
                      <svg className="w-5 h-5 text-gray-400 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                      </svg>
                      <span className="text-sm font-medium">TikTok</span>
                    </a>
                  </div>
                </div>

                {/* Response Time */}
                <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h3 className="text-lg font-semibold">Response Time</h3>
                  </div>
                  <p className="text-gray-300">I typically respond within 12-24 hours during business days.</p>
                </div>
              </div>
            </div>

            {/* Right Column - Quick Links & Info */}
            <div className={`bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 hover-lift scroll-fade-right border border-zinc-800/50 ${contentAnimation.isVisible ? 'visible scroll-stagger-2' : ''}`}>
              <h3 className="text-xl md:text-2xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                Quick Links
              </h3>
              
              <div className="space-y-6">
                {/* Course Access */}
                <div className="p-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg border border-blue-500/20">
                  <h4 className="font-semibold mb-2 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    Course Access
                  </h4>
                  <p className="text-sm text-gray-300 mb-3">All courses are hosted on my Whop community with lifetime access.</p>
                  <a
                    href="https://whop.com/anyrxo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300 text-sm font-medium"
                  >
                    Access Courses →
                  </a>
                </div>

                {/* Free Resources */}
                <div className="p-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-lg border border-green-500/20">
                  <h4 className="font-semibold mb-2 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                    </svg>
                    Free Resources
                  </h4>
                  <p className="text-sm text-gray-300 mb-3">Download free templates, workflows, and guides to get started.</p>
                  <a
                    href="https://anyrxo.gumroad.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors duration-300 text-sm font-medium"
                  >
                    Browse Free Stuff →
                  </a>
                </div>

                {/* Support */}
                <div className="p-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg border border-purple-500/20">
                  <h4 className="font-semibold mb-2 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Need Support?
                  </h4>
                  <p className="text-sm text-gray-300 mb-3">Course members get priority support in our private community.</p>
                  <Link
                    href="/refund-policy"
                    className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-300 text-sm font-medium"
                  >
                    Refund Policy →
                  </Link>
                </div>

                {/* Office Hours */}
                <div className="p-4 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-lg border border-yellow-500/20">
                  <h4 className="font-semibold mb-2 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Best Times to Reach Me
                  </h4>
                  <div className="text-sm text-gray-300 space-y-1">
                    <p>Monday - Friday: 9 AM - 6 PM EST</p>
                    <p>Weekends: Limited availability</p>
                    <p>Emergency? DM me on Instagram</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div
            ref={faqAnimation.elementRef}
            className={`mt-16 text-center scroll-fade-up ${faqAnimation.isVisible ? 'visible' : ''}`}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Frequently Asked Questions</h2>
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
              <div className={`text-left scroll-fade-left ${faqAnimation.isVisible ? 'visible scroll-stagger-1' : ''}`}>
                <h3 className="text-lg md:text-xl font-semibold mb-3">How do I access my course?</h3>
                <p className="text-gray-400">
                  All courses are hosted on Whop. You'll receive access details after purchase.
                </p>
              </div>
              <div className={`text-left scroll-fade-right ${faqAnimation.isVisible ? 'visible scroll-stagger-2' : ''}`}>
                <h3 className="text-lg md:text-xl font-semibold mb-3">Do you offer refunds?</h3>
                <p className="text-gray-400">
                  Yes! We offer a 365-day action-based money-back guarantee.
                  <Link href="/refund-policy" className="text-blue-400 hover:text-blue-300 ml-1">
                    Learn more
                  </Link>
                </p>
              </div>
              <div className={`text-left scroll-fade-left ${faqAnimation.isVisible ? 'visible scroll-stagger-3' : ''}`}>
                <h3 className="text-lg md:text-xl font-semibold mb-3">Can I get personalized help?</h3>
                <p className="text-gray-400">
                  Absolutely! All courses include access to our community and support.
                </p>
              </div>
              <div className={`text-left scroll-fade-right ${faqAnimation.isVisible ? 'visible scroll-stagger-4' : ''}`}>
                <h3 className="text-lg md:text-xl font-semibold mb-3">Are courses updated?</h3>
                <p className="text-gray-400">
                  Yes, all courses receive regular updates and you get lifetime access.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
