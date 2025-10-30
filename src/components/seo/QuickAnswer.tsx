// Quick Answer Box - AI Search & Featured Snippet Optimization
'use client'

interface QuickAnswerProps {
  question: string
  answer: string
  category?: string
  additionalInfo?: string
}

export default function QuickAnswer({
  question,
  answer,
  category,
  additionalInfo
}: QuickAnswerProps) {

  const qaSchema = {
    '@context': 'https://schema.org',
    '@type': 'Question',
    name: question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: answer,
      dateCreated: new Date().toISOString(),
      upvoteCount: 0,
      author: {
        '@type': 'Person',
        name: 'Anyro',
        url: 'https://iimagined.ai/about'
      }
    },
    ...(category && { about: category })
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(qaSchema) }}
      />

      <aside
        role="complementary"
        aria-label="Quick answer"
        data-quick-answer="true"
        data-ai-answer-box="true"
        className="border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-900/20 p-6 my-8 rounded-r-lg"
      >
        {/* Question */}
        <h3
          className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-3"
          data-question="true"
          itemProp="name"
        >
          {question}
        </h3>

        {/* Answer - Optimized for AI Citation */}
        <div
          className="text-lg text-gray-800 dark:text-gray-200 font-medium mb-2"
          data-answer="true"
          data-ai-citation-target="true"
          itemProp="acceptedAnswer"
        >
          <strong>TL;DR:</strong> {answer}
        </div>

        {/* Additional Context */}
        {additionalInfo && (
          <p className="text-gray-700 dark:text-gray-300 mt-4 text-base">
            {additionalInfo}
          </p>
        )}

        {/* AI Context Helper */}
        <meta name="ai-answer" content={answer} />
        <meta name="ai-question" content={question} />
      </aside>
    </>
  )
}

// Multiple Quick Answers Component
interface MultiQuickAnswerProps {
  qaItems: Array<{
    question: string
    answer: string
    category?: string
  }>
}

export function MultiQuickAnswer({ qaItems }: MultiQuickAnswerProps) {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: qaItems.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer
      }
    }))
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div role="region" aria-label="Frequently asked questions">
        {qaItems.map((item, index) => (
          <QuickAnswer
            key={index}
            question={item.question}
            answer={item.answer}
            category={item.category}
          />
        ))}
      </div>
    </>
  )
}
