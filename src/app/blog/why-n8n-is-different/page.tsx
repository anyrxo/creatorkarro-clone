import React from 'react'
import Link from 'next/link'
import { generateBlogPostSchema } from '@/lib/blog-schema'
import SmartCTA from '@/components/blog/SmartCTA'
import RelatedPosts from '@/components/blog/RelatedPosts'
import { Code, Shield, DollarSign, Unlock, GitBranch, Users, Zap, TrendingUp, CheckCircle, AlertTriangle, Rocket } from 'lucide-react'

// Comprehensive SEO Metadata
export const metadata = {
  title: "Why N8N Is Different: $2.5B Valuation, 147K Stars, Open Source vs Corporate 2025",
  description: "N8N exploded to $2.5B valuation (Oct 2025) with 147K GitHub stars, 230K+ users, $40M ARR. Not just features—fundamental philosophy: Fair-code open source, self-hosting ($5-500/mo vs Zapier $599/mo), data sovereignty, code extensibility. Copy-paste deployment + Zapier migration guide.",
  keywords: ["why n8n different", "n8n $2.5B valuation", "n8n open source", "n8n vs zapier philosophy", "self-hosted automation", "n8n 147K stars", "fair-code license", "n8n deployment guide", "zapier migration", "data sovereignty automation"],
  authors: [{ name: "Anyro", url: "https://iimagined.ai" }],
  creator: "IImagined.ai",
  publisher: "IImagined.ai",
  category: "Automation",
  openGraph: {
    title: "Why N8N Is Different: $2.5B Valuation, 147K Stars, Open Source 2025",
    description: "$2.5B valuation (Oct 2025), 147K stars, 230K+ users. Fair-code, self-hosting ($5-500/mo), data sovereignty. Copy-paste deployment.",
    url: "https://iimagined.ai/blog/why-n8n-is-different",
    siteName: "IImagined.ai",
    type: "article",
    publishedTime: "2026-02-28T10:00:00.000Z",
    modifiedTime: "2025-11-16T08:00:00.000Z",
    authors: ["Anyro"],
    tags: ["n8n open source", "self-hosted automation", "data sovereignty", "fair-code", "n8n valuation"],
    images: [{
      url: "https://iimagined.ai/images/why-n8n-is-different-og.jpg",
      width: 1200,
      height: 630,
      alt: "Why N8N Is Different - $2.5B Valuation",
      type: "image/jpeg"
    }],
    locale: "en_US"
  },
  twitter: {
    card: "summary_large_image",
    site: "@iimagined_ai",
    creator: "@iimagined_ai",
    title: "Why N8N Is Different: $2.5B Valuation, 147K Stars",
    description: "$2.5B valuation, 147K stars, 230K+ users. Open source, self-hosting, data sovereignty. Copy-paste deployment guide.",
    images: [{
      url: "https://iimagined.ai/images/why-n8n-is-different-og.jpg",
      alt: "Why N8N Is Different"
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
    canonical: "https://iimagined.ai/blog/why-n8n-is-different"
  }
}

export default function WhyN8NIsDifferent() {

const schema = generateBlogPostSchema({
  title: metadata.title,
  description: metadata.description,
  slug: "why-n8n-is-different",
  publishedTime: (metadata.openGraph as any)?.publishedTime as string,
  modifiedTime: (metadata.openGraph as any)?.modifiedTime as string,
  category: metadata.category || "Automation",
  keywords: metadata.keywords as string[] || [],
  image: (metadata.openGraph?.images as Array<{url: string}>)?.[0]?.url || ""
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
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-6">
                    <Rocket className="w-4 h-4 text-green-400" />
                    <span className="text-green-400 text-sm font-semibold">$2.5B VALUATION • 147K GITHUB STARS</span>
                </div>

                <h1 className="text-3xl md:text-6xl font-bold mb-6 leading-tight">
              Why N8N Is <span className="text-green-400">Fundamentally Different</span>
              <span className="block mt-3 text-white">From Zapier, Make & Corporate Platforms</span>
                </h1>

                <p className="text-lg md:text-xl text-gray-400 mb-8">
              This isn't about features. It's about <span className="text-white font-semibold">architecture, philosophy, and economics</span>. N8n exploded from $270M to <span className="text-white font-semibold">$2.5 billion valuation</span> (Oct 2025) with <span className="text-white font-semibold">147K GitHub stars</span>, <span className="text-white font-semibold">230K+ users</span>, and <span className="text-white font-semibold">$40M ARR</span>—proving the market wants owned, not rented infrastructure.
                </p>
            </div>
        </div>
    </section>

      {/* Real Statistics */}
      <section className="py-16 px-4 border-y border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">N8N's Explosive 2025 Growth</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
                <div className="text-center bg-zinc-900 rounded-xl p-6 border border-zinc-800">
                    <div className="text-3xl font-bold text-green-400 mb-2">$2.5B</div>
                    <div className="text-white font-semibold mb-1">Valuation (Oct 2025)</div>
                    <div className="text-gray-400 text-sm">$180M Series C (Accel)</div>
                </div>
                <div className="text-center bg-zinc-900 rounded-xl p-6 border border-zinc-800">
                    <div className="text-3xl font-bold text-blue-400 mb-2">147K</div>
                    <div className="text-white font-semibold mb-1">GitHub Stars</div>
                    <div className="text-gray-400 text-sm">Top 150 projects ever</div>
                </div>
                <div className="text-center bg-zinc-900 rounded-xl p-6 border border-zinc-800">
                    <div className="text-3xl font-bold text-purple-400 mb-2">230K+</div>
                    <div className="text-white font-semibold mb-1">Active Users</div>
                    <div className="text-gray-400 text-sm">3,000+ enterprise customers</div>
                </div>
                <div className="text-center bg-zinc-900 rounded-xl p-6 border border-zinc-800">
                    <div className="text-3xl font-bold text-yellow-400 mb-2">$40M</div>
                    <div className="text-white font-semibold mb-1">ARR (2025)</div>
                    <div className="text-gray-400 text-sm">5x growth year-over-year</div>
                </div>
            </div>

            <div className="mt-8 bg-gradient-to-r from-green-900/20 to-emerald-900/20 border border-green-500/30 rounded-xl p-6 max-w-4xl mx-auto">
                <h3 className="text-xl font-bold text-green-300 mb-4">2025 Funding Timeline:</h3>
                <div className="space-y-3 text-sm text-gray-300">
                    <div className="flex items-start gap-3">
                        <span className="text-green-400">•</span>
                        <p><strong className="text-white">March 2025:</strong> €55M Series B led by Highland Europe ($270M valuation)</p>
                    </div>
                    <div className="flex items-start gap-3">
                        <span className="text-green-400">•</span>
                        <p><strong className="text-white">October 2025:</strong> $180M Series C led by Accel ($2.5B valuation - 9x jump in 7 months!)</p>
                    </div>
                    <div className="flex items-start gap-3">
                        <span className="text-green-400">•</span>
                        <p><strong className="text-white">Community growth:</strong> 147K GitHub stars (doubled from 75K in April 2024), 2,200+ community nodes</p>
                    </div>
                </div>
                <p className="text-gray-400 text-xs mt-4 italic">
                    Sources: TechCrunch (Series C Oct 2025), n8n blog (Series B March 2025), GitHub (147K stars March 2025), Getlatka ($40M ARR)
                </p>
            </div>
        </div>
    </section>

      {/* Main Content */}
      <section className="section-spacing">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="prose prose-invert prose-lg max-w-none">

                <h2 className="text-3xl font-bold text-white mb-6">The Corporate Automation Problem</h2>

                <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Most automation platforms follow the same playbook: proprietary code, cloud-only hosting, per-execution pricing that scales with your success, and vendor lock-in. N8n took a <strong className="text-white">radically different path</strong> built on open source principles, self-hosting flexibility, and community ownership. The $2.5B valuation proves this approach works.
                </p>

                <div className="bg-zinc-900 rounded-2xl p-8 mb-12 border border-zinc-800">
                    <h3 className="text-2xl font-bold text-white mb-6">What Most Platforms Do</h3>
                    <div className="space-y-4">
                        <div className="flex items-start gap-3">
                            <AlertTriangle className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
                            <div>
                                <p className="text-white font-semibold">Proprietary Code, Zero Transparency</p>
                                <p className="text-gray-400 text-sm">Can't inspect how they process your data, can't verify security claims, can't extend functionality beyond what they've built.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <AlertTriangle className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
                            <div>
                                <p className="text-white font-semibold">Cloud-Only, No Self-Hosting Option</p>
                                <p className="text-gray-400 text-sm">Your data flows through their servers. Compliance requirements? Too bad. Regional data laws? Deal with it. Downtime? You wait.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <AlertTriangle className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
                            <div>
                                <p className="text-white font-semibold">Pricing That Punishes Success</p>
                                <p className="text-gray-400 text-sm">Zapier starts at $19.99/mo for 750 tasks, jumps to $49/mo for 2K tasks, then $69/mo for 10K. Scale to 100K tasks? That'll be $599/month. Forever.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <AlertTriangle className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
                            <div>
                                <p className="text-white font-semibold">Vendor Lock-In by Design</p>
                                <p className="text-gray-400 text-sm">Workflows are stored in proprietary formats. No export option. Want to leave? Rebuild everything from scratch on a new platform.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <h2 className="text-3xl font-bold text-white mb-8">How N8N Is Architecturally Different</h2>

                <div className="space-y-8 mb-12">
                    {/* Difference 1 */}
                    <div className="bg-zinc-900 rounded-xl p-8 border border-zinc-800">
                        <div className="flex items-start gap-4 mb-4">
                            <div className="bg-green-500 rounded-lg p-3">
                                <Code className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-2">1. Fair-Code Open Source License</h3>
                                <p className="text-gray-400">Source code is public, auditable, and community-contributed</p>
                            </div>
                        </div>

                        <div className="bg-zinc-800 rounded-lg p-6 mb-6">
                            <div className="space-y-3 text-sm text-gray-300">
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <span className="font-semibold text-white">Full source code transparency:</span> Every line of code is visible on GitHub (147K stars). Inspect security practices, understand data handling, verify claims.
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <span className="font-semibold text-white">Community contributions:</span> 2,200+ community-built nodes extend functionality beyond the core team's roadmap. Need Notion integration? Community built it. Want Linear workflows? Already exists.
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <span className="font-semibold text-white">Fork-friendly architecture:</span> Don't like how something works? Fork the repo, modify it, deploy your version. Your infrastructure, your rules.
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                            <div className="font-semibold text-blue-400 mb-2">Fair-Code Explained:</div>
                            <div className="text-gray-300 text-sm">n8n uses the Sustainable Use License (SUL), allowing free self-hosting and modification for personal/company use. The only restriction: you can't resell n8n as a competing SaaS. This protects the business model while keeping code open.</div>
                        </div>
                    </div>

                    {/* Difference 2 */}
                    <div className="bg-zinc-900 rounded-xl p-8 border border-zinc-800">
                        <div className="flex items-start gap-4 mb-4">
                            <div className="bg-blue-500 rounded-lg p-3">
                                <Shield className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-2">2. Self-Hosting = Data Sovereignty</h3>
                                <p className="text-gray-400">Your data never leaves your infrastructure</p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-zinc-800 rounded-lg p-6">
                                <h4 className="font-semibold text-white mb-3">Why This Matters:</h4>
                                <ul className="space-y-2 text-gray-300 text-sm">
                                    <li>• <span className="text-white font-semibold">GDPR/HIPAA compliance:</span> Healthcare and EU companies require data to stay in specific regions/servers</li>
                                    <li>• <span className="text-white font-semibold">Security audits:</span> Enterprise security teams can audit your infrastructure, not trust a third party</li>
                                    <li>• <span className="text-white font-semibold">Zero third-party access:</span> API keys, customer data, proprietary workflows stay on your servers</li>
                                    <li>• <span className="text-white font-semibold">Uptime control:</span> You decide redundancy, failover strategies, backup schedules</li>
                                </ul>
                            </div>

                            <div className="bg-zinc-800 rounded-lg p-6">
                                <h4 className="font-semibold text-white mb-3">Real-World Scenario:</h4>
                                <div className="text-gray-300 text-sm space-y-3">
                                    <p>A healthcare company processes patient data via automation. With cloud-only platforms, that data flows through US servers (HIPAA compliance nightmare). With n8n self-hosted in Germany, data never leaves EU infrastructure.</p>
                                    <p className="text-green-400 font-semibold">Result: Full GDPR compliance, zero third-party data processors, internal security team control.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Difference 3 with updated 2025 costs */}
                    <div className="bg-zinc-900 rounded-xl p-8 border border-zinc-800">
                        <div className="flex items-start gap-4 mb-4">
                            <div className="bg-purple-500 rounded-lg p-3">
                                <DollarSign className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-2">3. Self-Hosting Economics: Real Cost Breakdown</h3>
                                <p className="text-gray-400">From $5/month to $500/month depending on scale</p>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl p-6 border border-green-500/20 mb-6">
                            <h4 className="text-xl font-bold text-white mb-4">Real Infrastructure Costs (2025 Data)</h4>

                            <div className="space-y-4">
                                <div className="bg-zinc-900 rounded-lg p-4">
                                    <div className="text-sm font-semibold text-green-400 mb-2">Budget Self-Hosting ($5-20/month)</div>
                                    <div className="text-gray-300 text-sm space-y-1">
                                        <div>• <span className="font-semibold">Platform:</span> Zeabur, Render, Railway</div>
                                        <div>• <span className="font-semibold">Specs:</span> 512MB-1GB RAM, 1 vCPU, 10GB storage</div>
                                        <div>• <span className="font-semibold">Best for:</span> Side projects, 1-10K executions/month</div>
                                        <div className="text-green-400 font-semibold mt-2">Total: $5-20/month</div>
                                    </div>
                                </div>

                                <div className="bg-zinc-900 rounded-lg p-4">
                                    <div className="text-sm font-semibold text-blue-400 mb-2">Production Self-Hosting ($50-150/month)</div>
                                    <div className="text-gray-300 text-sm space-y-1">
                                        <div>• <span className="font-semibold">Cloud:</span> DigitalOcean, Hetzner, Vultr VPS</div>
                                        <div>• <span className="font-semibold">Specs:</span> 4GB RAM, 2 vCPU, 80GB SSD</div>
                                        <div>• <span className="font-semibold">Components:</span> PostgreSQL database, Redis, SSL cert, monitoring</div>
                                        <div>• <span className="font-semibold">Best for:</span> Small businesses, 10-100K executions/month</div>
                                        <div className="text-blue-400 font-semibold mt-2">Total: $50-150/month</div>
                                    </div>
                                </div>

                                <div className="bg-zinc-900 rounded-lg p-4">
                                    <div className="text-sm font-semibold text-purple-400 mb-2">Enterprise Self-Hosting ($300-500/month)</div>
                                    <div className="text-gray-300 text-sm space-y-1">
                                        <div>• <span className="font-semibold">Cloud:</span> AWS EC2, Google Cloud, Azure</div>
                                        <div>• <span className="font-semibold">Specs:</span> 8-16GB RAM, 4-8 vCPU, redundancy</div>
                                        <div>• <span className="font-semibold">Components:</span> Load balancer, managed DB, monitoring, backups, security</div>
                                        <div>• <span className="font-semibold">DevOps time:</span> 10-20 hours/month ($500-1K labor cost)</div>
                                        <div>• <span className="font-semibold">Best for:</span> Enterprises, unlimited executions</div>
                                        <div className="text-purple-400 font-semibold mt-2">Total: $800-1,500/month (infrastructure + labor)</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-zinc-800 rounded-lg p-6">
                            <h4 className="font-semibold text-white mb-3">Cost Comparison: Zapier vs N8N (100K executions/month)</h4>
                            <div className="space-y-3">
                                <div className="flex justify-between items-center pb-3 border-b border-zinc-700">
                                    <div>
                                        <div className="text-white font-semibold">Zapier Professional</div>
                                        <div className="text-gray-400 text-sm">100K tasks/month</div>
                                    </div>
                                    <div className="text-red-400 font-bold text-xl">$599/mo</div>
                                </div>
                                <div className="flex justify-between items-center pb-3 border-b border-zinc-700">
                                    <div>
                                        <div className="text-white font-semibold">N8N Cloud</div>
                                        <div className="text-gray-400 text-sm">Pro tier estimate</div>
                                    </div>
                                    <div className="text-yellow-400 font-bold text-xl">~$200/mo</div>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div>
                                        <div className="text-white font-semibold">N8N Self-Hosted</div>
                                        <div className="text-gray-400 text-sm">Production VPS + labor</div>
                                    </div>
                                    <div className="text-green-400 font-bold text-xl">$150/mo</div>
                                </div>
                            </div>
                            <div className="mt-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                                <div className="text-green-400 font-bold mb-1">Annual Savings vs Zapier:</div>
                                <div className="text-white text-lg">$5,388/year (75% reduction)</div>
                            </div>
                        </div>
                    </div>

                    {/* Difference 4 */}
                    <div className="bg-zinc-900 rounded-xl p-8 border border-zinc-800">
                        <div className="flex items-start gap-4 mb-4">
                            <div className="bg-yellow-500 rounded-lg p-3">
                                <Unlock className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-2">4. Code Extensibility: Custom Nodes in JavaScript/TypeScript</h3>
                                <p className="text-gray-400">Build anything beyond pre-made integrations</p>
                            </div>
                        </div>

                        <div className="bg-zinc-800 rounded-lg p-6">
                            <p className="text-gray-300 mb-4">Zapier and Make limit you to pre-built apps. Need a custom integration with your proprietary CRM? You're stuck unless they add it (which could take months or never happen).</p>

                            <div className="bg-zinc-900 rounded-lg p-4 mb-4">
                                <div className="font-semibold text-white mb-2">N8N Approach: Write Custom Nodes</div>
                                <ul className="space-y-2 text-gray-300 text-sm">
                                    <li>• <span className="font-semibold">Language:</span> JavaScript/TypeScript (most popular languages)</li>
                                    <li>• <span className="font-semibold">Documentation:</span> Comprehensive node development guides</li>
                                    <li>• <span className="font-semibold">Sharing:</span> Publish to npm, add to community nodes registry</li>
                                    <li>• <span className="font-semibold">Examples:</span> 2,200+ community nodes serve as templates</li>
                                </ul>
                            </div>

                            <div className="text-blue-400 font-semibold text-sm">Real Example: A fintech company needed integration with their legacy banking API. Built custom n8n node in 3 days, deployed internally, never dependent on vendor roadmap.</div>
                        </div>
                    </div>

                    {/* Difference 5 */}
                    <div className="bg-zinc-900 rounded-xl p-8 border border-zinc-800">
                        <div className="flex items-start gap-4 mb-4">
                            <div className="bg-pink-500 rounded-lg p-3">
                                <Users className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-2">5. Community-Driven vs Corporate-Controlled Roadmap</h3>
                                <p className="text-gray-400">Features driven by users, not quarterly revenue targets</p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-zinc-800 rounded-lg p-6">
                                <h4 className="font-semibold text-red-400 mb-3">Corporate Platform Roadmaps:</h4>
                                <ul className="space-y-2 text-gray-300 text-sm">
                                    <li>• Features prioritized by revenue potential</li>
                                    <li>• Enterprise requests get priority over SMBs</li>
                                    <li>• Deprecation without warning (see Zapier's platform changes)</li>
                                    <li>• Limited visibility into what's coming</li>
                                </ul>
                            </div>

                            <div className="bg-zinc-800 rounded-lg p-6">
                                <h4 className="font-semibold text-green-400 mb-3">N8N Community Roadmap:</h4>
                                <ul className="space-y-2 text-gray-300 text-sm">
                                    <li>• Public GitHub discussions vote on features</li>
                                    <li>• Community can submit PRs for missing features</li>
                                    <li>• Transparent changelog and release notes</li>
                                    <li>• Self-hosters aren't second-class citizens</li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 mt-6">
                            <div className="text-blue-400 font-semibold mb-2">Example: AI Integration Explosion</div>
                            <div className="text-gray-300 text-sm">When LLMs exploded in 2023-2024, n8n added 70+ LangChain nodes within months based on community demand. Zapier took over a year to add comparable AI features. Why? N8N's community submitted PRs; Zapier had to fit it into corporate roadmap.</div>
                        </div>
                    </div>
                </div>

                {/* Copy-Paste Deployment Guide */}
                <h2 className="text-3xl font-bold text-white mb-8">Copy-Paste Self-Hosting Deployment (10-20 Minutes)</h2>

                <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-500/30 rounded-2xl p-8 mb-12">
                    <h3 className="text-2xl font-bold text-green-300 mb-6">Docker Compose Production Setup</h3>
                    <p className="text-gray-300 mb-6">Complete production-ready deployment with PostgreSQL, Redis, SSL. Deploy in 15 minutes.</p>

                    <div className="bg-black rounded-lg p-6 mb-6">
                        <p className="text-green-400 font-mono text-sm mb-4">📋 COPY-PASTE docker-compose.yml:</p>
                        <div className="bg-zinc-900 rounded p-4 text-xs text-gray-300 font-mono overflow-x-auto">
                            <pre>{`version: '3.8'

services:
  postgres:
    image: postgres:15-alpine
    container_name: n8n-postgres
    restart: unless-stopped
    environment:
      POSTGRES_USER: n8n
      POSTGRES_PASSWORD: ChangeThisPassword123
      POSTGRES_DB: n8n
    volumes:
      - postgres_data:/var/lib/postgresql/data
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U n8n"]
      interval: 10s
      timeout: 5s
      retries: 5

  redis:
    image: redis:7-alpine
    container_name: n8n-redis
    restart: unless-stopped
    command: redis-server --requirepass ChangeThisRedisPassword
    volumes:
      - redis_data:/data

  n8n:
    image: n8nio/n8n:latest
    container_name: n8n
    restart: unless-stopped
    ports:
      - "5678:5678"
    environment:
      - DB_TYPE=postgresdb
      - DB_POSTGRESDB_HOST=postgres
      - DB_POSTGRESDB_USER=n8n
      - DB_POSTGRESDB_PASSWORD=ChangeThisPassword123
      - DB_POSTGRESDB_DATABASE=n8n
      - N8N_ENCRYPTION_KEY=YourEncryptionKey123
      - N8N_HOST=\${N8N_HOST}
      - N8N_PROTOCOL=https
      - WEBHOOK_URL=https://\${N8N_HOST}/
      - EXECUTIONS_MODE=queue
      - QUEUE_BULL_REDIS_HOST=redis
      - QUEUE_BULL_REDIS_PASSWORD=ChangeThisRedisPassword
    volumes:
      - n8n_data:/home/node/.n8n
    depends_on:
      postgres:
        condition: service_healthy

volumes:
  postgres_data:
  redis_data:
  n8n_data:`}</pre>
                        </div>
                    </div>

                    <div className="bg-zinc-900 rounded-lg p-6">
                        <p className="text-white font-semibold mb-4">Deploy Commands:</p>
                        <div className="space-y-3 text-sm">
                            <div className="bg-black rounded p-3">
                                <p className="text-green-400 font-mono text-xs mb-2"># Step 1: Set your domain</p>
                                <p className="text-gray-300 font-mono text-xs">export N8N_HOST=n8n.yourdomain.com</p>
                            </div>
                            <div className="bg-black rounded p-3">
                                <p className="text-green-400 font-mono text-xs mb-2"># Step 2: Start n8n</p>
                                <p className="text-gray-300 font-mono text-xs">docker-compose up -d</p>
                            </div>
                            <div className="bg-black rounded p-3">
                                <p className="text-green-400 font-mono text-xs mb-2"># Step 3: Check status</p>
                                <p className="text-gray-300 font-mono text-xs">docker-compose ps</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Inline CTA */}
                <SmartCTA blogSlug="why-n8n-is-different" variant="inline" />

                <h2 className="text-3xl font-bold text-white mb-6">When Does N8N NOT Make Sense?</h2>

                <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-6 mb-12">
                    <h3 className="text-xl font-bold text-yellow-400 mb-4">Honest Assessment: Who Should Stick with Zapier/Make</h3>
                    <div className="space-y-3 text-gray-300">
                        <div className="flex items-start gap-3">
                            <div className="text-yellow-400 mt-1">→</div>
                            <div>
                                <span className="font-semibold text-white">Non-technical teams with zero dev resources:</span> If you have no one who can SSH into a server or troubleshoot Docker, cloud-only platforms are safer. N8N Cloud exists, but self-hosting is where the value shines.
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="text-yellow-400 mt-1">→</div>
                            <div>
                                <span className="font-semibold text-white">Need 7,000+ pre-built integrations:</span> Zapier has 7,000+ apps, n8n has ~1,000. If you need obscure SaaS integrations and can't write custom nodes, Zapier's breadth wins.
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="text-yellow-400 mt-1">→</div>
                            <div>
                                <span className="font-semibold text-white">Very low execution volume with zero growth plans:</span> If you're running 500 tasks/month forever, Zapier's $20/month is fine. The cost advantage of self-hosting only matters at scale.
                            </div>
                        </div>
                    </div>
                </div>

                <h2 className="text-3xl font-bold text-white mb-6">The Philosophy: Why This Matters Beyond Features</h2>

                <p className="text-xl text-gray-300 leading-relaxed mb-8">
              The difference between n8n and corporate automation platforms isn't just technical—it's <strong className="text-white">philosophical</strong>. Do you want to build on rented infrastructure with pricing that scales against you, or own your automation infrastructure outright? The market answered: n8n went from $270M to <strong className="text-white">$2.5B valuation in 7 months</strong>.
                </p>

                <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl p-8 border border-purple-500/20 mb-12">
                    <h3 className="text-2xl font-bold text-white mb-6">The Long-Term Value Proposition</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <div className="font-semibold text-purple-400 mb-3">With Corporate Platforms:</div>
                            <ul className="space-y-2 text-gray-300 text-sm">
                                <li>• You pay forever, increasing as you grow</li>
                                <li>• Workflows are locked in their ecosystem</li>
                                <li>• Pricing can change anytime (see Zapier 2024 increases)</li>
                                <li>• Features are added when they want, not when you need</li>
                                <li>• You're a revenue line on their spreadsheet</li>
                            </ul>
                        </div>
                        <div>
                            <div className="font-semibold text-green-400 mb-3">With N8N:</div>
                            <ul className="space-y-2 text-gray-300 text-sm">
                                <li>• Fixed infrastructure cost regardless of executions</li>
                                <li>• Export workflows, migrate anytime (JSON format)</li>
                                <li>• Version lock: run any version forever if needed</li>
                                <li>• Community builds features collaboratively</li>
                                <li>• You're a contributor, not a customer</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800">
                    <div className="flex items-start gap-4">
                        <Rocket className="w-12 h-12 text-green-400 flex-shrink-0" />
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-4">The Bottom Line</h3>
                            <p className="text-xl text-gray-300 leading-relaxed">
                        N8N isn't just "open source Zapier." It's a fundamentally different architecture based on transparency, data sovereignty, cost efficiency, and community ownership. The explosive growth—<strong className="text-white">$270M to $2.5B in 7 months</strong>, <strong className="text-white">147K GitHub stars</strong>, <strong className="text-white">230K+ users</strong>, <strong className="text-white">$40M ARR</strong>—proves the market wants automation infrastructure that's <strong className="text-white">owned, not rented</strong>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

      {/* Final CTA */}
      <SmartCTA blogSlug="why-n8n-is-different" />

      {/* Related Posts */}
      <RelatedPosts currentSlug="why-n8n-is-different" limit={3} />
    </div>
  )
}
