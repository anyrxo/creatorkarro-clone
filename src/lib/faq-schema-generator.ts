// FAQ Schema Domination System - Rich Snippet Optimization
export interface FAQItem {
  id: string
  question: string
  answer: string
  category: string
  keywords: string[]
  priority: number
  schema: object
}

export interface FAQCategory {
  name: string
  description: string
  questions: FAQItem[]
  schema: object
}

export interface FAQGenerationOptions {
  industry: string
  location?: string
  product?: string
  tone: 'professional' | 'casual' | 'technical' | 'friendly'
  targetKeywords: string[]
  includeLocalSEO: boolean
}

// Comprehensive FAQ database for different industries
export const FAQ_TEMPLATES = {
  'ai-automation': {
    category: 'AI Automation',
    questions: [
      {
        template: 'How fast can I see results with {product} in {location}?',
        answer: 'Most {location} students see initial results within 7-14 days of implementing our AI automation strategies. Full transformation typically occurs within 90 days when following our proven system designed specifically for the {location} market.',
        keywords: ['results timeline', 'ai automation speed', 'implementation time']
      },
      {
        template: 'Do I need technical skills to use {product}?',
        answer: 'No technical skills required! Our step-by-step tutorials and done-for-you templates make it easy for anyone to implement these AI automation systems. We provide comprehensive training that takes you from beginner to expert.',
        keywords: ['technical skills', 'beginner friendly', 'no coding required']
      },
      {
        template: 'What AI tools are included in {product}?',
        answer: 'Our comprehensive suite includes ChatGPT automation, ComfyUI workflows, n8n integration, Zapier connections, and custom AI scripts. Everything you need to automate your business processes and generate consistent results.',
        keywords: ['ai tools', 'chatgpt', 'comfyui', 'automation tools']
      },
      {
        template: 'Is {product} suitable for {location} businesses?',
        answer: 'Absolutely! Our AI automation strategies are specifically optimized for {location} market conditions, regulations, and business practices. We have helped thousands of {location} entrepreneurs achieve remarkable success.',
        keywords: ['local business', 'location specific', 'market optimization']
      },
      {
        template: 'How much money can I make with AI automation?',
        answer: 'Our students have generated anywhere from $1K to $100K+ monthly using our AI automation systems. Results depend on implementation, niche selection, and consistency with our proven strategies.',
        keywords: ['income potential', 'revenue generation', 'earning capacity']
      }
    ]
  },
  'instagram-growth': {
    category: 'Instagram Growth',
    questions: [
      {
        template: 'How quickly can I gain followers using {product}?',
        answer: 'Most users see 1000-5000 new followers within the first 30 days using our Instagram growth strategies. Our proven system focuses on organic, high-quality followers who genuinely engage with your content.',
        keywords: ['follower growth', 'instagram followers', 'growth timeline']
      },
      {
        template: 'Will my Instagram account get banned using these methods?',
        answer: 'Our strategies are 100% compliant with Instagram\'s terms of service. We focus on organic growth techniques, authentic engagement, and content optimization that Instagram rewards, not penalizes.',
        keywords: ['account safety', 'instagram compliance', 'organic growth']
      },
      {
        template: 'What content types work best for Instagram growth?',
        answer: 'Reels, carousel posts, and Stories with high-value content perform best. Our system includes proven content templates, viral hook formulas, and engagement optimization strategies that consistently generate results.',
        keywords: ['content strategy', 'instagram reels', 'viral content']
      },
      {
        template: 'Do you provide content creation templates?',
        answer: 'Yes! Our comprehensive package includes 500+ content templates, 200+ viral hooks, caption formulas, hashtag research tools, and a complete content calendar system for consistent posting.',
        keywords: ['content templates', 'viral hooks', 'content calendar']
      },
      {
        template: 'How do I monetize my Instagram growth?',
        answer: 'We teach multiple monetization strategies including affiliate marketing, digital product sales, sponsored posts, course creation, and brand partnerships. Our students average $5K-50K monthly once they hit 10K followers.',
        keywords: ['instagram monetization', 'affiliate marketing', 'digital products']
      }
    ]
  },
  'digital-marketing': {
    category: 'Digital Marketing',
    questions: [
      {
        template: 'What digital marketing strategies are included in {product}?',
        answer: 'Our comprehensive system covers SEO, paid advertising, content marketing, email campaigns, social media marketing, conversion optimization, and analytics. Everything you need for complete digital dominance.',
        keywords: ['digital marketing strategies', 'seo', 'paid advertising', 'content marketing']
      },
      {
        template: 'How long does it take to see ROI from digital marketing?',
        answer: 'Most businesses see positive ROI within 60-90 days when implementing our proven digital marketing strategies. Some see results even faster with our rapid deployment techniques.',
        keywords: ['digital marketing roi', 'return on investment', 'marketing results']
      },
      {
        template: 'Do you provide marketing automation tools?',
        answer: 'Yes! Our system includes advanced marketing automation workflows, email sequences, lead nurturing campaigns, and CRM integration. Automate your entire marketing funnel for maximum efficiency.',
        keywords: ['marketing automation', 'email sequences', 'lead nurturing']
      },
      {
        template: 'Is this suitable for small businesses in {location}?',
        answer: 'Absolutely! Our strategies are specifically designed to help small {location} businesses compete with larger companies. We provide cost-effective solutions that deliver maximum impact on limited budgets.',
        keywords: ['small business marketing', 'local marketing', 'cost effective']
      },
      {
        template: 'What support do you provide for implementation?',
        answer: 'We provide comprehensive support including live coaching calls, private community access, implementation worksheets, done-for-you templates, and 24/7 email support to ensure your success.',
        keywords: ['marketing support', 'implementation help', 'coaching']
      }
    ]
  },
  'online-business': {
    category: 'Online Business',
    questions: [
      {
        template: 'How much does it cost to start an online business?',
        answer: 'You can start a profitable online business with as little as $100-500 using our lean startup methodology. We show you exactly how to minimize costs while maximizing revenue potential from day one.',
        keywords: ['startup costs', 'online business investment', 'lean startup']
      },
      {
        template: 'What online business models do you teach?',
        answer: 'We cover all high-profit models including digital products, online courses, consulting, e-commerce, affiliate marketing, SaaS, and service-based businesses. Choose what fits your skills and interests.',
        keywords: ['business models', 'digital products', 'online courses', 'ecommerce']
      },
      {
        template: 'How do I find my first customers online?',
        answer: 'Our customer acquisition system includes proven strategies for social media marketing, content marketing, paid advertising, SEO, and partnership marketing. Get your first 100 customers in 90 days.',
        keywords: ['customer acquisition', 'first customers', 'marketing strategies']
      },
      {
        template: 'Can I build an online business while working full-time?',
        answer: 'Yes! Our system is designed for busy professionals. With just 1-2 hours daily, you can build a thriving online business using our time-tested strategies and automation tools.',
        keywords: ['part time business', 'side hustle', 'work life balance']
      },
      {
        template: 'What legal requirements do I need for an online business?',
        answer: 'We provide comprehensive guidance on business registration, tax obligations, privacy policies, terms of service, and compliance requirements. Everything you need to operate legally and professionally.',
        keywords: ['business legal', 'online business law', 'compliance']
      }
    ]
  },
  'passive-income': {
    category: 'Passive Income',
    questions: [
      {
        template: 'What passive income streams do you teach?',
        answer: 'Our system covers digital products, online courses, affiliate marketing, rental income, dividend investing, royalties, and automated online businesses. Multiple streams for maximum security.',
        keywords: ['passive income streams', 'multiple income', 'financial freedom']
      },
      {
        template: 'How much passive income can I realistically generate?',
        answer: 'Our students typically build passive income streams of $1K-10K monthly within 6-12 months. Some achieve $50K+ monthly by scaling multiple systems simultaneously.',
        keywords: ['passive income potential', 'income goals', 'financial results']
      },
      {
        template: 'How long does it take to build passive income?', 
        answer: 'While truly passive income takes 6-12 months to establish, you can start generating income within 30-60 days. The key is consistent implementation of our proven systems.',
        keywords: ['passive income timeline', 'income building', 'financial goals']
      },
      {
        template: 'Do I need money to start building passive income?',
        answer: 'You can start with as little as $0-100 using our bootstrap methods. We show you how to leverage free platforms, organic marketing, and reinvest profits for exponential growth.',
        keywords: ['starting with no money', 'bootstrap passive income', 'low investment']
      },
      {
        template: 'How passive is passive income really?',
        answer: 'Initially, you\'ll work 10-20 hours weekly setting up systems. Once established, maintenance requires 2-5 hours weekly for optimization and scaling. True passive income takes initial effort.',
        keywords: ['passive income reality', 'time investment', 'income maintenance']
      }
    ]
  }
}

export class FAQSchemaGenerator {
  constructor() {}
  
  // Generate comprehensive FAQ system for a specific topic
  generateFAQSystem(
    topic: string,
    options: FAQGenerationOptions
  ): FAQCategory {
    const template = FAQ_TEMPLATES[topic as keyof typeof FAQ_TEMPLATES]
    if (!template) {
      throw new Error(`FAQ template not found for topic: ${topic}`)
    }
    
    const questions: FAQItem[] = template.questions.map((q, index) => {
      const question = this.processTemplate(q.template, options)
      const answer = this.processTemplate(q.answer, options)
      
      return {
        id: `faq-${topic}-${index + 1}`,
        question,
        answer,
        category: template.category,
        keywords: [...q.keywords, ...options.targetKeywords],
        priority: this.calculatePriority(q.keywords, options.targetKeywords),
        schema: this.generateQuestionSchema(question, answer)
      }
    })
    
    // Add location-specific questions if requested
    if (options.includeLocalSEO && options.location) {
      questions.push(...this.generateLocalSEOQuestions(topic, options))
    }
    
    // Sort by priority (highest first)
    questions.sort((a, b) => b.priority - a.priority)
    
    return {
      name: template.category,
      description: `Comprehensive FAQ about ${template.category} for ${options.location || 'everyone'}`,
      questions,
      schema: this.generateFAQPageSchema(questions)
    }
  }
  
  // Process template with dynamic variables
  private processTemplate(template: string, options: FAQGenerationOptions): string {
    let processed = template
    
    // Replace variables
    processed = processed.replace(/\{product\}/g, options.product || 'our system')
    processed = processed.replace(/\{location\}/g, options.location || 'our')
    processed = processed.replace(/\{industry\}/g, options.industry)
    
    // Adjust tone
    processed = this.adjustTone(processed, options.tone)
    
    return processed
  }
  
  // Adjust content tone
  private adjustTone(content: string, tone: string): string {
    const toneAdjustments = {
      professional: {
        'really': 'significantly',
        'awesome': 'excellent',
        'super': 'highly',
        'tons of': 'numerous'
      },
      casual: {
        'significantly': 'really',
        'excellent': 'awesome',
        'highly': 'super',
        'numerous': 'tons of'
      },
      technical: {
        'easy': 'straightforward',
        'simple': 'efficient',
        'great': 'optimal',
        'good': 'effective'
      },
      friendly: {
        'system': 'approach',
        'strategies': 'methods',
        'implementation': 'getting started',
        'optimization': 'improvement'
      }
    }
    
    const adjustments = toneAdjustments[tone as keyof typeof toneAdjustments]
    if (!adjustments) return content
    
    let adjusted = content
    Object.entries(adjustments).forEach(([from, to]) => {
      adjusted = adjusted.replace(new RegExp(`\\b${from}\\b`, 'gi'), to)
    })
    
    return adjusted
  }
  
  // Calculate priority based on keyword overlap
  private calculatePriority(questionKeywords: string[], targetKeywords: string[]): number {
    const overlap = questionKeywords.filter(k => 
      targetKeywords.some(t => t.toLowerCase().includes(k.toLowerCase()) || k.toLowerCase().includes(t.toLowerCase()))
    )
    
    return overlap.length * 10 + Math.random() * 5 // Add small random factor for tie-breaking
  }
  
  // Generate location-specific FAQ questions
  private generateLocalSEOQuestions(topic: string, options: FAQGenerationOptions): FAQItem[] {
    if (!options.location) return []
    
    const localQuestions = [
      {
        question: `Do you provide ${topic} services in ${options.location}?`,
        answer: `Yes! We provide comprehensive ${topic} services specifically for ${options.location} businesses and residents. Our strategies are optimized for the ${options.location} market and comply with all local regulations.`,
        keywords: ['local services', 'location specific', options.location.toLowerCase()]
      },
      {
        question: `What makes your ${topic} approach work in ${options.location}?`,
        answer: `Our ${topic} strategies are specifically tailored for the ${options.location} market. We understand local competition, customer behavior, and market dynamics that make businesses successful in ${options.location}.`,
        keywords: ['local market', 'location advantages', 'market specific']
      },
      {
        question: `Can I get support in ${options.location} timezone?`,
        answer: `Absolutely! We provide support during ${options.location} business hours and have team members familiar with the ${options.location} market who can provide location-specific guidance and assistance.`,
        keywords: ['local support', 'timezone support', 'local assistance']
      }
    ]
    
    return localQuestions.map((q, index) => ({
      id: `faq-local-${topic}-${index + 1}`,
      question: q.question,
      answer: q.answer,
      category: `${topic} - Local`,
      keywords: q.keywords,
      priority: 15, // High priority for local SEO
      schema: this.generateQuestionSchema(q.question, q.answer)
    }))
  }
  
  // Generate schema for individual question
  private generateQuestionSchema(question: string, answer: string): object {
    return {
      '@type': 'Question',
      'name': question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': answer
      }
    }
  }
  
  // Generate complete FAQ page schema
  generateFAQPageSchema(questions: FAQItem[]): object {
    return {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': questions.map(q => q.schema)
    }
  }
  
  // Generate FAQ HTML with proper markup
  generateFAQHTML(faqSystem: FAQCategory, options: {
    includeSchema: boolean
    showCategories: boolean
    collapsible: boolean
  } = { includeSchema: true, showCategories: true, collapsible: true }): string {
    const questionsHTML = faqSystem.questions.map((faq, index) => `
      <div class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
        <h3 class="faq-question ${options.collapsible ? 'collapsible' : ''}" 
            itemprop="name" 
            onclick="${options.collapsible ? `toggleFAQ(${index})` : ''}"
            role="${options.collapsible ? 'button' : 'heading'}"
            aria-expanded="${options.collapsible ? 'false' : 'true'}">
          ${faq.question}
          ${options.collapsible ? '<span class="faq-toggle">+</span>' : ''}
        </h3>
        <div class="faq-answer ${options.collapsible ? 'collapsed' : ''}" 
             itemscope itemprop="acceptedAnswer" 
             itemtype="https://schema.org/Answer">
          <div itemprop="text">
            ${faq.answer}
          </div>
        </div>
      </div>
    `).join('')
    
    const schemaScript = options.includeSchema ? `
      <script type="application/ld+json">
        ${JSON.stringify(faqSystem.schema, null, 2)}
      </script>
    ` : ''
    
    return `
      <section class="faq-section">
        <div class="faq-container">
          <h2 class="faq-title">Frequently Asked Questions${options.showCategories ? ` - ${faqSystem.name}` : ''}</h2>
          <div class="faq-description">${faqSystem.description}</div>
          <div class="faq-list">
            ${questionsHTML}
          </div>
        </div>
        ${schemaScript}
      </section>
      
      ${options.collapsible ? `
      <script>
        function toggleFAQ(index) {
          const question = document.querySelectorAll('.faq-question')[index];
          const answer = document.querySelectorAll('.faq-answer')[index];
          const toggle = question.querySelector('.faq-toggle');
          
          if (answer.classList.contains('collapsed')) {
            answer.classList.remove('collapsed');
            question.setAttribute('aria-expanded', 'true');
            toggle.textContent = '-';
          } else {
            answer.classList.add('collapsed');
            question.setAttribute('aria-expanded', 'false');
            toggle.textContent = '+';
          }
        }
      </script>
      ` : ''}
      
      <style>
        .faq-section {
          background: #1e293b;
          padding: 60px 0;
          color: #f1f5f9;
        }
        .faq-container {
          max-width: 800px;
          margin: 0 auto;
          padding: 0 20px;
        }
        .faq-title {
          text-align: center;
          font-size: 2.5rem;
          margin-bottom: 20px;
          color: #3b82f6;
        }
        .faq-description {
          text-align: center;
          font-size: 1.1rem;
          margin-bottom: 40px;
          color: #cbd5e1;
        }
        .faq-item {
          background: #334155;
          border-radius: 8px;
          margin-bottom: 20px;
          overflow: hidden;
        }
        .faq-question {
          background: #475569;
          padding: 20px;
          margin: 0;
          font-size: 1.2rem;
          font-weight: 600;
          color: #f1f5f9;
          cursor: ${options.collapsible ? 'pointer' : 'default'};
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: background-color 0.3s ease;
        }
        .faq-question:hover {
          background: ${options.collapsible ? '#64748b' : '#475569'};
        }
        .faq-toggle {
          font-size: 1.5rem;
          font-weight: bold;
          color: #3b82f6;
        }
        .faq-answer {
          padding: 20px;
          font-size: 1rem;
          line-height: 1.6;
          color: #cbd5e1;
          ${options.collapsible ? 'max-height: 1000px; transition: max-height 0.3s ease, padding 0.3s ease;' : ''}
        }
        .faq-answer.collapsed {
          max-height: 0;
          padding: 0 20px;
          overflow: hidden;
        }
        @media (max-width: 768px) {
          .faq-title { font-size: 2rem; }
          .faq-question { font-size: 1.1rem; padding: 15px; }
          .faq-answer { padding: 15px; }
        }
      </style>
    `
  }
  
  // Generate multiple FAQ systems for different topics
  generateBulkFAQSystems(
    topics: string[],
    baseOptions: FAQGenerationOptions
  ): Record<string, FAQCategory> {
    const systems: Record<string, FAQCategory> = {}
    
    topics.forEach(topic => {
      try {
        systems[topic] = this.generateFAQSystem(topic, {
          ...baseOptions,
          targetKeywords: [...baseOptions.targetKeywords, topic.replace('-', ' ')]
        })
      } catch (error) {
        console.warn(`Failed to generate FAQ for topic: ${topic}`, error)
      }
    })
    
    return systems
  }
  
  // Generate FAQ sitemap for search engines
  generateFAQSitemap(faqSystems: Record<string, FAQCategory>): string {
    const urls = Object.entries(faqSystems)
      .map(([topic, system]) => `
  <url>
    <loc>https://iimagined.ai/faq/${topic}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`).join('')
    
    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://iimagined.ai/faq</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
${urls}
</urlset>`
  }
}

// Export singleton instance
export const faqGenerator = new FAQSchemaGenerator()

// Utility functions
export function generateQuickFAQ(
  topic: string, 
  location?: string,
  product?: string
): FAQCategory {
  return faqGenerator.generateFAQSystem(topic, {
    industry: topic,
    location,
    product,
    tone: 'professional',
    targetKeywords: [topic.replace('-', ' ')],
    includeLocalSEO: !!location
  })
}

export function generateLocationFAQs(
  topics: string[],
  locations: string[]
): Record<string, Record<string, FAQCategory>> {
  const result: Record<string, Record<string, FAQCategory>> = {}
  
  topics.forEach(topic => {
    result[topic] = {}
    locations.forEach(location => {
      result[topic][location] = generateQuickFAQ(topic, location)
    })
  })
  
  return result
}