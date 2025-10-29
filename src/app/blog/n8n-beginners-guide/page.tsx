import React from 'react'
import Link from 'next/link'
import { generateBlogPostSchema } from '@/lib/blog-schema'

// Comprehensive SEO Metadata
export const metadata = {
  title: "N8N for Beginners 2025: Complete Course Guide to Business Automation - 40+ Hours Saved Weekly",
  description: "Master N8N automation with our complete beginner's guide. Learn workflow automation, save 40+ hours/week. Step-by-step tutorials, 25+ real workflows & course recommendations.",
  keywords: [
    "n8n for beginners", "n8n course", "n8n tutorial", "n8n automation guide",
    "business automation course", "workflow automation tutorial", "n8n vs zapier",
    "n8n training", "automation course online", "n8n beginner course",
    "how to learn n8n", "n8n step by step", "business process automation",
    "n8n workflow examples", "automation training", "n8n certification",
    "n8n nodes", "n8n webhooks", "n8n javascript", "n8n integrations"
  ],
  authors: [{ name: "IImagined.ai Team", url: "https://iimagined.ai" }],
  creator: "IImagined.ai",
  publisher: "IImagined.ai",
  category: "Technology",
  openGraph: {
    title: "N8N for Beginners 2025: Complete Course Guide",
    description: "Complete n8n beginners guide - step-by-step instructions, 25+ workflows, best practices, and expert tips",
    url: "https://iimagined.ai/blog/n8n-beginners-guide",
    siteName: "IImagined.ai",
    type: "article",
    publishedTime: "2025-01-15T10:00:00.000Z",
    modifiedTime: new Date().toISOString(),
    authors: ["IImagined.ai Team"],
    tags: ["n8n", "beginners", "guide", "n8n 2025", "n8n beginners guide", "automation", "AI tools", "business growth"],
    images: [{
      url: "https://iimagined.ai/images/n8n-beginners-guide-og.jpg",
      width: 1200,
      height: 630,
      alt: "N8N Beginners Guide",
      type: "image/jpeg"
    }],
    locale: "en_US"
  },
  twitter: {
    card: "summary_large_image",
    site: "@iimagined_ai",
    creator: "@iimagined_ai",
    title: "N8N Beginners Guide - Complete 2025 Course",
    description: "Complete n8n beginners guide - step-by-step instructions, 25+ workflows, best practices, and expert tips",
    images: [{
      url: "https://iimagined.ai/images/n8n-beginners-guide-og.jpg",
      alt: "N8N Beginners Guide"
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
    canonical: "https://iimagined.ai/blog/n8n-beginners-guide"
  }
}

export default function N8nBeginnersGuide() {
  const schema = generateBlogPostSchema({
    title: metadata.title,
    description: metadata.description,
    slug: "n8n-beginners-guide",
    publishedTime: metadata.openGraph.publishedTime,
    modifiedTime: metadata.openGraph.modifiedTime,
    category: metadata.category,
    keywords: metadata.keywords,
    image: metadata.openGraph.images[0].url
  })

  return (
    <div className="min-h-screen bg-dark">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero Section */}
      <section className="section-spacing overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
              <span className="text-orange-400 text-sm font-semibold">COMPLETE BEGINNER COURSE</span>
            </div>

            <h1 className="text-3xl md:text-6xl font-bold mb-6 leading-tight">
              N8N for Beginners 2025: Complete <span className="text-orange-400">Course Guide</span> to Business Automation
            </h1>

            <p className="text-lg md:text-xl text-gray-400 mb-8">
              Master N8N automation from zero to hero. <span className="text-white font-semibold">Save 40+ hours/week</span> with 25+ ready-to-use workflows and step-by-step tutorials.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-zinc-900 rounded-xl p-4">
                <div className="text-2xl font-bold text-orange-400">25+</div>
                <div className="text-sm text-gray-400">Workflows</div>
              </div>
              <div className="bg-zinc-900 rounded-xl p-4">
                <div className="text-2xl font-bold text-blue-400">40+</div>
                <div className="text-sm text-gray-400">Hours Saved</div>
              </div>
              <div className="bg-zinc-900 rounded-xl p-4">
                <div className="text-2xl font-bold text-green-400">400+</div>
                <div className="text-sm text-gray-400">Integrations</div>
              </div>
              <div className="bg-zinc-900 rounded-xl p-4">
                <div className="text-2xl font-bold text-purple-400">Free</div>
                <div className="text-sm text-gray-400">Self-Hosted</div>
              </div>
            </div>

            {/* Course CTA #1 */}
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl p-8 mb-8 border border-blue-500/20">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">🚀</span>
                <h3 className="text-2xl font-bold text-white">Master Automation with N8N</h3>
              </div>
              <p className="text-gray-300 mb-4">Skip the trial-and-error. Get our comprehensive N8N course with 20+ hours of training, 50+ ready-to-use workflow templates, and 1-on-1 support.</p>

              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">50+</div>
                  <div className="text-sm text-gray-400">Workflow Templates</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400">20+</div>
                  <div className="text-sm text-gray-400">Hours Training</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">$5,959</div>
                  <div className="text-sm text-gray-400">Total Value</div>
                </div>
              </div>

              <div className="text-center">
                <Link href="/n8n-ai-automations" className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all">
                  Get Complete N8N Course - Just $189
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <p className="text-sm text-gray-400 mt-3">
                  Lifetime Access • 30-Day Money-Back Guarantee • Join 12,400+ Students
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is N8N Section */}
      <section className="py-16 px-4 border-y border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center flex items-center justify-center">
              <span className="mr-3">🤖</span>
              What is N8N? (And Why You Should Care)
            </h2>

            <div className="bg-zinc-900 rounded-xl p-8 mb-8">
              <p className="text-xl text-gray-300 mb-4">
                <span className="text-orange-400 font-bold">N8N</span> (pronounced "n-eight-n") is a <span className="text-white font-semibold">powerful workflow automation tool</span> that connects your apps and automates repetitive tasks. Think Zapier, but open-source, more powerful, and infinitely customizable.
              </p>
              <p className="text-gray-400">
                With N8N, you can build visual workflows that handle everything from social media posting to customer support, data processing to email marketing - all without writing a single line of code (unless you want to).
              </p>
            </div>

            <h3 className="text-2xl font-bold text-white text-center mb-8">What Makes N8N Different?</h3>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-zinc-900 rounded-xl p-4 text-center">
                <div className="text-3xl mb-2">🔓</div>
                <div className="text-white font-semibold">Open Source</div>
                <div className="text-gray-400 text-sm">Self-host for free forever</div>
              </div>
              <div className="bg-zinc-900 rounded-xl p-4 text-center">
                <div className="text-3xl mb-2">🔗</div>
                <div className="text-white font-semibold">400+ Integrations</div>
                <div className="text-gray-400 text-sm">Connect everything</div>
              </div>
              <div className="bg-zinc-900 rounded-xl p-4 text-center">
                <div className="text-3xl mb-2">👀</div>
                <div className="text-white font-semibold">Visual Builder</div>
                <div className="text-gray-400 text-sm">See your flows clearly</div>
              </div>
              <div className="bg-zinc-900 rounded-xl p-4 text-center">
                <div className="text-3xl mb-2">💪</div>
                <div className="text-white font-semibold">Code When Needed</div>
                <div className="text-gray-400 text-sm">JavaScript/Python support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started Section */}
      <section className="section-spacing">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
            <span className="mr-3">🎯</span>
            Getting Started with N8N (3 Options)
          </h2>

          <div className="space-y-8">
            {/* Option 1: Cloud */}
            <div className="bg-zinc-900 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-orange-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3">N8N Cloud (Recommended for Beginners) ☁️</h3>
                  <p className="text-gray-400 mb-4">The easiest way to start - zero setup required</p>

                  <div className="bg-zinc-800 rounded-lg p-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-orange-400 font-semibold mb-3">✅ Pros:</h4>
                        <ul className="space-y-2 text-gray-300">
                          <li className="flex items-center gap-2"><span className="text-green-400">✓</span> No installation or setup</li>
                          <li className="flex items-center gap-2"><span className="text-green-400">✓</span> Automatic updates</li>
                          <li className="flex items-center gap-2"><span className="text-green-400">✓</span> 99.9% uptime guaranteed</li>
                          <li className="flex items-center gap-2"><span className="text-green-400">✓</span> Start in 2 minutes</li>
                          <li className="flex items-center gap-2"><span className="text-green-400">✓</span> Free tier available</li>
                          <li className="flex items-center gap-2"><span className="text-green-400">✓</span> Managed infrastructure</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-blue-400 font-semibold mb-3">📊 Pricing:</h4>
                        <ul className="space-y-2 text-gray-300">
                          <li><span className="text-white font-semibold">Free:</span> 5 workflows, 5K executions/month</li>
                          <li><span className="text-white font-semibold">Starter ($20):</span> 25 workflows, 50K executions</li>
                          <li><span className="text-white font-semibold">Pro ($50):</span> Unlimited workflows</li>
                        </ul>
                      </div>
                    </div>

                    <div className="mt-4 p-4 bg-zinc-900 rounded">
                      <p className="text-sm text-gray-300 mb-2">
                        <span className="text-orange-400 font-semibold">Get Started:</span>
                      </p>
                      <code className="text-sm text-green-400">Sign up at: app.n8n.io</code>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Option 2: Desktop */}
            <div className="bg-zinc-900 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-orange-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3">Desktop App (For Testing) 💻</h3>
                  <p className="text-gray-400 mb-4">Perfect for local development and learning</p>

                  <div className="bg-zinc-800 rounded-lg p-6">
                    <h4 className="text-blue-400 font-semibold mb-3">Features:</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Runs locally on your computer</li>
                      <li>• Available for Windows, Mac, Linux</li>
                      <li>• Good for testing workflows</li>
                      <li>• No internet required</li>
                      <li>• 100% free</li>
                    </ul>

                    <div className="mt-4 p-4 bg-zinc-900 rounded">
                      <p className="text-sm text-gray-300 mb-2">
                        <span className="text-orange-400 font-semibold">Download:</span>
                      </p>
                      <code className="text-sm text-green-400">n8n.io/download</code>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Option 3: Self-Hosted */}
            <div className="bg-zinc-900 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-orange-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3">Self-Hosted (Advanced Users) 🖥️</h3>
                  <p className="text-gray-400 mb-4">Complete control and unlimited usage</p>

                  <div className="bg-zinc-800 rounded-lg p-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-green-400 font-semibold mb-3">🚀 Benefits:</h4>
                        <ul className="space-y-2 text-gray-300">
                          <li>• Unlimited everything</li>
                          <li>• Complete data privacy</li>
                          <li>• Custom integrations</li>
                          <li>• GDPR compliant</li>
                          <li>• No monthly fees</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-orange-400 font-semibold mb-3">⚙️ Requirements:</h4>
                        <ul className="space-y-2 text-gray-300">
                          <li>• Docker or Node.js</li>
                          <li>• VPS or server</li>
                          <li>• Basic command line</li>
                          <li>• Domain (optional)</li>
                        </ul>
                      </div>
                    </div>

                    <div className="mt-4 p-4 bg-zinc-900 rounded">
                      <p className="text-sm text-gray-300 mb-2">
                        <span className="text-orange-400 font-semibold">Quick Start (Docker):</span>
                      </p>
                      <pre className="text-sm text-green-400 overflow-x-auto">
                        <code>docker run -it --rm --name n8n -p 5678:5678 -v ~/.n8n:/home/node/.n8n n8nio/n8n</code>
                      </pre>
                      <p className="text-sm text-gray-400 mt-2">Access at: http://localhost:5678</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Concepts Section */}
      <section className="section-spacing bg-zinc-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
            <span className="mr-3">📚</span>
            Understanding N8N Core Concepts
          </h2>

          <div className="space-y-6">
            {/* Workflows */}
            <div className="bg-zinc-800 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-orange-400 mb-4">1. Workflows 🔄</h3>
              <p className="text-gray-300 mb-4">
                A workflow is your automation blueprint - a series of connected nodes that execute tasks in sequence or parallel.
              </p>
              <div className="bg-zinc-900 rounded-lg p-4">
                <p className="text-sm text-gray-400 mb-2">Example workflow structure:</p>
                <pre className="text-sm text-green-400">
                  <code>Trigger (New Email) → Filter (Contains "Invoice") → Download Attachment → Save to Google Drive → Send Slack Notification</code>
                </pre>
              </div>
            </div>

            {/* Nodes */}
            <div className="bg-zinc-800 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">2. Nodes 🔌</h3>
              <p className="text-gray-300 mb-4">
                Nodes are the building blocks of workflows. Each node performs one specific action.
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-zinc-900 rounded-lg p-4">
                  <h4 className="text-white font-semibold mb-2">Trigger Nodes</h4>
                  <p className="text-sm text-gray-400 mb-2">Start workflows automatically</p>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li>• Webhook (HTTP requests)</li>
                    <li>• Schedule (Cron jobs)</li>
                    <li>• Email Trigger</li>
                    <li>• Form Submit</li>
                    <li>• File Monitor</li>
                  </ul>
                </div>

                <div className="bg-zinc-900 rounded-lg p-4">
                  <h4 className="text-white font-semibold mb-2">Action Nodes</h4>
                  <p className="text-sm text-gray-400 mb-2">Do something specific</p>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li>• HTTP Request</li>
                    <li>• Gmail (Send Email)</li>
                    <li>• Slack (Post Message)</li>
                    <li>• Database Query</li>
                    <li>• File Operations</li>
                  </ul>
                </div>

                <div className="bg-zinc-900 rounded-lg p-4">
                  <h4 className="text-white font-semibold mb-2">Logic Nodes</h4>
                  <p className="text-sm text-gray-400 mb-2">Control flow and decisions</p>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li>• IF (Conditions)</li>
                    <li>• Switch (Multiple paths)</li>
                    <li>• Merge (Combine data)</li>
                    <li>• Loop (Iterate)</li>
                    <li>• Wait (Delay)</li>
                  </ul>
                </div>

                <div className="bg-zinc-900 rounded-lg p-4">
                  <h4 className="text-white font-semibold mb-2">Data Nodes</h4>
                  <p className="text-sm text-gray-400 mb-2">Transform and manipulate</p>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li>• Set (Create variables)</li>
                    <li>• Function (JavaScript)</li>
                    <li>• Code (Python)</li>
                    <li>• JSON (Parse/Stringify)</li>
                    <li>• Crypto (Hash/Encrypt)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Connections */}
            <div className="bg-zinc-800 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-purple-400 mb-4">3. Connections 🔗</h3>
              <p className="text-gray-300 mb-4">
                Connections link nodes together and pass data between them. Data flows from one node to the next like a river.
              </p>

              <div className="bg-zinc-900 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Types of Connections:</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• <span className="text-white">Main Connection:</span> Default data flow (grey line)</li>
                  <li>• <span className="text-white">Multiple Outputs:</span> Branch into different paths (IF node)</li>
                  <li>• <span className="text-white">Error Output:</span> Handle failures gracefully (red line)</li>
                </ul>
              </div>
            </div>

            {/* Executions */}
            <div className="bg-zinc-800 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-green-400 mb-4">4. Executions ▶️</h3>
              <p className="text-gray-300 mb-4">
                An execution is a single run of your workflow from start to finish.
              </p>

              <div className="bg-zinc-900 rounded-lg p-4">
                <ul className="space-y-2 text-gray-300">
                  <li>• Each execution processes one "batch" of data</li>
                  <li>• You can view execution history and logs</li>
                  <li>• Failed executions can be retried</li>
                  <li>• Executions are counted for pricing (cloud only)</li>
                </ul>
              </div>
            </div>

            {/* Credentials */}
            <div className="bg-zinc-800 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-red-400 mb-4">5. Credentials 🔐</h3>
              <p className="text-gray-300 mb-4">
                Store API keys, passwords, and tokens securely to connect to external services.
              </p>

              <div className="bg-zinc-900 rounded-lg p-4">
                <div className="space-y-3">
                  <div>
                    <p className="text-white font-semibold mb-1">🔒 Security Best Practices:</p>
                    <ul className="space-y-1 text-sm text-gray-300">
                      <li>• Never hardcode API keys in workflows</li>
                      <li>• Use credential system for all sensitive data</li>
                      <li>• Rotate credentials regularly</li>
                      <li>• Use OAuth when available</li>
                      <li>• Limit credential access by workflow</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* First Workflow Tutorial */}
      <section className="section-spacing">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-3xl font-bold text-white mb-8">🎓 Your First Workflow: RSS to Discord (10 Minutes)</h2>

          <div className="bg-orange-900/20 border border-orange-500/30 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-bold text-white mb-3">🎯 What We're Building:</h3>
            <p className="text-gray-300">
              An automation that monitors your favorite blog's RSS feed and automatically posts new articles to your Discord server. Perfect for staying updated without manual checking!
            </p>
          </div>

          <div className="space-y-6">
            {/* Step 1 */}
            <div className="bg-zinc-900 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-orange-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3">Add RSS Feed Trigger</h3>
                  <p className="text-gray-400 mb-4">This node checks the RSS feed every 15 minutes</p>

                  <div className="bg-zinc-800 rounded-lg p-4">
                    <ol className="space-y-3 text-gray-300">
                      <li>1. Click "+ Add Node" in the canvas</li>
                      <li>2. Search for "RSS Feed Trigger"</li>
                      <li>3. Add your RSS URL (e.g., https://iimagined.ai/rss.xml)</li>
                      <li>4. Set polling time to 15 minutes</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-zinc-900 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-orange-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3">Add Discord Node</h3>
                  <p className="text-gray-400 mb-4">This posts messages to your Discord channel</p>

                  <div className="bg-zinc-800 rounded-lg p-4">
                    <ol className="space-y-3 text-gray-300">
                      <li>1. Click "+ Add Node" again</li>
                      <li>2. Search for "Discord"</li>
                      <li>3. Select "Send Message" operation</li>
                      <li>4. Create Discord credentials (webhook URL)</li>
                    </ol>

                    <div className="mt-4 p-3 bg-blue-900/20 border border-blue-500/30 rounded">
                      <p className="text-sm text-blue-300 mb-2">💡 Pro Tip: Getting Discord Webhook</p>
                      <p className="text-xs text-gray-400">Server Settings → Integrations → Webhooks → New Webhook → Copy URL</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-zinc-900 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-orange-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3">Configure Message Content</h3>
                  <p className="text-gray-400 mb-4">Map RSS data to Discord message</p>

                  <div className="bg-zinc-800 rounded-lg p-4">
                    <p className="text-white font-semibold mb-3">Message Template:</p>
                    <div className="bg-zinc-950 rounded p-4 overflow-x-auto">
                      <pre className="text-sm text-green-400"><code>{`🆕 New Blog Post!

**{{$json["title"]}}**

{{$json["contentSnippet"]}}

🔗 Read more: {{$json["link"]}}`}</code></pre>
                    </div>

                    <p className="text-sm text-gray-400 mt-3">
                      The {`{{$json["field"]}}`} syntax pulls data from the RSS feed automatically!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-zinc-900 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-orange-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">4</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3">Test & Activate</h3>
                  <p className="text-gray-400 mb-4">Make sure everything works before going live</p>

                  <div className="bg-zinc-800 rounded-lg p-4">
                    <ol className="space-y-3 text-gray-300">
                      <li>1. Click "Execute Workflow" button (play icon)</li>
                      <li>2. Check your Discord for the test message</li>
                      <li>3. If successful, toggle "Active" switch (top right)</li>
                      <li>4. Click "Save" to keep your workflow</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-green-900/20 border border-green-500/30 rounded-xl text-center">
            <p className="text-2xl font-bold text-white mb-2">
              🎉 Congratulations!
            </p>
            <p className="text-gray-300">
              You just built your first N8N automation! Now every new blog post will automatically appear in Discord.
            </p>
          </div>
        </div>
      </section>

      {/* 10 Essential Workflows Section */}
      <section className="section-spacing bg-zinc-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">💎 10 Essential N8N Workflows That Save Hours Every Week</h2>

          <div className="space-y-6">
            {/* Workflow 1 */}
            <div className="bg-zinc-800 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="text-3xl">📱</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">1. Social Media Cross-Poster</h3>
                  <p className="text-gray-400 mb-3">Post once to Google Sheets, publish everywhere automatically</p>

                  <div className="bg-zinc-900 rounded-lg p-4 mb-3">
                    <pre className="text-sm text-gray-300 overflow-x-auto">
                      <code>Google Sheets (New Row) → Format Text → Post to Twitter → Post to LinkedIn → Post to Facebook → Log Results</code>
                    </pre>
                  </div>

                  <div className="grid md:grid-cols-3 gap-3 text-sm">
                    <div>
                      <span className="text-gray-400">⏱️ Time Saved:</span>
                      <span className="text-green-400 ml-2 font-semibold">5 hours/week</span>
                    </div>
                    <div>
                      <span className="text-gray-400">📊 Difficulty:</span>
                      <span className="text-yellow-400 ml-2 font-semibold">Easy</span>
                    </div>
                    <div>
                      <span className="text-gray-400">🔌 Nodes:</span>
                      <span className="text-blue-400 ml-2 font-semibold">6 nodes</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Workflow 2 */}
            <div className="bg-zinc-800 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="text-3xl">📧</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">2. Email to Task Automation</h3>
                  <p className="text-gray-400 mb-3">Turn emails into actionable tasks in your project management tool</p>

                  <div className="bg-zinc-900 rounded-lg p-4 mb-3">
                    <pre className="text-sm text-gray-300 overflow-x-auto">
                      <code>Gmail Trigger (Label: Action) → Extract Task Details → Create Notion Task → Set Priority → Send Confirmation Email → Remove Gmail Label</code>
                    </pre>
                  </div>

                  <div className="grid md:grid-cols-3 gap-3 text-sm">
                    <div>
                      <span className="text-gray-400">⏱️ Time Saved:</span>
                      <span className="text-green-400 ml-2 font-semibold">3 hours/week</span>
                    </div>
                    <div>
                      <span className="text-gray-400">📊 Difficulty:</span>
                      <span className="text-yellow-400 ml-2 font-semibold">Medium</span>
                    </div>
                    <div>
                      <span className="text-gray-400">🔌 Nodes:</span>
                      <span className="text-blue-400 ml-2 font-semibold">7 nodes</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Workflow 3 */}
            <div className="bg-zinc-800 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="text-3xl">🤖</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">3. AI Customer Support Bot</h3>
                  <p className="text-gray-400 mb-3">Auto-respond to common questions using ChatGPT</p>

                  <div className="bg-zinc-900 rounded-lg p-4 mb-3">
                    <pre className="text-sm text-gray-300 overflow-x-auto">
                      <code>Email Trigger → Categorize (IF) → Send to ChatGPT → Generate Response → Send Reply → Log to Airtable → Notify Team (if complex)</code>
                    </pre>
                  </div>

                  <div className="grid md:grid-cols-3 gap-3 text-sm">
                    <div>
                      <span className="text-gray-400">⏱️ Time Saved:</span>
                      <span className="text-green-400 ml-2 font-semibold">10 hours/week</span>
                    </div>
                    <div>
                      <span className="text-gray-400">📊 Difficulty:</span>
                      <span className="text-orange-400 ml-2 font-semibold">Medium-Hard</span>
                    </div>
                    <div>
                      <span className="text-gray-400">🔌 Nodes:</span>
                      <span className="text-blue-400 ml-2 font-semibold">9 nodes</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Workflow 4 */}
            <div className="bg-zinc-800 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="text-3xl">📊</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">4. Automated Weekly Report Generator</h3>
                  <p className="text-gray-400 mb-3">Compile metrics from all platforms into one beautiful report</p>

                  <div className="bg-zinc-900 rounded-lg p-4 mb-3">
                    <pre className="text-sm text-gray-300 overflow-x-auto">
                      <code>Schedule (Monday 9AM) → Get Instagram Stats → Get YouTube Stats → Get Email Stats → Get Sales Data → Calculate Totals → Generate PDF Report → Email to Team</code>
                    </pre>
                  </div>

                  <div className="grid md:grid-cols-3 gap-3 text-sm">
                    <div>
                      <span className="text-gray-400">⏱️ Time Saved:</span>
                      <span className="text-green-400 ml-2 font-semibold">4 hours/week</span>
                    </div>
                    <div>
                      <span className="text-gray-400">📊 Difficulty:</span>
                      <span className="text-orange-400 ml-2 font-semibold">Hard</span>
                    </div>
                    <div>
                      <span className="text-gray-400">🔌 Nodes:</span>
                      <span className="text-blue-400 ml-2 font-semibold">11 nodes</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Workflow 5 */}
            <div className="bg-zinc-800 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="text-3xl">🎥</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">5. Content Repurposing Machine</h3>
                  <p className="text-gray-400 mb-3">Turn YouTube videos into blog posts, tweets, and LinkedIn articles</p>

                  <div className="bg-zinc-900 rounded-lg p-4 mb-3">
                    <pre className="text-sm text-gray-300 overflow-x-auto">
                      <code>YouTube Trigger → Get Transcript → Send to ChatGPT (Blog) → Send to ChatGPT (Tweets) → Send to ChatGPT (LinkedIn) → Post All → Save to Notion</code>
                    </pre>
                  </div>

                  <div className="grid md:grid-cols-3 gap-3 text-sm">
                    <div>
                      <span className="text-gray-400">⏱️ Time Saved:</span>
                      <span className="text-green-400 ml-2 font-semibold">8 hours/week</span>
                    </div>
                    <div>
                      <span className="text-gray-400">📊 Difficulty:</span>
                      <span className="text-orange-400 ml-2 font-semibold">Hard</span>
                    </div>
                    <div>
                      <span className="text-gray-400">🔌 Nodes:</span>
                      <span className="text-blue-400 ml-2 font-semibold">10 nodes</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Workflow 6 */}
            <div className="bg-zinc-800 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="text-3xl">🔍</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">6. Competitor Monitoring System</h3>
                  <p className="text-gray-400 mb-3">Track competitor websites, social media, and pricing changes</p>

                  <div className="bg-zinc-900 rounded-lg p-4 mb-3">
                    <pre className="text-sm text-gray-300 overflow-x-auto">
                      <code>Schedule (Daily) → Scrape Competitor Sites → Compare with Previous → Detect Changes → Send Alert (if changes) → Update Database → Create Report</code>
                    </pre>
                  </div>

                  <div className="grid md:grid-cols-3 gap-3 text-sm">
                    <div>
                      <span className="text-gray-400">⏱️ Time Saved:</span>
                      <span className="text-green-400 ml-2 font-semibold">6 hours/week</span>
                    </div>
                    <div>
                      <span className="text-gray-400">📊 Difficulty:</span>
                      <span className="text-orange-400 ml-2 font-semibold">Hard</span>
                    </div>
                    <div>
                      <span className="text-gray-400">🔌 Nodes:</span>
                      <span className="text-blue-400 ml-2 font-semibold">9 nodes</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Workflow 7 */}
            <div className="bg-zinc-800 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="text-3xl">💰</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">7. Sales Pipeline Automation</h3>
                  <p className="text-gray-400 mb-3">From lead capture to follow-up sequences</p>

                  <div className="bg-zinc-900 rounded-lg p-4 mb-3">
                    <pre className="text-sm text-gray-300 overflow-x-auto">
                      <code>Webhook (Form Submit) → Validate Data → Enrich with Clearbit → Add to CRM → Send Welcome Email → Wait 3 Days → Send Follow-up → Notify Sales Team</code>
                    </pre>
                  </div>

                  <div className="grid md:grid-cols-3 gap-3 text-sm">
                    <div>
                      <span className="text-gray-400">⏱️ Time Saved:</span>
                      <span className="text-green-400 ml-2 font-semibold">12 hours/week</span>
                    </div>
                    <div>
                      <span className="text-gray-400">📊 Difficulty:</span>
                      <span className="text-yellow-400 ml-2 font-semibold">Medium</span>
                    </div>
                    <div>
                      <span className="text-gray-400">🔌 Nodes:</span>
                      <span className="text-blue-400 ml-2 font-semibold">10 nodes</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Workflow 8 */}
            <div className="bg-zinc-800 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="text-3xl">💳</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">8. Invoice & Payment Tracker</h3>
                  <p className="text-gray-400 mb-3">Automated invoicing and payment reminders</p>

                  <div className="bg-zinc-900 rounded-lg p-4 mb-3">
                    <pre className="text-sm text-gray-300 overflow-x-auto">
                      <code>Stripe Webhook (Payment) → Generate Invoice PDF → Send Thank You Email → Update Spreadsheet → Grant Product Access → Send Receipt → Log to Accounting</code>
                    </pre>
                  </div>

                  <div className="grid md:grid-cols-3 gap-3 text-sm">
                    <div>
                      <span className="text-gray-400">⏱️ Time Saved:</span>
                      <span className="text-green-400 ml-2 font-semibold">5 hours/week</span>
                    </div>
                    <div>
                      <span className="text-gray-400">📊 Difficulty:</span>
                      <span className="text-yellow-400 ml-2 font-semibold">Medium</span>
                    </div>
                    <div>
                      <span className="text-gray-400">🔌 Nodes:</span>
                      <span className="text-blue-400 ml-2 font-semibold">8 nodes</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Workflow 9 */}
            <div className="bg-zinc-800 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="text-3xl">🗄️</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">9. Automated Backup System</h3>
                  <p className="text-gray-400 mb-3">Never lose data again with automated backups</p>

                  <div className="bg-zinc-900 rounded-lg p-4 mb-3">
                    <pre className="text-sm text-gray-300 overflow-x-auto">
                      <code>Schedule (Daily 2AM) → Backup Database → Backup Files → Compress Archives → Upload to S3 → Upload to Google Drive → Test Restore → Send Success Report</code>
                    </pre>
                  </div>

                  <div className="grid md:grid-cols-3 gap-3 text-sm">
                    <div>
                      <span className="text-gray-400">⏱️ Time Saved:</span>
                      <span className="text-green-400 ml-2 font-semibold">2 hours/week</span>
                    </div>
                    <div>
                      <span className="text-gray-400">📊 Difficulty:</span>
                      <span className="text-red-400 ml-2 font-semibold">Very Hard</span>
                    </div>
                    <div>
                      <span className="text-gray-400">🔌 Nodes:</span>
                      <span className="text-blue-400 ml-2 font-semibold">11 nodes</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Workflow 10 */}
            <div className="bg-zinc-800 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="text-3xl">📝</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">10. SEO Content Optimizer</h3>
                  <p className="text-gray-400 mb-3">Automatically optimize blog posts for search engines</p>

                  <div className="bg-zinc-900 rounded-lg p-4 mb-3">
                    <pre className="text-sm text-gray-300 overflow-x-auto">
                      <code>Trigger (New Blog Post) → Analyze Keywords → Generate Meta Tags → Optimize Images → Create Internal Links → Submit Sitemap → Ping Search Engines → Post to Social</code>
                    </pre>
                  </div>

                  <div className="grid md:grid-cols-3 gap-3 text-sm">
                    <div>
                      <span className="text-gray-400">⏱️ Time Saved:</span>
                      <span className="text-green-400 ml-2 font-semibold">3 hours/week</span>
                    </div>
                    <div>
                      <span className="text-gray-400">📊 Difficulty:</span>
                      <span className="text-orange-400 ml-2 font-semibold">Hard</span>
                    </div>
                    <div>
                      <span className="text-gray-400">🔌 Nodes:</span>
                      <span className="text-blue-400 ml-2 font-semibold">10 nodes</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-gradient-to-r from-orange-500/10 to-purple-500/10 border border-orange-500/30 rounded-xl text-center">
            <p className="text-2xl font-bold text-white mb-2">
              Total Time Saved: <span className="text-orange-400">58+ Hours Per Week!</span>
            </p>
            <p className="text-gray-300">
              That's the equivalent of hiring 1.5 full-time employees, but automated.
            </p>
          </div>
        </div>
      </section>

      {/* Advanced Techniques Section */}
      <section className="section-spacing">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-3xl font-bold text-white mb-8">🚀 Advanced N8N Techniques</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Error Handling */}
            <div className="bg-zinc-900 rounded-xl p-6">
              <h3 className="text-xl font-bold text-orange-400 mb-4">🛡️ Error Handling</h3>
              <p className="text-gray-400 mb-4">Never let your workflows fail silently</p>

              <div className="space-y-3">
                <div className="bg-zinc-800 rounded-lg p-4">
                  <p className="text-white font-semibold mb-2">Try/Catch Pattern:</p>
                  <pre className="text-sm text-gray-300 overflow-x-auto">
                    <code>Try Node → Risky Operation
↓ (on error)
Catch Node → Log Error → Send Alert → Retry Logic</code>
                  </pre>
                </div>

                <div className="bg-zinc-800 rounded-lg p-4">
                  <p className="text-white font-semibold mb-2">Error Notification:</p>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li>• Log to file or database</li>
                    <li>• Send Slack/Discord alert</li>
                    <li>• Email to admin</li>
                    <li>• Retry with exponential backoff</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Code Nodes */}
            <div className="bg-zinc-900 rounded-xl p-6">
              <h3 className="text-xl font-bold text-blue-400 mb-4">💻 Using Code Nodes</h3>
              <p className="text-gray-400 mb-4">When visual nodes aren't enough</p>

              <div className="space-y-3">
                <div className="bg-zinc-800 rounded-lg p-4">
                  <p className="text-white font-semibold mb-2">JavaScript Example:</p>
                  <pre className="text-sm text-green-400 overflow-x-auto">
                    <code>{`// Transform data
return items.map(item => ({
  json: {
    name: item.json.name.toUpperCase(),
    score: item.json.score * 1.1,
    timestamp: new Date().toISOString()
  }
}))`}</code>
                  </pre>
                </div>

                <div className="bg-zinc-800 rounded-lg p-4">
                  <p className="text-white font-semibold mb-2">When to use code:</p>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li>• Complex data transformations</li>
                    <li>• Custom API parsing</li>
                    <li>• Mathematical calculations</li>
                    <li>• Advanced string manipulation</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Variables & Expressions */}
            <div className="bg-zinc-900 rounded-xl p-6">
              <h3 className="text-xl font-bold text-purple-400 mb-4">📊 Variables & Expressions</h3>
              <p className="text-gray-400 mb-4">Dynamic data manipulation</p>

              <div className="space-y-3">
                <div className="bg-zinc-800 rounded-lg p-4">
                  <p className="text-white font-semibold mb-2">Common Expressions:</p>
                  <pre className="text-sm text-gray-300 overflow-x-auto">
                    <code>{`{{$json["field"]}} - Access data
{{$now}} - Current timestamp
{{$env.API_KEY}} - Environment var
{{$item(0).$json["data"]}} - Previous node data`}</code>
                  </pre>
                </div>

                <div className="bg-zinc-800 rounded-lg p-4">
                  <p className="text-white font-semibold mb-2">Functions:</p>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li>• String manipulation: .toLowerCase(), .trim()</li>
                    <li>• Date formatting: .format(), .subtract()</li>
                    <li>• Math operations: .sum(), .average()</li>
                    <li>• Conditionals: IF expressions</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Performance Optimization */}
            <div className="bg-zinc-900 rounded-xl p-6">
              <h3 className="text-xl font-bold text-green-400 mb-4">⚡ Performance Optimization</h3>
              <p className="text-gray-400 mb-4">Make your workflows lightning fast</p>

              <div className="space-y-3">
                <div className="bg-zinc-800 rounded-lg p-4">
                  <p className="text-white font-semibold mb-2">Best Practices:</p>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>✅ Use webhooks instead of polling</li>
                    <li>✅ Batch process data when possible</li>
                    <li>✅ Cache frequently accessed data</li>
                    <li>✅ Use IF nodes to skip unnecessary steps</li>
                    <li>✅ Split large workflows into sub-workflows</li>
                    <li>✅ Set appropriate timeout values</li>
                    <li>❌ Don't poll APIs every minute</li>
                    <li>❌ Don't process items one-by-one</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Debugging Tips Section */}
      <section className="section-spacing bg-zinc-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-3xl font-bold text-white mb-8">🐛 Debugging N8N Workflows Like a Pro</h2>

          <div className="space-y-6">
            <div className="bg-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-orange-400 mb-4">Common Issues & Solutions</h3>

              <div className="space-y-4">
                <div className="bg-zinc-900 rounded-lg p-4">
                  <p className="text-white font-semibold mb-2">❌ Problem: "No data returned"</p>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li>✓ Check if previous node executed successfully</li>
                    <li>✓ Verify API credentials are correct</li>
                    <li>✓ Inspect the raw JSON output</li>
                    <li>✓ Test with "Execute Previous" button</li>
                  </ul>
                </div>

                <div className="bg-zinc-900 rounded-lg p-4">
                  <p className="text-white font-semibold mb-2">❌ Problem: "Expression error"</p>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li>✓ Check for typos in field names</li>
                    <li>✓ Verify data structure matches expectation</li>
                    <li>✓ Use {`{{$json}}`} to see all available fields</li>
                    <li>✓ Test expressions in the expression editor</li>
                  </ul>
                </div>

                <div className="bg-zinc-900 rounded-lg p-4">
                  <p className="text-white font-semibold mb-2">❌ Problem: "Workflow timeout"</p>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li>✓ Increase timeout in workflow settings</li>
                    <li>✓ Split workflow into smaller chunks</li>
                    <li>✓ Use batch processing for large datasets</li>
                    <li>✓ Optimize slow API calls</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-blue-400 mb-4">Debugging Tools & Techniques</h3>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-zinc-900 rounded-lg p-4">
                  <p className="text-white font-semibold mb-2">🔍 Execution Logs</p>
                  <p className="text-sm text-gray-400 mb-2">View detailed execution history</p>
                  <ul className="space-y-1 text-xs text-gray-300">
                    <li>• See input/output for each node</li>
                    <li>• Check execution time</li>
                    <li>• Identify which node failed</li>
                    <li>• View error messages</li>
                  </ul>
                </div>

                <div className="bg-zinc-900 rounded-lg p-4">
                  <p className="text-white font-semibold mb-2">🎯 Execute Previous</p>
                  <p className="text-sm text-gray-400 mb-2">Test nodes without re-running trigger</p>
                  <ul className="space-y-1 text-xs text-gray-300">
                    <li>• Click node to test</li>
                    <li>• Uses data from last execution</li>
                    <li>• Faster iteration</li>
                    <li>• No API calls wasted</li>
                  </ul>
                </div>

                <div className="bg-zinc-900 rounded-lg p-4">
                  <p className="text-white font-semibold mb-2">📝 Set Nodes</p>
                  <p className="text-sm text-gray-400 mb-2">Inspect data at any point</p>
                  <ul className="space-y-1 text-xs text-gray-300">
                    <li>• Add Set node after problem area</li>
                    <li>• View transformed data</li>
                    <li>• Debug expressions</li>
                    <li>• Validate transformations</li>
                  </ul>
                </div>

                <div className="bg-zinc-900 rounded-lg p-4">
                  <p className="text-white font-semibold mb-2">🧪 Test Workflows</p>
                  <p className="text-sm text-gray-400 mb-2">Create separate test versions</p>
                  <ul className="space-y-1 text-xs text-gray-300">
                    <li>• Duplicate production workflow</li>
                    <li>• Test with fake data</li>
                    <li>• Verify changes work</li>
                    <li>• Then deploy to production</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Best Practices */}
      <section className="section-spacing">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-3xl font-bold text-white mb-8">🔒 Security Best Practices</h2>

          <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6 mb-8">
            <p className="text-xl font-bold text-white mb-3">⚠️ Security is Critical!</p>
            <p className="text-gray-300">
              N8N workflows often handle sensitive data like API keys, customer information, and payment data. Follow these practices to keep everything secure.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-zinc-900 rounded-xl p-6">
              <h3 className="text-xl font-bold text-orange-400 mb-4">🔐 Credential Management</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <div>
                    <p className="font-semibold text-white">Always use the credential system</p>
                    <p className="text-sm text-gray-400">Never hardcode API keys in workflows</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <div>
                    <p className="font-semibold text-white">Use environment variables</p>
                    <p className="text-sm text-gray-400">For sensitive configuration values</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <div>
                    <p className="font-semibold text-white">Rotate credentials regularly</p>
                    <p className="text-sm text-gray-400">Change API keys every 90 days</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <div>
                    <p className="font-semibold text-white">Use OAuth when available</p>
                    <p className="text-sm text-gray-400">More secure than API keys</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-zinc-900 rounded-xl p-6">
              <h3 className="text-xl font-bold text-blue-400 mb-4">🛡️ Webhook Security</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <div>
                    <p className="font-semibold text-white">Enable webhook authentication</p>
                    <p className="text-sm text-gray-400">Require API key or token</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <div>
                    <p className="font-semibold text-white">Validate incoming data</p>
                    <p className="text-sm text-gray-400">Check data types and formats</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <div>
                    <p className="font-semibold text-white">Use HTTPS only</p>
                    <p className="text-sm text-gray-400">Never accept HTTP webhooks</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <div>
                    <p className="font-semibold text-white">Implement rate limiting</p>
                    <p className="text-sm text-gray-400">Prevent abuse and DDoS</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-zinc-900 rounded-xl p-6">
              <h3 className="text-xl font-bold text-purple-400 mb-4">📋 Data Handling</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <div>
                    <p className="font-semibold text-white">Minimize data retention</p>
                    <p className="text-sm text-gray-400">Only log what you need</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <div>
                    <p className="font-semibold text-white">Encrypt sensitive data</p>
                    <p className="text-sm text-gray-400">Before storing or transmitting</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <div>
                    <p className="font-semibold text-white">Sanitize user input</p>
                    <p className="text-sm text-gray-400">Prevent injection attacks</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <div>
                    <p className="font-semibold text-white">GDPR compliance</p>
                    <p className="text-sm text-gray-400">Handle EU data properly</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-zinc-900 rounded-xl p-6">
              <h3 className="text-xl font-bold text-green-400 mb-4">🔧 System Security</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <div>
                    <p className="font-semibold text-white">Keep N8N updated</p>
                    <p className="text-sm text-gray-400">Apply security patches promptly</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <div>
                    <p className="font-semibold text-white">Backup workflows regularly</p>
                    <p className="text-sm text-gray-400">Export and version control</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <div>
                    <p className="font-semibold text-white">Monitor execution logs</p>
                    <p className="text-sm text-gray-400">Detect suspicious activity</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <div>
                    <p className="font-semibold text-white">Use firewall rules</p>
                    <p className="text-sm text-gray-400">Restrict access to N8N instance</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-spacing bg-zinc-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">❓ Frequently Asked Questions</h2>

          <div className="space-y-4">
            <div className="bg-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-3">Is N8N really free?</h3>
              <p className="text-gray-300">
                Yes! N8N is 100% open source. You can self-host it for free with unlimited workflows and executions. The cloud version has a free tier (5 workflows, 5K executions/month) and paid plans starting at $20/month.
              </p>
            </div>

            <div className="bg-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-3">Do I need coding skills to use N8N?</h3>
              <p className="text-gray-300">
                No! N8N has a visual drag-and-drop interface. However, basic coding knowledge (JavaScript) helps for advanced workflows and custom transformations.
              </p>
            </div>

            <div className="bg-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-3">How does N8N compare to Zapier?</h3>
              <p className="text-gray-300">
                N8N is more powerful and flexible. It's open source, cheaper (or free), supports custom code, and gives you complete control. Zapier is easier for non-technical users but has strict limitations and expensive pricing.
              </p>
            </div>

            <div className="bg-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-3">Can N8N integrate with [my app]?</h3>
              <p className="text-gray-300">
                N8N has 400+ pre-built integrations. If your app has an API, you can connect it using the HTTP Request node. You can also create custom nodes for any service.
              </p>
            </div>

            <div className="bg-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-3">What are execution limits?</h3>
              <p className="text-gray-300">
                An execution is one run of your workflow. For example, if your workflow triggers 100 times per day, that's 100 executions. Self-hosted N8N has unlimited executions.
              </p>
            </div>

            <div className="bg-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-3">Is my data safe with N8N?</h3>
              <p className="text-gray-300">
                With self-hosted N8N, your data never leaves your server - 100% private. With N8N Cloud, data is encrypted and stored securely in EU servers (GDPR compliant).
              </p>
            </div>

            <div className="bg-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-3">Can I sell N8N workflows?</h3>
              <p className="text-gray-300">
                Yes! Many people sell N8N workflow templates and consulting services. It's a great way to monetize your automation expertise.
              </p>
            </div>

            <div className="bg-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-3">What if my workflow fails?</h3>
              <p className="text-gray-300">
                N8N has built-in error handling. You can configure workflows to retry automatically, send alerts on failure, and use Try/Catch nodes to handle errors gracefully.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="section-spacing">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-3xl font-bold text-white mb-8">📚 Essential N8N Resources & Learning Path</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-zinc-900 rounded-xl p-6">
              <h3 className="text-xl font-bold text-orange-400 mb-4">🌐 Official Resources</h3>
              <ul className="space-y-3 text-gray-300">
                <li>
                  <span className="text-white font-semibold">Documentation:</span>
                  <p className="text-sm text-gray-400">docs.n8n.io - Complete reference</p>
                </li>
                <li>
                  <span className="text-white font-semibold">Community Forum:</span>
                  <p className="text-sm text-gray-400">community.n8n.io - Get help from users</p>
                </li>
                <li>
                  <span className="text-white font-semibold">Workflow Library:</span>
                  <p className="text-sm text-gray-400">n8n.io/workflows - 1000+ templates</p>
                </li>
                <li>
                  <span className="text-white font-semibold">YouTube Channel:</span>
                  <p className="text-sm text-gray-400">Video tutorials and demos</p>
                </li>
                <li>
                  <span className="text-white font-semibold">Blog:</span>
                  <p className="text-sm text-gray-400">n8n.io/blog - Updates and tips</p>
                </li>
              </ul>
            </div>

            <div className="bg-zinc-900 rounded-xl p-6">
              <h3 className="text-xl font-bold text-blue-400 mb-4">🎯 Recommended Learning Path</h3>
              <ol className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-white font-semibold flex-shrink-0">Week 1:</span>
                  <div>
                    <p>Basic workflows (5-7 simple automations)</p>
                    <p className="text-sm text-gray-400">Focus: Triggers, basic nodes, connections</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white font-semibold flex-shrink-0">Week 2:</span>
                  <div>
                    <p>Logic and conditions (IF, Switch nodes)</p>
                    <p className="text-sm text-gray-400">Focus: Branching, decision making</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white font-semibold flex-shrink-0">Week 3:</span>
                  <div>
                    <p>Data transformation (Set, Function nodes)</p>
                    <p className="text-sm text-gray-400">Focus: Expressions, JavaScript basics</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white font-semibold flex-shrink-0">Week 4:</span>
                  <div>
                    <p>Error handling and optimization</p>
                    <p className="text-sm text-gray-400">Focus: Debugging, performance tuning</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white font-semibold flex-shrink-0">Week 5+:</span>
                  <div>
                    <p>Advanced workflows and custom nodes</p>
                    <p className="text-sm text-gray-400">Focus: Complex integrations, custom code</p>
                  </div>
                </li>
              </ol>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-orange-500/10 to-purple-500/10 border border-orange-500/30 rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-3 text-center">💡 Pro Tip for Success</h3>
            <p className="text-gray-300 text-center">
              Join the N8N community forum and Discord. Seeing how others solve problems is the fastest way to learn. Plus, the community is incredibly helpful and supportive!
            </p>
          </div>
        </div>
      </section>

      {/* Course CTA #2 */}
      <section className="section-spacing bg-zinc-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-xl p-8 border border-green-500/20">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">💎</span>
              <h3 className="text-2xl font-bold text-white">Master Automation with N8N</h3>
            </div>
            <p className="text-gray-300 mb-6">Get instant access to our complete N8N automation blueprint with 50+ ready-to-use workflows, 20+ hours of video tutorials, and lifetime updates.</p>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-zinc-800 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-green-400 mb-1">50+</div>
                <div className="text-sm text-gray-400">Workflow Templates</div>
              </div>
              <div className="bg-zinc-800 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-blue-400 mb-1">20+</div>
                <div className="text-sm text-gray-400">Hours Video Training</div>
              </div>
              <div className="bg-zinc-800 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-purple-400 mb-1">$5,959</div>
                <div className="text-sm text-gray-400">Total Value</div>
              </div>
            </div>

            <div className="text-center">
              <Link
                href="/n8n-ai-automations"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all"
              >
                Get Complete N8N Course - Just $189
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <p className="text-sm text-gray-400 mt-3">
                Lifetime Access • 30-Day Money-Back Guarantee • Join 12,400+ Students
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="section-spacing">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 p-8 rounded-xl mb-12 border border-blue-600/20">
            <h2 className="text-3xl font-bold text-white mb-8 text-center flex items-center justify-center">
              <span className="mr-3">📚</span>
              Related Articles
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/blog/essential-n8n-workflows" className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-700 hover:border-blue-500/50 transition-all">
                <h3 className="text-lg font-bold text-white mb-2">Essential N8N Workflows</h3>
                <p className="text-gray-400 text-sm mb-3">25+ must-have automation workflows for business</p>
                <span className="text-blue-400 text-sm font-semibold">Read More →</span>
              </Link>

              <Link href="/blog/zapier-automation-mastery" className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-700 hover:border-blue-500/50 transition-all">
                <h3 className="text-lg font-bold text-white mb-2">Zapier Automation Mastery</h3>
                <p className="text-gray-400 text-sm mb-3">Complete guide to Zapier vs N8N comparison</p>
                <span className="text-blue-400 text-sm font-semibold">Read More →</span>
              </Link>

              <Link href="/blog/workflow-automation-guide" className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-700 hover:border-blue-500/50 transition-all">
                <h3 className="text-lg font-bold text-white mb-2">Workflow Automation Guide</h3>
                <p className="text-gray-400 text-sm mb-3">Master business process automation from scratch</p>
                <span className="text-blue-400 text-sm font-semibold">Read More →</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
