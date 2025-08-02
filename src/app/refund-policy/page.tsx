'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import BlurIn from '@/components/magicui/blur-in'
import TypingAnimation from '@/components/magicui/typing-animation'
import NumberTicker from '@/components/magicui/number-ticker'

export default function RefundPolicyPage() {
  // Scroll animations for different sections
  const titleAnimation = useScrollAnimation({ threshold: 0.2 })
  const contentAnimation = useScrollAnimation({ threshold: 0.1 })
  const guaranteeAnimation = useScrollAnimation({ threshold: 0.1 })
  const emailAnimation = useScrollAnimation({ threshold: 0.2 })
  const ctaAnimation = useScrollAnimation({ threshold: 0.3 })
  return (
    <div className="min-h-screen bg-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 section-spacing">
        <div className="max-w-4xl mx-auto">
          {/* Page Title */}
          <div 
            ref={titleAnimation.elementRef}
            className={`mb-12 scroll-fade-up ${titleAnimation.isVisible ? 'visible' : ''}`}
          >
            <BlurIn
              word="Refund Policy"
              className="text-5xl md:text-6xl font-bold mb-8"
              duration={0.8}
            />
          </div>

          {/* Content */}
          <div 
            ref={contentAnimation.elementRef}
            className={`space-y-6 text-lg text-gray-300 leading-relaxed scroll-fade-up ${contentAnimation.isVisible ? 'visible' : ''}`}
          >
            <p>
              At IImagined, we strive to provide clear expectations about our digital products before purchase. The main product we offer is an evergreen video course, along with lifetime access to our community and 24/7 support. Due to the nature of our downloadable content, all sales are final, and we do not offer refunds for the following reasons:
            </p>

            <ul className="space-y-4 ml-6">
              <li className="flex items-start">
                <span className="text-blue-400 mr-3">•</span>
                <span>Personal circumstances.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-3">•</span>
                <span>Change of mind after purchase.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-3">•</span>
                <span>Not having enough time to complete the material.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-3">•</span>
                <span>Expectations beyond what is clearly stated on the landing page. All program details are thoroughly described prior to purchase, which you can review before deciding to join. Expecting something not declared on the landing page is outside of our control and does not qualify for a refund.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-3">•</span>
                <span>Dissatisfaction with the content being in English. All course materials are in English, so please make an informed decision before purchasing.</span>
              </li>
            </ul>

            <div 
              ref={guaranteeAnimation.elementRef}
              className={`bg-zinc-900 border border-zinc-700 rounded-lg p-8 my-12 card-hover hover-lift scroll-fade-up ${guaranteeAnimation.isVisible ? 'visible' : ''}`}
            >
              <h2 className="text-3xl font-bold mb-6 text-center">
                <NumberTicker value={365} suffix="-Day" className="text-3xl font-bold text-green-400 inline-block" />
                <span className="text-white"> Action-Based Money-Back Guarantee</span>
              </h2>

              <p className="mb-6">
                However, as stated on our website, we do offer a <strong>365-Day Action-Based Money-Back Guarantee.</strong>
              </p>

              <TypingAnimation
                text="We are confident that IImagined will help you achieve massive success. That's why we're offering a 365-Day Action-Based Money-Back Guarantee."
                className="mb-6"
                duration={50}
              />

              <p className="mb-8">
                If you follow the program and do not achieve at least one video with <NumberTicker value={1} suffix=" million views" className="font-bold text-blue-400 inline-block" /> within <NumberTicker value={12} suffix=" months" className="font-bold text-green-400 inline-block" />, we'll refund your full purchase price—no questions asked.
              </p>

              <h3 className="text-2xl font-bold mb-4">To qualify for this guarantee, you must:</h3>

              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-4 mt-1 flex-shrink-0">1</span>
                  <span>Post at least <NumberTicker value={4} className="font-semibold text-blue-400 inline-block" /> pieces of content per week throughout the program.</span>
                </div>
                <div className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-4 mt-1 flex-shrink-0">2</span>
                  <span>Complete the full course and implement the strategies shared.</span>
                </div>
                <div className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-4 mt-1 flex-shrink-0">3</span>
                  <span>Submit your Instagram page for an audit at least once during your learning.</span>
                </div>
                <div className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-4 mt-1 flex-shrink-0">4</span>
                  <span>Attend at least one live mastermind session in our community.</span>
                </div>
                <div className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-4 mt-1 flex-shrink-0">5</span>
                  <span>Request support and help by reaching out to our 24/7 community or support team.</span>
                </div>
              </div>
            </div>

            <p 
              ref={emailAnimation.elementRef}
              className={`text-center text-xl font-semibold scroll-fade-up ${emailAnimation.isVisible ? 'visible' : ''}`}
            >
              If you meet these criteria and still do not hit 1 million views on at least one video within 12 months, email me at{' '}
              <a
                href="mailto:biz@iimagined.ai"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                biz@iimagined.ai
              </a>
              , and I'll refund 100% of your purchase.
            </p>

            <div 
              ref={ctaAnimation.elementRef}
              className={`bg-blue-600/10 border border-blue-600/30 rounded-lg p-6 text-center card-hover hover-lift scroll-fade-up ${ctaAnimation.isVisible ? 'visible' : ''}`}
            >
              <p className="text-xl font-semibold text-blue-300">
                This guarantee is risk-free. The only thing standing between you and your breakthrough is starting today.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
