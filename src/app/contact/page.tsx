'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function ContactPage() {
  // Scroll animations for different sections
  const heroAnimation = useScrollAnimation({ threshold: 0.3 })
  const contentAnimation = useScrollAnimation({ threshold: 0.2 })
  const faqAnimation = useScrollAnimation({ threshold: 0.1 })

  return (
    <div className="min-h-screen bg-dark">
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

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg md:text-xl font-semibold mb-2">Email</h3>
                  <a
                    href="mailto:biz@iimagined.ai"
                    className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
                  >
                    biz@iimagined.ai
                  </a>
                </div>

                <div>
                  <h3 className="text-lg md:text-xl font-semibold mb-2">Response Time</h3>
                  <p className="text-gray-400">I typically respond within 12-24 hours.</p>
                </div>

                <div>
                  <h3 className="text-lg md:text-xl font-semibold mb-2">Follow me</h3>
                  <div className="flex flex-wrap gap-4">
                    <a
                      href="https://www.instagram.com/anyrxo/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
                    >
                      Instagram
                    </a>
                    <a
                      href="https://www.youtube.com/@anyrxo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
                    >
                      YouTube
                    </a>
                    <a
                      href="https://twitter.com/anyrxo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
                    >
                      Twitter
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className={`bg-zinc-900 rounded-2xl p-6 md:p-8 hover-lift scroll-fade-right ${contentAnimation.isVisible ? 'visible scroll-stagger-2' : ''}`}>
              <h3 className="text-xl md:text-2xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                Send me a message
              </h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Your message..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full cta-button hover-lift"
                >
                  Send Message
                </button>
              </form>
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
                  <a href="/refund-policy" className="text-blue-400 hover:text-blue-300 ml-1">
                    Learn more
                  </a>
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
