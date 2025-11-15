import React from 'react'
import Link from 'next/link'
import { generateBlogPostSchema } from '@/lib/blog-schema'
import SmartCTA from '@/components/blog/SmartCTA'
import RelatedPosts from '@/components/blog/RelatedPosts'

// Comprehensive SEO Metadata
export const metadata = {
  title: "N8N API Integration: Connect Any Service with Workflows",
  description: "Complete guide to N8N API integration - tutorials, code examples, authentication methods, and webhooks setup",
  keywords: ["n8n api integration","api automation","n8n webhooks","api workflow automation","rest api","http requests","webhook setup"],
  authors: [{ name: "Anyro", url: "https://iimagined.ai" }],
  creator: "IImagined.ai",
  publisher: "IImagined.ai",
  category: "API Integration",
  openGraph: {
    title: "N8N API Integration: Connect Any Service with Workflows",
    description: "Complete guide to N8N API integration - tutorials, code examples, authentication methods, and webhooks setup",
    url: "https://iimagined.ai/blog/n8n-api-integration-connect-any-service-workflows",
    siteName: "IImagined.ai",
    type: "article",
    publishedTime: "2026-02-10T10:00:00.000Z",
    modifiedTime: "2026-02-10T10:00:00.000Z",
    authors: ["Anyro"],
    tags: ["n8n api integration","api automation","n8n webhooks","rest api"],
    images: [{
      url: "https://iimagined.ai/images/blog/n8n-api-integration-connect-any-service-workflows-og.jpg",
      width: 1200,
      height: 630,
      alt: "N8N API Integration: Connect Any Service with Workflows",
      type: "image/jpeg"
    }],
    locale: "en_US"
  },
  twitter: {
    card: "summary_large_image",
    site: "@iimagined_ai",
    creator: "@iimagined_ai",
    title: "N8N API Integration: Connect Any Service with Workflows",
    description: "Complete guide to N8N API integration",
    images: [{
      url: "https://iimagined.ai/images/blog/n8n-api-integration-connect-any-service-workflows-og.jpg",
      alt: "N8N API Integration: Connect Any Service with Workflows"
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
    canonical: "https://iimagined.ai/blog/n8n-api-integration-connect-any-service-workflows"
  }
}

export default function N8nApiIntegrationConnectAnyServiceWithWorkflows() {
  const schema = generateBlogPostSchema({
    title: metadata.title,
    description: metadata.description,
    slug: "n8n-api-integration-connect-any-service-workflows",
    publishedTime: (metadata.openGraph as any)?.publishedTime as string,
    modifiedTime: (metadata.openGraph as any)?.modifiedTime as string,
    category: metadata.category || "API Integration",
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
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
              <span className="text-purple-400 text-sm font-semibold">N8N API MASTERY</span>
            </div>

            <h1 className="text-3xl md:text-6xl font-bold mb-6 leading-tight">
              N8N API Integration: <span className="text-purple-400">Connect Anything Tutorial</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-400 mb-8">
              Master API integration in N8N - <span className="text-white font-semibold">step-by-step code examples, authentication patterns, and production workflows</span>
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 border-y border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-purple-600/10 to-blue-600/10 p-8 rounded-xl mb-12 border border-purple-600/20">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                <span className="mr-3">🔌</span>
                N8N API Integration Fundamentals
              </h2>
              <div className="space-y-4">
                <p className="text-gray-300">
                  Learn to connect N8N to any external service via APIs. This comprehensive guide covers HTTP methods, authentication, error handling, and real-world integration patterns.
                </p>
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-zinc-900 rounded-lg p-6">
                    <h3 className="text-lg font-bold text-purple-400 mb-3">Key Topics</h3>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li>• HTTP methods (GET, POST, PUT, DELETE)</li>
                      <li>• Authentication (API keys, OAuth, Basic Auth)</li>
                      <li>• Request headers and query parameters</li>
                      <li>• JSON payload construction</li>
                      <li>• Response parsing and transformation</li>
                      <li>• Error handling and retries</li>
                      <li>• Rate limiting strategies</li>
                    </ul>
                  </div>
                  <div className="bg-zinc-900 rounded-lg p-6">
                    <h3 className="text-lg font-bold text-blue-400 mb-3">Prerequisites</h3>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li>• Basic understanding of HTTP/REST APIs</li>
                      <li>• N8N account (free tier included)</li>
                      <li>• API key from your target service</li>
                      <li>• Postman (optional, for API testing)</li>
                      <li>• 60 minutes for complete setup</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600/10 to-cyan-600/10 p-8 rounded-xl mb-12 border border-blue-600/20">
              <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
                <span className="mr-3">🔐</span>
                Authentication Methods Deep Dive
              </h2>

              <div className="space-y-6">
                <div className="bg-zinc-900 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-blue-400 mb-3">1. API Key Authentication</h3>
                  <p className="text-gray-400 mb-4">Simplest method - key passed in header or URL parameter.</p>
                  <div className="bg-dark rounded p-4 font-mono text-sm text-gray-300 mb-3">
                    <pre>{`// Method 1: Header (Recommended)
Headers:
  - X-API-Key: sk_live_xxxxxxxxxxxx
  - Content-Type: application/json

// Method 2: Query Parameter
URL: https://api.example.com/data?apikey=sk_live_xxxxxxxxxxxx

// Method 3: Body
POST /api/endpoint
Body: {
  "apiKey": "sk_live_xxxxxxxxxxxx",
  "data": { ... }
}`}</pre>
                  </div>
                  <div className="bg-zinc-800 rounded-lg p-4">
                    <h4 className="text-white font-semibold mb-2">N8N Setup:</h4>
                    <p className="text-gray-400 text-sm">HTTP Request Node → Authentication → None + Custom Headers → Add Header "X-API-Key" with credential</p>
                  </div>
                </div>

                <div className="bg-zinc-900 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-blue-400 mb-3">2. Basic Authentication</h3>
                  <p className="text-gray-400 mb-4">Username and password encoded in Base64.</p>
                  <div className="bg-dark rounded p-4 font-mono text-sm text-gray-300 mb-3">
                    <pre>{`// Raw credentials
username: john@example.com
password: secure_password

// Base64 encoded
Authorization: Basic am9obkBleGFtcGxlLmNvbTpzZWN1cmVfcGFzc3dvcmQ=

// N8N automatically encodes
Node: HTTP Request
Authentication: Basic Auth
Username: john@example.com
Password: secure_password`}</pre>
                  </div>
                </div>

                <div className="bg-zinc-900 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-blue-400 mb-3">3. Bearer Token (JWT/OAuth)</h3>
                  <p className="text-gray-400 mb-4">Temporary token requiring refresh mechanism.</p>
                  <div className="bg-dark rounded p-4 font-mono text-sm text-gray-300">
                    <pre>{`// Step 1: Get Access Token
POST https://auth.example.com/oauth/token
Body: {
  "client_id": "your_client_id",
  "client_secret": "your_secret",
  "grant_type": "client_credentials"
}

Response: {
  "access_token": "eyJhbGc...",
  "expires_in": 3600
}

// Step 2: Use Token in API Calls
Headers:
  - Authorization: Bearer eyJhbGc...

// Step 3: N8N - Store in workflow variables
Set Token Node → HTTP Request Node (use token variable)`}</pre>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-600/10 to-emerald-600/10 p-8 rounded-xl mb-12 border border-green-600/20">
              <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
                <span className="mr-3">🔄</span>
                HTTP Methods & Request Patterns
              </h2>

              <div className="space-y-6">
                <div className="bg-zinc-900 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-green-400 mb-3">GET - Retrieve Data</h3>
                  <div className="bg-dark rounded p-4 font-mono text-sm text-gray-300">
                    <pre>{`// Simple GET
URL: https://api.example.com/users/123
Method: GET
Headers:
  - Authorization: Bearer token

// With Query Parameters
URL: https://api.example.com/users?status=active&limit=10
  OR
URL: https://api.example.com/users
Query Parameters:
  - status: active
  - limit: 10
  - offset: 0`}</pre>
                  </div>
                </div>

                <div className="bg-zinc-900 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-green-400 mb-3">POST - Create Data</h3>
                  <div className="bg-dark rounded p-4 font-mono text-sm text-gray-300">
                    <pre>{`// Standard POST
Method: POST
URL: https://api.example.com/users
Headers:
  - Content-Type: application/json
  - Authorization: Bearer token

Body (JSON):
{
  "name": "John Doe",
  "email": "john@example.com",
  "role": "user"
}

// N8N: Use JSON/RAW body, not x-www-form-urlencoded`}</pre>
                  </div>
                </div>

                <div className="bg-zinc-900 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-green-400 mb-3">PUT/PATCH - Update Data</h3>
                  <div className="bg-dark rounded p-4 font-mono text-sm text-gray-300">
                    <pre>{`// PUT - Replace entire resource
Method: PUT
URL: https://api.example.com/users/123
Body: {
  "name": "Jane Doe",
  "email": "jane@example.com",
  "role": "admin"
}

// PATCH - Partial update
Method: PATCH
URL: https://api.example.com/users/123
Body: {
  "role": "admin"  // Only update this field
}`}</pre>
                  </div>
                </div>

                <div className="bg-zinc-900 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-green-400 mb-3">DELETE - Remove Data</h3>
                  <div className="bg-dark rounded p-4 font-mono text-sm text-gray-300">
                    <pre>{`// Simple DELETE
Method: DELETE
URL: https://api.example.com/users/123
Headers:
  - Authorization: Bearer token

// Often returns 204 No Content or 200 with confirmation
Response: { "success": true, "message": "User deleted" }`}</pre>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-600/10 to-red-600/10 p-8 rounded-xl mb-12 border border-orange-600/20">
              <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
                <span className="mr-3">⚙️</span>
                Response Handling & Data Transformation
              </h2>

              <div className="space-y-6">
                <div className="bg-zinc-900 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-orange-400 mb-3">Parse JSON Responses</h3>
                  <div className="bg-dark rounded p-4 font-mono text-sm text-gray-300">
                    <pre>{`// API Response
{
  "data": {
    "user": {
      "id": 123,
      "name": "John",
      "contacts": [
        { "type": "email", "value": "john@example.com" },
        { "type": "phone", "value": "+1234567890" }
      ]
    }
  },
  "status": "success"
}

// N8N - Access nested values
{{$json.data.user.id}}              // = 123
{{$json.data.user.contacts[0].value}}  // = john@example.com

// N8N - Transform data
Use Merge/Transform node:
{
  "userId": "{{$json.data.user.id}}",
  "email": "{{$json.data.user.contacts[0].value}}"
}`}</pre>
                  </div>
                </div>

                <div className="bg-zinc-900 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-orange-400 mb-3">Error Response Handling</h3>
                  <div className="bg-dark rounded p-4 font-mono text-sm text-gray-300">
                    <pre>{`// HTTP Request Node Error
Response Status: 400
Body: {
  "error": "Invalid email format",
  "code": "INVALID_INPUT"
}

// N8N - Add error handler
Continue on Fail: ON
  ↓
IF error occurred:
  IF status === 404 → Log "User not found"
  IF status === 401 → Log "Authentication failed"
  IF status === 429 → Wait 60 seconds, retry
  ELSE → Send alert email`}</pre>
                  </div>
                </div>

                <div className="bg-zinc-900 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-orange-400 mb-3">Array/Batch Processing</h3>
                  <div className="bg-dark rounded p-4 font-mono text-sm text-gray-300">
                    <pre>{`// API returns array of items
[
  { "id": 1, "name": "Item A" },
  { "id": 2, "name": "Item B" },
  { "id": 3, "name": "Item C" }
]

// N8N - Loop through array
Loop Node:
  For each item in response:
    POST to another API with item data
    Store result in database

// Or use Expression:
{{$json.map(item => ({...item, processed: true}))}}`}</pre>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-600/10 to-orange-600/10 p-8 rounded-xl mb-12 border border-yellow-600/20">
              <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
                <span className="mr-3">⚡</span>
                Production Best Practices
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-zinc-900 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-yellow-400 mb-3">Rate Limiting</h3>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• Check API docs for rate limits</li>
                    <li>• Add delays between requests</li>
                    <li>• Implement exponential backoff</li>
                    <li>• Cache responses when possible</li>
                    <li>• Use batch endpoints if available</li>
                  </ul>
                </div>

                <div className="bg-zinc-900 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-yellow-400 mb-3">Reliability</h3>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• Add retry logic for failed requests</li>
                    <li>• Log all API calls for debugging</li>
                    <li>• Validate response before processing</li>
                    <li>• Store API responses in database</li>
                    <li>• Monitor workflow execution history</li>
                  </ul>
                </div>

                <div className="bg-zinc-900 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-yellow-400 mb-3">Security</h3>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• Store API keys as credentials</li>
                    <li>• Never commit keys to version control</li>
                    <li>• Use OAuth for user permissions</li>
                    <li>• Validate SSL certificates</li>
                    <li>• Audit API access logs</li>
                  </ul>
                </div>

                <div className="bg-zinc-900 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-yellow-400 mb-3">Performance</h3>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• Use query parameters for filtering</li>
                    <li>• Request only needed fields</li>
                    <li>• Implement pagination for large results</li>
                    <li>• Use webhooks instead of polling</li>
                    <li>• Monitor execution times</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-600/10 to-pink-600/10 p-8 rounded-xl mb-12 border border-red-600/20">
              <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
                <span className="mr-3">🐛</span>
                Debugging API Integration Issues
              </h2>

              <div className="space-y-4">
                <div className="bg-zinc-900 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-red-400 mb-2">401 Unauthorized</h3>
                  <p className="text-gray-400 text-sm">Cause: Invalid/expired authentication</p>
                  <p className="text-green-400 text-sm">Fix: Verify API key, check header format, renew token</p>
                </div>

                <div className="bg-zinc-900 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-red-400 mb-2">400 Bad Request</h3>
                  <p className="text-gray-400 text-sm">Cause: Malformed request body or invalid parameters</p>
                  <p className="text-green-400 text-sm">Fix: Validate JSON, check required fields, test in Postman first</p>
                </div>

                <div className="bg-zinc-900 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-red-400 mb-2">429 Too Many Requests</h3>
                  <p className="text-gray-400 text-sm">Cause: Rate limit exceeded</p>
                  <p className="text-green-400 text-sm">Fix: Add delays, use batch endpoints, queue requests</p>
                </div>

                <div className="bg-zinc-900 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-red-400 mb-2">503 Service Unavailable</h3>
                  <p className="text-gray-400 text-sm">Cause: API server down or overloaded</p>
                  <p className="text-green-400 text-sm">Fix: Implement retry with exponential backoff, add health checks</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-cyan-600/10 to-blue-600/10 p-8 rounded-xl border border-cyan-600/20">
              <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
                <span className="mr-3">✅</span>
                Implementation Checklist
              </h2>

              <div className="space-y-2 text-gray-300">
                <div className="flex items-center gap-3 p-3 bg-zinc-900 rounded">
                  <input type="checkbox" className="w-5 h-5" />
                  <span>Obtain API key and document authentication method</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-zinc-900 rounded">
                  <input type="checkbox" className="w-5 h-5" />
                  <span>Test API endpoints in Postman with sample data</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-zinc-900 rounded">
                  <input type="checkbox" className="w-5 h-5" />
                  <span>Create N8N HTTP Request node with correct method</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-zinc-900 rounded">
                  <input type="checkbox" className="w-5 h-5" />
                  <span>Add authentication headers or basic auth</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-zinc-900 rounded">
                  <input type="checkbox" className="w-5 h-5" />
                  <span>Parse and validate API response structure</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-zinc-900 rounded">
                  <input type="checkbox" className="w-5 h-5" />
                  <span>Add error handling and retry logic</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-zinc-900 rounded">
                  <input type="checkbox" className="w-5 h-5" />
                  <span>Test workflow end-to-end with real data</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-zinc-900 rounded">
                  <input type="checkbox" className="w-5 h-5" />
                  <span>Monitor logs and handle edge cases</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          {/* Smart CTA - All Access Pass */}
          <SmartCTA blogSlug="n8n-api-integration-connect-any-service-workflows" />

          {/* Related Posts */}
          <RelatedPosts currentSlug="n8n-api-integration-connect-any-service-workflows" limit={3} />
        </div>
      </section>
    </div>
  )
}
