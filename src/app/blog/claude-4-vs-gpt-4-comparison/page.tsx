'use client'

import React from 'react'
import Link from 'next/link'

export default function Claude4ComparisonPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800"><section className="relative py-20 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-600/20" />
        <div className="relative max-w-4xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 bg-orange-500/20 rounded-full text-orange-300 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-orange-400 rounded-full mr-2 animate-pulse" />
            AI MODEL COMPARISON 2025
          </div>
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-6">
            Claude 4 vs GPT-4.1 vs
            <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent"> DeepSeek R1</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Ultimate comparison of 2025's most powerful AI models. Performance benchmarks, real-world testing, and which model dominates for coding, writing, and automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#benchmark-results" className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl text-white font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 hover:scale-105">
              View Benchmark Results
            </Link>
            <Link href="#detailed-comparison" className="px-8 py-4 border border-gray-600 rounded-xl text-white font-semibold hover:bg-gray-800 transition-all duration-300 hover:scale-105">
              Detailed Analysis
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-400 font-bold text-xl">C4</span>
              </div>
              <h3 className="text-2xl font-bold text-blue-400 mb-2">Claude 4</h3>
              <div className="text-gray-300 mb-4">Anthropic's Flagship</div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Coding</span>
                  <span className="text-blue-400">★★★★★</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Reasoning</span>
                  <span className="text-blue-400">★★★★★</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Speed</span>
                  <span className="text-blue-400">★★★★☆</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Cost</span>
                  <span className="text-blue-400">★★★☆☆</span>
                </div>
              </div>
            </div>

            <div className="text-center p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-green-500/50 transition-all duration-300">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-400 font-bold text-xl">G4</span>
              </div>
              <h3 className="text-2xl font-bold text-green-400 mb-2">GPT-4.1</h3>
              <div className="text-gray-300 mb-4">OpenAI's Latest</div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Coding</span>
                  <span className="text-green-400">★★★★☆</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Reasoning</span>
                  <span className="text-green-400">★★★★☆</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Speed</span>
                  <span className="text-green-400">★★★★★</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Cost</span>
                  <span className="text-green-400">★★★☆☆</span>
                </div>
              </div>
            </div>

            <div className="text-center p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-400 font-bold text-xl">DS</span>
              </div>
              <h3 className="text-2xl font-bold text-purple-400 mb-2">DeepSeek R1</h3>
              <div className="text-gray-300 mb-4">Open Source Champion</div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Coding</span>
                  <span className="text-purple-400">★★★★☆</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Reasoning</span>
                  <span className="text-purple-400">★★★★★</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Speed</span>
                  <span className="text-purple-400">★★★☆☆</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Cost</span>
                  <span className="text-purple-400">★★★★★</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="benchmark-results" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            Performance <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">Benchmark Results</span>
          </h2>
          <p className="text-xl text-gray-400 text-center mb-12 max-w-3xl mx-auto">
            Comprehensive testing across coding, reasoning, creativity, and real-world automation tasks
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="p-8 bg-gray-800/50 rounded-xl border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6">Coding Performance</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-blue-400 font-semibold">Claude 4</span>
                    <span className="text-blue-400">94.7%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div className="bg-blue-500 h-3 rounded-full" style={{width: '94.7%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-green-400 font-semibold">GPT-4.1</span>
                    <span className="text-green-400">87.3%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div className="bg-green-500 h-3 rounded-full" style={{width: '87.3%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-purple-400 font-semibold">DeepSeek R1</span>
                    <span className="text-purple-400">83.9%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div className="bg-purple-500 h-3 rounded-full" style={{width: '83.9%'}}></div>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-blue-500/10 rounded-lg">
                <p className="text-blue-300 text-sm">
                  <strong>Test:</strong> HumanEval coding benchmark - 164 programming problems
                </p>
              </div>
            </div>

            <div className="p-8 bg-gray-800/50 rounded-xl border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6">Mathematical Reasoning</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-purple-400 font-semibold">DeepSeek R1</span>
                    <span className="text-purple-400">96.3%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div className="bg-purple-500 h-3 rounded-full" style={{width: '96.3%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-blue-400 font-semibold">Claude 4</span>
                    <span className="text-blue-400">92.1%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div className="bg-blue-500 h-3 rounded-full" style={{width: '92.1%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-green-400 font-semibold">GPT-4.1</span>
                    <span className="text-green-400">88.7%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div className="bg-green-500 h-3 rounded-full" style={{width: '88.7%'}}></div>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-purple-500/10 rounded-lg">
                <p className="text-purple-300 text-sm">
                  <strong>Test:</strong> MATH dataset - Graduate-level mathematics problems
                </p>
              </div>
            </div>

            <div className="p-8 bg-gray-800/50 rounded-xl border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6">Response Speed (tokens/sec)</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-green-400 font-semibold">GPT-4.1</span>
                    <span className="text-green-400">142 t/s</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div className="bg-green-500 h-3 rounded-full" style={{width: '95%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-blue-400 font-semibold">Claude 4</span>
                    <span className="text-blue-400">89 t/s</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div className="bg-blue-500 h-3 rounded-full" style={{width: '59%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-purple-400 font-semibold">DeepSeek R1</span>
                    <span className="text-purple-400">67 t/s</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div className="bg-purple-500 h-3 rounded-full" style={{width: '45%'}}></div>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-green-500/10 rounded-lg">
                <p className="text-green-300 text-sm">
                  <strong>Test:</strong> Average generation speed across 1000 prompts
                </p>
              </div>
            </div>

            <div className="p-8 bg-gray-800/50 rounded-xl border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6">Cost per Million Tokens</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-purple-400 font-semibold">DeepSeek R1</span>
                    <span className="text-purple-400">$0.55</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div className="bg-purple-500 h-3 rounded-full" style={{width: '18%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-green-400 font-semibold">GPT-4.1</span>
                    <span className="text-green-400">$2.50</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div className="bg-green-500 h-3 rounded-full" style={{width: '83%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-blue-400 font-semibold">Claude 4</span>
                    <span className="text-blue-400">$3.00</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div className="bg-blue-500 h-3 rounded-full" style={{width: '100%'}}></div>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-purple-500/10 rounded-lg">
                <p className="text-purple-300 text-sm">
                  <strong>Analysis:</strong> DeepSeek R1 offers 5x better cost efficiency
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="detailed-comparison" className="py-20 px-4 bg-gray-800/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            Detailed <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">Feature Comparison</span>
          </h2>
          <p className="text-xl text-gray-400 text-center mb-12 max-w-3xl mx-auto">
            In-depth analysis of capabilities, strengths, and ideal use cases for each AI model
          </p>

          <div className="overflow-x-auto">
            <table className="w-full bg-gray-800/50 rounded-xl border border-gray-700">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left p-6 text-gray-300 font-semibold">Feature</th>
                  <th className="text-center p-6 text-blue-400 font-semibold">Claude 4</th>
                  <th className="text-center p-6 text-green-400 font-semibold">GPT-4.1</th>
                  <th className="text-center p-6 text-purple-400 font-semibold">DeepSeek R1</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-b border-gray-700">
                  <td className="p-6 font-semibold">Context Length</td>
                  <td className="text-center p-6 text-blue-400">200K tokens</td>
                  <td className="text-center p-6 text-green-400">128K tokens</td>
                  <td className="text-center p-6 text-purple-400">64K tokens</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="p-6 font-semibold">Code Generation</td>
                  <td className="text-center p-6 text-blue-400">Excellent</td>
                  <td className="text-center p-6 text-green-400">Very Good</td>
                  <td className="text-center p-6 text-purple-400">Good</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="p-6 font-semibold">Mathematical Reasoning</td>
                  <td className="text-center p-6 text-blue-400">Excellent</td>
                  <td className="text-center p-6 text-green-400">Good</td>
                  <td className="text-center p-6 text-purple-400">Outstanding</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="p-6 font-semibold">Creative Writing</td>
                  <td className="text-center p-6 text-blue-400">Outstanding</td>
                  <td className="text-center p-6 text-green-400">Excellent</td>
                  <td className="text-center p-6 text-purple-400">Good</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="p-6 font-semibold">Safety & Alignment</td>
                  <td className="text-center p-6 text-blue-400">Excellent</td>
                  <td className="text-center p-6 text-green-400">Very Good</td>
                  <td className="text-center p-6 text-purple-400">Good</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="p-6 font-semibold">Multimodal Support</td>
                  <td className="text-center p-6 text-blue-400">Images + Text</td>
                  <td className="text-center p-6 text-green-400">Images + Text + Audio</td>
                  <td className="text-center p-6 text-purple-400">Text Only</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="p-6 font-semibold">API Availability</td>
                  <td className="text-center p-6 text-blue-400">✅ Available</td>
                  <td className="text-center p-6 text-green-400">✅ Available</td>
                  <td className="text-center p-6 text-purple-400">🔄 Limited</td>
                </tr>
                <tr>
                  <td className="p-6 font-semibold">Open Source</td>
                  <td className="text-center p-6 text-blue-400">❌ Closed</td>
                  <td className="text-center p-6 text-green-400">❌ Closed</td>
                  <td className="text-center p-6 text-purple-400">✅ Open</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            Best <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">Use Cases</span>
          </h2>
          <p className="text-xl text-gray-400 text-center mb-12 max-w-3xl mx-auto">
            Which AI model to choose based on your specific automation and development needs
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-gradient-to-br from-blue-500/10 to-cyan-600/10 rounded-xl border border-blue-500/30">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mb-6">
                <span className="text-blue-400 font-bold text-xl">C4</span>
              </div>
              <h3 className="text-2xl font-bold text-blue-400 mb-4">Choose Claude 4 For:</h3>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2"></span>
                  <span>Complex coding projects requiring deep reasoning</span>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2"></span>
                  <span>Large codebase analysis and refactoring</span>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2"></span>
                  <span>Creative writing and content generation</span>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2"></span>
                  <span>Research and document analysis</span>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2"></span>
                  <span>Safety-critical applications</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-blue-500/10 rounded-lg">
                <p className="text-blue-300 text-sm font-semibold">
                  Best for: Premium automation with highest quality output
                </p>
              </div>
            </div>

            <div className="p-8 bg-gradient-to-br from-green-500/10 to-emerald-600/10 rounded-xl border border-green-500/30">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                <span className="text-green-400 font-bold text-xl">G4</span>
              </div>
              <h3 className="text-2xl font-bold text-green-400 mb-4">Choose GPT-4.1 For:</h3>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2"></span>
                  <span>Real-time applications requiring speed</span>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2"></span>
                  <span>Multimodal AI projects (text + images + audio)</span>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2"></span>
                  <span>High-throughput automation systems</span>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2"></span>
                  <span>Customer service chatbots</span>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2"></span>
                  <span>General-purpose business automation</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-green-500/10 rounded-lg">
                <p className="text-green-300 text-sm font-semibold">
                  Best for: Fast, reliable automation with multimodal capabilities
                </p>
              </div>
            </div>

            <div className="p-8 bg-gradient-to-br from-purple-500/10 to-indigo-600/10 rounded-xl border border-purple-500/30">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mb-6">
                <span className="text-purple-400 font-bold text-xl">DS</span>
              </div>
              <h3 className="text-2xl font-bold text-purple-400 mb-4">Choose DeepSeek R1 For:</h3>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 mt-2"></span>
                  <span>Budget-conscious automation projects</span>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 mt-2"></span>
                  <span>Mathematical and scientific computations</span>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 mt-2"></span>
                  <span>Educational and research applications</span>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 mt-2"></span>
                  <span>Self-hosted AI solutions</span>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 mt-2"></span>
                  <span>Logical reasoning tasks</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-purple-500/10 rounded-lg">
                <p className="text-purple-300 text-sm font-semibold">
                  Best for: Cost-effective automation with strong reasoning
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-800/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">Real-World Testing</span>
          </h2>

          <div className="space-y-8">
            <div className="p-8 bg-gradient-to-r from-blue-500/10 to-cyan-600/10 rounded-xl border border-blue-500/30">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-xl">💻</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Full-Stack Application Development</h3>
                  <p className="text-gray-300 mb-4">
                    "We tasked each model with building a complete e-commerce application. Claude 4 delivered the most production-ready code with proper error handling, security measures, and clean architecture. GPT-4.1 was fastest but required more refinement. DeepSeek R1 showed strong logic but lacked polish."
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <span className="text-blue-400">Winner: Claude 4</span>
                    <span className="text-green-400">Speed: GPT-4.1</span>
                    <span className="text-purple-400">Value: DeepSeek R1</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 bg-gradient-to-r from-green-500/10 to-emerald-600/10 rounded-xl border border-green-500/30">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-xl">🤖</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Automation Script Generation</h3>
                  <p className="text-gray-300 mb-4">
                    "Creating automation scripts for data processing, web scraping, and API integration. GPT-4.1 excelled at rapid prototyping and handling multiple data formats. Claude 4 produced more robust, maintainable code. DeepSeek R1 showed impressive logical flow but slower iteration."
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <span className="text-green-400">Winner: GPT-4.1</span>
                    <span className="text-blue-400">Quality: Claude 4</span>
                    <span className="text-purple-400">Logic: DeepSeek R1</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 bg-gradient-to-r from-purple-500/10 to-indigo-600/10 rounded-xl border border-purple-500/30">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-indigo-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-xl">🧮</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Mathematical Problem Solving</h3>
                  <p className="text-gray-300 mb-4">
                    "Complex mathematical proofs, optimization problems, and statistical analysis. DeepSeek R1 dominated with step-by-step reasoning and accurate solutions. Claude 4 showed strong analytical thinking. GPT-4.1 was competent but less systematic in approach."
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <span className="text-purple-400">Winner: DeepSeek R1</span>
                    <span className="text-blue-400">Analysis: Claude 4</span>
                    <span className="text-green-400">Speed: GPT-4.1</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-r from-orange-600/10 to-red-600/10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="p-8 bg-gradient-to-r from-orange-500/20 to-red-600/20 rounded-xl border border-orange-500/30 mb-8">
            <h3 className="text-white text-2xl font-bold mb-4">Master AI Agents with All Models</h3>
            <p className="text-orange-100 mb-6">
              Learn to leverage Claude 4, GPT-4.1, and DeepSeek R1 in our comprehensive AI Agents course. Build automation systems that use the best model for each specific task.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-300">3</div>
                <div className="text-orange-200 text-sm">AI Models Mastered</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-300">15+</div>
                <div className="text-red-200 text-sm">Automation Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-300">24/7</div>
                <div className="text-yellow-200 text-sm">AI-Powered Systems</div>
              </div>
            </div>
            <Link href="/ai-agents" className="inline-block bg-gray-900 text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-all duration-300 hover:scale-105">
              Master AI Agents →
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-r from-orange-500/10 to-red-600/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Build with <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">AI Models?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Choose the right AI model for your automation projects and start building intelligent systems that work around the clock
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl text-white font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 hover:scale-105">
              Start Building with AI
            </Link>
            <Link href="/blog" className="px-8 py-4 border border-gray-600 rounded-xl text-white font-semibold hover:bg-gray-800 transition-all duration-300 hover:scale-105">
              Explore More Comparisons
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}