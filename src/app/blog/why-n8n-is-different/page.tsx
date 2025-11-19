import React from 'react'
import Link from 'next/link'
import { generateBlogPostSchema } from '@/lib/blog-schema'
import SmartCTA from '@/components/blog/SmartCTA'
import RelatedPosts from '@/components/blog/RelatedPosts'

// Comprehensive SEO Metadata
export const metadata = {
  title: "Why N8N Is Different: Complete Guide & Expert Strategies",
  description: "Why N8N Is Different - comprehensive strategies, tools, and techniques for 2026",
  keywords: ["why", "n8n", "different", "why 2026", "why n8n different", "automation", "AI tools", "business growth", "productivity", "2026 strategies"],
  authors: [{ name: "Anyro", url: "https://iimagined.ai" }],
  creator: "IImagined.ai",
  publisher: "IImagined.ai",
  category: "Technology",
  openGraph: {
    title: "Why N8N Is Different: Complete Guide & Expert Strategies",
    description: "Why N8N Is Different - comprehensive strategies, tools, and techniques for 2026",
    url: "https://iimagined.ai/blog/why-n8n-is-different",
    siteName: "IImagined.ai",
    type: "article",
    publishedTime: "2026-02-28T10:00:00.000Z",
    modifiedTime: "2026-08-03T06:14:29.954Z",
    authors: ["Anyro"],
    tags: ["why", "n8n", "different", "why 2026", "why n8n different", "automation", "AI tools", "business growth"],
    images: [{
      url: "https://iimagined.ai/images/why-n8n-is-different-og.jpg",
      width: 1200,
      height: 630,
      alt: "Why N8N Is Different",
      type: "image/jpeg"
    }],
    locale: "en_US"
  },
  twitter: {
    card: "summary_large_image",
    site: "@iimagined_ai",
    creator: "@iimagined_ai", 
    title: "Why N8N Is Different: Complete Guide & Expert Strategies",
    description: "Why N8N Is Different - comprehensive strategies, tools, and techniques for 2026",
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

export default function WhyN8NisDifferent() {

const schema = generateBlogPostSchema({
  title: metadata.title,
  description: metadata.description,
  slug: "why-n8n-is-different",
  publishedTime: (metadata.openGraph as any)?.publishedTime as string,
  modifiedTime: (metadata.openGraph as any)?.modifiedTime as string,
  category: metadata.category || "Technology",
  keywords: metadata.keywords as string[] || [],
  image: (metadata.openGraph?.images as Array<{url: string}>)?.[0]?.url || ""
})

          
  return (
    <div className="min-h-screen bg-dark">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <section className="section-spacing overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div
            
            className="text-center max-w-5xl mx-auto"
          >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                    <span className="text-blue-400 text-sm font-semibold">AUTOMATION</span>
                </div>

                <h1 className="text-3xl md:text-6xl font-bold mb-6 leading-tight">
              Why N8N Beats Zapier, Make.com & Others for <span className="text-blue-400">Serious Automation</span>
                </h1>

                <p className="text-lg md:text-xl text-gray-400 mb-8">
              The technical breakdown that shows why <span className="text-white font-semibold">N8N is the automation platform of choice</span> for power users
                </p>

                
            </div>
        </div>
    </section>

      <section className="py-16 px-4 border-y border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold text-white text-center mb-8">The Automation Platform Problem</h2>
                <div className="bg-zinc-900 rounded-xl p-8">
                    <div className="space-y-4">
                        <div className="flex items-start gap-3">
                            <span className="text-red-400 mt-1">⚠</span>
                            <div>
                                <p className="text-white font-semibold">Most platforms lock you in</p>
                                <p className="text-gray-400 text-sm">Proprietary systems, no export options, vendor dependency</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-red-400 mt-1">⚠</span>
                            <div>
                                <p className="text-white font-semibold">Pricing scales with success</p>
                                <p className="text-gray-400 text-sm">The more you automate, the more you pay (forever)</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-red-400 mt-1">⚠</span>
                            <div>
                                <p className="text-white font-semibold">Limited by their imagination</p>
                                <p className="text-gray-400 text-sm">Can only do what they've pre-built, no custom code</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-red-400 mt-1">⚠</span>
                            <div>
                                <p className="text-white font-semibold">Data lives on their servers</p>
                                <p className="text-gray-400 text-sm">Privacy concerns, compliance issues, no control</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

      <section
        
        className="section-spacing"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">What Makes N8N Revolutionary</h2>
          
            <div className="space-y-8"><div className="bg-zinc-900 rounded-xl p-6">
                <div className="flex items-start gap-4">
                    <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">1</div>
                    <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-3">100% Open Source Freedom</h3>
                        <p className="text-gray-400 mb-4">Own your automations forever, modify anything, contribute back</p>
                  
                        <div className="bg-zinc-800 rounded-lg p-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="text-blue-400 font-semibold mb-2">What this means:</h4>
                                    <ul className="space-y-2 text-gray-300 text-sm">
                                        <li>✓ Self-host on your infrastructure</li>
                                        <li>✓ No vendor lock-in ever</li>
                                        <li>✓ Modify core functionality</li>
                                        <li>✓ Build custom nodes</li>
                                        <li>✓ Export/import workflows</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="text-blue-400 font-semibold mb-2">Real impact:</h4>
                                    <ul className="space-y-2 text-gray-300 text-sm">
                                        <li>• Run unlimited workflows</li>
                                        <li>• Process millions of executions</li>
                                        <li>• Keep sensitive data private</li>
                                        <li>• Scale without cost increase</li>
                                        <li>• True ownership of IP</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Inline CTA - After Open Source Freedom: 100% Free + Unlimited Workflows + No Vendor Lock-in */}
            <div className="my-8">
              <SmartCTA blogSlug="why-n8n-is-different" variant="inline" />
            </div>

            <div className="bg-zinc-900 rounded-xl p-6">
            <div className="flex items-start gap-4">
                <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">Node-Based Visual Programming</h3>
                    <p className="text-gray-400 mb-4">See your entire workflow logic at a glance</p>
                  
                    <div className="bg-zinc-800 rounded-lg p-6">
                        <h4 className="text-white font-semibold mb-3">Superior to linear builders:</h4>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3">
                                <span className="text-blue-400">→</span>
                                <span className="text-gray-300">Branch logic without confusion</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="text-blue-400">→</span>
                                <span className="text-gray-300">Parallel processing visible</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="text-blue-400">→</span>
                                <span className="text-gray-300">Debug by following the flow</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="text-blue-400">→</span>
                                <span className="text-gray-300">Reuse sub-workflows easily</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="text-blue-400">→</span>
                                <span className="text-gray-300">Complex logic stays readable</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div><div className="bg-zinc-900 rounded-xl p-6">
        <div className="flex items-start gap-4">
            <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">3</div>
            <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-3">Code When You Need It</h3>
                <p className="text-gray-400 mb-4">No artificial limitations on what's possible</p>
                  
                <div className="bg-zinc-800 rounded-lg p-6">
                    <div className="bg-zinc-900 rounded p-4 mb-4">
                        <code className="text-green-400 text-sm">
                        {`// Full JavaScript/Python support`}<br/>
                        const customLogic = items.map(item =&gt; {'{'}<br/>
                        &nbsp;&nbsp;{`// Any transformation you can imagine`}<br/>
                        &nbsp;&nbsp;return processComplexData(item);<br/>
                        {`}`});
                        </code>
                    </div>
                    <p className="text-gray-300">Mix visual nodes with custom code seamlessly. API doesn't support what you need? Write it yourself.</p>
                </div>
            </div>
        </div>
    </div><div className="bg-zinc-900 rounded-xl p-6">
    <div className="flex items-start gap-4">
        <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">4</div>
        <div className="flex-1">
            <h3 className="text-2xl font-bold text-white mb-3">Pricing That Makes Sense</h3>
            <p className="text-gray-400 mb-4">Pay for support, not usage</p>
                  
            <div className="bg-zinc-800 rounded-lg p-6">
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <h4 className="text-blue-400 font-semibold mb-2">Self-Hosted</h4>
                        <ul className="space-y-2 text-gray-300">
                            <li>• <span className="text-green-400 font-bold">$0</span> forever</li>
                            <li>• Unlimited workflows</li>
                            <li>• Unlimited executions</li>
                            <li>• Your infrastructure</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-blue-400 font-semibold mb-2">Cloud</h4>
                        <ul className="space-y-2 text-gray-300">
                            <li>• <span className="text-green-400 font-bold">$20</span>/month</li>
                            <li>• Managed hosting</li>
                            <li>• Automatic updates</li>
                            <li>• Still unlimited*</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
</div>
</section>

      <section
        
        className="section-spacing bg-zinc-900"
      >
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Head-to-Head Comparison</h2>
          
        <div className="overflow-x-auto">
            <table className="w-full">
                <thead>
                    <tr className="border-b border-gray-700">
                        <th className="text-left py-3 px-4 text-gray-400">Feature</th>
                        <th className="text-center py-3 px-4 text-blue-400">N8N</th>
                        <th className="text-center py-3 px-4 text-gray-400">Zapier</th>
                        <th className="text-center py-3 px-4 text-gray-400">Make.com</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b border-gray-800">
                        <td className="py-3 px-4 text-gray-300">Self-hosting option</td>
                        <td className="text-center py-3 px-4">✅</td>
                        <td className="text-center py-3 px-4">❌</td>
                        <td className="text-center py-3 px-4">❌</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                        <td className="py-3 px-4 text-gray-300">Visual workflow builder</td>
                        <td className="text-center py-3 px-4">✅ (Node-based)</td>
                        <td className="text-center py-3 px-4">⚠ (Linear)</td>
                        <td className="text-center py-3 px-4">✅ (Scenario)</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                        <td className="py-3 px-4 text-gray-300">Custom code support</td>
                        <td className="text-center py-3 px-4">✅ Full JS/Python</td>
                        <td className="text-center py-3 px-4">⚠ Limited</td>
                        <td className="text-center py-3 px-4">⚠ Limited</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                        <td className="py-3 px-4 text-gray-300">Pricing for 100k executions</td>
                        <td className="text-center py-3 px-4 text-green-400">$0-20</td>
                        <td className="text-center py-3 px-4 text-red-400">$750+</td>
                        <td className="text-center py-3 px-4 text-orange-400">$200+</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                        <td className="py-3 px-4 text-gray-300">Data privacy control</td>
                        <td className="text-center py-3 px-4">✅ Complete</td>
                        <td className="text-center py-3 px-4">❌</td>
                        <td className="text-center py-3 px-4">❌</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                        <td className="py-3 px-4 text-gray-300">Workflow export/import</td>
                        <td className="text-center py-3 px-4">✅</td>
                        <td className="text-center py-3 px-4">❌</td>
                        <td className="text-center py-3 px-4">⚠</td>
                    </tr>
                    <tr>
                        <td className="py-3 px-4 text-gray-300">Community nodes</td>
                        <td className="text-center py-3 px-4">✅ 300+</td>
                        <td className="text-center py-3 px-4">❌</td>
                        <td className="text-center py-3 px-4">❌</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</section>

      <section

        className="section-spacing"
      >
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Real-World N8N Success Stories</h2>

        <div className="space-y-6 mb-12">
            <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 border border-blue-500/30 rounded-xl p-6">
                <div className="flex items-start gap-4 mb-4">
                    <div className="bg-blue-500/20 rounded-lg p-3">
                        <div className="text-2xl">🏢</div>
                    </div>
                    <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2">E-commerce Company: $94K Annual Savings</h3>
                        <p className="text-gray-400 mb-3">A 50-person online retailer was paying Zapier $7,800/month for order processing automation across Shopify, ShipStation, QuickBooks, and Klaviyo.</p>
                    </div>
                </div>
                <div className="bg-zinc-900 rounded-lg p-4">
                    <h4 className="text-white font-semibold mb-3">The Switch to N8N:</h4>
                    <ul className="space-y-2 text-gray-300 text-sm mb-4">
                        <li>• Migrated 47 Zapier workflows to N8N self-hosted in 3 days</li>
                        <li>• Added custom inventory sync logic (impossible in Zapier)</li>
                        <li>• Processing 850K operations/month at zero marginal cost</li>
                        <li>• Running on $40/month DigitalOcean droplet</li>
                    </ul>
                    <div className="flex justify-between items-center pt-3 border-t border-zinc-800">
                        <span className="text-gray-400">Previous cost: $7,800/month</span>
                        <span className="text-white font-semibold">→</span>
                        <span className="text-green-400 font-bold">New cost: $40/month</span>
                    </div>
                    <p className="text-green-400 font-bold text-lg mt-2">Annual savings: $93,120</p>
                </div>
            </div>

            <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 border border-purple-500/30 rounded-xl p-6">
                <div className="flex items-start gap-4 mb-4">
                    <div className="bg-purple-500/20 rounded-lg p-3">
                        <div className="text-2xl">🚀</div>
                    </div>
                    <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2">SaaS Startup: Built MVP in 2 Weeks</h3>
                        <p className="text-gray-400 mb-3">Early-stage startup needed customer onboarding automation but couldn't afford Zapier at scale or hire engineers yet.</p>
                    </div>
                </div>
                <div className="bg-zinc-900 rounded-lg p-4">
                    <h4 className="text-white font-semibold mb-3">What They Built:</h4>
                    <ul className="space-y-2 text-gray-300 text-sm mb-4">
                        <li>• Stripe payment → create customer in PostgreSQL</li>
                        <li>• Send welcome email sequence (7 emails over 14 days)</li>
                        <li>• Provision user account in app backend via REST API</li>
                        <li>• Notify team in Slack with customer details</li>
                        <li>• Add contact to HubSpot with custom properties</li>
                    </ul>
                    <p className="text-gray-400 text-sm mb-2">Built by non-technical founder using N8N's visual interface. Scaled from 10 to 500 customers/month without changes.</p>
                    <div className="pt-3 border-t border-zinc-800">
                        <p className="text-purple-400 font-bold">Result: Onboarding time reduced from 4 hours → 2 minutes (automated)</p>
                    </div>
                </div>
            </div>

            <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 border border-green-500/30 rounded-xl p-6">
                <div className="flex items-start gap-4 mb-4">
                    <div className="bg-green-500/20 rounded-lg p-3">
                        <div className="text-2xl">📹</div>
                    </div>
                    <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2">Content Creator: 15 Hours/Week Saved</h3>
                        <p className="text-gray-400 mb-3">YouTube creator (200K subs) manually posted clips to TikTok, Instagram Reels, YouTube Shorts, Twitter – 12-15 hours weekly.</p>
                    </div>
                </div>
                <div className="bg-zinc-900 rounded-lg p-4">
                    <h4 className="text-white font-semibold mb-3">The Automation:</h4>
                    <ul className="space-y-2 text-gray-300 text-sm mb-4">
                        <li>• Watch Google Drive folder for new clips</li>
                        <li>• Auto-generate captions with Whisper API</li>
                        <li>• Add template overlays (branding, CTAs)</li>
                        <li>• Post to 4 platforms simultaneously</li>
                        <li>• Schedule posts at optimal times per platform</li>
                        <li>• Track performance in Airtable dashboard</li>
                    </ul>
                    <div className="grid md:grid-cols-2 gap-4 pt-3 border-t border-zinc-800">
                        <div>
                            <p className="text-gray-400 text-sm mb-1">Time investment:</p>
                            <p className="text-white font-semibold">6 hours to build workflow</p>
                        </div>
                        <div>
                            <p className="text-gray-400 text-sm mb-1">Weekly time saved:</p>
                            <p className="text-green-400 font-bold">15 hours (ROI in first week)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <h2 className="text-3xl font-bold text-white mb-8 text-center">Where N8N Shines Brightest</h2>

        <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-zinc-900 rounded-xl p-6">
                <div className="text-3xl mb-3">🏢</div>
                <h3 className="text-xl font-bold text-white mb-2">Enterprise Automation</h3>
                <p className="text-gray-400 mb-3">When data can't leave your servers</p>
                <ul className="space-y-1 text-sm text-gray-300">
                    <li>• GDPR/HIPAA compliance requirements</li>
                    <li>• Internal system integration (databases, APIs)</li>
                    <li>• Custom security policies (VPNs, firewalls)</li>
                    <li>• Audit trail requirements</li>
                </ul>
            </div>

            <div className="bg-zinc-900 rounded-xl p-6">
                <div className="text-3xl mb-3">🚀</div>
                <h3 className="text-xl font-bold text-white mb-2">Startup Scale</h3>
                <p className="text-gray-400 mb-3">When you need to move fast and cheap</p>
                <ul className="space-y-1 text-sm text-gray-300">
                    <li>• Rapid prototyping (build MVP in days)</li>
                    <li>• Cost-effective scaling (no per-execution fees)</li>
                    <li>• Custom integrations (write code when needed)</li>
                    <li>• Iterate without vendor dependency</li>
                </ul>
            </div>

            <div className="bg-zinc-900 rounded-xl p-6">
                <div className="text-3xl mb-3">💰</div>
                <h3 className="text-xl font-bold text-white mb-2">Creator Business</h3>
                <p className="text-gray-400 mb-3">When margins matter</p>
                <ul className="space-y-1 text-sm text-gray-300">
                    <li>• Content distribution (multi-platform posting)</li>
                    <li>• Customer onboarding (email sequences, provisioning)</li>
                    <li>• Revenue automation (payment processing)</li>
                    <li>• Analytics aggregation (cross-platform metrics)</li>
                </ul>
            </div>

            <div className="bg-zinc-900 rounded-xl p-6">
                <div className="text-3xl mb-3">👨‍💻</div>
                <h3 className="text-xl font-bold text-white mb-2">Developer Tools</h3>
                <p className="text-gray-400 mb-3">When you need real programming</p>
                <ul className="space-y-1 text-sm text-gray-300">
                    <li>• CI/CD pipelines (deploy automation)</li>
                    <li>• API orchestration (complex integrations)</li>
                    <li>• Data transformation (ETL workflows)</li>
                    <li>• Webhook processing (event-driven logic)</li>
                </ul>
            </div>
        </div>

        <div className="mt-12 bg-blue-900/20 border border-blue-500/30 rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-4">💡 When NOT to Use N8N</h3>
            <div className="space-y-3 text-gray-300">
                <p><strong className="text-white">If you need zero technical knowledge:</strong> N8N assumes some comfort with APIs, webhooks, and data structures. Absolute beginners might prefer Zapier's hand-holding.</p>
                <p><strong className="text-white">If you want fully managed infrastructure:</strong> Self-hosting means you handle updates, backups, and monitoring. Cloud version solves this but costs $20/month minimum.</p>
                <p><strong className="text-white">If you only need 1-2 simple workflows:</strong> Zapier's free tier (100 tasks/month) might be sufficient. N8N's value shows at scale (1000+ operations monthly).</p>
            </div>
        </div>
    </div>
</section>

      <section className="section-spacing bg-zinc-900">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Start Using N8N Today</h2>
          
        <div className="bg-zinc-800 rounded-xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-xl font-bold text-blue-400 mb-4">🌥 Cloud (Easiest)</h3>
                    <ol className="space-y-3 text-gray-300">
                        <li>1. Sign up at n8n.cloud</li>
                        <li>2. Create your first workflow</li>
                        <li>3. Connect your apps</li>
                        <li>4. Activate and watch magic</li>
                    </ol>
                    <p className="text-sm text-gray-400 mt-4">$20/month, no setup required</p>
                </div>
              
                <div>
                    <h3 className="text-xl font-bold text-green-400 mb-4"> Self-Host (Free)</h3>
                    <div className="bg-zinc-900 rounded p-4 mb-3">
                        <code className="text-green-400 text-sm">
                    npx n8n
                        </code>
                    </div>
                    <p className="text-gray-300 mb-3">Or with Docker:</p>
                    <div className="bg-zinc-900 rounded p-4">
                        <code className="text-green-400 text-sm">
                    docker run -it --rm \<br/>
                    &nbsp;&nbsp;-p 5678:5678 \<br/>
                    &nbsp;&nbsp;n8nio/n8n
                        </code>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

      {/* Related Posts */}
      <RelatedPosts currentSlug="why-n8n-is-different" limit={3} />
</div>
)
}
