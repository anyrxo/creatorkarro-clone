'use client'

import React from 'react'
import Link from 'next/link'

export default function ChatGPTAutomationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800"><section className="relative py-20 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-blue-600/20" />
        <div className="relative max-w-4xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 bg-emerald-500/20 rounded-full text-emerald-300 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse" />
            CHATGPT AUTOMATION WORKFLOWS
          </div>
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-6">
            Build AI Systems That Make
            <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent"> $25K+/Month</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Master ChatGPT automation with advanced workflows, API integrations, and custom GPTs. Build AI systems that automate entire businesses and generate massive recurring revenue.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#automation-workflows" className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-xl text-white font-semibold hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 hover:scale-105">
              Explore Workflows
            </Link>
            <Link href="#api-integration" className="px-8 py-4 border border-gray-600 rounded-xl text-white font-semibold hover:bg-gray-800 transition-all duration-300 hover:scale-105">
              API Integration Guide
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gray-800/50 rounded-xl border border-gray-700">
              <div className="text-3xl font-bold text-emerald-400 mb-2">$25K+</div>
              <div className="text-gray-300">Monthly Revenue</div>
            </div>
            <div className="text-center p-6 bg-gray-800/50 rounded-xl border border-gray-700">
              <div className="text-3xl font-bold text-blue-400 mb-2">24/7</div>
              <div className="text-gray-300">Automated Operation</div>
            </div>
            <div className="text-center p-6 bg-gray-800/50 rounded-xl border border-gray-700">
              <div className="text-3xl font-bold text-purple-400 mb-2">10,000+</div>
              <div className="text-gray-300">Tasks Automated</div>
            </div>
            <div className="text-center p-6 bg-gray-800/50 rounded-xl border border-gray-700">
              <div className="text-3xl font-bold text-cyan-400 mb-2">95%</div>
              <div className="text-gray-300">Cost Reduction</div>
            </div>
          </div>
        </div>
      </section>

      <section id="automation-workflows" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            Advanced <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">ChatGPT Workflows</span>
          </h2>
          <p className="text-xl text-gray-400 text-center mb-12 max-w-3xl mx-auto">
            Production-ready automation workflows that integrate ChatGPT with business systems for maximum efficiency and revenue
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-emerald-500/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-emerald-400 font-bold">🤖</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Custom GPT Automation</h3>
                  <p className="text-gray-400">Intelligent Assistants</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Build custom GPTs with specialized knowledge, automated actions, and revenue-generating capabilities for specific business use cases.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-sm">Custom knowledge</span>
                <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-sm">Action triggers</span>
                <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-sm">Revenue generation</span>
              </div>
            </div>

            <div className="p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-blue-400 font-bold">🔗</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">API Integration Hub</h3>
                  <p className="text-gray-400">System Connections</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Connect ChatGPT to external APIs, databases, and business systems for seamless data flow and automated decision making.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Multi-API</span>
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Database sync</span>
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Real-time data</span>
              </div>
            </div>

            <div className="p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-purple-400 font-bold">📝</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Content Generation Engine</h3>
                  <p className="text-gray-400">Automated Content</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Automated content creation workflows for blogs, social media, emails, and marketing materials with brand consistency and SEO optimization.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">Multi-format</span>
                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">SEO optimized</span>
                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">Brand voice</span>
              </div>
            </div>

            <div className="p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-cyan-400 font-bold">🎯</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Lead Qualification System</h3>
                  <p className="text-gray-400">Sales Automation</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Intelligent lead scoring, qualification, and nurturing workflows that automatically identify high-value prospects and convert them to customers.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm">Auto scoring</span>
                <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm">Smart routing</span>
                <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm">Conversion tracking</span>
              </div>
            </div>

            <div className="p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-yellow-500/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-yellow-400 font-bold">📊</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Data Analysis Automation</h3>
                  <p className="text-gray-400">Intelligent Insights</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Automated data analysis, report generation, and insight discovery that turns raw business data into actionable intelligence and strategy.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-sm">Auto analysis</span>
                <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-sm">Smart insights</span>
                <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-sm">Report generation</span>
              </div>
            </div>

            <div className="p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-red-500/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-red-400 font-bold">🛠️</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Customer Support Automation</h3>
                  <p className="text-gray-400">24/7 AI Support</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Intelligent customer support workflows with automated ticket routing, knowledge base integration, and escalation management.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-red-500/20 text-red-300 rounded-full text-sm">24/7 availability</span>
                <span className="px-3 py-1 bg-red-500/20 text-red-300 rounded-full text-sm">Smart routing</span>
                <span className="px-3 py-1 bg-red-500/20 text-red-300 rounded-full text-sm">Knowledge base</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="api-integration" className="py-20 px-4 bg-gray-800/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            ChatGPT <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">API Integration</span>
          </h2>
          <p className="text-xl text-gray-400 text-center mb-12 max-w-3xl mx-auto">
            Production-ready code examples and implementation guides for integrating ChatGPT into your business systems
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="p-8 bg-gray-800/50 rounded-xl border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-4">OpenAI API Setup</h3>
              <p className="text-gray-300 mb-6">
                Complete setup guide for ChatGPT API integration with authentication, rate limiting, and error handling.
              </p>
              <div className="bg-gray-900 rounded-lg p-4 mb-6">
                <code className="text-green-400 text-sm">
                  {`import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function generateResponse(prompt) {
  try {
    const completion = await openai.chat.completions.create({
      model:"gpt-4",
      messages: [{ role:"user", content: prompt }],
      max_tokens: 1000,
      temperature: 0.7,
    });
    return completion.choices[0].message.content;
  } catch (error) {
    console.error('OpenAI API Error:', error);
    return null;
}`}
                </code>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                  <span className="text-gray-300">Secure API key management</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                  <span className="text-gray-300">Error handling and retries</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                  <span className="text-gray-300">Rate limiting compliance</span>
                </div>
              </div>
            </div>

            <div className="p-8 bg-gray-800/50 rounded-xl border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-4">Automated Email Responses</h3>
              <p className="text-gray-300 mb-6">
                Intelligent email automation system that analyzes incoming emails and generates contextual responses automatically.
              </p>
              <div className="bg-gray-900 rounded-lg p-4 mb-6">
                <code className="text-blue-400 text-sm">
                  {`async function automateEmailResponse(email) {
  const context = \`
    Email from: \
    Subject: \
    Content: \
    
    Generate a professional response that:
    - Addresses their main concern
    - Provides helpful information
    - Maintains brand voice
  \`;
  
  const response = await openai.chat.completions.create({
    model:"gpt-4",
    messages: [
      { role:"system", content:"You are a helpful customer service assistant." },
      { role:"user", content: context }
    ]
  });
  
  return response.choices[0].message.content;
}`}
                </code>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  <span className="text-gray-300">Context-aware responses</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  <span className="text-gray-300">Brand voice consistency</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  <span className="text-gray-300">Automated sentiment analysis</span>
                </div>
              </div>
            </div>

            <div className="p-8 bg-gray-800/50 rounded-xl border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-4">Dynamic Content Generation</h3>
              <p className="text-gray-300 mb-6">
                Automated content creation system that generates SEO-optimized blog posts, social media content, and marketing materials.
              </p>
              <div className="bg-gray-900 rounded-lg p-4 mb-6">
                <code className="text-purple-400 text-sm">
                  {`async function generateBlogPost(topic, keywords) {
  const prompt = \`
    Create a comprehensive blog post about: \
    Target keywords: \
    
    Requirements:
    - 1500+ words
    - SEO optimized
    - Engaging title and headings
    - Call-to-action
    - Meta description
  \`;
  
  const response = await openai.chat.completions.create({
    model:"gpt-4",
    messages: [
      { role:"system", content:"You are an expert content writer and SEO specialist." },
      { role:"user", content: prompt }
    ],
    max_tokens: 2000
  });
  
  return parseContentResponse(response.choices[0].message.content);
}`}
                </code>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  <span className="text-gray-300">SEO optimization</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  <span className="text-gray-300">Keyword integration</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  <span className="text-gray-300">Multi-format output</span>
                </div>
              </div>
            </div>

            <div className="p-8 bg-gray-800/50 rounded-xl border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-4">Business Intelligence Assistant</h3>
              <p className="text-gray-300 mb-6">
                AI-powered business intelligence system that analyzes data, generates reports, and provides strategic insights automatically.
              </p>
              <div className="bg-gray-900 rounded-lg p-4 mb-6">
                <code className="text-cyan-400 text-sm">
                  {`async function analyzeBusinessData(data) {
  const prompt = \`
    Analyze this business data and provide insights:
    Revenue: \
    Costs: \
    Customer metrics: \
    
    Provide:
    - Key performance indicators
    - Trend analysis
    - Actionable recommendations
    - Risk assessment
  \`;
  
  const analysis = await openai.chat.completions.create({
    model:"gpt-4",
    messages: [
      { role:"system", content:"You are a business intelligence analyst." },
      { role:"user", content: prompt }
    ]
  });
  
  return generateReport(analysis.choices[0].message.content);
}`}
                </code>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                  <span className="text-gray-300">Automated insights</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                  <span className="text-gray-300">Trend identification</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                  <span className="text-gray-300">Strategic recommendations</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            Revenue <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">Generation Strategies</span>
          </h2>
          <p className="text-xl text-gray-400 text-center mb-12 max-w-3xl mx-auto">
            Proven methods for monetizing ChatGPT automation systems and building recurring revenue streams
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gradient-to-br from-emerald-500/10 to-blue-600/10 rounded-xl border border-emerald-500/30">
              <h3 className="text-xl font-bold text-white mb-4">SaaS Automation Platform</h3>
              <p className="text-gray-300 mb-4">
                Build and sell ChatGPT-powered automation tools as Software-as-a-Service with recurring monthly subscriptions.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                  <span className="text-gray-300">Monthly recurring revenue</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                  <span className="text-gray-300">Scalable business model</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                  <span className="text-gray-300">White-label opportunities</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                  <span className="text-gray-300">Enterprise contracts</span>
                </div>
              </div>
              <div className="mt-4 p-3 bg-emerald-500/10 rounded-lg">
                <p className="text-emerald-300 text-sm font-semibold">
                  Revenue Potential: $5K-50K/month
                </p>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-xl border border-blue-500/30">
              <h3 className="text-xl font-bold text-white mb-4">Custom AI Consulting</h3>
              <p className="text-gray-300 mb-4">
                Offer specialized ChatGPT integration services to businesses looking to automate their operations and processes.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  <span className="text-gray-300">High-value contracts</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  <span className="text-gray-300">Ongoing maintenance revenue</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  <span className="text-gray-300">Premium hourly rates</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  <span className="text-gray-300">Retainer agreements</span>
                </div>
              </div>
              <div className="mt-4 p-3 bg-blue-500/10 rounded-lg">
                <p className="text-blue-300 text-sm font-semibold">
                  Revenue Potential: $10K-100K/project
                </p>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-br from-purple-500/10 to-pink-600/10 rounded-xl border border-purple-500/30">
              <h3 className="text-xl font-bold text-white mb-4">API Marketplace Products</h3>
              <p className="text-gray-300 mb-4">
                Create and sell ChatGPT-enhanced APIs and integrations on marketplaces like RapidAPI and AWS Marketplace.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  <span className="text-gray-300">Pay-per-use revenue</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  <span className="text-gray-300">Global marketplace reach</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  <span className="text-gray-300">Passive income streams</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  <span className="text-gray-300">Viral growth potential</span>
                </div>
              </div>
              <div className="mt-4 p-3 bg-purple-500/10 rounded-lg">
                <p className="text-purple-300 text-sm font-semibold">
                  Revenue Potential: $1K-25K/month
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-800/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">Success Stories</span>
          </h2>

          <div className="space-y-8">
            <div className="p-8 bg-gradient-to-r from-emerald-500/10 to-blue-600/10 rounded-xl border border-emerald-500/30">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-xl">CS</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">ContentScale - From $0 to $35K/Month with AI Content</h3>
                  <p className="text-gray-300 mb-4">"Our ChatGPT automation system generates 500+ SEO-optimized articles monthly for clients. We went from manual content creation to a fully automated content factory generating $35K monthly recurring revenue with 89% profit margins."
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <span className="text-emerald-400">$35K monthly revenue</span>
                    <span className="text-blue-400">500+ articles/month</span>
                    <span className="text-green-400">89% profit margin</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-xl border border-blue-500/30">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-xl">AS</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">AutoSupport - 24/7 Customer Service with 95% Resolution Rate</h3>
                  <p className="text-gray-300 mb-4">"ChatGPT automation handles 10,000+ customer inquiries monthly with 95% resolution rate. Our support costs dropped 80% while customer satisfaction increased to 4.9/5 stars. The system pays for itself 15x over."
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <span className="text-blue-400">10K+ inquiries/month</span>
                    <span className="text-purple-400">95% resolution rate</span>
                    <span className="text-yellow-400">80% cost reduction</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 bg-gradient-to-r from-purple-500/10 to-pink-600/10 rounded-xl border border-purple-500/30">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-xl">LG</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">LeadGenius - AI-Powered Sales Automation at Scale</h3>
                  <p className="text-gray-300 mb-4">"Our ChatGPT lead qualification system processes 5,000+ leads daily, automatically scoring and routing high-value prospects. Sales team efficiency increased 300% while conversion rates improved to 28%."
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <span className="text-purple-400">5K+ leads/day</span>
                    <span className="text-pink-400">300% efficiency gain</span>
                    <span className="text-cyan-400">28% conversion rate</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-r from-emerald-600/10 to-blue-600/10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="p-8 bg-gradient-to-r from-emerald-500/20 to-blue-600/20 rounded-xl border border-emerald-500/30 mb-8">
            <h3 className="text-white text-2xl font-bold mb-4">Master ChatGPT Automation</h3>
            <p className="text-emerald-100 mb-6">
              Transform your business with our comprehensive ChatGPT automation course. Learn to build AI systems that generate massive revenue while you sleep.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-300">20+</div>
                <div className="text-emerald-200 text-sm">Automation Workflows</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-300">$25K+</div>
                <div className="text-blue-200 text-sm">Monthly Revenue Potential</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-300">24/7</div>
                <div className="text-purple-200 text-sm">Automated Operation</div>
              </div>
            </div>
            <Link href="/ai-agents" className="inline-block bg-gray-900 text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-all duration-300 hover:scale-105">
              Master ChatGPT Automation →
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-r from-emerald-500/10 to-blue-600/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Build <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">AI Revenue Systems?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Start building ChatGPT automation workflows that generate revenue automatically and scale your business to new heights
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-xl text-white font-semibold hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 hover:scale-105">
              Start Building AI Systems
            </Link>
            <Link href="/blog" className="px-8 py-4 border border-gray-600 rounded-xl text-white font-semibold hover:bg-gray-800 transition-all duration-300 hover:scale-105">
              Explore More Automation
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
