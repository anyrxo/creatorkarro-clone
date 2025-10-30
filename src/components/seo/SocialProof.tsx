// Social Proof Component - Trust & Authority Signals
'use client'

interface SocialProofProps {
  students?: number
  revenue?: string
  rating?: number
  reviews?: number
  companies?: number
  showAll?: boolean
}

export default function SocialProof({
  students = 127000,
  revenue = '$2.3M+',
  rating = 4.9,
  reviews = 3247,
  companies = 50,
  showAll = true
}: SocialProofProps) {

  const aggregateRatingSchema = {
    '@context': 'https://schema.org',
    '@type': 'AggregateRating',
    ratingValue: rating,
    reviewCount: reviews,
    bestRating: 5,
    worstRating: 1,
    itemReviewed: {
      '@type': 'EducationalOrganization',
      name: 'IImagined.ai',
      url: 'https://iimagined.ai'
    }
  }

  const statsItems = [
    {
      value: `${(students / 1000).toFixed(0)}K+`,
      label: 'Students Enrolled',
      icon: '👨‍🎓',
      show: true
    },
    {
      value: revenue,
      label: 'Student Revenue',
      icon: '💰',
      show: showAll
    },
    {
      value: rating.toFixed(1),
      label: `Rating (${reviews.toLocaleString()} reviews)`,
      icon: '⭐',
      show: true
    },
    {
      value: `${companies}+`,
      label: 'Partner Companies',
      icon: '🏢',
      show: showAll
    }
  ]

  const visibleStats = statsItems.filter(item => item.show)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRatingSchema) }}
      />

      <aside
        role="complementary"
        aria-label="Social proof and trust indicators"
        data-social-proof="true"
        className="my-8"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {visibleStats.map((stat, index) => (
            <div
              key={index}
              className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl border-2 border-purple-200 dark:border-purple-800 text-center"
              data-stat={stat.label}
            >
              <div
                className="text-4xl mb-2"
                aria-hidden="true"
              >
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-purple-900 dark:text-purple-100 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-700 dark:text-gray-300 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Hidden metadata for SEO/AI */}
        <div style={{ display: 'none' }} aria-hidden="true">
          <meta name="student-count" content={String(students)} />
          <meta name="revenue-generated" content={revenue} />
          <meta name="rating" content={String(rating)} />
          <meta name="review-count" content={String(reviews)} />
          <meta name="trust-score" content="high" />
          <meta name="social-proof" content="verified" />
        </div>
      </aside>
    </>
  )
}

// Compact Social Proof Badge
export function SocialProofBadge({
  students = 127000,
  rating = 4.9
}: {
  students?: number
  rating?: number
}) {
  return (
    <div
      className="inline-flex items-center gap-4 px-4 py-2 bg-purple-100 dark:bg-purple-900/30 rounded-full border border-purple-300 dark:border-purple-700"
      data-social-proof-badge="true"
    >
      <span className="flex items-center gap-1 text-sm font-semibold text-purple-900 dark:text-purple-100">
        <span aria-hidden="true">👨‍🎓</span>
        {(students / 1000).toFixed(0)}K+ Students
      </span>
      <span className="flex items-center gap-1 text-sm font-semibold text-purple-900 dark:text-purple-100">
        <span aria-hidden="true">⭐</span>
        {rating.toFixed(1)} Rating
      </span>
    </div>
  )
}

// Trust Indicators Bar
export function TrustIndicators() {
  const indicators = [
    { icon: '✓', text: 'Expert-Verified Content' },
    { icon: '🔒', text: 'Secure Payment' },
    { icon: '🎓', text: 'Lifetime Access' },
    { icon: '💯', text: 'Money-Back Guarantee' }
  ]

  return (
    <div
      className="flex flex-wrap items-center justify-center gap-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800"
      data-trust-indicators="true"
    >
      {indicators.map((indicator, index) => (
        <div
          key={index}
          className="flex items-center gap-2 text-sm font-medium text-green-800 dark:text-green-200"
        >
          <span aria-hidden="true">{indicator.icon}</span>
          <span>{indicator.text}</span>
        </div>
      ))}
    </div>
  )
}
