'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { CheckCircle, Lock, CreditCard } from 'lucide-react'
import Link from 'next/link'
import * as analytics from '@/lib/analytics'

// Course data
const COURSES = {
  'ai-influencers': {
    id: 'ai-influencers',
    name: 'AI Influencers Mastery Course',
    price: 169,
    originalPrice: 3169,
    isSubscription: false,
    features: [
      'Complete AI Influencer Creation System',
      'Advanced ComfyUI Workflows',
      'Social Media Strategy & Monetization',
      'Lifetime Access + Updates',
      '60-Day Money-Back Guarantee'
    ],
    whopUrl: 'https://whop.com/iimagined/ai-influencers-reimagined/',
    image: '/courses/ai-influencers.jpg'
  },
  'digital-products': {
    id: 'digital-products',
    name: 'Digital Products Academy',
    price: 189,
    originalPrice: 3450,
    isSubscription: false,
    features: [
      'Complete Digital Product Creation System',
      'Proven Monetization Strategies',
      'Sales Page Templates',
      'Lifetime Access + Updates',
      '60-Day Money-Back Guarantee'
    ],
    whopUrl: 'https://whop.com/iimagined/digital-products-reimagined/',
    image: '/courses/digital-products.jpg'
  },
  'instagram-ignited': {
    id: 'instagram-ignited',
    name: 'Instagram Ignited Course',
    price: 147,
    originalPrice: 2897,
    isSubscription: false,
    features: [
      'Instagram Growth Mastery',
      'Viral Content Strategies',
      'Monetization Blueprint',
      'Lifetime Access + Updates',
      '60-Day Money-Back Guarantee'
    ],
    whopUrl: 'https://whop.com/iimagined/instagram-reimagined/',
    image: '/courses/instagram.jpg'
  },
  'fx-trading': {
    id: 'fx-trading',
    name: 'Futures Trading',
    price: 197,
    originalPrice: 2197,
    isSubscription: false,
    features: [
      'Prop Firm Challenge Strategies',
      'Risk Management Systems',
      'Funded Account Success Blueprint',
      'Lifetime Access + Updates',
      '60-Day Money-Back Guarantee'
    ],
    whopUrl: 'https://whop.com/iimagined/all-access-reimagined/',
    image: '/courses/fx-trading.jpg'
  },
  'empire-bundle': {
    id: 'empire-bundle',
    name: 'All Access Empire Pass',
    price: 99,
    originalPrice: 199,
    isSubscription: true,
    features: [
      'Access to ALL 4 Courses',
      'Private Inner Circle Community',
      'Weekly Live Coaching Calls',
      'Exclusive Resource Library',
      'Future Course Updates Included',
      'Cancel Anytime'
    ],
    whopUrl: 'https://whop.com/iimagined/all-access-reimagined/',
    image: '/courses/all-access.jpg'
  },
  'all-access': {
    id: 'all-access',
    name: 'All-Access Pass',
    price: 39.99,
    originalPrice: null,
    isSubscription: true,
    features: [
      'Access to ALL 4 Courses',
      'New Courses Added Regularly',
      'Private Community Access',
      'Monthly Live Q&A Sessions',
      'Cancel Anytime'
    ],
    whopUrl: 'https://whop.com/iimagined/all-access-reimagined/',
    image: '/courses/all-access.jpg'
  }
}

function CheckoutContent() {
  const searchParams = useSearchParams()
  const courseId = searchParams.get('course') || 'ai-influencers'
  const [course, setCourse] = useState(COURSES[courseId as keyof typeof COURSES] || COURSES['ai-influencers'])
  const [isProcessing, setIsProcessing] = useState(false)

  // Initialize analytics tracking on mount
  useEffect(() => {
    // Track page view
    analytics.trackPageView('/checkout', 'Checkout Page')

    // Track begin_checkout event
    analytics.trackBeginCheckout(
      course.id,
      course.name,
      course.price
    )

    // Track checkout step 1 (Review Order)
    analytics.trackCheckoutStep(1, 'Review Order', course.id, course.name)

    // Initialize scroll and time tracking
    const scrollTracker = new analytics.ScrollDepthTracker('/checkout')
    const timeTracker = new analytics.TimeOnPageTracker('/checkout')

    // Cleanup on unmount
    return () => {
      scrollTracker.destroy()
      timeTracker.destroy()
    }
  }, [course])

  // Track course changes (if user switches courses)
  useEffect(() => {
    const newCourseId = searchParams.get('course') || 'ai-influencers'
    const newCourse = COURSES[newCourseId as keyof typeof COURSES] || COURSES['ai-influencers']

    if (newCourse.id !== course.id) {
      setCourse(newCourse)

      // Track course selection change
      analytics.trackAddToCart(
        newCourse.id,
        newCourse.name,
        newCourse.price
      )
    }
  }, [searchParams, course.id])

  const handleWhopCheckout = () => {
    setIsProcessing(true)

    // Track Complete Purchase button click
    analytics.trackCTAClick(
      'checkout_page',
      `Complete Purchase - $${course.price}${course.isSubscription ? '/mo' : ''}`,
      course.whopUrl
    )

    // Track checkout step 2 (Payment)
    analytics.trackCheckoutStep(2, 'Payment', course.id, course.name)

    // Track outbound link to Whop
    analytics.trackOutboundLink(
      course.whopUrl,
      'Complete Purchase',
      'checkout_page'
    )

    // Redirect to Whop checkout
    window.location.href = course.whopUrl
  }

  const savings = course.originalPrice ? course.originalPrice - course.price : 0
  const savingsPercent = course.originalPrice
    ? Math.round((savings / course.originalPrice) * 100)
    : 0

  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">

        {/* Progress Steps */}
        <div className="mb-12 flex items-center justify-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                <span className="text-sm font-bold">1</span>
              </div>
              <span className="ml-2 text-sm font-medium">Review Order</span>
            </div>
            <div className="w-16 h-0.5 bg-zinc-700"></div>
            <div className="flex items-center opacity-50">
              <div className="w-8 h-8 rounded-full bg-zinc-700 flex items-center justify-center">
                <span className="text-sm font-bold">2</span>
              </div>
              <span className="ml-2 text-sm font-medium">Payment</span>
            </div>
            <div className="w-16 h-0.5 bg-zinc-700"></div>
            <div className="flex items-center opacity-50">
              <div className="w-8 h-8 rounded-full bg-zinc-700 flex items-center justify-center">
                <span className="text-sm font-bold">3</span>
              </div>
              <span className="ml-2 text-sm font-medium">Access</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">

          {/* Left Column - Order Summary */}
          <div>
            <h1 className="text-4xl font-bold mb-8">Complete Your Order</h1>

            <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800">
              <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

              <div className="space-y-6">
                {/* Course Info */}
                <div className="flex items-start space-x-4">
                  <div className="w-24 h-24 bg-zinc-800 rounded-lg flex-shrink-0"></div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-1">{course.name}</h3>
                    <p className="text-zinc-400 text-sm">
                      {course.isSubscription ? 'Monthly Subscription' : 'Lifetime Access'}
                    </p>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3 pt-4 border-t border-zinc-800">
                  {course.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Pricing */}
                <div className="pt-6 border-t border-zinc-800 space-y-3">
                  {course.originalPrice && (
                    <div className="flex justify-between text-zinc-400">
                      <span>Original Price:</span>
                      <span className="line-through">${course.originalPrice}</span>
                    </div>
                  )}
                  {savings > 0 && (
                    <div className="flex justify-between text-green-400 font-semibold">
                      <span>You Save ({savingsPercent}%):</span>
                      <span>-${savings}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-2xl font-bold pt-3 border-t border-zinc-700">
                    <span>Total:</span>
                    <span className="text-green-400">
                      ${course.price}{course.isSubscription && '/mo'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="mt-6 flex items-center justify-center space-x-6 text-sm text-zinc-400">
              <div className="flex items-center space-x-2">
                <Lock className="w-4 h-4" />
                <span>Secure Checkout</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4" />
                <span>60-Day Guarantee</span>
              </div>
            </div>
          </div>

          {/* Right Column - Checkout Button & Info */}
          <div>
            <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-2xl p-8 border border-blue-500/20 sticky top-24">

              <div className="mb-6">
                <div className="flex items-center space-x-2 text-green-400 mb-4">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-semibold">Special Offer Active</span>
                </div>
                <p className="text-zinc-300 text-sm">
                  Save {savingsPercent}% today only. Price increases soon.
                </p>
              </div>

              {/* Main CTA */}
              <button
                onClick={handleWhopCheckout}
                disabled={isProcessing}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed mb-4"
              >
                {isProcessing ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Processing...
                  </span>
                ) : (
                  <span className="flex items-center justify-center">
                    <CreditCard className="w-5 h-5 mr-2" />
                    Complete Purchase - ${course.price}{course.isSubscription && '/mo'}
                  </span>
                )}
              </button>

              <p className="text-center text-xs text-zinc-400 mb-6">
                Powered by secure Whop checkout
              </p>

              {/* Guarantee */}
              <div className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-800">
                <h3 className="font-bold mb-3 flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  60-Day Money-Back Guarantee
                </h3>
                <p className="text-sm text-zinc-300">
                  Try the course risk-free. If you're not completely satisfied within 60 days, we'll refund 100% of your purchase.
                </p>
              </div>

              {/* FAQ Quick Links */}
              <div className="mt-6 space-y-2 text-sm">
                <Link
                  href="/faq"
                  className="block text-blue-400 hover:text-blue-300"
                  onClick={() => analytics.trackNavigation('FAQ', '/faq', 'main_nav')}
                >
                  → Frequently Asked Questions
                </Link>
                <Link
                  href="/testimonials"
                  className="block text-blue-400 hover:text-blue-300"
                  onClick={() => analytics.trackNavigation('Testimonials', '/testimonials', 'main_nav')}
                >
                  → See Student Success Stories
                </Link>
                <Link
                  href="/contact"
                  className="block text-blue-400 hover:text-blue-300"
                  onClick={() => analytics.trackNavigation('Contact', '/contact', 'main_nav')}
                >
                  → Contact Support
                </Link>
              </div>
            </div>
          </div>

        </div>

        {/* Additional Trust Section */}
        <div className="mt-16 text-center">
          <p className="text-zinc-400 mb-4">Trusted by 4,000+ students worldwide</p>
          <div className="flex items-center justify-center space-x-8 text-zinc-500">
            <div>
              <div className="text-3xl font-bold text-white">4.9/5</div>
              <div className="text-sm">Average Rating</div>
            </div>
            <div className="w-px h-12 bg-zinc-700"></div>
            <div>
              <div className="text-3xl font-bold text-white">$5M+</div>
              <div className="text-sm">Student Revenue</div>
            </div>
            <div className="w-px h-12 bg-zinc-700"></div>
            <div>
              <div className="text-3xl font-bold text-white">60-Day</div>
              <div className="text-sm">Money-Back</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-black text-white pt-32 pb-20 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
          <p className="text-zinc-400">Loading checkout...</p>
        </div>
      </div>
    }>
      <CheckoutContent />
    </Suspense>
  )
}
