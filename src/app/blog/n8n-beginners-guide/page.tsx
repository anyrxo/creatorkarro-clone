import React from 'react'
import Link from 'next/link'
import { generateBlogPostSchema } from '@/lib/blog-schema'

// Comprehensive SEO Metadata
export const metadata = {
  title: "N8N for Beginners 2025: Complete Course Guide to Business Automation",
  description: "Master N8N automation with our complete beginner's guide. Learn workflow automation, save 40+ hours/week. Step-by-step tutorials & course recommendations.",
  keywords: [
    "n8n for beginners", "n8n course", "n8n tutorial", "n8n automation guide", 
    "business automation course", "workflow automation tutorial", "n8n vs zapier", 
    "n8n training", "automation course online", "n8n beginner course",
    "how to learn n8n", "n8n step by step", "business process automation",
    "n8n workflow examples", "automation training", "n8n certification"
  ],
  authors: [{ name: "IImagined.ai Team", url: "https://iimagined.ai" }],
  creator: "IImagined.ai",
  publisher: "IImagined.ai",
  category: "Technology",
  openGraph: {
    title: "N8N Beginners Guide",
    description: "Complete n8n beginners guide - step-by-step instructions, best practices, and expert tips",
    url: "https://iimagined.ai/blog/n8n-beginners-guide",
    siteName: "IImagined.ai",
    type: "article",
    publishedTime: "2025-01-15T10:00:00.000Z",
    modifiedTime: "2025-08-03T06:14:29.973Z",
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
    title: "N8N Beginners Guide",
    description: "Complete n8n beginners guide - step-by-step instructions, best practices, and expert tips",
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

      <section className="section-spacing overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div
            
            className="text-center max-w-5xl mx-auto"
          >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
                    <span className="text-orange-400 text-sm font-semibold">AUTOMATION</span>
                </div>

                <h1 className="text-3xl md:text-6xl font-bold mb-6 leading-tight">
              N8N for Beginners 2025: Complete <span className="text-orange-400">Course Guide</span> to Business Automation
                </h1>

                <p className="text-lg md:text-xl text-gray-400 mb-8">
              Master N8N automation with our step-by-step guide. <span className="text-white font-semibold">Save 40+ hours/week</span> and transform your business with intelligent workflows.
                </p>

                {/* Course CTA */}
                <div className="bg-gradient-to-r from-orange-600/20 to-purple-600/20 border border-orange-500/30 rounded-2xl p-6 mb-8">
                  <p className="text-white font-semibold mb-3"> Want the Complete N8N Mastery System?</p>
                  <p className="text-gray-300 mb-4">Skip the trial-and-error. Get our comprehensive N8N course with 20+ hours of training, templates, and 1-on-1 support.</p>
                  <Link href="/n8n-ai-automations" className="inline-block bg-gradient-to-r from-orange-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                    Get Complete N8N Course →
                  </Link>
                </div>

                
            </div>
        </div>
    </section>

      <section className="py-16 px-4 border-y border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-2xl font-bold text-white text-center mb-8">What Makes n8n Different?</h2>
                <div className="grid md:grid-cols-4 gap-4">
                    <div className="bg-zinc-900 rounded-xl p-4 text-center">
                        <div className="text-3xl mb-2">🔓</div>
                        <div className="text-white font-semibold">Open Source</div>
                        <div className="text-gray-400 text-sm">Self-host for free</div>
                    </div>
                    <div className="bg-zinc-900 rounded-xl p-4 text-center">
                        <div className="text-3xl mb-2">🔗</div>
                        <div className="text-white font-semibold">400+ Integrations</div>
                        <div className="text-gray-400 text-sm">Connect everything</div>
                    </div>
                    <div className="bg-zinc-900 rounded-xl p-4 text-center">
                        <div className="text-3xl mb-2">👀</div>
                        <div className="text-white font-semibold">Visual Builder</div>
                        <div className="text-gray-400 text-sm">See your flows</div>
                    </div>
                    <div className="bg-zinc-900 rounded-xl p-4 text-center">
                        <div className="text-3xl mb-2">💪</div>
                        <div className="text-white font-semibold">Code When Needed</div>
                        <div className="text-gray-400 text-sm">JavaScript support</div>
                    </div>
                </div>
            </div>
        </div>
    </section>

      <section
        
        className="section-spacing"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <h2 className="text-3xl font-bold text-white mb-8">Getting Started with n8n</h2>
          
            <div className="space-y-8"><div className="bg-zinc-900 rounded-xl p-6">
                <div className="flex items-start gap-4">
                    <div className="bg-orange-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">1</div>
                    <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-3">Choose Your Setup</h3>
                        <p className="text-gray-400 mb-4">Three ways to start using n8n</p>
                  
                        <div className="bg-zinc-800 rounded-lg p-6">
                            <div className="space-y-6">
                                <div>
                                    <h4 className="text-orange-400 font-semibold mb-3">Option 1: n8n Cloud (Easiest)</h4>
                                    <ul className="space-y-2 text-gray-300">
                                        <li>• Free tier: 5 workflows, 5,000 executions/month</li>
                                        <li>• No installation required</li>
                                        <li>• Automatic updates</li>
                                        <li>• Perfect for beginners</li>
                                    </ul>
                                    <div className="mt-3 p-3 bg-zinc-900 rounded">
                                        <code className="text-sm text-gray-300">Sign up at: app.n8n.io</code>
                                    </div>
                                </div>
                      
                                <div>
                                    <h4 className="text-blue-400 font-semibold mb-3">Option 2: Desktop App</h4>
                                    <ul className="space-y-2 text-gray-300">
                                        <li>• Download for Windows/Mac/Linux</li>
                                        <li>• Runs locally on your computer</li>
                                        <li>• Good for testing and development</li>
                                    </ul>
                                </div>
                      
                                <div>
                                    <h4 className="text-green-400 font-semibold mb-3">Option 3: Self-Hosted (Advanced)</h4>
                                    <ul className="space-y-2 text-gray-300">
                                        <li>• Complete control and privacy</li>
                                        <li>• Unlimited workflows and executions</li>
                                        <li>• Requires Docker or npm</li>
                                    </ul>
                                    <div className="mt-3 p-3 bg-zinc-900 rounded">
                                        <code className="text-sm text-gray-300">docker run -it --rm --name n8n -p 5678:5678 n8nio/n8n</code>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div><div className="bg-zinc-900 rounded-xl p-6">
            <div className="flex items-start gap-4">
                <div className="bg-orange-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">Understanding Core Concepts</h3>
                    <p className="text-gray-400 mb-4">Master these basics before building</p>
                  
                    <div className="bg-zinc-800 rounded-lg p-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <h4 className="text-orange-400 font-semibold mb-3">Key Terms:</h4>
                                <ul className="space-y-2 text-gray-300">
                                    <li><span className="text-white font-semibold">• Workflow:</span> Your automation flow</li>
                                    <li><span className="text-white font-semibold">• Node:</span> A single action or trigger</li>
                                    <li><span className="text-white font-semibold">• Trigger:</span> What starts your workflow</li>
                                    <li><span className="text-white font-semibold">• Execution:</span> One run of your workflow</li>
                                    <li><span className="text-white font-semibold">• Connection:</span> Link between nodes</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-blue-400 font-semibold mb-3">Node Types:</h4>
                                <ul className="space-y-2 text-gray-300">
                                    <li><span className="text-white font-semibold">• Trigger Nodes:</span> Start workflows</li>
                                    <li><span className="text-white font-semibold">• Action Nodes:</span> Do something</li>
                                    <li><span className="text-white font-semibold">• Logic Nodes:</span> IF, Switch, Merge</li>
                                    <li><span className="text-white font-semibold">• Data Nodes:</span> Transform data</li>
                                    <li><span className="text-white font-semibold">• Code Nodes:</span> Custom JavaScript</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div><div className="bg-zinc-900 rounded-xl p-6">
        <div className="flex items-start gap-4">
            <div className="bg-orange-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">3</div>
            <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-3">Build Your First Workflow</h3>
                <p className="text-gray-400 mb-4">Let's create a simple automation</p>
                  
                <div className="bg-zinc-800 rounded-lg p-6">
                    <h4 className="text-white font-semibold mb-3">Example: RSS to Discord Automation</h4>
                    <ol className="space-y-3 text-gray-300">
                        <li>1. Add RSS Feed Trigger node</li>
                        <li>2. Configure with your favorite blog URL</li>
                        <li>3. Add Discord node</li>
                        <li>4. Connect RSS output to Discord input</li>
                        <li>5. Map RSS title and link to Discord message</li>
                        <li>6. Activate workflow</li>
                    </ol>
                    
                    <div className="mt-4 p-4 bg-zinc-900 rounded">
                        <p className="text-sm text-gray-300">
                            <span className="text-orange-400 font-semibold">Result:</span> Every new blog post automatically posts to Discord!
                        </p>
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
        <h2 className="text-3xl font-bold text-white mb-8 text-center">10 Workflows That Save Hours Every Week</h2>
          
        <div className="space-y-6">
            <div className="bg-zinc-800 rounded-xl p-6">
                <h3 className="text-2xl font-bold text-orange-400 mb-4">Social Media Automation</h3>
              
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-zinc-900 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2">1. Cross-Platform Posting</h4>
                        <p className="text-sm text-gray-400 mb-2">Post once, publish everywhere</p>
                        <p className="text-sm text-gray-300">Google Sheets → Twitter, LinkedIn, Facebook</p>
                        <p className="text-green-400 text-sm mt-2">Saves: 5 hours/week</p>
                    </div>
                
                    <div className="bg-zinc-900 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2">2. Content Recycling</h4>
                        <p className="text-sm text-gray-400 mb-2">Turn blogs into social posts</p>
                        <p className="text-sm text-gray-300">RSS → AI Summary → Buffer</p>
                        <p className="text-green-400 text-sm mt-2">Saves: 3 hours/week</p>
                    </div>
                </div>
            </div>

            <div className="bg-zinc-800 rounded-xl p-6">
                <h3 className="text-2xl font-bold text-blue-400 mb-4">Email & Communication</h3>
              
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-zinc-900 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2">3. Email to Task</h4>
                        <p className="text-sm text-gray-400 mb-2">Never forget a task</p>
                        <p className="text-sm text-gray-300">Gmail → Parse → Notion/Todoist</p>
                        <p className="text-green-400 text-sm mt-2">Saves: 2 hours/week</p>
                    </div>
                
                    <div className="bg-zinc-900 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2">4. Customer Support Bot</h4>
                        <p className="text-sm text-gray-400 mb-2">Auto-respond to common questions</p>
                        <p className="text-sm text-gray-300">Email → AI → Auto Reply</p>
                        <p className="text-green-400 text-sm mt-2">Saves: 8 hours/week</p>
                    </div>
                </div>
            </div>

            <div className="bg-zinc-800 rounded-xl p-6">
                <h3 className="text-2xl font-bold text-purple-400 mb-4">Data & Analytics</h3>
              
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-zinc-900 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2">5. Competitor Monitoring</h4>
                        <p className="text-sm text-gray-400 mb-2">Track competitor changes</p>
                        <p className="text-sm text-gray-300">Web Scraper → Compare → Slack Alert</p>
                        <p className="text-green-400 text-sm mt-2">Saves: 4 hours/week</p>
                    </div>
                
                    <div className="bg-zinc-900 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2">6. Sales Report Automation</h4>
                        <p className="text-sm text-gray-400 mb-2">Daily sales summaries</p>
                        <p className="text-sm text-gray-300">Stripe → Calculate → Email Report</p>
                        <p className="text-green-400 text-sm mt-2">Saves: 1 hour/day</p>
                    </div>
                </div>
            </div><div className="grid md:grid-cols-2 gap-6">
            <div className="bg-zinc-800 rounded-xl p-6">
                <h4 className="text-xl font-bold text-white mb-3">7. Lead Generation</h4>
                <p className="text-gray-400 mb-3">Auto-collect and nurture leads</p>
                <ul className="space-y-1 text-sm text-gray-300">
                    <li>• Form → CRM → Welcome Email</li>
                    <li>• LinkedIn → Extract → Database</li>
                    <li>• Website Visitor → Enrich → Notify</li>
                </ul>
                <p className="text-green-400 text-sm mt-3">Saves: 10 hours/week</p>
            </div>

            <div className="bg-zinc-800 rounded-xl p-6">
                <h4 className="text-xl font-bold text-white mb-3">8. Content Creation</h4>
                <p className="text-gray-400 mb-3">AI-powered content pipeline</p>
                <ul className="space-y-1 text-sm text-gray-300">
                    <li>• Ideas → ChatGPT → Draft</li>
                    <li>• Video → Transcript → Blog</li>
                    <li>• Research → Summary → Post</li>
                </ul>
                <p className="text-green-400 text-sm mt-3">Saves: 15 hours/week</p>
            </div>

            <div className="bg-zinc-800 rounded-xl p-6">
                <h4 className="text-xl font-bold text-white mb-3">9. Invoice & Payments</h4>
                <p className="text-gray-400 mb-3">Automate billing workflow</p>
                <ul className="space-y-1 text-sm text-gray-300">
                    <li>• Time Tracking → Invoice</li>
                    <li>• Payment → Thank You Email</li>
                    <li>• Overdue → Reminder</li>
                </ul>
                <p className="text-green-400 text-sm mt-3">Saves: 5 hours/week</p>
            </div>

            <div className="bg-zinc-800 rounded-xl p-6">
                <h4 className="text-xl font-bold text-white mb-3">10. Backup & Security</h4>
                <p className="text-gray-400 mb-3">Protect your business</p>
                <ul className="space-y-1 text-sm text-gray-300">
                    <li>• Database → Cloud Backup</li>
                    <li>• Files → Version Control</li>
                    <li>• Monitor → Alert → Action</li>
                </ul>
                <p className="text-green-400 text-sm mt-3">Peace of mind: Priceless</p>
            </div>
        </div>
    </div>
</div>
</section>

      <section
        
        className="section-spacing"
      >
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Complete Tutorial: Build a Lead Capture System</h2>
          
        <div className="bg-zinc-900 rounded-xl p-8">
            <p className="text-gray-300 mb-6">Let's build a complete lead capture and nurture system that runs on autopilot.</p>
            
            <div className="space-y-6">
                <div className="flex items-start gap-3">
                    <span className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">1</span>
                    <div>
                        <h4 className="text-white font-semibold mb-2">Set Up Webhook Trigger</h4>
                        <p className="text-gray-400 mb-2">This receives form submissions</p>
                        <div className="bg-zinc-800 rounded p-3">
                            <code className="text-sm text-gray-300">Add Webhook node → Copy URL → Add to your form</code>
                        </div>
                    </div>
                </div>
              
                <div className="flex items-start gap-3">
                    <span className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">2</span>
                    <div>
                        <h4 className="text-white font-semibold mb-2">Validate & Clean Data</h4>
                        <p className="text-gray-400 mb-2">Ensure quality leads only</p>
                        <div className="bg-zinc-800 rounded p-3">
                            <code className="text-sm text-gray-300">IF node → Check email validity → Filter spam</code>
                        </div>
                    </div>
                </div>
              
                <div className="flex items-start gap-3">
                    <span className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">3</span>
                    <div>
                        <h4 className="text-white font-semibold mb-2">Enrich Lead Data</h4>
                        <p className="text-gray-400 mb-2">Get more info about your lead</p>
                        <div className="bg-zinc-800 rounded p-3">
                            <code className="text-sm text-gray-300">Clearbit node → Enrich email → Get company data</code>
                        </div>
                    </div>
                </div>
              
                <div className="flex items-start gap-3">
                    <span className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">4</span>
                    <div>
                        <h4 className="text-white font-semibold mb-2">Add to CRM & Email List</h4>
                        <p className="text-gray-400 mb-2">Store lead in your systems</p>
                        <div className="bg-zinc-800 rounded p-3">
                            <code className="text-sm text-gray-300">Airtable node → Create record<br/>Mailchimp node → Add subscriber</code>
                        </div>
                    </div>
                </div>
              
                <div className="flex items-start gap-3">
                    <span className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">5</span>
                    <div>
                        <h4 className="text-white font-semibold mb-2">Send Welcome Email</h4>
                        <p className="text-gray-400 mb-2">Start nurturing immediately</p>
                        <div className="bg-zinc-800 rounded p-3">
                            <code className="text-sm text-gray-300">Gmail node → Personalized welcome → Include lead magnet</code>
                        </div>
                    </div>
                </div>
              
                <div className="flex items-start gap-3">
                    <span className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">6</span>
                    <div>
                        <h4 className="text-white font-semibold mb-2">Notify Your Team</h4>
                        <p className="text-gray-400 mb-2">Alert sales for hot leads</p>
                        <div className="bg-zinc-800 rounded p-3">
                            <code className="text-sm text-gray-300">IF company size &gt; 50 → Slack notification to sales</code>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="mt-6 p-4 bg-zinc-800 rounded text-center">
                <p className="text-white">
                Result: <span className="text-orange-400 font-bold">Complete lead system in 30 minutes!</span>
                </p>
            </div>
        </div>
    </div>
</section>

      <section className="section-spacing bg-zinc-900">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Pro Tips for n8n Success</h2>
          
        <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-zinc-800 rounded-xl p-6">
                <h3 className="text-xl font-bold text-orange-400 mb-4"> Performance Tips</h3>
                <ul className="space-y-3 text-gray-300">
                    <li>• Use webhook triggers instead of polling</li>
                    <li>• Batch process data when possible</li>
                    <li>• Set execution timeouts appropriately</li>
                    <li>• Use caching for repeated API calls</li>
                    <li>• Split large workflows into smaller ones</li>
                </ul>
            </div>
            
            <div className="bg-zinc-800 rounded-xl p-6">
                <h3 className="text-xl font-bold text-blue-400 mb-4">🐛 Debugging Tips</h3>
                <ul className="space-y-3 text-gray-300">
                    <li>• Use"Execute Previous" to test nodes</li>
                    <li>• Add Set nodes to inspect data</li>
                    <li>• Enable workflow logging</li>
                    <li>• Test with small data sets first</li>
                    <li>• Use Try/Catch for error handling</li>
                </ul>
            </div>
            
            <div className="bg-zinc-800 rounded-xl p-6">
                <h3 className="text-xl font-bold text-purple-400 mb-4">🔒 Security Best Practices</h3>
                <ul className="space-y-3 text-gray-300">
                    <li>• Store credentials securely</li>
                    <li>• Use environment variables</li>
                    <li>• Limit webhook access with auth</li>
                    <li>• Regular backup your workflows</li>
                    <li>• Monitor execution logs</li>
                </ul>
            </div>
            
            <div className="bg-zinc-800 rounded-xl p-6">
                <h3 className="text-xl font-bold text-green-400 mb-4"> Workflow Design</h3>
                <ul className="space-y-3 text-gray-300">
                    <li>• Keep workflows simple and focused</li>
                    <li>• Use sub-workflows for reusability</li>
                    <li>• Add notes to complex nodes</li>
                    <li>• Version control your workflows</li>
                    <li>• Test edge cases thoroughly</li>
                </ul>
            </div>
        </div>
    </div>
</section>

      <section className="section-spacing">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Essential n8n Resources</h2>
          
        <div className="bg-zinc-900 rounded-xl p-8">
            <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <h3 className="text-lg font-bold text-orange-400 mb-4">Official Resources</h3>
                    <ul className="space-y-2 text-gray-300">
                        <li>• <span className="text-white">Documentation:</span> docs.n8n.io</li>
                        <li>• <span className="text-white">Community Forum:</span> community.n8n.io</li>
                        <li>• <span className="text-white">Workflow Library:</span> n8n.io/workflows</li>
                        <li>• <span className="text-white">YouTube Channel:</span> n8n tutorials</li>
                        <li>• <span className="text-white">Blog:</span> n8n.io/blog</li>
                    </ul>
                </div>
              
                <div>
                    <h3 className="text-lg font-bold text-blue-400 mb-4">Learning Path</h3>
                    <ol className="space-y-2 text-gray-300">
                        <li>1. Complete basic tutorials (2 hours)</li>
                        <li>2. Build 5 simple workflows (1 day)</li>
                        <li>3. Learn error handling (2 hours)</li>
                        <li>4. Master data transformation (3 hours)</li>
                        <li>5. Explore advanced nodes (ongoing)</li>
                    </ol>
                </div>
            </div>
            
            <div className="mt-6 p-4 bg-zinc-800 rounded text-center">
                <p className="text-gray-300">
                    <span className="text-orange-400 font-semibold">Pro tip:</span> Join the n8n community forum - it's incredibly helpful!
                </p>
            </div>
        </div>
    </div>
</section>

      <section
        
        className="section-spacing bg-gradient-to-b from-zinc-900 to-dark"
      >
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Automate Everything?
        </h2>
          
        <p className="text-xl text-gray-400 mb-8">
            Get my complete n8n automation blueprint with 50+ ready-to-use workflows
        </p>
          
        <Link
            href="/automation-empire"
            className="cta-button inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all"
          >
            Start Automating Today
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
        </Link>
    </div>
</section>
</div>
)
}
