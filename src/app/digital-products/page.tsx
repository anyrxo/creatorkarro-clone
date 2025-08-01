'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function DPAPage() {
  // Scroll animations for different sections
  const heroAnimation = useScrollAnimation({ threshold: 0.2 })
  const problemAnimation = useScrollAnimation({ threshold: 0.1 })
  const realityAnimation = useScrollAnimation({ threshold: 0.1 })
  const bundleAnimation = useScrollAnimation({ threshold: 0.1 })
  const coursesAnimation = useScrollAnimation({ threshold: 0.1 })
  const comparisonAnimation = useScrollAnimation({ threshold: 0.1 })
  const pathsAnimation = useScrollAnimation({ threshold: 0.1 })
  const whoForAnimation = useScrollAnimation({ threshold: 0.1 })
  const resultsAnimation = useScrollAnimation({ threshold: 0.1 })
  const expectAnimation = useScrollAnimation({ threshold: 0.1 })
  const bonusAnimation = useScrollAnimation({ threshold: 0.1 })
  const pricingAnimation = useScrollAnimation({ threshold: 0.2 })
  const testimonialsAnimation = useScrollAnimation({ threshold: 0.1 })
  const faqAnimation = useScrollAnimation({ threshold: 0.1 })
  const ctaAnimation = useScrollAnimation({ threshold: 0.3 })
  
  const courses = [
    {
      id: 'digital-products',
      title: 'Digital Products Mastery',
      subtitle: 'Build a $500K+ Digital Empire',
      badge: 'MOST POPULAR',
      badgeColor: 'bg-green-500',
      image: 'https://ext.same-assets.com/1161517358/1504420078.png',
      originalPrice: 497,
      salePrice: 197,
      features: [
        'Create bestselling eBooks, courses & templates',
        'Advanced pricing psychology for 10x conversions',
        'Zero-ad launch strategies that made $300K',
        'Complete sales funnel systems & automation',
        'Lifetime community access & weekly Q&As'
      ],
      results: '$500K+ in digital product sales',
      testimonial: '"Hit $25K/month in 5 months!" - Jake Chen',
      urgency: 'Price increases to $297 in 48 hours',
      forWho: 'Perfect for: Beginners to experts wanting to monetize knowledge'
    },
    {
      id: 'instagram-mastery',
      title: 'Instagram Mastery System',
      subtitle: 'Grow to 100K+ & Monetize Fast',
      badge: 'STAFF PICK',
      badgeColor: 'bg-purple-500',
      image: 'https://ext.same-assets.com/1161517358/3271701469.png',
      originalPrice: 397,
      salePrice: 147,
      features: [
        'Viral content formulas (500K+ views guaranteed)',
        'Algorithm hacks that 10x your reach',
        'Advanced monetization beyond brand deals',
        'DM automation for lead generation',
        'Story strategies that convert 40%+ followers'
      ],
      results: '2.3M followers gained by students',
      testimonial: '"45K followers in 6 months!" - Sarah Kim',
      urgency: 'Only 47 spots left at this price',
      forWho: 'Perfect for: Content creators wanting explosive growth'
    },
    {
      id: 'ai-influencers',
      title: 'AI Influencers Empire',
      subtitle: 'Create Virtual Influencers That Earn',
      badge: 'TRENDING',
      badgeColor: 'bg-blue-500',
      image: 'https://ext.same-assets.com/1161517358/2562102632.png',
      originalPrice: 597,
      salePrice: 247,
      features: [
        'Create photorealistic AI influencers from scratch',
        'Advanced prompting for consistent characters',
        'Monetization strategies earning $15K+/month',
        'Complete content automation systems',
        'Platform optimization for maximum reach'
      ],
      results: '$2M+ earned by AI influencer students',
      testimonial: '"$73K from my AI model in 3 months!" - Marcus Rivera',
      urgency: 'Technology evolving fast - secure your advantage now',
      forWho: 'Perfect for: Tech-savvy entrepreneurs seeking passive income'
    },
    {
      id: 'n8n-automation',
      title: 'N8N Automation Mastery',
      subtitle: 'Build Million-Dollar Workflows',
      badge: 'TECHNICAL',
      badgeColor: 'bg-orange-500',
      image: 'https://ext.same-assets.com/1161517358/1504420078.png',
      originalPrice: 297,
      salePrice: 97,
      features: [
        'No-code automation that saves 40+ hours/week',
        'Advanced workflows for business scaling',
        'Integration mastery (200+ apps connected)',
        'Error handling & optimization techniques',
        'Complete automation agency blueprint'
      ],
      results: '10,000+ hours saved by students',
      testimonial: '"Automated my entire business!" - David Park',
      urgency: 'Bonus automation templates expire in 24 hours',
      forWho: 'Perfect for: Business owners drowning in repetitive tasks'
    }
  ]

  const testimonials = [
    {
      name: "Jake Chen",
      role: "Digital Entrepreneur",
      avatar: "https://ext.same-assets.com/1161517358/1430260149.webp",
      content: "I bought the complete bundle and went from $0 to $12K/month in 8 months. The Digital Products course got me started, Instagram exploded my audience, and AI Influencers created passive income streams. Best investment I've ever made!",
      courses: "Complete Bundle"
    },
    {
      name: "Sarah Kim",
      role: "Content Creator → 7-Figure Business Owner",
      avatar: "https://ext.same-assets.com/1161517358/527605891.webp",
      content: "Started with Instagram Mastery, grew to 45K followers, then added Digital Products to monetize. Now I have 2 AI influencers generating $8K/month passive income. The synergy between courses is incredible!",
      courses: "Instagram + Digital Products + AI Influencers"
    },
    {
      name: "Marcus Rivera",
      role: "Automation Agency Owner",
      avatar: "https://ext.same-assets.com/1161517358/366375215.webp",
      content: "N8N course helped me build my automation agency, Digital Products taught me to package knowledge, and Instagram got me clients. Now I run everything with automated workflows earning $18K/month. Pure genius!",
      courses: "N8N + Digital Products + Instagram"
    },
    {
      name: "Emily Watson",
      role: "Former 9-5 → Full-Time Creator",
      avatar: "https://ext.same-assets.com/1161517358/3820475784.webp",
      content: "The bundle completely transformed my life. Quit my corporate job after 4 months when my digital products hit $8K/month. My AI influencer now has 75K followers and earns more than my old salary!",
      courses: "Complete Bundle"
    },
    {
      name: "David Park",
      role: "E-commerce → Multiple 7-Figures",
      avatar: "https://ext.same-assets.com/1161517358/3495288803.webp",
      content: "Used N8N to automate my entire business, Digital Products to create info products, and Instagram to build authority. Went from struggling e-com store to $425K/year across multiple income streams.",
      courses: "N8N + Digital Products + Instagram"
    },
    {
      name: "Lisa Chang",
      role: "Coach → Digital Empire Builder",
      avatar: "https://ext.same-assets.com/1161517358/1430260149.webp",
      content: "Started as a struggling coach making $3K/month. Applied all 4 systems and now run a digital empire: $15K/month in courses, 125K Instagram followers, and 2 AI influencers earning passively. Life-changing!",
      courses: "Complete Bundle"
    }
  ]

  const faqItems = [
    {
      question: "Which course should I start with if I'm a complete beginner?",
      answer: "Start with Digital Products Mastery - it's the foundation that teaches you to monetize your knowledge. Once profitable, add Instagram Mastery to build your audience, then AI Influencers for passive income. Many students see results within 30 days of starting Digital Products."
    },
    {
      question: "Can I buy multiple courses? Do they work together?",
      answer: "Absolutely! The courses are designed to synergize. The Complete Bundle saves you $191 and creates a complete business ecosystem. Students who buy multiple courses report 3-5x better results because they complement each other perfectly."
    },
    {
      question: "How quickly can I see results with multiple courses?",
      answer: "Timeline varies by path: Fast Cash Path (Digital Products → Instagram) = 30-60 days for first $5K. Technical Path (N8N → Digital Products) = 60-90 days for systematic income. Complete Bundle users average $10K+ within 90 days."
    },
    {
      question: "Is the bundle really worth it vs buying individually?",
      answer: "The bundle saves $191 plus includes exclusive bonuses worth $497+ only available to bundle buyers. More importantly, you get the complete system instead of pieces. 89% of our highest earners ($15K+/month) bought the complete bundle."
    },
    {
      question: "What if I buy one course and want to add others later?",
      answer: "You can upgrade anytime, but you'll pay the higher individual prices. Bundle buyers get locked-in pricing and exclusive bonuses that aren't available separately. Bundle price increases to $997 in 72 hours, so now is the best time."
    },
    {
      question: "Do I need technical skills for all courses?",
      answer: "No! Digital Products and Instagram require zero technical skills. AI Influencers uses simple tools with step-by-step guidance. N8N is no-code automation (drag & drop). Everything is designed for beginners but powerful enough for experts."
    }
  ]

  return (
    <div className="min-h-screen bg-dark">
      {/* Hero Section - The Complete Creator Arsenal */}
      <section className="section-spacing">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={heroAnimation.elementRef}
            className={`text-center max-w-6xl mx-auto scroll-fade-up ${heroAnimation.isVisible ? 'visible' : ''}`}
          >
            <div className="inline-block bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
              THE COMPLETE CREATOR ARSENAL
            </div>
            
            <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight">
              Build Your <span className="text-green-400">Million-Dollar</span> Creator Empire with <span className="text-blue-400">4 Proven Systems</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-4xl mx-auto">
              Stop buying random courses that leave you confused and broke. Get the complete ecosystem that's helped 10,000+ creators build <span className="text-green-300">7-figure businesses</span> from scratch.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">$47M+</div>
                <div className="text-sm text-gray-400">Generated by Students</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">10,000+</div>
                <div className="text-sm text-gray-400">Success Stories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">89%</div>
                <div className="text-sm text-gray-400">Hit $10K+/Month</div>
              </div>
            </div>

            <div className="bg-red-500/20 border border-red-500 rounded-lg p-4 mb-8 max-w-2xl mx-auto">
              <p className="text-red-300 font-semibold">⚡ Bundle Price Expires in 72 Hours</p>
              <p className="text-sm text-gray-300">Individual prices increasing by $200 each</p>
            </div>

            <Link href="#bundle" className="cta-button inline-block text-lg mb-8 btn-animate animate-glow hover-lift">
              Get the Complete Arsenal (Save $191)
            </Link>

            {/* Social Proof */}
            <div className="flex items-center justify-center">
              <div className="flex items-center space-x-2">
                <div className="flex">
                  <Image
                    src="https://ext.same-assets.com/1161517358/3820475784.webp"
                    alt="User"
                    width={32}
                    height={32}
                    className="w-8 h-8 rounded-full -mr-1 border-2 border-green-400"
                  />
                  <Image
                    src="https://ext.same-assets.com/1161517358/3495288803.webp"
                    alt="User"
                    width={32}
                    height={32}
                    className="w-8 h-8 rounded-full -mr-1 border-2 border-green-400"
                  />
                  <Image
                    src="https://ext.same-assets.com/1161517358/1430260149.webp"
                    alt="User"
                    width={32}
                    height={32}
                    className="w-8 h-8 rounded-full -mr-1 border-2 border-green-400"
                  />
                </div>
                <div className="flex text-yellow-400 text-lg">
                  {'★'.repeat(5)}
                </div>
                <span className="text-sm text-gray-400">10,000+ creators transformed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Overview Section */}
      <section className="section-spacing bg-zinc-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={problemAnimation.elementRef}
            className={`text-center mb-16 scroll-fade-up ${problemAnimation.isVisible ? 'visible' : ''}`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Are You Making These <span className="text-red-400">Expensive Mistakes?</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Most creators stay broke because they're building a house without a blueprint...
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className={`bg-zinc-900 border border-red-500/30 rounded-lg p-6 card-hover hover-lift scroll-fade-up ${problemAnimation.isVisible ? 'visible scroll-stagger-1' : ''}`}>
              <div className="text-red-400 text-4xl mb-4">❌</div>
              <h3 className="text-xl font-bold mb-3 text-red-300">Random Course Addiction</h3>
              <p className="text-gray-400">
                Spending $10K+ on disconnected courses that don't work together. You have 47 tabs open but no clear strategy.
              </p>
            </div>
            <div className={`bg-zinc-900 border border-red-500/30 rounded-lg p-6 card-hover hover-lift scroll-fade-up ${problemAnimation.isVisible ? 'visible scroll-stagger-2' : ''}`}>
              <div className="text-red-400 text-4xl mb-4">📚</div>
              <h3 className="text-xl font-bold mb-3 text-red-300">Information Overload</h3>
              <p className="text-gray-400">
                Drowning in content but no clear path forward. You know 1,000 tactics but can't execute one system properly.
              </p>
            </div>
            <div className={`bg-zinc-900 border border-red-500/30 rounded-lg p-6 card-hover hover-lift scroll-fade-up ${problemAnimation.isVisible ? 'visible scroll-stagger-3' : ''}`}>
              <div className="text-red-400 text-4xl mb-4">💸</div>
              <h3 className="text-xl font-bold mb-3 text-red-300">Shiny Object Syndrome</h3>
              <p className="text-gray-400">
                Jumping from AI to crypto to dropshipping. You've started 12 businesses but finished none.
              </p>
            </div>
            <div className={`bg-zinc-900 border border-red-500/30 rounded-lg p-6 card-hover hover-lift scroll-fade-up ${problemAnimation.isVisible ? 'visible scroll-stagger-4' : ''}`}>
              <div className="text-red-400 text-4xl mb-4">🔗</div>
              <h3 className="text-xl font-bold mb-3 text-red-300">Missing Connections</h3>
              <p className="text-gray-400">
                You don't see how Instagram feeds digital products, how AI amplifies everything, or how automation scales it all.
              </p>
            </div>
            <div className={`bg-zinc-900 border border-red-500/30 rounded-lg p-6 card-hover hover-lift scroll-fade-up ${problemAnimation.isVisible ? 'visible scroll-stagger-5' : ''}`}>
              <div className="text-red-400 text-4xl mb-4">⏰</div>
              <h3 className="text-xl font-bold mb-3 text-red-300">Analysis Paralysis</h3>
              <p className="text-gray-400">
                Watching everyone else build empires while you're still "researching" and planning your perfect launch.
              </p>
            </div>
            <div className={`bg-zinc-900 border border-red-500/30 rounded-lg p-6 card-hover hover-lift scroll-fade-up ${problemAnimation.isVisible ? 'visible scroll-stagger-6' : ''}`}>
              <div className="text-red-400 text-4xl mb-4">💔</div>
              <h3 className="text-xl font-bold mb-3 text-red-300">Incomplete Systems</h3>
              <p className="text-gray-400">
                Great at content creation but terrible at monetization. Or good at products but can't get traffic. You're missing critical pieces.
              </p>
            </div>
          </div>

          <div className={`text-center mt-16 scroll-fade-up ${problemAnimation.isVisible ? 'visible' : ''}`}>
            <p className="text-2xl text-red-300 font-semibold mb-4">
              Sound familiar? You're not alone...
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              The average creator spends $15,000+ and 18 months trying to piece together a profitable system. What if there was a better way?
            </p>
          </div>
        </div>
      </section>

      {/* Creator Economy Reality Check */}
      <section className="section-spacing">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={realityAnimation.elementRef}
            className={`text-center mb-16 scroll-fade-up ${realityAnimation.isVisible ? 'visible' : ''}`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              The Creator Economy <span className="text-yellow-400">Reality Check</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto">
              The numbers don't lie. The difference between the top 1% and everyone else isn't talent—it's having the complete system.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-16">
            <div className={`bg-gradient-to-br from-green-900/30 to-green-800/20 border border-green-500/30 rounded-lg p-6 text-center card-hover hover-lift scroll-fade-up ${realityAnimation.isVisible ? 'visible scroll-stagger-1' : ''}`}>
              <div className="text-4xl font-bold text-green-400 mb-2">$104B</div>
              <div className="text-sm text-gray-300">Creator Economy Size</div>
              <div className="text-xs text-gray-400 mt-2">Growing 22% annually</div>
            </div>
            <div className={`bg-gradient-to-br from-purple-900/30 to-purple-800/20 border border-purple-500/30 rounded-lg p-6 text-center card-hover hover-lift scroll-fade-up ${realityAnimation.isVisible ? 'visible scroll-stagger-2' : ''}`}>
              <div className="text-4xl font-bold text-purple-400 mb-2">$5M+</div>
              <div className="text-sm text-gray-300">Top 1% Earnings</div>
              <div className="text-xs text-gray-400 mt-2">Per year average</div>
            </div>
            <div className={`bg-gradient-to-br from-red-900/30 to-red-800/20 border border-red-500/30 rounded-lg p-6 text-center card-hover hover-lift scroll-fade-up ${realityAnimation.isVisible ? 'visible scroll-stagger-3' : ''}`}>
              <div className="text-4xl font-bold text-red-400 mb-2">$100</div>
              <div className="text-sm text-gray-300">Average Creator</div>
              <div className="text-xs text-gray-400 mt-2">Per month (stuck)</div>
            </div>
            <div className={`bg-gradient-to-br from-blue-900/30 to-blue-800/20 border border-blue-500/30 rounded-lg p-6 text-center card-hover hover-lift scroll-fade-up ${realityAnimation.isVisible ? 'visible scroll-stagger-4' : ''}`}>
              <div className="text-4xl font-bold text-blue-400 mb-2">89%</div>
              <div className="text-sm text-gray-300">Quit Within 1 Year</div>
              <div className="text-xs text-gray-400 mt-2">Without systems</div>
            </div>
          </div>

          <div className={`bg-gradient-to-r from-yellow-900/20 to-orange-900/20 border border-yellow-500/30 rounded-lg p-8 max-w-4xl mx-auto text-center scroll-fade-up ${realityAnimation.isVisible ? 'visible' : ''}`}>
            <h3 className="text-3xl font-bold mb-4 text-yellow-400">What's the Difference?</h3>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <h4 className="text-xl font-semibold mb-3 text-red-300">❌ The 99% (Struggling):</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>• Random tactics and hope</li>
                  <li>• Single income stream focus</li>
                  <li>• Manual everything (burnout)</li>
                  <li>• No audience synergy</li>
                  <li>• Inconsistent revenue</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-3 text-green-300">✅ The 1% (Thriving):</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>• Complete integrated systems</li>
                  <li>• Multiple synergistic income streams</li>
                  <li>• Automated and scalable</li>
                  <li>• Strategic audience building</li>
                  <li>• Predictable 7-figure revenue</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bundle Section */}
      <section className="section-spacing bg-gradient-to-br from-green-900/20 to-blue-900/20" id="bundle">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={bundleAnimation.elementRef}
            className={`text-center mb-16 scroll-fade-up ${bundleAnimation.isVisible ? 'visible' : ''}`}
          >
            <div className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-2 rounded-full text-sm font-bold mb-6">
              LIMITED TIME: COMPLETE BUNDLE
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              The <span className="text-green-400">Creator Empire</span> Bundle
            </h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto mb-8">
              Get all 4 proven systems that work together like a perfectly orchestrated symphony. This isn't just courses—it's your complete business infrastructure.
            </p>
          </div>

          <div className={`max-w-5xl mx-auto scroll-fade-up ${bundleAnimation.isVisible ? 'visible' : ''}`}>
            <div className="bg-gradient-to-br from-zinc-800 to-zinc-900 border-2 border-green-500 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse">
                72 Hours Left!
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold mb-4">Complete Creator Arsenal</h3>
                  <p className="text-gray-400 mb-6">4 courses that build a complete business ecosystem:</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">✓ Digital Products Mastery</span>
                      <span className="text-gray-400 line-through">$497</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">✓ Instagram Mastery System</span>
                      <span className="text-gray-400 line-through">$397</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">✓ AI Influencers Empire</span>
                      <span className="text-gray-400 line-through">$597</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">✓ N8N Automation Mastery</span>
                      <span className="text-gray-400 line-through">$297</span>
                    </div>
                    <div className="border-t border-gray-600 pt-3">
                      <div className="flex justify-between items-center text-lg">
                        <span className="font-semibold">Individual Value:</span>
                        <span className="text-red-400 line-through">$1,788</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-500/20 border border-green-500 rounded-lg p-4 mb-6">
                    <h4 className="font-bold text-green-300 mb-2">🎁 Bundle-Only Bonuses ($497+ Value):</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Private mastermind access (3 months)</li>
                      <li>• 1-on-1 strategy call with Anyro</li>
                      <li>• Complete automation templates</li>
                      <li>• Cross-platform integration guide</li>
                      <li>• Priority support & updates</li>
                    </ul>
                  </div>
                </div>

                <div className="text-center">
                  <div className="bg-gradient-to-br from-green-500 to-blue-500 rounded-2xl p-8 text-white">
                    <div className="text-sm mb-2">Bundle Price Today:</div>
                    <div className="text-5xl font-bold mb-2">$697</div>
                    <div className="text-sm mb-4">You Save $191!</div>
                    
                    <Link href="#" className="bg-white text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors block mb-4">
                      Get Complete Bundle Now
                    </Link>
                    
                    <div className="text-xs opacity-90">
                      Or 3 payments of $247/month
                    </div>
                  </div>
                  
                  <div className="mt-6 text-center">
                    <p className="text-sm text-gray-400 mb-2">⚠️ After 72 hours:</p>
                    <p className="text-lg text-red-300">Bundle Price: $997</p>
                    <p className="text-sm text-gray-400">Individual courses increase by $200 each</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`text-center mt-12 scroll-fade-up ${bundleAnimation.isVisible ? 'visible' : ''}`}>
            <p className="text-lg text-gray-300 mb-4">
              <span className="text-green-400 font-semibold">89% of our highest earners</span> ($15K+/month) bought the complete bundle
            </p>
            <p className="text-sm text-gray-400">
              They understood that success comes from systems working together, not isolated tactics
            </p>
          </div>
        </div>
      </section>

      {/* Enhanced Courses Section */}
      <section className="section-spacing">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={coursesAnimation.elementRef}
            className={`text-center mb-16 scroll-fade-up ${coursesAnimation.isVisible ? 'visible' : ''}`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Choose Your <span className="text-blue-400">Success Path</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto">
              Each course is a complete system. Combined, they create an unstoppable empire. Start with one or get them all.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {courses.map((course, index) => (
              <div key={course.id} className={`bg-zinc-900 border border-zinc-700 rounded-2xl overflow-hidden card-hover hover-lift scroll-fade-up ${coursesAnimation.isVisible ? `visible scroll-stagger-${Math.min(index + 1, 6)}` : ''} relative`}>
                {course.badge && (
                  <div className={`absolute top-4 left-4 ${course.badgeColor} text-white px-3 py-1 rounded-full text-xs font-bold z-10`}>
                    {course.badge}
                  </div>
                )}
                
                <div className="relative">
                  <Image
                    src={course.image}
                    alt={course.title}
                    width={600}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent"></div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2">{course.title}</h3>
                  <p className="text-green-400 font-semibold mb-4">{course.subtitle}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <span className="text-gray-400 line-through text-lg">${course.originalPrice}</span>
                      <span className="text-3xl font-bold text-green-400">${course.salePrice}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-400">You Save</div>
                      <div className="text-lg font-bold text-red-400">${course.originalPrice - course.salePrice}</div>
                    </div>
                  </div>

                  <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-3 mb-4">
                    <div className="text-sm text-blue-300 font-semibold">Results:</div>
                    <div className="text-blue-400">{course.results}</div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {course.features.map((feature, idx) => (
                      <li key={idx} className="text-gray-300 flex items-start">
                        <span className="text-green-400 mr-2 mt-1">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="bg-zinc-800 rounded-lg p-4 mb-4">
                    <div className="text-sm text-gray-400 mb-1">Student Success:</div>
                    <div className="text-green-300 italic">{course.testimonial}</div>
                  </div>

                  <div className="bg-yellow-500/20 border border-yellow-500/30 rounded-lg p-3 mb-4">
                    <div className="text-yellow-300 text-sm">⚡ {course.urgency}</div>
                  </div>

                  <div className="text-gray-400 text-sm mb-6">{course.forWho}</div>

                  <Link href="#" className="cta-button w-full text-center block btn-animate animate-glow hover-lift">
                    Get {course.title}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className={`text-center mt-16 scroll-fade-up ${coursesAnimation.isVisible ? 'visible' : ''}`}>
            <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-lg p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 text-purple-300">💡 Smart Buying Strategy</h3>
              <p className="text-gray-300 mb-4">
                Most successful students start with 2-3 courses for maximum synergy. Single courses are good, but combinations are where the magic happens.
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="bg-zinc-800 rounded-lg p-4">
                  <div className="font-semibold text-green-300 mb-2">🚀 Fast Results</div>
                  <div className="text-gray-400">Digital Products + Instagram</div>
                </div>
                <div className="bg-zinc-800 rounded-lg p-4">
                  <div className="font-semibold text-blue-300 mb-2">🤖 Automation Focused</div>
                  <div className="text-gray-400">N8N + AI Influencers</div>
                </div>
                <div className="bg-zinc-800 rounded-lg p-4">
                  <div className="font-semibold text-purple-300 mb-2">👑 Complete Empire</div>
                  <div className="text-gray-400">All 4 Courses (Best Value)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="section-spacing bg-zinc-900/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={comparisonAnimation.elementRef}
            className={`text-center mb-16 scroll-fade-up ${comparisonAnimation.isVisible ? 'visible' : ''}`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Course <span className="text-blue-400">Comparison</span> Guide
            </h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto">
              Understanding what each course teaches and how they work together
            </p>
          </div>

          <div className={`overflow-x-auto scroll-fade-up ${comparisonAnimation.isVisible ? 'visible' : ''}`}>
            <table className="w-full max-w-6xl mx-auto bg-zinc-900 rounded-lg overflow-hidden">
              <thead className="bg-zinc-800">
                <tr>
                  <th className="p-4 text-left">Course</th>
                  <th className="p-4 text-center">What You Learn</th>
                  <th className="p-4 text-center">Best For</th>
                  <th className="p-4 text-center">Results Timeline</th>
                  <th className="p-4 text-center">Combines Best With</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-700">
                <tr className="hover:bg-zinc-800/50">
                  <td className="p-4">
                    <div className="font-semibold text-green-400">Digital Products</div>
                    <div className="text-sm text-gray-400">$497 → $197</div>
                  </td>
                  <td className="p-4 text-sm">
                    Create & sell info products, pricing psychology, launch strategies, sales funnels
                  </td>
                  <td className="p-4 text-sm text-center">
                    Anyone with expertise to monetize
                  </td>
                  <td className="p-4 text-sm text-center">
                    30-60 days for first $5K
                  </td>
                  <td className="p-4 text-sm text-center">
                    Instagram (audience) + N8N (automation)
                  </td>
                </tr>
                <tr className="hover:bg-zinc-800/50">
                  <td className="p-4">
                    <div className="font-semibold text-purple-400">Instagram Mastery</div>
                    <div className="text-sm text-gray-400">$397 → $147</div>
                  </td>
                  <td className="p-4 text-sm">
                    Viral content, algorithm hacks, monetization, DM automation, growth strategies
                  </td>
                  <td className="p-4 text-sm text-center">
                    Content creators wanting massive reach
                  </td>
                  <td className="p-4 text-sm text-center">
                    60-90 days for 100K followers
                  </td>
                  <td className="p-4 text-sm text-center">
                    Digital Products (monetize) + AI (content)
                  </td>
                </tr>
                <tr className="hover:bg-zinc-800/50">
                  <td className="p-4">
                    <div className="font-semibold text-blue-400">AI Influencers</div>
                    <div className="text-sm text-gray-400">$597 → $247</div>
                  </td>
                  <td className="p-4 text-sm">
                    Create AI models, advanced prompting, monetization, content automation
                  </td>
                  <td className="p-4 text-sm text-center">
                    Tech-savvy entrepreneurs seeking passive income
                  </td>
                  <td className="p-4 text-sm text-center">
                    90-120 days for profitable AI model
                  </td>
                  <td className="p-4 text-sm text-center">
                    Instagram (platforms) + N8N (automation)
                  </td>
                </tr>
                <tr className="hover:bg-zinc-800/50">
                  <td className="p-4">
                    <div className="font-semibold text-orange-400">N8N Automation</div>
                    <div className="text-sm text-gray-400">$297 → $97</div>
                  </td>
                  <td className="p-4 text-sm">
                    No-code workflows, business automation, integrations, scaling systems
                  </td>
                  <td className="p-4 text-sm text-center">
                    Business owners drowning in tasks
                  </td>
                  <td className="p-4 text-sm text-center">
                    30 days to save 20+ hours/week
                  </td>
                  <td className="p-4 text-sm text-center">
                    Any course (automates everything)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Success Paths Section */}
      <section className="section-spacing">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={pathsAnimation.elementRef}
            className={`text-center mb-16 scroll-fade-up ${pathsAnimation.isVisible ? 'visible' : ''}`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Your <span className="text-green-400">Success Path</span> Recommendations
            </h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto">
              Choose the path that matches your goals and situation. Each path is designed for maximum results in minimum time.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className={`bg-gradient-to-br from-green-900/30 to-green-800/20 border border-green-500/30 rounded-lg p-8 card-hover hover-lift scroll-fade-up ${pathsAnimation.isVisible ? 'visible scroll-stagger-1' : ''}`}>
              <div className="text-green-400 text-4xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold mb-4 text-green-300">Fast Cash Path</h3>
              <p className="text-gray-400 mb-6">For beginners who want results quickly</p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3">
                  <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</span>
                  <span className="text-gray-300">Start with Digital Products ($197)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</span>
                  <span className="text-gray-300">Add Instagram Mastery ($147)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</span>
                  <span className="text-gray-300">Scale with AI Influencers ($247)</span>
                </div>
              </div>

              <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4 mb-6">
                <div className="text-sm text-green-300 font-semibold mb-1">Expected Timeline:</div>
                <div className="text-green-400">30-60 days to first $5K/month</div>
              </div>

              <div className="text-center">
                <div className="text-lg font-bold mb-2">Total: $591</div>
                <div className="text-sm text-gray-400 mb-4">vs Bundle: $697 (includes N8N + bonuses)</div>
                <Link href="#" className="bg-green-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-600 transition-colors block">
                  Start Fast Cash Path
                </Link>
              </div>
            </div>

            <div className={`bg-gradient-to-br from-blue-900/30 to-blue-800/20 border border-blue-500/30 rounded-lg p-8 card-hover hover-lift scroll-fade-up ${pathsAnimation.isVisible ? 'visible scroll-stagger-2' : ''}`}>
              <div className="text-blue-400 text-4xl mb-4">🤖</div>
              <h3 className="text-2xl font-bold mb-4 text-blue-300">Technical Path</h3>
              <p className="text-gray-400 mb-6">For those who love automation and systems</p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3">
                  <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</span>
                  <span className="text-gray-300">Start with N8N Automation ($97)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</span>
                  <span className="text-gray-300">Add AI Influencers ($247)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</span>
                  <span className="text-gray-300">Scale with Digital Products ($197)</span>
                </div>
              </div>

              <div className="bg-blue-500/20 border border-blue-500/30 rounded-lg p-4 mb-6">
                <div className="text-sm text-blue-300 font-semibold mb-1">Expected Timeline:</div>
                <div className="text-blue-400">60-90 days to systematic income</div>
              </div>

              <div className="text-center">
                <div className="text-lg font-bold mb-2">Total: $541</div>
                <div className="text-sm text-gray-400 mb-4">vs Bundle: $697 (includes Instagram + bonuses)</div>
                <Link href="#" className="bg-blue-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-600 transition-colors block">
                  Start Technical Path
                </Link>
              </div>
            </div>

            <div className={`bg-gradient-to-br from-purple-900/30 to-purple-800/20 border-2 border-purple-500 rounded-lg p-8 card-hover hover-lift scroll-fade-up ${pathsAnimation.isVisible ? 'visible scroll-stagger-3' : ''} relative`}>
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-500 text-white px-4 py-1 rounded-full text-xs font-bold">
                RECOMMENDED
              </div>
              <div className="text-purple-400 text-4xl mb-4">👑</div>
              <h3 className="text-2xl font-bold mb-4 text-purple-300">Empire Builder Path</h3>
              <p className="text-gray-400 mb-6">Complete system for maximum results</p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3">
                  <span className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">✓</span>
                  <span className="text-gray-300">All 4 Courses Included</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">✓</span>
                  <span className="text-gray-300">$497+ in Exclusive Bonuses</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">✓</span>
                  <span className="text-gray-300">Priority Support & Updates</span>
                </div>
              </div>

              <div className="bg-purple-500/20 border border-purple-500/30 rounded-lg p-4 mb-6">
                <div className="text-sm text-purple-300 font-semibold mb-1">Expected Timeline:</div>
                <div className="text-purple-400">90 days to $10K+/month empire</div>
              </div>

              <div className="text-center">
                <div className="text-lg font-bold mb-2">Bundle: $697</div>
                <div className="text-sm text-gray-400 mb-4">Save $191 vs individual courses</div>
                <Link href="#bundle" className="bg-purple-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-purple-600 transition-colors block">
                  Get Complete Bundle
                </Link>
              </div>
            </div>
          </div>

          <div className={`text-center mt-16 scroll-fade-up ${pathsAnimation.isVisible ? 'visible' : ''}`}>
            <div className="bg-gradient-to-r from-yellow-900/20 to-orange-900/20 border border-yellow-500/30 rounded-lg p-6 max-w-3xl mx-auto">
              <h4 className="text-xl font-bold mb-3 text-yellow-300">⚡ Success Multiplier Effect</h4>
              <p className="text-gray-300">
                Students who buy multiple courses see 3-5x better results because the systems amplify each other. 
                <span className="text-yellow-400 font-semibold"> The bundle isn't just a discount—it's a complete business ecosystem.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who is this for Section */}
      <section className="section-spacing bg-zinc-900/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={whoForAnimation.elementRef}
            className={`text-center mb-16 scroll-fade-up ${whoForAnimation.isVisible ? 'visible' : ''}`}
          >
            <p className="text-sm text-gray-400 uppercase tracking-wider mb-4">IS THIS YOU?</p>
            <h2 className="text-4xl md:text-5xl font-bold">Who is this for?</h2>
            <p className="text-xl text-gray-400 mt-4">See if you can relate.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className={`testimonial-card text-center card-hover hover-lift scroll-fade-up ${whoForAnimation.isVisible ? 'visible scroll-stagger-1' : ''}`}>
              <h3 className="text-2xl font-bold mb-4">Total Beginners</h3>
              <p className="text-gray-400">
                People who've never made a dollar online and want a bulletproof way to start earning consistently with a complete system.
              </p>
            </div>
            <div className={`testimonial-card text-center card-hover hover-lift scroll-fade-up ${whoForAnimation.isVisible ? 'visible scroll-stagger-2' : ''}`}>
              <h3 className="text-2xl font-bold mb-4">Content Creators</h3>
              <p className="text-gray-400">
                Someone who's grown an audience but struggles to monetize it consistently. Ready to turn followers into customers.
              </p>
            </div>
            <div className={`testimonial-card text-center card-hover hover-lift scroll-fade-up ${whoForAnimation.isVisible ? 'visible scroll-stagger-3' : ''}`}>
              <h3 className="text-2xl font-bold mb-4">Business Owners</h3>
              <p className="text-gray-400">
                Entrepreneurs drowning in tasks who need automation and multiple income streams to scale beyond trading time for money.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="section-spacing">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={resultsAnimation.elementRef}
            className={`text-center mb-16 scroll-fade-up ${resultsAnimation.isVisible ? 'visible' : ''}`}
          >
            <p className="text-sm text-gray-400 uppercase tracking-wider mb-4">RESULTS</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to see results like this?</h2>
            <p className="text-xl text-gray-400">Some of the results I've achieved with this complete system:</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
            <div className={`bg-zinc-900 rounded-lg overflow-hidden card-hover hover-lift scroll-fade-up ${resultsAnimation.isVisible ? 'visible scroll-stagger-1' : ''}`}>
              <Image
                src="https://ext.same-assets.com/1161517358/1504420078.png"
                alt="Digital Product Result 1"
                width={400}
                height={300}
                className="w-full h-auto"
              />
            </div>
            <div className={`bg-zinc-900 rounded-lg overflow-hidden card-hover hover-lift scroll-fade-up ${resultsAnimation.isVisible ? 'visible scroll-stagger-2' : ''}`}>
              <Image
                src="https://ext.same-assets.com/1161517358/3271701469.png"
                alt="Digital Product Result 2"
                width={400}
                height={300}
                className="w-full h-auto"
              />
            </div>
            <div className={`bg-zinc-900 rounded-lg overflow-hidden card-hover hover-lift scroll-fade-up ${resultsAnimation.isVisible ? 'visible scroll-stagger-3' : ''}`}>
              <Image
                src="https://ext.same-assets.com/1161517358/2562102632.png"
                alt="Digital Product Result 3"
                width={400}
                height={300}
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className={`text-center scroll-fade-up ${resultsAnimation.isVisible ? 'visible scroll-stagger-4' : ''}`}>
            <h3 className="text-3xl font-bold mb-4">Start building your <span className="text-green-400">creator empire</span> today</h3>
            <p className="text-xl text-gray-400 mb-8">Join the <span className="text-green-300">Complete Creator Arsenal</span> and build multiple income streams that work together.</p>
            <Link href="#bundle" className="cta-button inline-block btn-animate animate-glow hover-lift">
              Get the Complete Bundle
            </Link>
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section className="section-spacing bg-zinc-900/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={testimonialsAnimation.elementRef}
            className={`text-center mb-16 scroll-fade-up ${testimonialsAnimation.isVisible ? 'visible' : ''}`}
          >
            <p className="text-sm text-gray-400 uppercase tracking-wider mb-4">SUCCESS STORIES</p>
            <h2 className="text-4xl md:text-5xl font-bold">Students Who Bought Multiple Courses</h2>
            <p className="text-xl text-gray-400 mt-4">See how combining systems creates exponential results...</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
            {testimonials.map((testimonial, index) => (
              <div key={index} className={`testimonial-card card-hover hover-lift scroll-fade-up ${testimonialsAnimation.isVisible ? `visible scroll-stagger-${Math.min(index + 1, 6)}` : ''}`}>
                <div className="flex items-center mb-4">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed mb-4">{testimonial.content}</p>
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-3">
                  <div className="text-xs text-blue-300 font-semibold mb-1">Courses Used:</div>
                  <div className="text-blue-400 text-sm">{testimonial.courses}</div>
                </div>
              </div>
            ))}
          </div>

          <div className={`text-center scroll-fade-up ${testimonialsAnimation.isVisible ? 'visible' : ''}`}>
            <div className="bg-gradient-to-r from-green-900/20 to-blue-900/20 border border-green-500/30 rounded-lg p-8 max-w-4xl mx-auto mb-8">
              <h3 className="text-2xl font-bold mb-4 text-green-300">The Pattern Is Clear</h3>
              <p className="text-gray-300 mb-4">
                Our highest earners don't just buy one course—they invest in the complete system. 
                They understand that success comes from systems working in harmony, not isolated tactics.
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">73%</div>
                  <div className="text-gray-400">Bundle buyers hit $10K/month</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">31%</div>
                  <div className="text-gray-400">Single course buyers hit $10K/month</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">135%</div>
                  <div className="text-gray-400">Higher success rate with bundle</div>
                </div>
              </div>
            </div>
            
            <h3 className="text-3xl font-bold mb-4">Become our next <span className="text-green-400">success story</span></h3>
            <p className="text-xl text-gray-400 mb-8">Join thousands who chose the complete system over scattered tactics.</p>
            <Link href="#bundle" className="cta-button inline-block btn-animate animate-glow hover-lift">
              Get the Complete Bundle
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-spacing">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={faqAnimation.elementRef}
            className={`text-center mb-16 scroll-fade-up ${faqAnimation.isVisible ? 'visible' : ''}`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked <span className="text-blue-400">Questions</span>
            </h2>
            <p className="text-xl text-gray-400">
              Everything you need to know about course combinations and success paths
            </p>
          </div>

          <div className={`max-w-4xl mx-auto space-y-6 scroll-fade-up ${faqAnimation.isVisible ? 'visible' : ''}`}>
            {faqItems.map((item, index) => (
              <div key={index} className="bg-zinc-900 border border-zinc-700 rounded-lg p-6 card-hover">
                <h3 className="text-xl font-bold mb-3 text-white">{item.question}</h3>
                <p className="text-gray-400 leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>

          <div className={`text-center mt-16 scroll-fade-up ${faqAnimation.isVisible ? 'visible' : ''}`}>
            <div className="bg-red-500/20 border border-red-500 rounded-lg p-6 max-w-2xl mx-auto mb-8">
              <h4 className="text-xl font-bold mb-3 text-red-300">⚠️ Important Pricing Notice</h4>
              <p className="text-gray-300 mb-4">
                Bundle price increases to <span className="text-red-400 font-bold">$997</span> in 72 hours.
                Individual course prices increase by <span className="text-red-400 font-bold">$200 each</span>.
              </p>
              <p className="text-sm text-gray-400">
                This isn't a fake countdown—prices genuinely increase as we add more content and the courses get more valuable.
              </p>
            </div>
            
            <Link href="#bundle" className="cta-button inline-block text-lg btn-animate animate-glow hover-lift">
              Secure Your Bundle at $697
            </Link>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="section-spacing bg-zinc-900/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={expectAnimation.elementRef}
            className={`text-center mb-16 scroll-fade-up ${expectAnimation.isVisible ? 'visible' : ''}`}
          >
            <p className="text-sm text-gray-400 uppercase tracking-wider mb-4">WHAT'S INCLUDED</p>
            <h2 className="text-4xl md:text-5xl font-bold">Complete System Breakdown</h2>
            <p className="text-xl text-gray-400 mt-4">Everything you get in the Complete Creator Arsenal.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className={`testimonial-card card-hover hover-lift scroll-fade-up ${expectAnimation.isVisible ? 'visible scroll-stagger-1' : ''}`}>
              <h3 className="text-2xl font-bold mb-4">Digital Product Mastery<br />(Value: $497)</h3>
              <p className="text-gray-400">
                Complete system for creating eBooks, courses, guides, templates, and methods that sell consistently.
              </p>
            </div>
            <div className={`testimonial-card card-hover hover-lift scroll-fade-up ${expectAnimation.isVisible ? 'visible scroll-stagger-2' : ''}`}>
              <h3 className="text-2xl font-bold mb-4">Instagram Growth System<br />(Value: $397)</h3>
              <p className="text-gray-400">
                Viral content formulas, algorithm hacks, and monetization strategies for explosive growth.
              </p>
            </div>
            <div className={`testimonial-card card-hover hover-lift scroll-fade-up ${expectAnimation.isVisible ? 'visible scroll-stagger-3' : ''}`}>
              <h3 className="text-2xl font-bold mb-4">AI Influencers Empire<br />(Value: $597)</h3>
              <p className="text-gray-400">
                Create photorealistic AI influencers that generate passive income around the clock.
              </p>
            </div>
            <div className={`testimonial-card card-hover hover-lift scroll-fade-up ${expectAnimation.isVisible ? 'visible scroll-stagger-4' : ''}`}>
              <h3 className="text-2xl font-bold mb-4">N8N Automation Mastery<br />(Value: $297)</h3>
              <p className="text-gray-400">
                No-code automation that saves 40+ hours per week and scales your entire business.
              </p>
            </div>
            <div className={`testimonial-card card-hover hover-lift scroll-fade-up ${expectAnimation.isVisible ? 'visible scroll-stagger-5' : ''}`}>
              <h3 className="text-2xl font-bold mb-4">Bundle-Only Bonuses<br />(Value: $497+)</h3>
              <p className="text-gray-400">
                Private mastermind, 1-on-1 call, automation templates, integration guides, priority support.
              </p>
            </div>
            <div className={`testimonial-card card-hover hover-lift scroll-fade-up ${expectAnimation.isVisible ? 'visible scroll-stagger-6' : ''}`}>
              <h3 className="text-2xl font-bold mb-4">Lifetime Community<br />(Priceless)</h3>
              <p className="text-gray-400">
                Connect with other empire builders, get feedback, share wins, and grow together.
              </p>
            </div>
          </div>

          <div className={`text-center mt-16 scroll-fade-up ${expectAnimation.isVisible ? 'visible' : ''}`}>
            <h3 className="text-3xl font-bold mb-4">Total Value: <span className="text-red-400">$1,788</span></h3>
            <h4 className="text-2xl mb-4">Bundle Price: <span className="text-green-400">$697</span></h4>
            <p className="text-xl text-gray-400 mb-8">You save <span className="text-green-300 font-bold">$191</span> and get the complete ecosystem</p>
            <Link href="#bundle" className="cta-button inline-block mb-4 btn-animate animate-glow hover-lift">
              Get Complete Bundle Now
            </Link>
            <p className="text-sm text-gray-400">72 hours left at this price</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-spacing bg-gradient-to-br from-green-900/20 to-blue-900/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            ref={ctaAnimation.elementRef}
            className={`scroll-fade-up ${ctaAnimation.isVisible ? 'visible' : ''}`}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Stop Buying Random Courses.<br />
              <span className="text-green-400">Start Building Systems.</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-4xl mx-auto">
              You have two choices: Keep buying scattered tactics that leave you confused and broke, 
              or invest in the complete system that's helped 10,000+ creators build 7-figure empires.
            </p>
            
            <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-8 max-w-3xl mx-auto mb-8">
              <div className="grid md:grid-cols-2 gap-8 text-left">
                <div>
                  <h4 className="text-xl font-bold mb-4 text-red-300">❌ The Scattered Approach:</h4>
                  <ul className="space-y-2 text-gray-400 text-sm">
                    <li>• Spend $15,000+ on random courses</li>
                    <li>• Take 18+ months to see results</li>
                    <li>• Stay stuck at $100/month</li>
                    <li>• Burn out from information overload</li>
                    <li>• Join the 89% who quit</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-4 text-green-300">✅ The System Approach:</h4>
                  <ul className="space-y-2 text-gray-400 text-sm">
                    <li>• Invest $697 in complete ecosystem</li>
                    <li>• See results within 90 days</li>
                    <li>• Build multiple 6-figure income streams</li>
                    <li>• Have clear step-by-step roadmap</li>
                    <li>• Join the 1% who thrive</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="text-center mb-8">
              <div className="text-sm text-red-300 mb-2">Bundle Price Increases in:</div>
              <div className="text-3xl font-bold text-red-400 mb-2">72 HOURS</div>
              <div className="text-sm text-gray-400">From $697 → $997 (Final price)</div>
            </div>

            <Link href="#bundle" className="cta-button inline-block text-xl px-12 py-4 mb-6 btn-animate animate-glow hover-lift">
              Get the Complete Creator Arsenal
            </Link>
            
            <p className="text-lg text-gray-300 mb-4">
              <span className="text-green-400 font-semibold">10,000+ creators</span> chose the complete system over scattered tactics
            </p>
            <p className="text-sm text-gray-400">
              Don't let decision paralysis cost you another year of struggling with random courses
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
