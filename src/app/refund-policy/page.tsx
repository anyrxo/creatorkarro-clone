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
                <NumberTicker value={30} className="text-3xl font-bold text-green-400 inline-block" />-Day
                <span className="text-white"> Action-Based Money-Back Guarantee</span>
              </h2>

              <p className="mb-6">
                We are incredibly confident that IImagined.ai will help you achieve results. That's why we offer a <strong>30-Day Action-Based Money-Back Guarantee.</strong>
              </p>

              <p className="mb-8 text-zinc-300">
                This guarantee is NOT a "no questions asked" or "change of mind" refund policy. It is designed to protect the value of our intellectual property and community while ensuring that serious students who do the work are protected. If you follow the program, implement the strategies, and do not see results, we will refund your investment.
              </p>

              <h3 className="text-2xl font-bold mb-4 text-white">To qualify for a refund, you must demonstrate that you have implemented the system:</h3>

              <div className="space-y-4 text-sm md:text-base">
                <div className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-4 mt-1 flex-shrink-0">1</span>
                  <span><strong>Course Completion:</strong> You must have watched 100% of the core curriculum videos (tracked via our backend analytics).</span>
                </div>
                <div className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-4 mt-1 flex-shrink-0">2</span>
                  <span><strong>Action Items:</strong> You must provide completed worksheets and proof of implementation for each major module.</span>
                </div>
                <div className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-4 mt-1 flex-shrink-0">3</span>
                  <span><strong>Community Participation:</strong> You must have posted at least once in the community introducing yourself and engaged with the material.</span>
                </div>
                <div className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-4 mt-1 flex-shrink-0">4</span>
                  <span><strong>Proof of Work:</strong> You must provide screenshots of your setup (e.g., Instagram account optimization, AI model creation, n8n workflow setup) and outreach attempts.</span>
                </div>
                <div className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-4 mt-1 flex-shrink-0">5</span>
                  <span><strong>Fair Attempt:</strong> You must demonstrate that you have consistently applied the strategies for at least 14 days before requesting a refund.</span>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-red-900/20 border border-red-500/20 rounded-lg">
                <h4 className="text-red-400 font-bold mb-2">Non-Disparagement</h4>
                <p className="text-xs text-zinc-400">
                  By purchasing, you agree that if your refund request is denied due to failure to meet these criteria, or if you are granted a refund, you will not disparage IImagined.ai, its instructors, or its community publicly or privately. Violation of this clause may result in legal action and forfeiture of any potential refund.
                </p>
              </div>
            </div>

            <p 
              ref={emailAnimation.elementRef}
              className={`text-center text-xl font-semibold scroll-fade-up ${emailAnimation.isVisible ? 'visible' : ''}`}
            >
              If you meet these criteria and still want a refund within 30 days, email me at{' '}
              <a
                href="mailto:biz@iimagined.ai"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                biz@iimagined.ai
              </a>
              , with your proof of work, and I'll refund 100% of your purchase.
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
