import React from 'react'
import Link from 'next/link'
import { Metadata } from 'next'
import { generateBlogPostSchema } from '@/lib/blog-schema'
import { Zap, GitBranch, Filter, RotateCw, AlertTriangle, Code, DollarSign, Clock } from 'lucide-react'
import FAQSchema from '@/components/seo/FAQSchema'

// Comprehensive SEO Metadata
export const metadata: Metadata = {
  title: "Make App Automation: Complete Workflow Builder Guide 2026 | Visual Automation Platform",
  description: "Master Make.com (formerly Integromat) with this complete 2026 guide. Learn visual workflow automation, scenarios, routers, error handling, and advanced techniques that successful businesses use.",
  keywords: [
    "make app automation",
    "make.com guide",
    "integromat",
    "visual workflow builder",
    "make scenarios",
    "make vs zapier",
    "no-code automation",
    "workflow automation 2026",
    "make routers",
    "make iterators",
    "automation platform",
    "business automation",
    "make modules",
    "automation tools 2026"
  ],
  authors: [{ name: "Anyro", url: "https://iimagined.ai" }],
  creator: "IImagined.ai",
  publisher: "IImagined.ai",
  category: "Technology",
  openGraph: {
    title: "Make App Automation: Complete Workflow Builder Guide 2026",
    description: "Master Make.com (formerly Integromat) with this complete guide to visual workflow automation, scenarios, routers, and advanced techniques for 2026.",
    url: "https://iimagined.ai/blog/make-app-automation",
    siteName: "IImagined.ai",
    type: "article",
    publishedTime: "2026-02-28T10:00:00.000Z",
    modifiedTime: "2026-08-03T06:14:29.975Z",
    authors: ["Anyro"],
    tags: [
      "make app automation",
      "make.com",
      "integromat",
      "visual workflow",
      "automation platform",
      "no-code automation",
      "workflow builder",
      "business automation"
    ],
    images: [{
      url: "https://iimagined.ai/images/make-app-automation-og.jpg",
      width: 1200,
      height: 630,
      alt: "Make App Automation Guide 2026",
      type: "image/jpeg"
    }],
    locale: "en_US"
  },
  twitter: {
    card: "summary_large_image",
    site: "@iimagined_ai",
    creator: "@iimagined_ai",
    title: "Make App Automation: Complete Workflow Builder Guide 2026",
    description: "Master Make.com with this complete guide to visual workflow automation, scenarios, routers, and advanced techniques.",
    images: [{
      url: "https://iimagined.ai/images/make-app-automation-og.jpg",
      alt: "Make App Automation Guide 2026"
    }]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  alternates: {
    canonical: "https://iimagined.ai/blog/make-app-automation"
  }
}

const faqs = [
  {
    question: "What is Make.com and how is it different from Zapier?",
    answer: "Make.com (formerly Integromat) is a visual workflow automation platform that connects apps and services. While Zapier uses a linear trigger-action model, Make provides a visual canvas where you can create complex workflows with branching logic, routers, filters, and iterators. Make offers more granular control over data transformation, unlimited branches per scenario, and typically lower pricing for high-volume operations. It's more powerful for complex automations but has a steeper learning curve than Zapier. In 2026, Make supports 1,500+ apps and processes over 10 million scenarios daily."
  },
  {
    question: "How much does Make.com cost compared to other automation platforms?",
    answer: "Make.com has a free tier with 1,000 operations/month (2 active scenarios), then paid plans starting at $9/month for 10,000 operations. Zapier starts at $20/month for 750 tasks. Make's operations are more granular than Zapier's tasks, so you typically get more value per dollar with Make for complex workflows. For example, a workflow that counts as 1 task in Zapier might be 3-5 operations in Make, but you still save money at scale. Make also offers volume discounts and custom enterprise pricing. Most businesses find Make 40-60% cheaper than Zapier for high-volume automations."
  },
  {
    question: "What are scenarios, modules, and routers in Make?",
    answer: "In Make, a 'scenario' is what other platforms call a workflow or automation - it's the complete sequence of steps. 'Modules' are individual steps within a scenario (like 'Get Gmail email' or 'Create Google Sheets row'). 'Routers' are special modules that create multiple paths based on conditions - imagine a fork in the road where different data goes different directions. For example, a router could send high-value leads to your CRM while sending low-value leads to a nurture sequence. Routers are one of Make's most powerful features and allow unlimited parallel branches without extra cost."
  },
  {
    question: "Can I use Make.com without coding experience?",
    answer: "Yes, Make is designed as a no-code platform with a visual interface. You drag modules onto a canvas and connect them with lines. That said, Make is more technical than Zapier - it exposes more data options and control, which can feel overwhelming initially. You don't need to write code for basic scenarios, but understanding concepts like JSON, arrays, and data structures helps with advanced scenarios. Make also supports custom JavaScript functions for power users who want even more control. Most users can build effective automations within 1-2 weeks of learning, especially with Make's Academy tutorials and template library."
  },
  {
    question: "What are the best use cases for Make automation in 2026?",
    answer: "Make excels at complex, multi-step workflows that require branching logic or data transformation. Top use cases include: (1) Lead routing systems that score leads and route them to different sales teams based on criteria, (2) E-commerce order processing that handles inventory updates, shipping notifications, and customer communications across multiple platforms, (3) Content distribution workflows that publish content to multiple channels with platform-specific formatting, (4) Data synchronization between multiple databases or CRMs with conflict resolution, and (5) Financial reporting that pulls data from multiple sources, transforms it, and generates formatted reports. Make is particularly powerful for businesses that need to connect 3+ apps with complex conditional logic."
  }
]

export default function MakeAppAutomationPage() {
  const schema = generateBlogPostSchema({
    title: metadata.title as string,
    description: metadata.description as string,
    slug: "make-app-automation",
    publishedTime: (metadata.openGraph as any)?.publishedTime as string,
    modifiedTime: (metadata.openGraph as any)?.modifiedTime as string,
    category: metadata.category || "Technology",
    keywords: metadata.keywords as string[],
    image: (metadata.openGraph?.images as any)?.[0]?.url || ""
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/10 via-transparent to-transparent"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 rounded-full px-4 py-2 mb-6">
              <Zap className="w-4 h-4 text-blue-400" />
              <span className="text-blue-300 text-sm font-medium">Visual Workflow Automation</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Make App Automation: Complete Workflow Builder Guide 2026
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Master Make.com (formerly Integromat) with this comprehensive guide to visual workflow automation.
              Learn scenarios, routers, error handling, and advanced techniques that successful businesses use to automate complex processes.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>15 min read</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
                <span>Updated August 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
                <span>By Anyro</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-12 border-y border-blue-900/30 bg-slate-950/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full"></div>
              Table of Contents
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <a href="#section-1" className="flex items-center gap-3 bg-zinc-900/50 hover:bg-zinc-900 border border-zinc-800 hover:border-blue-500/50 rounded-lg p-4 transition-all group">
                <div className="w-8 h-8 rounded-lg bg-blue-600/20 flex items-center justify-center text-blue-400 font-bold group-hover:bg-blue-600/30">1</div>
                <span className="text-gray-300 group-hover:text-white transition-colors">What is Make? Understanding the Visual Canvas</span>
              </a>
              <a href="#section-2" className="flex items-center gap-3 bg-zinc-900/50 hover:bg-zinc-900 border border-zinc-800 hover:border-blue-500/50 rounded-lg p-4 transition-all group">
                <div className="w-8 h-8 rounded-lg bg-blue-600/20 flex items-center justify-center text-blue-400 font-bold group-hover:bg-blue-600/30">2</div>
                <span className="text-gray-300 group-hover:text-white transition-colors">Scenarios, Modules & Basic Building Blocks</span>
              </a>
              <a href="#section-3" className="flex items-center gap-3 bg-zinc-900/50 hover:bg-zinc-900 border border-zinc-800 hover:border-blue-500/50 rounded-lg p-4 transition-all group">
                <div className="w-8 h-8 rounded-lg bg-blue-600/20 flex items-center justify-center text-blue-400 font-bold group-hover:bg-blue-600/30">3</div>
                <span className="text-gray-300 group-hover:text-white transition-colors">Advanced Features: Routers, Filters & Iterators</span>
              </a>
              <a href="#section-4" className="flex items-center gap-3 bg-zinc-900/50 hover:bg-zinc-900 border border-zinc-800 hover:border-blue-500/50 rounded-lg p-4 transition-all group">
                <div className="w-8 h-8 rounded-lg bg-blue-600/20 flex items-center justify-center text-blue-400 font-bold group-hover:bg-blue-600/30">4</div>
                <span className="text-gray-300 group-hover:text-white transition-colors">Error Handling & Scenario Optimization</span>
              </a>
              <a href="#section-5" className="flex items-center gap-3 bg-zinc-900/50 hover:bg-zinc-900 border border-zinc-800 hover:border-blue-500/50 rounded-lg p-4 transition-all group">
                <div className="w-8 h-8 rounded-lg bg-blue-600/20 flex items-center justify-center text-blue-400 font-bold group-hover:bg-blue-600/30">5</div>
                <span className="text-gray-300 group-hover:text-white transition-colors">Make vs Zapier vs n8n: Platform Comparison</span>
              </a>
              <a href="#section-6" className="flex items-center gap-3 bg-zinc-900/50 hover:bg-zinc-900 border border-zinc-800 hover:border-blue-500/50 rounded-lg p-4 transition-all group">
                <div className="w-8 h-8 rounded-lg bg-blue-600/20 flex items-center justify-center text-blue-400 font-bold group-hover:bg-blue-600/30">6</div>
                <span className="text-gray-300 group-hover:text-white transition-colors">Real-World Case Study & Implementation</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">

            {/* Section 1 */}
            <div id="section-1" className="mb-16 scroll-mt-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="w-2 h-10 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full"></div>
                What is Make? Understanding the Visual Canvas
              </h2>

              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  Make.com (formerly Integromat) is a visual workflow automation platform that lets you connect apps and automate processes without writing code.
                  Unlike linear automation tools, Make uses a visual canvas where you see your entire workflow as a flowchart, making complex multi-step automations easier to understand and maintain.
                </p>

                <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/20 border border-blue-500/30 rounded-xl p-8 mb-8">
                  <h3 className="text-2xl font-bold text-blue-300 mb-4 flex items-center gap-2">
                    <Zap className="w-6 h-6" />
                    Why Make Stands Out in 2026
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-zinc-900/50 rounded-lg p-5">
                      <h4 className="font-bold text-white mb-2">🎨 Visual Workflow Design</h4>
                      <p className="text-gray-300 text-sm">
                        Drag-and-drop interface with flowchart-style visualization. See your entire automation at a glance, including branches and parallel processes.
                      </p>
                    </div>
                    <div className="bg-zinc-900/50 rounded-lg p-5">
                      <h4 className="font-bold text-white mb-2">🔀 Unlimited Branching</h4>
                      <p className="text-gray-300 text-sm">
                        Create multiple execution paths with routers and filters. No extra cost for complex branching logic unlike competing platforms.
                      </p>
                    </div>
                    <div className="bg-zinc-900/50 rounded-lg p-5">
                      <h4 className="font-bold text-white mb-2">🛠️ Granular Data Control</h4>
                      <p className="text-gray-300 text-sm">
                        Access and transform every field in your data. Built-in functions for text, numbers, dates, arrays, and JSON manipulation.
                      </p>
                    </div>
                    <div className="bg-zinc-900/50 rounded-lg p-5">
                      <h4 className="font-bold text-white mb-2">💰 Cost-Effective Scaling</h4>
                      <p className="text-gray-300 text-sm">
                        Operations-based pricing that's 40-60% cheaper than task-based platforms for high-volume automations. Free tier includes 1,000 ops/month.
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 mt-8">The Make Philosophy: Visual-First Automation</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Traditional automation tools treat workflows as lists of steps. Make treats them as visual diagrams. This might seem like a small difference, but it fundamentally changes how you design automations:
                </p>

                <div className="bg-zinc-900 rounded-xl p-6 mb-6 border border-zinc-800">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-bold text-red-400 mb-3">❌ Linear Thinking (Traditional)</h4>
                      <div className="space-y-2 text-sm text-gray-300">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-zinc-800 flex items-center justify-center text-xs">1</div>
                          <span>Trigger: New form submission</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-zinc-800 flex items-center justify-center text-xs">2</div>
                          <span>Action: Add to CRM</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-zinc-800 flex items-center justify-center text-xs">3</div>
                          <span>Action: Send email</span>
                        </div>
                        <p className="text-gray-500 italic mt-3">Problem: No branching for different lead types</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-green-400 mb-3">✅ Visual Thinking (Make)</h4>
                      <div className="space-y-2 text-sm text-gray-300">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-xs">T</div>
                          <span>Trigger: New form submission</span>
                        </div>
                        <div className="flex items-center gap-2 ml-4">
                          <div className="w-6 h-6 rounded-full bg-purple-600 flex items-center justify-center text-xs">R</div>
                          <span>Router: Lead type?</span>
                        </div>
                        <div className="flex items-center gap-2 ml-8">
                          <span className="text-xs">→ Enterprise: Sales team + Slack</span>
                        </div>
                        <div className="flex items-center gap-2 ml-8">
                          <span className="text-xs">→ SMB: CRM + Email sequence</span>
                        </div>
                        <div className="flex items-center gap-2 ml-8">
                          <span className="text-xs">→ Student: Nurture campaign</span>
                        </div>
                        <p className="text-green-400 italic mt-3">Result: Each lead type gets custom treatment</p>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  This visual approach makes Make particularly powerful for businesses that need to automate complex, multi-step processes with conditional logic.
                  You can see exactly what happens to your data at each step, making debugging and optimization much easier than text-based or linear tools.
                </p>
              </div>
            </div>

            {/* Section 2 */}
            <div id="section-2" className="mb-16 scroll-mt-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="w-2 h-10 bg-gradient-to-b from-cyan-500 to-blue-500 rounded-full"></div>
                Scenarios, Modules & Basic Building Blocks
              </h2>

              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  Understanding Make's terminology is essential before building your first automation. Let's break down the core concepts that make up every Make workflow.
                </p>

                <div className="bg-gradient-to-br from-cyan-900/30 to-blue-900/20 border border-cyan-500/30 rounded-xl p-8 mb-8">
                  <h3 className="text-2xl font-bold text-cyan-300 mb-6">Core Make Terminology</h3>

                  <div className="space-y-6">
                    <div className="bg-zinc-900/70 rounded-lg p-6 border-l-4 border-cyan-500">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-cyan-600/20 flex items-center justify-center flex-shrink-0">
                          <Zap className="w-6 h-6 text-cyan-400" />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-white mb-2">Scenario</h4>
                          <p className="text-gray-300 mb-3">
                            The complete workflow or automation. A scenario contains all the modules and logic for a specific automation task.
                            Example: "Sync Shopify orders to Google Sheets and notify team on Slack."
                          </p>
                          <div className="bg-zinc-800 rounded px-3 py-1 inline-block">
                            <span className="text-cyan-300 text-sm">= "Workflow" or "Automation" in other platforms</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-zinc-900/70 rounded-lg p-6 border-l-4 border-blue-500">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-blue-600/20 flex items-center justify-center flex-shrink-0">
                          <Code className="w-6 h-6 text-blue-400" />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-white mb-2">Module</h4>
                          <p className="text-gray-300 mb-3">
                            An individual step in your scenario. Each module performs one action like "Watch Gmail inbox," "Create HubSpot contact," or "Format date."
                            Modules are connected in sequence to build your workflow.
                          </p>
                          <div className="bg-zinc-800 rounded px-3 py-1 inline-block">
                            <span className="text-blue-300 text-sm">= "Step" or "Action" in other platforms</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-zinc-900/70 rounded-lg p-6 border-l-4 border-purple-500">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-purple-600/20 flex items-center justify-center flex-shrink-0">
                          <GitBranch className="w-6 h-6 text-purple-400" />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-white mb-2">Router</h4>
                          <p className="text-gray-300 mb-3">
                            A special module that splits your workflow into multiple paths based on conditions. Each path (route) has its own filter that determines when it executes.
                            Example: Route high-value leads to sales, medium to marketing, low to nurture.
                          </p>
                          <div className="bg-zinc-800 rounded px-3 py-1 inline-block">
                            <span className="text-purple-300 text-sm">= "Branching logic" - unique to Make, unlimited branches</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-zinc-900/70 rounded-lg p-6 border-l-4 border-orange-500">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-orange-600/20 flex items-center justify-center flex-shrink-0">
                          <Filter className="w-6 h-6 text-orange-400" />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-white mb-2">Filter</h4>
                          <p className="text-gray-300 mb-3">
                            A condition between modules that determines whether execution continues. If the filter condition is false, the scenario stops at that point.
                            Example: "Continue only if order total &gt; $100."
                          </p>
                          <div className="bg-zinc-800 rounded px-3 py-1 inline-block">
                            <span className="text-orange-300 text-sm">= "Conditional logic" - placed between modules</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-zinc-900/70 rounded-lg p-6 border-l-4 border-green-500">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-green-600/20 flex items-center justify-center flex-shrink-0">
                          <RotateCw className="w-6 h-6 text-green-400" />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-white mb-2">Iterator</h4>
                          <p className="text-gray-300 mb-3">
                            A module that takes an array (list) and processes each item individually through subsequent modules.
                            Example: Take a list of 50 email addresses and create a separate CRM contact for each one.
                          </p>
                          <div className="bg-zinc-800 rounded px-3 py-1 inline-block">
                            <span className="text-green-300 text-sm">= "Loop" or "For each" - processes arrays item by item</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 mt-8">Building Your First Scenario: Step-by-Step</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Let's build a practical scenario: "When someone fills out a Typeform, add them to Google Sheets and send a Slack notification."
                </p>

                <div className="bg-zinc-900 rounded-xl p-6 mb-6 border border-zinc-800">
                  <h4 className="text-xl font-bold text-blue-400 mb-4">Scenario: Typeform → Google Sheets → Slack</h4>

                  <div className="space-y-4">
                    <div className="bg-zinc-800 rounded-lg p-5 border-l-4 border-blue-500">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold flex-shrink-0">1</div>
                        <div className="flex-1">
                          <h5 className="font-bold text-white mb-2">Add Trigger Module</h5>
                          <p className="text-gray-300 text-sm mb-3">
                            Search for "Typeform" → Select "Watch Responses" → Connect your Typeform account → Select your form
                          </p>
                          <div className="bg-zinc-900 rounded p-3">
                            <p className="text-xs text-gray-400 mb-1">Configuration:</p>
                            <code className="text-green-300 text-xs">
                              Trigger: New response<br/>
                              Form: Contact Form<br/>
                              Schedule: Every 15 minutes
                            </code>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-zinc-800 rounded-lg p-5 border-l-4 border-green-500">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center text-white font-bold flex-shrink-0">2</div>
                        <div className="flex-1">
                          <h5 className="font-bold text-white mb-2">Add Google Sheets Module</h5>
                          <p className="text-gray-300 text-sm mb-3">
                            Click the + icon after Typeform → Search "Google Sheets" → Select "Add a Row" → Map fields from Typeform to your sheet columns
                          </p>
                          <div className="bg-zinc-900 rounded p-3">
                            <p className="text-xs text-gray-400 mb-1">Field Mapping:</p>
                            <code className="text-green-300 text-xs">
                              Column A (Name): {`{{1.answers.name}}`}<br/>
                              Column B (Email): {`{{1.answers.email}}`}<br/>
                              Column C (Message): {`{{1.answers.message}}`}<br/>
                              Column D (Submitted): {`{{1.submitted_at}}`}
                            </code>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-zinc-800 rounded-lg p-5 border-l-4 border-purple-500">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold flex-shrink-0">3</div>
                        <div className="flex-1">
                          <h5 className="font-bold text-white mb-2">Add Slack Notification Module</h5>
                          <p className="text-gray-300 text-sm mb-3">
                            Click + after Google Sheets → Search "Slack" → Select "Create a Message" → Choose channel and compose notification
                          </p>
                          <div className="bg-zinc-900 rounded p-3">
                            <p className="text-xs text-gray-400 mb-1">Message Template:</p>
                            <code className="text-green-300 text-xs">
                              🎯 New Contact Form Submission!<br/>
                              <br/>
                              Name: {`{{1.answers.name}}`}<br/>
                              Email: {`{{1.answers.email}}`}<br/>
                              Message: {`{{1.answers.message}}`}<br/>
                              <br/>
                              Added to Google Sheets ✅
                            </code>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-zinc-800 rounded-lg p-5 border-l-4 border-orange-500">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-orange-600 flex items-center justify-center text-white font-bold flex-shrink-0">4</div>
                        <div className="flex-1">
                          <h5 className="font-bold text-white mb-2">Test & Activate</h5>
                          <p className="text-gray-300 text-sm mb-2">
                            Click "Run once" to test with real data → Check that row appears in Google Sheets and Slack message is sent → If successful, toggle "Scheduling" to ON
                          </p>
                          <div className="bg-green-900/20 border border-green-500/30 rounded p-3 mt-3">
                            <p className="text-green-300 text-sm">
                              💡 <strong>Pro Tip:</strong> Always test with real data before activating. Make will show you exactly what data passes through each module.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 leading-relaxed">
                  Congratulations! You've built your first Make scenario. This simple 3-module workflow demonstrates the core pattern: trigger → action → action.
                  Next, we'll explore advanced features like routers and filters that enable much more sophisticated automations.
                </p>
              </div>
            </div>

            {/* Section 3 */}
            <div id="section-3" className="mb-16 scroll-mt-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="w-2 h-10 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
                Advanced Features: Routers, Filters & Iterators
              </h2>

              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  This is where Make truly shines compared to simpler automation platforms. Routers, filters, and iterators enable complex conditional logic and data processing that would require dozens of separate workflows in other tools.
                </p>

                <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/20 border border-purple-500/30 rounded-xl p-8 mb-8">
                  <h3 className="text-2xl font-bold text-purple-300 mb-6 flex items-center gap-2">
                    <GitBranch className="w-7 h-7" />
                    Routers: Creating Multiple Execution Paths
                  </h3>

                  <p className="text-gray-300 mb-6">
                    A router splits your scenario into multiple parallel branches, each with its own filter condition. Data flows through ALL branches that meet their filter criteria - this is different from an if/else where only one path executes.
                  </p>

                  <div className="bg-zinc-900 rounded-xl p-6 mb-6">
                    <h4 className="text-lg font-bold text-white mb-4">Real-World Router Example: Lead Scoring System</h4>
                    <p className="text-gray-300 text-sm mb-4">
                      Scenario: Route leads from Facebook Lead Ads to different teams based on budget and urgency
                    </p>

                    <div className="space-y-3">
                      <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold">T</div>
                          <span className="font-bold text-blue-300">Trigger: Facebook Lead Ads → Watch Leads</span>
                        </div>
                        <p className="text-gray-400 text-xs ml-8">Captures new lead form submissions in real-time</p>
                      </div>

                      <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-6 h-6 rounded-full bg-purple-600 flex items-center justify-center text-white text-xs font-bold">R</div>
                          <span className="font-bold text-purple-300">Router: Split by Lead Value</span>
                        </div>
                        <p className="text-gray-400 text-xs ml-8 mb-3">3 routes with different filter conditions:</p>

                        <div className="ml-8 space-y-2">
                          <div className="bg-zinc-800 rounded p-3">
                            <p className="text-green-300 font-semibold text-sm mb-1">🔥 Route 1: Enterprise (Hot Lead)</p>
                            <code className="text-xs text-gray-400">
                              Filter: budget &gt;= 10000 AND urgency = "Immediate"<br/>
                              → Salesforce (High-priority contact)<br/>
                              → Slack #sales-hot-leads<br/>
                              → SMS to sales director
                            </code>
                          </div>

                          <div className="bg-zinc-800 rounded p-3">
                            <p className="text-yellow-300 font-semibold text-sm mb-1">⚡ Route 2: SMB (Warm Lead)</p>
                            <code className="text-xs text-gray-400">
                              Filter: budget &gt;= 1000 AND budget &lt; 10000<br/>
                              → HubSpot CRM<br/>
                              → ActiveCampaign (7-day nurture sequence)<br/>
                              → Assign to sales rep via round-robin
                            </code>
                          </div>

                          <div className="bg-zinc-800 rounded p-3">
                            <p className="text-blue-300 font-semibold text-sm mb-1">❄️ Route 3: Starter (Cold Lead)</p>
                            <code className="text-xs text-gray-400">
                              Filter: budget &lt; 1000 OR urgency = "Just browsing"<br/>
                              → Mailchimp (Monthly newsletter)<br/>
                              → Google Sheets (Lead database)<br/>
                              → No immediate follow-up
                            </code>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-purple-900/20 border border-purple-500/30 rounded p-4 mt-4">
                      <p className="text-purple-300 text-sm">
                        <strong>🎯 Result:</strong> Each lead gets appropriate treatment based on value. Enterprise leads get immediate sales attention,
                        SMB leads enter nurture campaigns, and starter leads go to long-term email marketing. All automatically routed in real-time.
                      </p>
                    </div>
                  </div>

                  <div className="bg-amber-900/20 border border-amber-500/30 rounded-lg p-5">
                    <h5 className="text-amber-300 font-bold mb-2">⚡ Router Pro Tips</h5>
                    <ul className="text-gray-300 text-sm space-y-2">
                      <li>• <strong>Multiple routes can execute:</strong> If a lead meets criteria for routes 1 AND 2, both will run (unlike if/else)</li>
                      <li>• <strong>Add fallback route:</strong> Create a route with no filter as the last option to catch everything that didn't match</li>
                      <li>• <strong>Unlimited branches:</strong> Add as many routes as needed - no extra cost unlike Zapier's path limits</li>
                      <li>• <strong>Use router for notification routing:</strong> Send different message formats to Slack, email, and SMS simultaneously</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-orange-900/30 to-red-900/20 border border-orange-500/30 rounded-xl p-8 mb-8">
                  <h3 className="text-2xl font-bold text-orange-300 mb-6 flex items-center gap-2">
                    <Filter className="w-7 h-7" />
                    Filters: Conditional Execution Control
                  </h3>

                  <p className="text-gray-300 mb-4">
                    Filters are conditions placed BETWEEN modules that stop execution if the condition is false. They're like gatekeepers that decide whether the scenario continues.
                  </p>

                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-zinc-900 rounded-lg p-5 border border-zinc-800">
                      <h4 className="font-bold text-white mb-3">Common Filter Use Cases</h4>
                      <div className="space-y-2 text-sm text-gray-300">
                        <div className="flex items-start gap-2">
                          <span className="text-orange-400">▸</span>
                          <span><strong>Value thresholds:</strong> "Order total &gt; $500"</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-orange-400">▸</span>
                          <span><strong>Status checks:</strong> "Status equals 'Paid'"</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-orange-400">▸</span>
                          <span><strong>Text matching:</strong> "Email contains '@company.com'"</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-orange-400">▸</span>
                          <span><strong>Date comparisons:</strong> "Created date is after 2026-01-01"</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-orange-400">▸</span>
                          <span><strong>Existence checks:</strong> "Field is not empty"</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-zinc-900 rounded-lg p-5 border border-zinc-800">
                      <h4 className="font-bold text-white mb-3">Filter Operators</h4>
                      <div className="space-y-2 text-sm">
                        <div className="bg-zinc-800 rounded px-2 py-1">
                          <code className="text-orange-300">Equals / Not Equal</code>
                        </div>
                        <div className="bg-zinc-800 rounded px-2 py-1">
                          <code className="text-orange-300">Greater than / Less than</code>
                        </div>
                        <div className="bg-zinc-800 rounded px-2 py-1">
                          <code className="text-orange-300">Contains / Does not contain</code>
                        </div>
                        <div className="bg-zinc-800 rounded px-2 py-1">
                          <code className="text-orange-300">Starts with / Ends with</code>
                        </div>
                        <div className="bg-zinc-800 rounded px-2 py-1">
                          <code className="text-orange-300">Exists / Does not exist</code>
                        </div>
                        <div className="bg-zinc-800 rounded px-2 py-1">
                          <code className="text-orange-300">Matches pattern (regex)</code>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-zinc-900 rounded-xl p-6">
                    <h4 className="text-lg font-bold text-white mb-3">Example: E-commerce High-Value Order Processing</h4>
                    <p className="text-gray-300 text-sm mb-4">
                      Only process orders over $500 differently - send to priority fulfillment and notify manager
                    </p>
                    <div className="bg-zinc-800 rounded p-4">
                      <code className="text-xs text-gray-300">
                        Shopify → Watch Orders<br/>
                        <span className="text-orange-400 ml-4">⚡ FILTER: order.total_price &gt;= 500</span><br/>
                        <span className="ml-4">→ If TRUE: Continue to next modules</span><br/>
                        <span className="ml-4">→ If FALSE: Stop scenario here</span><br/>
                        <span className="ml-8">→ Update order tags (add "Priority")</span><br/>
                        <span className="ml-8">→ Send Slack notification to #fulfillment-priority</span><br/>
                        <span className="ml-8">→ Create Asana task for manager review</span>
                      </code>
                    </div>
                    <p className="text-gray-400 text-xs mt-3">
                      Result: Only orders $500+ trigger the extra steps. Orders under $500 are simply ignored by this scenario (you'd have a separate scenario for standard orders).
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/20 border border-green-500/30 rounded-xl p-8 mb-8">
                  <h3 className="text-2xl font-bold text-green-300 mb-6 flex items-center gap-2">
                    <RotateCw className="w-7 h-7" />
                    Iterators: Processing Arrays Item-by-Item
                  </h3>

                  <p className="text-gray-300 mb-4">
                    An iterator takes an array (list of items) and processes each item individually through subsequent modules. This is essential when working with bulk data like lists of contacts, order items, or search results.
                  </p>

                  <div className="bg-zinc-900 rounded-xl p-6 mb-6">
                    <h4 className="text-lg font-bold text-white mb-4">Example: Bulk Email Validation & CRM Import</h4>
                    <p className="text-gray-300 text-sm mb-4">
                      Scenario: Get list of email addresses from Google Sheets, validate each one, and add valid emails to HubSpot
                    </p>

                    <div className="space-y-3">
                      <div className="bg-zinc-800 rounded p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-6 h-6 rounded bg-blue-600 flex items-center justify-center text-white text-xs">1</div>
                          <span className="font-semibold text-blue-300">Google Sheets: Search Rows</span>
                        </div>
                        <p className="text-gray-400 text-xs ml-8">Returns array: [{`{email: "john@example.com"}, {email: "jane@example.com"}, ...`}]</p>
                      </div>

                      <div className="bg-zinc-800 rounded p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-6 h-6 rounded bg-green-600 flex items-center justify-center text-white text-xs">2</div>
                          <span className="font-semibold text-green-300">Iterator</span>
                        </div>
                        <p className="text-gray-400 text-xs ml-8">
                          Takes the array from step 1 and processes each email separately through steps 3-5
                        </p>
                      </div>

                      <div className="bg-zinc-800 rounded p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-6 h-6 rounded bg-purple-600 flex items-center justify-center text-white text-xs">3</div>
                          <span className="font-semibold text-purple-300">HTTP: Validate Email (API call)</span>
                        </div>
                        <p className="text-gray-400 text-xs ml-8">Runs once for each email: validates format, checks MX records, detects disposable domains</p>
                      </div>

                      <div className="bg-zinc-800 rounded p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-orange-400 ml-1 mr-2">⚡</span>
                          <span className="font-semibold text-orange-300">Filter: Email is valid</span>
                        </div>
                        <p className="text-gray-400 text-xs ml-8">Only continue if validation API returns "valid: true"</p>
                      </div>

                      <div className="bg-zinc-800 rounded p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-6 h-6 rounded bg-cyan-600 flex items-center justify-center text-white text-xs">4</div>
                          <span className="font-semibold text-cyan-300">HubSpot: Create/Update Contact</span>
                        </div>
                        <p className="text-gray-400 text-xs ml-8">Adds valid email to HubSpot CRM, one at a time</p>
                      </div>
                    </div>

                    <div className="bg-green-900/20 border border-green-500/30 rounded p-4 mt-4">
                      <p className="text-green-300 text-sm">
                        <strong>🎯 Result:</strong> Started with 100 emails → Iterator processes each individually →
                        Valid emails (e.g., 87) added to HubSpot → Invalid emails (13) filtered out → Total operations: ~270 (100 validations + 87 CRM imports + overhead)
                      </p>
                    </div>
                  </div>

                  <div className="bg-amber-900/20 border border-amber-500/30 rounded-lg p-5">
                    <h5 className="text-amber-300 font-bold mb-2">⚡ Iterator Pro Tips</h5>
                    <ul className="text-gray-300 text-sm space-y-2">
                      <li>• <strong>Watch your operations:</strong> Iterating over 1,000 items = 1,000+ operations. Monitor usage carefully.</li>
                      <li>• <strong>Use aggregators to recombine:</strong> After processing items individually, use an aggregator to combine results back into a single array</li>
                      <li>• <strong>Add sleep modules for rate limits:</strong> If hitting API rate limits, add a "Sleep" module inside the iterator to throttle requests</li>
                      <li>• <strong>Combine with filters:</strong> Filter before OR after iterator depending on whether you want to filter the whole list or individual items</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 4 */}
            <div id="section-4" className="mb-16 scroll-mt-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="w-2 h-10 bg-gradient-to-b from-red-500 to-orange-500 rounded-full"></div>
                Error Handling & Scenario Optimization
              </h2>

              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  Professional automations need robust error handling and optimization. A scenario that works 95% of the time but crashes on edge cases will cost you time and money debugging.
                </p>

                <div className="bg-gradient-to-br from-red-900/30 to-orange-900/20 border border-red-500/30 rounded-xl p-8 mb-8">
                  <h3 className="text-2xl font-bold text-red-300 mb-6 flex items-center gap-2">
                    <AlertTriangle className="w-7 h-7" />
                    Error Handlers: Preventing Scenario Failures
                  </h3>

                  <p className="text-gray-300 mb-6">
                    Error handlers are special routes that execute when a module fails. Instead of the entire scenario stopping, the error handler catches the failure and lets you decide what to do: retry, log, notify, or use fallback data.
                  </p>

                  <div className="bg-zinc-900 rounded-xl p-6 mb-6">
                    <h4 className="text-lg font-bold text-white mb-4">4 Types of Error Handlers</h4>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-gradient-to-br from-blue-900/20 to-blue-600/10 border border-blue-500/30 rounded-lg p-5">
                        <h5 className="text-blue-300 font-bold mb-2">1. Rollback</h5>
                        <p className="text-gray-300 text-sm mb-3">
                          Undoes all operations that occurred after the error handler was attached. Use for financial transactions or multi-step processes that must complete fully or not at all.
                        </p>
                        <div className="bg-zinc-800 rounded p-2">
                          <code className="text-xs text-blue-300">Example: Payment failed → Rollback inventory reservation</code>
                        </div>
                      </div>

                      <div className="bg-gradient-to-br from-green-900/20 to-green-600/10 border border-green-500/30 rounded-lg p-5">
                        <h5 className="text-green-300 font-bold mb-2">2. Commit</h5>
                        <p className="text-gray-300 text-sm mb-3">
                          Finishes the scenario execution successfully despite the error. Use when you want to log the error but not block the rest of the workflow.
                        </p>
                        <div className="bg-zinc-800 rounded p-2">
                          <code className="text-xs text-green-300">Example: Slack notification failed → Continue anyway</code>
                        </div>
                      </div>

                      <div className="bg-gradient-to-br from-orange-900/20 to-orange-600/10 border border-orange-500/30 rounded-lg p-5">
                        <h5 className="text-orange-300 font-bold mb-2">3. Ignore</h5>
                        <p className="text-gray-300 text-sm mb-3">
                          Treats the error as if the module successfully returned no data. Scenario continues with empty output from the failed module.
                        </p>
                        <div className="bg-zinc-800 rounded p-2">
                          <code className="text-xs text-orange-300">Example: Optional enrichment API fails → Use default values</code>
                        </div>
                      </div>

                      <div className="bg-gradient-to-br from-purple-900/20 to-purple-600/10 border border-purple-500/30 rounded-lg p-5">
                        <h5 className="text-purple-300 font-bold mb-2">4. Retry</h5>
                        <p className="text-gray-300 text-sm mb-3">
                          Automatically retries the failed module X times with Y minute intervals. Use for temporary issues like rate limits or network timeouts.
                        </p>
                        <div className="bg-zinc-800 rounded p-2">
                          <code className="text-xs text-purple-300">Example: API timeout → Retry 3x with 2-min interval</code>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-zinc-900 rounded-xl p-6">
                    <h4 className="text-lg font-bold text-white mb-4">Real-World Error Handling Example</h4>
                    <p className="text-gray-300 text-sm mb-4">
                      Scenario: Shopify order → Validate inventory API → Create shipment → Send tracking email
                    </p>
                    <div className="bg-zinc-800 rounded p-4 space-y-3">
                      <div>
                        <p className="text-blue-300 font-semibold text-sm mb-1">Module 1: Shopify → Watch Orders</p>
                        <p className="text-gray-400 text-xs ml-4">Trigger when new paid order is created</p>
                      </div>
                      <div>
                        <p className="text-purple-300 font-semibold text-sm mb-1">Module 2: HTTP → Check Inventory API</p>
                        <p className="text-gray-400 text-xs ml-4 mb-2">Verify all items are in stock</p>
                        <div className="ml-4 bg-red-900/20 border border-red-500/30 rounded p-2">
                          <p className="text-red-300 text-xs font-semibold mb-1">⚠️ ERROR HANDLER (Retry): Attached to this module</p>
                          <code className="text-xs text-gray-400">
                            Retries: 3 attempts<br/>
                            Interval: 5 minutes<br/>
                            If all retries fail → Send Slack alert + Mark order "On Hold"
                          </code>
                        </div>
                      </div>
                      <div>
                        <p className="text-green-300 font-semibold text-sm mb-1">Module 3: ShipStation → Create Shipment</p>
                        <p className="text-gray-400 text-xs ml-4 mb-2">Generate shipping label</p>
                        <div className="ml-4 bg-orange-900/20 border border-orange-500/30 rounded p-2">
                          <p className="text-orange-300 text-xs font-semibold mb-1">⚠️ ERROR HANDLER (Commit): Attached to this module</p>
                          <code className="text-xs text-gray-400">
                            Action: Log to Google Sheets + Continue<br/>
                            Reason: Manual intervention needed, but don't block email
                          </code>
                        </div>
                      </div>
                      <div>
                        <p className="text-cyan-300 font-semibold text-sm mb-1">Module 4: Gmail → Send Tracking Email</p>
                        <p className="text-gray-400 text-xs ml-4">Notify customer</p>
                      </div>
                    </div>
                    <div className="bg-green-900/20 border border-green-500/30 rounded p-4 mt-4">
                      <p className="text-green-300 text-sm">
                        <strong>🎯 Result:</strong> Inventory API failures are automatically retried. If they permanently fail, team is alerted.
                        Shipment creation failures are logged but don't block customer notification. Scenario is resilient to multiple failure points.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-cyan-900/30 to-blue-900/20 border border-cyan-500/30 rounded-xl p-8 mb-8">
                  <h3 className="text-2xl font-bold text-cyan-300 mb-6">Scenario Optimization: Speed & Cost Reduction</h3>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-zinc-900 rounded-lg p-6 border-l-4 border-cyan-500">
                      <h4 className="text-lg font-bold text-white mb-4">⚡ Reduce Operations</h4>
                      <ul className="space-y-3 text-sm text-gray-300">
                        <li className="flex items-start gap-2">
                          <span className="text-cyan-400 flex-shrink-0">✓</span>
                          <span><strong>Use filters early:</strong> Place filters before expensive API calls to avoid wasting operations on data you'll discard</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-cyan-400 flex-shrink-0">✓</span>
                          <span><strong>Aggregate before processing:</strong> If possible, batch operations instead of processing items one-by-one</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-cyan-400 flex-shrink-0">✓</span>
                          <span><strong>Use "Instant" triggers:</strong> Webhook triggers are instant and more efficient than polling schedules</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-cyan-400 flex-shrink-0">✓</span>
                          <span><strong>Deduplicate data:</strong> Use data stores to track processed items and skip duplicates</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-zinc-900 rounded-lg p-6 border-l-4 border-blue-500">
                      <h4 className="text-lg font-bold text-white mb-4">🚀 Improve Performance</h4>
                      <ul className="space-y-3 text-sm text-gray-300">
                        <li className="flex items-start gap-2">
                          <span className="text-blue-400 flex-shrink-0">✓</span>
                          <span><strong>Parallel processing:</strong> Use routers to execute independent branches simultaneously</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-400 flex-shrink-0">✓</span>
                          <span><strong>Cache frequent lookups:</strong> Store frequently accessed reference data in data stores instead of API calls</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-400 flex-shrink-0">✓</span>
                          <span><strong>Limit polling frequency:</strong> Don't check every 1 minute if 15 minutes is acceptable. Each poll = operations</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-400 flex-shrink-0">✓</span>
                          <span><strong>Break into multiple scenarios:</strong> Split complex workflows into separate scenarios connected by data stores or webhooks</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-zinc-900 rounded-xl p-6">
                    <h4 className="text-lg font-bold text-white mb-3">Before & After: Optimization Example</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <div className="bg-red-900/20 border border-red-500/30 rounded p-4 mb-2">
                          <p className="text-red-300 font-semibold text-sm mb-2">❌ BEFORE (Inefficient)</p>
                          <code className="text-xs text-gray-300">
                            Google Sheets: Get 100 rows (100 ops)<br/>
                            Iterator: Process each row<br/>
                            → HTTP: Enrich data via API (100 ops)<br/>
                            → Filter: Company size &gt; 50 (10 pass)<br/>
                            → Salesforce: Create contact (10 ops)<br/>
                            <br/>
                            <strong className="text-red-400">Total: 210 operations</strong>
                          </code>
                        </div>
                        <p className="text-gray-400 text-xs">Problem: Enriching 100 rows when only 10 pass the filter</p>
                      </div>
                      <div>
                        <div className="bg-green-900/20 border border-green-500/30 rounded p-4 mb-2">
                          <p className="text-green-300 font-semibold text-sm mb-2">✅ AFTER (Optimized)</p>
                          <code className="text-xs text-gray-300">
                            Google Sheets: Get 100 rows (100 ops)<br/>
                            Iterator: Process each row<br/>
                            → Filter: Company size &gt; 50 (10 pass)<br/>
                            → HTTP: Enrich data via API (10 ops)<br/>
                            → Salesforce: Create contact (10 ops)<br/>
                            <br/>
                            <strong className="text-green-400">Total: 120 operations</strong>
                          </code>
                        </div>
                        <p className="text-green-400 text-xs">Solution: Filter BEFORE enrichment API call. Saves 90 operations (43% reduction)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 5 */}
            <div id="section-5" className="mb-16 scroll-mt-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="w-2 h-10 bg-gradient-to-b from-yellow-500 to-orange-500 rounded-full"></div>
                Make vs Zapier vs n8n: Platform Comparison
              </h2>

              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                  Choosing the right automation platform depends on your technical skill level, budget, and complexity requirements. Here's an honest comparison of the top three platforms in 2026.
                </p>

                <div className="space-y-6">
                  {/* Zapier */}
                  <div className="bg-gradient-to-br from-orange-900/30 to-amber-900/20 border border-orange-500/30 rounded-xl p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h3 className="text-3xl font-bold text-orange-400 mb-2">Zapier</h3>
                        <p className="text-gray-400">Best for: Beginners & Simple Workflows</p>
                      </div>
                      <div className="text-right">
                        <p className="text-3xl font-bold text-white">$20-800/mo</p>
                        <p className="text-gray-400 text-sm">750-50,000 tasks</p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg font-bold text-green-300 mb-3">✅ Strengths</h4>
                        <ul className="space-y-2 text-sm text-gray-300">
                          <li className="flex items-start gap-2">
                            <span className="text-green-400">▸</span>
                            <span><strong>Easiest learning curve:</strong> Can build automations in minutes without training</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-green-400">▸</span>
                            <span><strong>Most integrations:</strong> 6,000+ apps including niche and industry-specific tools</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-green-400">▸</span>
                            <span><strong>Best documentation:</strong> Extensive guides, tutorials, and community support</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-green-400">▸</span>
                            <span><strong>Reliable & stable:</strong> 99.9% uptime SLA on paid plans</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-green-400">▸</span>
                            <span><strong>AI-powered:</strong> Natural language to automation in 2026 with Zapier Central</span>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-bold text-red-300 mb-3">❌ Weaknesses</h4>
                        <ul className="space-y-2 text-sm text-gray-300">
                          <li className="flex items-start gap-2">
                            <span className="text-red-400">▸</span>
                            <span><strong>Expensive at scale:</strong> Task-based pricing adds up quickly for high-volume workflows</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-red-400">▸</span>
                            <span><strong>Limited branching:</strong> Paths feature available only on expensive plans ($69+/mo)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-red-400">▸</span>
                            <span><strong>Less data control:</strong> Can't manipulate data structures as granularly as Make</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-red-400">▸</span>
                            <span><strong>Linear workflow:</strong> Difficult to visualize complex multi-step automations</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-red-400">▸</span>
                            <span><strong>Error handling:</strong> Basic error notifications, limited retry/rollback options</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-orange-900/20 border border-orange-500/30 rounded-lg p-4 mt-6">
                      <p className="text-orange-300 text-sm">
                        <strong>🎯 Best for:</strong> Non-technical teams, simple trigger→action workflows, businesses that prioritize ease-of-use over cost efficiency,
                        scenarios requiring obscure app integrations not available elsewhere.
                      </p>
                    </div>
                  </div>

                  {/* Make */}
                  <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/20 border border-blue-500/30 rounded-xl p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h3 className="text-3xl font-bold text-blue-400 mb-2">Make.com</h3>
                        <p className="text-gray-400">Best for: Complex Workflows & Visual Builders</p>
                      </div>
                      <div className="text-right">
                        <p className="text-3xl font-bold text-white">$9-299/mo</p>
                        <p className="text-gray-400 text-sm">10K-100K+ operations</p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg font-bold text-green-300 mb-3">✅ Strengths</h4>
                        <ul className="space-y-2 text-sm text-gray-300">
                          <li className="flex items-start gap-2">
                            <span className="text-green-400">▸</span>
                            <span><strong>Visual workflow canvas:</strong> See entire automation as flowchart with branches and parallel paths</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-green-400">▸</span>
                            <span><strong>Unlimited branching:</strong> Routers, filters, and conditional logic at no extra cost</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-green-400">▸</span>
                            <span><strong>Cost-effective scaling:</strong> 40-60% cheaper than Zapier for high-volume workflows</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-green-400">▸</span>
                            <span><strong>Granular data control:</strong> Advanced functions for transforming JSON, arrays, dates, text</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-green-400">▸</span>
                            <span><strong>Robust error handling:</strong> Retry, rollback, commit, ignore handlers per module</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-green-400">▸</span>
                            <span><strong>Generous free tier:</strong> 1,000 operations/month, 2 active scenarios (vs Zapier's 100 tasks)</span>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-bold text-red-300 mb-3">❌ Weaknesses</h4>
                        <ul className="space-y-2 text-sm text-gray-300">
                          <li className="flex items-start gap-2">
                            <span className="text-red-400">▸</span>
                            <span><strong>Steeper learning curve:</strong> Takes 1-2 weeks to master vs hours for Zapier</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-red-400">▸</span>
                            <span><strong>Fewer integrations:</strong> 1,500+ apps vs Zapier's 6,000+ (but covers most popular tools)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-red-400">▸</span>
                            <span><strong>Operations confusion:</strong> Harder to predict costs since operations != tasks (more granular)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-red-400">▸</span>
                            <span><strong>Less hand-holding:</strong> Documentation is good but assumes more technical knowledge</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-red-400">▸</span>
                            <span><strong>Smaller community:</strong> Fewer third-party tutorials and troubleshooting resources</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4 mt-6">
                      <p className="text-blue-300 text-sm">
                        <strong>🎯 Best for:</strong> Technical teams or those willing to learn, complex multi-step workflows with conditional logic,
                        high-volume automations where cost matters, scenarios requiring advanced data transformation or error handling.
                      </p>
                    </div>
                  </div>

                  {/* n8n */}
                  <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/20 border border-purple-500/30 rounded-xl p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h3 className="text-3xl font-bold text-purple-400 mb-2">n8n</h3>
                        <p className="text-gray-400">Best for: Self-Hosted & Developer-Friendly</p>
                      </div>
                      <div className="text-right">
                        <p className="text-3xl font-bold text-white">$0-500/mo</p>
                        <p className="text-gray-400 text-sm">Free self-hosted or cloud</p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg font-bold text-green-300 mb-3">✅ Strengths</h4>
                        <ul className="space-y-2 text-sm text-gray-300">
                          <li className="flex items-start gap-2">
                            <span className="text-green-400">▸</span>
                            <span><strong>Open-source & self-hosted:</strong> Free to run on your own servers, unlimited executions</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-green-400">▸</span>
                            <span><strong>Complete data privacy:</strong> All data stays on your infrastructure, critical for healthcare/finance</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-green-400">▸</span>
                            <span><strong>Developer-friendly:</strong> Custom code nodes (JavaScript/Python), REST API, version control integration</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-green-400">▸</span>
                            <span><strong>Visual canvas like Make:</strong> Flowchart-style workflow design with branching</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-green-400">▸</span>
                            <span><strong>No execution limits:</strong> Self-hosted = unlimited workflows and executions</span>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-bold text-red-300 mb-3">❌ Weaknesses</h4>
                        <ul className="space-y-2 text-sm text-gray-300">
                          <li className="flex items-start gap-2">
                            <span className="text-red-400">▸</span>
                            <span><strong>Requires technical setup:</strong> Self-hosting needs DevOps knowledge (Docker, databases, backups)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-red-400">▸</span>
                            <span><strong>Maintenance overhead:</strong> You're responsible for updates, security, uptime, and scaling</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-red-400">▸</span>
                            <span><strong>Fewer pre-built integrations:</strong> 400+ nodes vs 1,500+ for Make or 6,000+ for Zapier</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-red-400">▸</span>
                            <span><strong>Less polished UX:</strong> More technical interface, not as beginner-friendly</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-red-400">▸</span>
                            <span><strong>Limited support:</strong> Community forums for self-hosted; paid cloud plans get priority support</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-4 mt-6">
                      <p className="text-purple-300 text-sm">
                        <strong>🎯 Best for:</strong> Technical teams with DevOps capacity, businesses with strict data privacy requirements (healthcare, finance),
                        high-volume automations where per-execution pricing is prohibitive, developers who want to version control workflows.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Comparison Table */}
                <div className="bg-zinc-900 rounded-xl p-6 border border-zinc-800 mt-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Quick Comparison Table</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-zinc-800">
                          <th className="text-left py-3 px-4 text-gray-400 font-semibold">Feature</th>
                          <th className="text-center py-3 px-4 text-orange-400 font-semibold">Zapier</th>
                          <th className="text-center py-3 px-4 text-blue-400 font-semibold">Make</th>
                          <th className="text-center py-3 px-4 text-purple-400 font-semibold">n8n</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-300">
                        <tr className="border-b border-zinc-800">
                          <td className="py-3 px-4 font-medium">Learning Curve</td>
                          <td className="text-center py-3 px-4">⭐⭐⭐⭐⭐ Easy</td>
                          <td className="text-center py-3 px-4">⭐⭐⭐ Moderate</td>
                          <td className="text-center py-3 px-4">⭐⭐ Technical</td>
                        </tr>
                        <tr className="border-b border-zinc-800">
                          <td className="py-3 px-4 font-medium">Visual Workflow</td>
                          <td className="text-center py-3 px-4">❌ Linear list</td>
                          <td className="text-center py-3 px-4">✅ Flowchart</td>
                          <td className="text-center py-3 px-4">✅ Flowchart</td>
                        </tr>
                        <tr className="border-b border-zinc-800">
                          <td className="py-3 px-4 font-medium">Integrations</td>
                          <td className="text-center py-3 px-4">6,000+</td>
                          <td className="text-center py-3 px-4">1,500+</td>
                          <td className="text-center py-3 px-4">400+</td>
                        </tr>
                        <tr className="border-b border-zinc-800">
                          <td className="py-3 px-4 font-medium">Free Tier</td>
                          <td className="text-center py-3 px-4">100 tasks/mo</td>
                          <td className="text-center py-3 px-4">1,000 ops/mo</td>
                          <td className="text-center py-3 px-4">Unlimited (self-hosted)</td>
                        </tr>
                        <tr className="border-b border-zinc-800">
                          <td className="py-3 px-4 font-medium">Starting Price</td>
                          <td className="text-center py-3 px-4">$20/mo</td>
                          <td className="text-center py-3 px-4">$9/mo</td>
                          <td className="text-center py-3 px-4">$0 (or $20/mo cloud)</td>
                        </tr>
                        <tr className="border-b border-zinc-800">
                          <td className="py-3 px-4 font-medium">Complex Logic</td>
                          <td className="text-center py-3 px-4">❌ Limited</td>
                          <td className="text-center py-3 px-4">✅ Excellent</td>
                          <td className="text-center py-3 px-4">✅ Excellent</td>
                        </tr>
                        <tr className="border-b border-zinc-800">
                          <td className="py-3 px-4 font-medium">Error Handling</td>
                          <td className="text-center py-3 px-4">⚠️ Basic</td>
                          <td className="text-center py-3 px-4">✅ Advanced</td>
                          <td className="text-center py-3 px-4">✅ Advanced</td>
                        </tr>
                        <tr className="border-b border-zinc-800">
                          <td className="py-3 px-4 font-medium">Custom Code</td>
                          <td className="text-center py-3 px-4">⚠️ Limited</td>
                          <td className="text-center py-3 px-4">✅ JavaScript</td>
                          <td className="text-center py-3 px-4">✅ JS/Python</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 font-medium">Best For</td>
                          <td className="text-center py-3 px-4">Beginners</td>
                          <td className="text-center py-3 px-4">Power Users</td>
                          <td className="text-center py-3 px-4">Developers</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-cyan-900/20 to-blue-900/10 border border-cyan-500/30 rounded-xl p-6 mt-6">
                  <h4 className="text-xl font-bold text-cyan-300 mb-3">💡 Decision Framework</h4>
                  <div className="space-y-3 text-gray-300">
                    <p className="flex items-start gap-3">
                      <span className="text-orange-400 font-bold flex-shrink-0">Choose Zapier if:</span>
                      <span>You're non-technical, need the easiest solution, require obscure app integrations, and prefer support over cost optimization</span>
                    </p>
                    <p className="flex items-start gap-3">
                      <span className="text-blue-400 font-bold flex-shrink-0">Choose Make if:</span>
                      <span>You want visual workflows, need complex conditional logic, process high volumes, and can invest 1-2 weeks learning</span>
                    </p>
                    <p className="flex items-start gap-3">
                      <span className="text-purple-400 font-bold flex-shrink-0">Choose n8n if:</span>
                      <span>You have DevOps capacity, need data privacy/control, run extremely high volumes, or want to customize/extend workflows with code</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 6 */}
            <div id="section-6" className="mb-16 scroll-mt-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="w-2 h-10 bg-gradient-to-b from-green-500 to-emerald-500 rounded-full"></div>
                Real-World Case Study & Implementation
              </h2>

              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                  Let's look at how a real SaaS company used Make to automate their customer onboarding process, achieving significant time savings and improved customer experience.
                </p>

                <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/20 border border-green-500/30 rounded-xl p-8 mb-8">
                  <h3 className="text-2xl font-bold text-green-300 mb-6">Case Study: CloudSync SaaS Onboarding Automation</h3>

                  <div className="grid md:grid-cols-3 gap-4 mb-8">
                    <div className="bg-zinc-900/70 rounded-lg p-5 border-l-4 border-blue-500">
                      <p className="text-gray-400 text-xs mb-1">Company</p>
                      <p className="text-white font-bold text-lg">CloudSync</p>
                      <p className="text-gray-400 text-sm">B2B project management SaaS</p>
                    </div>
                    <div className="bg-zinc-900/70 rounded-lg p-5 border-l-4 border-purple-500">
                      <p className="text-gray-400 text-xs mb-1">Team Size</p>
                      <p className="text-white font-bold text-lg">25 employees</p>
                      <p className="text-gray-400 text-sm">3-person customer success team</p>
                    </div>
                    <div className="bg-zinc-900/70 rounded-lg p-5 border-l-4 border-green-500">
                      <p className="text-gray-400 text-xs mb-1">New Users/Month</p>
                      <p className="text-white font-bold text-lg">~200 signups</p>
                      <p className="text-gray-400 text-sm">150 paid, 50 trial</p>
                    </div>
                  </div>

                  <h4 className="text-xl font-bold text-white mb-4">The Problem</h4>
                  <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-6 mb-6">
                    <p className="text-gray-300 mb-4">
                      Manual onboarding was consuming 8-10 hours per week from the customer success team:
                    </p>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="text-red-400">•</span>
                        <span>Manually adding new paid customers to HubSpot CRM with proper segmentation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-400">•</span>
                        <span>Creating Asana onboarding tasks for each customer (account setup, training call scheduling, resource sharing)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-400">•</span>
                        <span>Sending different welcome email sequences based on plan tier (Starter vs Pro vs Enterprise)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-400">•</span>
                        <span>Notifying sales team in Slack for Enterprise customers requiring white-glove onboarding</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-400">•</span>
                        <span>Provisioning product access and configuring initial workspace settings</span>
                      </li>
                    </ul>
                    <div className="bg-zinc-900 rounded p-4 mt-4">
                      <p className="text-red-300 font-semibold">
                        💸 Cost: ~$2,400/month in team time (10 hours/week × $60/hour average rate)
                      </p>
                    </div>
                  </div>

                  <h4 className="text-xl font-bold text-white mb-4">The Solution: Make Automation Workflow</h4>
                  <p className="text-gray-300 mb-6">
                    They built a comprehensive Make scenario that handles the entire onboarding process automatically, with different paths for each customer tier.
                  </p>

                  <div className="bg-zinc-900 rounded-xl p-6 mb-6">
                    <h5 className="text-lg font-bold text-blue-300 mb-4">Workflow Architecture</h5>

                    <div className="space-y-4">
                      <div className="bg-zinc-800 rounded-lg p-5 border-l-4 border-blue-500">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">T</div>
                          <h6 className="font-bold text-white">Trigger: Stripe → Watch Successful Payments</h6>
                        </div>
                        <p className="text-gray-400 text-sm">
                          Webhook trigger fires immediately when Stripe processes a successful subscription payment (instant, not polling)
                        </p>
                      </div>

                      <div className="bg-zinc-800 rounded-lg p-5 border-l-4 border-green-500">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center text-white font-bold">1</div>
                          <h6 className="font-bold text-white">HTTP Module: Enrich Customer Data from Internal API</h6>
                        </div>
                        <p className="text-gray-400 text-sm">
                          Fetch additional user details from CloudSync's database (company name, industry, team size, signup source)
                        </p>
                      </div>

                      <div className="bg-zinc-800 rounded-lg p-5 border-l-4 border-purple-500">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold">R</div>
                          <h6 className="font-bold text-white">Router: Split by Plan Tier</h6>
                        </div>
                        <p className="text-gray-400 text-sm mb-3">3 routes based on Stripe plan ID:</p>

                        <div className="space-y-3 ml-4">
                          <div className="bg-zinc-900 rounded p-4">
                            <p className="text-cyan-300 font-semibold mb-2">🚀 Route 1: Enterprise ($299/mo)</p>
                            <div className="text-xs text-gray-400 space-y-1">
                              <p>→ HubSpot: Create deal + contact (High-value segment)</p>
                              <p>→ Asana: Create project "Enterprise Onboarding - [Company]" with 15 tasks</p>
                              <p>→ Calendly: Send booking link for 1:1 onboarding call</p>
                              <p>→ Slack #enterprise-customers: "@channel New Enterprise customer: [Company]"</p>
                              <p>→ Gmail: Send personalized welcome email from CEO</p>
                              <p>→ CloudSync API: Enable all premium features + dedicated support</p>
                            </div>
                          </div>

                          <div className="bg-zinc-900 rounded p-4">
                            <p className="text-yellow-300 font-semibold mb-2">⚡ Route 2: Pro ($99/mo)</p>
                            <div className="text-xs text-gray-400 space-y-1">
                              <p>→ HubSpot: Create contact (Pro segment)</p>
                              <p>→ Asana: Create task "Pro onboarding - [Company]" (assigned to CS team)</p>
                              <p>→ ActiveCampaign: Add to "Pro Welcome Series" (5 emails over 14 days)</p>
                              <p>→ Slack #customer-success: "New Pro customer: [Company]"</p>
                              <p>→ CloudSync API: Enable Pro features</p>
                            </div>
                          </div>

                          <div className="bg-zinc-900 rounded p-4">
                            <p className="text-blue-300 font-semibold mb-2">💼 Route 3: Starter ($29/mo)</p>
                            <div className="text-xs text-gray-400 space-y-1">
                              <p>→ HubSpot: Create contact (Starter segment)</p>
                              <p>→ ActiveCampaign: Add to "Starter Welcome Series" (3 emails focused on self-service)</p>
                              <p>→ Google Sheets: Log for monthly review</p>
                              <p>→ CloudSync API: Enable standard features</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-zinc-800 rounded-lg p-5 border-l-4 border-orange-500">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-8 h-8 rounded-full bg-orange-600 flex items-center justify-center text-white font-bold">E</div>
                          <h6 className="font-bold text-white">Error Handlers: Ensure Reliability</h6>
                        </div>
                        <div className="text-gray-400 text-sm space-y-2">
                          <p>• <strong>HubSpot module:</strong> Retry handler (3 attempts, 5-min intervals)</p>
                          <p>• <strong>Email modules:</strong> Commit handler (log failure but continue)</p>
                          <p>• <strong>Internal API:</strong> Rollback handler (cancel onboarding if provisioning fails)</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <h4 className="text-xl font-bold text-white mb-4">The Results</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-green-900/40 to-emerald-900/20 border border-green-500/40 rounded-lg p-6">
                      <h5 className="text-green-300 font-bold text-lg mb-4">✅ Quantitative Wins</h5>
                      <div className="space-y-3 text-sm text-gray-300">
                        <div>
                          <p className="text-green-400 font-bold text-2xl">8-10 hours/week saved</p>
                          <p className="text-gray-400">$2,400/month in team time recovered</p>
                        </div>
                        <div>
                          <p className="text-green-400 font-bold text-2xl">100% consistency</p>
                          <p className="text-gray-400">No more missed onboarding steps or forgotten tasks</p>
                        </div>
                        <div>
                          <p className="text-green-400 font-bold text-2xl">Instant onboarding</p>
                          <p className="text-gray-400">Welcome email arrives within 60 seconds of payment</p>
                        </div>
                        <div>
                          <p className="text-green-400 font-bold text-2xl">$189/month cost</p>
                          <p className="text-gray-400">Make Pro plan (~35K operations/month)</p>
                        </div>
                        <div className="pt-3 border-t border-green-500/30">
                          <p className="text-green-300 font-bold text-xl">ROI: 1,171%</p>
                          <p className="text-gray-400">$2,400 saved - $189 cost = $2,211 net monthly savings</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-blue-900/40 to-cyan-900/20 border border-blue-500/40 rounded-lg p-6">
                      <h5 className="text-blue-300 font-bold text-lg mb-4">📈 Qualitative Wins</h5>
                      <ul className="space-y-3 text-sm text-gray-300">
                        <li className="flex items-start gap-2">
                          <span className="text-blue-400 text-lg">•</span>
                          <span><strong>Better customer experience:</strong> Immediate welcome feels professional and responsive</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-400 text-lg">•</span>
                          <span><strong>Reduced churn:</strong> 18% improvement in 30-day retention (faster value realization)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-400 text-lg">•</span>
                          <span><strong>Team morale:</strong> CS team focuses on high-value customer calls instead of data entry</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-400 text-lg">•</span>
                          <span><strong>Scalability:</strong> Can handle 10x growth without adding CS headcount</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-400 text-lg">•</span>
                          <span><strong>Data quality:</strong> CRM always has complete, accurate customer data</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-cyan-900/20 to-blue-900/10 border border-cyan-500/30 rounded-xl p-6">
                  <h4 className="text-xl font-bold text-cyan-300 mb-4">💡 Key Takeaways</h4>
                  <div className="space-y-4 text-gray-300">
                    <div className="flex items-start gap-3">
                      <span className="text-cyan-400 text-xl flex-shrink-0">1.</span>
                      <div>
                        <p className="font-semibold text-white mb-1">Start with your biggest time sink</p>
                        <p className="text-sm text-gray-400">CloudSync identified that onboarding consumed the most repetitive team time. Automating it first gave immediate ROI.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-cyan-400 text-xl flex-shrink-0">2.</span>
                      <div>
                        <p className="font-semibold text-white mb-1">Use routers for personalization at scale</p>
                        <p className="text-sm text-gray-400">Different customer tiers got appropriate treatment automatically - no manual sorting required.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-cyan-400 text-xl flex-shrink-0">3.</span>
                      <div>
                        <p className="font-semibold text-white mb-1">Error handling prevents broken customer experiences</p>
                        <p className="text-sm text-gray-400">Retry handlers ensured critical steps (HubSpot CRM) completed even during API hiccups. Commit handlers prevented notification failures from blocking the entire workflow.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-cyan-400 text-xl flex-shrink-0">4.</span>
                      <div>
                        <p className="font-semibold text-white mb-1">Webhooks beat polling for time-sensitive workflows</p>
                        <p className="text-sm text-gray-400">Instant Stripe webhook meant customers got welcome emails within 60 seconds, not 15 minutes (polling interval).</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 flex items-center gap-3">
                <div className="w-2 h-10 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
                Frequently Asked Questions
              </h2>
              <FAQSchema faqs={faqs} />
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-br from-blue-900/40 via-purple-900/40 to-pink-900/40 rounded-2xl p-8 md:p-12 text-center border border-blue-500/30">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Master Automation with Make?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Learn how to build sophisticated automation workflows that save time, reduce errors, and scale your business operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/courses/ai-automations"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all shadow-lg hover:shadow-blue-500/50"
                >
                  <Zap className="w-5 h-5" />
                  Explore AI Automation Courses
                </Link>
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 bg-zinc-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-zinc-700 transition-all border border-zinc-700"
                >
                  Read More Guides
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
