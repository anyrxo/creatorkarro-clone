

import React from 'react'
import Link from 'next/link'
import { Workflow, GitBranch, Zap, Code, AlertCircle, CheckCircle, TrendingUp, Cpu, Database, Lock, Gauge, Wrench, Lightbulb, Rocket, Star, ArrowRight } from 'lucide-react'
import BlogPostLayout from '@/components/BlogPostLayout'
import SmartCTA from '@/components/blog/SmartCTA'
import RelatedPosts from '@/components/blog/RelatedPosts'

// Advanced SEO Metadata Export
export const metadata = {
  title: "AI Automation Workflows: Integrate GPT with N8N | Complete Technical Guide 2026",
  description: "Expert guide on integrating GPT and AI models with N8N workflows. Learn production-ready patterns, error handling, cost optimization, and advanced techniques from 4,000+ successful students.",
  keywords: ["ai automation", "n8n ai integration", "gpt automation", "ai workflow automation", "n8n workflows", "chatgpt api", "workflow builder", "business automation"],
  authors: [{ name: "Anyro", url: "https://iimagined.ai" }],
  creator: "IImagined.ai",
  publisher: "IImagined.ai",
  category: "AI Automations",
  openGraph: {
    title: "AI Automation Workflows: Integrate GPT with N8N - Technical Guide",
    description: "Expert guide on production-ready GPT + N8N workflows with code examples and best practices",
    url: "https://iimagined.ai/blog/ai-automation-workflows-integrate-gpt-with-n8n",
    siteName: "IImagined.ai",
    type: "article",
    publishedTime: "2026-02-10T10:00:00.000Z",
    modifiedTime: new Date().toISOString(),
    authors: ["Anyro"],
    tags: ["ai automation", "n8n ai integration", "gpt automation", "workflow automation"],
    images: [{
      url: "https://iimagined.ai/images/blog/n8n-gpt-integration-og.jpg",
      width: 1200,
      height: 630,
      alt: "N8N GPT Integration Technical Guide",
      type: "image/jpeg"
    }],
    locale: "en_US"
  },
  twitter: {
    card: "summary_large_image",
    site: "@creatorkarro",
    creator: "@creatorkarro",
    title: "AI Automation Workflows: Integrate GPT with N8N",
    description: "Production-ready GPT + N8N workflows with code examples",
    images: [{
      url: "https://iimagined.ai/images/blog/n8n-gpt-integration-og.jpg",
      alt: "N8N GPT Integration Guide"
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
    canonical: "https://iimagined.ai/blog/ai-automation-workflows-integrate-gpt-with-n8n"
  }
}

// Generate structured data for SEO
function generateBlogPostSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: 'AI Automation Workflows: Integrate GPT with N8N',
    description: 'Complete technical guide on integrating GPT and AI models with N8N workflows including production-ready patterns and code examples',
    author: {
      '@type': 'Person',
      name: 'Anyro',
      jobTitle: 'Founder & Creator Entrepreneur',
      description: '4,000+ students taught AI automation and business growth'
    },
    publisher: {
      '@type': 'Organization',
      name: 'IImagined.ai',
      logo: {
        '@type': 'ImageObject',
        url: 'https://iimagined.ai/logo.png'
      }
    },
    datePublished: '2026-02-10T10:00:00.000Z',
    dateModified: new Date().toISOString(),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://iimagined.ai/blog/ai-automation-workflows-integrate-gpt-with-n8n'
    },
    about: {
      '@type': 'SoftwareApplication',
      name: 'N8N Workflow Automation',
      applicationCategory: 'BusinessApplication'
    }
  }
}

export default function AiAutomationWorkflowsIntegrateGptWithN8n() {
  const relatedPosts = [
    {
      title: "AI Automation for Beginners: Your Complete 30-Day Roadmap",
      slug: "ai-automation-beginners-guide",
      description: "Start your AI automation journey with this comprehensive beginner's guide covering N8N, ChatGPT, and essential workflows.",
      readTime: 18
    },
    {
      title: "AI Automation Tools That Built My $88K/Month Business",
      slug: "ai-automation-guide-toxic-seo",
      description: "Complete guide revealing 254+ tested AI automation tools and exact workflows that generated $1.2M in automated revenue.",
      readTime: 28
    },
    {
      title: "Advanced ComfyUI Workflows for Professional AI Art",
      slug: "advanced-comfyui-workflows-professional-ai-art",
      description: "Master advanced ComfyUI techniques including SDXL workflows, LoRA stacking, and ControlNet for professional AI art.",
      readTime: 25
    }
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBlogPostSchema()) }}
      />

      <BlogPostLayout
        category="AI Automations"
        title="AI Automation Workflows: Integrate GPT with N8N"
        description="Expert technical guide on integrating GPT and AI models with N8N workflows. Learn production-ready patterns, error handling, cost optimization, and advanced techniques with complete code examples."
        date="Aug 5, 2026"
        readTime={35}
        relatedPosts={relatedPosts}
      >
        {/* Introduction */}
        <div className="not-prose bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-2xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-blue-300 mb-4 flex items-center gap-3">
            <Rocket className="w-8 h-8" />
            The Power of AI-Driven Automation
          </h2>
          <p className="text-lg text-gray-200 mb-4 leading-relaxed">
            In 2026, the automation landscape has fundamentally shifted. Gone are the days when automation meant simple trigger-action sequences. Today's businesses require <strong className="text-white">intelligent systems that can make decisions</strong>, understand context, and adapt to changing conditions.
          </p>
          <p className="text-lg text-gray-200 leading-relaxed">
            This is where integrating <strong className="text-blue-300">GPT with N8N</strong> creates unprecedented opportunities. N8N's visual workflow builder combined with GPT's natural language understanding creates a powerful automation platform that can handle complex business logic, customer interactions, content generation, data analysis, and much more.
          </p>
        </div>

        <h2>What You'll Learn in This Guide</h2>
        <p>
          Throughout this comprehensive technical guide, you'll learn how to build production-ready AI workflows that solve real business problems:
        </p>

        <div className="not-prose grid md:grid-cols-2 gap-4 mb-12">
          {[
            { icon: Workflow, text: "Architecture patterns for AI + N8N integration" },
            { icon: Code, text: "Production-ready code examples and workflows" },
            { icon: Lock, text: "Security best practices and error handling" },
            { icon: Gauge, text: "Cost optimization and performance tuning" },
            { icon: Lightbulb, text: "Real-world use cases with full implementations" },
            { icon: Wrench, text: "Troubleshooting common integration issues" }
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-3 bg-zinc-800/60 p-4 rounded-xl border border-blue-500/20">
              <item.icon className="w-6 h-6 text-blue-400 flex-shrink-0" />
              <span className="text-gray-200">{item.text}</span>
            </div>
          ))}
        </div>

        <h2>Understanding AI + N8N Architecture</h2>
        <p>
          Before diving into implementations, let's understand how N8N communicates with AI services and the different integration methods available.
        </p>

        <h3>N8N Integration Methods</h3>
        <p>
          N8N provides several methods to integrate with AI services like OpenAI's GPT, Anthropic's Claude, and other LLMs:
        </p>

        <div className="not-prose space-y-4 mb-10">
          {[
            { method: "HTTP Request Node", desc: "Direct API calls to AI providers (most flexible)", best: "Custom implementations, multiple AI providers" },
            { method: "OpenAI Node", desc: "Pre-built integration for OpenAI services (easiest to start)", best: "Quick prototypes, standard use cases" },
            { method: "AI Agent Nodes", desc: "Advanced nodes that combine multiple AI capabilities", best: "Complex reasoning, tool-using agents" },
            { method: "Custom Code Nodes", desc: "JavaScript/Python for complex AI orchestration", best: "Advanced logic, custom data processing" }
          ].map((item, idx) => (
            <div key={idx} className="bg-zinc-800/60 rounded-xl p-6 border border-cyan-500/20">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">{idx + 1}</div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-white mb-2">{item.method}</h4>
                  <p className="text-gray-200 mb-3">{item.desc}</p>
                  <p className="text-sm text-cyan-300"><strong>Best for:</strong> {item.best}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Architecture Pattern */}
        <div className="not-prose bg-black/50 border border-blue-500/30 rounded-xl p-6 mb-12">
          <h3 className="text-2xl font-bold text-blue-300 mb-4 flex items-center gap-2">
            <GitBranch className="w-6 h-6" />
            Workflow Architecture Pattern
          </h3>
          <pre className="text-sm text-gray-300 overflow-x-auto font-mono">
{`Trigger → Data Preparation → AI Processing → Response Handling → Action

Example Flow:
┌──────────────────┐
│ Webhook Trigger  │  (receives customer email)
└────────┬─────────┘
         ↓
┌──────────────────┐
│ Extract/Clean    │  (parse email content, metadata)
│ Data Node        │
└────────┬─────────┘
         ↓
┌──────────────────┐
│ GPT Analysis     │  (classify intent, generate response)
│ API Call         │
└────────┬─────────┘
         ↓
┌──────────────────┐
│ Decision Logic   │  (route based on AI output)
│ Switch Node      │
└────────┬─────────┘
         ↓
┌──────────────────┐
│ Multiple Actions │  (send email, update CRM, log data)
└──────────────────┘`}
          </pre>
        </div>

        <h2>Tutorial 1: Your First GPT + N8N Workflow</h2>
        <p>
          Let's build a practical workflow that receives customer inquiries via webhook, uses GPT to classify the intent and urgency, then routes the ticket appropriately. This is a real-world pattern used in production support systems.
        </p>

        <h3>Building an Intelligent Customer Support Classifier</h3>

        <div className="not-prose mb-10">
          <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-2xl p-8">
            <h4 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Workflow className="w-7 h-7 text-blue-400" />
              Step 1: Set Up the Webhook Trigger
            </h4>
            <p className="text-gray-200 mb-4">In N8N, add a Webhook node with these settings:</p>
            <div className="bg-black/50 rounded-xl p-6 border border-blue-500/20">
              <pre className="text-sm text-green-300 overflow-x-auto font-mono">
{`{
  "httpMethod": "POST",
  "path": "customer-support",
  "responseMode": "onReceived",
  "options": {
    "rawBody": false
  }
}`}
              </pre>
            </div>
            <p className="text-gray-400 text-sm mt-4">
              📌 This webhook will receive POST requests with customer inquiry data at: <code className="bg-zinc-800 px-2 py-1 rounded text-cyan-300">https://your-n8n-instance.com/webhook/customer-support</code>
            </p>
          </div>
        </div>

        <div className="not-prose mb-10">
          <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-2xl p-8">
            <h4 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Code className="w-7 h-7 text-cyan-400" />
              Step 2: Prepare Data for GPT
            </h4>
            <p className="text-gray-200 mb-4">Add a Function node to structure the data for GPT analysis:</p>
            <div className="bg-black/50 rounded-xl p-6 border border-cyan-500/20">
              <pre className="text-sm text-cyan-300 overflow-x-auto font-mono">
{`// Extract and clean customer inquiry data
const customerEmail = $input.item.json.email;
const subject = $input.item.json.subject;
const message = $input.item.json.message;
const timestamp = new Date().toISOString();

// Create structured prompt for GPT
const prompt = \`Analyze this customer support inquiry and provide:
1. Primary Category (billing, technical, general, urgent)
2. Urgency Level (low, medium, high, critical)
3. Recommended Action
4. Key Topics (as array)

Customer Email: \${customerEmail}
Subject: \${subject}
Message: \${message}

Respond in JSON format only.\`;

return {
  json: {
    customerEmail,
    subject,
    message,
    timestamp,
    prompt,
    originalData: $input.item.json
  }
};`}
              </pre>
            </div>
          </div>
        </div>

        <div className="not-prose mb-10">
          <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/30 rounded-2xl p-8">
            <h4 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Zap className="w-7 h-7 text-purple-400" />
              Step 3: Call OpenAI GPT API
            </h4>
            <p className="text-gray-200 mb-4">Add an HTTP Request node to call OpenAI:</p>
            <div className="bg-black/50 rounded-xl p-6 border border-purple-500/20">
              <pre className="text-sm text-purple-300 overflow-x-auto font-mono">
{`{
  "method": "POST",
  "url": "https://api.openai.com/v1/chat/completions",
  "authentication": "headerAuth",
  "headerAuth": {
    "name": "Authorization",
    "value": "Bearer YOUR_OPENAI_API_KEY"
  },
  "body": {
    "model": "gpt-4",
    "messages": [
      {
        "role": "system",
        "content": "You are a customer support classification AI. Always respond with valid JSON."
      },
      {
        "role": "user",
        "content": "={{ $json.prompt }}"
      }
    ],
    "temperature": 0.3,
    "response_format": { "type": "json_object" }
  }
}`}
              </pre>
            </div>
            <div className="mt-4 p-4 bg-purple-500/10 rounded-lg border border-purple-500/30">
              <p className="text-purple-300 font-semibold mb-2 flex items-center gap-2">
                <Lock className="w-5 h-5" />
                Security Note
              </p>
              <p className="text-gray-200 text-sm">
                Store your API key in N8N's credentials manager for security. The temperature of 0.3 ensures consistent, deterministic responses for classification tasks.
              </p>
            </div>
          </div>
        </div>

        {/* Inline CTA - Contextually Placed */}
        <SmartCTA blogSlug="ai-automation-workflows-integrate-gpt-with-n8n" variant="inline" />


        <div className="not-prose mb-10">
          <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-2xl p-8">
            <h4 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Database className="w-7 h-7 text-green-400" />
              Step 4: Parse and Route Response
            </h4>
            <p className="text-gray-200 mb-4">Add a Function node to parse GPT's response:</p>
            <div className="bg-black/50 rounded-xl p-6 border border-green-500/20">
              <pre className="text-sm text-green-300 overflow-x-auto font-mono">
{`// Parse GPT response
const gptResponse = JSON.parse(
  $input.item.json.choices[0].message.content
);

// Merge with original data
return {
  json: {
    ...gptResponse,
    customerEmail: $('Function').item.json.customerEmail,
    subject: $('Function').item.json.subject,
    message: $('Function').item.json.message,
    timestamp: $('Function').item.json.timestamp,
    aiProcessingTime: new Date().toISOString()
  }
};`}
              </pre>
            </div>

            <p className="text-gray-200 mt-6 mb-4">Use a Switch node to route based on urgency:</p>
            <div className="bg-black/50 rounded-xl p-6 border border-green-500/20">
              <pre className="text-sm text-yellow-300 overflow-x-auto font-mono">
{`Switch Routes:
- Route 0 (Critical): {{ $json.urgencyLevel === 'critical' }}
- Route 1 (High):     {{ $json.urgencyLevel === 'high' }}
- Route 2 (Medium):   {{ $json.urgencyLevel === 'medium' }}
- Route 3 (Low):      {{ $json.urgencyLevel === 'low' }}`}
              </pre>
            </div>
            <p className="text-gray-400 text-sm mt-4">
              💡 Each route can trigger different actions: critical tickets go to Slack immediately, high urgency creates priority tickets, etc.
            </p>
          </div>
        </div>

        <h2>Tutorial 2: Advanced AI Workflow Patterns</h2>
        <p>
          Advanced workflows often require multiple AI calls with context preservation. Here's how to build a content generation system that analyzes topics, researches context, then generates tailored content.
        </p>

        <h3>Multi-Step AI Processing with Context</h3>

        <div className="not-prose bg-zinc-900/60 border border-blue-500/20 rounded-xl p-8 mb-10">
          <h4 className="text-xl font-bold text-blue-300 mb-4">Pattern: AI Chain Processing</h4>
          <pre className="text-sm text-gray-300 overflow-x-auto font-mono">
{`Workflow Structure:

1. Topic Analysis (GPT-4)
   ↓ Extract key themes, target audience, content goals

2. Research Phase (GPT-4 + Web Search)
   ↓ Gather relevant information, current trends

3. Outline Generation (GPT-4)
   ↓ Structure content with sections

4. Content Writing (GPT-4)
   ↓ Generate full content with context

5. Quality Check (GPT-4)
   ↓ Review for accuracy, tone, completeness`}
          </pre>
        </div>

        <h4>Implementing Context-Aware AI Calls</h4>
        <div className="not-prose bg-black/50 border border-cyan-500/20 rounded-xl p-6 mb-12">
          <pre className="text-sm text-cyan-300 overflow-x-auto font-mono">
{`// Function node: Build context from previous AI outputs
const topic = $('Webhook').item.json.topic;
const analysis = $('TopicAnalysis').item.json;
const research = $('Research').item.json;

// Create context-rich prompt
const contextualPrompt = \`You are creating content about: \${topic}

AUDIENCE ANALYSIS:
\${JSON.stringify(analysis.targetAudience, null, 2)}

KEY THEMES:
\${analysis.themes.join(', ')}

RESEARCH INSIGHTS:
\${research.insights.map(i => \`- \${i}\`).join('\\n')}

Now write a comprehensive 1000-word article that addresses these
themes while incorporating the research insights. Use an engaging,
professional tone appropriate for the target audience.\`;

return {
  json: {
    prompt: contextualPrompt,
    metadata: {
      topic,
      analysisId: analysis.id,
      researchId: research.id,
      timestamp: new Date().toISOString()
    }
  }
};`}
          </pre>
        </div>

        <h2>Tutorial 3: Production-Ready AI Workflows</h2>
        <p>
          AI APIs can fail for various reasons: rate limits, timeouts, invalid responses, or service outages. Production workflows must handle these gracefully with proper error handling and retry logic.
        </p>

        <h3>Error Handling and Retry Logic</h3>

        <div className="not-prose space-y-6 mb-12">
          <div className="bg-zinc-800/60 rounded-xl p-6 border border-yellow-500/20">
            <h4 className="text-xl font-bold text-yellow-300 mb-4 flex items-center gap-2">
              <AlertCircle className="w-6 h-6" />
              Implementing Retry Logic
            </h4>
            <div className="bg-black/50 rounded-lg p-6 border border-yellow-500/10">
              <pre className="text-sm text-yellow-300 overflow-x-auto font-mono">
{`// Configure on HTTP Request node
{
  "retry": {
    "maxRetries": 3,
    "retryInterval": 2000
  },
  "timeout": 30000
}

// Add error handling in Function node
try {
  const response = $input.item.json;

  if (!response.choices || !response.choices[0]) {
    throw new Error('Invalid AI response format');
  }

  const content = response.choices[0].message.content;

  // Validate JSON if expected
  if (response.response_format?.type === 'json_object') {
    JSON.parse(content); // Throws if invalid
  }

  return { json: { success: true, content } };

} catch (error) {
  return {
    json: {
      success: false,
      error: error.message,
      timestamp: new Date().toISOString(),
      requiresManualReview: true
    }
  };
}`}
              </pre>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-xl p-6 border border-green-500/20">
            <h4 className="text-xl font-bold text-green-300 mb-4 flex items-center gap-2">
              <TrendingUp className="w-6 h-6" />
              Cost Optimization Strategies
            </h4>
            <ul className="space-y-3 text-gray-200">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span><strong className="text-white">Token Management:</strong> Use GPT-3.5-turbo for simple tasks, reserve GPT-4 for complex reasoning. Track token usage with a Function node after each AI call.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span><strong className="text-white">Response Caching:</strong> Cache common AI responses in Redis or N8N's database to avoid redundant API calls. Especially useful for classification or FAQ-style queries.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span><strong className="text-white">Prompt Optimization:</strong> Shorter, more specific prompts reduce token costs. Test different prompt structures to find the most efficient version that maintains quality.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span><strong className="text-white">Batch Processing:</strong> When possible, batch multiple items into a single AI request rather than making individual calls for each item.</span>
              </li>
            </ul>
          </div>
        </div>

        <h4>Token Tracking Implementation</h4>
        <div className="not-prose bg-black/50 border border-blue-500/20 rounded-xl p-6 mb-12">
          <pre className="text-sm text-blue-300 overflow-x-auto font-mono">
{`// Function node: Track and log token usage
const response = $input.item.json;
const usage = response.usage;

// Calculate cost (example rates)
const costPer1kTokens = {
  'gpt-4': { prompt: 0.03, completion: 0.06 },
  'gpt-3.5-turbo': { prompt: 0.0015, completion: 0.002 }
};

const model = response.model;
const promptCost = (usage.prompt_tokens / 1000) * costPer1kTokens[model].prompt;
const completionCost = (usage.completion_tokens / 1000) * costPer1kTokens[model].completion;
const totalCost = promptCost + completionCost;

return {
  json: {
    ...response,
    costTracking: {
      promptTokens: usage.prompt_tokens,
      completionTokens: usage.completion_tokens,
      totalTokens: usage.total_tokens,
      estimatedCost: totalCost.toFixed(4),
      model,
      timestamp: new Date().toISOString()
    }
  }
};`}
          </pre>
        </div>

        <h2>Real-World AI + N8N Use Cases</h2>
        <p>
          Here are four production-ready use cases that demonstrate the power of GPT + N8N integration, complete with workflow patterns and expected results.
        </p>

        <div className="not-prose space-y-6 mb-12">
          {[
            {
              title: "Intelligent Email Response System",
              workflow: "Monitor Gmail/Outlook inbox → GPT classifies email type → Generate contextual draft response → Human reviews → Send or schedule",
              benefit: "Reduces email response time by 70%, ensures consistent tone and messaging",
              color: "blue"
            },
            {
              title: "Content Personalization Engine",
              workflow: "User visits website → Webhook triggers → GPT analyzes user behavior/history → Generates personalized content recommendations → Updates CMS dynamically",
              benefit: "Increases engagement rates by 40%, improves conversion through personalization",
              color: "purple"
            },
            {
              title: "Data Analysis & Reporting Automation",
              workflow: "Scheduled trigger → Pull data from multiple sources → GPT analyzes trends and anomalies → Generates executive summary → Sends formatted report",
              benefit: "Saves 10+ hours per week on reporting, provides actionable insights automatically",
              color: "green"
            },
            {
              title: "Social Media Content Pipeline",
              workflow: "RSS feed monitor → GPT generates unique perspective on trending topics → Creates platform-specific content (Twitter, LinkedIn, Instagram) → Schedules posts → Monitors engagement",
              benefit: "Maintains consistent social presence, adapts content to platform best practices",
              color: "cyan"
            }
          ].map((useCase, idx) => (
            <div key={idx} className={`bg-gradient-to-r from-${useCase.color}-500/10 to-${useCase.color}-600/10 border border-${useCase.color}-500/30 rounded-xl p-6`}>
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <Star className="w-6 h-6 text-${useCase.color}-400" />
                {idx + 1}. {useCase.title}
              </h3>
              <p className="text-gray-200 mb-4">
                <strong className="text-white">Workflow:</strong> {useCase.workflow}
              </p>
              <p className="text-sm text-gray-300">
                <strong className={`text-${useCase.color}-300`}>Key Benefit:</strong> {useCase.benefit}
              </p>
            </div>
          ))}
        </div>

        <h2>Troubleshooting Common Issues</h2>
        <p>
          Here are the most common issues you'll encounter when integrating GPT with N8N, along with proven solutions from production implementations.
        </p>

        <div className="not-prose space-y-6 mb-12">
          <div className="bg-zinc-800/60 rounded-xl p-6 border border-red-500/30">
            <h3 className="text-xl font-bold text-red-300 mb-3 flex items-center gap-2">
              <AlertCircle className="w-6 h-6" />
              Issue: "Invalid JSON Response from GPT"
            </h3>
            <p className="text-gray-200 mb-2"><strong>Cause:</strong> GPT sometimes adds markdown formatting or explanatory text</p>
            <p className="text-gray-200 mb-3"><strong>Solution:</strong></p>
            <div className="bg-black/50 rounded-lg p-4 border border-red-500/20">
              <pre className="text-sm text-red-300 overflow-x-auto font-mono">
{`// Add this parsing logic
let content = response.choices[0].message.content;

// Remove markdown code blocks if present
content = content.replace(/\`\`\`json\\n?/g, '').replace(/\`\`\`\\n?/g, '');

// Extract JSON if embedded in text
const jsonMatch = content.match(/\\{[\\s\\S]*\\}/);
if (jsonMatch) {
  content = jsonMatch[0];
}

const parsed = JSON.parse(content);`}
              </pre>
            </div>
          </div>

          <div className="bg-zinc-800/60 rounded-xl p-6 border border-orange-500/30">
            <h3 className="text-xl font-bold text-orange-300 mb-3 flex items-center gap-2">
              <AlertCircle className="w-6 h-6" />
              Issue: "Rate Limit Exceeded"
            </h3>
            <p className="text-gray-200 mb-2"><strong>Cause:</strong> Too many API requests in short timeframe</p>
            <p className="text-gray-200 mb-3"><strong>Solutions:</strong></p>
            <ul className="list-disc list-inside text-gray-200 space-y-2 ml-4">
              <li>Implement exponential backoff retry strategy</li>
              <li>Add a rate limiter node before AI calls (limit to X requests per minute)</li>
              <li>Use N8N's built-in rate limiting features</li>
              <li>Consider upgrading your OpenAI tier for higher limits</li>
            </ul>
          </div>

          <div className="bg-zinc-800/60 rounded-xl p-6 border border-yellow-500/30">
            <h3 className="text-xl font-bold text-yellow-300 mb-3 flex items-center gap-2">
              <AlertCircle className="w-6 h-6" />
              Issue: "Inconsistent AI Responses"
            </h3>
            <p className="text-gray-200 mb-2"><strong>Cause:</strong> High temperature settings or vague prompts</p>
            <p className="text-gray-200 mb-3"><strong>Solutions:</strong></p>
            <ul className="list-disc list-inside text-gray-200 space-y-2 ml-4">
              <li>Lower temperature to 0.1-0.3 for consistent outputs</li>
              <li>Use structured prompts with clear formatting requirements</li>
              <li>Add example outputs in your system message</li>
              <li>Use response_format: json_object when possible</li>
            </ul>
          </div>
        </div>

        <h2>Best Practices for Production AI Workflows</h2>
        <p>
          These best practices come from managing production AI workflows serving thousands of users. Follow these guidelines to ensure your integrations are secure, performant, and maintainable.
        </p>

        <div className="not-prose grid md:grid-cols-2 gap-6 mb-12">
          {[
            {
              category: "Security",
              icon: Lock,
              color: "green",
              items: [
                "Store API keys in N8N credentials manager",
                "Use environment variables for sensitive data",
                "Implement input validation to prevent prompt injection",
                "Sanitize user inputs before sending to AI",
                "Log AI interactions for audit trails"
              ]
            },
            {
              category: "Performance",
              icon: Gauge,
              color: "blue",
              items: [
                "Cache frequent AI responses",
                "Use webhooks instead of polling when possible",
                "Implement parallel processing for independent tasks",
                "Set appropriate timeouts (30-60s for AI calls)",
                "Monitor workflow execution times"
              ]
            },
            {
              category: "Reliability",
              icon: CheckCircle,
              color: "purple",
              items: [
                "Always include error handling",
                "Implement retry logic with exponential backoff",
                "Create fallback workflows for AI failures",
                "Send alerts for critical workflow failures",
                "Test workflows with edge cases"
              ]
            },
            {
              category: "Maintainability",
              icon: Wrench,
              color: "yellow",
              items: [
                "Document your workflows with notes",
                "Use descriptive node names",
                "Version control workflow JSON exports",
                "Create reusable sub-workflows",
                "Monitor costs and set budget alerts"
              ]
            }
          ].map((section, idx) => (
            <div key={idx} className={`bg-zinc-800/60 rounded-xl p-6 border border-${section.color}-500/20`}>
              <h3 className={`text-lg font-bold text-${section.color}-300 mb-4 flex items-center gap-2`}>
                <section.icon className="w-6 h-6" />
                {section.category}
              </h3>
              <ul className="space-y-2 text-gray-200 text-sm">
                {section.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className={`w-4 h-4 text-${section.color}-400 mt-0.5 flex-shrink-0`} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <h2>Advanced Techniques</h2>

        <h3>Multi-Model AI Strategy</h3>
        <p>
          Don't rely on a single AI model. Different models excel at different tasks. Use GPT-4 for complex reasoning, GPT-3.5 for simple tasks, Claude for long-form content, and specialized models for specific domains.
        </p>

        <div className="not-prose bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-8 mb-10">
          <h4 className="text-xl font-bold text-purple-300 mb-4 flex items-center gap-2">
            <Cpu className="w-6 h-6" />
            Example: Smart Model Router
          </h4>
          <div className="bg-black/50 rounded-lg p-6 border border-purple-500/20">
            <pre className="text-sm text-purple-300 overflow-x-auto font-mono">
{`// Function node: Route to appropriate AI model
const task = $input.item.json;
const complexity = task.estimatedComplexity || 'medium';
const length = task.content?.length || 0;

let modelConfig;

if (complexity === 'high' || length > 2000) {
  modelConfig = {
    model: 'gpt-4',
    endpoint: 'openai',
    maxTokens: 4000
  };
} else if (task.type === 'classification') {
  modelConfig = {
    model: 'gpt-3.5-turbo',
    endpoint: 'openai',
    maxTokens: 500,
    temperature: 0.2
  };
} else {
  modelConfig = {
    model: 'gpt-3.5-turbo',
    endpoint: 'openai',
    maxTokens: 1500
  };
}

return { json: { ...task, modelConfig } };`}
            </pre>
          </div>
        </div>

        <h3>Key Takeaways</h3>
        <div className="not-prose bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-2xl p-8 mb-8">
          <ul className="space-y-3 text-gray-200">
            {[
              "Start with simple workflows and gradually add complexity",
              "Always implement error handling and retry logic for production",
              "Monitor costs closely - GPT-4 can get expensive at scale",
              "Use the right model for each task (don't default to GPT-4 for everything)",
              "Cache responses when possible to reduce API calls",
              "Test extensively with edge cases before deploying to production",
              "Document your workflows thoroughly for future maintenance"
            ].map((takeaway, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-lg">{takeaway}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Smart CTA - All Access Pass */}
        <SmartCTA blogSlug="ai-automation-workflows-integrate-gpt-with-n8n" />

        {/* Related Posts */}
        <RelatedPosts currentSlug="ai-automation-workflows-integrate-gpt-with-n8n" limit={3} />

      </BlogPostLayout>
    </>
  )
}
