'use client'

import Link from 'next/link'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import BlogMetrics from '@/components/BlogMetrics'

export default function CursorAICoding() {
  const heroAnimation = useScrollAnimation({ threshold: 0.2 })
  const contentAnimation = useScrollAnimation({ threshold: 0.1 })
  const processAnimation = useScrollAnimation({ threshold: 0.1 })
  const toolsAnimation = useScrollAnimation({ threshold: 0.1 })
  const ctaAnimation = useScrollAnimation({ threshold: 0.2 })

  return (
    <div className="min-h-screen bg-dark">
      <section className="section-spacing overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={heroAnimation.elementRef}
            className={`text-center max-w-5xl mx-auto scroll-fade-up ${heroAnimation.inView ? 'in-view' : ''}`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-6">
              <span className="text-indigo-400 text-sm font-semibold">CURSOR AI</span>
            </div>

            <h1 className="text-3xl md:text-6xl font-bold mb-6 leading-tight">
              Cursor AI Coding: Master the <span className="text-indigo-400">AI Editor</span> That's Changing Development Forever
            </h1>

            <p className="text-lg md:text-xl text-gray-400 mb-8">
              Unlock the full potential of <span className="text-white font-semibold">Cursor's AI pair programming</span> to write code 10x faster and ship products in days, not months
            </p>

            <BlogMetrics className="text-gray-400" publishDate="2024-12-25" readTime="24 min" />
          </div>
        </div>
      </section>

      <section className="py-16 px-4 border-y border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-white text-center mb-8">Cursor Is Revolutionizing Coding</h2>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-zinc-900 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-indigo-400 mb-2">500K+</div>
                <p className="text-gray-400 text-sm">Active Developers</p>
              </div>
              <div className="bg-zinc-900 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">10x</div>
                <p className="text-gray-400 text-sm">Faster Coding</p>
              </div>
              <div className="bg-zinc-900 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">92%</div>
                <p className="text-gray-400 text-sm">Code Accuracy</p>
              </div>
              <div className="bg-zinc-900 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">$20</div>
                <p className="text-gray-400 text-sm">Monthly Cost</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        ref={contentAnimation.elementRef}
        className={`section-spacing scroll-fade-up ${contentAnimation.inView ? 'in-view' : ''}`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-3xl font-bold text-white mb-8">Why Cursor Beats Traditional Coding</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-zinc-900 rounded-xl p-6">
              <h3 className="text-xl font-bold text-red-400 mb-4">Traditional Development</h3>
              <ul className="space-y-3 text-gray-400">
                <li>• Hours googling solutions</li>
                <li>• Manual boilerplate writing</li>
                <li>• Context switching hell</li>
                <li>• Slow debugging process</li>
                <li>• Repetitive code patterns</li>
                <li>• Limited by typing speed</li>
                <li>• Solo problem solving</li>
              </ul>
            </div>
            
            <div className="bg-zinc-900 rounded-xl p-6">
              <h3 className="text-xl font-bold text-green-400 mb-4">Cursor AI Development</h3>
              <ul className="space-y-3 text-gray-400">
                <li>• Instant code generation</li>
                <li>• AI writes boilerplate</li>
                <li>• Never leave the editor</li>
                <li>• AI-powered debugging</li>
                <li>• Pattern recognition</li>
                <li>• Think → Code instantly</li>
                <li>• AI pair programmer 24/7</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-xl p-8 text-center">
            <p className="text-xl text-gray-300 mb-4">
              "Cursor turned me from a junior dev into a shipping machine. I built and launched 3 SaaS products in 2 months that now generate $15K/month."
            </p>
            <p className="text-white font-semibold">- Michael Torres, Indie Developer</p>
          </div>
        </div>
      </section>

      <section
        ref={processAnimation.elementRef}
        className={`section-spacing bg-zinc-900 scroll-fade-up ${processAnimation.inView ? 'in-view' : ''}`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">10 Cursor Features That Make You Superhuman</h2>
          
          <div className="space-y-8">
            <div className="bg-zinc-800 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-indigo-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Chat Mode: Your AI Coding Assistant</h3>
                  <p className="text-gray-400 mb-4">Have conversations with AI about your code, architecture, and bugs.</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-zinc-900 rounded-lg p-4">
                      <h4 className="text-indigo-400 font-semibold mb-2">What You Can Ask</h4>
                      <ul className="space-y-2 text-sm text-gray-400">
                        <li>• "How do I implement auth?"</li>
                        <li>• "Refactor this for performance"</li>
                        <li>• "Explain this error"</li>
                        <li>• "Add TypeScript types"</li>
                      </ul>
                    </div>
                    <div className="bg-zinc-900 rounded-lg p-4">
                      <h4 className="text-indigo-400 font-semibold mb-2">AI Capabilities</h4>
                      <ul className="space-y-2 text-sm text-gray-400">
                        <li>• Understands entire codebase</li>
                        <li>• Suggests best practices</li>
                        <li>• Writes complete features</li>
                        <li>• Fixes bugs instantly</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-800 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-indigo-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Cmd+K: Instant Code Generation</h3>
                  <p className="text-gray-400 mb-4">Generate entire functions, components, or features with natural language.</p>
                  <div className="bg-zinc-900 rounded-lg p-4 space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="text-indigo-400">⚡</span>
                      <div>
                        <span className="text-white font-semibold">Speed:</span>
                        <span className="text-gray-400"> Write 100 lines in 10 seconds</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-indigo-400">🎯</span>
                      <div>
                        <span className="text-white font-semibold">Context:</span>
                        <span className="text-gray-400"> AI knows your entire project structure</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-indigo-400">🔧</span>
                      <div>
                        <span className="text-white font-semibold">Intelligence:</span>
                        <span className="text-gray-400"> Follows your coding style and patterns</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-indigo-400">🚀</span>
                      <div>
                        <span className="text-white font-semibold">Examples:</span>
                        <span className="text-gray-400"> "Add user authentication", "Create REST API", "Build dashboard"</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-800 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-indigo-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Copilot++: Next-Level Autocomplete</h3>
                  <p className="text-gray-400 mb-4">Predicts entire code blocks, not just single lines.</p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-zinc-900 rounded-lg p-4 text-center">
                      <div className="text-2xl mb-2">🧠</div>
                      <h4 className="text-white font-semibold mb-1">Multi-line</h4>
                      <p className="text-sm text-gray-400">Completes entire functions</p>
                    </div>
                    <div className="bg-zinc-900 rounded-lg p-4 text-center">
                      <div className="text-2xl mb-2">⚡</div>
                      <h4 className="text-white font-semibold mb-1">Fast</h4>
                      <p className="text-sm text-gray-400">< 100ms suggestions</p>
                    </div>
                    <div className="bg-zinc-900 rounded-lg p-4 text-center">
                      <div className="text-2xl mb-2">🎯</div>
                      <h4 className="text-white font-semibold mb-1">Accurate</h4>
                      <p className="text-sm text-gray-400">95% acceptance rate</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-800 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-indigo-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">4</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Codebase Q&A: Understand Any Project</h3>
                  <p className="text-gray-400 mb-4">Ask questions about your codebase and get instant answers.</p>
                  <div className="bg-zinc-900 rounded-lg p-4">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-zinc-800 rounded">
                        <span className="text-gray-300">"Where is user auth handled?"</span>
                        <span className="text-indigo-400 text-sm">→ Shows exact files</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-zinc-800 rounded">
                        <span className="text-gray-300">"How does the payment flow work?"</span>
                        <span className="text-indigo-400 text-sm">→ Explains with diagrams</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-zinc-800 rounded">
                        <span className="text-gray-300">"What depends on this function?"</span>
                        <span className="text-indigo-400 text-sm">→ Dependency analysis</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-zinc-800 rounded">
                        <span className="text-gray-300">"Find all API endpoints"</span>
                        <span className="text-indigo-400 text-sm">→ Complete endpoint list</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-800 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-indigo-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">5</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">AI Debugging: Fix Bugs in Seconds</h3>
                  <p className="text-gray-400 mb-4">AI analyzes errors and provides instant fixes.</p>
                  <div className="bg-zinc-900 rounded-lg p-4 space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="text-green-400">✓</span>
                      <span className="text-gray-300">Understands error context</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-400">✓</span>
                      <span className="text-gray-300">Suggests multiple solutions</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-400">✓</span>
                      <span className="text-gray-300">Explains why it happened</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-400">✓</span>
                      <span className="text-gray-300">Prevents future occurrences</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-400">✓</span>
                      <span className="text-gray-300">Handles complex stack traces</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-800 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-indigo-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">6</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Terminal Integration: AI DevOps</h3>
                  <p className="text-gray-400 mb-4">AI helps with terminal commands, scripts, and deployment.</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-zinc-900 rounded-lg p-4">
                      <h4 className="text-indigo-400 font-semibold mb-2">Command Help</h4>
                      <ul className="space-y-2 text-sm text-gray-400">
                        <li>• Git workflows</li>
                        <li>• Docker commands</li>
                        <li>• Database queries</li>
                        <li>• Server management</li>
                      </ul>
                    </div>
                    <div className="bg-zinc-900 rounded-lg p-4">
                      <h4 className="text-indigo-400 font-semibold mb-2">Automation</h4>
                      <ul className="space-y-2 text-sm text-gray-400">
                        <li>• Script generation</li>
                        <li>• CI/CD pipelines</li>
                        <li>• Deployment configs</li>
                        <li>• Environment setup</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 grid md:grid-cols-2 gap-6">
              <div className="bg-zinc-800 rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-4">7. Refactoring Assistant</h3>
                <p className="text-gray-400 mb-3">AI-powered code improvements</p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Performance optimization</li>
                  <li>• Code cleanup</li>
                  <li>• Pattern implementation</li>
                  <li>• Architecture improvements</li>
                </ul>
              </div>

              <div className="bg-zinc-800 rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-4">8. Documentation Writer</h3>
                <p className="text-gray-400 mb-3">Automatic docs generation</p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• JSDoc/TypeDoc comments</li>
                  <li>• README generation</li>
                  <li>• API documentation</li>
                  <li>• Code explanations</li>
                </ul>
              </div>

              <div className="bg-zinc-800 rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-4">9. Test Generation</h3>
                <p className="text-gray-400 mb-3">AI writes your tests</p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Unit test creation</li>
                  <li>• Integration tests</li>
                  <li>• Edge case coverage</li>
                  <li>• Mocking setup</li>
                </ul>
              </div>

              <div className="bg-zinc-800 rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-4">10. Code Review</h3>
                <p className="text-gray-400 mb-3">AI reviews before you commit</p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Security checks</li>
                  <li>• Best practices</li>
                  <li>• Performance issues</li>
                  <li>• Bug detection</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        ref={toolsAnimation.elementRef}
        className={`section-spacing scroll-fade-up ${toolsAnimation.inView ? 'in-view' : ''}`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Cursor Workflows That Ship Products</h2>
          
          <div className="space-y-6">
            <div className="bg-zinc-900 rounded-xl p-6">
              <h3 className="text-xl font-bold text-indigo-400 mb-4">🚀 Full-Stack SaaS in One Day</h3>
              <div className="bg-zinc-800 rounded-lg p-4 mb-4">
                <code className="text-indigo-300 text-sm">
                  Cmd+K: "Create a SaaS boilerplate with Stripe, auth, and admin dashboard"
                </code>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-white font-semibold mb-2">Morning (4 hours)</h4>
                  <ul className="space-y-1 text-sm text-gray-400">
                    <li>• Authentication system</li>
                    <li>• Database schema</li>
                    <li>• API endpoints</li>
                    <li>• Stripe integration</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Afternoon (4 hours)</h4>
                  <ul className="space-y-1 text-sm text-gray-400">
                    <li>• React frontend</li>
                    <li>• Admin dashboard</li>
                    <li>• Email system</li>
                    <li>• Deploy to production</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900 rounded-xl p-6">
              <h3 className="text-xl font-bold text-purple-400 mb-4">🎮 Mobile App Development</h3>
              <div className="bg-zinc-800 rounded-lg p-4 mb-4">
                <code className="text-purple-300 text-sm">
                  Chat: "Convert this web app to React Native with full functionality"
                </code>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-purple-400">1.</span>
                  <div>
                    <span className="text-white font-semibold">Setup:</span>
                    <span className="text-gray-400"> Cursor creates RN project structure</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-purple-400">2.</span>
                  <div>
                    <span className="text-white font-semibold">Components:</span>
                    <span className="text-gray-400"> AI converts all web components to mobile</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-purple-400">3.</span>
                  <div>
                    <span className="text-white font-semibold">Navigation:</span>
                    <span className="text-gray-400"> Implements native navigation patterns</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-purple-400">4.</span>
                  <div>
                    <span className="text-white font-semibold">Platform-specific:</span>
                    <span className="text-gray-400"> Handles iOS/Android differences</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900 rounded-xl p-6">
              <h3 className="text-xl font-bold text-green-400 mb-4">🤖 AI Integration Magic</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-zinc-800 rounded-lg p-4">
                  <h4 className="text-green-400 font-semibold mb-2">Your Request:</h4>
                  <p className="text-sm text-gray-400">"Add GPT-4 to analyze user uploads"</p>
                </div>
                <div className="bg-zinc-800 rounded-lg p-4">
                  <h4 className="text-green-400 font-semibold mb-2">Cursor Creates:</h4>
                  <ul className="space-y-1 text-sm text-gray-400">
                    <li>• OpenAI integration</li>
                    <li>• File upload handling</li>
                    <li>• Streaming responses</li>
                    <li>• Error handling</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 p-3 bg-zinc-800 rounded">
                <span className="text-green-400 font-semibold">Time to implement:</span>
                <span className="text-gray-300"> 15 minutes (vs 2 days manual)</span>
              </div>
            </div>

            <div className="bg-zinc-900 rounded-xl p-6">
              <h3 className="text-xl font-bold text-orange-400 mb-4">📊 Data Pipeline Creation</h3>
              <div className="bg-zinc-800 rounded-lg p-4 mb-4">
                <code className="text-orange-300 text-sm">
                  Cmd+K: "Create ETL pipeline for user analytics with real-time dashboard"
                </code>
              </div>
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div className="bg-zinc-800 rounded-lg p-4">
                  <h4 className="text-orange-400 font-semibold">Extract</h4>
                  <p className="text-xs text-gray-400 mt-2">Database queries, API calls, file parsing</p>
                </div>
                <div className="bg-zinc-800 rounded-lg p-4">
                  <h4 className="text-orange-400 font-semibold">Transform</h4>
                  <p className="text-xs text-gray-400 mt-2">Data cleaning, aggregation, enrichment</p>
                </div>
                <div className="bg-zinc-800 rounded-lg p-4">
                  <h4 className="text-orange-400 font-semibold">Load</h4>
                  <p className="text-xs text-gray-400 mt-2">Real-time updates, visualizations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing bg-zinc-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Cursor Success Stories</h2>
          
          <div className="space-y-8">
            <div className="bg-zinc-800 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="text-3xl">💰</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Solo Founder: $50K MRR in 3 Months</h3>
                  <p className="text-gray-400 mb-3">
                    Built entire B2B SaaS platform alone using Cursor AI.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-indigo-400">1</div>
                      <div className="text-sm text-gray-400">Developer (me)</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-400">45K</div>
                      <div className="text-sm text-gray-400">Lines of Code</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-purple-400">500+</div>
                      <div className="text-sm text-gray-400">Paying Customers</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-800 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="text-3xl">🚀</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Agency: 5x Delivery Speed</h3>
                  <p className="text-gray-400 mb-3">
                    Development agency transformed their workflow with Cursor.
                  </p>
                  <ul className="space-y-2 text-gray-400">
                    <li>• Projects that took 3 months now take 3 weeks</li>
                    <li>• Junior devs producing senior-level code</li>
                    <li>• 90% reduction in bugs</li>
                    <li>• Doubled profit margins</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-zinc-800 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="text-3xl">🎯</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Startup: MVP to Series A in 6 Months</h3>
                  <p className="text-gray-400 mb-3">
                    Used Cursor to iterate faster than competitors.
                  </p>
                  <div className="bg-zinc-900 rounded-lg p-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-indigo-400 font-semibold mb-2">Development Stats</h4>
                        <ul className="space-y-1 text-sm text-gray-400">
                          <li>• 200+ features shipped</li>
                          <li>• 15 major pivots</li>
                          <li>• 2 developers total</li>
                          <li>• 0 technical debt</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-purple-400 font-semibold mb-2">Business Results</h4>
                        <ul className="space-y-1 text-sm text-gray-400">
                          <li>• $5M Series A raised</li>
                          <li>• 10,000+ users</li>
                          <li>• 97% uptime</li>
                          <li>• Industry leader</li>
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

      <section className="section-spacing">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Master Cursor Like a Pro</h2>
          
          <div className="bg-zinc-900 rounded-xl p-8">
            <h3 className="text-xl font-bold text-indigo-400 mb-6">Essential Cursor Commands</h3>
            
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-zinc-800 rounded-lg p-4">
                  <h4 className="text-white font-semibold mb-3">Code Generation</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex justify-between">
                      <span className="text-gray-400">Generate code</span>
                      <kbd className="text-indigo-400 bg-zinc-700 px-2 py-1 rounded text-xs">Cmd+K</kbd>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-400">Chat with AI</span>
                      <kbd className="text-indigo-400 bg-zinc-700 px-2 py-1 rounded text-xs">Cmd+L</kbd>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-400">Accept suggestion</span>
                      <kbd className="text-indigo-400 bg-zinc-700 px-2 py-1 rounded text-xs">Tab</kbd>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-zinc-800 rounded-lg p-4">
                  <h4 className="text-white font-semibold mb-3">Navigation</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex justify-between">
                      <span className="text-gray-400">Find in codebase</span>
                      <kbd className="text-indigo-400 bg-zinc-700 px-2 py-1 rounded text-xs">Cmd+Shift+F</kbd>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-400">Go to definition</span>
                      <kbd className="text-indigo-400 bg-zinc-700 px-2 py-1 rounded text-xs">F12</kbd>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-400">Show references</span>
                      <kbd className="text-indigo-400 bg-zinc-700 px-2 py-1 rounded text-xs">Shift+F12</kbd>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-4">Pro Tips for Maximum Productivity</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-indigo-400">✓</span>
                <span>Always provide context - the more specific your request, the better the output</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-400">✓</span>
                <span>Use Cmd+K for new code, Chat for explanations and debugging</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-400">✓</span>
                <span>Review AI suggestions - it's a partnership, not a replacement</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-400">✓</span>
                <span>Let Cursor handle boilerplate while you focus on business logic</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-400">✓</span>
                <span>Use .cursorrules file to customize AI behavior for your project</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section
        ref={ctaAnimation.elementRef}
        className={`section-spacing bg-gradient-to-b from-zinc-900 to-dark scroll-fade-up ${ctaAnimation.inView ? 'in-view' : ''}`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Code 10x Faster with Cursor?
          </h2>
          
          <p className="text-xl text-gray-400 mb-8">
            Master AI-powered development with Cursor in our comprehensive AI Agents Course
          </p>
          
          <Link
            href="/ai-agents"
            className="cta-button inline-flex items-center gap-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transition-all"
          >
            Start Cursor Mastery
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  )
}