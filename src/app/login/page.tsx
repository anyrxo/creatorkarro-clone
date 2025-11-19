'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function LoginPage() {
  // Scroll animations
  const titleAnimation = useScrollAnimation({ threshold: 0.2 })
  const contentAnimation = useScrollAnimation({ threshold: 0.1 })
  const buttonAnimation = useScrollAnimation({ threshold: 0.2 })

  return (
    <div className="min-h-screen bg-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 section-spacing">
        <div className="max-w-4xl mx-auto text-center">
          {/* Page Title */}
          <div 
            ref={titleAnimation.elementRef}
            className={`mb-12 scroll-fade-up ${titleAnimation.isVisible ? 'visible' : ''}`}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-8">MEMBERS LOGIN</h1>
          </div>

          {/* Content */}
          <div 
            ref={contentAnimation.elementRef}
            className={`space-y-6 text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto scroll-fade-up ${contentAnimation.isVisible ? 'visible' : ''}`}
          >
            <p>
              All of our courses are hosted on Whop.
            </p>

            <p>
              If you've already purchased the program or gained access as a previous member, simply{' '}
              <a
                href="https://whop.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                visit this link and log in to the platform.
              </a>
            </p>

            <p>
              If you've lost access to your course as a past customer, please don't hesitate to email me at{' '}
              <a
                href="mailto:support@iimagined.ai"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                support@iimagined.ai
              </a>{' '}
              with the subject line "Course Access," and we'll assist you within 12-24 hours.
            </p>
          </div>

          {/* Login Button */}
          <div 
            ref={buttonAnimation.elementRef}
            className={`mt-12 scroll-fade-up ${buttonAnimation.isVisible ? 'visible' : ''}`}
          >
            <a
              href="https://whop.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button inline-block text-lg btn-animate animate-glow hover-lift"
            >
              Log in here
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
