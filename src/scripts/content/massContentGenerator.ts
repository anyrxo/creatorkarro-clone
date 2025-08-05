// ORYANA Mass Content Generator - TOXIC SEO Content Explosion
import fs from 'fs/promises'
import path from 'path'
import { BlogContentFactory } from '@/templates/blogContentGenerator'
import { generateOptimizedMeta } from '@/utils/metaGenerator'

// High-volume content generation for SEO domination
export class MassContentGenerator {
  
  // Generate comparison pages (Brand vs IImagined.ai)
  static async generateComparisonPages(): Promise<void> {
    const competitors = [
      'teachable', 'udemy', 'skillshare', 'coursera', 'masterclass',
      'thinkific', 'kajabi', 'clickfunnels', 'leadpages', 'unbounce',
      'convertkit', 'mailchimp', 'activecampaign', 'hubspot', 'getresponse'
    ]

    const comparisonTemplate = `'use client'

import { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, XCircle, Star, Users, DollarSign } from 'lucide-react'
import { generateOptimizedMeta } from '@/utils/metaGenerator'

export const metadata: Metadata = {{METADATA}}

export default function {{COMPONENT_NAME}}() {
  const comparisonData = {
    iimagined: {
      name: 'IImagined.ai',
      rating: 4.97,
      students: '127K+',
      price: '$147',
      originalPrice: '$297',
      features: [
        'Complete Instagram Growth System',
        'AI Automation Mastery',
        'Digital Products Blueprint',
        'Lifetime Access & Updates',
        'Private Community Access',
        'Weekly Live Sessions',
        '1-on-1 Success Coaching',
        '30-Day Money-Back Guarantee',
        'Proven Results (127K+ Students)',
        'Industry Expert Instructors'
      ],
      pros: [
        'Highest success rate (97%)',
        'Real student results and testimonials',
        'Comprehensive all-in-one platform',
        'Lifetime access with free updates',
        'Active community support',
        'Proven track record since 2019',
        'Money-back guarantee',
        'Regular content updates'
      ],
      cons: [
        'Premium pricing (worth the investment)',
        'Requires commitment to see results'
      ],
      bestFor: 'Serious entrepreneurs wanting proven results and long-term success'
    },
    competitor: {
      name: '{{COMPETITOR_DISPLAY}}',
      rating: {{COMPETITOR_RATING}},
      students: '{{COMPETITOR_STUDENTS}}',
      price: '{{COMPETITOR_PRICE}}',
      features: {{COMPETITOR_FEATURES}},
      pros: {{COMPETITOR_PROS}},
      cons: {{COMPETITOR_CONS}},
      bestFor: '{{COMPETITOR_BEST_FOR}}'
    }
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    'name': 'IImagined.ai vs {{COMPETITOR_DISPLAY}} - Complete Comparison',
    'description': 'Detailed comparison between IImagined.ai and {{COMPETITOR_DISPLAY}}. See why 127K+ students choose IImagined.ai for guaranteed results.',
    'brand': {
      '@type': 'Brand',
      'name': 'IImagined.ai'
    },
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': '4.97',
      'reviewCount': '3847',
      'bestRating': '5'
    },
    'offers': {
      '@type': 'Offer',
      'price': '147',
      'priceCurrency': 'USD',
      'availability': 'https://schema.org/InStock'
    }
  }

  return (
    <div className="min-h-screen bg-dark text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            IImagined.ai vs {{COMPETITOR_DISPLAY}}: Which is Better?
          </h1>
          <p className="text-xl text-zinc-300 mb-8 max-w-4xl mx-auto">
            Complete comparison based on features, pricing, results, and student success. 
            See why 127K+ students choose IImagined.ai over {{COMPETITOR_DISPLAY}}.
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-zinc-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              
              {/* IImagined.ai Column */}
              <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-2xl p-8 border border-blue-500/20">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-blue-400 mb-2">IImagined.ai</h2>
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="text-2xl font-bold">{comparisonData.iimagined.rating}</span>
                    <span className="text-zinc-400">({comparisonData.iimagined.students} students)</span>
                  </div>
                  <div className="flex items-center justify-center gap-4">
                    <span className="text-3xl font-bold text-green-400">{comparisonData.iimagined.price}</span>
                    <span className="text-xl text-zinc-400 line-through">{comparisonData.iimagined.originalPrice}</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-bold mb-4">Features:</h3>
                  {comparisonData.iimagined.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                      <span className="text-zinc-200">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Competitor Column */}
              <div className="bg-zinc-800/50 rounded-2xl p-8 border border-zinc-700">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-zinc-300 mb-2">{comparisonData.competitor.name}</h2>
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="text-2xl font-bold">{comparisonData.competitor.rating}</span>
                    <span className="text-zinc-400">({comparisonData.competitor.students})</span>
                  </div>
                  <div className="text-3xl font-bold text-zinc-300">{comparisonData.competitor.price}</div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-bold mb-4">Features:</h3>
                  {comparisonData.competitor.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                      <span className="text-zinc-400">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why IImagined.ai Wins */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12">Why 127K+ Students Choose IImagined.ai</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-zinc-900/50 p-6 rounded-xl">
                <Users className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Proven Results</h3>
                <p className="text-zinc-300">97% success rate with 127K+ students achieving real results</p>
              </div>
              
              <div className="bg-zinc-900/50 p-6 rounded-xl">
                <DollarSign className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Better ROI</h3>
                <p className="text-zinc-300">Students average $25K+ monthly revenue within 6 months</p>
              </div>
              
              <div className="bg-zinc-900/50 p-6 rounded-xl">
                <CheckCircle className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Complete System</h3>
                <p className="text-zinc-300">All-in-one platform with lifetime access and updates</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Join 127K+ Successful Students?</h2>
          <p className="text-xl text-zinc-300 mb-8 max-w-2xl mx-auto">
            Don't settle for mediocre results. Get the proven system that actually works.
          </p>
          <Link 
            href="/instagram-ignited"
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-4 px-8 rounded-xl text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
          >
            Get Started with IImagined.ai - 73% OFF
          </Link>
        </div>
      </section>
    </div>
  )
}`

    let generatedCount = 0
    
    for (const competitor of competitors.slice(0, 5)) { // Start with 5 competitors
      const componentName = `${competitor.charAt(0).toUpperCase() + competitor.slice(1)}VsIImaginedPage`
      const competitorDisplay = competitor.charAt(0).toUpperCase() + competitor.slice(1)
      
      // Generate competitor data
      const competitorData = this.generateCompetitorData(competitor)
      
      // Generate metadata
      const metadata = generateOptimizedMeta({
        page: `${competitorDisplay} vs IImagined.ai`,
        variant: 'proof',
        stats: { students: 127000, revenue: '$2.7M', successRate: 97 },
        customTitle: `${competitorDisplay} vs IImagined.ai: Which is Better? [2025 Comparison]`,
        customDescription: `Complete ${competitorDisplay} vs IImagined.ai comparison. See why 127K+ students choose IImagined.ai for guaranteed results and better ROI.`
      })
      
      // Replace template variables
      const pageContent = comparisonTemplate
        .replace(/{{METADATA}}/g, JSON.stringify(metadata, null, 2))
        .replace(/{{COMPONENT_NAME}}/g, componentName)
        .replace(/{{COMPETITOR_DISPLAY}}/g, competitorDisplay)
        .replace(/{{COMPETITOR_RATING}}/g, competitorData.rating.toString())
        .replace(/{{COMPETITOR_STUDENTS}}/g, competitorData.students)
        .replace(/{{COMPETITOR_PRICE}}/g, competitorData.price)
        .replace(/{{COMPETITOR_FEATURES}}/g, JSON.stringify(competitorData.features))
        .replace(/{{COMPETITOR_PROS}}/g, JSON.stringify(competitorData.pros))
        .replace(/{{COMPETITOR_CONS}}/g, JSON.stringify(competitorData.cons))
        .replace(/{{COMPETITOR_BEST_FOR}}/g, competitorData.bestFor)
      
      // Create directory and file
      const dirPath = path.join(process.cwd(), 'src', 'app', `${competitor}-vs-iimagined`)
      await fs.mkdir(dirPath, { recursive: true })
      
      const filePath = path.join(dirPath, 'page.tsx')
      await fs.writeFile(filePath, pageContent, 'utf8')
      
      generatedCount++
      console.log(` Generated comparison: ${competitor}-vs-iimagined`)
    }
    
    console.log(`<� Generated ${generatedCount} comparison pages`)
  }

  // Generate "Best X for Y" pages
  static async generateBestPages(): Promise<void> {
    const categories = [
      'instagram-growth-course', 'ai-automation-course', 'digital-products-course',
      'social-media-marketing-course', 'content-creation-course', 'passive-income-course'
    ]

    const audiences = [
      'beginners', 'entrepreneurs', 'small-business', 'influencers',
      'content-creators', 'marketers', 'students', 'professionals'
    ]

    const bestTemplate = `import { Metadata } from 'next'
import Link from 'next/link'
import { Star, Users, CheckCircle, Award } from 'lucide-react'

export const metadata: Metadata = {{METADATA}}

export default function {{COMPONENT_NAME}}() {
  const courses = [
    {
      name: 'IImagined.ai - {{CATEGORY_DISPLAY}}',
      rating: 4.97,
      students: '127K+',
      price: '$147',
      originalPrice: '$297',
      badge: '#1 Choice',
      features: {{FEATURES}},
      testimonial: {{TESTIMONIAL}},
      cta: '/{{COURSE_SLUG}}'
    }
    // Add 4-5 other courses for comparison
  ]

  return (
    <div className="min-h-screen bg-dark text-white">
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
            Best {{CATEGORY_DISPLAY}} for {{AUDIENCE_DISPLAY}} [2025]
          </h1>
          <p className="text-xl text-zinc-300 text-center mb-12 max-w-4xl mx-auto">
            We've tested and reviewed the top {{CATEGORY_DISPLAY}}s for {{AUDIENCE_DISPLAY}}. 
            Here are our top picks based on results, value, and student success.
          </p>
          
          <div className="space-y-8">
            {courses.map((course, index) => (
              <div key={index} className="bg-zinc-900/50 rounded-2xl p-8 border border-zinc-800">
                {/* Course card content */}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}`

    let generatedCount = 0
    
    for (const category of categories.slice(0, 3)) {
      for (const audience of audiences.slice(0, 3)) {
        const slug = `best-${category}-for-${audience}`
        const componentName = slug
          .split('-')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join('') + 'Page'
        
        const categoryDisplay = category.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
        const audienceDisplay = audience.replace(/-/g, ' ')
        
        // Generate metadata
        const metadata = generateOptimizedMeta({
          page: `Best ${categoryDisplay} for ${audienceDisplay}`,
          variant: 'result',
          customTitle: `Best ${categoryDisplay} for ${audienceDisplay} [2025 Updated]`,
          customDescription: `Find the best ${categoryDisplay} for ${audienceDisplay}. Compare top courses, pricing, and results. IImagined.ai rated #1 by 127K+ students.`
        })
        
        // Replace template variables
        const pageContent = bestTemplate
          .replace(/{{METADATA}}/g, JSON.stringify(metadata, null, 2))
          .replace(/{{COMPONENT_NAME}}/g, componentName)
          .replace(/{{CATEGORY_DISPLAY}}/g, categoryDisplay)
          .replace(/{{AUDIENCE_DISPLAY}}/g, audienceDisplay)
          .replace(/{{FEATURES}}/g, JSON.stringify(this.getCategoryFeatures(category)))
          .replace(/{{TESTIMONIAL}}/g, JSON.stringify(this.getAudienceTestimonial(audience)))
          .replace(/{{COURSE_SLUG}}/g, this.getCategorySlug(category))
        
        // Create directory and file
        const dirPath = path.join(process.cwd(), 'src', 'app', slug)
        await fs.mkdir(dirPath, { recursive: true })
        
        const filePath = path.join(dirPath, 'page.tsx')
        await fs.writeFile(filePath, pageContent, 'utf8')
        
        generatedCount++
        console.log(` Generated best page: ${slug}`)
        
        // Limit to prevent overload
        if (generatedCount >= 9) break
      }
      if (generatedCount >= 9) break
    }
    
    console.log(`<� Generated ${generatedCount} "best" pages`)
  }

  // Generate tutorial and guide pages
  static async generateTutorialPages(): Promise<void> {
    const tutorialTopics = [
      'instagram-algorithm-2025',
      'ai-automation-beginners-guide',
      'digital-products-step-by-step',
      'social-media-growth-hacks',
      'content-creation-with-ai',
      'passive-income-strategies'
    ]

    const tutorialTemplate = `import { Metadata } from 'next'
import { generateOptimizedMeta } from '@/utils/metaGenerator'
import FAQSchema from '@/components/seo/FAQSchema'

export const metadata: Metadata = {{METADATA}}

export default function {{COMPONENT_NAME}}() {
  const tableOfContents = {{TABLE_OF_CONTENTS}}
  const faqs = {{FAQS}}

  return (
    <div className="min-h-screen bg-dark text-white">
      <FAQSchema faqs={faqs} displayType="accordion" />
      
      <article className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">{{TITLE}}</h1>
          <p className="text-xl text-zinc-300 mb-8">{{DESCRIPTION}}</p>
          
          {/* Table of Contents */}
          <div className="bg-zinc-900/50 rounded-xl p-6 mb-12">
            <h2 className="text-2xl font-bold mb-4">Table of Contents</h2>
            <ul className="space-y-2">
              {tableOfContents.map((item, index) => (
                <li key={index}>
                  <a href={\`#section-\${index + 1}\`} className="text-blue-400 hover:text-blue-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Content sections would go here */}
          {{CONTENT_SECTIONS}}
          
          {/* FAQ Section */}
          <section className="mt-16">
            <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
            <FAQSchema faqs={faqs} displayType="accordion" />
          </section>
          
          {/* CTA Section */}
          <section className="mt-16 text-center bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-4">Ready to Master {{TOPIC_DISPLAY}}?</h2>
            <p className="text-xl text-zinc-300 mb-6">
              Join 127K+ students who have transformed their results with our proven system.
            </p>
            <a 
              href="/{{CTA_LINK}}"
              className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-4 px-8 rounded-xl text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
            >
              Get Started Today - 73% OFF
            </a>
          </section>
        </div>
      </article>
    </div>
  )
}`

    let generatedCount = 0

    for (const topic of tutorialTopics) {
      const componentName = topic
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join('') + 'Page'
      
      const topicDisplay = topic.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
      
      // Generate metadata
      const metadata = generateOptimizedMeta({
        page: topicDisplay,
        variant: 'secret',
        customTitle: `${topicDisplay}: Complete Guide [2025]`,
        customDescription: `Master ${topicDisplay} with this comprehensive guide. Step-by-step tutorials, expert tips, and proven strategies for real results.`
      })
      
      // Generate content data
      const contentData = this.generateTutorialContent(topic)
      
      // Replace template variables
      const pageContent = tutorialTemplate
        .replace(/{{METADATA}}/g, JSON.stringify(metadata, null, 2))
        .replace(/{{COMPONENT_NAME}}/g, componentName)
        .replace(/{{TITLE}}/g, contentData.title)
        .replace(/{{DESCRIPTION}}/g, contentData.description)
        .replace(/{{TABLE_OF_CONTENTS}}/g, JSON.stringify(contentData.tableOfContents))
        .replace(/{{FAQS}}/g, JSON.stringify(contentData.faqs))
        .replace(/{{CONTENT_SECTIONS}}/g, contentData.contentSections)
        .replace(/{{TOPIC_DISPLAY}}/g, topicDisplay)
        .replace(/{{CTA_LINK}}/g, contentData.ctaLink)
      
      // Create directory and file
      const dirPath = path.join(process.cwd(), 'src', 'app', 'blog', topic)
      await fs.mkdir(dirPath, { recursive: true })
      
      const filePath = path.join(dirPath, 'page.tsx')
      await fs.writeFile(filePath, pageContent, 'utf8')
      
      generatedCount++
      console.log(` Generated tutorial: ${topic}`)
    }
    
    console.log(`<� Generated ${generatedCount} tutorial pages`)
  }

  // Helper methods
  private static generateCompetitorData(competitor: string) {
    const competitorDatabase = {
      teachable: {
        rating: 4.2,
        students: '50K+',
        price: 'Varies ($29-$299)',
        features: ['Basic course hosting', 'Limited customization', 'No marketing tools', 'Basic analytics'],
        pros: ['Easy to use', 'Quick setup'],
        cons: ['Limited features', 'High transaction fees', 'No marketing automation', 'Generic templates'],
        bestFor: 'Basic course hosting without advanced features'
      },
      udemy: {
        rating: 3.8,
        students: 'Millions',
        price: '$10-$200',
        features: ['Course marketplace', 'Basic video hosting', 'Limited support', 'No direct student access'],
        pros: ['Large marketplace', 'Low cost'],
        cons: ['No control over pricing', 'Students not yours', 'Race to bottom pricing', 'No community features'],
        bestFor: 'Selling individual courses in competitive marketplace'
      }
      // Add more competitors...
    }
    
    return competitorDatabase[competitor as keyof typeof competitorDatabase] || {
      rating: 3.5,
      students: '10K+',
      price: '$99-$299',
      features: ['Basic features', 'Limited support'],
      pros: ['Available option'],
      cons: ['Limited compared to IImagined.ai'],
      bestFor: 'Basic needs'
    }
  }

  private static getCategoryFeatures(category: string): string[] {
    const featureMap = {
      'instagram-growth-course': [
        'Complete Instagram Growth System',
        'Algorithm Mastery Training',
        'Viral Content Templates',
        'Engagement Strategies',
        'Monetization Methods'
      ],
      'ai-automation-course': [
        'AI Workflow Templates',
        'Automation Setup Guides',
        'Tool Integration Training',
        'Business Applications',
        'Revenue Generation'
      ]
      // Add more categories...
    }
    
    return featureMap[category as keyof typeof featureMap] || ['Comprehensive training', 'Expert guidance', 'Proven results']
  }

  private static getAudienceTestimonial(audience: string): object {
    const testimonialMap = {
      'beginners': {
        name: 'Sarah M.',
        text: 'Perfect for beginners! Went from zero knowledge to $10K/month in 4 months.',
        result: '$10K/month in 4 months'
      },
      'entrepreneurs': {
        name: 'Mike C.',
        text: 'Scaled my business 10x using these strategies. ROI was incredible.',
        result: '10x business growth'
      }
      // Add more audiences...
    }
    
    return testimonialMap[audience as keyof typeof testimonialMap] || {
      name: 'Student',
      text: 'Amazing results with this course!',
      result: 'Great success'
    }
  }

  private static getCategorySlug(category: string): string {
    const slugMap = {
      'instagram-growth-course': 'instagram-ignited',
      'ai-automation-course': 'n8n-ai-automations',
      'digital-products-course': 'digital-products'
    }
    
    return slugMap[category as keyof typeof slugMap] || 'courses'
  }

  private static generateTutorialContent(topic: string) {
    const contentMap = {
      'instagram-algorithm-2025': {
        title: 'Instagram Algorithm 2025: Complete Mastery Guide',
        description: 'Master the Instagram algorithm in 2025 with insider strategies that drive explosive growth and engagement.',
        tableOfContents: [
          'How the Instagram Algorithm Really Works',
          'The 30-Minute Window Strategy',
          'Content Format Prioritization',
          'Engagement Velocity Hacking',
          'Advanced Algorithm Secrets'
        ],
        contentSections: '/* Content sections would be generated here */',
        faqs: [
          {
            question: 'How does the Instagram algorithm work in 2025?',
            answer: 'The Instagram algorithm prioritizes content based on interest prediction, relationship strength, timeliness, and performance history.'
          },
          {
            question: 'What is the golden 30-minute window?',
            answer: 'The first 30 minutes after posting is when the algorithm determines your content\'s distribution potential based on engagement velocity.'
          }
        ],
        ctaLink: 'instagram-ignited'
      }
      // Add more topics...
    }
    
    return contentMap[topic as keyof typeof contentMap] || {
      title: 'Complete Guide',
      description: 'Master this topic with proven strategies.',
      tableOfContents: ['Introduction', 'Fundamentals', 'Advanced Strategies'],
      contentSections: '/* Content would go here */',
      faqs: [],
      ctaLink: 'courses'
    }
  }

  // Execute all content generation
  static async generateAllContent(): Promise<void> {
    console.log('=� ORYANA: Starting mass content generation...')
    
    await this.generateComparisonPages()
    await this.generateBestPages()
    await this.generateTutorialPages()
    
    console.log('<� ORYANA: Mass content generation complete!')
  }
}

// Execute if run directly
if (require.main === module) {
  MassContentGenerator.generateAllContent()
    .then(() => {
      console.log(' All content generated successfully!')
      process.exit(0)
    })
    .catch((error) => {
      console.error('L Error generating content:', error)
      process.exit(1)
    })
}