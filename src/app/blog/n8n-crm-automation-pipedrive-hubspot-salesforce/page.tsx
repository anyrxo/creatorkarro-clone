import React from 'react'
import Link from 'next/link'
import { generateBlogPostSchema } from '@/lib/blog-schema'

export const metadata = {
  title: "N8N CRM Automation 2026: Pipedrive, HubSpot, Salesforce Integration - Save 15 Hours/Week",
  description: "Master CRM automation with N8N. Lead capture, automated scoring, email sequences, deal pipeline automation. Complete workflows for Pipedrive, HubSpot, Salesforce. Sales team case study.",
  keywords: [
    "n8n crm automation", "pipedrive n8n integration", "hubspot n8n workflow",
    "salesforce n8n automation", "crm lead automation", "sales pipeline automation",
    "n8n deal automation", "automated lead scoring", "crm email automation",
    "n8n crm workflows", "sales automation n8n", "crm integration n8n"
  ],
  authors: [{ name: "Anyro", url: "https://iimagined.ai" }],
  creator: "IImagined.ai",
  publisher: "IImagined.ai",
  category: "Technology",
  openGraph: {
    title: "N8N CRM Automation 2026: Pipedrive, HubSpot, Salesforce",
    description: "Complete CRM automation with N8N - lead capture, scoring, pipeline automation, email sequences. Save 15+ hours per week.",
    url: "https://iimagined.ai/blog/n8n-crm-automation-pipedrive-hubspot-salesforce",
    siteName: "IImagined.ai",
    type: "article",
    publishedTime: "2025-01-15T12:00:00.000Z",
    modifiedTime: new Date().toISOString(),
    authors: ["Anyro"],
    tags: ["n8n", "crm automation", "pipedrive", "hubspot", "salesforce", "sales automation"],
    images: [{
      url: "https://iimagined.ai/images/n8n-crm-automation-og.jpg",
      width: 1200,
      height: 630,
      alt: "N8N CRM Automation Complete Guide",
      type: "image/jpeg"
    }],
    locale: "en_US"
  },
  twitter: {
    card: "summary_large_image",
    site: "@iimagined_ai",
    creator: "@iimagined_ai",
    title: "N8N CRM Automation - Pipedrive, HubSpot, Salesforce",
    description: "Complete CRM automation with N8N - lead capture, scoring, pipeline automation",
    images: [{
      url: "https://iimagined.ai/images/n8n-crm-automation-og.jpg",
      alt: "N8N CRM Automation"
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
    canonical: "https://iimagined.ai/blog/n8n-crm-automation-pipedrive-hubspot-salesforce"
  }
}

export default function N8nCRMAutomation() {
  const schema = generateBlogPostSchema({
    title: metadata.title,
    description: metadata.description,
    slug: "n8n-crm-automation-pipedrive-hubspot-salesforce",
    publishedTime: metadata.openGraph.publishedTime,
    modifiedTime: metadata.openGraph.modifiedTime,
    category: metadata.category,
    keywords: metadata.keywords,
    image: metadata.openGraph.images[0].url
  })

  return (
    <div className="min-h-screen bg-dark">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero Section */}
      <section className="section-spacing overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
              <span className="text-blue-400 text-sm font-semibold">CRM AUTOMATION MASTERY</span>
            </div>

            <h1 className="text-3xl md:text-6xl font-bold mb-6 leading-tight">
              N8N CRM Automation: <span className="text-blue-400">Pipedrive, HubSpot & Salesforce</span> Integration
            </h1>

            <p className="text-lg md:text-xl text-gray-400 mb-8">
              Automate your entire sales pipeline with N8N. <span className="text-white font-semibold">Save 15+ hours/week</span> with lead capture, automated scoring, email sequences, and deal pipeline automation.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-zinc-900 rounded-xl p-4">
                <div className="text-2xl font-bold text-blue-400">15+</div>
                <div className="text-sm text-gray-400">Hours Saved/Week</div>
              </div>
              <div className="bg-zinc-900 rounded-xl p-4">
                <div className="text-2xl font-bold text-green-400">45%</div>
                <div className="text-sm text-gray-400">More Leads Captured</div>
              </div>
              <div className="bg-zinc-900 rounded-xl p-4">
                <div className="text-2xl font-bold text-purple-400">3x</div>
                <div className="text-sm text-gray-400">Faster Follow-ups</div>
              </div>
              <div className="bg-zinc-900 rounded-xl p-4">
                <div className="text-2xl font-bold text-orange-400">28%</div>
                <div className="text-sm text-gray-400">Higher Close Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-16 px-4 border-y border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-r from-blue-500/10 to-green-500/10 border border-blue-500/30 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Real Case Study: B2B SaaS Sales Team</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-red-400 mb-3">Before N8N CRM Automation:</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Manual lead entry from 5+ sources</li>
                    <li>• 20 hours/week on data entry</li>
                    <li>• Inconsistent follow-up timing</li>
                    <li>• Leads slipping through cracks</li>
                    <li>• No lead scoring system</li>
                    <li>• Manual email sequences</li>
                    <li>• Average 48-hour response time</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-green-400 mb-3">After N8N CRM Automation:</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Auto-capture from all 5 sources</li>
                    <li>• Only 5 hours/week on management</li>
                    <li>• Instant automated follow-ups</li>
                    <li>• 45% more leads captured</li>
                    <li>• AI-powered lead scoring</li>
                    <li>• Fully automated email sequences</li>
                    <li>• Average &lt;5 minute response time</li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 p-4 bg-zinc-900 rounded-lg text-center">
                <p className="text-xl font-bold text-white">
                  Result: <span className="text-green-400">15 hours/week saved</span> + <span className="text-blue-400">28% higher close rate</span> + <span className="text-purple-400">$45K additional monthly revenue</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CRM Platform Comparison */}
      <section className="section-spacing">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-3xl font-bold text-white mb-8">📊 CRM Platform Comparison: N8N Integration</h2>

          <div className="bg-zinc-800 rounded-xl p-6 overflow-x-auto">
            <table className="w-full text-sm text-gray-300">
              <thead className="bg-zinc-900">
                <tr>
                  <th className="p-3 text-left text-blue-400">Feature</th>
                  <th className="p-3 text-left text-blue-400">Pipedrive</th>
                  <th className="p-3 text-left text-blue-400">HubSpot</th>
                  <th className="p-3 text-left text-blue-400">Salesforce</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-700">
                <tr>
                  <td className="p-3 font-semibold">N8N Native Node</td>
                  <td className="p-3 text-green-400">✓ Yes</td>
                  <td className="p-3 text-green-400">✓ Yes</td>
                  <td className="p-3 text-green-400">✓ Yes</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Setup Difficulty</td>
                  <td className="p-3 text-green-400">Easy</td>
                  <td className="p-3 text-yellow-400">Medium</td>
                  <td className="p-3 text-orange-400">Hard</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">API Rate Limits</td>
                  <td className="p-3">1,000/day (free)<br/>100,000/day (paid)</td>
                  <td className="p-3">10,000/day (free)<br/>500,000/day (pro)</td>
                  <td className="p-3">5,000/day (varies)</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Webhook Support</td>
                  <td className="p-3 text-green-400">Excellent</td>
                  <td className="p-3 text-green-400">Excellent</td>
                  <td className="p-3 text-yellow-400">Good</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Custom Fields</td>
                  <td className="p-3 text-green-400">Unlimited</td>
                  <td className="p-3 text-green-400">Unlimited</td>
                  <td className="p-3 text-green-400">Unlimited</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Best For</td>
                  <td className="p-3">SMBs, Sales teams</td>
                  <td className="p-3">Marketing + Sales</td>
                  <td className="p-3">Enterprise</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Starting Price</td>
                  <td className="p-3">$14/user/mo</td>
                  <td className="p-3">Free (limited)<br/>$45/mo (pro)</td>
                  <td className="p-3">$25/user/mo</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">N8N Integration Ease</td>
                  <td className="p-3 text-green-400">★★★★★</td>
                  <td className="p-3 text-green-400">★★★★☆</td>
                  <td className="p-3 text-yellow-400">★★★☆☆</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 bg-blue-900/20 border border-blue-500/30 rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              <span className="text-blue-400">💡</span> Recommendation Based on Business Type
            </h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="bg-zinc-900 rounded-lg p-4">
                <p className="text-white font-semibold mb-2">Choose Pipedrive if:</p>
                <ul className="text-gray-300 space-y-1 ml-4">
                  <li>• SMB or startup</li>
                  <li>• Sales-focused team</li>
                  <li>• Need simple pipeline management</li>
                  <li>• Budget under $50/user</li>
                </ul>
              </div>
              <div className="bg-zinc-900 rounded-lg p-4">
                <p className="text-white font-semibold mb-2">Choose HubSpot if:</p>
                <ul className="text-gray-300 space-y-1 ml-4">
                  <li>• Marketing + Sales alignment</li>
                  <li>• Need email marketing</li>
                  <li>• Want free tier to start</li>
                  <li>• Content-driven business</li>
                </ul>
              </div>
              <div className="bg-zinc-900 rounded-lg p-4">
                <p className="text-white font-semibold mb-2">Choose Salesforce if:</p>
                <ul className="text-gray-300 space-y-1 ml-4">
                  <li>• Enterprise organization</li>
                  <li>• Complex sales processes</li>
                  <li>• Need deep customization</li>
                  <li>• Budget for implementation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow 1: Lead Capture */}
      <section className="section-spacing bg-zinc-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-3xl font-bold text-white mb-8">🎯 Workflow 1: Multi-Source Lead Capture</h2>

          <div className="bg-green-900/20 border border-green-500/30 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-bold text-white mb-3">What This Workflow Does</h3>
            <p className="text-gray-300">
              Automatically captures leads from website forms, landing pages, social media, email, and chat - then creates CRM contacts with enriched data, assigns to sales reps, and triggers welcome sequences.
            </p>
          </div>

          <div className="space-y-6">
            {/* Architecture */}
            <div className="bg-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Lead Capture Architecture</h3>
              <div className="bg-zinc-950 rounded-lg p-4 overflow-x-auto">
                <pre className="text-sm text-green-400">{`Multiple Lead Sources:
├── Website Form (Webhook)
├── Landing Page (Typeform/Google Forms)
├── Facebook/Instagram Lead Ads
├── LinkedIn Lead Gen Forms
└── Live Chat (Intercom/Drift)
         ↓
    Merge & Deduplicate
         ↓
    Enrich with Clearbit/Hunter
    (Company, Job Title, Social Profiles)
         ↓
    Lead Scoring Algorithm
    (Industry, Company Size, Role, Engagement)
         ↓
    Create/Update in CRM
    (Pipedrive/HubSpot/Salesforce)
         ↓
    Route Based on Score:
    ├── High Score (80-100) → Senior Sales Rep + Immediate Notification
    ├── Medium Score (50-79) → Junior Sales Rep + 24h Follow-up
    └── Low Score (0-49) → Marketing Nurture Sequence
         ↓
    Send Welcome Email
         ↓
    Log to Analytics Dashboard`}</pre>
              </div>
            </div>

            {/* Lead Enrichment */}
            <div className="bg-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-blue-400 mb-4">Step 1: Lead Enrichment & Scoring</h3>

              <div className="bg-zinc-950 rounded p-4 mb-4">
                <h4 className="text-white font-semibold mb-2">Clearbit Enrichment Node:</h4>
                <pre className="text-sm text-green-400">{`HTTP Request to Clearbit API:
GET https://person.clearbit.com/v2/combined/find?email={{$json["email"]}}

Returns:
- Full Name
- Job Title
- Seniority Level (C-Level, VP, Director, Manager, Individual Contributor)
- Company Name
- Company Domain
- Company Size (employees)
- Company Industry
- Company Revenue
- Social Media Profiles (LinkedIn, Twitter)
- Location

Use this data for:
✓ Lead scoring
✓ CRM field population
✓ Personalized email sequences
✓ Sales rep assignment`}</pre>
              </div>

              <div className="bg-zinc-950 rounded p-4">
                <h4 className="text-white font-semibold mb-2">Lead Scoring Function Node:</h4>
                <pre className="text-sm text-green-400 overflow-x-auto">{`const lead = $input.first().json;
let score = 0;

// Job Seniority (max 30 points)
const seniorityScores = {
  'C-Level': 30,
  'VP': 25,
  'Director': 20,
  'Manager': 15,
  'Individual Contributor': 5
};
score += seniorityScores[lead.seniority] || 0;

// Company Size (max 25 points)
const employees = lead.company?.employees || 0;
if (employees > 1000) score += 25;
else if (employees > 500) score += 20;
else if (employees > 100) score += 15;
else if (employees > 50) score += 10;
else score += 5;

// Industry Match (max 20 points)
const targetIndustries = ['Software', 'Technology', 'SaaS', 'E-commerce'];
if (targetIndustries.some(ind => lead.company?.industry?.includes(ind))) {
  score += 20;
}

// Email Domain Quality (max 15 points)
const domain = lead.email.split('@')[1];
if (!['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com'].includes(domain)) {
  score += 15; // Business email
}

// Form Completion Quality (max 10 points)
const fieldsCompleted = Object.keys(lead).filter(k => lead[k]).length;
if (fieldsCompleted > 8) score += 10;
else if (fieldsCompleted > 5) score += 5;

// Lead Quality Category
let quality = 'Low';
if (score >= 80) quality = 'High';
else if (score >= 50) quality = 'Medium';

return [{
  json: {
    ...lead,
    leadScore: score,
    leadQuality: quality,
    scoringDetails: {
      seniority: seniorityScores[lead.seniority] || 0,
      companySize: Math.min(25, Math.ceil(employees / 50) * 5),
      industryMatch: targetIndustries.some(ind => lead.company?.industry?.includes(ind)) ? 20 : 0,
      emailQuality: 15,
      completeness: fieldsCompleted > 8 ? 10 : 5
    }
  }
}];`}</pre>
              </div>
            </div>

            {/* CRM Creation */}
            <div className="bg-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-purple-400 mb-4">Step 2: Create Lead in CRM</h3>

              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div className="bg-zinc-950 rounded p-4">
                  <p className="text-pink-400 font-semibold mb-2">Pipedrive</p>
                  <pre className="text-xs text-green-400">{`Node: Pipedrive
Operation: Create Person

Fields:
- Name
- Email
- Phone
- Organization
- Custom: Lead Score
- Custom: Lead Source
- Custom: Job Title
- Label: New Lead

Then Create Deal:
- Title: [Company] - [Product]
- Stage: Lead In
- Value: $0 (estimated)
- Owner: Auto-assigned`}</pre>
                </div>

                <div className="bg-zinc-950 rounded p-4">
                  <p className="text-blue-400 font-semibold mb-2">HubSpot</p>
                  <pre className="text-xs text-green-400">{`Node: HubSpot
Operation: Create Contact

Fields:
- Email (required)
- First/Last Name
- Company
- Job Title
- Phone
- Lifecycle Stage: Lead
- Lead Status: New
- HS Score: [calculated]

Create Deal if High Score`}</pre>
                </div>

                <div className="bg-zinc-950 rounded p-4">
                  <p className="text-orange-400 font-semibold mb-2">Salesforce</p>
                  <pre className="text-xs text-green-400">{`Node: Salesforce
Operation: Create Lead

Fields:
- First/Last Name
- Email (required)
- Company (required)
- Title
- Phone
- Status: New
- Rating: Hot/Warm/Cold
- Lead Source
- Score__c: [custom]

Convert to Contact
if score > 80`}</pre>
                </div>
              </div>

              <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-4">
                <p className="text-sm text-yellow-300 mb-2">⚠️ Deduplication Strategy:</p>
                <p className="text-sm text-gray-400 mb-2">Before creating, always check if contact exists:</p>
                <pre className="text-xs text-green-400">{`1. Search by email first (most reliable)
2. If found: Update existing record, don't create duplicate
3. If not found: Search by phone as backup
4. Track "Last Updated" timestamp
5. Merge duplicate records weekly (separate workflow)`}</pre>
              </div>
            </div>

            {/* Assignment Logic */}
            <div className="bg-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-green-400 mb-4">Step 3: Smart Sales Rep Assignment</h3>

              <div className="bg-zinc-950 rounded p-4 mb-4">
                <h4 className="text-white font-semibold mb-2">Assignment Algorithm:</h4>
                <pre className="text-sm text-green-400 overflow-x-auto">{`const lead = $input.first().json;

// Sales team configuration
const salesTeam = {
  senior: [
    { id: 'rep1', name: 'Sarah Chen', capacity: 20, current: 15, specialty: 'Enterprise' },
    { id: 'rep2', name: 'Mike Johnson', capacity: 20, current: 18, specialty: 'Mid-Market' }
  ],
  junior: [
    { id: 'rep3', name: 'Emily Davis', capacity: 35, current: 28, specialty: 'SMB' },
    { id: 'rep4', name: 'Tom Wilson', capacity: 35, current: 22, specialty: 'SMB' }
  ]
};

let assignedRep = null;

if (lead.leadQuality === 'High') {
  // Assign to senior rep with capacity, matching specialty if possible
  const availableSenior = salesTeam.senior
    .filter(rep => rep.current < rep.capacity)
    .sort((a, b) => a.current - b.current);

  if (lead.company?.employees > 500) {
    assignedRep = availableSenior.find(rep => rep.specialty === 'Enterprise') || availableSenior[0];
  } else {
    assignedRep = availableSenior[0];
  }
} else if (lead.leadQuality === 'Medium') {
  // Assign to junior rep with most capacity
  assignedRep = salesTeam.junior
    .filter(rep => rep.current < rep.capacity)
    .sort((a, b) => a.current - b.current)[0];
} else {
  // Low quality leads go to marketing automation
  assignedRep = { id: 'marketing', name: 'Marketing Automation' };
}

return [{
  json: {
    ...lead,
    assignedTo: assignedRep.id,
    assignedToName: assignedRep.name,
    assignmentReason: lead.leadQuality,
    assignedAt: new Date().toISOString()
  }
}];`}</pre>
              </div>

              <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
                <p className="text-sm text-blue-300 mb-2">💡 Round-Robin Alternative:</p>
                <p className="text-sm text-gray-400">
                  Simple round-robin assignment: Track last assigned rep in workflow variable, assign to next in rotation. Update after each assignment. Good for teams with equal capacity.
                </p>
              </div>
            </div>

            {/* Notifications */}
            <div className="bg-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-red-400 mb-4">Step 4: Instant Notifications</h3>

              <div className="bg-zinc-950 rounded p-4">
                <h4 className="text-white font-semibold mb-2">Slack Notification (High-Value Leads):</h4>
                <pre className="text-sm text-green-400 overflow-x-auto">{`Channel: #hot-leads

Message:
🔥 NEW HIGH-VALUE LEAD 🔥

Name: {{$json["firstName"]}} {{$json["lastName"]}}
Company: {{$json["company"]["name"]}}
Title: {{$json["jobTitle"]}}
Email: {{$json["email"]}}
Phone: {{$json["phone"]}}

━━━━━━━━━━━━━━━━━━━━━━━━━━
📊 LEAD INTELLIGENCE
━━━━━━━━━━━━━━━━━━━━━━━━━━
Lead Score: {{$json["leadScore"]}}/100 ⭐
Quality: {{$json["leadQuality"]}}
Source: {{$json["leadSource"]}}

Company Size: {{$json["company"]["employees"]}} employees
Industry: {{$json["company"]["industry"]}}
Revenue: \${{$json["company"]["revenue"]}}M

━━━━━━━━━━━━━━━━━━━━━━━━━━
🎯 ACTION REQUIRED
━━━━━━━━━━━━━━━━━━━━━━━━━━
Assigned to: @{{$json["assignedToName"]}}
Expected Response: Within 15 minutes
CRM Link: {{$json["crmUrl"]}}

🔗 LinkedIn: {{$json["socialProfiles"]["linkedin"]}}

CALL NOW: {{$json["phone"]}}`}</pre>
              </div>

              <div className="mt-4 bg-zinc-950 rounded p-4">
                <h4 className="text-white font-semibold mb-2">Email to Assigned Rep:</h4>
                <pre className="text-sm text-green-400">{`Subject: 🔥 High-Value Lead Assigned: {{$json["company"]["name"]}}

Hi {{$json["assignedToName"]}},

You have a new high-priority lead!

CONTACT INFO:
Name: {{$json["firstName"]}} {{$json["lastName"]}}
Title: {{$json["jobTitle"]}}
Company: {{$json["company"]["name"]}}
Email: {{$json["email"]}}
Phone: {{$json["phone"]}}

QUALIFICATION:
• Lead Score: {{$json["leadScore"]}}/100
• Company Size: {{$json["company"]["employees"]}} employees
• Industry: {{$json["company"]["industry"]}}
• Source: {{$json["leadSource"]}}

NEXT STEPS:
1. Review their company website: {{$json["company"]["domain"]}}
2. Check their LinkedIn: {{$json["socialProfiles"]["linkedin"]}}
3. Call within 15 minutes for best conversion rate
4. Reference their interest in [product/service mentioned]

View in CRM: {{$json["crmUrl"]}}

Good luck!`}</pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow 2: Automated Lead Scoring */}
      <section className="section-spacing">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-3xl font-bold text-white mb-8">⭐ Workflow 2: Dynamic Lead Scoring & Re-scoring</h2>

          <div className="bg-blue-900/20 border border-blue-500/30 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-bold text-white mb-3">What This Workflow Does</h3>
            <p className="text-gray-300">
              Continuously monitors lead behavior (email opens, link clicks, website visits, content downloads) and updates lead scores in real-time. Automatically promotes hot leads and alerts sales team.
            </p>
          </div>

          <div className="space-y-6">
            {/* Behavioral Tracking */}
            <div className="bg-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Behavioral Scoring Triggers</h3>

              <div className="overflow-x-auto">
                <table className="w-full text-sm text-gray-300">
                  <thead className="bg-zinc-900">
                    <tr>
                      <th className="p-3 text-left text-blue-400">Action</th>
                      <th className="p-3 text-left text-blue-400">Points Added</th>
                      <th className="p-3 text-left text-blue-400">Trigger Source</th>
                      <th className="p-3 text-left text-blue-400">Urgency</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-700">
                    <tr>
                      <td className="p-3 font-semibold">Email Opened</td>
                      <td className="p-3 text-green-400">+2 points</td>
                      <td className="p-3">Email service webhook</td>
                      <td className="p-3 text-gray-400">Low</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold">Email Link Clicked</td>
                      <td className="p-3 text-green-400">+5 points</td>
                      <td className="p-3">Email service webhook</td>
                      <td className="p-3 text-yellow-400">Medium</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold">Visited Pricing Page</td>
                      <td className="p-3 text-orange-400">+15 points</td>
                      <td className="p-3">Google Analytics webhook</td>
                      <td className="p-3 text-orange-400">High</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold">Downloaded Case Study</td>
                      <td className="p-3 text-green-400">+10 points</td>
                      <td className="p-3">Website form submission</td>
                      <td className="p-3 text-yellow-400">Medium</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold">Requested Demo</td>
                      <td className="p-3 text-red-400">+30 points</td>
                      <td className="p-3">Calendly webhook</td>
                      <td className="p-3 text-red-400">Urgent</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold">Watched Product Video</td>
                      <td className="p-3 text-green-400">+8 points</td>
                      <td className="p-3">Wistia/Vimeo webhook</td>
                      <td className="p-3 text-yellow-400">Medium</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold">Returned to Site (7 days)</td>
                      <td className="p-3 text-green-400">+5 points</td>
                      <td className="p-3">Google Analytics</td>
                      <td className="p-3 text-yellow-400">Medium</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold">No Activity (30 days)</td>
                      <td className="p-3 text-red-400">-10 points</td>
                      <td className="p-3">Scheduled check</td>
                      <td className="p-3 text-gray-400">Decay</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Score Update Logic */}
            <div className="bg-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-purple-400 mb-4">Real-Time Score Update Flow</h3>

              <div className="bg-zinc-950 rounded p-4 overflow-x-auto">
                <pre className="text-sm text-green-400">{`Webhook Receives Event (email click, page visit, etc.)
         ↓
  Identify Contact by Email/Cookie ID
         ↓
  Fetch Current Lead Score from CRM
         ↓
  Calculate Points to Add (based on action)
         ↓
  Update Score in CRM
         ↓
  Check if Score Crossed Threshold:
  ├── Crossed 50 (Cold → Warm) → Add to nurture sequence
  ├── Crossed 80 (Warm → Hot) → Alert sales rep + move stage
  └── Crossed 95 (Hot → Ultra-Hot) → Immediate call required
         ↓
  Log Activity to Timeline
         ↓
  Update "Last Engaged" timestamp`}</pre>
              </div>
            </div>

            {/* Implementation Code */}
            <div className="bg-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-green-400 mb-4">Implementation Example</h3>

              <div className="bg-zinc-950 rounded p-4">
                <h4 className="text-white font-semibold mb-2">Function Node - Update Score:</h4>
                <pre className="text-sm text-green-400 overflow-x-auto">{`const event = $input.first().json;

// Point values by action type
const pointValues = {
  'email_open': 2,
  'email_click': 5,
  'page_view_pricing': 15,
  'page_view_features': 8,
  'download_resource': 10,
  'demo_request': 30,
  'video_watched': 8,
  'return_visit': 5
};

// Get current lead from CRM (previous node)
const currentLead = $('CRM - Get Lead').first().json;
const currentScore = currentLead.leadScore || 0;
const actionPoints = pointValues[event.action] || 0;

// Calculate new score (max 100)
const newScore = Math.min(100, currentScore + actionPoints);

// Determine if threshold crossed
const oldCategory =
  currentScore >= 80 ? 'Hot' :
  currentScore >= 50 ? 'Warm' :
  'Cold';

const newCategory =
  newScore >= 80 ? 'Hot' :
  newScore >= 50 ? 'Warm' :
  'Cold';

const thresholdCrossed = oldCategory !== newCategory;

// Build activity description
const activityDescriptions: Record<string, string> = {
  'email_open': 'Opened email: [email subject]',
  'email_click': 'Clicked link in email: [link url]',
  'page_view_pricing': 'Visited pricing page',
  'demo_request': '🔥 REQUESTED DEMO! (Calendly)'
};

return [{
  json: {
    leadId: currentLead.id,
    email: currentLead.email,
    oldScore: currentScore,
    newScore: newScore,
    pointsAdded: actionPoints,
    oldCategory,
    newCategory,
    thresholdCrossed,
    actionType: event.action,
    activityDescription: activityDescriptions[event.action] || event.action,
    timestamp: new Date().toISOString(),
    shouldNotifySales: newScore >= 80 && currentScore < 80 // Just became hot
  }
}];`}</pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course CTA #1 */}
      <section className="section-spacing">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-600/20 via-green-600/20 to-purple-600/20 rounded-2xl p-8 md:p-12 border border-blue-500/30">
            <div className="text-center">
              <div className="inline-block bg-green-500/10 border border-green-500/30 rounded-full px-4 py-2 mb-4">
                <span className="text-green-400 font-semibold text-sm">⚡ AUTOMATION MASTERY</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Master N8N CRM Automation Today
              </h3>
              <p className="text-gray-300 mb-6 text-lg">
                Get the complete system for automating your CRM with professional workflows, templates, and step-by-step training
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400">$189</div>
                  <div className="text-sm text-gray-400">Full course access</div>
                </div>
                <div className="hidden sm:block text-gray-600">•</div>
                <div className="text-center">
                  <div className="text-xl text-gray-400"><span className="line-through">$5,959</span></div>
                  <div className="text-sm text-blue-400 font-semibold">97% Off Today</div>
                </div>
              </div>
              <Link
                href="/automation-empire"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-semibold px-8 py-4 rounded-lg transition-all transform hover:scale-105"
              >
                Start Automating Your CRM
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <p className="text-gray-500 text-sm mt-4">
                ✓ Complete CRM workflows ✓ JSON templates ✓ Video training ✓ 24/7 support
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow 3: Email Sequences */}
      <section className="section-spacing bg-zinc-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-3xl font-bold text-white mb-8">📧 Workflow 3: Automated Email Sequences</h2>

          <div className="bg-purple-900/20 border border-purple-500/30 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-bold text-white mb-3">What This Workflow Does</h3>
            <p className="text-gray-300">
              Sends personalized email sequences triggered by CRM events (new lead, deal stage change, no activity). Includes A/B testing, optimal send time calculation, and automatic pause on reply.
            </p>
          </div>

          <div className="space-y-6">
            {/* Email Sequence Templates */}
            <div className="bg-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Standard Email Sequences</h3>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-zinc-950 rounded p-4">
                  <p className="text-pink-400 font-semibold mb-3">Cold Lead Nurture (7 emails, 14 days)</p>
                  <ol className="text-sm text-gray-300 space-y-2">
                    <li><span className="text-white font-semibold">Day 0:</span> Welcome + value proposition</li>
                    <li><span className="text-white font-semibold">Day 2:</span> Customer success story</li>
                    <li><span className="text-white font-semibold">Day 4:</span> Educational content (blog/guide)</li>
                    <li><span className="text-white font-semibold">Day 7:</span> Feature highlight + demo offer</li>
                    <li><span className="text-white font-semibold">Day 10:</span> Social proof (testimonials)</li>
                    <li><span className="text-white font-semibold">Day 12:</span> Special offer (time-limited)</li>
                    <li><span className="text-white font-semibold">Day 14:</span> Break-up email (last attempt)</li>
                  </ol>
                </div>

                <div className="bg-zinc-950 rounded p-4">
                  <p className="text-blue-400 font-semibold mb-3">Warm Lead Fast Track (5 emails, 7 days)</p>
                  <ol className="text-sm text-gray-300 space-y-2">
                    <li><span className="text-white font-semibold">Day 0:</span> Personal intro from sales rep</li>
                    <li><span className="text-white font-semibold">Day 1:</span> Detailed product demo video</li>
                    <li><span className="text-white font-semibold">Day 2:</span> ROI calculator + case study</li>
                    <li><span className="text-white font-semibold">Day 4:</span> Demo invitation (specific time slots)</li>
                    <li><span className="text-white font-semibold">Day 7:</span> Direct call to action + urgency</li>
                  </ol>
                </div>

                <div className="bg-zinc-950 rounded p-4">
                  <p className="text-green-400 font-semibold mb-3">Post-Demo Follow-up (4 emails, 10 days)</p>
                  <ol className="text-sm text-gray-300 space-y-2">
                    <li><span className="text-white font-semibold">Day 0:</span> Thank you + demo recap</li>
                    <li><span className="text-white font-semibold">Day 2:</span> Answer questions from demo</li>
                    <li><span className="text-white font-semibold">Day 5:</span> Proposal/pricing sent</li>
                    <li><span className="text-white font-semibold">Day 10:</span> Follow-up on proposal</li>
                  </ol>
                </div>

                <div className="bg-zinc-950 rounded p-4">
                  <p className="text-orange-400 font-semibold mb-3">Re-engagement (Cold Leads) (3 emails, 21 days)</p>
                  <ol className="text-sm text-gray-300 space-y-2">
                    <li><span className="text-white font-semibold">Day 0:</span> "Noticed you haven't been active"</li>
                    <li><span className="text-white font-semibold">Day 7:</span> New feature announcement</li>
                    <li><span className="text-white font-semibold">Day 21:</span> Final offer + discount</li>
                  </ol>
                </div>
              </div>
            </div>

            {/* Sequence Workflow */}
            <div className="bg-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-blue-400 mb-4">Email Sequence Automation Flow</h3>

              <div className="bg-zinc-950 rounded p-4">
                <pre className="text-sm text-green-400 overflow-x-auto">{`CRM Event Trigger (New Lead Created, Deal Stage Changed)
         ↓
  Determine Sequence Type (based on lead score, source, stage)
         ↓
  Create Sequence Entry in Database
  (Track: sequence_id, lead_id, current_step, next_send_time)
         ↓
  Schedule Trigger (Checks every hour for due emails)
         ↓
  Query Database for Emails Due to Send
         ↓
  For Each Email:
    ├── Check if lead replied (if yes, pause sequence)
    ├── Check if lead unsubscribed (if yes, stop sequence)
    ├── Personalize email with lead data
    ├── Calculate optimal send time (based on past engagement)
    ├── Send email via SendGrid/Mailgun/SES
    ├── Track send in CRM activity timeline
    ├── Update sequence step
    └── Schedule next email
         ↓
  Monitor Email Events (opens, clicks, replies)
         ↓
  If Reply Detected:
    ├── Pause sequence
    ├── Notify assigned sales rep
    └── Update lead status to "Engaged"`}</pre>
              </div>
            </div>

            {/* Smart Send Time */}
            <div className="bg-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-purple-400 mb-4">Optimal Send Time Calculation</h3>

              <div className="bg-zinc-950 rounded p-4">
                <h4 className="text-white font-semibold mb-2">Function Node - Calculate Best Send Time:</h4>
                <pre className="text-sm text-green-400 overflow-x-auto">{`const lead = $input.first().json;

// Get historical engagement data (from previous node)
const engagementHistory = $('Get Engagement History').all().map(item => item.json);

// Analyze past open times
const openTimes = engagementHistory
  .filter(e => e.action === 'email_open')
  .map(e => {
    const date = new Date(e.timestamp);
    return {
      hour: date.getHours(),
      dayOfWeek: date.getDay(),
      opened: true
    };
  });

// Find most common open hour and day
const hourCounts = {};
const dayCounts = {};

openTimes.forEach(ot => {
  hourCounts[ot.hour] = (hourCounts[ot.hour] || 0) + 1;
  dayCounts[ot.dayOfWeek] = (dayCounts[ot.dayOfWeek] || 0) + 1;
});

// Determine optimal send time
let optimalHour = 10; // Default: 10 AM
let optimalDay = 2; // Default: Tuesday

if (Object.keys(hourCounts).length > 0) {
  optimalHour = parseInt(Object.keys(hourCounts).reduce((a, b) =>
    hourCounts[a] > hourCounts[b] ? a : b
  ));
}

if (Object.keys(dayCounts).length > 0) {
  optimalDay = parseInt(Object.keys(dayCounts).reduce((a, b) =>
    dayCounts[a] > dayCounts[b] ? a : b
  ));
}

// If no history, use industry best practices
if (openTimes.length === 0) {
  // B2B: Tuesday-Thursday, 10 AM or 2 PM
  const industryDefaults = {
    'B2B': { hour: 10, day: 2 }, // Tuesday 10 AM
    'B2C': { hour: 19, day: 0 }, // Sunday 7 PM
    'SaaS': { hour: 14, day: 3 }  // Wednesday 2 PM
  };

  const defaults = industryDefaults[lead.industry] || industryDefaults['B2B'];
  optimalHour = defaults.hour;
  optimalDay = defaults.day;
}

// Calculate next occurrence of optimal day/time
const now = new Date();
const nextSend = new Date();
nextSend.setHours(optimalHour, 0, 0, 0);

// Advance to next optimal day
while (nextSend.getDay() !== optimalDay || nextSend <= now) {
  nextSend.setDate(nextSend.getDate() + 1);
}

return [{
  json: {
    leadId: lead.id,
    optimalHour,
    optimalDay,
    nextSendTime: nextSend.toISOString(),
    confidence: openTimes.length > 5 ? 'High' : openTimes.length > 0 ? 'Medium' : 'Low',
    basedOnData: openTimes.length > 0
  }
}];`}</pre>
              </div>

              <div className="mt-4 bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
                <p className="text-sm text-blue-300 mb-2">💡 Send Time Best Practices:</p>
                <ul className="text-sm text-gray-400 space-y-1 ml-4">
                  <li>• <span className="text-white font-semibold">B2B:</span> Tuesday-Thursday, 10 AM - 11 AM or 2 PM - 3 PM local time</li>
                  <li>• <span className="text-white font-semibold">B2C:</span> Evenings (7 PM - 9 PM) and weekends perform well</li>
                  <li>• Avoid Mondays (inbox overload) and Fridays (mental checkout)</li>
                  <li>• Respect recipient's timezone - use lead's location data</li>
                  <li>• Test and iterate - A/B test send times for your audience</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deal Pipeline Automation */}
      <section className="section-spacing">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-3xl font-bold text-white mb-8">💼 Workflow 4: Deal Pipeline Automation</h2>

          <div className="bg-green-900/20 border border-green-500/30 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-bold text-white mb-3">What This Workflow Does</h3>
            <p className="text-gray-300">
              Automatically moves deals through pipeline stages based on actions, sends stage-specific emails, creates tasks for sales reps, forecasts deal close probability, and alerts on stuck deals.
            </p>
          </div>

          <div className="space-y-6">
            {/* Pipeline Stages */}
            <div className="bg-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Automated Pipeline Stage Progression</h3>

              <div className="overflow-x-auto">
                <table className="w-full text-sm text-gray-300">
                  <thead className="bg-zinc-900">
                    <tr>
                      <th className="p-3 text-left text-blue-400">Stage</th>
                      <th className="p-3 text-left text-blue-400">Auto-Advance Trigger</th>
                      <th className="p-3 text-left text-blue-400">Actions</th>
                      <th className="p-3 text-left text-blue-400">Typical Duration</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-700">
                    <tr>
                      <td className="p-3 font-semibold">1. Lead In</td>
                      <td className="p-3">Initial contact made (call logged or email reply)</td>
                      <td className="p-3">
                        • Send intro email<br/>
                        • Create "Discovery Call" task<br/>
                        • Schedule follow-up in 2 days
                      </td>
                      <td className="p-3 text-yellow-400">1-3 days</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold">2. Qualified</td>
                      <td className="p-3">Discovery call completed (calendar event ends)</td>
                      <td className="p-3">
                        • Send post-call summary email<br/>
                        • Request decision criteria<br/>
                        • Create "Send Proposal" task
                      </td>
                      <td className="p-3 text-yellow-400">3-7 days</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold">3. Demo Scheduled</td>
                      <td className="p-3">Demo booked on Calendly</td>
                      <td className="p-3">
                        • Send demo prep email (48h before)<br/>
                        • Create "Prepare Demo" task<br/>
                        • Add demo notes template to CRM
                      </td>
                      <td className="p-3 text-green-400">1-5 days</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold">4. Proposal Sent</td>
                      <td className="p-3">Proposal document sent (email sent or DocuSign created)</td>
                      <td className="p-3">
                        • Track proposal opens<br/>
                        • Follow-up email after 2 days if not opened<br/>
                        • Create "Negotiate" task
                      </td>
                      <td className="p-3 text-yellow-400">5-10 days</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold">5. Negotiation</td>
                      <td className="p-3">Price discussion activity logged</td>
                      <td className="p-3">
                        • Alert sales manager for approval<br/>
                        • Prepare contract<br/>
                        • Create "Close Deal" task
                      </td>
                      <td className="p-3 text-orange-400">3-14 days</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold">6. Closed Won</td>
                      <td className="p-3">Contract signed (DocuSign completed)</td>
                      <td className="p-3">
                        • Send welcome/onboarding email<br/>
                        • Create customer record<br/>
                        • Notify success team<br/>
                        • Update revenue forecast
                      </td>
                      <td className="p-3 text-green-400">Deal closed!</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold">7. Closed Lost</td>
                      <td className="p-3">Manual or "No response for 30 days"</td>
                      <td className="p-3">
                        • Request loss reason<br/>
                        • Add to re-engagement sequence (6 months)<br/>
                        • Analyze loss patterns
                      </td>
                      <td className="p-3 text-red-400">-</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Stage Automation Code */}
            <div className="bg-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-purple-400 mb-4">Stage Transition Automation</h3>

              <div className="bg-zinc-950 rounded p-4">
                <h4 className="text-white font-semibold mb-2">Webhook Trigger + Function Node:</h4>
                <pre className="text-sm text-green-400 overflow-x-auto">{`// Webhook receives event from CRM (deal updated, activity logged, etc.)
const event = $input.first().json;

// Fetch current deal data
const deal = event.deal;
const currentStage = deal.stage;

// Define stage progression logic
const stageTransitions = {
  'Lead In': {
    advanceOn: ['call_logged', 'email_reply_received'],
    nextStage: 'Qualified',
    actions: ['send_discovery_email', 'create_discovery_task']
  },
  'Qualified': {
    advanceOn: ['discovery_call_completed'],
    nextStage: 'Demo Scheduled',
    actions: ['send_post_call_summary', 'request_decision_criteria']
  },
  'Demo Scheduled': {
    advanceOn: ['demo_completed'],
    nextStage: 'Proposal Sent',
    actions: ['send_thank_you_email', 'create_proposal_task']
  },
  'Proposal Sent': {
    advanceOn: ['proposal_opened_3_times', 'pricing_discussion_logged'],
    nextStage: 'Negotiation',
    actions: ['alert_sales_manager', 'prepare_contract']
  },
  'Negotiation': {
    advanceOn: ['contract_sent'],
    nextStage: 'Closed Won',
    actions: ['send_contract', 'schedule_signature_follow_up']
  }
};

const currentStageConfig = stageTransitions[currentStage];

// Check if event triggers stage advance
let shouldAdvance = false;
if (currentStageConfig && currentStageConfig.advanceOn.includes(event.action)) {
  shouldAdvance = true;
}

// Build response
return [{
  json: {
    dealId: deal.id,
    currentStage,
    nextStage: shouldAdvance ? currentStageConfig.nextStage : currentStage,
    shouldAdvance,
    actionsToTake: shouldAdvance ? currentStageConfig.actions : [],
    eventType: event.action,
    timestamp: new Date().toISOString()
  }
}];`}</pre>
              </div>
            </div>

            {/* Stuck Deal Detection */}
            <div className="bg-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-red-400 mb-4">Stuck Deal Detection & Alerts</h3>

              <div className="bg-zinc-950 rounded p-4 mb-4">
                <h4 className="text-white font-semibold mb-2">Schedule Trigger (Daily) - Check for Stuck Deals:</h4>
                <pre className="text-sm text-green-400 overflow-x-auto">{`// Query CRM for all open deals
const openDeals = $('CRM - Get Open Deals').all();

// Define "stuck" thresholds by stage (in days)
const stuckThresholds = {
  'Lead In': 5,
  'Qualified': 10,
  'Demo Scheduled': 7,
  'Proposal Sent': 14,
  'Negotiation': 21
};

const now = new Date();
const stuckDeals = [];

openDeals.forEach(item => {
  const deal = item.json;
  const stageEnteredDate = new Date(deal.stage_entered_at);
  const daysInStage = Math.floor((now - stageEnteredDate) / (1000 * 60 * 60 * 24));

  const threshold = stuckThresholds[deal.stage] || 30;

  if (daysInStage > threshold) {
    stuckDeals.push({
      dealId: deal.id,
      dealName: deal.name,
      stage: deal.stage,
      daysInStage,
      threshold,
      assignedTo: deal.owner_name,
      value: deal.value,
      lastActivityDate: deal.last_activity_date,
      daysSinceActivity: Math.floor((now - new Date(deal.last_activity_date)) / (1000 * 60 * 60 * 24))
    });
  }
});

return stuckDeals.map(deal => ({ json: deal }));`}</pre>
              </div>

              <div className="bg-zinc-950 rounded p-4">
                <h4 className="text-white font-semibold mb-2">Slack Alert for Stuck Deals:</h4>
                <pre className="text-sm text-green-400">{`Channel: #sales-alerts

Message:
⚠️ STUCK DEALS REPORT - {{$now.format('MMM DD, YYYY')}}

Found {{$input.all().length}} deals stuck in pipeline!

{{#each $input.all()}}
━━━━━━━━━━━━━━━━━━━━━━━━━━
Deal: {{this.json.dealName}}
Value: \${{this.json.value}}
Stage: {{this.json.stage}} ({{this.json.daysInStage}} days - threshold: {{this.json.threshold}})
Owner: @{{this.json.assignedTo}}
Last Activity: {{this.json.daysSinceActivity}} days ago

🎯 ACTION REQUIRED:
- Contact prospect today
- Update deal status
- Move forward or mark as lost

CRM Link: [link]
━━━━━━━━━━━━━━━━━━━━━━━━━━
{{/each}}

@sales-team - Please review and take action!`}</pre>
              </div>
            </div>

            {/* Win Probability */}
            <div className="bg-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-green-400 mb-4">AI-Powered Win Probability Prediction</h3>

              <div className="bg-zinc-950 rounded p-4">
                <h4 className="text-white font-semibold mb-2">Function Node - Calculate Win Probability:</h4>
                <pre className="text-sm text-green-400 overflow-x-auto">{`const deal = $input.first().json;

// Base probability by stage
const baseProbabilities = {
  'Lead In': 10,
  'Qualified': 25,
  'Demo Scheduled': 40,
  'Proposal Sent': 60,
  'Negotiation': 80
};

let probability = baseProbabilities[deal.stage] || 0;

// Positive factors (increase probability)
if (deal.lead_score > 80) probability += 15;
if (deal.engagement_score > 70) probability += 10;
if (deal.decision_maker_identified) probability += 5;
if (deal.budget_confirmed) probability += 10;
if (deal.timeline_defined) probability += 5;
if (deal.champion_identified) probability += 10;
if (deal.multiple_touchpoints > 5) probability += 5;
if (deal.proposal_viewed_multiple_times) probability += 10;

// Negative factors (decrease probability)
if (deal.days_in_stage > stageThresholds[deal.stage]) probability -= 15;
if (deal.days_since_last_activity > 7) probability -= 10;
if (deal.competitor_mentioned) probability -= 10;
if (deal.price_objection_logged) probability -= 5;
if (deal.decision_delayed) probability -= 10;

// Ensure probability stays within 0-100
probability = Math.max(0, Math.min(100, probability));

// Risk level
let riskLevel = 'Low';
if (probability < 30) riskLevel = 'High';
else if (probability < 60) riskLevel = 'Medium';

return [{
  json: {
    dealId: deal.id,
    winProbability: probability,
    riskLevel,
    recommendedActions: probability < 50 ? [
      'Schedule call with decision maker',
      'Address objections proactively',
      'Offer additional value/discount'
    ] : [
      'Continue current approach',
      'Maintain regular touchpoints',
      'Prepare for close'
    ],
    forecastCategory: probability > 70 ? 'Commit' : probability > 40 ? 'Best Case' : 'Pipeline'
  }
}];`}</pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Type Workflows */}
      <section className="section-spacing bg-zinc-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-3xl font-bold text-white mb-8">🎯 3 Complete CRM Workflows for Different Business Types</h2>

          <div className="space-y-8">
            {/* E-commerce */}
            <div className="bg-zinc-800 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-pink-400 mb-4">1. E-commerce/DTC Business CRM Workflow</h3>

              <div className="bg-zinc-950 rounded p-4 mb-4">
                <h4 className="text-white font-semibold mb-2">Workflow Overview:</h4>
                <pre className="text-sm text-gray-300">{`Shopify Order Webhook → Create Customer in HubSpot
         ↓
  Tag by Product Category + Purchase Value
         ↓
  Add to Post-Purchase Email Sequence:
  - Day 0: Thank you + shipping info
  - Day 3: Product usage tips
  - Day 7: Request review
  - Day 14: Upsell/cross-sell based on purchase
  - Day 30: Loyalty program invite
         ↓
  Track Customer Lifetime Value (CLV)
         ↓
  High CLV (>$500)? → Tag as VIP → Special offers
  Low Engagement? → Win-back campaign`}</pre>
              </div>

              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="bg-zinc-950 rounded p-3">
                  <p className="text-white font-semibold mb-2">Key Automations:</p>
                  <ul className="text-gray-300 space-y-1 ml-4">
                    <li>• Abandoned cart recovery (3 emails)</li>
                    <li>• Post-purchase cross-sell</li>
                    <li>• VIP customer identification</li>
                    <li>• Review request automation</li>
                    <li>• Win-back campaigns for inactive</li>
                  </ul>
                </div>
                <div className="bg-zinc-950 rounded p-3">
                  <p className="text-white font-semibold mb-2">Expected Results:</p>
                  <ul className="text-gray-300 space-y-1 ml-4">
                    <li>• 15-20% cart recovery rate</li>
                    <li>• 25% increase in repeat purchases</li>
                    <li>• 40% more reviews</li>
                    <li>• 30% higher CLV for VIPs</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* B2B SaaS */}
            <div className="bg-zinc-800 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">2. B2B SaaS Sales CRM Workflow</h3>

              <div className="bg-zinc-950 rounded p-4 mb-4">
                <h4 className="text-white font-semibold mb-2">Workflow Overview:</h4>
                <pre className="text-sm text-gray-300">{`Free Trial Signup → Create Deal in Pipedrive
         ↓
  Track Product Usage (via API)
  - Features used
  - Login frequency
  - Team members invited
         ↓
  Calculate Product Qualified Lead (PQL) Score
         ↓
  High Usage (PQL > 70)?
    → Notify sales rep → Book demo call
  Low Usage (PQL < 30)?
    → Automated onboarding emails + in-app tutorials
         ↓
  Trial Day 7: Automatic check-in email
  Trial Day 14: Demo offer (if not booked)
  Trial Day 25: Upgrade offer (time-limited discount)
         ↓
  Trial Expires without Conversion?
    → Extended trial offer (7 more days)
    → If still no conversion → Nurture sequence`}</pre>
              </div>

              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="bg-zinc-950 rounded p-3">
                  <p className="text-white font-semibold mb-2">Key Automations:</p>
                  <ul className="text-gray-300 space-y-1 ml-4">
                    <li>• Usage-based lead scoring (PQL)</li>
                    <li>• Automated onboarding sequence</li>
                    <li>• Sales handoff triggers</li>
                    <li>• Churn risk detection</li>
                    <li>• Upsell opportunity identification</li>
                  </ul>
                </div>
                <div className="bg-zinc-950 rounded p-3">
                  <p className="text-white font-semibold mb-2">Expected Results:</p>
                  <ul className="text-gray-300 space-y-1 ml-4">
                    <li>• 30% trial-to-paid conversion</li>
                    <li>• 50% reduction in sales time</li>
                    <li>• 3x more qualified demos</li>
                    <li>• 20% faster deal velocity</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Service Business */}
            <div className="bg-zinc-800 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-green-400 mb-4">3. Service Business (Agency/Consulting) CRM Workflow</h3>

              <div className="bg-zinc-950 rounded p-4 mb-4">
                <h4 className="text-white font-semibold mb-2">Workflow Overview:</h4>
                <pre className="text-sm text-gray-300">{`Contact Form Submission → Create Lead in Salesforce
         ↓
  Enrich with LinkedIn Data (company size, industry, funding)
         ↓
  Route to Specialist:
  - Enterprise (>500 employees) → Senior Account Exec
  - Mid-Market (50-500) → Account Exec
  - SMB (<50) → Inside Sales
         ↓
  Qualification Call Scheduled (Calendly)
         ↓
  Post-Call: Send Proposal + Case Studies
         ↓
  Track Proposal Engagement:
  - Opened? → Follow-up email
  - Not opened after 48h? → Call reminder
  - Opened 3+ times? → Hot lead alert
         ↓
  Proposal Accepted → Create Project + Onboarding
         ↓
  During Project:
  - Weekly status update emails
  - Milestone completion notifications
  - Upsell opportunities flagged
         ↓
  Project Completion:
  - Request testimonial/review
  - Ask for referrals
  - Add to monthly newsletter
  - Identify renewal/expansion opportunities`}</pre>
              </div>

              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="bg-zinc-950 rounded p-3">
                  <p className="text-white font-semibold mb-2">Key Automations:</p>
                  <ul className="text-gray-300 space-y-1 ml-4">
                    <li>• Intelligent lead routing</li>
                    <li>• Proposal tracking & follow-up</li>
                    <li>• Project milestone automation</li>
                    <li>• Referral request workflows</li>
                    <li>• Renewal opportunity detection</li>
                  </ul>
                </div>
                <div className="bg-zinc-950 rounded p-3">
                  <p className="text-white font-semibold mb-2">Expected Results:</p>
                  <ul className="text-gray-300 space-y-1 ml-4">
                    <li>• 40% faster proposal response</li>
                    <li>• 25% higher close rate</li>
                    <li>• 50% more referrals</li>
                    <li>• 35% increase in upsells</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-spacing">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">❓ Frequently Asked Questions</h2>

          <div className="space-y-4">
            <div className="bg-zinc-900 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-3">Which CRM is easiest to integrate with N8N?</h3>
              <p className="text-gray-300">
                Pipedrive is the easiest - setup takes 5 minutes. HubSpot is close second. Salesforce requires more configuration but offers the most power for enterprise needs. All three have excellent N8N native nodes.
              </p>
            </div>

            <div className="bg-zinc-900 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-3">Can N8N replace my marketing automation tool?</h3>
              <p className="text-gray-300">
                For basic email sequences, yes. For advanced marketing automation (landing pages, A/B testing, complex segmentation), use N8N alongside tools like HubSpot or ActiveCampaign. N8N excels at connecting systems together.
              </p>
            </div>

            <div className="bg-zinc-900 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-3">How do I prevent duplicate leads in my CRM?</h3>
              <p className="text-gray-300">
                Always search by email before creating. Use N8N's "Merge" node to deduplicate. Implement a weekly cleanup workflow that finds and merges duplicates based on email, phone, or company name matching.
              </p>
            </div>

            <div className="bg-zinc-900 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-3">What's the best way to score leads?</h3>
              <p className="text-gray-300">
                Combine demographic scoring (job title, company size, industry) with behavioral scoring (email opens, page visits, content downloads). Update scores in real-time based on actions. Aim for 0-100 scale.
              </p>
            </div>

            <div className="bg-zinc-900 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-3">Can N8N handle large sales teams?</h3>
              <p className="text-gray-300">
                Yes! N8N scales to enterprise. For teams 10+, consider self-hosting for unlimited executions. Use load balancing for high-volume webhooks. Several companies automate CRM for 50+ sales reps with N8N.
              </p>
            </div>

            <div className="bg-zinc-900 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-3">How do I track ROI of my CRM automation?</h3>
              <p className="text-gray-300">
                Track: 1) Time saved (hours/week), 2) Lead response speed improvement, 3) Conversion rate increases, 4) Additional revenue from better follow-up, 5) Reduced lead leakage. Build a dashboard in Google Sheets tracking these metrics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Course CTA #2 */}
      <section className="section-spacing">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-green-600/20 via-blue-600/20 to-purple-600/20 rounded-2xl p-8 md:p-12 border border-green-500/30">
            <div className="text-center">
              <div className="inline-block bg-blue-500/10 border border-blue-500/30 rounded-full px-4 py-2 mb-4">
                <span className="text-blue-400 font-semibold text-sm">⚡ LIMITED TIME OFFER</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Build Your Automation Empire
              </h3>
              <p className="text-gray-300 mb-6 text-lg">
                Master CRM automation and save 15+ hours per week with our complete N8N training system
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400">$189</div>
                  <div className="text-sm text-gray-400">Full course access</div>
                </div>
                <div className="hidden sm:block text-gray-600">•</div>
                <div className="text-center">
                  <div className="text-xl text-gray-400"><span className="line-through">$5,959</span></div>
                  <div className="text-sm text-green-400 font-semibold">97% Off Today</div>
                </div>
              </div>
              <Link
                href="/automation-empire"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-all transform hover:scale-105"
              >
                Master CRM Automation Now
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <p className="text-gray-500 text-sm mt-4">
                ✓ 50+ automation workflows ✓ CRM integration guides ✓ JSON templates ✓ Lifetime updates
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="section-spacing bg-zinc-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">📚 Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/blog/n8n-beginners-guide" className="group bg-zinc-800 rounded-xl p-6 hover:bg-zinc-750 transition-all border border-zinc-700 hover:border-blue-500/50">
              <div className="text-blue-400 text-3xl mb-3">🚀</div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                N8N Beginner's Guide
              </h3>
              <p className="text-gray-400 text-sm mb-3">
                Start with the basics before diving into advanced CRM automation
              </p>
              <div className="text-blue-400 text-sm font-semibold flex items-center gap-2">
                Read More
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>

            <Link href="/blog/essential-n8n-workflows" className="group bg-zinc-800 rounded-xl p-6 hover:bg-zinc-750 transition-all border border-zinc-700 hover:border-green-500/50">
              <div className="text-green-400 text-3xl mb-3">⚡</div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                Essential N8N Workflows
              </h3>
              <p className="text-gray-400 text-sm mb-3">
                20+ must-have automation workflows for every business
              </p>
              <div className="text-green-400 text-sm font-semibold flex items-center gap-2">
                Read More
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>

            <Link href="/blog/email-marketing-automation-advanced-n8n-sequences" className="group bg-zinc-800 rounded-xl p-6 hover:bg-zinc-750 transition-all border border-zinc-700 hover:border-purple-500/50">
              <div className="text-purple-400 text-3xl mb-3">📧</div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                Advanced Email Automation
              </h3>
              <p className="text-gray-400 text-sm mb-3">
                Build sophisticated email sequences that convert
              </p>
              <div className="text-purple-400 text-sm font-semibold flex items-center gap-2">
                Read More
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing bg-gradient-to-b from-zinc-900 to-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Automate Your CRM & Close More Deals?
          </h2>

          <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
            Get complete CRM automation workflows for Pipedrive, HubSpot, and Salesforce. Save 15+ hours per week and close 28% more deals.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/automation-empire"
              className="cta-button inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-green-600 hover:from-blue-600 hover:to-green-700 transition-all"
            >
              Get CRM Automation Course
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>

            <Link
              href="/blog/n8n-beginners-guide"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-gray-600 text-white hover:bg-zinc-800 transition-all"
            >
              Start with N8N Basics
            </Link>
          </div>

          <p className="text-sm text-gray-500 mt-6">
            ✓ 4 Complete Workflows  ✓ JSON Templates  ✓ CRM Platform Guides  ✓ Lifetime Access
          </p>
        </div>
      </section>
    </div>
  )
}
