import React from 'react'
import Link from 'next/link'
import { generateBlogPostSchema } from '@/lib/blog-schema'

// Comprehensive SEO Metadata
export const metadata = {
  title: "Email Marketing Automation: Advanced N8N Sequences",
  description: "Complete guide to building automated email sequences with N8N - step-by-step workflows, templates, and best practices",
  keywords: ["email marketing automation","automated email sequences","email automation","n8n workflows","email sequences n8n","marketing automation","workflow automation","email sequences guide"],
  authors: [{ name: "IImagined.ai Team", url: "https://iimagined.ai" }],
  creator: "IImagined.ai",
  publisher: "IImagined.ai",
  category: "Email Marketing",
  openGraph: {
    title: "Email Marketing Automation: Advanced N8N Sequences",
    description: "Complete guide to building automated email sequences with N8N - step-by-step workflows, templates, and best practices",
    url: "https://iimagined.ai/blog/email-marketing-automation-advanced-n8n-sequences",
    siteName: "IImagined.ai",
    type: "article",
    publishedTime: "2025-08-05T07:10:42.598Z",
    modifiedTime: "2025-08-05T07:10:42.598Z",
    authors: ["IImagined.ai Team"],
    tags: ["email marketing automation","automated email sequences","n8n workflows","email sequences"],
    images: [{
      url: "https://iimagined.ai/images/blog/email-marketing-automation-advanced-n8n-sequences-og.jpg",
      width: 1200,
      height: 630,
      alt: "Email Marketing Automation: Advanced N8N Sequences",
      type: "image/jpeg"
    }],
    locale: "en_US"
  },
  twitter: {
    card: "summary_large_image",
    site: "@iimagined_ai",
    creator: "@iimagined_ai",
    title: "Email Marketing Automation: Advanced N8N Sequences",
    description: "Complete guide to building automated email sequences with N8N",
    images: [{
      url: "https://iimagined.ai/images/blog/email-marketing-automation-advanced-n8n-sequences-og.jpg",
      alt: "Email Marketing Automation: Advanced N8N Sequences"
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
    canonical: "https://iimagined.ai/blog/email-marketing-automation-advanced-n8n-sequences"
  }
}

export default function EmailMarketingAutomationAdvancedN8nSequences() {
  const schema = generateBlogPostSchema({
    title: metadata.title,
    description: metadata.description,
    slug: "email-marketing-automation-advanced-n8n-sequences",
    publishedTime: metadata.openGraph.publishedTime,
    modifiedTime: metadata.openGraph.modifiedTime,
    category: metadata.category || "Email Marketing",
    keywords: metadata.keywords || [],
    image: metadata.openGraph.images[0].url
  })

    <div className="min-h-screen bg-dark">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <section className="section-spacing overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
              <span className="text-blue-400 text-sm font-semibold">N8N TUTORIAL</span>
            </div>

            <h1 className="text-3xl md:text-6xl font-bold mb-6 leading-tight">
              Advanced N8N Email Sequences: <span className="text-blue-400">Complete Workflow Tutorial</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-400 mb-8">
              Build sophisticated email automation workflows with N8N - <span className="text-white font-semibold">step-by-step tutorials, code examples, and production-ready templates</span>
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 border-y border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 p-8 rounded-xl mb-12 border border-blue-600/20">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                <span className="mr-3">📧</span>
                N8N Email Automation Fundamentals
              </h2>
              <div className="space-y-4">
                <p className="text-gray-300">
                  This comprehensive guide covers building advanced email sequences in N8N, from basic trigger workflows to complex multi-branch automation paths with conditional logic, segmentation, and personalization.
                </p>
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-zinc-900 rounded-lg p-6">
                    <h3 className="text-lg font-bold text-blue-400 mb-3">What You'll Learn</h3>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li>• Creating trigger-based email workflows</li>
                      <li>• Conditional routing and branching</li>
                      <li>• Segmentation and personalization</li>
                      <li>• Delay nodes and timing optimization</li>
                      <li>• Integration with email providers</li>
                      <li>• Error handling and retry logic</li>
                      <li>• Analytics and tracking setup</li>
                    </ul>
                  </div>
                  <div className="bg-zinc-900 rounded-lg p-6">
                    <h3 className="text-lg font-bold text-green-400 mb-3">Prerequisites</h3>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li>• N8N account (free tier works)</li>
                      <li>• Email provider API key (Gmail, SendGrid, etc.)</li>
                      <li>• Basic understanding of workflows</li>
                      <li>• JSON basics helpful but not required</li>
                      <li>• 30-60 minutes for full setup</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-600/10 to-blue-600/10 p-8 rounded-xl mb-12 border border-purple-600/20">
              <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
                <span className="mr-3">🔧</span>
                Building Your First N8N Email Sequence
              </h2>

              <div className="space-y-8">
                <div className="bg-zinc-900 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">1</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-3">Set Up Your Email Provider Integration</h3>
                      <p className="text-gray-400 mb-4">Connect N8N to your email service using API credentials.</p>
                      <div className="bg-zinc-800 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-3">For Gmail SMTP:</h4>
                        <div className="bg-dark rounded p-3 font-mono text-sm text-gray-300 mb-3">
                          <pre>{`{
  "host": "smtp.gmail.com",
  "port": 587,
  "user": "your-email@gmail.com",
  "password": "your-app-password",
  "secure": true
}`}</pre>
                        </div>
                        <p className="text-gray-400 text-sm">For SendGrid: Use API key with 'apikey' as username</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-zinc-900 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">2</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-3">Create a Webhook Trigger</h3>
                      <p className="text-gray-400 mb-4">Start your workflow when a user signs up or performs an action.</p>
                      <div className="bg-zinc-800 rounded-lg p-4 space-y-3">
                        <div>
                          <h4 className="text-blue-400 font-semibold mb-2">Expected Webhook Payload:</h4>
                          <div className="bg-dark rounded p-3 font-mono text-sm text-gray-300">
                            <pre>{`{
  "email": "user@example.com",
  "firstName": "John",
  "source": "signup_form",
  "timestamp": "2025-01-15T10:30:00Z"
}`}</pre>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-zinc-900 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">3</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-3">Build Conditional Branches for Segmentation</h3>
                      <p className="text-gray-400 mb-4">Route users to different sequences based on their data.</p>
                      <div className="bg-zinc-800 rounded-lg p-4 space-y-3">
                        <h4 className="text-white font-semibold">IF Conditions to Set Up:</h4>
                        <ul className="space-y-2 text-gray-300 text-sm list-decimal list-inside">
                          <li>IF source === "organic" → send nurture sequence</li>
                          <li>IF firstName exists → personalize with first name</li>
                          <li>IF signupDay > 5 days old → send re-engagement sequence</li>
                          <li>ELSE → send standard onboarding</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-zinc-900 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">4</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-3">Add Delays Between Emails</h3>
                      <p className="text-gray-400 mb-4">Control timing and prevent email fatigue with Wait nodes.</p>
                      <div className="bg-zinc-800 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2">Recommended Email Sequence Timing:</h4>
                        <div className="space-y-2 text-gray-300 text-sm">
                          <div>Email 1: Immediate (welcome)</div>
                          <div>Email 2: +1 day (value prop)</div>
                          <div>Email 3: +3 days (social proof)</div>
                          <div>Email 4: +7 days (offer)</div>
                          <div>Email 5: +14 days (follow-up)</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-zinc-900 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">5</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-3">Personalize Email Content with Data</h3>
                      <p className="text-gray-400 mb-4">Use interpolation to insert dynamic content from webhook data.</p>
                      <div className="bg-zinc-800 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2">Email Template with Variables:</h4>
                        <div className="bg-dark rounded p-3 font-mono text-sm text-gray-300">
                          <pre>{`Subject: Hi {{$json.firstName}},
Check This Out!

Body:
Hi {{$json.firstName}},

Thanks for joining us from {{$json.source}}.
Here's exactly what you need to know...

[Your content here]`}</pre>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-600/10 to-emerald-600/10 p-8 rounded-xl mb-12 border border-green-600/20">
              <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
                <span className="mr-3">⚙️</span>
                Advanced Workflow Patterns
              </h2>

              <div className="space-y-6">
                <div className="bg-zinc-800 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-green-400 mb-3">Pattern 1: A/B Testing Sequences</h3>
                  <p className="text-gray-400 mb-4">Randomly assign users to different email versions to test subject lines or content.</p>
                  <div className="bg-dark rounded p-3 font-mono text-sm text-gray-300 mb-3">
                    <pre>{`Random Number (0-1)
  ↓
IF < 0.5 → Send version A (Shorter subject)
ELSE → Send version B (Longer subject)
  ↓
Wait 7 days
  ↓
Track opens/clicks → Compare metrics`}</pre>
                  </div>
                </div>

                <div className="bg-zinc-800 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-green-400 mb-3">Pattern 2: Click-Dependent Branching</h3>
                  <p className="text-gray-400 mb-4">Send different follow-ups based on email engagement.</p>
                  <div className="bg-dark rounded p-3 font-mono text-sm text-gray-300">
                    <pre>{`Webhook: Track "email_clicked" event
  ↓
Query database for click status
  ↓
IF clicked == true → Send "thanks for interest" email
ELSE → Send "don't miss out" reminder
  ↓
Wait 3 days
  ↓
Send final offer`}</pre>
                  </div>
                </div>

                <div className="bg-zinc-800 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-green-400 mb-3">Pattern 3: Dynamic Content Blocks</h3>
                  <p className="text-gray-400 mb-4">Change entire email sections based on user behavior.</p>
                  <div className="bg-dark rounded p-3 font-mono text-sm text-gray-300">
                    <pre>{`Query user purchase history
  ↓
IF purchased product X → Show testimonials from similar users
IF NOT purchased → Show feature comparison chart
IF high engagement → Show premium plan upsell
ELSE → Show free tier benefits`}</pre>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-600/10 to-orange-600/10 p-8 rounded-xl border border-yellow-600/20 mb-12">
              <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
                <span className="mr-3">⚡</span>
                Optimization & Best Practices
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-zinc-900 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-yellow-400 mb-3">Email Performance</h3>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• Test send times (best: Tue-Thu 10am-2pm)</li>
                    <li>• Subject line length (35-50 chars optimal)</li>
                    <li>• Mobile-friendly HTML (60% open on mobile)</li>
                    <li>• CTA button styling and placement</li>
                    <li>• Unsubscribe compliance (required by law)</li>
                  </ul>
                </div>

                <div className="bg-zinc-900 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-orange-400 mb-3">N8N Workflow Tips</h3>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• Use "Execute Once" to prevent duplicates</li>
                    <li>• Add error handlers on all HTTP nodes</li>
                    <li>• Log failures to database for debugging</li>
                    <li>• Test with webhook test data first</li>
                    <li>• Monitor execution history daily</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-cyan-600/10 to-blue-600/10 p-8 rounded-xl mb-12 border border-cyan-600/20">
              <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
                <span className="mr-3">🔌</span>
                Email Provider Integrations Guide
              </h2>

              <div className="space-y-6">
                <div className="bg-zinc-900 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-cyan-400 mb-3">SendGrid Integration</h3>
                  <p className="text-gray-400 mb-4">Most reliable for high-volume email sending.</p>
                  <div className="bg-dark rounded p-3 font-mono text-sm text-gray-300 mb-3">
                    <pre>{`// N8N SendGrid Setup
Node: HTTP Request
Method: POST
URL: https://api.sendgrid.com/v3/mail/send
Headers:
  - Authorization: Bearer SG.xxxxx
  - Content-Type: application/json

Body:
{
  "personalizations": [{
    "to": [{"email": "{{$json.email}}"}],
    "subject": "{{$json.subject}}"
  }],
  "from": {"email": "noreply@yoursite.com"},
  "content": [{
    "type": "text/html",
    "value": "{{$json.htmlContent}}"
  }]
}`}</pre>
                  </div>
                </div>

                <div className="bg-zinc-900 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-cyan-400 mb-3">Gmail SMTP Integration</h3>
                  <p className="text-gray-400 mb-4">Good for low-volume, personal use cases.</p>
                  <div className="bg-dark rounded p-3 font-mono text-sm text-gray-300 mb-3">
                    <pre>{`// Gmail App Password (not regular password)
Steps:
1. Enable 2FA on Google account
2. Go to myaccount.google.com/apppasswords
3. Select "Mail" and "Windows Computer"
4. Copy the 16-character password
5. Use in N8N with "your-email@gmail.com"

N8N Node: Email (SMTP)
Host: smtp.gmail.com
Port: 587
User: your-email@gmail.com
Password: xxxx xxxx xxxx xxxx
TLS: ON`}</pre>
                  </div>
                </div>

                <div className="bg-zinc-900 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-cyan-400 mb-3">Mailgun Integration</h3>
                  <p className="text-gray-400 mb-4">Flexible with good deliverability.</p>
                  <div className="bg-dark rounded p-3 font-mono text-sm text-gray-300">
                    <pre>{`// Mailgun HTTP Request
URL: https://api.mailgun.net/v3/your-domain.com/messages
Auth: Basic Auth
Username: api
Password: key-xxxxx

Form Data:
- from: "noreply@your-domain.com"
- to: "{{$json.email}}"
- subject: "{{$json.subject}}"
- html: "{{$json.htmlContent}}"`}</pre>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-600/10 to-pink-600/10 p-8 rounded-xl mb-12 border border-red-600/20">
              <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
                <span className="mr-3">⚠️</span>
                Common Mistakes & Troubleshooting
              </h2>

              <div className="space-y-4">
                <div className="bg-zinc-900 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-red-400 mb-2">Workflow Loops (Most Common)</h3>
                  <p className="text-gray-400 mb-3">Problem: Workflow triggers itself repeatedly</p>
                  <p className="text-green-400 text-sm">Solution: Add "Execute Once" node or check webhook conditions</p>
                </div>

                <div className="bg-zinc-900 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-red-400 mb-2">Emails Marked as Spam</h3>
                  <p className="text-gray-400 mb-3">Problem: Bounced emails or Gmail spam folder</p>
                  <p className="text-green-400 text-sm">Solution: Add SPF/DKIM records, avoid spam trigger words, test with seed list</p>
                </div>

                <div className="bg-zinc-900 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-red-400 mb-2">Duplicate Emails Sent</h3>
                  <p className="text-gray-400 mb-3">Problem: Users receive same email multiple times</p>
                  <p className="text-green-400 text-sm">Solution: Store sent email IDs in database, check before sending, add "Only first item" filter</p>
                </div>

                <div className="bg-zinc-900 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-red-400 mb-2">Personalization Not Working</h3>
                  <p className="text-gray-400 mb-3">Problem: Variables like {{$json.firstName}} appear literally in email</p>
                  <p className="text-green-400 text-sm">Solution: Check JSON path exactly matches webhook data, use Expression editor to validate</p>
                </div>

                <div className="bg-zinc-900 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-red-400 mb-2">API Rate Limiting</h3>
                  <p className="text-gray-400 mb-3">Problem: "Too many requests" errors from email provider</p>
                  <p className="text-green-400 text-sm">Solution: Add Wait node delays, use batch sending, check provider limits</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-600/10 to-pink-600/10 p-8 rounded-xl mb-12 border border-purple-600/20">
              <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
                <span className="mr-3">📊</span>
                Measuring Email Performance
              </h2>

              <div className="space-y-6">
                <div className="bg-zinc-900 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-purple-400 mb-3">Key Metrics to Track</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Open Rate</span>
                      <span className="text-purple-400">Target: 20-30%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Click Rate</span>
                      <span className="text-purple-400">Target: 2-5%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Conversion Rate</span>
                      <span className="text-purple-400">Target: 0.5-2%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Bounce Rate</span>
                      <span className="text-red-400">Target: <1%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Unsubscribe Rate</span>
                      <span className="text-red-400">Target: <0.5%</span>
                    </div>
                  </div>
                </div>

                <div className="bg-zinc-900 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-purple-400 mb-3">N8N Tracking Implementation</h3>
                  <p className="text-gray-400 mb-3">Store email metrics in a database for analysis:</p>
                  <div className="bg-dark rounded p-3 font-mono text-sm text-gray-300">
                    <pre>{`// Database Record Structure
{
  "emailId": "unique-id",
  "recipient": "user@example.com",
  "subject": "email subject",
  "sentAt": "2025-01-15T10:30:00Z",
  "openedAt": null,
  "clickedAt": null,
  "convertedAt": null,
  "unsubscribedAt": null,
  "status": "sent" // sent, opened, clicked, bounced
}`}</pre>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-emerald-600/10 to-teal-600/10 p-8 rounded-xl mb-12 border border-emerald-600/20">
              <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
                <span className="mr-3">✅</span>
                Complete Workflow Checklist
              </h2>

              <div className="space-y-2 text-gray-300">
                <div className="flex items-center gap-3 p-3 bg-zinc-900 rounded">
                  <input type="checkbox" className="w-5 h-5" />
                  <span>Set up email provider authentication (SendGrid/Gmail/Mailgun)</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-zinc-900 rounded">
                  <input type="checkbox" className="w-5 h-5" />
                  <span>Create webhook endpoint with expected JSON structure</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-zinc-900 rounded">
                  <input type="checkbox" className="w-5 h-5" />
                  <span>Test webhook with sample data before going live</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-zinc-900 rounded">
                  <input type="checkbox" className="w-5 h-5" />
                  <span>Add IF conditions for user segmentation</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-zinc-900 rounded">
                  <input type="checkbox" className="w-5 h-5" />
                  <span>Set up Wait nodes with appropriate timing</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-zinc-900 rounded">
                  <input type="checkbox" className="w-5 h-5" />
                  <span>Configure email templates with personalization variables</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-zinc-900 rounded">
                  <input type="checkbox" className="w-5 h-5" />
                  <span>Add error handling and retry logic</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-zinc-900 rounded">
                  <input type="checkbox" className="w-5 h-5" />
                  <span>Set up analytics database for tracking</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-zinc-900 rounded">
                  <input type="checkbox" className="w-5 h-5" />
                  <span>Deploy workflow and monitor for 7 days</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-zinc-900 rounded">
                  <input type="checkbox" className="w-5 h-5" />
                  <span>Optimize based on open/click rates and feedback</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-2xl p-8 text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Master N8N Automation</h3>
            <p className="text-xl text-gray-300 mb-8">Get complete workflows, templates, and step-by-step guides</p>
            <Link href="/n8n-ai-automations" className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-12 py-6 rounded-lg font-bold text-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              Explore N8N AI Automations Course
            </Link>
          </div>
        </div>
      </section>
    </div>
}