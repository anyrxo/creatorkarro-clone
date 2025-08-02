'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useScrollAnimation, useScrollAnimations } from '@/hooks/useScrollAnimation'
import {
  ValueBadge,
  ModuleCard,
  BonusCard,
  ProblemCard,
  TestimonialCard,
  FAQCard,
  PricingComparison,
  HeroSection,
  SectionHeader
} from '@/components/course/CourseLayout'

export default function DigitalProductsPage() {
  // Scroll animations for different sections
  const heroAnimation = useScrollAnimation({ threshold: 0.2 })
  const problemAnimation = useScrollAnimation({ threshold: 0.1 })
  const solutionAnimation = useScrollAnimation({ threshold: 0.1 })
  const resultsAnimation = useScrollAnimation({ threshold: 0.1 })
  const whoForAnimation = useScrollAnimation({ threshold: 0.1 })
  const studentResultsAnimation = useScrollAnimation({ threshold: 0.1 })
  const modulesAnimation = useScrollAnimation({ threshold: 0.1 })
  const bonusAnimation = useScrollAnimation({ threshold: 0.1 })
  const pricingAnimation = useScrollAnimation({ threshold: 0.1 })
  const testimonialsAnimation = useScrollAnimation({ threshold: 0.1 })
  const faqAnimation = useScrollAnimation({ threshold: 0.1 })
  const finalCtaAnimation = useScrollAnimation({ threshold: 0.2 })

  // For grid items that need staggered animations  
  const problemCards = useScrollAnimations(6, { threshold: 0.1 })
  const whoForCards = useScrollAnimations(3, { threshold: 0.1 })
  const moduleCards = useScrollAnimations(8, { threshold: 0.1 })
  const bonusCards = useScrollAnimations(6, { threshold: 0.1 })
  const testimonialCards = useScrollAnimations(3, { threshold: 0.1 })
  const faqCards = useScrollAnimations(12, { threshold: 0.1 })

  return (
    <div className="min-h-screen bg-dark relative">
      {/* 1. Hero Section */}
      <div ref={heroAnimation.elementRef}>
        <HeroSection
          badge="💎 DIGITAL EMPIRE BUILDER 💎"
          badgeColor="bg-gradient-to-r from-green-600/30 to-emerald-600/30 text-green-300 border border-green-500/50"
          title="Turn Your <span className='text-green-400'>Knowledge</span> Into a <span className='text-green-400'>$500K+ Digital Empire</span> Without Ads or Followers"
          description="The complete Digital Products Academy that shows you how to create, launch, and scale high-converting digital products that generate consistent $10K-$50K months on autopilot."
          ctaText="🚀 Get Digital Products Mastery"
          ctaLink="#pricing"
          socialProof={{
            images: [
              "https://ext.same-assets.com/1161517358/2822588328.webp",
              "https://ext.same-assets.com/1161517358/3376144705.webp",
              "https://ext.same-assets.com/1161517358/2657109700.webp"
            ],
            rating: 5,
            text: "3,247+ students earning $10K+ monthly"
          }}
          stats={[
            { value: "$2M+", label: "Student Revenue Generated", color: "text-green-400" },
            { value: "3,247+", label: "Products Launched", color: "text-blue-400" },
            { value: "89%", label: "Success Rate", color: "text-purple-400" }
          ]}
          isVisible={heroAnimation.isVisible}
        />
      </div>

      {/* 2. Problem Section */}
      <section className="section-spacing border-t border-red-900/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={problemAnimation.elementRef}
            className={`text-center mb-16 scroll-fade-up ${problemAnimation.isVisible ? 'visible' : ''}`}
          >
            <SectionHeader
              badge="BRUTAL REALITY"
              badgeColor="bg-zinc-900 border border-red-500 text-red-400"
              isVisible={problemAnimation.isVisible}
              title="You're Trapped in the <span className='text-red-400'>Trading Time for Money</span> Prison"
              subtitle="While others build digital empires that work 24/7, you're stuck in the outdated hustle..."
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {[
              {
                icon: "💸",
                title: "Working Harder, Earning Less",
                description: "You're grinding 60+ hours a week but your income is still capped by your time. Every dollar requires your personal involvement - there's no scalability, no freedom."
              },
              {
                icon: "📚",
                title: "Valuable Knowledge Going to Waste",
                description: "You have incredible expertise and knowledge that could help thousands of people, but you have no idea how to package and monetize it profitably."
              },
              {
                icon: "🎯",
                title: "Confused by 'Digital Product' Gurus",
                description: "Everyone's talking about courses and digital products, but all the advice is contradictory. You're overwhelmed by the options and don't know where to start."
              },
              {
                icon: "💀",
                title: "Failed Launches and Zero Sales",
                description: "You've tried creating products before but they flopped. No one bought, no one engaged, and you wasted months building something nobody wanted."
              },
              {
                icon: "🔥",
                title: "Watching Others Get Rich Off Your Ideas",
                description: "Competitors with worse knowledge are making millions selling products while you're stuck trading time for money. They figured out the system - you didn't."
              },
              {
                icon: "⏰",
                title: "No Time Freedom or Passive Income",
                description: "Your income stops when you stop working. You can't take vacations, you can't scale, and you're building a glorified job instead of a real business."
              }
            ].map((problem, index) => (
              <div
                key={index}
                ref={problemCards.setElementRef(index)}
                className={`scroll-fade-up ${problemCards.visibleElements[index] ? `visible scroll-stagger-${Math.min(index + 1, 6)}` : ''}`}
              >
                <ProblemCard {...problem} isVisible={problemCards.visibleElements[index]} />
              </div>
            ))}
          </div>

          <div className={`text-center scroll-fade-up ${problemAnimation.isVisible ? 'visible scroll-stagger-6' : ''}`}>
            <div className="bg-zinc-900 border border-red-900/30 rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-4xl font-bold mb-4 text-red-400">
                The Painful Truth...
              </h3>
              <p className="text-lg md:text-xl text-gray-300 mb-6">
                Every month you stay trapped in trading time for money is $10K-$50K in lost potential. Every day you delay 
                building digital products, others get further ahead in the passive income game.
              </p>
              <div className="bg-zinc-900 border border-red-500 rounded-lg p-6">
                <p className="text-xl font-bold text-red-400 mb-2">
                  💔 You're not just missing money... you're missing the freedom to live life on your terms.
                </p>
                <p className="text-gray-300">
                  While others build products that sell while they sleep, you're stuck in the endless grind of manual work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Solution Section */}
      <section className="section-spacing bg-gradient-to-b from-green-900/20 to-emerald-900/20 border-t border-green-900/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={solutionAnimation.elementRef}
            className={`text-center mb-16 scroll-fade-up ${solutionAnimation.isVisible ? 'visible' : ''}`}
          >
            <SectionHeader
              badge="THE SOLUTION"
              badgeColor="bg-zinc-900 border border-green-500 text-green-400"
              title="Digital Products Academy <span className='text-green-400'>Changes Everything</span>"
              subtitle="The ONLY proven system that transforms your knowledge into high-converting digital products that scale infinitely."
              isVisible={solutionAnimation.isVisible}
            />
          </div>

          <div className={`bg-gradient-to-r from-green-900/30 to-emerald-900/30 border border-green-500/30 rounded-3xl p-8 md:p-12 mb-16 scroll-scale ${solutionAnimation.isVisible ? 'visible scroll-stagger-2' : ''}`}>
            <div className="text-center mb-8">
              <h3 className="text-3xl md:text-5xl font-bold mb-4">
                This is the <span className="text-green-400">EXACT</span> System That...
              </h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-500 rounded-full p-2 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-green-400 mb-2">Generated $2M+ in student revenue</h4>
                    <p className="text-gray-300">Students have created and sold everything from $47 guides to $2,997 mastermind programs using this system.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-green-500 rounded-full p-2 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-green-400 mb-2">Launched 3,247+ successful products</h4>
                    <p className="text-gray-300">From complete beginners to experts, this system works for anyone with valuable knowledge to share.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-green-500 rounded-full p-2 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-green-400 mb-2">89% success rate across all niches</h4>
                    <p className="text-gray-300">Whether you're in fitness, business, relationships, or any other niche - these principles work universally.</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-500 rounded-full p-2 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-green-400 mb-2">Works without ads or huge followings</h4>
                    <p className="text-gray-300">You don't need 100K followers or expensive ads. This system creates demand and sales through strategic positioning.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-green-500 rounded-full p-2 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-green-400 mb-2">Creates true passive income streams</h4>
                    <p className="text-gray-300">Build once, sell forever. Your products work 24/7 generating sales while you sleep, travel, or focus on new projects.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-green-500 rounded-full p-2 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-green-400 mb-2">Scales from $1K to $100K+ monthly</h4>
                    <p className="text-gray-300">Start with simple products and scale up to comprehensive programs, mastermind groups, and licensing deals.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <div className="bg-yellow-500/20 border border-yellow-500 rounded-2xl p-6">
                <h4 className="text-2xl font-bold text-yellow-400 mb-2">⚡ This System is BATTLE-TESTED</h4>
                <p className="text-gray-300 text-lg">
                  No theory, no guesswork, no "hope this works." Every strategy has been proven across thousands of students 
                  and millions in digital product sales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Results/Proof Section */}
      <section className="section-spacing bg-zinc-900/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={resultsAnimation.elementRef}
            className={`text-center mb-16 scroll-fade-up ${resultsAnimation.isVisible ? 'visible' : ''}`}
          >
            <SectionHeader isVisible={resultsAnimation.isVisible}
              badge="PROVEN RESULTS"
              badgeColor="bg-zinc-900 border border-green-500 text-green-400"
              title="The Digital Product Revolution is <span className='text-green-400'>Here</span>"
              subtitle="While you're trading time for money, smart entrepreneurs are building passive income empires."
            />
          </div>

          <div className={`grid md:grid-cols-3 gap-8 mb-16 scroll-fade-up ${resultsAnimation.isVisible ? 'visible scroll-stagger-2' : ''}`}>
            <div className="bg-zinc-900 rounded-2xl p-8 text-center hover-lift">
              <div className="text-4xl font-bold text-green-400 mb-2">$2M+</div>
              <div className="text-gray-300">Student Revenue Generated</div>
            </div>
            <div className="bg-zinc-900 rounded-2xl p-8 text-center hover-lift">
              <div className="text-4xl font-bold text-blue-400 mb-2">3,247+</div>
              <div className="text-gray-300">Products Launched</div>
            </div>
            <div className="bg-zinc-900 rounded-2xl p-8 text-center hover-lift">
              <div className="text-4xl font-bold text-purple-400 mb-2">89%</div>
              <div className="text-gray-300">Success Rate</div>
            </div>
          </div>

          <div className={`text-center scroll-fade-up ${resultsAnimation.isVisible ? 'visible scroll-stagger-3' : ''}`}>
            <p className="text-lg md:text-xl text-gray-400 mb-8">Ready to turn your knowledge into a digital empire?</p>
            <Link href="#pricing" className="cta-button inline-block">
              Get Digital Products Academy
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Who This Is For Section */}
      <section className="section-spacing">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={whoForAnimation.elementRef}
            className={`text-center mb-16 scroll-fade-up ${whoForAnimation.isVisible ? 'visible' : ''}`}
          >
            <SectionHeader
              badge="IS THIS YOU?"
              badgeColor="bg-zinc-900 border border-blue-500 text-blue-400"
              isVisible={whoForAnimation.isVisible}
              title="Who This System is <span className='text-blue-400'>Perfect</span> For"
              subtitle="See if you match the profile of our most successful students."
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Knowledge-Rich Professionals",
                description: "You have valuable expertise in your field but don't know how to package and monetize it. You want to escape trading time for money and build scalable income streams."
              },
              {
                title: "Service-Based Business Owners",
                description: "You're tired of the 1-on-1 client grind and want to scale your impact. Transform your services into digital products that serve many people simultaneously."
              },
              {
                title: "Aspiring Online Entrepreneurs",
                description: "You want to build a real online business but don't know where to start. You need a proven system that works without needing a massive audience or expensive ads."
              }
            ].map((item, index) => (
              <div
                key={index}
                ref={whoForCards.setElementRef(index)}
                className={`testimonial-card text-center hover-lift scroll-fade-up ${whoForCards.visibleElements[index] ? `visible scroll-stagger-${index + 1}` : ''}`}
              >
                <h3 className="text-xl md:text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Student Results Section */}
      <section className="section-spacing bg-zinc-900/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={studentResultsAnimation.elementRef}
            className={`text-center mb-16 scroll-fade-up ${studentResultsAnimation.isVisible ? 'visible' : ''}`}
          >
            <SectionHeader
              badge="SUCCESS STORIES"
              badgeColor="bg-zinc-900 border border-green-500 text-green-400"
              title="Real People, <span className='text-green-400'>Real Results</span>"
              isVisible={studentResultsAnimation.isVisible}
              subtitle="These entrepreneurs went from broke to building digital empires..."
            />
          </div>

          <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 scroll-fade-up ${studentResultsAnimation.isVisible ? 'visible scroll-stagger-2' : ''}`}>
            <div className="bg-zinc-900 rounded-2xl p-6 hover-lift">
              <div className="text-2xl font-bold text-green-400 mb-2">Jake C.</div>
              <div className="text-gray-400 mb-4">Fitness Coach</div>
              <p className="text-gray-300">"Launched my first digital fitness program and hit $25K in the first month! Now I help people get fit while sleeping in and making more than my personal training ever did."</p>
            </div>
            <div className="bg-zinc-900 rounded-2xl p-6 hover-lift">
              <div className="text-2xl font-bold text-green-400 mb-2">Sarah K.</div>
              <div className="text-gray-400 mb-4">Marketing Consultant</div>
              <p className="text-gray-300">"Turned my marketing knowledge into a $197 course that generates $15K monthly on autopilot. I went from chasing clients to having a waitlist of customers."</p>
            </div>
            <div className="bg-zinc-900 rounded-2xl p-6 hover-lift">
              <div className="text-2xl font-bold text-green-400 mb-2">Marcus R.</div>
              <div className="text-gray-400 mb-4">Real Estate Expert</div>
              <p className="text-gray-300">"Created a real estate investing masterclass that does $40K+ months. I help more people in a month than I used to help in a year, and I'm making 10x more."</p>
            </div>
          </div>

          <div className={`text-center scroll-fade-up ${studentResultsAnimation.isVisible ? 'visible scroll-stagger-3' : ''}`}>
            <h3 className="text-2xl md:text-4xl font-bold mb-4">Become Our Next Success Story</h3>
            <p className="text-lg md:text-xl text-gray-400 mb-8">Join thousands of entrepreneurs building digital product empires!</p>
            <Link href="#pricing" className="cta-button inline-block">
              Start My Digital Empire
            </Link>
          </div>
        </div>
      </section>

      {/* 7. What You Get Section */}
      <section className="section-spacing">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={modulesAnimation.elementRef}
            className={`text-center mb-16 scroll-fade-up ${modulesAnimation.isVisible ? 'visible' : ''}`}
          >
            <SectionHeader
              badge="COMPLETE SYSTEM"
              badgeColor="bg-zinc-900 border border-green-500 text-green-400"
              isVisible={modulesAnimation.isVisible}
              title="Everything You Need to Build <span className='text-green-400'>Million-Dollar Digital Products</span>"
              subtitle="The most comprehensive digital product creation system ever built."
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "<span className='text-green-400'>Module 1:</span> Product Idea Validation",
                value: "$497",
                description: "Never build a product that doesn't sell. Learn the exact validation process to identify profitable ideas before you create anything. Market research, competitor analysis, and demand testing."
              },
              {
                title: "<span className='text-green-400'>Module 2:</span> High-Converting Product Creation",
                value: "$697",
                description: "Transform raw knowledge into irresistible digital products. Courses, eBooks, templates, tools - learn what formats work best and how to structure content that delivers results."
              },
              {
                title: "<span className='text-green-400'>Module 3:</span> Pricing Psychology Mastery",
                value: "$597",
                description: "Price your products for maximum profit and positioning. Psychology-based pricing strategies, value stacking, and premium positioning that lets you charge 10x more than competitors."
              },
              {
                title: "<span className='text-green-400'>Module 4:</span> Zero-Ad Launch Strategies",
                value: "$797",
                description: "Launch profitable products without spending a dime on ads. Organic marketing strategies, partnerships, and launch sequences that generate massive buzz and sales."
              },
              {
                title: "<span className='text-green-400'>Module 5:</span> Sales Funnel Automation",
                value: "$697",
                description: "Build automated sales systems that work 24/7. Email sequences, landing pages, and sales funnels that convert cold traffic into paying customers while you sleep."
              },
              {
                title: "<span className='text-green-400'>Module 6:</span> Customer Success Systems",
                value: "$497",
                description: "Keep customers happy and buying more. Onboarding sequences, support systems, and strategies that turn one-time buyers into lifetime customers and raving fans."
              },
              {
                title: "<span className='text-green-400'>Module 7:</span> Scaling to Multiple Products",
                value: "$897",
                description: "Expand from one product to an entire empire. Product suites, membership sites, mastermind programs, and licensing strategies that multiply your income streams."
              },
              {
                title: "<span className='text-green-400'>Module 8:</span> Business Operations & Growth",
                value: "$597",
                description: "Build systems that scale without you. Team building, automation tools, financial management, and growth strategies for sustainable long-term success."
              }
            ].map((module, index) => (
              <div
                key={index}
                ref={moduleCards.setElementRef(index)}
                className={`testimonial-card hover-lift scroll-fade-up relative ${moduleCards.visibleElements[index] ? `visible scroll-stagger-${Math.min(index + 1, 6)}` : ''}`}
              >
                <ValueBadge 
                  value={module.value}
                  className="absolute top-4 right-4"
                />
                <h3 className="text-lg md:text-xl font-bold mb-4" dangerouslySetInnerHTML={{ __html: module.title }}></h3>
                <p className="text-gray-400 leading-relaxed">{module.description}</p>
              </div>
            ))}
          </div>

          <div className={`text-center mt-16 scroll-fade-up ${modulesAnimation.isVisible ? 'visible scroll-stagger-6' : ''}`}>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Plus Lifetime Access & Updates</h3>
            <p className="text-lg md:text-xl text-gray-400 mb-8">
              The digital product landscape evolves constantly. You'll get every update, new module, and strategy added to the academy forever.
            </p>
            <Link href="#pricing" className="cta-button inline-block">
              Get Digital Products Academy
            </Link>
          </div>
        </div>
      </section>

      {/* 8. Bonuses Section */}
      <section className="section-spacing bg-zinc-900/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={bonusAnimation.elementRef}
            className={`text-center mb-16 scroll-fade-up ${bonusAnimation.isVisible ? 'visible' : ''}`}
          >
            <SectionHeader
              badge="INCREDIBLE BONUSES"
              badgeColor="bg-zinc-900 border border-yellow-500 text-yellow-400"
              isVisible={bonusAnimation.isVisible}
              title="Get $3,794 in <span className='text-yellow-400'>Premium Bonuses</span> FREE"
              subtitle="These bonuses alone are worth more than most courses. But you get them FREE today."
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "📚 50+ Product Templates",
                value: "$797",
                description: "Done-for-you templates for courses, eBooks, worksheets, checklists, and more. Just customize with your content and launch immediately."
              },
              {
                title: "💰 Pricing Calculator Tool",
                value: "$297",
                description: "Scientific pricing calculator that determines the optimal price point for maximum revenue based on your niche, competition, and value proposition."
              },
              {
                title: "📧 Email Sequence Library",
                value: "$697",
                description: "100+ high-converting email templates for launches, nurturing, sales, and customer success. Copy, paste, and customize for instant results."
              },
              {
                title: "🎯 Launch Checklist System",
                value: "$197",
                description: "Step-by-step launch checklists that ensure nothing falls through the cracks. From pre-launch to post-launch optimization - every detail covered."
              },
              {
                title: "📊 Analytics & Tracking Templates",
                value: "$397",
                description: "Spreadsheet templates and dashboard setups to track every metric that matters. Know exactly what's working and what needs improvement."
              },
              {
                title: "👥 Private Mastermind Access",
                value: "$1,997/year",
                description: "Exclusive access to our private community of successful digital product creators. Get feedback, ask questions, and network with winners."
              }
            ].map((bonus, index) => (
              <div
                key={index}
                ref={bonusCards.setElementRef(index)}
                className={`bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 rounded-2xl p-6 hover:from-yellow-500/20 hover:to-orange-500/20 transition-all duration-300 hover-lift scroll-fade-up relative ${bonusCards.visibleElements[index] ? `visible scroll-stagger-${Math.min(index + 1, 6)}` : ''}`}
              >
                <ValueBadge 
                  value={bonus.value}
                  className="absolute top-4 right-4 bg-yellow-500"
                />
                <h3 className="text-lg md:text-xl font-bold mb-4 text-yellow-400">{bonus.title}</h3>
                <p className="text-gray-300 leading-relaxed">{bonus.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Pricing Section */}
      <section className="section-spacing bg-gradient-to-b from-green-900/20 to-emerald-900/20 border-t border-green-500/30" id="pricing">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={pricingAnimation.elementRef}
            className={`text-center mb-16 scroll-fade-up ${pricingAnimation.isVisible ? 'visible' : ''}`}
          >
            <SectionHeader
              badge="INSANE VALUE"
              badgeColor="bg-zinc-900 border border-green-500 text-green-400"
              isVisible={pricingAnimation.isVisible}
              title="This is <span className='text-green-400'>RIDICULOUS</span>"
              subtitle="Let's do the math on what you're actually getting today vs. learning this the hard way..."
            />
          </div>

          {/* Value Stack */}
          <div className={`max-w-4xl mx-auto mb-16 scroll-scale ${pricingAnimation.isVisible ? 'visible scroll-stagger-2' : ''}`}>
            <div className="bg-zinc-900 border border-green-500/30 rounded-3xl p-8 md:p-12">
              <h3 className="text-3xl font-bold mb-8 text-center text-green-400">Total Value Breakdown</h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center py-3 border-b border-zinc-700">
                  <span className="text-lg">8 Core Modules</span>
                  <span className="text-xl font-bold text-green-400">$1,577</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-zinc-700">
                  <span className="text-lg">50+ Product Templates</span>
                  <span className="text-xl font-bold text-green-400">$797</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-zinc-700">
                  <span className="text-lg">Pricing Calculator Tool</span>
                  <span className="text-xl font-bold text-green-400">$297</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-zinc-700">
                  <span className="text-lg">Email Sequence Library</span>
                  <span className="text-xl font-bold text-green-400">$697</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-zinc-700">
                  <span className="text-lg">Launch Checklist System</span>
                  <span className="text-xl font-bold text-green-400">$197</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-zinc-700">
                  <span className="text-lg">Analytics Templates</span>
                  <span className="text-xl font-bold text-green-400">$397</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-zinc-700">
                  <span className="text-lg">Private Mastermind</span>
                  <span className="text-xl font-bold text-green-400">$1,997</span>
                </div>
                
                <div className="flex justify-between items-center py-6 bg-green-900/20 rounded-lg px-6 mt-6">
                  <span className="text-2xl font-bold">TOTAL VALUE:</span>
                  <span className="text-3xl font-black text-green-400">$5,959</span>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing Comparison */}
          <div className={`mb-16 scroll-fade-up ${pricingAnimation.isVisible ? 'visible scroll-stagger-3' : ''}`}>
            <PricingComparison
              options={[
                {
                  name: "Trial & Error Method",
                  description: "LOST REVENUE",
                  price: "$10,000+",
                  features: [
                    "Years of failed launches",
                    "Wasted time and money", 
                    "No guidance or system",
                    "High stress and frustration",
                    "No guarantee of success"
                  ],
                  disabled: true
                },
                {
                  name: "Business Coach",
                  description: "PER MONTH",
                  price: "$5,000+",
                  features: [
                    "Generic business advice",
                    "Not digital product specific",
                    "Expensive ongoing costs",
                    "Limited availability",
                    "No proven system"
                  ]
                },
                {
                  name: "Digital Products Academy",
                  description: "ONE-TIME",
                  price: "$297",
                  badge: "🔥 BEST VALUE",
                  popular: true,
                  features: [
                    "Complete proven system",
                    "89% success rate",
                    "Lifetime access & updates",
                    "$5,959 worth of bonuses",
                    "Build scalable passive income"
                  ]
                }
              ]}
              isVisible={pricingAnimation.isVisible}
            />
          </div>

          {/* Scarcity & Urgency */}
          <div className={`max-w-4xl mx-auto text-center scroll-fade-up ${pricingAnimation.isVisible ? 'visible scroll-stagger-4' : ''}`}>
            <div className="bg-zinc-900 border border-red-500 rounded-3xl p-8 mb-8">
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-red-400">
                ⚠️ Limited Time Founder's Offer ⚠️
              </h3>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-zinc-900 rounded-2xl p-6">
                  <div className="text-2xl font-bold text-red-400 mb-2">48 HOURS</div>
                  <p className="text-gray-300">Price increases to $497 this weekend</p>
                </div>
                <div className="bg-zinc-900 rounded-2xl p-6">
                  <div className="text-2xl font-bold text-red-400 mb-2">TONIGHT</div>
                  <p className="text-gray-300">All bonuses expire at midnight</p>
                </div>
                <div className="bg-zinc-900 rounded-2xl p-6">
                  <div className="text-2xl font-bold text-red-400 mb-2">100 SPOTS</div>
                  <p className="text-gray-300">Limited to 100 founding members</p>
                </div>
              </div>
              
              <p className="text-xl text-gray-300 mb-6">
                I'm keeping this founding group small so I can personally ensure everyone succeeds. 
                Once we hit 100 members, the price doubles and bonuses disappear forever.
              </p>
              
              <div className="bg-yellow-500/20 border border-yellow-500 rounded-2xl p-6 mb-8">
                <h4 className="text-2xl font-bold text-yellow-400 mb-3">🚨 Don't Wait - Here's Why:</h4>
                <div className="text-left space-y-2 text-gray-300">
                  <p>• Every month you delay = $5K-$20K in lost potential passive income</p>
                  <p>• Digital products become more competitive every day - first movers win big</p>
                  <p>• The economy is shifting toward knowledge-based businesses</p>
                  <p>• These founder bonuses will NEVER be offered at this price again</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <Link
                href="#"
                className="inline-block bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold py-4 px-12 rounded-2xl text-2xl transition-all duration-300 transform hover:scale-105 animate-pulse"
              >
                🚀 GET DIGITAL PRODUCTS ACADEMY - $297 🚀
              </Link>
              
              <p className="text-sm text-gray-400">
                ✅ Instant Access • ✅ Lifetime Updates • ✅ 30-Day Money-Back Guarantee
              </p>
              
              <div className="bg-zinc-900 border border-green-500 rounded-2xl p-6 max-w-2xl mx-auto">
                <h4 className="text-xl font-bold text-green-400 mb-3">💯 Zero-Risk Guarantee</h4>
                <p className="text-gray-300">
                  Try Digital Products Academy for 30 days. If you don't create a profitable product idea 
                  and clear launch plan, I'll refund every penny. No questions asked.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Testimonials Section */}
      <section className="section-spacing bg-zinc-900/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={testimonialsAnimation.elementRef}
            className={`text-center mb-16 scroll-fade-up ${testimonialsAnimation.isVisible ? 'visible' : ''}`}
          >
            <SectionHeader
              badge="SUCCESS STORIES"
              badgeColor="bg-zinc-900 border border-blue-500 text-blue-400"
              title="What <span className='text-blue-400'>Digital Product</span> Students Are Saying..."
              isVisible={testimonialsAnimation.isVisible}
              subtitle="Real entrepreneurs sharing their transformation stories."
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto mb-16">
            {[
              {
                name: "Jennifer Martinez",
                role: "Life Coach • $45K/Month",
                avatar: "https://randomuser.me/api/portraits/women/65.jpg",
                content: "Digital Products Academy changed my life! I went from struggling to get coaching clients to running a $45K/month digital empire. My signature course practically sells itself now. I help more people in a month than I used to help in a year!"
              },
              {
                name: "David Thompson",
                role: "Marketing Expert • $32K/Month",
                avatar: "https://randomuser.me/api/portraits/men/38.jpg",
                content: "I was burned out from client work when I found this system. Now I have 3 digital products generating consistent passive income. Last month I made $32K while traveling Europe. This isn't just a course - it's a complete business transformation!"
              },
              {
                name: "Sarah Kim",
                role: "Fitness Expert • $28K/Month",
                avatar: "https://randomuser.me/api/portraits/women/73.jpg",
                content: "From personal trainer making $3K/month to digital product creator making $28K/month! My online fitness programs have helped thousands of people while giving me complete time freedom. The pricing strategies alone 10x'd my income!"
              }
            ].map((testimonial, index) => (
              <div
                key={index}
                ref={testimonialCards.setElementRef(index)}
                className={`testimonial-card hover-lift scroll-fade-up ${testimonialCards.visibleElements[index] ? `visible scroll-stagger-${index + 1}` : ''}`}
              >
                <TestimonialCard 
                  name={testimonial.name}
                  role={testimonial.role.split(' • ')[0]}
                  image={testimonial.avatar}
                  testimonial={testimonial.content}
                  result={testimonial.role.split(' • ')[1]}
                  isVisible={testimonialCards.visibleElements[index]}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. FAQ Section */}
      <section className="section-spacing">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={faqAnimation.elementRef}
            className={`text-center mb-16 scroll-fade-up ${faqAnimation.isVisible ? 'visible' : ''}`}
          >
            <SectionHeader
              badge="FAQ"
              badgeColor="bg-zinc-900 border border-green-500 text-green-400"
              isVisible={faqAnimation.isVisible}
              title="Frequently Asked <span className='text-green-400'>Questions</span>"
              subtitle="Everything you need to know about building digital product empires."
            />
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "I don't have a big audience. Can I still make money with digital products?",
                answer: "Absolutely! You don't need thousands of followers to succeed. This system shows you how to find and convert your ideal customers without a massive audience. Many students started with under 500 followers and built 6-figure product businesses."
              },
              {
                question: "What if I don't know what product to create?",
                answer: "That's exactly what Module 1 covers! The Product Idea Validation process will help you identify profitable opportunities based on your existing knowledge and skills. You'll discover product ideas you never knew you had."
              },
              {
                question: "How quickly can I see results?",
                answer: "Most students have a validated product idea within 2 weeks and launch their first product within 4-6 weeks. Revenue typically starts flowing within 30-60 days of launch, depending on implementation speed."
              },
              {
                question: "Do I need technical skills to create digital products?",
                answer: "Not at all! This course focuses on non-technical product creation. You'll learn to use simple tools and platforms that require no coding or advanced technical knowledge. If you can use email, you can build digital products."
              },
              {
                question: "What types of digital products work best?",
                answer: "The best product depends on your niche and expertise. We cover all formats: online courses, eBooks, templates, tools, membership sites, and coaching programs. You'll learn which format matches your situation perfectly."
              },
              {
                question: "How is this different from other digital product courses?",
                answer: "Most courses focus on course creation. This is a complete business system covering ideation, validation, creation, pricing, marketing, and scaling. Plus, our 89% success rate speaks for itself - we focus on what actually works in the real world."
              },
              {
                question: "What if my niche is too competitive?",
                answer: "Every niche has competition, but that's actually good news - it means there's demand! You'll learn positioning strategies to stand out and capture your share of the market, even in crowded niches."
              },
              {
                question: "Do I need to spend money on ads?",
                answer: "No! Module 4 covers zero-ad launch strategies that have generated millions in sales. You'll learn organic marketing methods, partnerships, and launch sequences that create massive demand without paid advertising."
              },
              {
                question: "How much money can I realistically make?",
                answer: "Results vary, but students typically see $1K-$5K monthly within 90 days, scaling to $10K-$50K+ monthly within 6-12 months. Some achieve 6-figures annually, others build multi-million dollar businesses. Your success depends on implementation and market size."
              },
              {
                question: "What if I start and then get stuck?",
                answer: "You get lifetime access to our private mastermind community where successful students and I personally help troubleshoot challenges. Plus, the course includes detailed implementation guides and common problem solutions."
              },
              {
                question: "Is there a money-back guarantee?",
                answer: "Yes! 30-day money-back guarantee, no questions asked. If you don't have a clear, validated product idea and launch plan within 30 days, I'll refund every penny. I'm confident this system works."
              },
              {
                question: "Why is the price so low for such a comprehensive system?",
                answer: "This is a founder's launch price. I want to help as many people as possible escape the time-for-money trap and build real passive income. Once we reach 100 founding members, the price will increase significantly."
              }
            ].map((faq, index) => (
              <div
                key={index}
                ref={faqCards.setElementRef(index)}
                className={`bg-zinc-900 rounded-2xl p-6 md:p-8 hover-lift scroll-fade-up ${faqCards.visibleElements[index] ? `visible scroll-stagger-${Math.min(index + 1, 6)}` : ''}`}
              >
                <FAQCard {...faq} isVisible={faqCards.visibleElements[index]} />
              </div>
            ))}
          </div>

          <div className={`text-center mt-16 scroll-fade-up ${faqAnimation.isVisible ? 'visible scroll-stagger-6' : ''}`}>
            <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 border border-green-500/30 rounded-3xl p-8 max-w-3xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Still Have Questions?</h3>
              <p className="text-lg text-gray-300 mb-6">
                Join the private mastermind and get direct access to me and other successful digital product creators. 
                Your questions get answered by people who've already built profitable product businesses.
              </p>
              <Link
                href="#"
                className="cta-button inline-block text-lg"
              >
                Get Digital Products Academy & Ask Me Anything
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 12. Final CTA Section */}
      <section className="section-spacing bg-gradient-to-b from-green-900/20 to-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            ref={finalCtaAnimation.elementRef}
            className={`scroll-fade-up ${finalCtaAnimation.isVisible ? 'visible' : ''}`}
          >
            <div className="flex items-center justify-center mb-8">
              <div className="flex items-center space-x-2">
                <div className="flex">
                  <Image
                    src="https://ext.same-assets.com/1161517358/2822588328.webp"
                    alt="User"
                    width={24}
                    height={24}
                    className="w-6 h-6 rounded-full -mr-1"
                  />
                  <Image
                    src="https://ext.same-assets.com/1161517358/3376144705.webp"
                    alt="User"
                    width={24}
                    height={24}
                    className="w-6 h-6 rounded-full -mr-1"
                  />
                </div>
                <div className="flex text-yellow-400">
                  {'★'.repeat(5)}
                </div>
                <span className="text-sm text-gray-400">3,247+ successful students</span>
              </div>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Your Digital Empire Starts TODAY</h2>
            <p className="text-lg md:text-xl text-gray-400 mb-8">Join thousands of entrepreneurs who escaped the time-for-money trap and built scalable passive income streams</p>
            
            <div className="bg-gradient-to-r from-red-900/30 to-orange-900/30 border border-red-500 rounded-2xl p-6 mb-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-red-400 mb-3">⏰ FINAL WARNING</h3>
              <p className="text-gray-300 mb-4">
                This $297 founder's price and $5,959 in bonuses expire at MIDNIGHT tonight. After that, you'll pay $497 without any bonuses.
              </p>
              <p className="text-lg font-bold text-yellow-400">
                Don't let another year pass trading time for money while others build digital empires!
              </p>
            </div>
            
            <Link href="#pricing" className="inline-block bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold py-4 px-12 rounded-2xl text-2xl transition-all duration-300 transform hover:scale-105 animate-pulse mb-4">
              🚀 BUILD MY DIGITAL EMPIRE - $297 🚀
            </Link>
            
            <p className="text-sm text-gray-400 mb-6">
              ✅ Instant Access • ✅ 30-Day Guarantee • ✅ Lifetime Updates • ✅ $5,959 in Bonuses
            </p>
            
            <div className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto text-center">
              <div className="bg-zinc-900 rounded-lg p-4">
                <div className="text-2xl font-bold text-green-400">$2M+</div>
                <div className="text-sm text-gray-400">Student Revenue</div>
              </div>
              <div className="bg-zinc-900 rounded-lg p-4">
                <div className="text-2xl font-bold text-blue-400">3,247+</div>
                <div className="text-sm text-gray-400">Products Launched</div>
              </div>
              <div className="bg-zinc-900 rounded-lg p-4">
                <div className="text-2xl font-bold text-purple-400">89%</div>
                <div className="text-sm text-gray-400">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}