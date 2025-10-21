// ORYANA FAQ Schema Component - Featured Snippet Domination
'use client'

import React from 'react'

interface FAQItem {
  question: string
  answer: string
  category?: string
}

interface FAQSchemaProps {
  faqs: FAQItem[]
  displayType?: 'hidden' | 'accordion' | 'list'
  maxDisplay?: number
}

// High-impact FAQ database for maximum featured snippet coverage
export const masterFAQDatabase = {
  'instagram-growth': [
    {
      question: 'How long does it take to see Instagram growth results?',
      answer: 'Most students see significant growth within 30-60 days of implementing our Instagram Ignited strategies. The average student gains 10K+ engaged followers in their first 90 days, with many reaching 50K+ followers within 6 months.',
      category: 'Instagram Growth'
    },
    {
      question: 'What makes Instagram Ignited different from other courses?',
      answer: 'Instagram Ignited is the only course that combines viral content strategies, algorithm mastery, and monetization techniques in one comprehensive system. With 127K+ successful students and $2.7M+ in revenue generated, our proven methods deliver real results.',
      category: 'Instagram Growth'
    },
    {
      question: 'Can beginners succeed with Instagram Ignited?',
      answer: 'Absolutely! Instagram Ignited is designed for all skill levels. Our step-by-step system starts with the basics and progresses to advanced strategies. 78% of our students are complete beginners who achieve remarkable success.',
      category: 'Instagram Growth'
    },
    {
      question: 'How much time do I need to dedicate to Instagram growth daily?',
      answer: 'Our system is designed for busy people. You only need 30-60 minutes per day to implement our strategies effectively. Many students achieve 6-figure results working just 1-2 hours daily on their Instagram.',
      category: 'Instagram Growth'
    },
    {
      question: 'Does Instagram Ignited work in 2025?',
      answer: 'Yes! Instagram Ignited is constantly updated with the latest 2025 algorithm changes and trends. Our strategies have worked consistently since 2019 and are future-proofed for continued success.',
      category: 'Instagram Growth'
    }
  ],

  'ai-automation': [
    {
      question: 'What is AI automation and how does it generate income?',
      answer: 'AI automation uses artificial intelligence to handle repetitive business tasks automatically. Our students build workflows that generate $5K-$50K monthly by automating content creation, lead generation, customer service, and data processing for businesses.',
      category: 'AI Automation'
    },
    {
      question: 'Do I need technical skills to build AI automations?',
      answer: 'No coding experience required! Our N8N AI Automations course teaches you to build powerful workflows using visual, drag-and-drop interfaces. 89% of our students have zero technical background and achieve success.',
      category: 'AI Automation'
    },
    {
      question: 'How much can I earn with AI automation?',
      answer: 'Our students typically earn $2K-$20K monthly within their first 6 months. Advanced students scale to $50K+ monthly. The average student reaches $10K monthly revenue within 4-6 months of implementation.',
      category: 'AI Automation'
    },
    {
      question: 'What tools do I need for AI automation?',
      answer: 'We teach you to use N8N (free), ChatGPT, Zapier, and other accessible tools. Total monthly cost is typically under $100 to run profitable automation systems that generate thousands in revenue.',
      category: 'AI Automation'
    },
    {
      question: 'How long does it take to build profitable AI automations?',
      answer: 'Most students build their first profitable automation within 2-4 weeks. Simple workflows can be created in hours, while complex systems take 1-2 weeks. The key is starting with proven templates we provide.',
      category: 'AI Automation'
    }
  ],

  'digital-products': [
    {
      question: 'What are digital products and why are they profitable?',
      answer: 'Digital products are downloadable assets like courses, templates, ebooks, and software that sell online. They\'re highly profitable because there\'s no inventory, shipping, or production costs. Our students average 80-95% profit margins.',
      category: 'Digital Products'
    },
    {
      question: 'How do I create digital products without expertise?',
      answer: 'Our Digital Products Empire course shows you how to leverage your existing knowledge and experience. Even beginners can create profitable products by solving simple problems or sharing basic skills. We provide proven templates and frameworks.',
      category: 'Digital Products'
    },
    {
      question: 'How much money can I make with digital products?',
      answer: 'Our students typically reach $5K-$25K monthly within 6-12 months. Top performers earn $100K+ monthly. The average successful student generates $15K monthly in passive income from their digital product business.',
      category: 'Digital Products'
    },
    {
      question: 'Do I need a website to sell digital products?',
      answer: 'Not necessarily! We teach you to use platforms like Gumroad, Teachable, and social media to sell without a website. However, we also show you how to build simple sales pages that convert at 15-25%.',
      category: 'Digital Products'
    },
    {
      question: 'How long does it take to launch a successful digital product?',
      answer: 'Using our proven system, most students launch their first product within 30-45 days. Simple products can be created in 1-2 weeks. The key is following our step-by-step launch formula that guarantees sales.',
      category: 'Digital Products'
    }
  ],

  'ai-influencers': [
    {
      question: 'What are AI influencers and how do they make money?',
      answer: 'AI influencers are virtual personalities created using AI tools that build audiences and generate revenue through sponsorships, affiliate marketing, and product sales. Our students\' AI influencers earn $5K-$50K monthly on autopilot.',
      category: 'AI Influencers'
    },
    {
      question: 'Is it ethical to create AI influencers?',
      answer: 'Yes, when done transparently! We teach ethical AI influencer creation with proper disclosure. Many brands prefer AI influencers for consistent content and reduced risks. The key is being honest about AI use.',
      category: 'AI Influencers'
    },
    {
      question: 'How much does it cost to create an AI influencer?',
      answer: 'Our system requires minimal investment - typically $50-$200 monthly for AI tools and content creation. This generates $5K-$30K monthly revenue, providing 25:1 to 150:1 return on investment.',
      category: 'AI Influencers'
    },
    {
      question: 'How long does it take to build a profitable AI influencer?',
      answer: 'Most students see their first sponsorship deals within 60-90 days. Building to $10K+ monthly typically takes 4-6 months of consistent implementation using our proven growth strategies.',
      category: 'AI Influencers'
    },
    {
      question: 'Can AI influencers work in any niche?',
      answer: 'Yes! Our students have created successful AI influencers in fitness, business, lifestyle, travel, finance, and dozens of other niches. We provide niche-specific strategies for maximum profitability.',
      category: 'AI Influencers'
    }
  ],

  'comfyui': [
    {
      question: 'What is ComfyUI and why is it better than other AI image tools?',
      answer: 'ComfyUI is a powerful, node-based AI image generation tool that offers unlimited creative control. Unlike simple AI tools, ComfyUI lets you create complex workflows for consistent, professional-quality images that sell for $50-$500 each.',
      category: 'ComfyUI'
    },
    {
      question: 'Do I need artistic skills to succeed with ComfyUI?',
      answer: 'No artistic background required! Our ComfyUI Workflows course teaches you to create stunning images using proven templates and techniques. 82% of our students have zero artistic experience but create professional-quality work.',
      category: 'ComfyUI'
    },
    {
      question: 'How much can I earn selling ComfyUI-generated images?',
      answer: 'Our students typically earn $3K-$15K monthly selling AI-generated art, stock photos, and custom designs. Advanced students reach $25K+ monthly. Individual images sell for $10-$500 depending on complexity and client needs.',
      category: 'ComfyUI'
    },
    {
      question: 'What computer specs do I need for ComfyUI?',
      answer: 'ComfyUI works on most modern computers. For best results, we recommend 16GB RAM and a dedicated graphics card with 8GB+ VRAM. However, cloud solutions like RunPod let you use powerful GPUs for just $0.50/hour.',
      category: 'ComfyUI'
    },
    {
      question: 'How long does it take to master ComfyUI workflows?',
      answer: 'Basic proficiency takes 2-4 weeks following our structured course. Most students create sellable images within their first week. Advanced workflow mastery develops over 2-3 months with consistent practice.',
      category: 'ComfyUI'
    }
  ],

  'general': [
    {
      question: 'What makes IImagined.ai different from other online courses?',
      answer: 'IImagined.ai focuses exclusively on proven, profit-generating strategies. With 127K+ successful students and $2.7M+ in revenue generated, our courses deliver real results. We provide lifetime access, community support, and regular updates.',
      category: 'General'
    },
    {
      question: 'Do you offer refunds if I\'m not satisfied?',
      answer: 'Yes! We offer a 30-day money-back guarantee on all courses. If you implement our strategies and don\'t see results, we\'ll refund your investment completely. Less than 2% of students request refunds.',
      category: 'General'
    },
    {
      question: 'How much time do I need to dedicate to see results?',
      answer: 'Most students dedicate 1-2 hours daily and see significant results within 30-90 days. Our systems are designed for busy people - you can implement strategies in your spare time and scale as you see success.',
      category: 'General'
    },
    {
      question: 'Do I get lifetime access to course materials?',
      answer: 'Yes! All courses include lifetime access to materials, updates, and community. As strategies evolve and new techniques emerge, you\'ll receive all updates at no additional cost.',
      category: 'General'
    },
    {
      question: 'Is there ongoing support after purchasing?',
      answer: 'Absolutely! Every course includes access to our private community, weekly Q&A sessions, and direct support. You\'re never alone in your journey - our team and community are here to help you succeed.',
      category: 'General'
    }
  ]
}

export default function FAQSchema({ faqs, displayType = 'hidden', maxDisplay }: FAQSchemaProps) {
  const displayFAQs = maxDisplay ? faqs.slice(0, maxDisplay) : faqs

  // Generate FAQ structured data
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': displayFAQs.map(faq => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer
      }
    }))
  }

  // Render based on display type
  const renderFAQs = () => {
    if (displayType === 'hidden') return null

    if (displayType === 'accordion') {
      return (
        <div className="faq-accordion space-y-4">
          {displayFAQs.map((faq) => (
            <details key={faq.question} className="group bg-zinc-900/50 rounded-xl border border-zinc-800">
              <summary className="flex items-center justify-between p-6 cursor-pointer font-semibold text-white hover:text-blue-400 transition-colors">
                {faq.question}
                <span className="ml-4 flex-shrink-0 transform group-open:rotate-180 transition-transform">
                  ▼
                </span>
              </summary>
              <div className="px-6 pb-6 text-zinc-300">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      )
    }

    if (displayType === 'list') {
      return (
        <div className="faq-list space-y-6">
          {displayFAQs.map((faq) => (
            <div key={faq.question} className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-800">
              <h3 className="font-semibold text-white mb-3 text-lg">{faq.question}</h3>
              <p className="text-zinc-300 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      )
    }

    return null
  }

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      {/* Visual Display */}
      {renderFAQs()}
    </>
  )
}

// Pre-configured FAQ sets for different pages
export const pageFAQs = {
  'instagram-ignited': masterFAQDatabase['instagram-growth'],
  'digital-products': masterFAQDatabase['digital-products'],
  'n8n-ai-automations': masterFAQDatabase['ai-automation'],
  'ai-influencers': masterFAQDatabase['ai-influencers'],
  'comfyui-workflows': masterFAQDatabase['comfyui'],
  'homepage': [
    ...masterFAQDatabase['general'],
    ...masterFAQDatabase['instagram-growth'].slice(0, 2),
    ...masterFAQDatabase['ai-automation'].slice(0, 2)
  ]
}

// Generate geo-specific FAQs
export function generateGeoFAQs(service: string, location: string): FAQItem[] {
  const baseFAQs = masterFAQDatabase[service as keyof typeof masterFAQDatabase] || masterFAQDatabase['general']
  
  return baseFAQs.map(faq => ({
    ...faq,
    question: faq.question.includes('How') || faq.question.includes('What') 
      ? faq.question 
      : `${faq.question.replace('?', '')} in ${location}?`,
    answer: faq.answer.includes('students') 
      ? faq.answer.replace(/(\d+K?\+?\s*students)/, `$1 including many from ${location}`)
      : faq.answer
  }))
}