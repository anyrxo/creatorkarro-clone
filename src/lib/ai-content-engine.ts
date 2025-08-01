// AI Content Variation Engine - Intelligent Content Generation & Spinning
export interface ContentVariation {
  original: string
  variations: string[]
  readabilityScore: number
  uniquenessScore: number
  seoScore: number
}

export interface ContentTemplate {
  id: string
  name: string
  category: string
  template: string
  variables: string[]
  variations: Record<string, string[]>
}

export interface AIContentOptions {
  variations: number
  readabilityTarget: 'simple' | 'medium' | 'advanced'
  seoFocus: boolean
  personalityTone: 'professional' | 'casual' | 'enthusiastic' | 'authoritative'
  industryContext: string
}

// Advanced synonym database for content spinning
export const CONTENT_SYNONYMS = {
  // Business terms
  'business': ['company', 'enterprise', 'venture', 'organization', 'firm', 'operation'],
  'entrepreneur': ['business owner', 'founder', 'creator', 'innovator', 'visionary', 'professional'],
  'strategy': ['approach', 'method', 'technique', 'system', 'plan', 'blueprint'],
  'success': ['achievement', 'accomplishment', 'triumph', 'victory', 'breakthrough', 'result'],
  'profitable': ['lucrative', 'rewarding', 'successful', 'beneficial', 'advantageous', 'worthwhile'],
  'effective': ['powerful', 'successful', 'efficient', 'productive', 'impactful', 'proven'],
  
  // Marketing terms
  'marketing': ['promotion', 'advertising', 'outreach', 'communication', 'branding', 'publicity'],
  'growth': ['expansion', 'development', 'progress', 'advancement', 'improvement', 'increase'],
  'audience': ['customers', 'followers', 'users', 'community', 'subscribers', 'prospects'],
  'content': ['material', 'information', 'posts', 'articles', 'resources', 'media'],
  'engagement': ['interaction', 'participation', 'involvement', 'connection', 'response', 'activity'],
  'conversion': ['transformation', 'change', 'result', 'outcome', 'success', 'achievement'],
  
  // Technology terms
  'automation': ['mechanization', 'systematization', 'streamlining', 'optimization', 'digitization', 'enhancement'],
  'technology': ['tech', 'digital tools', 'software', 'systems', 'platforms', 'solutions'],
  'platform': ['system', 'network', 'service', 'tool', 'application', 'environment'],
  'optimize': ['improve', 'enhance', 'refine', 'perfect', 'maximize', 'streamline'],
  'integrate': ['combine', 'merge', 'connect', 'unify', 'blend', 'coordinate'],
  'implement': ['execute', 'deploy', 'apply', 'install', 'establish', 'activate'],
  
  // Action words
  'learn': ['master', 'understand', 'discover', 'explore', 'study', 'acquire'],
  'create': ['build', 'develop', 'generate', 'produce', 'design', 'craft'],
  'transform': ['change', 'convert', 'modify', 'revolutionize', 'upgrade', 'improve'],
  'achieve': ['accomplish', 'attain', 'reach', 'secure', 'obtain', 'realize'],
  'generate': ['create', 'produce', 'develop', 'build', 'establish', 'form'],
  'increase': ['boost', 'enhance', 'amplify', 'expand', 'grow', 'multiply'],
  
  // Quality descriptors
  'best': ['top', 'leading', 'premier', 'finest', 'superior', 'exceptional'],
  'proven': ['tested', 'verified', 'validated', 'established', 'confirmed', 'reliable'],
  'advanced': ['sophisticated', 'cutting-edge', 'premium', 'professional', 'expert', 'elite'],
  'complete': ['comprehensive', 'thorough', 'full', 'total', 'entire', 'all-inclusive'],
  'ultimate': ['final', 'definitive', 'supreme', 'perfect', 'ideal', 'absolute'],
  'powerful': ['strong', 'effective', 'potent', 'impactful', 'robust', 'dynamic'],
  
  // Result words
  'results': ['outcomes', 'achievements', 'success', 'performance', 'progress', 'benefits'],
  'income': ['revenue', 'earnings', 'profit', 'money', 'cash', 'returns'],
  'traffic': ['visitors', 'users', 'audience', 'views', 'engagement', 'activity'],
  'leads': ['prospects', 'opportunities', 'contacts', 'potential customers', 'inquiries', 'connections'],
  'sales': ['revenue', 'transactions', 'purchases', 'conversions', 'deals', 'orders']
}

// Content structure templates
export const CONTENT_TEMPLATES: ContentTemplate[] = [
  {
    id: 'hero-headline',
    name: 'Hero Headlines',
    category: 'headlines',
    template: '{adjective} {service} for {audience} | {benefit}',
    variables: ['adjective', 'service', 'audience', 'benefit'],
    variations: {
      adjective: ['Revolutionary', 'Proven', 'Advanced', 'Complete', 'Ultimate', 'Professional'],
      service: ['Course', 'Training', 'System', 'Blueprint', 'Masterclass', 'Program'],
      audience: ['Entrepreneurs', 'Business Owners', 'Creators', 'Professionals', 'Beginners', 'Experts'],
      benefit: ['Generate Real Results', 'Transform Your Business', 'Maximize Your Success', 'Achieve Your Goals']
    }
  },
  {
    id: 'value-proposition',
    name: 'Value Propositions',
    category: 'marketing',
    template: 'Join {number}+ {audience} who have {achievement} using our {method}',
    variables: ['number', 'audience', 'achievement', 'method'],
    variations: {
      number: ['127K', '100K', '150K', '200K', 'thousands of', 'millions of'],
      audience: ['entrepreneurs', 'business owners', 'creators', 'professionals', 'students', 'founders'],
      achievement: ['transformed their businesses', 'generated substantial income', 'achieved remarkable success', 'built profitable enterprises'],
      method: ['proven strategies', 'battle-tested techniques', 'revolutionary system', 'comprehensive approach']
    }
  },
  {
    id: 'problem-solution',
    name: 'Problem-Solution Statements',
    category: 'copywriting',
    template: 'Struggling with {problem}? Our {solution} helps you {outcome} in {timeframe}',
    variables: ['problem', 'solution', 'outcome', 'timeframe'],
    variations: {
      problem: ['low engagement', 'poor conversions', 'limited growth', 'ineffective marketing', 'lack of results'],
      solution: ['proven system', 'comprehensive training', 'expert guidance', 'step-by-step blueprint', 'advanced strategies'],
      outcome: ['achieve breakthrough results', 'transform your performance', 'generate consistent income', 'build a thriving business'],
      timeframe: ['30 days', '90 days', '6 months', 'weeks not months', 'record time']
    }
  },
  {
    id: 'social-proof',
    name: 'Social Proof Statements',
    category: 'testimonials',
    template: '"{quote}" - {name}, {title} who {achievement}',
    variables: ['quote', 'name', 'title', 'achievement'],
    variations: {
      quote: [
        'This system completely transformed my business',
        'I went from struggling to thriving in just months',
        'The results exceeded all my expectations',
        'Finally, a method that actually works',
        'My income increased dramatically after implementing this'
      ],
      name: ['Sarah Johnson', 'Mike Chen', 'Emily Rodriguez', 'David Kim', 'Lisa Thompson', 'Alex Morgan'],
      title: ['Entrepreneur', 'Business Owner', 'Digital Marketer', 'Content Creator', 'Consultant', 'Founder'],
      achievement: ['increased revenue by 400%', 'built a 6-figure business', 'gained 50K followers', 'achieved financial freedom', 'quit their day job']
    }
  },
  {
    id: 'benefit-list',
    name: 'Benefit Lists',
    category: 'features',
    template: '✅ {benefit_type}: {specific_benefit}',
    variables: ['benefit_type', 'specific_benefit'],
    variations: {
      benefit_type: ['Proven Results', 'Expert Training', 'Comprehensive Support', 'Advanced Strategies', 'Real Implementation'],
      specific_benefit: [
        'See measurable improvements within 14 days',
        'Access to exclusive insider techniques',
        '24/7 support from our expert team',
        'Step-by-step implementation guides',
        'Live weekly coaching sessions'
      ]
    }
  }
]

export class AIContentEngine {
  private synonyms: Record<string, string[]>
  private templates: ContentTemplate[]
  
  constructor() {
    this.synonyms = CONTENT_SYNONYMS
    this.templates = CONTENT_TEMPLATES
  }
  
  // Generate content variations using advanced spinning
  generateVariations(
    originalContent: string, 
    options: AIContentOptions = {
      variations: 5,
      readabilityTarget: 'medium',
      seoFocus: true,
      personalityTone: 'professional',
      industryContext: 'digital marketing'
    }
  ): ContentVariation {
    const variations: string[] = []
    
    for (let i = 0; i < options.variations; i++) {
      let variation = originalContent
      
      // Apply synonym replacement
      variation = this.applySynonymReplacement(variation, i)
      
      // Apply sentence restructuring
      variation = this.restructureSentences(variation)
      
      // Apply tone adjustment
      variation = this.adjustTone(variation, options.personalityTone)
      
      // Apply readability optimization
      variation = this.optimizeReadability(variation, options.readabilityTarget)
      
      // Apply SEO optimization if requested
      if (options.seoFocus) {
        variation = this.applySEOOptimization(variation, options.industryContext)
      }
      
      variations.push(variation)
    }
    
    return {
      original: originalContent,
      variations,
      readabilityScore: this.calculateReadabilityScore(variations[0]),
      uniquenessScore: this.calculateUniquenessScore(originalContent, variations),
      seoScore: this.calculateSEOScore(variations[0])
    }
  }
  
  // Advanced synonym replacement with context awareness
  private applySynonymReplacement(content: string, variationIndex: number): string {
    let result = content
    
    Object.entries(this.synonyms).forEach(([original, synonyms]) => {
      const regex = new RegExp(`\\b${original}\\b`, 'gi')
      const replacementIndex = variationIndex % synonyms.length
      const replacement = synonyms[replacementIndex]
      
      result = result.replace(regex, (match) => {
        // Preserve case
        if (match[0] === match[0].toUpperCase()) {
          return replacement.charAt(0).toUpperCase() + replacement.slice(1)
        }
        return replacement
      })
    })
    
    return result
  }
  
  // Restructure sentences for variation
  private restructureSentences(content: string): string {
    const sentences = content.split(/[.!?]+/).filter(s => s.trim().length > 0)
    
    return sentences.map(sentence => {
      const trimmed = sentence.trim()
      
      // Simple sentence restructuring patterns
      if (trimmed.includes(' and ')) {
        // Split compound sentences occasionally
        if (Math.random() > 0.7) {
          return trimmed.replace(' and ', '. Additionally, ')
        }
      }
      
      if (trimmed.startsWith('Our ')) {
        // Vary sentence starters
        const alternatives = ['This ', 'The ', 'My ']
        return alternatives[Math.floor(Math.random() * alternatives.length)] + trimmed.slice(4)
      }
      
      return trimmed
    }).join('. ') + '.'
  }
  
  // Adjust content tone
  private adjustTone(content: string, tone: string): string {
    const toneModifiers = {
      professional: {
        replace: [
          ['awesome', 'excellent'],
          ['amazing', 'remarkable'],
          ['super', 'highly'],
          ['tons of', 'numerous'],
          ['lots of', 'many']
        ]
      },
      casual: {
        replace: [
          ['excellent', 'awesome'],
          ['remarkable', 'amazing'],
          ['highly', 'super'],
          ['numerous', 'tons of'],
          ['many', 'lots of']
        ]
      },
      enthusiastic: {
        add: ['incredible', 'fantastic', 'revolutionary', 'game-changing'],
        replace: [
          ['good', 'incredible'],
          ['nice', 'fantastic'],
          ['effective', 'game-changing']
        ]
      },
      authoritative: {
        replace: [
          ['I think', 'Research shows'],
          ['maybe', 'likely'],
          ['probably', 'typically'],
          ['might', 'will']
        ]
      }
    }
    
    const modifier = toneModifiers[tone as keyof typeof toneModifiers]
    if (!modifier) return content
    
    let result = content
    
    if (modifier.replace) {
      modifier.replace.forEach(([from, to]) => {
        const regex = new RegExp(`\\b${from}\\b`, 'gi')
        result = result.replace(regex, to)
      })
    }
    
    return result
  }
  
  // Optimize for readability
  private optimizeReadability(content: string, target: string): string {
    const sentences = content.split(/[.!?]+/).filter(s => s.trim().length > 0)
    
    return sentences.map(sentence => {
      const words = sentence.trim().split(' ')
      
      if (target === 'simple' && words.length > 15) {
        // Split long sentences for simple readability
        const midpoint = Math.floor(words.length / 2)
        const firstHalf = words.slice(0, midpoint).join(' ')
        const secondHalf = words.slice(midpoint).join(' ')
        return `${firstHalf}. ${secondHalf}`
      }
      
      if (target === 'advanced' && words.length < 8) {
        // Add complexity for advanced readers
        const enhancers = ['Furthermore,', 'Additionally,', 'Moreover,', 'Specifically,']
        const enhancer = enhancers[Math.floor(Math.random() * enhancers.length)]
        return `${enhancer} ${sentence.trim()}`
      }
      
      return sentence.trim()
    }).join('. ') + '.'
  }
  
  // Apply SEO optimization
  private applySEOOptimization(content: string, industryContext: string): string {
    const seoKeywords = {
      'digital marketing': ['digital marketing', 'online marketing', 'digital strategy', 'marketing automation'],
      'ai automation': ['ai automation', 'artificial intelligence', 'machine learning', 'automated systems'],
      'instagram growth': ['instagram growth', 'social media marketing', 'instagram marketing', 'social media strategy'],
      'business': ['business growth', 'entrepreneurship', 'business strategy', 'revenue generation']
    }
    
    const keywords = seoKeywords[industryContext as keyof typeof seoKeywords] || seoKeywords.business
    
    // Naturally incorporate keywords if they're missing
    let result = content
    const missingKeywords = keywords.filter(keyword => 
      !result.toLowerCase().includes(keyword.toLowerCase())
    )
    
    if (missingKeywords.length > 0) {
      const keyword = missingKeywords[0]
      // Add keyword naturally to the content
      result = result.replace(/\. ([A-Z])/, `. This ${keyword} approach $1`)
    }
    
    return result
  }
  
  // Generate template-based content
  generateFromTemplate(templateId: string, customVariables?: Record<string, string>): string[] {
    const template = this.templates.find(t => t.id === templateId)
    if (!template) throw new Error(`Template ${templateId} not found`)
    
    const variations: string[] = []
    const maxVariations = 10
    
    for (let i = 0; i < maxVariations; i++) {
      let content = template.template
      
      template.variables.forEach(variable => {
        const placeholder = `{${variable}}`
        let replacement = ''
        
        if (customVariables && customVariables[variable]) {
          replacement = customVariables[variable]
        } else if (template.variations[variable]) {
          const options = template.variations[variable]
          replacement = options[i % options.length]
        }
        
        content = content.replace(new RegExp(placeholder, 'g'), replacement)
      })
      
      variations.push(content)
    }
    
    return variations
  }
  
  // Generate blog post variations
  generateBlogPostVariations(topic: string, length: 'short' | 'medium' | 'long' = 'medium'): string[] {
    const structures = {
      short: [
        'Introduction Hook',
        'Main Point 1',
        'Main Point 2', 
        'Conclusion with CTA'
      ],
      medium: [
        'Compelling Introduction',
        'Problem Identification',
        'Solution Overview',
        'Step 1: First Action',
        'Step 2: Implementation',
        'Step 3: Optimization',
        'Results and Benefits',
        'Call to Action'
      ],
      long: [
        'Hook and Context Setting',
        'Problem Deep Dive',
        'Current State Analysis',
        'Solution Introduction',
        'Method 1: Detailed Explanation',
        'Method 2: Advanced Techniques',
        'Method 3: Pro Strategies',
        'Case Study Example',
        'Common Mistakes to Avoid',
        'Implementation Timeline',
        'Measuring Success',
        'Final Recommendations',
        'Strong Call to Action'
      ]
    }
    
    const structure = structures[length]
    const variations: string[] = []
    
    for (let i = 0; i < 3; i++) {
      const sections = structure.map(section => {
        return this.generateSectionContent(section, topic, i)
      })
      
      variations.push(sections.join('\n\n'))
    }
    
    return variations
  }
  
  // Generate content for specific blog sections
  private generateSectionContent(sectionType: string, topic: string, variation: number): string {
    const sectionTemplates = {
      'Introduction Hook': [
        `Are you struggling with ${topic}? You're not alone.`,
        `What if I told you that ${topic} could be easier than you think?`,
        `The biggest mistake people make with ${topic} is thinking it's complicated.`
      ],
      'Problem Identification': [
        `Many people face challenges with ${topic} because they lack the right strategy.`,
        `The main issue with ${topic} is that most approaches are outdated.`,
        `Traditional methods for ${topic} simply don't work in today's landscape.`
      ],
      'Solution Overview': [
        `Our approach to ${topic} is different. Here's why it works.`,
        `The solution lies in understanding the fundamentals of ${topic}.`,
        `We've developed a proven system for ${topic} that delivers results.`
      ],
      'Call to Action': [
        `Ready to master ${topic}? Get started today.`,
        `Don't let ${topic} hold you back any longer. Take action now.`,
        `Transform your approach to ${topic} with our proven system.`
      ]
    }
    
    const templates = sectionTemplates[sectionType as keyof typeof sectionTemplates]
    if (!templates) return `Content for ${sectionType} about ${topic}.`
    
    return templates[variation % templates.length]
  }
  
  // Calculate readability score (simplified Flesch Reading Ease)
  private calculateReadabilityScore(content: string): number {
    const sentences = content.split(/[.!?]+/).filter(s => s.trim().length > 0).length
    const words = content.split(/\s+/).length
    const syllables = this.countSyllables(content)
    
    if (sentences === 0 || words === 0) return 0
    
    const averageWordsPerSentence = words / sentences
    const averageSyllablesPerWord = syllables / words
    
    const score = 206.835 - (1.015 * averageWordsPerSentence) - (84.6 * averageSyllablesPerWord)
    return Math.max(0, Math.min(100, Math.round(score)))
  }
  
  // Count syllables in text (approximation)
  private countSyllables(text: string): number {
    const words = text.split(/\s+/)
    let totalSyllables = 0
    
    words.forEach(word => {
      const cleanWord = word.toLowerCase().replace(/[^a-z]/g, '')
      if (cleanWord.length === 0) return
      
      // Simple syllable counting heuristic
      let syllables = cleanWord.match(/[aeiouy]+/g)?.length || 1
      if (cleanWord.endsWith('e')) syllables--
      if (syllables < 1) syllables = 1
      
      totalSyllables += syllables
    })
    
    return totalSyllables
  }
  
  // Calculate uniqueness score between original and variations
  private calculateUniquenessScore(original: string, variations: string[]): number {
    if (variations.length === 0) return 0
    
    const originalWords = new Set(original.toLowerCase().split(/\s+/))
    let totalUniqueness = 0
    
    variations.forEach(variation => {
      const variationWords = new Set(variation.toLowerCase().split(/\s+/))
      const intersection = new Set([...originalWords].filter(x => variationWords.has(x)))
      const union = new Set([...originalWords, ...variationWords])
      
      const similarity = intersection.size / union.size
      const uniqueness = (1 - similarity) * 100
      totalUniqueness += uniqueness
    })
    
    return Math.round(totalUniqueness / variations.length)
  }
  
  // Calculate SEO score based on keyword density and structure
  private calculateSEOScore(content: string): number {
    let score = 0
    
    // Check for proper headings structure (simulated)
    if (content.includes('Introduction') || content.includes('Overview')) score += 20
    if (content.includes('Benefits') || content.includes('Results')) score += 20
    if (content.includes('Call to Action') || content.includes('Get Started')) score += 20
    
    // Check content length
    const wordCount = content.split(/\s+/).length
    if (wordCount >= 300 && wordCount <= 2000) score += 20
    
    // Check for action words
    const actionWords = ['learn', 'discover', 'achieve', 'transform', 'generate', 'create']
    if (actionWords.some(word => content.toLowerCase().includes(word))) score += 20
    
    return score
  }
  
  // Bulk content generation for programmatic use
  generateBulkContent(
    baseContents: string[],
    variationsPerContent: number = 5
  ): Record<string, ContentVariation> {
    const results: Record<string, ContentVariation> = {}
    
    baseContents.forEach((content, index) => {
      const variations = this.generateVariations(content, {
        variations: variationsPerContent,
        readabilityTarget: 'medium',
        seoFocus: true,
        personalityTone: 'professional',
        industryContext: 'digital marketing'
      })
      
      results[`content_${index + 1}`] = variations
    })
    
    return results
  }
}

// Export singleton instance
export const aiContentEngine = new AIContentEngine()

// Content spinning utilities
export function spinContent(content: string, intensity: 'light' | 'medium' | 'heavy' = 'medium'): string {
  const engine = new AIContentEngine()
  const variationCount = { light: 1, medium: 3, heavy: 5 }[intensity]
  
  const result = engine.generateVariations(content, {
    variations: variationCount,
    readabilityTarget: 'medium',
    seoFocus: true,
    personalityTone: 'professional',
    industryContext: 'digital marketing'
  })
  
  return result.variations[0] || content
}

// Template-based content generation
export function generateTemplateContent(
  templateId: string, 
  variables: Record<string, string>,
  count: number = 5
): string[] {
  const engine = new AIContentEngine()
  return engine.generateFromTemplate(templateId, variables).slice(0, count)
}