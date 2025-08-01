'use client'

import Link from 'next/link'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import BlogMetrics from '@/components/BlogMetrics'

export default function PromptEngineeringGuide() {
  const heroAnimation = useScrollAnimation({ threshold: 0.2 })
  const contentAnimation = useScrollAnimation({ threshold: 0.1 })
  const frameworksAnimation = useScrollAnimation({ threshold: 0.1 })
  const examplesAnimation = useScrollAnimation({ threshold: 0.1 })
  const ctaAnimation = useScrollAnimation({ threshold: 0.2 })

  return (
    <div className="min-h-screen bg-dark">
      {/* Hero Section */}
      <section className="section-spacing overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={heroAnimation.elementRef}
            className={`text-center max-w-5xl mx-auto scroll-fade-up ${heroAnimation.isVisible ? 'visible' : ''}`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
              <span className="text-purple-400 text-sm font-semibold">AI MASTERY</span>
            </div>

            <h1 className="text-3xl md:text-6xl font-bold mb-6 leading-tight">
              Prompt Engineering: The <span className="text-purple-400">$150/Hour Skill</span> Nobody's Teaching Right
            </h1>

            <p className="text-lg md:text-xl text-gray-400 mb-8">
              Master the art of AI communication with <span className="text-white font-semibold">battle-tested frameworks and 100+ examples</span>
            </p>

            <BlogMetrics publishDate="2025-03-03" readTime="28 min" />
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-16 px-4 border-y border-gray-800">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-white text-center mb-8">Why Prompt Engineering = Money in 2025</h2>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-zinc-900 rounded-xl p-4 text-center">
                <div className="text-3xl mb-2">💰</div>
                <div className="text-white font-semibold">$75-200/hr</div>
                <div className="text-gray-400 text-sm">Freelance rates</div>
              </div>
              <div className="bg-zinc-900 rounded-xl p-4 text-center">
                <div className="text-3xl mb-2">🚀</div>
                <div className="text-white font-semibold">10x Productivity</div>
                <div className="text-gray-400 text-sm">Output increase</div>
              </div>
              <div className="bg-zinc-900 rounded-xl p-4 text-center">
                <div className="text-3xl mb-2">🎯</div>
                <div className="text-white font-semibold">95% Accuracy</div>
                <div className="text-gray-400 text-sm">With right prompts</div>
              </div>
              <div className="bg-zinc-900 rounded-xl p-4 text-center">
                <div className="text-3xl mb-2">📈</div>
                <div className="text-white font-semibold">2M+ Jobs</div>
                <div className="text-gray-400 text-sm">By 2025</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section 
        ref={contentAnimation.elementRef}
        className={`section-spacing scroll-fade-up ${contentAnimation.isVisible ? 'visible' : ''}`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-3xl font-bold text-white mb-8">The 5 Core Principles of Perfect Prompts</h2>
          
          <div className="space-y-8">
            {/* Principle 1 */}
            <div className="bg-zinc-900 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-purple-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3">Be Specific, Not Vague</h3>
                  <p className="text-gray-400 mb-4">The more context you provide, the better the output</p>
                  
                  <div className="bg-zinc-800 rounded-lg p-6">
                    <div className="space-y-4">
                      <div>
                        <p className="text-red-400 font-semibold mb-2">❌ Bad Prompt:</p>
                        <div className="bg-zinc-900 rounded p-3">
                          <code className="text-sm text-gray-300">"Write a blog post about AI"</code>
                        </div>
                      </div>
                      
                      <div>
                        <p className="text-green-400 font-semibold mb-2">✅ Good Prompt:</p>
                        <div className="bg-zinc-900 rounded p-3">
                          <code className="text-sm text-gray-300">"Write a 1,500-word blog post about how small businesses can use ChatGPT to automate customer service. Include 5 specific use cases, implementation steps, and ROI calculations. Target audience: non-technical business owners. Tone: professional but conversational."</code>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Principle 2 */}
            <div className="bg-zinc-900 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-purple-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3">Define the Role</h3>
                  <p className="text-gray-400 mb-4">Tell the AI who to be for best results</p>
                  
                  <div className="bg-zinc-800 rounded-lg p-6">
                    <h4 className="text-purple-400 font-semibold mb-3">Power Phrases That Work:</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li>• "Act as a [specific expert] with [X years] of experience in [field]"</li>
                      <li>• "You are a world-class [role] known for [specific traits]"</li>
                      <li>• "Respond as if you were [famous person/character] who specializes in [skill]"</li>
                      <li>• "Take on the persona of a [role] who has successfully [achievement]"</li>
                    </ul>
                    
                    <div className="mt-4 p-4 bg-zinc-900 rounded">
                      <p className="text-sm text-gray-300">
                        <span className="text-purple-400 font-semibold">Example:</span> "Act as a senior marketing strategist with 15 years of experience in SaaS growth..."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Principle 3 */}
            <div className="bg-zinc-900 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-purple-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3">Structure Your Output</h3>
                  <p className="text-gray-400 mb-4">Tell the AI exactly how to format the response</p>
                  
                  <div className="bg-zinc-800 rounded-lg p-6">
                    <h4 className="text-white font-semibold mb-3">Format Commands:</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <ul className="space-y-2 text-gray-300">
                        <li>• "Use bullet points for..."</li>
                        <li>• "Structure as: [format]"</li>
                        <li>• "Include these sections:..."</li>
                        <li>• "Format as a table with..."</li>
                      </ul>
                      <ul className="space-y-2 text-gray-300">
                        <li>• "Number each step..."</li>
                        <li>• "Use H2 headings for..."</li>
                        <li>• "Provide in JSON format"</li>
                        <li>• "Create a markdown list"</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Principle 4 */}
            <div className="bg-zinc-900 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-purple-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">4</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3">Use Examples</h3>
                  <p className="text-gray-400 mb-4">Show the AI what good looks like</p>
                  
                  <div className="bg-zinc-800 rounded-lg p-6">
                    <p className="text-gray-300 mb-4">Few-shot prompting dramatically improves output quality:</p>
                    <div className="bg-zinc-900 rounded p-4">
                      <code className="text-sm text-gray-300">
                        "Generate product descriptions like these examples:<br/><br/>
                        Example 1: [Your example]<br/>
                        Example 2: [Your example]<br/><br/>
                        Now create one for: [Your product]"
                      </code>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Principle 5 */}
            <div className="bg-zinc-900 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-purple-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">5</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3">Iterate and Refine</h3>
                  <p className="text-gray-400 mb-4">Use follow-up prompts to perfect the output</p>
                  
                  <div className="bg-zinc-800 rounded-lg p-6">
                    <h4 className="text-white font-semibold mb-3">Refinement Techniques:</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li>• "Make it more [adjective]"</li>
                      <li>• "Expand on point #3"</li>
                      <li>• "Rewrite in a more [tone] way"</li>
                      <li>• "Add specific examples for..."</li>
                      <li>• "Simplify the technical parts"</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Frameworks */}
      <section 
        ref={frameworksAnimation.elementRef}
        className={`section-spacing bg-zinc-900 scroll-fade-up ${frameworksAnimation.isVisible ? 'visible' : ''}`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">7 Advanced Prompt Frameworks</h2>
          
          <div className="space-y-6">
            {/* Framework 1 */}
            <div className="bg-zinc-800 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-purple-400 mb-4">1. The CRISP Framework</h3>
              <div className="grid md:grid-cols-5 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">C</div>
                  <p className="text-sm text-gray-300">Context</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">R</div>
                  <p className="text-sm text-gray-300">Role</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">I</div>
                  <p className="text-sm text-gray-300">Instructions</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">S</div>
                  <p className="text-sm text-gray-300">Style</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">P</div>
                  <p className="text-sm text-gray-300">Parameters</p>
                </div>
              </div>
              
              <div className="mt-4 p-4 bg-zinc-900 rounded">
                <p className="text-sm text-gray-300">
                  <span className="text-purple-400 font-semibold">Example:</span> "Context: SaaS startup needs email sequence. Role: Expert email marketer. Instructions: Create 5-email onboarding series. Style: Friendly, conversational. Parameters: 150-200 words each, include one CTA."
                </p>
              </div>
            </div>

            {/* Framework 2 */}
            <div className="bg-zinc-800 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">2. The STAR Method</h3>
              <ul className="space-y-3 text-gray-300">
                <li><span className="text-white font-semibold">S - Situation:</span> Set the scene and context</li>
                <li><span className="text-white font-semibold">T - Task:</span> Define what needs to be done</li>
                <li><span className="text-white font-semibold">A - Action:</span> Specify the steps or approach</li>
                <li><span className="text-white font-semibold">R - Result:</span> Describe the desired outcome</li>
              </ul>
            </div>

            {/* More Frameworks */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-zinc-800 rounded-xl p-6">
                <h4 className="text-xl font-bold text-green-400 mb-3">3. Chain of Thought</h4>
                <p className="text-gray-400 mb-3">Make AI think step-by-step</p>
                <div className="bg-zinc-900 rounded p-3">
                  <code className="text-sm text-gray-300">"Let's think about this step by step..."</code>
                </div>
              </div>

              <div className="bg-zinc-800 rounded-xl p-6">
                <h4 className="text-xl font-bold text-pink-400 mb-3">4. Few-Shot Learning</h4>
                <p className="text-gray-400 mb-3">Provide examples to guide output</p>
                <div className="bg-zinc-900 rounded p-3">
                  <code className="text-sm text-gray-300">"Here are 3 examples... Now do:"</code>
                </div>
              </div>

              <div className="bg-zinc-800 rounded-xl p-6">
                <h4 className="text-xl font-bold text-yellow-400 mb-3">5. Persona Pattern</h4>
                <p className="text-gray-400 mb-3">Create detailed character prompts</p>
                <div className="bg-zinc-900 rounded p-3">
                  <code className="text-sm text-gray-300">"You are [name], a [role] who..."</code>
                </div>
              </div>

              <div className="bg-zinc-800 rounded-xl p-6">
                <h4 className="text-xl font-bold text-orange-400 mb-3">6. Template Method</h4>
                <p className="text-gray-400 mb-3">Use fill-in-the-blank structures</p>
                <div className="bg-zinc-900 rounded p-3">
                  <code className="text-sm text-gray-300">"Fill this template: [structure]"</code>
                </div>
              </div>
            </div>

            {/* Framework 7 */}
            <div className="bg-zinc-800 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-red-400 mb-4">7. The Meta Prompt</h3>
              <p className="text-gray-300 mb-4">Ask AI to improve your prompts:</p>
              <div className="bg-zinc-900 rounded p-4">
                <code className="text-sm text-gray-300">
                  "I want you to become my Prompt Creator. Your goal is to help me craft the best possible prompt for my needs. The prompt will be used by ChatGPT. You will follow this process..."
                </code>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Case Examples */}
      <section 
        ref={examplesAnimation.elementRef}
        className={`section-spacing scroll-fade-up ${examplesAnimation.isVisible ? 'visible' : ''}`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Real-World Prompt Templates</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Content Creation */}
            <div className="bg-zinc-900 rounded-xl p-6">
              <h3 className="text-xl font-bold text-purple-400 mb-4">📝 Content Creation</h3>
              <div className="bg-zinc-800 rounded p-4 mb-4">
                <p className="text-sm text-gray-300">
                  "Write a [word count] [content type] about [topic] for [audience]. Include [specific elements]. Use a [tone] tone. Format with [structure]. Focus on [key message]."
                </p>
              </div>
              <p className="text-green-400 text-sm">Saves 2-3 hours per piece</p>
            </div>

            {/* Code Generation */}
            <div className="bg-zinc-900 rounded-xl p-6">
              <h3 className="text-xl font-bold text-blue-400 mb-4">💻 Code Generation</h3>
              <div className="bg-zinc-800 rounded p-4 mb-4">
                <p className="text-sm text-gray-300">
                  "Create a [language] function that [purpose]. Input: [parameters]. Output: [expected result]. Include error handling for [edge cases]. Follow [style guide] conventions."
                </p>
              </div>
              <p className="text-green-400 text-sm">10x faster development</p>
            </div>

            {/* Data Analysis */}
            <div className="bg-zinc-900 rounded-xl p-6">
              <h3 className="text-xl font-bold text-green-400 mb-4">📊 Data Analysis</h3>
              <div className="bg-zinc-800 rounded p-4 mb-4">
                <p className="text-sm text-gray-300">
                  "Analyze this data: [paste data]. Identify [specific patterns]. Calculate [metrics]. Present findings as [format]. Include [visualizations]. Highlight [key insights]."
                </p>
              </div>
              <p className="text-green-400 text-sm">Replace $200/hr analysts</p>
            </div>

            {/* Customer Service */}
            <div className="bg-zinc-900 rounded-xl p-6">
              <h3 className="text-xl font-bold text-pink-400 mb-4">🎧 Customer Service</h3>
              <div className="bg-zinc-800 rounded p-4 mb-4">
                <p className="text-sm text-gray-300">
                  "Respond to this customer: [query]. Tone: [helpful, empathetic]. Include: [solution steps]. If unable to help, [escalation process]. Sign off with [closing]."
                </p>
              </div>
              <p className="text-green-400 text-sm">Handle 100+ tickets/day</p>
            </div>
          </div>

          {/* Advanced Examples */}
          <div className="mt-8 bg-zinc-900 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Master-Level Prompt Examples</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-purple-400 font-semibold mb-2">🚀 Product Launch Strategy</h4>
                <div className="bg-zinc-800 rounded p-4">
                  <code className="text-sm text-gray-300">
                    "Act as a product marketing expert who has launched 50+ successful SaaS products. Create a comprehensive 90-day product launch strategy for [product]. Include: pre-launch (30 days), launch week, post-launch (60 days). For each phase, provide: goals, tactics, channels, metrics, budget allocation, team responsibilities. Format as a detailed action plan with daily tasks. Consider market size of [size], competition like [competitors], and target audience of [audience]."
                  </code>
                </div>
              </div>

              <div>
                <h4 className="text-blue-400 font-semibold mb-2">💰 Sales Copy That Converts</h4>
                <div className="bg-zinc-800 rounded p-4">
                  <code className="text-sm text-gray-300">
                    "You are a direct response copywriter with a track record of generating $10M+ in sales. Write a sales page for [product] using the PAS (Problem-Agitate-Solution) framework. Target audience: [detailed persona]. Their main pain point: [specific problem]. Our unique solution: [USP]. Include: attention-grabbing headline, 3 emotional pain points, 5 benefit-focused bullet points, social proof section, risk reversal guarantee, 3 urgency triggers, clear CTA. Tone: conversational but persuasive. Length: 1500-2000 words."
                  </code>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="section-spacing bg-zinc-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">10 Prompt Engineering Mistakes to Avoid</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-zinc-800 rounded-xl p-6">
              <h3 className="text-lg font-bold text-red-400 mb-4">❌ Common Mistakes</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Being too vague or general</li>
                <li>• Not specifying format/structure</li>
                <li>• Forgetting to set context</li>
                <li>• Using ambiguous language</li>
                <li>• Not iterating on outputs</li>
              </ul>
            </div>
            
            <div className="bg-zinc-800 rounded-xl p-6">
              <h3 className="text-lg font-bold text-green-400 mb-4">✅ Best Practices</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Test prompts systematically</li>
                <li>• Save successful templates</li>
                <li>• Use version control</li>
                <li>• Measure output quality</li>
                <li>• Build prompt libraries</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tools & Resources */}
      <section className="section-spacing">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Prompt Engineering Toolkit</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-zinc-900 rounded-xl p-6">
              <h3 className="text-xl font-bold text-purple-400 mb-4">🛠️ Essential Tools</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• PromptPerfect - Optimize prompts</li>
                <li>• FlowGPT - Prompt marketplace</li>
                <li>• Prompt Base - Template library</li>
                <li>• ChatGPT Plus - Advanced model</li>
                <li>• Claude 2 - Alternative AI</li>
              </ul>
            </div>
            
            <div className="bg-zinc-900 rounded-xl p-6">
              <h3 className="text-xl font-bold text-blue-400 mb-4">📚 Learning Resources</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• OpenAI Cookbook</li>
                <li>• Prompt Engineering Guide</li>
                <li>• Learn Prompting course</li>
                <li>• AI newsletters</li>
                <li>• Discord communities</li>
              </ul>
            </div>
            
            <div className="bg-zinc-900 rounded-xl p-6">
              <h3 className="text-xl font-bold text-green-400 mb-4">💼 Career Paths</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• AI Consultant ($150-300/hr)</li>
                <li>• Prompt Engineer ($120-180K)</li>
                <li>• AI Content Strategist ($80-120K)</li>
                <li>• Automation Specialist ($90-140K)</li>
                <li>• AI Trainer ($70-110K)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        ref={ctaAnimation.elementRef}
        className={`section-spacing bg-gradient-to-b from-zinc-900 to-dark scroll-fade-up ${ctaAnimation.isVisible ? 'visible' : ''}`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Master Prompt Engineering in 30 Days
          </h2>
          
          <p className="text-xl text-gray-400 mb-8">
            Get my complete prompt engineering course with 500+ templates and live workshops
          </p>
          
          <Link
            href="/ai-accelerator"
            className="cta-button inline-flex items-center gap-3"
          >
            Start Your AI Journey
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  )
}
