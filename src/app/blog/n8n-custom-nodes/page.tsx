import type { Metadata } from 'next';
import SmartCTA from '@/components/SmartCTA';
import RelatedPosts from '@/components/RelatedPosts';
import { generateBlogPostSchema } from '@/lib/seo-utils';

export const metadata: Metadata = {
  title: 'N8N Custom Nodes: Build Any Integration (Developer Guide)',
  description: 'App doesn\'t have N8N integration? Build it yourself in 30 minutes. Complete TypeScript tutorial with starter template. Two development approaches: declarative vs programmatic.',
  keywords: [
    'N8N custom nodes',
    'create custom N8N nodes tutorial 2026',
    'N8N node development TypeScript',
    'N8N API integration development',
    'build N8N integrations',
    'N8N nodes starter template',
    'custom N8N workflow nodes',
    'N8N programmatic node tutorial',
    'N8N declarative node development',
    'N8N self hosted custom integrations',
    'N8N developer guide 2025',
    'extend N8N functionality'
  ],
  openGraph: {
    title: 'N8N Custom Nodes: Build Any Integration (Developer Guide)',
    description: 'Build custom N8N integrations in 30 minutes. Complete TypeScript tutorial with starter template.',
    type: 'article',
    url: 'https://iimagined.ai/blog/n8n-custom-nodes',
    images: [
      {
        url: 'https://iimagined.ai/og-n8n-custom-nodes.png',
        width: 1200,
        height: 630,
        alt: 'N8N Custom Nodes Developer Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'N8N Custom Nodes: Build Any Integration (Developer Guide)',
    description: 'Build any integration in 30 minutes. Complete N8N custom node tutorial.',
    images: ['https://iimagined.ai/og-n8n-custom-nodes.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function N8NCustomNodesBlogPost() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      {/* Blog Post Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBlogPostSchema({
              headline: 'N8N Custom Nodes: Build Any Integration You Need',
              description:
                'Complete developer guide to building custom N8N nodes. TypeScript tutorial, starter template, declarative vs programmatic approaches.',
              datePublished: '2025-01-15',
              dateModified: '2025-01-15',
              url: 'https://iimagined.ai/blog/n8n-custom-nodes',
              imageUrl: 'https://iimagined.ai/og-n8n-custom-nodes.png',
            })
          ),
        }}
      />

      {/* Header Section */}
      <header className="mb-12">
        <div className="inline-block bg-blue-500/10 text-blue-400 px-4 py-1 rounded-full text-sm font-semibold mb-4">
          N8N Development
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          N8N Custom Nodes: Build Any Integration You Need
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          App doesn&apos;t have an N8N integration? Build it yourself in 30 minutes. This developer guide covers TypeScript node development, starter templates, and both declarative and programmatic approaches.
        </p>

        {/* Stats Bar */}
        <div className="grid grid-cols-3 gap-4 mb-12">
          <div className="bg-zinc-900 rounded-xl p-4 text-center border border-zinc-800">
            <div className="text-2xl font-bold text-blue-400 mb-1">30 min</div>
            <div className="text-sm text-gray-400">Setup to Deploy</div>
          </div>
          <div className="bg-zinc-900 rounded-xl p-4 text-center border border-zinc-800">
            <div className="text-2xl font-bold text-green-400 mb-1">2</div>
            <div className="text-sm text-gray-400">Development Styles</div>
          </div>
          <div className="bg-zinc-900 rounded-xl p-4 text-center border border-zinc-800">
            <div className="text-2xl font-bold text-purple-400 mb-1">1,145+</div>
            <div className="text-sm text-gray-400">Built-in Integrations</div>
          </div>
        </div>

        <div className="text-sm text-gray-400">
          <span className="font-semibold text-white">Last Updated:</span> January 2025 |{' '}
          <span className="font-semibold text-white">Reading Time:</span> 12 minutes
        </div>
      </header>

      {/* Main Content */}
      <div className="prose prose-invert prose-lg max-w-none">
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-white">Why Build Custom N8N Nodes?</h2>

          <p className="mb-6 text-gray-300 leading-relaxed">
            N8N has 1,145+ built-in integrations. But your internal CRM doesn&apos;t have a native node. Your proprietary billing system isn&apos;t supported. Your custom analytics API requires manual HTTP requests every time.
          </p>

          <p className="mb-6 text-gray-300 leading-relaxed">
            Solution: <strong className="text-white">Build a custom node</strong>. Once created, it appears in N8N&apos;s node panel alongside official integrations. Reusable. Shareable. Native-like.
          </p>

          <p className="mb-6 text-gray-300 leading-relaxed">
            Time investment: <strong className="text-white">30 minutes for a basic API integration</strong>. 2-4 hours for complex nodes with multiple operations and credential management.
          </p>

          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 my-8">
            <h3 className="text-xl font-bold mb-4 text-blue-400">What Custom Nodes Enable</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-green-400 mr-2 mt-1">✓</span>
                <span><strong className="text-white">Connect to Any API:</strong> Wrap any REST API, GraphQL endpoint, or internal service</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2 mt-1">✓</span>
                <span><strong className="text-white">Custom Logic:</strong> Implement complex data transformations or business rules</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2 mt-1">✓</span>
                <span><strong className="text-white">Reusable Components:</strong> Build once, use across all workflows</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2 mt-1">✓</span>
                <span><strong className="text-white">Team Sharing:</strong> Package and share with your entire organization</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2 mt-1">✓</span>
                <span><strong className="text-white">Version Control:</strong> Track changes, collaborate via Git</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2 mt-1">✓</span>
                <span><strong className="text-white">Performance Optimization:</strong> Handle intensive tasks more efficiently than function nodes</span>
              </li>
            </ul>
            <p className="mt-4 text-sm text-gray-400 italic">
              Note: Custom nodes only work on self-hosted N8N instances for security reasons
            </p>
          </div>

          <p className="mb-6 text-gray-300 leading-relaxed">
            <strong className="text-white">Use cases:</strong> Internal APIs, proprietary databases, legacy systems, niche SaaS tools without official integrations, custom authentication flows, specialized data processing.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-white">Development Approaches: Declarative vs Programmatic</h2>

          <p className="mb-6 text-gray-300 leading-relaxed">
            N8N offers two node-building styles. Choose based on your use case complexity.
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 text-blue-400">Declarative (Recommended)</h3>
              <p className="text-gray-300 mb-4">
                Low-code approach using configuration objects. <strong className="text-white">Best for standard REST API integrations.</strong>
              </p>
              <p className="text-white font-semibold mb-2">Best For:</p>
              <ul className="space-y-2 text-gray-300 mb-4">
                <li>• Simple API integrations</li>
                <li>• CRUD operations</li>
                <li>• Standard authentication (OAuth, API key)</li>
                <li>• Straightforward data transformations</li>
                <li>• RESTful endpoints</li>
              </ul>
              <p className="text-white font-semibold mb-2">Advantages:</p>
              <ul className="space-y-2 text-gray-300">
                <li>• Faster development</li>
                <li>• Less code to maintain</li>
                <li>• Automatic UI generation</li>
                <li>• Easier to read and understand</li>
              </ul>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 text-purple-400">Programmatic</h3>
              <p className="text-gray-300 mb-4">
                Full TypeScript control. <strong className="text-white">Best for complex logic and custom workflows.</strong>
              </p>
              <p className="text-white font-semibold mb-2">Best For:</p>
              <ul className="space-y-2 text-gray-300 mb-4">
                <li>• Complex business logic</li>
                <li>• Advanced error handling</li>
                <li>• Custom authentication flows</li>
                <li>• Multiple API endpoints</li>
                <li>• Performance-critical operations</li>
              </ul>
              <p className="text-white font-semibold mb-2">Advantages:</p>
              <ul className="space-y-2 text-gray-300">
                <li>• Complete flexibility</li>
                <li>• Advanced error handling</li>
                <li>• Complex data processing</li>
                <li>• Custom UI components</li>
              </ul>
            </div>
          </div>

          <p className="mb-6 text-gray-300 leading-relaxed">
            <strong className="text-white">For most use cases, start with declarative.</strong> You can always convert to programmatic later if you need more control.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-white">Prerequisites & Setup</h2>

          <h3 className="text-2xl font-bold mb-4 text-white">Required Tools</h3>

          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 my-8">
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2 mt-1">•</span>
                <span><strong className="text-white">Node.js:</strong> v16 or higher (v22+ recommended)</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2 mt-1">•</span>
                <span><strong className="text-white">npm:</strong> Latest version</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2 mt-1">•</span>
                <span><strong className="text-white">Git:</strong> For version control</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2 mt-1">•</span>
                <span><strong className="text-white">TypeScript Knowledge:</strong> Basic understanding required</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2 mt-1">•</span>
                <span><strong className="text-white">Self-Hosted N8N:</strong> Custom nodes don&apos;t work on N8N Cloud</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2 mt-1">•</span>
                <span><strong className="text-white">Code Editor:</strong> VS Code recommended (with TypeScript support)</span>
              </li>
            </ul>
          </div>

          <h3 className="text-2xl font-bold mb-4 text-white">Verify Installation</h3>

          <div className="bg-black border border-zinc-700 rounded-xl p-6 my-8">
            <pre className="text-sm text-gray-300 overflow-x-auto">
              <code>{`# Check Node.js version
node --version
# Should show v16+ (v22+ recommended)

# Check npm version
npm --version

# Verify Git
git --version`}</code>
            </pre>
          </div>
        </section>

        {/* Inline CTA */}
        <div className="my-12">
          <SmartCTA blogSlug="n8n-custom-nodes" variant="inline" />
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-white">Quick Start: Build Your First Custom Node (Method 1)</h2>

          <p className="mb-6 text-gray-300 leading-relaxed">
            The fastest way to get started is with <strong className="text-white">npm create @n8n/node</strong>, which scaffolds a complete node package.
          </p>

          <h3 className="text-2xl font-bold mb-4 text-white">Step 1: Scaffold New Node Package</h3>

          <div className="bg-black border border-zinc-700 rounded-xl p-6 my-8">
            <pre className="text-sm text-gray-300 overflow-x-auto">
              <code>{`# Create new node package
npm create @n8n/node

# Follow the prompts:
# - Package name: n8n-nodes-custom-crm
# - Node name: CustomCRM
# - Description: Integration for our internal CRM
# - Author: Your name

# Navigate to new directory
cd n8n-nodes-custom-crm

# Install dependencies
npm install`}</code>
            </pre>
          </div>

          <p className="mb-6 text-gray-300 leading-relaxed">
            This creates a complete project structure with TypeScript configured, example nodes, credentials, linter, and all necessary tooling.
          </p>

          <h3 className="text-2xl font-bold mb-4 text-white">Step 2: Project Structure Overview</h3>

          <div className="bg-black border border-zinc-700 rounded-xl p-6 my-8">
            <pre className="text-sm text-gray-300 overflow-x-auto">
              <code>{`n8n-nodes-custom-crm/
├── credentials/           # Credential definitions
│   └── CustomCrmApi.credentials.ts
├── nodes/                 # Node definitions
│   └── CustomCrm/
│       ├── CustomCrm.node.ts
│       └── CustomCrm.node.json
├── package.json
├── tsconfig.json
└── README.md`}</code>
            </pre>
          </div>

          <h3 className="text-2xl font-bold mb-4 text-white">Step 3: Create Credential Definition</h3>

          <p className="mb-6 text-gray-300 leading-relaxed">
            Most APIs require authentication. Define credentials first.
          </p>

          <div className="bg-black border border-zinc-700 rounded-xl p-6 my-8">
            <pre className="text-sm text-gray-300 overflow-x-auto">
              <code>{`// credentials/CustomCrmApi.credentials.ts

import {
  ICredentialType,
  INodeProperties,
} from 'n8n-workflow';

export class CustomCrmApi implements ICredentialType {
  name = 'customCrmApi';
  displayName = 'Custom CRM API';
  documentationUrl = 'https://docs.yourcrm.com/api';

  properties: INodeProperties[] = [
    {
      displayName: 'API Key',
      name: 'apiKey',
      type: 'string',
      typeOptions: {
        password: true,
      },
      default: '',
      required: true,
    },
    {
      displayName: 'Base URL',
      name: 'baseUrl',
      type: 'string',
      default: 'https://api.yourcrm.com/v1',
      required: true,
    },
  ];
}`}</code>
            </pre>
          </div>

          <h3 className="text-2xl font-bold mb-4 text-white">Step 4: Create Node Definition (Declarative Style)</h3>

          <div className="bg-black border border-zinc-700 rounded-xl p-6 my-8">
            <pre className="text-sm text-gray-300 overflow-x-auto">
              <code>{`// nodes/CustomCrm/CustomCrm.node.ts

import {
  INodeType,
  INodeTypeDescription,
  IExecuteFunctions,
  INodeExecutionData,
} from 'n8n-workflow';

export class CustomCrm implements INodeType {
  description: INodeTypeDescription = {
    displayName: 'Custom CRM',
    name: 'customCrm',
    icon: 'file:customcrm.svg',
    group: ['transform'],
    version: 1,
    description: 'Interact with Custom CRM API',
    defaults: {
      name: 'Custom CRM',
    },
    inputs: ['main'],
    outputs: ['main'],
    credentials: [
      {
        name: 'customCrmApi',
        required: true,
      },
    ],
    properties: [
      {
        displayName: 'Resource',
        name: 'resource',
        type: 'options',
        options: [
          {
            name: 'Contact',
            value: 'contact',
          },
          {
            name: 'Company',
            value: 'company',
          },
        ],
        default: 'contact',
      },
      {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        displayOptions: {
          show: {
            resource: ['contact'],
          },
        },
        options: [
          {
            name: 'Create',
            value: 'create',
            description: 'Create a contact',
          },
          {
            name: 'Get',
            value: 'get',
            description: 'Get a contact',
          },
          {
            name: 'Update',
            value: 'update',
            description: 'Update a contact',
          },
        ],
        default: 'create',
      },
      // Contact Create Fields
      {
        displayName: 'Email',
        name: 'email',
        type: 'string',
        displayOptions: {
          show: {
            resource: ['contact'],
            operation: ['create'],
          },
        },
        default: '',
        required: true,
        description: 'Contact email address',
      },
      {
        displayName: 'First Name',
        name: 'firstName',
        type: 'string',
        displayOptions: {
          show: {
            resource: ['contact'],
            operation: ['create'],
          },
        },
        default: '',
      },
    ],
  };

  async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
    const items = this.getInputData();
    const returnData: INodeExecutionData[] = [];

    const credentials = await this.getCredentials('customCrmApi');
    const baseUrl = credentials.baseUrl as string;
    const apiKey = credentials.apiKey as string;

    for (let i = 0; i < items.length; i++) {
      const resource = this.getNodeParameter('resource', i) as string;
      const operation = this.getNodeParameter('operation', i) as string;

      if (resource === 'contact') {
        if (operation === 'create') {
          const email = this.getNodeParameter('email', i) as string;
          const firstName = this.getNodeParameter('firstName', i) as string;

          const response = await this.helpers.request({
            method: 'POST',
            url: \`\${baseUrl}/contacts\`,
            headers: {
              'Authorization': \`Bearer \${apiKey}\`,
              'Content-Type': 'application/json',
            },
            body: {
              email,
              first_name: firstName,
            },
            json: true,
          });

          returnData.push({ json: response });
        }
      }
    }

    return [returnData];
  }
}`}</code>
            </pre>
          </div>

          <h3 className="text-2xl font-bold mb-4 text-white">Step 5: Link Node to N8N (Development)</h3>

          <div className="bg-black border border-zinc-700 rounded-xl p-6 my-8">
            <pre className="text-sm text-gray-300 overflow-x-auto">
              <code>{`# Build the node package
npm run build

# Link to global npm
npm link

# In your N8N installation directory, link the node
cd ~/.n8n
npm link n8n-nodes-custom-crm

# Restart N8N with hot reload
n8n start`}</code>
            </pre>
          </div>

          <p className="mb-6 text-gray-300 leading-relaxed">
            Your custom node now appears in N8N&apos;s node panel. Add it to workflows like any native integration.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-white">Alternative: Using the Starter Template (Method 2)</h2>

          <p className="mb-6 text-gray-300 leading-relaxed">
            For more control and examples, use the official <strong className="text-white">n8n-nodes-starter</strong> repository.
          </p>

          <h3 className="text-2xl font-bold mb-4 text-white">Clone the Starter Template</h3>

          <div className="bg-black border border-zinc-700 rounded-xl p-6 my-8">
            <pre className="text-sm text-gray-300 overflow-x-auto">
              <code>{`# Option 1: Use GitHub template feature
# Visit: https://github.com/n8n-io/n8n-nodes-starter
# Click "Use this template" → "Create a new repository"

# Option 2: Clone directly
git clone https://github.com/n8n-io/n8n-nodes-starter.git
cd n8n-nodes-starter

# Install dependencies
npm install`}</code>
            </pre>
          </div>

          <p className="mb-6 text-gray-300 leading-relaxed">
            The starter template includes example nodes demonstrating both declarative and programmatic styles, credential examples, and complete tooling setup.
          </p>

          <h3 className="text-2xl font-bold mb-4 text-white">Explore Example Nodes</h3>

          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 my-8">
            <p className="text-white font-semibold mb-3">Included Examples:</p>
            <ul className="space-y-2 text-gray-300">
              <li>• <strong className="text-white">ExampleNode.node.ts:</strong> Basic node structure</li>
              <li>• <strong className="text-white">GitHubIssues.node.ts:</strong> Declarative style API integration</li>
              <li>• <strong className="text-white">SendGrid.node.ts:</strong> Programmatic style with multiple operations</li>
              <li>• <strong className="text-white">Credentials examples:</strong> API key, OAuth2, JWT patterns</li>
            </ul>
          </div>

          <p className="mb-6 text-gray-300 leading-relaxed">
            Copy an example node that matches your use case, rename it, and modify for your API.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-white">Testing & Debugging</h2>

          <h3 className="text-2xl font-bold mb-4 text-white">Local Development Workflow</h3>

          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 my-8">
            <ol className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <span className="text-blue-400 font-bold mr-3">1.</span>
                <div>
                  <strong className="text-white">Build with Watch Mode:</strong>
                  <div className="bg-black border border-zinc-700 rounded-lg p-3 mt-2">
                    <code className="text-sm">npm run dev</code>
                  </div>
                  <p className="mt-2">Automatically rebuilds when you save changes</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 font-bold mr-3">2.</span>
                <div>
                  <strong className="text-white">Link to N8N:</strong>
                  <div className="bg-black border border-zinc-700 rounded-lg p-3 mt-2">
                    <code className="text-sm">npm link && cd ~/.n8n && npm link n8n-nodes-custom-crm</code>
                  </div>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 font-bold mr-3">3.</span>
                <div>
                  <strong className="text-white">Start N8N with Hot Reload:</strong>
                  <div className="bg-black border border-zinc-700 rounded-lg p-3 mt-2">
                    <code className="text-sm">n8n start</code>
                  </div>
                  <p className="mt-2">Node changes appear after page refresh</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 font-bold mr-3">4.</span>
                <div>
                  <strong className="text-white">Test in Workflow:</strong>
                  <p className="mt-2">Create test workflow, add your node, execute, check output</p>
                </div>
              </li>
            </ol>
          </div>

          <h3 className="text-2xl font-bold mb-4 text-white">Debugging Tips</h3>

          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 my-8">
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-purple-400 mr-2 mt-1">•</span>
                <div>
                  <strong className="text-white">Console Logging:</strong>
                  <div className="bg-black border border-zinc-700 rounded-lg p-3 mt-2">
                    <code className="text-sm">console.log(&apos;Debug:&apos;, this.getInputData());</code>
                  </div>
                  <p className="mt-2">Logs appear in N8N terminal output</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2 mt-1">•</span>
                <div>
                  <strong className="text-white">Error Messages:</strong>
                  <p className="mt-2">N8N displays execution errors in workflow UI. Check terminal for stack traces.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2 mt-1">•</span>
                <div>
                  <strong className="text-white">TypeScript Errors:</strong>
                  <div className="bg-black border border-zinc-700 rounded-lg p-3 mt-2">
                    <code className="text-sm">npm run lint</code>
                  </div>
                  <p className="mt-2">Catches type errors before runtime</p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-white">Best Practices for Production Nodes</h2>

          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 my-8">
            <h3 className="text-xl font-bold mb-4 text-green-400">Security & Credentials</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-green-400 mr-2 mt-1">✓</span>
                <span><strong className="text-white">Never Hardcode Secrets:</strong> Always use credential definitions for API keys, tokens</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2 mt-1">✓</span>
                <span><strong className="text-white">Use Password Type:</strong> Set <code className="bg-zinc-800 px-2 py-1 rounded">typeOptions: password: true</code> for sensitive fields</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2 mt-1">✓</span>
                <span><strong className="text-white">Environment Variables:</strong> Store development credentials in .env files (never commit)</span>
              </li>
            </ul>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 my-8">
            <h3 className="text-xl font-bold mb-4 text-blue-400">Error Handling</h3>
            <div className="bg-black border border-zinc-700 rounded-lg p-3 mt-4">
              <pre className="text-sm text-gray-300 overflow-x-auto">
                <code>{`try {
  const response = await this.helpers.request({
    method: 'POST',
    url: \`\${baseUrl}/contacts\`,
    body: { email, firstName },
    json: true,
  });
  returnData.push({ json: response });
} catch (error) {
  if (this.continueOnFail()) {
    returnData.push({
      json: { error: error.message },
      error: error
    });
  } else {
    throw new Error(\`CRM API Error: \${error.message}\`);
  }
}`}</code>
              </pre>
            </div>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 my-8">
            <h3 className="text-xl font-bold mb-4 text-orange-400">Performance Optimization</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-orange-400 mr-2 mt-1">•</span>
                <span><strong className="text-white">Batch Operations:</strong> Process multiple items in single API call when possible</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-400 mr-2 mt-1">•</span>
                <span><strong className="text-white">Rate Limiting:</strong> Implement delays for API rate limits</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-400 mr-2 mt-1">•</span>
                <span><strong className="text-white">Pagination:</strong> Handle large result sets with pagination support</span>
              </li>
            </ul>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 my-8">
            <h3 className="text-xl font-bold mb-4 text-purple-400">Code Quality</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-purple-400 mr-2 mt-1">•</span>
                <span><strong className="text-white">TypeScript Types:</strong> Use proper type definitions for all parameters</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2 mt-1">•</span>
                <span><strong className="text-white">Documentation:</strong> Add clear descriptions to all node parameters</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2 mt-1">•</span>
                <span><strong className="text-white">Validation:</strong> Validate required fields before API calls</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2 mt-1">•</span>
                <span><strong className="text-white">Linting:</strong> Run <code className="bg-zinc-800 px-2 py-1 rounded">npm run lint</code> before publishing</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-white">Publishing & Distribution</h2>

          <h3 className="text-2xl font-bold mb-4 text-white">Option 1: Organization-Wide Distribution</h3>

          <p className="mb-6 text-gray-300 leading-relaxed">
            For internal company use, publish to your organization&apos;s private npm registry or distribute via Git.
          </p>

          <div className="bg-black border border-zinc-700 rounded-xl p-6 my-8">
            <pre className="text-sm text-gray-300 overflow-x-auto">
              <code>{`# Build production version
npm run build

# Publish to private npm registry
npm publish --registry=https://npm.yourcompany.com

# Or distribute via Git
git tag v1.0.0
git push origin v1.0.0

# Install on other N8N instances
npm install @yourcompany/n8n-nodes-custom-crm`}</code>
            </pre>
          </div>

          <h3 className="text-2xl font-bold mb-4 text-white">Option 2: Public npm Package</h3>

          <p className="mb-6 text-gray-300 leading-relaxed">
            Share with the N8N community by publishing to public npm.
          </p>

          <div className="bg-black border border-zinc-700 rounded-xl p-6 my-8">
            <pre className="text-sm text-gray-300 overflow-x-auto">
              <code>{`# Update package.json with community node keywords
{
  "name": "n8n-nodes-custom-integration",
  "version": "1.0.0",
  "description": "N8N integration for CustomService",
  "keywords": [
    "n8n-community-node-package",
    "n8n-node"
  ],
  "n8n": {
    "nodes": [
      "dist/nodes/CustomIntegration/CustomIntegration.node.js"
    ],
    "credentials": [
      "dist/credentials/CustomIntegrationApi.credentials.js"
    ]
  }
}

# Publish to npm
npm login
npm publish

# Users install with:
# npm install n8n-nodes-custom-integration`}</code>
            </pre>
          </div>

          <h3 className="text-2xl font-bold mb-4 text-white">Installing Custom Nodes on Self-Hosted N8N</h3>

          <div className="bg-black border border-zinc-700 rounded-xl p-6 my-8">
            <pre className="text-sm text-gray-300 overflow-x-auto">
              <code>{`# Via npm (recommended)
cd ~/.n8n
npm install n8n-nodes-custom-crm

# Via environment variable (Docker)
# In docker-compose.yml:
environment:
  - N8N_CUSTOM_EXTENSIONS=/data/custom-nodes

# Then mount volume with custom nodes
volumes:
  - ./custom-nodes:/data/custom-nodes

# Restart N8N
docker-compose restart n8n`}</code>
            </pre>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-white">Real-World Examples</h2>

          <div className="space-y-6">
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 text-blue-400">Example 1: Internal CRM Integration</h3>
              <div className="space-y-3 text-gray-300">
                <p><strong className="text-white">Company:</strong> B2B SaaS (150 employees)</p>
                <p><strong className="text-white">Challenge:</strong> Proprietary CRM system with no automation integrations</p>
                <p><strong className="text-white">Solution:</strong> Custom N8N node with 12 operations (create/update contacts, companies, deals, notes)</p>
                <p><strong className="text-white">Development Time:</strong> 6 hours total (2 hours initial, 4 hours refinement)</p>
                <p><strong className="text-white">Result:</strong> 47 workflows now use the custom node, saving 15 hours weekly previously spent on manual data entry</p>
              </div>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 text-green-400">Example 2: Analytics Data Pipeline</h3>
              <div className="space-y-3 text-gray-300">
                <p><strong className="text-white">Company:</strong> E-commerce marketplace</p>
                <p><strong className="text-white">Challenge:</strong> Custom analytics platform API needed batch data exports</p>
                <p><strong className="text-white">Solution:</strong> Programmatic N8N node with pagination, rate limiting, and parallel processing</p>
                <p><strong className="text-white">Development Time:</strong> 12 hours (complex error handling and optimization)</p>
                <p><strong className="text-white">Result:</strong> Processes 500,000 records nightly, replaces $800/month third-party ETL tool</p>
              </div>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 text-purple-400">Example 3: Payment Gateway Reconciliation</h3>
              <div className="space-y-3 text-gray-300">
                <p><strong className="text-white">Company:</strong> Fintech startup</p>
                <p><strong className="text-white">Challenge:</strong> Regional payment provider with no N8N integration</p>
                <p><strong className="text-white">Solution:</strong> Custom node with OAuth2 authentication, webhook support, transaction queries</p>
                <p><strong className="text-white">Development Time:</strong> 8 hours (OAuth2 setup was most complex)</p>
                <p><strong className="text-white">Result:</strong> Automated daily reconciliation, reduced accounting time from 4 hours to 15 minutes</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-white">Common Challenges & Solutions</h2>

          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 my-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold mb-2 text-red-400">Challenge: Node Not Appearing in N8N</h3>
                <p className="text-gray-300 mb-2"><strong className="text-white">Solution:</strong></p>
                <ul className="space-y-1 text-gray-300 ml-4">
                  <li>• Run <code className="bg-zinc-800 px-2 py-1 rounded">npm run build</code> to compile TypeScript</li>
                  <li>• Verify <code className="bg-zinc-800 px-2 py-1 rounded">npm link</code> completed successfully</li>
                  <li>• Restart N8N completely (Ctrl+C and restart)</li>
                  <li>• Check package.json has correct n8n.nodes path</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-2 text-red-400">Challenge: API Returns 401 Unauthorized</h3>
                <p className="text-gray-300 mb-2"><strong className="text-white">Solution:</strong></p>
                <ul className="space-y-1 text-gray-300 ml-4">
                  <li>• Verify credential definition name matches node credential reference</li>
                  <li>• Check API key format (some require &quot;Bearer&quot; prefix, others don&apos;t)</li>
                  <li>• Test credentials with curl/Postman first to verify they work</li>
                  <li>• Console.log credentials (temporarily) to ensure they&apos;re being passed</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-2 text-red-400">Challenge: TypeScript Type Errors</h3>
                <p className="text-gray-300 mb-2"><strong className="text-white">Solution:</strong></p>
                <ul className="space-y-1 text-gray-300 ml-4">
                  <li>• Ensure <code className="bg-zinc-800 px-2 py-1 rounded">npm install</code> ran successfully to get type definitions</li>
                  <li>• Import correct types from <code className="bg-zinc-800 px-2 py-1 rounded">n8n-workflow</code></li>
                  <li>• Use <code className="bg-zinc-800 px-2 py-1 rounded">as string</code> type assertions when needed</li>
                  <li>• Run <code className="bg-zinc-800 px-2 py-1 rounded">npm run lint</code> to catch errors early</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-2 text-red-400">Challenge: Response Data Not Showing in Workflow</h3>
                <p className="text-gray-300 mb-2"><strong className="text-white">Solution:</strong></p>
                <ul className="space-y-1 text-gray-300 ml-4">
                  <li>• Ensure you&apos;re pushing to returnData array: <code className="bg-zinc-800 px-2 py-1 rounded">returnData.push(json: response)</code></li>
                  <li>• Return array of arrays: <code className="bg-zinc-800 px-2 py-1 rounded">return [returnData]</code></li>
                  <li>• Verify API response is actually returning data (console.log it)</li>
                  <li>• Check if response needs to be parsed (if not using <code className="bg-zinc-800 px-2 py-1 rounded">json: true</code>)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-white">Next Steps: Advanced Custom Node Development</h2>

          <p className="mb-6 text-gray-300 leading-relaxed">
            Once you&apos;ve built basic custom nodes, explore these advanced capabilities:
          </p>

          <div className="space-y-4 text-gray-300">
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <h3 className="text-lg font-bold mb-2 text-blue-400">1. Webhook Support</h3>
              <p>Create nodes that listen for incoming webhooks, enabling real-time triggers for your custom integrations.</p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <h3 className="text-lg font-bold mb-2 text-green-400">2. OAuth2 Authentication</h3>
              <p>Implement OAuth2 flows for services requiring user authorization, providing secure access to external APIs.</p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <h3 className="text-lg font-bold mb-2 text-purple-400">3. Custom UI Components</h3>
              <p>Build specialized input fields, dropdown options with dynamic loading, and custom validation logic.</p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <h3 className="text-lg font-bold mb-2 text-orange-400">4. Binary Data Handling</h3>
              <p>Process files, images, and documents within your custom nodes for complete workflow automation.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-white">The Bottom Line</h2>

          <p className="mb-6 text-gray-300 leading-relaxed">
            N8N&apos;s 1,145+ integrations cover most use cases. But when you need a <strong className="text-white">custom integration for your internal systems, legacy APIs, or niche tools</strong>, custom nodes are the solution.
          </p>

          <p className="mb-6 text-gray-300 leading-relaxed">
            Development time: <strong className="text-white">30 minutes for basic API wrappers</strong>. 2-4 hours for complex nodes with multiple operations. 8-12 hours for advanced OAuth2 implementations.
          </p>

          <p className="mb-6 text-gray-300 leading-relaxed">
            The ROI is immediate: <strong className="text-white">Workflows that previously required manual HTTP requests or Function nodes become reusable, maintainable integrations</strong> that your entire team can use.
          </p>

          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-6 my-8">
            <h3 className="text-xl font-bold mb-3 text-white">When to Build Custom Nodes:</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• <strong className="text-white">Internal APIs:</strong> Your company&apos;s proprietary systems</li>
              <li>• <strong className="text-white">Legacy Systems:</strong> Old databases or applications without modern APIs</li>
              <li>• <strong className="text-white">Niche SaaS Tools:</strong> Services without official N8N integrations</li>
              <li>• <strong className="text-white">Reusability:</strong> Same API calls used across 3+ workflows</li>
              <li>• <strong className="text-white">Team Distribution:</strong> Need to share integrations across organization</li>
              <li>• <strong className="text-white">Performance:</strong> Function nodes too slow for intensive operations</li>
            </ul>
          </div>

          <p className="mb-6 text-gray-300 leading-relaxed">
            Start simple with the declarative approach. Build one node. Test it. Deploy it. Then expand from there.
          </p>

          <p className="mb-6 text-gray-300 leading-relaxed">
            <strong className="text-white">Your internal tools become first-class N8N citizens.</strong> That&apos;s powerful.
          </p>
        </section>
      </div>

      {/* Bottom CTA */}
      <div className="my-16">
        <SmartCTA blogSlug="n8n-custom-nodes" />
      </div>

      {/* Related Posts */}
      <div className="mt-16">
        <RelatedPosts currentSlug="n8n-custom-nodes" limit={3} />
      </div>
    </article>
  );
}
