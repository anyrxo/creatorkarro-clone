'use client'

import React, { useState } from 'react'

interface ContentRequest {
  contentType: 'social-media' | 'n8n' | 'fanvue'
  platform?: 'twitter' | 'linkedin' | 'instagram' | 'tiktok'
  topic?: string
  n8nType?: 'tutorial' | 'workflow' | 'integration' | 'case-study'
  fanvueAngle?: 'strategy' | 'optimization' | 'case-study' | 'comparison'
}

interface GeneratedContent {
  content: string
  metadata: {
    contentType: string
    platform?: string
    topic?: string
    n8nType?: string
    fanvueAngle?: string
    generatedAt: string
    model: string
  }
}

export default function ExpertContentGenerator() {
  const [request, setRequest] = useState<ContentRequest>({
    contentType: 'social-media',
    platform: 'twitter',
    topic: 'AI Automation'
  })
  
  const [generatedContent, setGeneratedContent] = useState<GeneratedContent | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const socialMediaTopics = [
    'AI Automation',
    'N8N Workflows', 
    'Instagram Growth',
    'Digital Products',
    'Fanvue Monetization',
    'Content Creation',
    'Social Media Marketing',
    'Passive Income',
    'AI Tools',
    'Creator Economy'
  ]

  const handleGenerate = async () => {
    setIsLoading(true)
    setError(null)
    setGeneratedContent(null)

    try {
      const response = await fetch('/api/generate-expert-content', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(request)
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to generate content')
      }

      setGeneratedContent(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setIsLoading(false)
    }
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    // You could add a toast notification here
  }

  return (
    <div className="bg-gray-800/50 p-8 rounded-lg mb-8">
      <div className="flex items-center mb-6">
        <span className="text-2xl mr-3">🤖</span>
        <h3 className="text-xl font-bold text-white">Generate Expert Content</h3>
      </div>

      {/* Content Type Selection */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-300 mb-3">Content Type</label>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <button
            onClick={() => setRequest(prev => ({ ...prev, contentType: 'social-media' }))}
            className={`p-4 rounded-lg border text-left transition-colors ${
              request.contentType === 'social-media'
                ? 'bg-blue-600/20 border-blue-600 text-blue-300'
                : 'bg-gray-700/50 border-gray-600 text-gray-300 hover:bg-gray-700'
            }`}
          >
            <div className="font-semibold">Social Media</div>
            <div className="text-sm opacity-80">Twitter, LinkedIn, Instagram, TikTok</div>
          </button>
          <button
            onClick={() => setRequest(prev => ({ ...prev, contentType: 'n8n' }))}
            className={`p-4 rounded-lg border text-left transition-colors ${
              request.contentType === 'n8n'
                ? 'bg-purple-600/20 border-purple-600 text-purple-300'
                : 'bg-gray-700/50 border-gray-600 text-gray-300 hover:bg-gray-700'
            }`}
          >
            <div className="font-semibold">N8N Automation</div>
            <div className="text-sm opacity-80">Tutorials, workflows, integrations</div>
          </button>
          <button
            onClick={() => setRequest(prev => ({ ...prev, contentType: 'fanvue' }))}
            className={`p-4 rounded-lg border text-left transition-colors ${
              request.contentType === 'fanvue'
                ? 'bg-green-600/20 border-green-600 text-green-300'
                : 'bg-gray-700/50 border-gray-600 text-gray-300 hover:bg-gray-700'
            }`}
          >
            <div className="font-semibold">Fanvue Monetization</div>
            <div className="text-sm opacity-80">Strategies, optimization, case studies</div>
          </button>
        </div>
      </div>

      {/* Social Media Options */}
      {request.contentType === 'social-media' && (
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Platform</label>
            <select
              value={request.platform}
              onChange={(e) => setRequest(prev => ({ ...prev, platform: e.target.value as any }))}
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:outline-none"
            >
              <option value="twitter">Twitter</option>
              <option value="linkedin">LinkedIn</option>
              <option value="instagram">Instagram</option>
              <option value="tiktok">TikTok</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Topic</label>
            <select
              value={request.topic}
              onChange={(e) => setRequest(prev => ({ ...prev, topic: e.target.value }))}
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:outline-none"
            >
              {socialMediaTopics.map(topic => (
                <option key={topic} value={topic}>{topic}</option>
              ))}
            </select>
          </div>
        </div>
      )}

      {/* N8N Options */}
      {request.contentType === 'n8n' && (
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-300 mb-2">N8N Content Type</label>
          <select
            value={request.n8nType}
            onChange={(e) => setRequest(prev => ({ ...prev, n8nType: e.target.value as any }))}
            className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:outline-none"
          >
            <option value="tutorial">Tutorial</option>
            <option value="workflow">Workflow</option>
            <option value="integration">Integration</option>
            <option value="case-study">Case Study</option>
          </select>
        </div>
      )}

      {/* Fanvue Options */}
      {request.contentType === 'fanvue' && (
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-300 mb-2">Fanvue Content Angle</label>
          <select
            value={request.fanvueAngle}
            onChange={(e) => setRequest(prev => ({ ...prev, fanvueAngle: e.target.value as any }))}
            className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:outline-none"
          >
            <option value="strategy">Strategy</option>
            <option value="optimization">Optimization</option>
            <option value="case-study">Case Study</option>
            <option value="comparison">Comparison</option>
          </select>
        </div>
      )}

      {/* Generate Button */}
      <button
        onClick={handleGenerate}
        disabled={isLoading}
        className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
      >
        {isLoading ? (
          <div className="flex items-center justify-center space-x-2">
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
            <span>Generating Expert Content...</span>
          </div>
        ) : (
          '🚀 Generate Expert Content'
        )}
      </button>

      {/* Error Display */}
      {error && (
        <div className="mt-4 p-4 bg-red-600/20 border border-red-600 rounded-lg">
          <div className="flex items-center space-x-2">
            <span className="text-red-400">❌</span>
            <span className="text-red-300 font-medium">Error:</span>
          </div>
          <p className="text-red-200 mt-1">{error}</p>
        </div>
      )}

      {/* Generated Content Display */}
      {generatedContent && (
        <div className="mt-6 p-6 bg-gray-900/50 border border-gray-600 rounded-lg">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <span className="text-green-400">✅</span>
              <span className="text-green-300 font-medium">Expert Content Generated</span>
            </div>
            <button
              onClick={() => copyToClipboard(generatedContent.content)}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
            >
              📋 Copy
            </button>
          </div>
          
          {/* Metadata */}
          <div className="mb-4 p-3 bg-gray-800/50 rounded-lg">
            <div className="text-sm text-gray-400 space-y-1">
              <div><span className="font-medium">Type:</span> {generatedContent.metadata.contentType}</div>
              {generatedContent.metadata.platform && (
                <div><span className="font-medium">Platform:</span> {generatedContent.metadata.platform}</div>
              )}
              {generatedContent.metadata.topic && (
                <div><span className="font-medium">Topic:</span> {generatedContent.metadata.topic}</div>
              )}
              {generatedContent.metadata.n8nType && (
                <div><span className="font-medium">N8N Type:</span> {generatedContent.metadata.n8nType}</div>
              )}
              {generatedContent.metadata.fanvueAngle && (
                <div><span className="font-medium">Fanvue Angle:</span> {generatedContent.metadata.fanvueAngle}</div>
              )}
              <div><span className="font-medium">Generated:</span> {new Date(generatedContent.metadata.generatedAt).toLocaleString()}</div>
              <div><span className="font-medium">Model:</span> {generatedContent.metadata.model}</div>
            </div>
          </div>

          {/* Content */}
          <div className="bg-white/5 p-4 rounded-lg">
            <pre className="text-gray-200 whitespace-pre-wrap text-sm leading-relaxed">
              {generatedContent.content}
            </pre>
          </div>
        </div>
      )}

      {/* Usage Tips */}
      <div className="mt-6 p-4 bg-blue-600/10 border border-blue-600/20 rounded-lg">
        <h4 className="font-semibold text-blue-300 mb-2">💡 Expert Content Tips:</h4>
        <ul className="space-y-1 text-sm text-gray-300">
          <li>• Use generated content as your expert foundation, then add personal insights</li>
          <li>• Share student success stories and metrics to build credibility</li>
          <li>• Position against competitors by showcasing superior knowledge</li>
          <li>• Always provide value first, then subtly promote relevant courses</li>
          <li>• Maintain consistency across platforms to establish thought leadership</li>
        </ul>
      </div>
    </div>
  )
}