'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function N8NAutomationsPage() {
  // Scroll animations for different sections
  const heroAnimation = useScrollAnimation({ threshold: 0.2 })
  const problemAnimation = useScrollAnimation({ threshold: 0.1 })
  const whoForAnimation = useScrollAnimation({ threshold: 0.1 })
  const resultsAnimation = useScrollAnimation({ threshold: 0.1 })
  const modulesAnimation = useScrollAnimation({ threshold: 0.1 })
  const bonusesAnimation = useScrollAnimation({ threshold: 0.1 })
  const stackedAnimation = useScrollAnimation({ threshold: 0.1 })
  const expectAnimation = useScrollAnimation({ threshold: 0.1 })
  const pricingAnimation = useScrollAnimation({ threshold: 0.2 })
  const faqAnimation = useScrollAnimation({ threshold: 0.1 })
  const ctaAnimation = useScrollAnimation({ threshold: 0.3 })

  return (
    <div className="min-h-screen bg-dark">
      {/* Hero Section */}
      <section className="section-spacing">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={heroAnimation.elementRef}
            className={`text-center max-w-5xl mx-auto scroll-fade-up ${heroAnimation.isVisible ? 'visible' : ''}`}
          >
            <div className="mb-4">
              <span className="bg-red-600/20 text-red-400 px-4 py-2 rounded-full text-sm font-bold animate-pulse">
                🚨 EARLY BIRD ENDS IN 72 HOURS 🚨
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Stop Trading <span className="text-red-400">Time For Money</span> — Build <span className="text-purple-400">AI-Powered Automation Empire</span> That Works While You Sleep
            </h1>

            <p className="text-xl text-gray-400 mb-6">
              The complete <span className="text-purple-300">N8N AI Automation System</span> that lets <strong>non-technical entrepreneurs</strong> build million-dollar workflows without writing a single line of code
            </p>

            <div className="bg-yellow-600/20 border border-yellow-500/50 rounded-lg p-4 mb-8 max-w-3xl mx-auto">
              <p className="text-yellow-300 font-semibold text-lg">
                ⚡ While your competitors burn 40+ hours/week on manual tasks, you'll be scaling 10x faster with AI automation that never sleeps, never calls in sick, and never asks for a raise
              </p>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
              <Link href="#packages" className="cta-button inline-block text-lg btn-animate animate-glow hover-lift px-8 py-4">
                🔥 Get Instant Access - Complete Automation System
              </Link>
              <div className="text-center">
                <p className="text-sm text-green-400 font-bold">Complete N8N mastery + lifetime updates included</p>
                <p className="text-xs text-gray-400">Then cart closes for 6 months</p>
              </div>
            </div>

            {/* Countdown Timer */}
            <div className="bg-zinc-900 border border-red-600/50 rounded-lg p-4 mb-8 max-w-lg mx-auto">
              <p className="text-red-300 font-bold mb-2">⏰ EARLY BIRD DEADLINE:</p>
              <div className="flex justify-center space-x-4 text-white">
                <div className="text-center">
                  <div className="text-2xl font-bold">02</div>
                  <div className="text-xs">DAYS</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">23</div>
                  <div className="text-xs">HOURS</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">45</div>
                  <div className="text-xs">MINS</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">12</div>
                  <div className="text-xs">SECS</div>
                </div>
              </div>
            </div>

            {/* Reviews */}
            <div className="flex items-center justify-center">
              <div className="flex items-center space-x-2">
                <div className="flex">
                  <Image
                    src="https://ext.same-assets.com/1161517358/1620887224.webp"
                    alt="User"
                    width={24}
                    height={24}
                    className="w-6 h-6 rounded-full -mr-1"
                  />
                  <Image
                    src="https://ext.same-assets.com/1161517358/447445188.webp"
                    alt="User"
                    width={24}
                    height={24}
                    className="w-6 h-6 rounded-full -mr-1"
                  />
                </div>
                <div className="flex text-yellow-400">
                  {'★'.repeat(5)}
                </div>
                <span className="text-sm text-gray-400">2,847+ students saving 40+ hours/week</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="section-spacing">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={problemAnimation.elementRef}
            className={`text-center mb-16 scroll-fade-up ${problemAnimation.isVisible ? 'visible' : ''}`}
          >
            <p className="text-sm text-red-400 uppercase tracking-wider mb-4">THE BRUTAL TRUTH</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              You're Still Living In <span className="text-red-400">1999</span> While Your Competitors Build <span className="text-purple-400">AI Empires</span>
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-4xl mx-auto">
              Every day you delay automation is another day your competitors scale 10x faster while you're stuck in the manual labor trap...
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className={`bg-zinc-900 border border-red-600/30 rounded-lg p-6 scroll-fade-up ${problemAnimation.isVisible ? 'visible scroll-stagger-1' : ''}`}>
              <div className="text-red-400 text-3xl mb-4">😫</div>
              <h3 className="text-xl font-bold mb-3 text-red-300">Still Doing Everything Manually</h3>
              <p className="text-gray-400 text-sm">
                Posting on social media one by one, responding to emails individually, updating spreadsheets by hand... living like it's 1999 while AI revolutionizes everything around you.
              </p>
            </div>

            <div className={`bg-zinc-900 border border-red-600/30 rounded-lg p-6 scroll-fade-up ${problemAnimation.isVisible ? 'visible scroll-stagger-2' : ''}`}>
              <div className="text-red-400 text-3xl mb-4">⏰</div>
              <h3 className="text-xl font-bold mb-3 text-red-300">Burning 40+ Hours/Week</h3>
              <p className="text-gray-400 text-sm">
                Trapped in the time-for-money prison, working nights and weekends on repetitive tasks that could be automated in minutes. Your competitors are scaling while you're stuck in operational quicksand.
              </p>
            </div>

            <div className={`bg-zinc-900 border border-red-600/30 rounded-lg p-6 scroll-fade-up ${problemAnimation.isVisible ? 'visible scroll-stagger-3' : ''}`}>
              <div className="text-red-400 text-3xl mb-4">🔥</div>
              <h3 className="text-xl font-bold mb-3 text-red-300">"Too Technical" Excuse</h3>
              <p className="text-gray-400 text-sm">
                Watching the AI automation revolution pass you by because you think it's "too technical" or "too expensive" — meanwhile 12-year-olds are building million-dollar automated businesses.
              </p>
            </div>

            <div className={`bg-zinc-900 border border-red-600/30 rounded-lg p-6 scroll-fade-up ${problemAnimation.isVisible ? 'visible scroll-stagger-4' : ''}`}>
              <div className="text-red-400 text-3xl mb-4">💸</div>
              <h3 className="text-xl font-bold mb-3 text-red-300">Leaving $50K+ On The Table</h3>
              <p className="text-gray-400 text-sm">
                Your manual processes are costing you THOUSANDS every month in lost opportunities, missed leads, delayed responses, and human errors that automated systems would eliminate completely.
              </p>
            </div>

            <div className={`bg-zinc-900 border border-red-600/30 rounded-lg p-6 scroll-fade-up ${problemAnimation.isVisible ? 'visible scroll-stagger-5' : ''}`}>
              <div className="text-red-400 text-3xl mb-4">📈</div>
              <h3 className="text-xl font-bold mb-3 text-red-300">Competitors Scaling 10x Faster</h3>
              <p className="text-gray-400 text-sm">
                While you're manually managing everything, smart entrepreneurs are building automated empires that work 24/7. They're capturing the market while you're stuck managing instead of growing.
              </p>
            </div>

            <div className={`bg-zinc-900 border border-red-600/30 rounded-lg p-6 scroll-fade-up ${problemAnimation.isVisible ? 'visible scroll-stagger-6' : ''}`}>
              <div className="text-red-400 text-3xl mb-4">😴</div>
              <h3 className="text-xl font-bold mb-3 text-red-300">Business Dies When You Sleep</h3>
              <p className="text-gray-400 text-sm">
                Your business literally stops making money when you're not actively working. No lead capture at night, no customer service on weekends, no content publishing while you're on vacation.
              </p>
            </div>
          </div>

          <div className={`text-center bg-yellow-600/10 border border-yellow-500/30 rounded-lg p-8 scroll-fade-up ${problemAnimation.isVisible ? 'visible' : ''}`}>
            <h3 className="text-2xl font-bold mb-4 text-yellow-300">⚡ The Cold Reality Check:</h3>
            <p className="text-lg text-gray-300 mb-6">
              Every single day you delay automation, your competitors gain an unfair advantage that becomes HARDER to overcome. 
              The entrepreneurs building automated systems today will dominate their markets for the next decade.
            </p>
            <p className="text-red-400 font-bold text-xl">
              You can't afford to wait another day... 
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="section-spacing bg-purple-900/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={whoForAnimation.elementRef}
            className={`text-center mb-16 scroll-fade-up ${whoForAnimation.isVisible ? 'visible' : ''}`}
          >
            <p className="text-sm text-purple-400 uppercase tracking-wider mb-4">THE BREAKTHROUGH SOLUTION</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Meet <span className="text-purple-400">N8N</span> — The <span className="text-green-400">"No-Code"</span> Automation Revolution
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-4xl mx-auto">
              Finally, an automation platform that doesn't require a computer science degree or $100K developer budget...
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className={`bg-zinc-900 border border-green-600/30 rounded-lg p-6 text-center scroll-fade-up ${whoForAnimation.isVisible ? 'visible scroll-stagger-1' : ''}`}>
              <div className="text-green-400 text-4xl mb-4">🧩</div>
              <h3 className="text-xl font-bold mb-3 text-green-300">Drag & Drop Interface</h3>
              <p className="text-gray-400 text-sm">
                Build complex automations by simply dragging boxes and connecting them — no coding, no technical knowledge, no $200/hour developers.
              </p>
            </div>

            <div className={`bg-zinc-900 border border-green-600/30 rounded-lg p-6 text-center scroll-fade-up ${whoForAnimation.isVisible ? 'visible scroll-stagger-2' : ''}`}>
              <div className="text-green-400 text-4xl mb-4">🔗</div>
              <h3 className="text-xl font-bold mb-3 text-green-300">800+ App Integrations</h3>
              <p className="text-gray-400 text-sm">
                Connect every tool in your business — Gmail, Slack, Instagram, Shopify, Stripe, ChatGPT, Google Sheets, and 790+ others.
              </p>
            </div>

            <div className={`bg-zinc-900 border border-green-600/30 rounded-lg p-6 text-center scroll-fade-up ${whoForAnimation.isVisible ? 'visible scroll-stagger-3' : ''}`}>
              <div className="text-green-400 text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-bold mb-3 text-green-300">AI-Powered Everything</h3>
              <p className="text-gray-400 text-sm">
                ChatGPT writes your emails, Claude generates content, AI analyzes data, creates images, and makes decisions — all automated.
              </p>
            </div>

            <div className={`bg-zinc-900 border border-green-600/30 rounded-lg p-6 text-center scroll-fade-up ${whoForAnimation.isVisible ? 'visible scroll-stagger-4' : ''}`}>
              <div className="text-green-400 text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-3 text-green-300">Deploy In Minutes</h3>
              <p className="text-gray-400 text-sm">
                What used to take months of development now takes minutes. Build, test, and deploy automations faster than your competition can say "manual process."
              </p>
            </div>

            <div className={`bg-zinc-900 border border-green-600/30 rounded-lg p-6 text-center scroll-fade-up ${whoForAnimation.isVisible ? 'visible scroll-stagger-5' : ''}`}>
              <div className="text-green-400 text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold mb-3 text-green-300">$97/Month vs $50K Budget</h3>
              <p className="text-gray-400 text-sm">
                Why pay $50K+ for a development team when N8N gives you the same power for less than your Netflix subscription?
              </p>
            </div>

            <div className={`bg-zinc-900 border border-green-600/30 rounded-lg p-6 text-center scroll-fade-up ${whoForAnimation.isVisible ? 'visible scroll-stagger-6' : ''}`}>
              <div className="text-green-400 text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-bold mb-3 text-green-300">Works 24/7 Globally</h3>
              <p className="text-gray-400 text-sm">
                Your automations never sleep, never take vacations, never get sick. They work around the clock across all time zones capturing every opportunity.
              </p>
            </div>
          </div>

          <div className={`text-center bg-purple-600/10 border border-purple-500/30 rounded-lg p-8 scroll-fade-up ${whoForAnimation.isVisible ? 'visible' : ''}`}>
            <h3 className="text-2xl font-bold mb-4 text-purple-300">🚀 The Game-Changing Truth:</h3>
            <p className="text-lg text-gray-300 mb-6">
              N8N is the great equalizer — it gives small businesses and solopreneurs the same automation superpowers 
              that Fortune 500 companies pay millions for. The playing field just got leveled.
            </p>
            <Link href="#packages" className="cta-button inline-block btn-animate hover-lift">
              Show Me The Automations
            </Link>
          </div>
        </div>
      </section>

      {/* 12 Power Modules Section */}
      <section className="section-spacing">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={modulesAnimation.elementRef}
            className={`text-center mb-16 scroll-fade-up ${modulesAnimation.isVisible ? 'visible' : ''}`}
          >
            <p className="text-sm text-purple-400 uppercase tracking-wider mb-4">THE COMPLETE SYSTEM</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              12 Power-Packed Modules That Build Your <span className="text-purple-400">Automation Empire</span>
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-4xl mx-auto">
              Each module is designed to eliminate specific manual tasks that are bleeding your business dry...
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className={`bg-zinc-900/50 border border-purple-600/30 rounded-lg p-6 card-hover hover-lift scroll-fade-up ${modulesAnimation.isVisible ? 'visible scroll-stagger-1' : ''}`}>
              <div className="flex items-center justify-between mb-4">
                <span className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm font-bold">MODULE 1</span>
                <span className="text-green-400 font-bold text-sm">$497 VALUE</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-purple-300">N8N Foundations & Setup</h3>
              <p className="text-gray-400 text-sm mb-4">
                Master the N8N interface, create your first automations, understand nodes and connections. Zero to automation hero in 2 hours.
              </p>
              <ul className="text-xs text-gray-500 space-y-1">
                <li>✓ Complete N8N installation & configuration</li>
                <li>✓ Understanding workflows and execution</li>
                <li>✓ Debugging and error handling</li>
                <li>✓ Security best practices</li>
              </ul>
            </div>

            <div className={`bg-zinc-900/50 border border-purple-600/30 rounded-lg p-6 card-hover hover-lift scroll-fade-up ${modulesAnimation.isVisible ? 'visible scroll-stagger-2' : ''}`}>
              <div className="flex items-center justify-between mb-4">
                <span className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm font-bold">MODULE 2</span>
                <span className="text-green-400 font-bold text-sm">$197 VALUE</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-purple-300">AI Integration Mastery</h3>
              <p className="text-gray-400 text-sm mb-4">
                Connect ChatGPT, Claude, Midjourney, and 50+ AI tools. Build AI-powered content machines that never sleep.
              </p>
              <ul className="text-xs text-gray-500 space-y-1">
                <li>✓ ChatGPT API integration & advanced prompts</li>
                <li>✓ Claude content generation workflows</li>
                <li>✓ AI image generation automation</li>
                <li>✓ Voice AI and speech-to-text systems</li>
              </ul>
            </div>

            <div className={`bg-zinc-900/50 border border-purple-600/30 rounded-lg p-6 card-hover hover-lift scroll-fade-up ${modulesAnimation.isVisible ? 'visible scroll-stagger-3' : ''}`}>
              <div className="flex items-center justify-between mb-4">
                <span className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm font-bold">MODULE 3</span>
                <span className="text-green-400 font-bold text-sm">$147 VALUE</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-purple-300">Social Media Automation</h3>
              <p className="text-gray-400 text-sm mb-4">
                Automate posting, engagement, DMs, and growth across Instagram, Twitter, LinkedIn, TikTok, and Facebook.
              </p>
              <ul className="text-xs text-gray-500 space-y-1">
                <li>✓ Multi-platform content scheduling</li>
                <li>✓ Automated engagement and replies</li>
                <li>✓ Hashtag research and optimization</li>
                <li>✓ Growth hacking workflows</li>
              </ul>
            </div>

            <div className={`bg-zinc-900/50 border border-purple-600/30 rounded-lg p-6 card-hover hover-lift scroll-fade-up ${modulesAnimation.isVisible ? 'visible scroll-stagger-4' : ''}`}>
              <div className="flex items-center justify-between mb-4">
                <span className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm font-bold">MODULE 4</span>
                <span className="text-green-400 font-bold text-sm">$127 VALUE</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-purple-300">Email Marketing Machines</h3>
              <p className="text-gray-400 text-sm mb-4">
                Build intelligent email sequences that nurture leads, recover abandoned carts, and maximize lifetime value.
              </p>
              <ul className="text-xs text-gray-500 space-y-1">
                <li>✓ Automated email sequences</li>
                <li>✓ Behavioral trigger campaigns</li>
                <li>✓ Personalization at scale</li>
                <li>✓ A/B testing automation</li>
              </ul>
            </div>

            <div className={`bg-zinc-900/50 border border-purple-600/30 rounded-lg p-6 card-hover hover-lift scroll-fade-up ${modulesAnimation.isVisible ? 'visible scroll-stagger-5' : ''}`}>
              <div className="flex items-center justify-between mb-4">
                <span className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm font-bold">MODULE 5</span>
                <span className="text-green-400 font-bold text-sm">$997 VALUE</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-purple-300">Content Generation Systems</h3>
              <p className="text-gray-400 text-sm mb-4">
                AI-powered content creation for blogs, social media, emails, and ads. Create 100+ pieces daily on autopilot.
              </p>
              <ul className="text-xs text-gray-500 space-y-1">
                <li>✓ Blog post automation pipeline</li>
                <li>✓ Social content generation</li>
                <li>✓ Ad copy creation workflows</li>
                <li>✓ Content repurposing systems</li>
              </ul>
            </div>

            <div className={`bg-zinc-900/50 border border-purple-600/30 rounded-lg p-6 card-hover hover-lift scroll-fade-up ${modulesAnimation.isVisible ? 'visible scroll-stagger-6' : ''}`}>
              <div className="flex items-center justify-between mb-4">
                <span className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm font-bold">MODULE 6</span>
                <span className="text-green-400 font-bold text-sm">$127 VALUE</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-purple-300">Data Scraping & Processing</h3>
              <p className="text-gray-400 text-sm mb-4">
                Extract valuable data from any website, clean it, analyze it, and turn it into actionable business intelligence.
              </p>
              <ul className="text-xs text-gray-500 space-y-1">
                <li>✓ Web scraping automation</li>
                <li>✓ Data cleaning and validation</li>
                <li>✓ Competitor monitoring</li>
                <li>✓ Market research automation</li>
              </ul>
            </div>

            <div className={`bg-zinc-900/50 border border-purple-600/30 rounded-lg p-6 card-hover hover-lift scroll-fade-up ${modulesAnimation.isVisible ? 'visible scroll-stagger-7' : ''}`}>
              <div className="flex items-center justify-between mb-4">
                <span className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm font-bold">MODULE 7</span>
                <span className="text-green-400 font-bold text-sm">$147 VALUE</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-purple-300">Client Onboarding Automation</h3>
              <p className="text-gray-400 text-sm mb-4">
                Automate the entire client journey from first contact to project delivery. Scale without adding overhead.
              </p>
              <ul className="text-xs text-gray-500 space-y-1">
                <li>✓ Lead qualification workflows</li>
                <li>✓ Contract and invoice automation</li>
                <li>✓ Project kickoff sequences</li>
                <li>✓ Client communication systems</li>
              </ul>
            </div>

            <div className={`bg-zinc-900/50 border border-purple-600/30 rounded-lg p-6 card-hover hover-lift scroll-fade-up ${modulesAnimation.isVisible ? 'visible scroll-stagger-8' : ''}`}>
              <div className="flex items-center justify-between mb-4">
                <span className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm font-bold">MODULE 8</span>
                <span className="text-green-400 font-bold text-sm">$197 VALUE</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-purple-300">Sales Funnel Automation</h3>
              <p className="text-gray-400 text-sm mb-4">
                Build high-converting sales funnels that qualify leads, handle objections, and close deals automatically.
              </p>
              <ul className="text-xs text-gray-500 space-y-1">
                <li>✓ Lead scoring and qualification</li>
                <li>✓ Follow-up sequence automation</li>
                <li>✓ Objection handling workflows</li>
                <li>✓ Upsell and cross-sell systems</li>
              </ul>
            </div>

            <div className={`bg-zinc-900/50 border border-purple-600/30 rounded-lg p-6 card-hover hover-lift scroll-fade-up ${modulesAnimation.isVisible ? 'visible scroll-stagger-9' : ''}`}>
              <div className="flex items-center justify-between mb-4">
                <span className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm font-bold">MODULE 9</span>
                <span className="text-green-400 font-bold text-sm">$127 VALUE</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-purple-300">Customer Support Bots</h3>
              <p className="text-gray-400 text-sm mb-4">
                AI-powered support that handles 80% of customer inquiries instantly, 24/7 across all channels.
              </p>
              <ul className="text-xs text-gray-500 space-y-1">
                <li>✓ Chatbot creation and training</li>
                <li>✓ Multi-channel support automation</li>
                <li>✓ Ticket routing and escalation</li>
                <li>✓ Knowledge base integration</li>
              </ul>
            </div>

            <div className={`bg-zinc-900/50 border border-purple-600/30 rounded-lg p-6 card-hover hover-lift scroll-fade-up ${modulesAnimation.isVisible ? 'visible scroll-stagger-10' : ''}`}>
              <div className="flex items-center justify-between mb-4">
                <span className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm font-bold">MODULE 10</span>
                <span className="text-green-400 font-bold text-sm">$497 VALUE</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-purple-300">Analytics & Reporting</h3>
              <p className="text-gray-400 text-sm mb-4">
                Automated dashboards and reports that track every metric that matters. Make data-driven decisions effortlessly.
              </p>
              <ul className="text-xs text-gray-500 space-y-1">
                <li>✓ Automated report generation</li>
                <li>✓ KPI tracking and alerts</li>
                <li>✓ Multi-platform data consolidation</li>
                <li>✓ Executive dashboard creation</li>
              </ul>
            </div>

            <div className={`bg-zinc-900/50 border border-purple-600/30 rounded-lg p-6 card-hover hover-lift scroll-fade-up ${modulesAnimation.isVisible ? 'visible scroll-stagger-11' : ''}`}>
              <div className="flex items-center justify-between mb-4">
                <span className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm font-bold">MODULE 11</span>
                <span className="text-green-400 font-bold text-sm">$997 VALUE</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-purple-300">Advanced AI Workflows</h3>
              <p className="text-gray-400 text-sm mb-4">
                Build complex AI-driven business processes that adapt, learn, and optimize themselves over time.
              </p>
              <ul className="text-xs text-gray-500 space-y-1">
                <li>✓ Machine learning integration</li>
                <li>✓ Predictive analytics workflows</li>
                <li>✓ AI decision trees</li>
                <li>✓ Self-optimizing systems</li>
              </ul>
            </div>

            <div className={`bg-zinc-900/50 border border-purple-600/30 rounded-lg p-6 card-hover hover-lift scroll-fade-up ${modulesAnimation.isVisible ? 'visible scroll-stagger-12' : ''}`}>
              <div className="flex items-center justify-between mb-4">
                <span className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm font-bold">MODULE 12</span>
                <span className="text-green-400 font-bold text-sm">$197 VALUE</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-purple-300">Scaling & Monetization</h3>
              <p className="text-gray-400 text-sm mb-4">
                Turn your automation skills into a 6-figure business. Build automation agencies, sell workflows, create SaaS products.
              </p>
              <ul className="text-xs text-gray-500 space-y-1">
                <li>✓ Automation agency blueprint</li>
                <li>✓ Workflow marketplace strategies</li>
                <li>✓ SaaS product development</li>
                <li>✓ Scaling to enterprise clients</li>
              </ul>
            </div>
          </div>

          <div className={`text-center bg-gradient-to-r from-purple-900/30 to-blue-900/30 border border-purple-500/30 rounded-lg p-8 scroll-fade-up ${modulesAnimation.isVisible ? 'visible' : ''}`}>
            <h3 className="text-3xl font-bold mb-4 text-purple-300">
              12 Modules × Complete System = <span className="text-green-400">$1,744 Total Value</span>
            </h3>
            <p className="text-lg text-gray-300 mb-6">
              Each module provides proven automation strategies that save hours of manual work and streamline your business operations.
              Together, they create an automation empire worth millions.
            </p>
            <Link href="#packages" className="cta-button inline-block text-lg btn-animate animate-glow hover-lift">
              I Want All 12 Modules NOW
            </Link>
          </div>
        </div>
      </section>

      {/* Game-Changing Bonuses Section */}
      <section className="section-spacing bg-gradient-to-b from-yellow-900/10 to-orange-900/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={bonusesAnimation.elementRef}
            className={`text-center mb-16 scroll-fade-up ${bonusesAnimation.isVisible ? 'visible' : ''}`}
          >
            <p className="text-sm text-yellow-400 uppercase tracking-wider mb-4">🎁 GAME-CHANGING BONUSES</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Wait... There's <span className="text-yellow-400">MORE</span>! 🔥
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-4xl mx-auto">
              We're adding $1,694 worth of exclusive bonuses included with your purchase
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className={`bg-gradient-to-br from-yellow-900/20 to-orange-900/20 border border-yellow-500/30 rounded-lg p-8 card-hover hover-lift scroll-fade-up ${bonusesAnimation.isVisible ? 'visible scroll-stagger-1' : ''}`}>
              <div className="flex items-center justify-between mb-4">
                <span className="bg-yellow-600/20 text-yellow-300 px-4 py-2 rounded-full text-sm font-bold">🎯 BONUS #1</span>
                <span className="text-green-400 font-bold text-lg">$497 VALUE</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-yellow-300">100+ Ready-to-Deploy Workflows</h3>
              <p className="text-gray-400 mb-4">
                Plug-and-play automations that you can deploy in minutes. No setup, no configuration — just instant automation power.
              </p>
              <ul className="text-sm text-gray-300 space-y-2">
                <li>✓ Social media posting machines</li>
                <li>✓ Email marketing sequences</li>
                <li>✓ Lead generation systems</li>
                <li>✓ Customer service bots</li>
                <li>✓ Data processing workflows</li>
                <li>✓ Content creation pipelines</li>
              </ul>
            </div>

            <div className={`bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-500/30 rounded-lg p-8 card-hover hover-lift scroll-fade-up ${bonusesAnimation.isVisible ? 'visible scroll-stagger-2' : ''}`}>
              <div className="flex items-center justify-between mb-4">
                <span className="bg-blue-600/20 text-blue-300 px-4 py-2 rounded-full text-sm font-bold">🧠 BONUS #2</span>
                <span className="text-green-400 font-bold text-lg">$247 VALUE</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-300">AI Prompt Library (1,000+ Prompts)</h3>
              <p className="text-gray-400 mb-4">
                Professional AI prompts tested across hundreds of successful automation projects.
              </p>
              <ul className="text-sm text-gray-300 space-y-2">
                <li>✓ Content creation prompts</li>
                <li>✓ Email marketing prompts</li>
                <li>✓ Social media prompts</li>
                <li>✓ Sales copy prompts</li>
                <li>✓ Customer service prompts</li>
                <li>✓ Business strategy prompts</li>
              </ul>
            </div>

            <div className={`bg-gradient-to-br from-green-900/20 to-teal-900/20 border border-green-500/30 rounded-lg p-8 card-hover hover-lift scroll-fade-up ${bonusesAnimation.isVisible ? 'visible scroll-stagger-3' : ''}`}>
              <div className="flex items-center justify-between mb-4">
                <span className="bg-green-600/20 text-green-300 px-4 py-2 rounded-full text-sm font-bold">🔄 BONUS #3</span>
                <span className="text-green-400 font-bold text-lg">$497/YEAR</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-green-300">Lifetime Workflow Updates</h3>
              <p className="text-gray-400 mb-4">
                As N8N adds new integrations and AI tools evolve, you get all the updated workflows FREE forever.
              </p>
              <ul className="text-sm text-gray-300 space-y-2">
                <li>✓ Monthly new workflow releases</li>
                <li>✓ Platform integration updates</li>
                <li>✓ AI model improvements</li>
                <li>✓ Bug fixes and optimizations</li>
                <li>✓ Industry-specific workflows</li>
                <li>✓ Advanced technique tutorials</li>
              </ul>
            </div>

            <div className={`bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-lg p-8 card-hover hover-lift scroll-fade-up ${bonusesAnimation.isVisible ? 'visible scroll-stagger-4' : ''}`}>
              <div className="flex items-center justify-between mb-4">
                <span className="bg-purple-600/20 text-purple-300 px-4 py-2 rounded-full text-sm font-bold">👥 BONUS #4</span>
                <span className="text-green-400 font-bold text-lg">$797/YEAR</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-purple-300">Private Automation Community</h3>
              <p className="text-gray-400 mb-4">
                Join 2,800+ automation entrepreneurs sharing workflows, strategies, and crushing it together.
              </p>
              <ul className="text-sm text-gray-300 space-y-2">
                <li>✓ Direct access to me (Anyro)</li>
                <li>✓ Weekly live Q&A sessions</li>
                <li>✓ Workflow sharing and feedback</li>
                <li>✓ Business growth strategies</li>
                <li>✓ Partnership opportunities</li>
                <li>✓ First access to new content</li>
              </ul>
            </div>

            <div className={`bg-gradient-to-br from-red-900/20 to-orange-900/20 border border-red-500/30 rounded-lg p-8 card-hover hover-lift scroll-fade-up ${bonusesAnimation.isVisible ? 'visible scroll-stagger-5' : ''}`}>
              <div className="flex items-center justify-between mb-4">
                <span className="bg-red-600/20 text-red-300 px-4 py-2 rounded-full text-sm font-bold">🎯 BONUS #5</span>
                <span className="text-green-400 font-bold text-lg">$497 VALUE</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-red-300">1-on-1 Setup Session with Me</h3>
              <p className="text-gray-400 mb-4">
                Personal 60-minute session where I'll set up your first automation and answer all your questions.
              </p>
              <ul className="text-sm text-gray-300 space-y-2">
                <li>✓ Custom workflow for your business</li>
                <li>✓ Personalized automation strategy</li>
                <li>✓ Technical setup assistance</li>
                <li>✓ Goal setting and planning</li>
                <li>✓ Direct feedback on your ideas</li>
                <li>✓ Recorded session for reference</li>
              </ul>
            </div>

            <div className={`bg-gradient-to-br from-indigo-900/20 to-blue-900/20 border border-indigo-500/30 rounded-lg p-8 card-hover hover-lift scroll-fade-up ${bonusesAnimation.isVisible ? 'visible scroll-stagger-6' : ''}`}>
              <div className="flex items-center justify-between mb-4">
                <span className="bg-indigo-600/20 text-indigo-300 px-4 py-2 rounded-full text-sm font-bold">📋 BONUS #6</span>
                <span className="text-green-400 font-bold text-lg">$147 VALUE</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-indigo-300">Client Proposal Templates</h3>
              <p className="text-gray-400 mb-4">
                Professional proposal templates for automation services ranging from $1K-$10K projects.
              </p>
              <ul className="text-sm text-gray-300 space-y-2">
                <li>✓ 10 high-converting proposal templates</li>
                <li>✓ Pricing strategies and packages</li>
                <li>✓ Objection handling scripts</li>
                <li>✓ Case study presentations</li>
                <li>✓ Contract templates</li>
                <li>✓ Follow-up sequences</li>
              </ul>
            </div>

            <div className={`bg-gradient-to-br from-yellow-900/20 to-red-900/20 border border-yellow-500/30 rounded-lg p-8 card-hover hover-lift scroll-fade-up ${bonusesAnimation.isVisible ? 'visible scroll-stagger-7' : ''}`}>
              <div className="flex items-center justify-between mb-4">
                <span className="bg-yellow-600/20 text-yellow-300 px-4 py-2 rounded-full text-sm font-bold">🏢 BONUS #7</span>
                <span className="text-green-400 font-bold text-lg">$297 VALUE</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-yellow-300">Automation Agency Blueprint</h3>
              <p className="text-gray-400 mb-4">
                The complete playbook for building a 6-figure automation agency, including client acquisition, pricing, and scaling.
              </p>
              <ul className="text-sm text-gray-300 space-y-2">
                <li>✓ Agency setup and structure</li>
                <li>✓ Client acquisition strategies</li>
                <li>✓ Service packages and pricing</li>
                <li>✓ Team building and scaling</li>
                <li>✓ Legal and business setup</li>
                <li>✓ Case studies and examples</li>
              </ul>
            </div>
          </div>

          <div className={`text-center bg-gradient-to-r from-yellow-900/30 to-orange-900/30 border border-yellow-500/50 rounded-lg p-8 scroll-fade-up ${bonusesAnimation.isVisible ? 'visible' : ''}`}>
            <h3 className="text-3xl font-bold mb-4 text-yellow-300">
              🎁 Total Bonus Value: <span className="text-green-400">$1,694</span>
            </h3>
            <p className="text-lg text-gray-300 mb-6">
              These bonuses alone are worth more than most complete automation courses. 
              But they're disappearing at midnight when the early bird pricing ends...
            </p>
            <div className="bg-red-600/20 border border-red-500/50 rounded-lg p-4 mb-6">
              <p className="text-red-300 font-bold text-lg">
                🎆 INCLUDED: All bonuses worth $1,694 included with purchase
              </p>
            </div>
            <Link href="#packages" className="cta-button inline-block text-lg btn-animate animate-glow hover-lift">
              Grab All Bonuses Before They're Gone
            </Link>
          </div>
        </div>
      </section>

      {/* Value Stack Section */}
      <section className="section-spacing bg-zinc-900/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={stackedAnimation.elementRef}
            className={`text-center mb-16 scroll-fade-up ${stackedAnimation.isVisible ? 'visible' : ''}`}
          >
            <p className="text-sm text-green-400 uppercase tracking-wider mb-4">INSANE VALUE STACK</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What You're Really Getting <span className="text-green-400">TODAY</span>
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-4xl mx-auto">
              Let's break down the massive value you're getting vs. the alternatives...
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className={`bg-zinc-800/50 border border-zinc-600 rounded-lg p-8 mb-8 scroll-fade-up ${stackedAnimation.isVisible ? 'visible' : ''}`}>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-zinc-600 pb-4">
                  <span className="text-gray-300">12 Power-Packed Modules</span>
                  <span className="text-green-400 font-bold">$1,744</span>
                </div>
                <div className="flex justify-between items-center border-b border-zinc-600 pb-4">
                  <span className="text-gray-300">100+ Ready-to-Deploy Workflows</span>
                  <span className="text-green-400 font-bold">$497</span>
                </div>
                <div className="flex justify-between items-center border-b border-zinc-600 pb-4">
                  <span className="text-gray-300">AI Prompt Library (1,000+ Prompts)</span>
                  <span className="text-green-400 font-bold">$247</span>
                </div>
                <div className="flex justify-between items-center border-b border-zinc-600 pb-4">
                  <span className="text-gray-300">Lifetime Workflow Updates</span>
                  <span className="text-green-400 font-bold">$497</span>
                </div>
                <div className="flex justify-between items-center border-b border-zinc-600 pb-4">
                  <span className="text-gray-300">Private Automation Community</span>
                  <span className="text-green-400 font-bold">$147</span>
                </div>
                <div className="flex justify-between items-center border-b border-zinc-600 pb-4">
                  <span className="text-gray-300">1-on-1 Setup Session</span>
                  <span className="text-green-400 font-bold">$497</span>
                </div>
                <div className="flex justify-between items-center border-b border-zinc-600 pb-4">
                  <span className="text-gray-300">Client Proposal Templates</span>
                  <span className="text-green-400 font-bold">$147</span>
                </div>
                <div className="flex justify-between items-center border-b border-zinc-600 pb-4">
                  <span className="text-gray-300">Automation Agency Blueprint</span>
                  <span className="text-green-400 font-bold">$497</span>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t-2 border-green-500">
                <div className="flex justify-between items-center text-xl font-bold">
                  <span className="text-white">TOTAL VALUE:</span>
                  <span className="text-green-400 text-3xl">$3,438</span>
                </div>
              </div>
            </div>

            <div className={`grid md:grid-cols-3 gap-8 mb-12 scroll-fade-up ${stackedAnimation.isVisible ? 'visible' : ''}`}>
              <div className="bg-zinc-900 border border-red-600/30 rounded-lg p-6 text-center">
                <h3 className="text-xl font-bold mb-3 text-red-300">Hiring Developers</h3>
                <p className="text-3xl font-bold text-red-400 mb-2">$15,000+</p>
                <p className="text-gray-400 text-sm">Plus months of development time and ongoing maintenance costs</p>
              </div>
              
              <div className="bg-zinc-900 border border-red-600/30 rounded-lg p-6 text-center">
                <h3 className="text-xl font-bold mb-3 text-red-300">Automation Agency</h3>
                <p className="text-3xl font-bold text-red-400 mb-2">$8,000+</p>
                <p className="text-gray-400 text-sm">For basic setup, no training, no ownership, ongoing fees</p>
              </div>
              
              <div className="bg-zinc-900 border border-green-600/30 rounded-lg p-6 text-center relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold">BEST VALUE</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-green-300">This Complete System</h3>
                <p className="text-3xl font-bold text-green-400 mb-2">$297</p>
                <p className="text-gray-400 text-sm">Lifetime access, complete training, all workflows, 1-on-1 support</p>
              </div>
            </div>

            <div className={`text-center bg-gradient-to-r from-green-900/30 to-blue-900/30 border border-green-500/30 rounded-lg p-8 scroll-fade-up ${stackedAnimation.isVisible ? 'visible' : ''}`}>
              <h3 className="text-2xl font-bold mb-4 text-green-300">💡 The Math Is Simple:</h3>
              <p className="text-lg text-gray-300 mb-6">
                If this system saves you just 10 hours per week (and it'll save you 40+), 
                that's $20,800 worth of your time per year at $40/hour. 
                This pays for itself in the first WEEK.
              </p>
              <p className="text-xl font-bold text-yellow-300">
                ROI: 5,200% in Year 1 (and it keeps compounding!)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section-spacing" id="packages">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={pricingAnimation.elementRef}
            className={`text-center mb-16 scroll-fade-up ${pricingAnimation.isVisible ? 'visible' : ''}`}
          >
            <p className="text-sm text-red-400 uppercase tracking-wider mb-4">🚨 FINAL WARNING</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Last Chance To Join The <span className="text-purple-400">Automation Revolution</span>
            </h2>
            <p className="text-xl text-gray-400 mt-4 max-w-3xl mx-auto">
              In 72 hours, this offer disappears and the price doubles. The cart closes for 6 months.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className={`bg-gradient-to-br from-purple-900/30 to-blue-900/30 border-2 border-purple-500/50 rounded-2xl p-8 text-center card-hover hover-lift scroll-fade-up ${pricingAnimation.isVisible ? 'visible' : ''}`}>
              
              {/* Urgency Banner */}
              <div className="bg-red-600/20 border border-red-500/50 rounded-lg p-4 mb-8">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <span className="animate-pulse text-red-400">🚨</span>
                  <span className="text-red-300 font-bold">EARLY BIRD EXPIRES IN:</span>
                  <span className="animate-pulse text-red-400">🚨</span>
                </div>
                <div className="flex justify-center space-x-4 text-white">
                  <div className="text-center">
                    <div className="text-xl font-bold">02</div>
                    <div className="text-xs">DAYS</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold">23</div>
                    <div className="text-xs">HOURS</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold">45</div>
                    <div className="text-xs">MINS</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold">12</div>
                    <div className="text-xs">SECS</div>
                  </div>
                </div>
              </div>

              {/* Pricing */}
              <div className="mb-8">
                <p className="text-gray-400 mb-2">Complete N8N AI Automation System</p>
                <p className="text-purple-300 mb-4 font-semibold">Full Lifetime Access + All Bonuses</p>
                
                <div className="bg-zinc-800/50 rounded-lg p-6 mb-6">
                  <div className="flex items-center justify-center space-x-4 mb-4">
                    <div className="text-center">
                      <span className="text-gray-400 line-through text-2xl">$3,438</span>
                      <p className="text-xs text-gray-500">Total Value</p>
                    </div>
                    <div className="text-center">
                      <span className="text-red-400 line-through text-2xl">$497</span>
                      <p className="text-xs text-gray-500">Regular Price</p>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-6xl font-bold text-green-400 mb-2">$297</div>
                    <p className="text-green-300 font-bold text-lg">Save $3,141 Today!</p>
                    <p className="text-gray-400 text-sm">One-time payment • No recurring fees • Lifetime access</p>
                  </div>
                </div>

                <div className="bg-yellow-600/10 border border-yellow-500/30 rounded-lg p-4 mb-6">
                  <p className="text-yellow-300 font-bold">⚡ Payment Plan: Pay in 2 installments of $149</p>
                  <p className="text-gray-400 text-sm">30 days apart • Same lifetime access</p>
                </div>
              </div>

              {/* What's Included */}
              <div className="text-left mb-8 space-y-3">
                <div className="flex items-start space-x-3">
                  <span className="text-green-400 font-bold mt-1">✓</span>
                  <span className="text-gray-300"><strong className="text-purple-400">12 Power Modules</strong> - Complete automation mastery ($1,744 value)</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-green-400 font-bold mt-1">✓</span>
                  <span className="text-gray-300"><strong className="text-yellow-400">100+ Ready Workflows</strong> - Deploy in minutes ($497 value)</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-green-400 font-bold mt-1">✓</span>
                  <span className="text-gray-300"><strong className="text-blue-400">1,000+ AI Prompts</strong> - Professional prompt library ($247 value)</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-green-400 font-bold mt-1">✓</span>
                  <span className="text-gray-300"><strong className="text-green-400">Lifetime Updates</strong> - Forever access to new workflows ($497/year value)</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-green-400 font-bold mt-1">✓</span>
                  <span className="text-gray-300"><strong className="text-purple-400">Private Community</strong> - Automation entrepreneurs ($147/year value)</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-green-400 font-bold mt-1">✓</span>
                  <span className="text-gray-300"><strong className="text-red-400">1-on-1 Session</strong> - Personal setup with me ($147 value)</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-green-400 font-bold mt-1">✓</span>
                  <span className="text-gray-300"><strong className="text-indigo-400">Client Proposals</strong> - Sell $1K-$10K projects ($147 value)</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-green-400 font-bold mt-1">✓</span>
                  <span className="text-gray-300"><strong className="text-yellow-400">Agency Blueprint</strong> - Build automation business ($297 value)</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-4">
                <Link href="#" className="cta-button inline-block w-full text-center py-4 text-lg btn-animate animate-glow hover-lift">
                  🔥 GET INSTANT ACCESS - $297 (Save $3,141)
                </Link>
                
                <Link href="#" className="bg-zinc-700 hover:bg-zinc-600 text-white px-8 py-4 rounded-lg w-full inline-block text-center transition-colors">
                  💳 2 Payments of $149 (30 days apart)
                </Link>
              </div>

              {/* Guarantees */}
              <div className="mt-8 space-y-4">
                <div className="bg-zinc-900 border border-green-500/30 rounded-lg p-4">
                  <h4 className="text-green-300 font-bold mb-2">🛡️ 60-Day Money-Back Guarantee</h4>
                  <p className="text-gray-400 text-sm">Try everything risk-free. If you don't save 40+ hours in the first month, get your money back.</p>
                </div>
                
                <div className="bg-zinc-900 border border-blue-500/30 rounded-lg p-4">
                  <h4 className="text-blue-300 font-bold mb-2">⚡ Instant Access</h4>
                  <p className="text-gray-400 text-sm">Get immediate access to all 12 modules, workflows, and bonuses. Start automating in the next 30 minutes.</p>
                </div>
              </div>

              {/* Final Warning */}
              <div className="mt-8 bg-zinc-900 border border-red-500/50 rounded-lg p-6">
                <h4 className="text-red-300 font-bold text-lg mb-2">⚠️ FINAL WARNING</h4>
                <p className="text-gray-300 mb-3">
                  This complete automation system includes everything you need to master N8N and build profitable workflows.
                </p>
                <p className="text-red-400 font-bold">
                  Don't let your competitors get a 6-month head start building their automation empires.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-spacing bg-zinc-900/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={faqAnimation.elementRef}
            className={`text-center mb-16 scroll-fade-up ${faqAnimation.isVisible ? 'visible' : ''}`}
          >
            <p className="text-sm text-purple-400 uppercase tracking-wider mb-4">FREQUENTLY ASKED</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Questions That <span className="text-purple-400">Destroy Excuses</span>
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-4xl mx-auto">
              Every objection, concern, and excuse... handled below 👇
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className={`bg-zinc-800/50 border border-zinc-600 rounded-lg p-6 scroll-fade-up ${faqAnimation.isVisible ? 'visible scroll-stagger-1' : ''}`}>
              <h3 className="text-xl font-bold mb-3 text-purple-300">Q: "I'm not technical at all. Can I really do this?"</h3>
              <p className="text-gray-400">
                <strong>A:</strong> This is EXACTLY why N8N is perfect for you. It's drag-and-drop, no coding required. If you can use Gmail, you can build automations. Plus, you get 100+ ready-made workflows that work immediately, and a 1-on-1 session with me to set up your first automation personally.
              </p>
            </div>

            <div className={`bg-zinc-800/50 border border-zinc-600 rounded-lg p-6 scroll-fade-up ${faqAnimation.isVisible ? 'visible scroll-stagger-2' : ''}`}>
              <h3 className="text-xl font-bold mb-3 text-purple-300">Q: "What if N8N changes or shuts down?"</h3>
              <p className="text-gray-400">
                <strong>A:</strong> N8N is open-source (it can never "shut down") and backed by millions in funding. But even if it disappeared tomorrow, the automation principles you learn work with ANY platform (Zapier, Make, etc.). You're learning universal skills, not just one tool.
              </p>
            </div>

            <div className={`bg-zinc-800/50 border border-zinc-600 rounded-lg p-6 scroll-fade-up ${faqAnimation.isVisible ? 'visible scroll-stagger-3' : ''}`}>
              <h3 className="text-xl font-bold mb-3 text-purple-300">Q: "I don't have time to learn this right now..."</h3>
              <p className="text-gray-400">
                <strong>A:</strong> You don't have time NOT to learn this. You're burning 40+ hours per week on manual tasks. Module 1 takes 2 hours and will save you 10+ hours THIS WEEK. The busier you are, the MORE you need automation. The content is lifetime access - start when you want, but lock in this price today.
              </p>
            </div>

            <div className={`bg-zinc-800/50 border border-zinc-600 rounded-lg p-6 scroll-fade-up ${faqAnimation.isVisible ? 'visible scroll-stagger-4' : ''}`}>
              <h3 className="text-xl font-bold mb-3 text-purple-300">Q: "Can't I just figure this out on YouTube for free?"</h3>
              <p className="text-gray-400">
                <strong>A:</strong> Sure, spend 500+ hours piecing together random tutorials that don't work together, missing crucial steps, and getting frustrated. Meanwhile, your competitors using this system will capture the market. Free content is scattered, outdated, and incomplete. This is a complete, tested system that works.
              </p>
            </div>

            <div className={`bg-zinc-800/50 border border-zinc-600 rounded-lg p-6 scroll-fade-up ${faqAnimation.isVisible ? 'visible scroll-stagger-5' : ''}`}>
              <h3 className="text-xl font-bold mb-3 text-purple-300">Q: "What if I buy this and don't use it?"</h3>
              <p className="text-gray-400">
                <strong>A:</strong> Then you get your money back. 60-day guarantee, no questions asked. But here's the real question: What if you DON'T buy this and spend another year doing everything manually while your competitors build automated systems? The time savings alone make this worthwhile.
              </p>
            </div>

            <div className={`bg-zinc-800/50 border border-zinc-600 rounded-lg p-6 scroll-fade-up ${faqAnimation.isVisible ? 'visible scroll-stagger-6' : ''}`}>
              <h3 className="text-xl font-bold mb-3 text-purple-300">Q: "Is this just another course that doesn't work in the real world?"</h3>
              <p className="text-gray-400">
                <strong>A:</strong> This isn't theory - it's battle-tested workflows that are running right now in real businesses. You get 100+ working automations, not just lessons. Plus 2,800+ entrepreneurs in the community proving it works. Check the testimonials - these are real results, not fake screenshots.
              </p>
            </div>

            <div className={`bg-zinc-800/50 border border-zinc-600 rounded-lg p-6 scroll-fade-up ${faqAnimation.isVisible ? 'visible scroll-stagger-7' : ''}`}>
              <h3 className="text-xl font-bold mb-3 text-purple-300">Q: "What makes this different from other automation courses?"</h3>
              <p className="text-gray-400">
                <strong>A:</strong> Most courses teach you theory. This gives you 100+ working workflows you can deploy immediately. Most courses leave you hanging. This includes 1-on-1 setup, private community, and lifetime updates. Most courses cost $1K+. This is $297 with $3,438 worth of value.
              </p>
            </div>

            <div className={`bg-zinc-800/50 border border-zinc-600 rounded-lg p-6 scroll-fade-up ${faqAnimation.isVisible ? 'visible scroll-stagger-8' : ''}`}>
              <h3 className="text-xl font-bold mb-3 text-purple-300">Q: "I'm worried about the ongoing costs of N8N and other tools..."</h3>
              <p className="text-gray-400">
                <strong>A:</strong> N8N starts free for 5,000 operations/month (most small businesses never exceed this). Even their paid plan is $20/month vs $100+/hour developers. The tools pay for themselves with the first automation. Plus you learn to build systems that MAKE money, not just save it.
              </p>
            </div>

            <div className={`bg-zinc-800/50 border border-zinc-600 rounded-lg p-6 scroll-fade-up ${faqAnimation.isVisible ? 'visible scroll-stagger-9' : ''}`}>
              <h3 className="text-xl font-bold mb-3 text-purple-300">Q: "What if my industry is too unique/complex for automation?"</h3>
              <p className="text-gray-400">
                <strong>A:</strong> I've never seen an industry that can't benefit from email automation, social media scheduling, lead capture, customer onboarding, or data processing. N8N connects to 800+ apps - if you use any software, it can be automated. Plus the community has entrepreneurs from every industry sharing strategies.
              </p>
            </div>

            <div className={`bg-zinc-800/50 border border-zinc-600 rounded-lg p-6 scroll-fade-up ${faqAnimation.isVisible ? 'visible scroll-stagger-10' : ''}`}>
              <h3 className="text-xl font-bold mb-3 text-purple-300">Q: "Can I really make money with automation services?"</h3>
              <p className="text-gray-400">
                <strong>A:</strong> Businesses pay $5K-$50K for automation projects because manual processes cost them MILLIONS. You get the client proposal templates and agency blueprint to start immediately. The community has members charging $200+/hour for automation work. The demand is MASSIVE and growing.
              </p>
            </div>

            <div className={`bg-zinc-800/50 border border-zinc-600 rounded-lg p-6 scroll-fade-up ${faqAnimation.isVisible ? 'visible scroll-stagger-11' : ''}`}>
              <h3 className="text-xl font-bold mb-3 text-purple-300">Q: "What if I get stuck or need help?"</h3>
              <p className="text-gray-400">
                <strong>A:</strong> You get direct access to me, 2,800+ community members, weekly live Q&A sessions, and a personal 1-on-1 setup session. Plus the workflows are pre-built and tested. You're never alone - there's an entire support system to ensure your success.
              </p>
            </div>

            <div className={`bg-zinc-800/50 border border-zinc-600 rounded-lg p-6 scroll-fade-up ${faqAnimation.isVisible ? 'visible scroll-stagger-12' : ''}`}>
              <h3 className="text-xl font-bold mb-3 text-purple-300">Q: "Why is this so much cheaper than hiring developers?"</h3>
              <p className="text-gray-400">
                <strong>A:</strong> Because I want to democratize automation. Big companies hoard this knowledge and charge $20K+. I'm giving you the same power for $297 because I believe small businesses deserve automation capabilities too. This is our standard pricing for complete access.
              </p>
            </div>

            <div className={`bg-zinc-800/50 border border-zinc-600 rounded-lg p-6 scroll-fade-up ${faqAnimation.isVisible ? 'visible scroll-stagger-13' : ''}`}>
              <h3 className="text-xl font-bold mb-3 text-purple-300">Q: "Is there a payment plan?"</h3>
              <p className="text-gray-400">
                <strong>A:</strong> Yes, you can pay in 2 installments of $149 (30 days apart) with the same lifetime access. This system will generate that money back quickly through time savings and new opportunities.
              </p>
            </div>

            <div className={`bg-zinc-800/50 border border-zinc-600 rounded-lg p-6 scroll-fade-up ${faqAnimation.isVisible ? 'visible scroll-stagger-14' : ''}`}>
              <h3 className="text-xl font-bold mb-3 text-purple-300">Q: "What happens after I purchase?"</h3>
              <p className="text-gray-400">
                <strong>A:</strong> You get instant access to everything - all 12 modules, 100+ workflows, bonuses, and community. You can start building your first automation in 30 minutes. You'll also get an email to schedule your 1-on-1 session with me within 48 hours.
              </p>
            </div>

            <div className={`bg-zinc-800/50 border border-zinc-600 rounded-lg p-6 scroll-fade-up ${faqAnimation.isVisible ? 'visible scroll-stagger-15' : ''}`}>
              <h3 className="text-xl font-bold mb-3 text-purple-300">Q: "Why should I trust you?"</h3>
              <p className="text-gray-400">
                <strong>A:</strong> Check the testimonials - real people, real results. I've been building automation systems for 10+ years and have helped 2,800+ entrepreneurs. Plus you have a 60-day money-back guarantee. I'm putting MY reputation on the line because I know this works.
              </p>
            </div>
          </div>

          <div className={`text-center mt-16 scroll-fade-up ${faqAnimation.isVisible ? 'visible' : ''}`}>
            <div className="bg-zinc-900 border border-red-500/50 rounded-lg p-8 max-w-3xl mx-auto mb-8">
              <h3 className="text-2xl font-bold mb-4 text-red-300">🚨 No More Excuses</h3>
              <p className="text-lg text-gray-300 mb-6">
                Every question answered. Every objection handled. Every excuse destroyed.
                The only thing left is ACTION.
              </p>
              <p className="text-red-400 font-bold text-xl">
                Your competitors aren't waiting. Neither should you.
              </p>
            </div>
            
            <Link href="#packages" className="cta-button inline-block text-lg btn-animate animate-glow hover-lift px-12 py-4">
              Stop Making Excuses - Start Automating Now
            </Link>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="section-spacing">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 scroll-fade-up ${ctaAnimation.isVisible ? 'visible' : ''}`}>
            <p className="text-sm text-green-400 uppercase tracking-wider mb-4">💰 INCOME AUTOMATION RESULTS</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Real Students Making <span className="text-green-400">Real Money</span> With Automation
            </h2>
            <p className="text-xl text-gray-400 mt-4 max-w-3xl mx-auto">
              These aren't fake testimonials. These are real entrepreneurs who stopped trading time for money and built automation empires...
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
            <div className={`bg-gradient-to-br from-green-900/20 to-blue-900/20 border border-green-500/30 rounded-lg p-6 card-hover hover-lift group scroll-fade-up ${ctaAnimation.isVisible ? 'visible scroll-stagger-1' : ''}`}>
              <div className="flex items-center mb-4">
                <Image
                  src="https://ext.same-assets.com/1161517358/366375215.webp"
                  alt="Marcus Rivera"
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full mr-4 group-hover:scale-110 transition-transform duration-300"
                />
                <div>
                  <h4 className="font-semibold group-hover:text-green-400 transition-colors duration-300">Marcus Rivera</h4>
                  <p className="text-sm text-gray-400">E-commerce Entrepreneur</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4 group-hover:text-white transition-colors duration-300 text-sm">
                "I went from manually processing 50 orders/day to automating everything - customer emails, inventory updates, shipping notifications, even upsells. My revenue jumped from $8K to $47K/month while working 60% fewer hours. The automation handles everything while I sleep."
              </p>
              <div className="bg-green-600/10 border border-green-600/30 rounded-lg p-3 group-hover:bg-green-600/20 group-hover:border-green-500/50 transition-all duration-300">
                <p className="text-sm font-semibold text-green-300 group-hover:text-green-200 transition-colors duration-300">💰 $8K → $47K/month • 60% less work</p>
              </div>
            </div>

            <div className={`bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-lg p-6 card-hover hover-lift group scroll-fade-up ${ctaAnimation.isVisible ? 'visible scroll-stagger-2' : ''}`}>
              <div className="flex items-center mb-4">
                <Image
                  src="https://ext.same-assets.com/1161517358/640627202.jpeg"
                  alt="Jessica Chen"
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full mr-4 group-hover:scale-110 transition-transform duration-300"
                />
                <div>
                  <h4 className="font-semibold group-hover:text-purple-400 transition-colors duration-300">Jessica Chen</h4>
                  <p className="text-sm text-gray-400">Content Creator Agency</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4 group-hover:text-white transition-colors duration-300 text-sm">
                "I built an automation agency after taking this course. Started charging $5K for simple N8N setups, now doing $25K enterprise projects. My first client paid for the course 12x over. The agency blueprint is pure gold - I'm booked 3 months out."
              </p>
              <div className="bg-purple-600/10 border border-purple-600/30 rounded-lg p-3 group-hover:bg-purple-600/20 group-hover:border-purple-500/50 transition-all duration-300">
                <p className="text-sm font-semibold text-purple-300 group-hover:text-purple-200 transition-colors duration-300">🚀 $5K → $25K projects • 3 months booked</p>
              </div>
            </div>

            <div className={`bg-gradient-to-br from-blue-900/20 to-teal-900/20 border border-blue-500/30 rounded-lg p-6 card-hover hover-lift group scroll-fade-up ${ctaAnimation.isVisible ? 'visible scroll-stagger-3' : ''}`}>
              <div className="flex items-center mb-4">
                <Image
                  src="https://ext.same-assets.com/1161517358/2128294924.webp"
                  alt="David Park"
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full mr-4 group-hover:scale-110 transition-transform duration-300"
                />
                <div>
                  <h4 className="font-semibold group-hover:text-blue-400 transition-colors duration-300">David Park</h4>
                  <p className="text-sm text-gray-400">Real Estate Investor</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4 group-hover:text-white transition-colors duration-300 text-sm">
                "Automated my entire lead generation pipeline - web scraping, email sequences, deal analysis, even contract generation. Went from 2 deals/month to 15 deals/month. The AI handles initial screening so I only talk to qualified sellers. It's literally printing money."
              </p>
              <div className="bg-blue-600/10 border border-blue-600/30 rounded-lg p-3 group-hover:bg-blue-600/20 group-hover:border-blue-500/50 transition-all duration-300">
                <p className="text-sm font-semibold text-blue-300 group-hover:text-blue-200 transition-colors duration-300">📈 2 → 15 deals/month • Automated pipeline</p>
              </div>
            </div>

            <div className={`bg-gradient-to-br from-yellow-900/20 to-orange-900/20 border border-yellow-500/30 rounded-lg p-6 card-hover hover-lift group scroll-fade-up ${ctaAnimation.isVisible ? 'visible scroll-stagger-4' : ''}`}>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-yellow-600 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">AM</span>
                </div>
                <div>
                  <h4 className="font-semibold group-hover:text-yellow-400 transition-colors duration-300">Amanda Miller</h4>
                  <p className="text-sm text-gray-400">SaaS Founder</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4 group-hover:text-white transition-colors duration-300 text-sm">
                "Used N8N to automate our entire customer journey - from trial signup to cancellation win-back. Reduced churn by 47% and increased lifetime value by $2,300 per customer. The onboarding sequence alone generates an extra $180K/year in retained revenue."
              </p>
              <div className="bg-yellow-600/10 border border-yellow-600/30 rounded-lg p-3 group-hover:bg-yellow-600/20 group-hover:border-yellow-500/50 transition-all duration-300">
                <p className="text-sm font-semibold text-yellow-300 group-hover:text-yellow-200 transition-colors duration-300">💎 35% less churn • +$48K/year retained</p>
              </div>
            </div>

            <div className={`bg-gradient-to-br from-red-900/20 to-pink-900/20 border border-red-500/30 rounded-lg p-6 card-hover hover-lift group scroll-fade-up ${ctaAnimation.isVisible ? 'visible scroll-stagger-5' : ''}`}>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">TW</span>
                </div>
                <div>
                  <h4 className="font-semibold group-hover:text-red-400 transition-colors duration-300">Tom Wilson</h4>
                  <p className="text-sm text-gray-400">Digital Marketing Consultant</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4 group-hover:text-white transition-colors duration-300 text-sm">
                "Built automated social media machines for 47 clients using the workflows from this course. Each client pays $1,500/month for 'done-for-you' automation that runs itself. I work 20 hours/week and make $70K/month. It's the ultimate laptop lifestyle business."
              </p>
              <div className="bg-red-600/10 border border-red-600/30 rounded-lg p-3 group-hover:bg-red-600/20 group-hover:border-red-500/50 transition-all duration-300">
                <p className="text-sm font-semibold text-red-300 group-hover:text-red-200 transition-colors duration-300">🏖️ $70K/month • 20 hours/week • 47 clients</p>
              </div>
            </div>

            <div className={`bg-gradient-to-br from-indigo-900/20 to-purple-900/20 border border-indigo-500/30 rounded-lg p-6 card-hover hover-lift group scroll-fade-up ${ctaAnimation.isVisible ? 'visible scroll-stagger-6' : ''}`}>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">LH</span>
                </div>
                <div>
                  <h4 className="font-semibold group-hover:text-indigo-400 transition-colors duration-300">Lisa Hamilton</h4>
                  <p className="text-sm text-gray-400">E-learning Business Owner</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4 group-hover:text-white transition-colors duration-300 text-sm">
                "Automated my entire course business - from lead magnets to course delivery to affiliate management. Student success rate increased 73% with automated accountability sequences. Revenue grew from $12K to $89K/month while I focused on creating better content."
              </p>
              <div className="bg-indigo-600/10 border border-indigo-600/30 rounded-lg p-3 group-hover:bg-indigo-600/20 group-hover:border-indigo-500/50 transition-all duration-300">
                <p className="text-sm font-semibold text-indigo-300 group-hover:text-indigo-200 transition-colors duration-300">🎓 $12K → $89K/month • 73% student success</p>
              </div>
            </div>
          </div>

          <div className={`text-center scroll-fade-up ${ctaAnimation.isVisible ? 'visible' : ''}`}>
            <div className="bg-gradient-to-r from-green-900/30 to-blue-900/30 border border-green-500/30 rounded-lg p-8 max-w-4xl mx-auto mb-8">
              <h3 className="text-3xl font-bold mb-4 text-green-300">💰 The Common Thread?</h3>
              <p className="text-lg text-gray-300 mb-6">
                Every single one of these entrepreneurs stopped trading time for money and started building systems that work 24/7. 
                They're not special or "naturally technical" — they just took action while others made excuses.
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-green-400 mb-2">847%</div>
                  <p className="text-gray-400 text-sm">Average revenue increase</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-400 mb-2">68%</div>
                  <p className="text-gray-400 text-sm">Less time working</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-400 mb-2">100%</div>
                  <p className="text-gray-400 text-sm">Would do it again</p>
                </div>
              </div>
            </div>
            
            <h3 className="text-3xl font-bold mb-4">Your Turn To Join The <span className="text-green-400">Automation Elite</span></h3>
            <p className="text-xl text-gray-400 mb-8">The only difference between you and them is action. They stopped making excuses and started building.</p>
            <Link href="#packages" className="cta-button inline-block text-lg btn-animate animate-glow hover-lift px-12 py-4">
              I'm Ready To Build My Automation Empire
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-spacing bg-gradient-to-b from-purple-900/20 to-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            ref={ctaAnimation.elementRef}
            className={`scroll-fade-up ${ctaAnimation.isVisible ? 'visible' : ''}`}
          >
            <div className="max-w-4xl mx-auto mb-12">
              <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                The <span className="text-red-400">Automation Revolution</span> Is Here. 
                Are You <span className="text-purple-400">IN</span> or <span className="text-gray-500">OUT</span>?
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                In 10 years, there will be two types of entrepreneurs: those who built automated empires, and those who are still trading time for money. Which will you be?
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto mb-12">
              <div className="bg-zinc-900 border border-red-600/30 rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-4 text-red-300">😫 Path #1: Stay Manual</h3>
                <ul className="text-left space-y-3 text-gray-400 mb-6">
                  <li>❌ Keep working 60+ hours/week</li>
                  <li>❌ Watch competitors scale 10x faster</li>
                  <li>❌ Miss the AI automation wave</li>
                  <li>❌ Stay trapped in time-for-money prison</li>
                  <li>❌ Burn out while others build empires</li>
                  <li>❌ Regret not taking action today</li>
                </ul>
                <p className="text-red-400 font-bold">Cost: Your dreams, your freedom, your future</p>
              </div>

              <div className="bg-zinc-900 border border-green-600/30 rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-4 text-green-300">🚀 Path #2: Automate Everything</h3>
                <ul className="text-left space-y-3 text-gray-400 mb-6">
                  <li>✅ Build systems that work 24/7</li>
                  <li>✅ Scale without burning out</li>
                  <li>✅ Make money while you sleep</li>
                  <li>✅ Focus on strategy, not busy work</li>
                  <li>✅ Create true financial freedom</li>
                  <li>✅ Join the automation elite</li>
                </ul>
                <p className="text-green-400 font-bold">Investment: $397 (pays for itself in week 1)</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 border border-purple-500/50 rounded-lg p-8 mb-8">
              <h3 className="text-3xl font-bold mb-4 text-purple-300">⚡ This Is Your Moment</h3>
              <p className="text-lg text-gray-300 mb-6">
                Every great entrepreneur has a moment where they choose growth over comfort, action over excuses, systems over manual labor. 
                This is YOUR moment. The question is: will you take it?
              </p>
              <div className="bg-red-600/20 border border-red-500/50 rounded-lg p-4 mb-6">
                <p className="text-red-300 font-bold text-lg">
                  ⏰ 72 hours remaining • Price DOUBLES to $797 • Bonuses worth $8,679 disappear • Cart closes for 6 months
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <Link href="#packages" className="cta-button inline-block text-xl btn-animate animate-glow hover-lift px-16 py-6">
                YES! I Choose Automation Empire - $397
              </Link>
              
              <p className="text-gray-400">
                60-day money-back guarantee • Instant access • Lifetime updates • 1-on-1 support
              </p>
              
              <div className="text-sm text-gray-500 max-w-2xl mx-auto">
                <p className="mb-2">
                  ⚠️ <strong>Warning:</strong> This offer will not repeat. When the timer hits zero, the price doubles and stays doubled. 
                  The bonuses disappear forever. The cart closes for 6 months minimum.
                </p>
                <p>
                  Don't let analysis paralysis cost you your automation empire. Your competitors aren't waiting. Take action now.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
