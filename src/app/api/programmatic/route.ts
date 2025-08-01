// Programmatic Page API Handler - Dynamic Content Generation
import { NextRequest, NextResponse } from 'next/server'
import { programmaticFactory } from '@/lib/programmatic-factory'
import { getGeoData, getABTestVariant } from '@/edge/utils'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  
  const keyword = searchParams.get('keyword') || 'ai-automation'
  const location = searchParams.get('location') || 'new-york'
  const modifier = searchParams.get('modifier') || 'course'
  
  try {
    // Generate programmatic page content
    const variables = { keyword, location, modifier }
    const page = programmaticFactory.generatePage('keyword-city', variables, {
      priority: 0.8,
      includeSchema: true
    })
    
    // Get user context for personalization
    const geoData = getGeoData(request)
    const abVariant = getABTestVariant(request)
    
    // Generate complete HTML page
    const html = generateProgrammaticHTML(page, {
      geoData,
      abVariant,
      keyword,
      location,
      modifier
    })
    
    return new NextResponse(html, {
      headers: {
        'Content-Type': 'text/html',
        'Cache-Control': 'public, max-age=3600, stale-while-revalidate=1800',
        'X-Programmatic': 'true',
        'X-Generated': new Date().toISOString()
      }
    })
    
  } catch (error) {
    console.error('Programmatic page generation error:', error)
    
    return NextResponse.json(
      { error: 'Failed to generate programmatic page' },
      { status: 500 }
    )
  }
}

function generateProgrammaticHTML(page: any, context: any) {
  const { geoData, abVariant, keyword, location, modifier } = context
  
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${page.title}</title>
  <meta name="description" content="${page.description}">
  <meta name="keywords" content="${page.keywords.join(', ')}">
  <link rel="canonical" href="${page.meta.canonical}">
  <meta name="robots" content="${page.meta.robots}">
  
  <!-- Open Graph -->
  <meta property="og:title" content="${page.title}">
  <meta property="og:description" content="${page.description}">
  <meta property="og:type" content="website">
  <meta property="og:url" content="${page.meta.canonical}">
  <meta property="og:image" content="https://iimagined.ai/og-programmatic.jpg">
  
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${page.title}">
  <meta name="twitter:description" content="${page.description}">
  <meta name="twitter:image" content="https://iimagined.ai/og-programmatic.jpg">
  
  <!-- Structured Data -->
  <script type="application/ld+json">
    ${JSON.stringify(page.schema)}
  </script>
  
  <!-- Critical CSS -->
  <style>
    body { 
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      line-height: 1.6; 
      margin: 0; 
      padding: 0; 
      background: #0f1114;
      color: #f1f5f9;
    }
    .container { 
      max-width: 1200px; 
      margin: 0 auto; 
      padding: 0 20px; 
    }
    .hero { 
      background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
      padding: 80px 0; 
      text-align: center; 
    }
    .hero h1 { 
      font-size: 3rem; 
      margin-bottom: 20px; 
      color: #f1f5f9;
      font-weight: 700;
    }
    .hero p { 
      font-size: 1.25rem; 
      margin-bottom: 30px; 
      color: #cbd5e1;
    }
    .cta-button { 
      display: inline-block;
      background: #3b82f6; 
      color: white; 
      padding: 15px 30px; 
      text-decoration: none; 
      border-radius: 8px;
      font-weight: 600;
      font-size: 1.1rem;
      transition: all 0.3s ease;
    }
    .cta-button:hover { 
      background: #2563eb;
      transform: translateY(-2px);
    }
    .content { 
      padding: 60px 0; 
    }
    .content h2 { 
      font-size: 2.5rem; 
      margin-bottom: 30px; 
      color: #f1f5f9;
    }
    .content p { 
      font-size: 1.1rem; 
      margin-bottom: 20px; 
      color: #cbd5e1;
    }
    .features {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 30px;
      margin: 40px 0;
    }
    .feature {
      background: #1e293b;
      padding: 30px;
      border-radius: 10px;
      border: 1px solid #334155;
    }
    .feature h3 {
      color: #3b82f6;
      margin-bottom: 15px;
      font-size: 1.3rem;
    }
    .testimonial {
      background: #1e293b;
      padding: 30px;
      border-radius: 10px;
      margin: 30px 0;
      border-left: 4px solid #3b82f6;
    }
    .urgency {
      background: #dc2626;
      color: white;
      padding: 15px;
      text-align: center;
      border-radius: 8px;
      margin: 30px 0;
      font-weight: 600;
    }
    @media (max-width: 768px) {
      .hero h1 { font-size: 2rem; }
      .content h2 { font-size: 2rem; }
    }
  </style>
  
  <!-- Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
    
    // Track programmatic page view
    gtag('event', 'programmatic_page_view', {
      event_category: 'Programmatic',
      keyword: '${keyword}',
      location: '${location}',
      modifier: '${modifier}',
      ab_variant: '${abVariant.name}',
      country: '${geoData.country}'
    });
  </script>
</head>
<body>
  <!-- Hero Section -->
  <section class="hero">
    <div class="container">
      <h1>${page.h1}</h1>
      <p>${page.description}</p>
      <div class="urgency">
        🔥 Limited Time: ${location.replace('-', ' ').toUpperCase()} residents get exclusive access!
      </div>
      <a href="/courses?utm_source=programmatic&utm_campaign=${keyword}-${location}" class="cta-button">
        ${abVariant.cta}
      </a>
    </div>
  </section>
  
  <!-- Main Content -->
  <section class="content">
    <div class="container">
      <h2>Why Choose Our ${keyword.replace('-', ' ')} Training in ${location.replace('-', ' ')}?</h2>
      
      <div class="features">
        <div class="feature">
          <h3>🎯 Location-Specific Strategies</h3>
          <p>Our ${keyword.replace('-', ' ')} methods are specifically tailored for ${location.replace('-', ' ')} market conditions and regulations.</p>
        </div>
        
        <div class="feature">
          <h3>⚡ Proven Results</h3>
          <p>Join 127K+ entrepreneurs worldwide who have transformed their businesses using our battle-tested strategies.</p>
        </div>
        
        <div class="feature">
          <h3>🚀 Fast Implementation</h3>
          <p>Start seeing results within 7-14 days with our step-by-step ${keyword.replace('-', ' ')} blueprint.</p>
        </div>
        
        <div class="feature">
          <h3>💰 Revenue Focus</h3>
          <p>Every strategy is designed to generate real revenue, not just vanity metrics or theoretical knowledge.</p>
        </div>
        
        <div class="feature">
          <h3>🛡️ Risk-Free Guarantee</h3>
          <p>30-day money-back guarantee. If you don't see results, we'll refund every penny.</p>
        </div>
        
        <div class="feature">
          <h3>🤝 Local Support</h3>
          <p>Get dedicated support from our team who understands the ${location.replace('-', ' ')} business landscape.</p>
        </div>
      </div>
      
      <div class="content">
        ${page.content.split('\n\n').map((paragraph: string) => `<p>${paragraph}</p>`).join('')}
      </div>
      
      <div class="testimonial">
        <p>"I was skeptical about online courses, but this ${keyword.replace('-', ' ')} training completely changed my business in ${location.replace('-', ' ')}. I went from struggling to make ends meet to generating $15K monthly in just 4 months!"</p>
        <strong>- Sarah M., ${location.replace('-', ' ')} Entrepreneur</strong>
      </div>
      
      <div class="testimonial">
        <p>"The strategies work perfectly for the ${location.replace('-', ' ')} market. I've tried other courses before, but none understood the local dynamics like this one does."</p>
        <strong>- Mike D., ${location.replace('-', ' ')} Business Owner</strong>
      </div>
      
      <h2>Ready to Transform Your Business in ${location.replace('-', ' ')}?</h2>
      <p>Don't let your competitors get ahead. Join thousands of successful entrepreneurs who have mastered ${keyword.replace('-', ' ')} and built thriving businesses.</p>
      
      <div style="text-align: center; margin: 40px 0;">
        <a href="/courses?utm_source=programmatic&utm_campaign=${keyword}-${location}" class="cta-button">
          Get Started Today - ${abVariant.cta}
        </a>
      </div>
      
      <div class="urgency">
        ⏰ Special ${location.replace('-', ' ')} Launch Pricing: Save $300 (Limited Time Only)
      </div>
    </div>
  </section>
  
  <!-- FAQ Section -->
  <section style="background: #1e293b; padding: 60px 0;">
    <div class="container">
      <h2 style="text-align: center; margin-bottom: 40px;">Frequently Asked Questions</h2>
      
      <div style="max-width: 800px; margin: 0 auto;">
        <div class="feature" style="margin-bottom: 20px;">
          <h3>How quickly can I see results with ${keyword.replace('-', ' ')} in ${location.replace('-', ' ')}?</h3>
          <p>Most ${location.replace('-', ' ')} students see initial results within 7-14 days. Full transformation typically occurs within 90 days when following our proven system.</p>
        </div>
        
        <div class="feature" style="margin-bottom: 20px;">
          <h3>Is this ${keyword.replace('-', ' ')} course suitable for beginners in ${location.replace('-', ' ')}?</h3>
          <p>Absolutely! Our course is designed for all skill levels. We start with basics and gradually build up to advanced strategies, perfect for ${location.replace('-', ' ')} entrepreneurs at any stage.</p>
        </div>
        
        <div class="feature" style="margin-bottom: 20px;">
          <h3>Do you provide support for ${location.replace('-', ' ')} specific challenges?</h3>
          <p>Yes! We have dedicated support team members familiar with the ${location.replace('-', ' ')} market who can help you navigate local challenges and opportunities.</p>
        </div>
        
        <div class="feature">
          <h3>What makes this different from other ${keyword.replace('-', ' ')} courses?</h3>
          <p>Our course is specifically optimized for markets like ${location.replace('-', ' ')}, with real case studies and strategies that work in your local environment. Plus, our 127K+ student community provides ongoing support.</p>
        </div>
      </div>
    </div>
  </section>
  
  <!-- Final CTA -->
  <section style="background: #0f172a; padding: 80px 0; text-align: center;">
    <div class="container">
      <h2>Join ${location.replace('-', ' ')} Entrepreneurs Who Are Already Winning</h2>
      <p style="font-size: 1.2rem; margin-bottom: 30px;">Don't wait for tomorrow. Your ${keyword.replace('-', ' ')} transformation starts today.</p>
      <a href="/courses?utm_source=programmatic&utm_campaign=${keyword}-${location}" class="cta-button" style="font-size: 1.2rem; padding: 20px 40px;">
        ${abVariant.cta} - Get Instant Access
      </a>
      <p style="margin-top: 20px; color: #94a3b8;">30-day money-back guarantee • Instant access • 24/7 support</p>
    </div>
  </section>
  
  <!-- Tracking Scripts -->
  <script>
    // Track scroll depth
    let maxScroll = 0;
    window.addEventListener('scroll', () => {
      const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
      if (scrollPercent > maxScroll) {
        maxScroll = scrollPercent;
        if (maxScroll === 25 || maxScroll === 50 || maxScroll === 75 || maxScroll === 100) {
          gtag('event', 'scroll_depth', {
            event_category: 'Engagement',
            value: maxScroll,
            keyword: '${keyword}',
            location: '${location}'
          });
        }
      }
    });
    
    // Track CTA clicks
    document.querySelectorAll('.cta-button').forEach(button => {
      button.addEventListener('click', () => {
        gtag('event', 'cta_click', {
          event_category: 'Conversion',
          keyword: '${keyword}',
          location: '${location}',
          ab_variant: '${abVariant.name}'
        });
      });
    });
  </script>
</body>
</html>`
}