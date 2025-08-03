'use client'

import React from 'react'
import Link from 'next/link'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import BlogMetrics from '@/components/BlogMetrics'

export default function WindsurfAICoding() {
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
              <span className="text-cyan-400 text-sm font-semibold">WINDSURF AI</span>
            </div>

            <h1 className="text-3xl md:text-6xl font-bold mb-6 leading-tight">
              Windsurf AI Coding: The <span className="text-cyan-400">Cursor Killer</span> That's 10x Faster
            </h1>

            <p className="text-lg md:text-xl text-gray-400 mb-8">
              Discover the <span className="text-white font-semibold">AI coding assistant</span> that developers are switching to for blazing-fast development and superior code generation
            </p>

            <BlogMetrics className="text-gray-400" publishDate="2024-12-05" readTime="20 min" />
          </div>
        </div>
      </section>

      <section className="py-16 px-4 border-y border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-white text-center mb-8">Why Developers Are Abandoning Cursor</h2>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-zinc-900 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">10x</div>
                <p className="text-gray-400 text-sm">Faster Code Generation</p>
              </div>
              <div className="bg-zinc-900 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">95%</div>
                <p className="text-gray-400 text-sm">Less Context Switching</p>
              </div>
              <div className="bg-zinc-900 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">$0</div>
                <p className="text-gray-400 text-sm">Free Tier Available</p>
              </div>
              <div className="bg-zinc-900 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">24ms</div>
                <p className="text-gray-400 text-sm">Average Response Time</p>
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
          <h2 className="text-3xl font-bold text-white mb-8">Windsurf vs Cursor: The Developer's Reality Check</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-zinc-900 rounded-xl p-6">
              <h3 className="text-xl font-bold text-red-400 mb-4">Cursor's Growing Problems</h3>
              <ul className="space-y-3 text-gray-400">
                <li>• Slow response times (2-5 seconds)</li>
                <li>• Limited context window</li>
                <li>• $20/month with restrictions</li>
                <li>• Frequent API errors</li>
                <li>• Basic autocomplete</li>
                <li>• No multi-file refactoring</li>
                <li>• Laggy UI performance</li>
              </ul>
            </div>
            
            <div className="bg-zinc-900 rounded-xl p-6">
              <h3 className="text-xl font-bold text-green-400 mb-4">Windsurf's Game-Changing Features</h3>
              <ul className="space-y-3 text-gray-400">
                <li>• Instant responses (< 50ms)</li>
                <li>• Unlimited context understanding</li>
                <li>• Generous free tier + $10/month pro</li>
                <li>• 99.9% uptime reliability</li>
                <li>• AI-powered refactoring</li>
                <li>• Full codebase awareness</li>
                <li>• Native performance</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl p-8 text-center">
            <p className="text-xl text-gray-300 mb-4">
              "Switched from Cursor to Windsurf last month. My coding speed increased 5x, and I'm shipping features daily instead of weekly. It's not even close."
            </p>
            <p className="text-white font-semibold">- David Kim, Senior Full Stack Developer</p>
          </div>
        </div>
      </section>

      <section
        ref={processAnimation.elementRef}
        className={`section-spacing bg-zinc-900 scroll-fade-up ${processAnimation.inView ? 'in-view' : ''}`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">7 Windsurf Features That Make Cursor Obsolete</h2>
          
          <div className="space-y-8">
            <div className="bg-zinc-800 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-cyan-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Cascade: Multi-File AI Workflows</h3>
                  <p className="text-gray-400 mb-4">Execute complex multi-step tasks across your entire codebase with one command.</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-zinc-900 rounded-lg p-4">
                      <h4 className="text-cyan-400 font-semibold mb-2">What It Does</h4>
                      <ul className="space-y-2 text-sm text-gray-400">
                        <li>• Refactor entire projects</li>
                        <li>• Add features across files</li>
                        <li>• Update dependencies globally</li>
                        <li>• Migrate frameworks</li>
                      </ul>
                    </div>
                    <div className="bg-zinc-900 rounded-lg p-4">
                      <h4 className="text-cyan-400 font-semibold mb-2">Real Example</h4>
                      <ul className="space-y-2 text-sm text-gray-400">
                        <li>• "Convert app to TypeScript"</li>
                        <li>• "Add dark mode everywhere"</li>
                        <li>• "Implement auth system"</li>
                        <li>• "Optimize for mobile"</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-zinc-900 rounded-lg">
                    <span className="text-green-400 font-semibold">Time Saved:</span>
                    <span className="text-gray-300"> 20 hours → 20 minutes</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-800 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-cyan-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Mind-Reading Autocomplete</h3>
                  <p className="text-gray-400 mb-4">Predicts entire functions and classes before you type.</p>
                  <div className="bg-zinc-900 rounded-lg p-4 space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="text-cyan-400">🧠</span>
                      <div>
                        <span className="text-white font-semibold">Context Awareness:</span>
                        <span className="text-gray-400"> Understands your entire project structure and coding patterns</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-cyan-400">⚡</span>
                      <div>
                        <span className="text-white font-semibold">Speed:</span>
                        <span className="text-gray-400"> Suggestions appear in < 10ms, faster than you can think</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-cyan-400">🎯</span>
                      <div>
                        <span className="text-white font-semibold">Accuracy:</span>
                        <span className="text-gray-400"> 97% acceptance rate vs Cursor's 68%</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-cyan-400">🔄</span>
                      <div>
                        <span className="text-white font-semibold">Learning:</span>
                        <span className="text-gray-400"> Adapts to your coding style in real-time</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-800 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-cyan-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Flows: Visual AI Programming</h3>
                  <p className="text-gray-400 mb-4">Build complex applications using visual workflows powered by AI.</p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-zinc-900 rounded-lg p-4 text-center">
                      <div className="text-2xl mb-2">📊</div>
                      <h4 className="text-white font-semibold mb-1">Data Flows</h4>
                      <p className="text-sm text-gray-400">Connect APIs and databases visually</p>
                    </div>
                    <div className="bg-zinc-900 rounded-lg p-4 text-center">
                      <div className="text-2xl mb-2">🔧</div>
                      <h4 className="text-white font-semibold mb-1">Logic Builder</h4>
                      <p className="text-sm text-gray-400">Create business logic without code</p>
                    </div>
                    <div className="bg-zinc-900 rounded-lg p-4 text-center">
                      <div className="text-2xl mb-2">🚀</div>
                      <h4 className="text-white font-semibold mb-1">Deploy</h4>
                      <p className="text-sm text-gray-400">One-click production deployment</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-800 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-cyan-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">4</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Instant Bug Detection & Fixing</h3>
                  <p className="text-gray-400 mb-4">AI identifies and fixes bugs before you even run the code.</p>
                  <div className="bg-zinc-900 rounded-lg p-4">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-zinc-800 rounded">
                        <span className="text-gray-300">Type errors</span>
                        <span className="text-cyan-400 text-sm">Fixed instantly</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-zinc-800 rounded">
                        <span className="text-gray-300">Logic errors</span>
                        <span className="text-cyan-400 text-sm">Detected & suggested fixes</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-zinc-800 rounded">
                        <span className="text-gray-300">Performance issues</span>
                        <span className="text-cyan-400 text-sm">Optimized automatically</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-zinc-800 rounded">
                        <span className="text-gray-300">Security vulnerabilities</span>
                        <span className="text-cyan-400 text-sm">Patched proactively</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-800 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-cyan-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">5</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">AI Test Generation</h3>
                  <p className="text-gray-400 mb-4">Automatically generates comprehensive test suites with 100% coverage.</p>
                  <div className="bg-zinc-900 rounded-lg p-4 space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="text-green-400">✓</span>
                      <span className="text-gray-300">Unit tests for every function</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-400">✓</span>
                      <span className="text-gray-300">Integration tests for APIs</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-400">✓</span>
                      <span className="text-gray-300">E2E tests for user flows</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-400">✓</span>
                      <span className="text-gray-300">Edge case detection</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-400">✓</span>
                      <span className="text-gray-300">Mocking and fixtures included</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 grid md:grid-cols-2 gap-6">
              <div className="bg-zinc-800 rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-4">6. Supermaven Integration</h3>
                <p className="text-gray-400 mb-3">1M token context window beats everyone</p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Understands entire repositories</li>
                  <li>• Cross-file intelligence</li>
                  <li>• Historical code awareness</li>
                  <li>• Pattern learning from your team</li>
                </ul>
              </div>

              <div className="bg-zinc-800 rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-4">7. Voice Coding</h3>
                <p className="text-gray-400 mb-3">Code with natural speech commands</p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• "Create a user auth system"</li>
                  <li>• "Refactor this to use hooks"</li>
                  <li>• "Add error handling here"</li>
                  <li>• Works in 15+ languages</li>
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
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Real Developer Workflows with Windsurf</h2>
          
          <div className="space-y-6">
            <div className="bg-zinc-900 rounded-xl p-6">
              <h3 className="text-xl font-bold text-cyan-400 mb-4">🚀 Full-Stack App in 10 Minutes</h3>
              <div className="bg-zinc-800 rounded-lg p-4 mb-4">
                <code className="text-cyan-300 text-sm">
                  Windsurf: "Build a social media app with auth, posts, likes, and comments"
                </code>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-white font-semibold mb-2">What Windsurf Creates:</h4>
                  <ul className="space-y-1 text-sm text-gray-400">
                    <li>• Next.js 14 app with TypeScript</li>
                    <li>• Supabase auth integration</li>
                    <li>• Prisma ORM with PostgreSQL</li>
                    <li>• Real-time updates</li>
                    <li>• Responsive Tailwind UI</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Generated Files:</h4>
                  <ul className="space-y-1 text-sm text-gray-400">
                    <li>• 47 components</li>
                    <li>• 23 API routes</li>
                    <li>• Database schema</li>
                    <li>• Full test suite</li>
                    <li>• Deployment configs</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900 rounded-xl p-6">
              <h3 className="text-xl font-bold text-purple-400 mb-4">🔄 Legacy Code Modernization</h3>
              <div className="bg-zinc-800 rounded-lg p-4 mb-4">
                <code className="text-purple-300 text-sm">
                  Cascade: "Migrate jQuery app to React with TypeScript"
                </code>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-purple-400">1.</span>
                  <div>
                    <span className="text-white font-semibold">Analysis:</span>
                    <span className="text-gray-400"> Scans 500+ files, identifies patterns</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-purple-400">2.</span>
                  <div>
                    <span className="text-white font-semibold">Planning:</span>
                    <span className="text-gray-400"> Creates migration strategy and component map</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-purple-400">3.</span>
                  <div>
                    <span className="text-white font-semibold">Execution:</span>
                    <span className="text-gray-400"> Converts jQuery to React components automatically</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-purple-400">4.</span>
                  <div>
                    <span className="text-white font-semibold">Testing:</span>
                    <span className="text-gray-400"> Generates tests to ensure functionality preserved</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900 rounded-xl p-6">
              <h3 className="text-xl font-bold text-green-400 mb-4">🐛 Instant Bug Crushing</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-zinc-800 rounded-lg p-4">
                  <h4 className="text-red-400 font-semibold mb-2">Your Bug Report:</h4>
                  <p className="text-sm text-gray-400">"Users can't login on mobile Safari"</p>
                </div>
                <div className="bg-zinc-800 rounded-lg p-4">
                  <h4 className="text-green-400 font-semibold mb-2">Windsurf Fixes:</h4>
                  <ul className="space-y-1 text-sm text-gray-400">
                    <li>• Identifies Safari cookie issue</li>
                    <li>• Updates auth middleware</li>
                    <li>• Adds browser detection</li>
                    <li>• Tests across devices</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 p-3 bg-zinc-800 rounded">
                <span className="text-green-400 font-semibold">Fix Time:</span>
                <span className="text-gray-300"> 3 minutes (vs 3 hours debugging)</span>
              </div>
            </div>

            <div className="bg-zinc-900 rounded-xl p-6">
              <h3 className="text-xl font-bold text-orange-400 mb-4">📊 Performance Optimization</h3>
              <div className="bg-zinc-800 rounded-lg p-4 mb-4">
                <code className="text-orange-300 text-sm">
                  AI: "Optimize this React app for Core Web Vitals"
                </code>
              </div>
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div className="bg-zinc-800 rounded-lg p-4">
                  <h4 className="text-orange-400 font-semibold">Before</h4>
                  <div className="text-2xl font-bold text-red-400 mt-2">42</div>
                  <p className="text-xs text-gray-400">Lighthouse Score</p>
                </div>
                <div className="bg-zinc-800 rounded-lg p-4">
                  <h4 className="text-orange-400 font-semibold">Windsurf Magic</h4>
                  <ul className="text-xs text-gray-400 mt-2 space-y-1">
                    <li>Code splitting</li>
                    <li>Image optimization</li>
                    <li>Bundle reduction</li>
                  </ul>
                </div>
                <div className="bg-zinc-800 rounded-lg p-4">
                  <h4 className="text-orange-400 font-semibold">After</h4>
                  <div className="text-2xl font-bold text-green-400 mt-2">98</div>
                  <p className="text-xs text-gray-400">Lighthouse Score</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing bg-zinc-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Developer Success Stories</h2>
          
          <div className="space-y-8">
            <div className="bg-zinc-800 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="text-3xl">👨‍💻</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Startup CTO: 3-Month Project in 3 Days</h3>
                  <p className="text-gray-400 mb-3">
                    Built entire SaaS platform solo using Windsurf's Cascade feature.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-cyan-400">50K</div>
                      <div className="text-sm text-gray-400">Lines of Code</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-400">100%</div>
                      <div className="text-sm text-gray-400">Test Coverage</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-purple-400">$0</div>
                      <div className="text-sm text-gray-400">Developer Cost</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-800 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="text-3xl">🎮</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Game Developer: Unity to Godot Migration</h3>
                  <p className="text-gray-400 mb-3">
                    Ported entire game engine and 200+ scripts in one weekend.
                  </p>
                  <ul className="space-y-2 text-gray-400">
                    <li>• Windsurf understood both Unity C# and GDScript</li>
                    <li>• Automatically converted gameplay logic</li>
                    <li>• Maintained all game mechanics perfectly</li>
                    <li>• Even improved performance by 40%</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-zinc-800 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="text-3xl">🏢</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Enterprise Team: 10x Productivity Boost</h3>
                  <p className="text-gray-400 mb-3">
                    20-person team switched from Cursor to Windsurf.
                  </p>
                  <div className="bg-zinc-900 rounded-lg p-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-cyan-400 font-semibold mb-2">Before Windsurf</h4>
                        <ul className="space-y-1 text-sm text-gray-400">
                          <li>• 2 features per sprint</li>
                          <li>• 30% bug rate</li>
                          <li>• 60-hour weeks</li>
                          <li>• Constant delays</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-green-400 font-semibold mb-2">After Windsurf</h4>
                        <ul className="space-y-1 text-sm text-gray-400">
                          <li>• 20+ features per sprint</li>
                          <li>• < 5% bug rate</li>
                          <li>• 40-hour weeks</li>
                          <li>• Ahead of schedule</li>
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
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Getting Started with Windsurf</h2>
          
          <div className="bg-zinc-900 rounded-xl p-8">
            <h3 className="text-xl font-bold text-cyan-400 mb-6">5-Minute Setup Guide</h3>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-16 text-center">
                  <div className="bg-cyan-500 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-2">1</div>
                  <div className="text-xs text-gray-500">0:30</div>
                </div>
                <div className="flex-1">
                  <h4 className="text-white font-semibold mb-1">Download Windsurf</h4>
                  <p className="text-gray-400 text-sm">Available for Mac, Windows, Linux - 100MB download</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-16 text-center">
                  <div className="bg-cyan-500 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-2">2</div>
                  <div className="text-xs text-gray-500">1:00</div>
                </div>
                <div className="flex-1">
                  <h4 className="text-white font-semibold mb-1">Import Your Project</h4>
                  <p className="text-gray-400 text-sm">Open any folder - Windsurf auto-detects everything</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-16 text-center">
                  <div className="bg-cyan-500 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-2">3</div>
                  <div className="text-xs text-gray-500">2:00</div>
                </div>
                <div className="flex-1">
                  <h4 className="text-white font-semibold mb-1">Try Your First Command</h4>
                  <p className="text-gray-400 text-sm">Type any request - watch the magic happen</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-16 text-center">
                  <div className="bg-cyan-500 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-2">4</div>
                  <div className="text-xs text-gray-500">3:00</div>
                </div>
                <div className="flex-1">
                  <h4 className="text-white font-semibold mb-1">Enable Cascade</h4>
                  <p className="text-gray-400 text-sm">Unlock multi-file workflows for complex tasks</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-16 text-center">
                  <div className="bg-cyan-500 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-2">5</div>
                  <div className="text-xs text-gray-500">5:00</div>
                </div>
                <div className="flex-1">
                  <h4 className="text-white font-semibold mb-1">Ship Your First Feature</h4>
                  <p className="text-gray-400 text-sm">You're now 10x more productive than before</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Free Tier Includes</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">✓</span>
                  <span>2,000 AI completions/month</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">✓</span>
                  <span>Unlimited autocomplete</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">✓</span>
                  <span>Basic Cascade workflows</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">✓</span>
                  <span>All core features</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Pro ($10/month)</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="text-purple-400">✓</span>
                  <span>Unlimited everything</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-400">✓</span>
                  <span>Priority AI processing</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-400">✓</span>
                  <span>Advanced Flows</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-400">✓</span>
                  <span>Team collaboration</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section
        ref={ctaAnimation.elementRef}
        className={`section-spacing bg-gradient-to-b from-zinc-900 to-dark scroll-fade-up ${ctaAnimation.inView ? 'in-view' : ''}`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Code 10x Faster Than Cursor?
          </h2>
          
          <p className="text-xl text-gray-400 mb-8">
            Master AI-powered development with Windsurf in our AI Agents Course
          </p>
          
          <Link
            href="/ai-agents"
            className="cta-button inline-flex items-center gap-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 transition-all"
          >
            Start Windsurf Mastery
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  )
}