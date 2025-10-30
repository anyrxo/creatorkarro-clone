'use client'

import { useState } from 'react'

interface FAQ {
  id: string
  question: string
  answer: string
  keywords: string[]
  priority: number
  category: string
  schema: {
    '@type': string
    name: string
    acceptedAnswer: {
      '@type': string
      text: string
    }
  }
}

interface FAQSectionProps {
  questions: FAQ[]
  category: string
  collapsible?: boolean
  showSchema?: boolean
  maxQuestions?: number
}

export default function FAQSection({ 
  questions, 
  category, 
  collapsible = true, 
  showSchema = false,
  maxQuestions 
}: FAQSectionProps) {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set())
  
  const displayQuestions = maxQuestions ? questions.slice(0, maxQuestions) : questions
  
  const toggleItem = (id: string) => {
    if (!collapsible) return
    
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id)
    } else {
      newOpenItems.add(id)
    }
    setOpenItems(newOpenItems)
  }

  const isOpen = (id: string) => collapsible ? openItems.has(id) : true

  if (displayQuestions.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-400">No FAQ items found for this category.</p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {showSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: displayQuestions.map(faq => faq.schema)
            })
          }}
        />
      )}
      
      {displayQuestions.map((faq, index) => (
        <div
          key={faq.id}
          className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden"
        >
          <div
            className={`p-6 ${collapsible ? 'cursor-pointer hover:bg-gray-750' : ''} focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-500 rounded-lg`}
            onClick={() => toggleItem(faq.id)}
            role={collapsible ? 'button' : undefined}
            tabIndex={collapsible ? 0 : undefined}
            onKeyDown={(e) => {
              if (collapsible && (e.key === 'Enter' || e.key === ' ')) {
                e.preventDefault()
                toggleItem(faq.id)
              }
            }}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-white faq-question pr-4">
                {faq.question}
              </h3>
              {collapsible && (
                <div className="flex-shrink-0">
                  <span className="text-2xl text-gray-400 transition-transform duration-200">
                    {isOpen(faq.id) ? '−' : '+'}
                  </span>
                </div>
              )}
            </div>
            
            {/* Show priority and category badges */}
            <div className="flex gap-2 mt-2">
              {faq.priority > 8 && (
                <span className="bg-red-600 text-white px-2 py-1 rounded text-xs font-medium">
                  High Priority
                </span>
              )}
              <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs">
                {category}
              </span>
            </div>
          </div>
          
          {isOpen(faq.id) && (
            <div className="px-6 pb-6">
              <div className="border-t border-gray-700 pt-4">
                <div className="text-gray-300 leading-relaxed whitespace-pre-line">
                  {faq.answer}
                </div>
                
                {/* Keywords */}
                {faq.keywords && faq.keywords.length > 0 && (
                  <div className="mt-4">
                    <p className="text-sm text-gray-400 mb-2">Related topics:</p>
                    <div className="flex flex-wrap gap-2">
                      {faq.keywords.slice(0, 5).map((keyword, keywordIndex) => (
                        <span
                          key={keywordIndex}
                          className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      ))}
      
      {/* Summary info */}
      <div className="mt-8 p-4 bg-gray-800 rounded-lg border-l-4 border-blue-500">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-white font-medium">
              {category} FAQ - {displayQuestions.length} questions
            </p>
            <p className="text-gray-400 text-sm">
              {displayQuestions.filter(q => q.priority > 8).length} high priority questions
            </p>
          </div>
          
          {collapsible && (
            <div className="flex gap-2">
              <button
                onClick={() => setOpenItems(new Set(displayQuestions.map(q => q.id)))}
                className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm transition-colors"
              >
                Expand All
              </button>
              <button
                onClick={() => setOpenItems(new Set())}
                className="bg-gray-600 hover:bg-gray-700 text-white px-3 py-1 rounded text-sm transition-colors"
              >
                Collapse All
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}