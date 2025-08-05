import { siteConfig } from '@/config/seo'



// Required for static export
export const dynamic = 'force-static';
export const revalidate = false;

export async function GET() {
  // Latest AI-focused articles for news sitemap
  const newsArticles = [
    { slug: 'claude-4-agentic-coding-revolution', title: 'Claude 4 Agentic Coding Revolution: The Future of AI Development', date: '2025-01-15' },
    { slug: 'gemini-2-pro-bolt-diy-full-stack-revolution', title: 'Gemini 2 Pro Bolt DIY Full Stack Revolution', date: '2025-01-14' },
    { slug: 'deepseek-r1-open-source-ai-revolution', title: 'DeepSeek R1 Open Source AI Revolution', date: '2025-01-13' },
    { slug: 'gpt-4-1-vs-claude-sonnet-3-7-comparison', title: 'GPT-4.1 vs Claude Sonnet 3.7: Ultimate AI Comparison', date: '2025-01-12' },
    { slug: 'llama-4-open-source-ai-powerhouse', title: 'LLaMA 4: The Open Source AI Powerhouse', date: '2025-01-11' },
    { slug: 'manus-ai-general-automation-agent', title: 'Manus AI: The General Automation Agent Revolution', date: '2025-01-10' },
    { slug: 'vectorize-all-in-one-rag-platform', title: 'Vectorize: All-in-One RAG Platform for Enterprise AI', date: '2025-01-09' },
    { slug: 'roocode-v3-3-cline-alternative', title: 'RooCode v3.3: The Ultimate Cline Alternative', date: '2025-01-08' },
    { slug: 'qwen-3-alibaba-open-source-llm', title: 'Qwen 3: Alibaba\'s Revolutionary Open Source LLM', date: '2025-01-07' },
    { slug: 'deepseek-janus-pro-7b-multimodal-ai-revolution', title: 'DeepSeek Janus Pro 7B: Multimodal AI Revolution', date: '2025-01-06' },
  ]
  
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
  ${newsArticles.map(article => `
  <url>
    <loc>${siteConfig.url}/blog/${article.slug}</loc>
    <lastmod>${new Date(article.date).toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
    <news:news>
      <news:publication>
        <news:name>IImagined - AI Automation & Digital Products</news:name>
        <news:language>en</news:language>
      </news:publication>
      <news:publication_date>${new Date(article.date).toISOString()}</news:publication_date>
      <news:title>${article.title}</news:title>
      <news:keywords>AI, automation, artificial intelligence, machine learning, digital products, content creation</news:keywords>
    </news:news>
  </url>
  `).join('')}
</urlset>`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=1800' // 30 minutes cache for news
    }
  })
}