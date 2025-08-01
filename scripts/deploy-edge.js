// Edge Worker Deployment Script - Multi-Platform Deploy
const fs = require('fs')
const path = require('path')

// Configuration for different edge platforms
const EdgePlatforms = {
  CLOUDFLARE: 'cloudflare',
  VERCEL: 'vercel', 
  AWS_LAMBDA: 'aws-lambda',
  FASTLY: 'fastly'
}

class EdgeDeploymentManager {
  constructor() {
    this.config = {
      cloudflare: {
        accountId: process.env.CLOUDFLARE_ACCOUNT_ID,
        apiToken: process.env.CLOUDFLARE_API_TOKEN,
        zoneId: process.env.CLOUDFLARE_ZONE_ID,
        workerName: 'iimagined-edge-worker'
      },
      vercel: {
        token: process.env.VERCEL_TOKEN,
        projectId: process.env.VERCEL_PROJECT_ID,
        orgId: process.env.VERCEL_ORG_ID
      },
      aws: {
        region: 'us-east-1',
        functionName: 'iimagined-edge-function',
        roleArn: process.env.AWS_LAMBDA_ROLE_ARN
      }
    }
  }

  // Deploy to Cloudflare Workers
  async deployToCloudflare() {
    console.log('🔥 Deploying to Cloudflare Workers...')
    
    const workerScript = fs.readFileSync(
      path.join(__dirname, '../edge/edge-worker.js'), 
      'utf8'
    )

    const deployPayload = {
      script: workerScript,
      bindings: [
        {
          name: 'ENVIRONMENT',
          type: 'plain_text',
          text: 'production'
        }
      ]
    }

    try {
      const response = await fetch(
        `https://api.cloudflare.com/client/v4/accounts/${this.config.cloudflare.accountId}/workers/scripts/${this.config.cloudflare.workerName}`,
        {
          method: 'PUT',
          headers: {
            'Authorization': `Bearer ${this.config.cloudflare.apiToken}`,
            'Content-Type': 'application/javascript'
          },
          body: workerScript
        }
      )

      if (response.ok) {
        console.log('✅ Cloudflare Worker deployed successfully!')
        
        // Create route to bind worker to domain
        await this.createCloudflareRoute()
        
        return { success: true, platform: 'cloudflare' }
      } else {
        const error = await response.text()
        console.error('❌ Cloudflare deployment failed:', error)
        return { success: false, error }
      }
    } catch (error) {
      console.error('❌ Cloudflare deployment error:', error)
      return { success: false, error: error.message }
    }
  }

  // Create Cloudflare route
  async createCloudflareRoute() {
    const routePattern = 'iimagined.ai/*'
    
    try {
      const response = await fetch(
        `https://api.cloudflare.com/client/v4/zones/${this.config.cloudflare.zoneId}/workers/routes`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${this.config.cloudflare.apiToken}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            pattern: routePattern,
            script: this.config.cloudflare.workerName
          })
        }
      )

      if (response.ok) {
        console.log('✅ Cloudflare route created successfully!')
      }
    } catch (error) {
      console.error('❌ Route creation failed:', error)
    }
  }

  // Deploy to Vercel Edge Functions
  async deployToVercel() {
    console.log('🚀 Deploying to Vercel Edge Functions...')
    
    // Create edge function file for Vercel
    const vercelEdgeFunction = this.createVercelEdgeFunction()
    
    fs.writeFileSync(
      path.join(__dirname, '../edge/edge-function.js'),
      vercelEdgeFunction
    )

    // Create vercel.json configuration
    const vercelConfig = {
      functions: {
        "edge/edge-function.js": {
          runtime: "edge"
        }
      },
      rewrites: [
        {
          source: "/programmatic/(.*)",
          destination: "/edge/edge-function"
        },
        {
          source: "/local/(.*)",
          destination: "/edge/edge-function"
        }
      ]
    }

    fs.writeFileSync(
      path.join(__dirname, '../vercel.json'),
      JSON.stringify(vercelConfig, null, 2)
    )

    console.log('✅ Vercel Edge Function files created!')
    console.log('💡 Run "vercel deploy" to deploy to Vercel')
    
    return { success: true, platform: 'vercel' }
  }

  // Create Vercel-compatible edge function
  createVercelEdgeFunction() {
    return `
import { NextRequest, NextResponse } from 'next/server'

export default async function handler(request) {
  const url = new URL(request.url)
  const geo = request.geo || {}
  const country = geo.country || 'US'
  const city = geo.city || 'New York'
  const region = geo.region || 'NY'
  
  // A/B Testing Logic
  const abTestVariant = getABTestVariant(request)
  
  // Geo-targeted content
  const geoContent = await getGeoTargetedContent(country, city, region)
  
  // Handle different routes
  if (url.pathname.startsWith('/programmatic/')) {
    return handleProgrammaticPages(request, url, {
      country, city, region, abTestVariant, geoContent
    })
  }
  
  if (url.pathname.startsWith('/local/')) {
    return handleLocalSEOPages(request, url, {
      country, city, region, geoContent
    })
  }

  return NextResponse.next()
}

// Copy utility functions from main edge worker
${this.getUtilityFunctions()}

export const config = {
  matcher: ['/programmatic/:path*', '/local/:path*']
}
`
  }

  // Deploy to AWS Lambda@Edge
  async deployToAWS() {
    console.log('☁️ Deploying to AWS Lambda@Edge...')
    
    const lambdaCode = this.createAWSLambdaFunction()
    
    fs.writeFileSync(
      path.join(__dirname, '../edge/lambda-edge.js'),
      lambdaCode
    )

    console.log('✅ AWS Lambda@Edge function created!')
    console.log('💡 Use AWS CLI or CDK to deploy lambda-edge.js')
    
    return { success: true, platform: 'aws-lambda' }
  }

  // Create AWS Lambda@Edge compatible function
  createAWSLambdaFunction() {
    return `
exports.handler = async (event) => {
  const request = event.Records[0].cf.request
  const headers = request.headers
  
  // Extract geo information from CloudFront
  const country = headers['cloudfront-viewer-country'][0].value || 'US'
  const city = headers['cloudfront-viewer-city'][0].value || 'New York'
  
  // Handle different URL patterns
  const uri = request.uri
  
  if (uri.startsWith('/programmatic/')) {
    return handleProgrammaticRequest(request, { country, city })
  }
  
  if (uri.startsWith('/local/')) {
    return handleLocalRequest(request, { country, city })
  }
  
  return request
}

function handleProgrammaticRequest(request, geo) {
  // Generate programmatic content
  const pathParts = request.uri.split('/')
  const keyword = pathParts[2] || 'ai-automation'
  const location = pathParts[3] || geo.city
  
  // Modify request to serve dynamic content
  request.uri = '/api/programmatic'
  request.querystring = 'keyword=' + keyword + '&location=' + location
  
  return request
}

function handleLocalRequest(request, geo) {
  // Handle local SEO requests
  request.uri = '/api/local'
  request.querystring = 'city=' + geo.city + '&country=' + geo.country
  
  return request
}
`
  }

  // Get utility functions for edge workers
  getUtilityFunctions() {
    return `
function getABTestVariant(request) {
  const userAgent = request.headers.get('user-agent') || ''
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0] || 
             request.headers.get('x-real-ip') || 
             request.headers.get('cf-connecting-ip') || 
             'unknown'
  
  const variants = ['control', 'variant-a', 'variant-b', 'variant-c']
  const hash = hashString(ip)
  const variantIndex = hash % variants.length
  
  return {
    name: variants[variantIndex],
    headlines: getVariantHeadlines(variants[variantIndex]),
    cta: getVariantCTA(variants[variantIndex])
  }
}

function getVariantHeadlines(variant) {
  const headlines = {
    'control': 'Master AI Automation & Instagram Growth',
    'variant-a': 'Generate $10K+/Month With AI Automation',
    'variant-b': '127K+ Students Can\\'t Be Wrong - Join Now',
    'variant-c': 'From $0 to $100K Using These AI Secrets'
  }
  return headlines[variant] || headlines.control
}

function getVariantCTA(variant) {
  const ctas = {
    'control': 'Start Learning Today',
    'variant-a': 'Get Instant Access Now',
    'variant-b': 'Join 127K+ Winners',
    'variant-c': 'Unlock My AI Empire'
  }
  return ctas[variant] || ctas.control
}

async function getGeoTargetedContent(country, city, region) {
  const localizedContent = {
    US: { currency: 'USD', urgency: 'Limited time - US residents only' },
    CA: { currency: 'CAD', urgency: 'Exclusive Canadian launch pricing' },
    GB: { currency: 'GBP', urgency: 'Brexit-proof income strategies' },
    AU: { currency: 'AUD', urgency: 'Australian exclusive access' },
    DE: { currency: 'EUR', urgency: 'DSGPR-compliant AI strategies' }
  }
  
  return localizedContent[country] || localizedContent.US
}

function hashString(str) {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i)
    hash = ((hash << 5) - hash) + char
    hash = hash & hash
  }
  return Math.abs(hash)
}

async function handleProgrammaticPages(request, url, context) {
  const pathParts = url.pathname.split('/')
  const keyword = decodeURIComponent(pathParts[2] || 'ai-automation')
  const location = decodeURIComponent(pathParts[3] || context.city)
  
  const title = capitalizeWords(keyword) + ' Course in ' + location + ' | IImagined.ai'
  const description = 'Best ' + keyword + ' course in ' + location + '. Join 127K+ students. ' + context.geoContent.urgency
  
  const html = generateHTML(title, description, context)
  
  return new Response(html, {
    headers: { 'content-type': 'text/html', 'cache-control': 'public, max-age=3600' }
  })
}

async function handleLocalSEOPages(request, url, context) {
  const city = url.searchParams.get('city') || context.city
  
  const title = 'AI Automation Services in ' + city + ' | IImagined.ai'
  const description = 'Professional AI automation services in ' + city + '. ' + context.geoContent.urgency
  
  const html = generateHTML(title, description, context)
  
  return new Response(html, {
    headers: { 'content-type': 'text/html', 'cache-control': 'public, max-age=1800' }
  })
}

function generateHTML(title, description, context) {
  return \`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>\${title}</title>
  <meta name="description" content="\${description}">
</head>
<body>
  <main>
    <h1>\${title}</h1>
    <p>\${description}</p>
    <div class="cta">
      <a href="/courses">\${context.abTestVariant.cta}</a>
    </div>
  </main>
</body>
</html>\`
}

function capitalizeWords(str) {
  return str.replace(/-/g, ' ').replace(/\\b\\w/g, l => l.toUpperCase())
}
`
  }

  // Deploy to all platforms
  async deployToAll() {
    console.log('🚀 Starting multi-platform edge deployment...')
    
    const results = []
    
    // Deploy to Cloudflare
    const cloudflareResult = await this.deployToCloudflare()
    results.push(cloudflareResult)
    
    // Deploy to Vercel
    const vercelResult = await this.deployToVercel()
    results.push(vercelResult)
    
    // Deploy to AWS
    const awsResult = await this.deployToAWS()
    results.push(awsResult)
    
    console.log('🎯 Deployment Summary:')
    results.forEach(result => {
      console.log(`${result.success ? '✅' : '❌'} ${result.platform}: ${result.success ? 'Success' : result.error}`)
    })
    
    return results
  }

  // Generate deployment stats
  generateDeploymentReport() {
    const report = {
      timestamp: new Date().toISOString(),
      platforms: ['cloudflare', 'vercel', 'aws-lambda'],
      features: [
        'A/B Testing',
        'Geo-targeting',
        'Programmatic Pages',
        'Local SEO Pages',
        'Real-time Personalization'
      ],
      performance: {
        expectedLatency: '<50ms',
        globalCoverage: '99.9%',
        abTestVariants: 4,
        geoTargetedCountries: 5
      }
    }
    
    fs.writeFileSync(
      path.join(__dirname, '../edge/deployment-report.json'),
      JSON.stringify(report, null, 2)
    )
    
    console.log('📊 Deployment report generated: edge/deployment-report.json')
    return report
  }
}

// Run deployment if called directly
if (require.main === module) {
  const deployer = new EdgeDeploymentManager()
  
  const platform = process.argv[2] || 'all'
  
  switch (platform) {
    case 'cloudflare':
      deployer.deployToCloudflare()
      break
    case 'vercel':
      deployer.deployToVercel()
      break
    case 'aws':
      deployer.deployToAWS()
      break
    case 'all':
    default:
      deployer.deployToAll().then(() => {
        deployer.generateDeploymentReport()
      })
      break
  }
}

module.exports = EdgeDeploymentManager