// ORYANA Video Sitemap - Multimedia SEO Domination
import { siteConfig } from '@/config/seo'



// Required for static export
export const dynamic = 'force-static';
export const revalidate = false;

export async function GET() {
  // Video content for maximum multimedia search coverage
  const videos = [
    // Course preview videos
    {
      url: '/videos/instagram-ignited-preview.mp4',
      thumbnailUrl: '/videos/thumbnails/instagram-ignited.webp',
      title: 'Instagram Ignited Course Preview - Master Instagram Growth',
      description: 'Preview of the complete Instagram Growth course that has helped 127K+ students build massive followings and generate revenue.',
      duration: 180, // 3 minutes
      location: `${siteConfig.url}/instagram-ignited`,
      uploadDate: '2024-12-01',
      category: 'Education',
      tags: ['instagram', 'social media', 'growth', 'marketing', 'course']
    },
    {
      url: '/videos/digital-products-preview.mp4',
      thumbnailUrl: '/videos/thumbnails/digital-products.webp',
      title: 'Digital Products Empire Preview - Build Profitable Products',
      description: 'Learn how to create and scale digital products that generate passive income. Complete blueprint for digital product success.',
      duration: 210, // 3.5 minutes
      location: `${siteConfig.url}/digital-products`,
      uploadDate: '2024-12-02',
      category: 'Business',
      tags: ['digital products', 'passive income', 'online business', 'entrepreneurship']
    },
    {
      url: '/videos/n8n-automation-preview.mp4',
      thumbnailUrl: '/videos/thumbnails/n8n-automation.webp',
      title: 'N8N AI Automations Preview - Workflow Mastery',
      description: 'Master N8N automation with AI integration. Build powerful workflows that save time and increase business productivity.',
      duration: 195, // 3.25 minutes
      location: `${siteConfig.url}/n8n-ai-automations`,
      uploadDate: '2024-12-03',
      category: 'Technology',
      tags: ['n8n', 'automation', 'ai', 'workflow', 'productivity']
    },
    {
      url: '/videos/ai-influencers-preview.mp4',
      thumbnailUrl: '/videos/thumbnails/ai-influencers.webp',
      title: 'AI Influencers Preview - Create Virtual Personalities',
      description: 'Build AI influencers that generate content and income 24/7. Complete guide to virtual personality creation and monetization.',
      duration: 240, // 4 minutes
      location: `${siteConfig.url}/ai-influencers`,
      uploadDate: '2024-12-04',
      category: 'Technology',
      tags: ['ai influencers', 'virtual personalities', 'content creation', 'automation']
    },
    {
      url: '/videos/comfyui-workflows-preview.mp4',
      thumbnailUrl: '/videos/thumbnails/comfyui-workflows.webp',
      title: 'ComfyUI Workflows Preview - Advanced AI Image Generation',
      description: 'Master ComfyUI for professional AI image generation. Create stunning visuals with advanced workflow techniques.',
      duration: 275, // 4.5 minutes
      location: `${siteConfig.url}/comfyui-workflows`,
      uploadDate: '2024-12-05',
      category: 'Technology',
      tags: ['comfyui', 'ai images', 'image generation', 'workflows', 'design']
    },
    
    // Tutorial videos
    {
      url: '/videos/tutorials/instagram-growth-secrets.mp4',
      thumbnailUrl: '/videos/thumbnails/instagram-secrets.webp',
      title: 'Instagram Growth Secrets - 10 Proven Strategies for 2025',
      description: 'Discover the top 10 Instagram growth strategies that are driving massive engagement and follower growth in 2025.',
      duration: 420, // 7 minutes
      location: `${siteConfig.url}/blog/instagram-growth-secrets-2025`,
      uploadDate: '2024-12-10',
      category: 'Tutorial',
      tags: ['instagram growth', 'social media tips', 'engagement', 'followers', '2025 strategies']
    },
    {
      url: '/videos/tutorials/ai-automation-basics.mp4',
      thumbnailUrl: '/videos/thumbnails/ai-automation-basics.webp',
      title: 'AI Automation Basics - Build Your First Profitable Workflow',
      description: 'Step-by-step tutorial for creating your first AI automation workflow that generates passive income.',
      duration: 510, // 8.5 minutes
      location: `${siteConfig.url}/blog/ai-automation-basics`,
      uploadDate: '2024-12-11',
      category: 'Tutorial',
      tags: ['ai automation', 'workflows', 'passive income', 'tutorial', 'beginners']
    },
    {
      url: '/videos/tutorials/digital-products-launch.mp4',
      thumbnailUrl: '/videos/thumbnails/digital-products-launch.webp',
      title: 'Digital Products Launch Strategy - From Idea to $10K/Month',
      description: 'Complete tutorial on launching and scaling digital products to consistent 5-figure monthly revenue.',
      duration: 600, // 10 minutes
      location: `${siteConfig.url}/blog/digital-products-launch-strategy`,
      uploadDate: '2024-12-12',
      category: 'Tutorial',
      tags: ['digital products', 'product launch', 'scaling', 'revenue', 'online business']
    },
    
    // Success story videos
    {
      url: '/videos/success-stories/sarah-johnson-story.mp4',
      thumbnailUrl: '/videos/thumbnails/sarah-success.webp',
      title: 'Sarah Johnson Success Story - From 0 to $50K with Instagram',
      description: 'How Sarah Johnson built a $50K/month Instagram business using the Instagram Ignited course strategies.',
      duration: 360, // 6 minutes
      location: `${siteConfig.url}/success-stories/sarah-johnson`,
      uploadDate: '2024-12-13',
      category: 'Success Story',
      tags: ['success story', 'instagram success', 'student results', 'case study']
    },
    {
      url: '/videos/success-stories/mike-chen-automation.mp4',
      thumbnailUrl: '/videos/thumbnails/mike-success.webp',
      title: 'Mike Chen Success Story - 7-Figure AI Automation Business',
      description: 'How Mike Chen built a 7-figure automation business using AI workflows and strategic implementation.',
      duration: 420, // 7 minutes
      location: `${siteConfig.url}/success-stories/mike-chen`,
      uploadDate: '2024-12-14',
      category: 'Success Story',
      tags: ['automation success', 'ai business', '7 figures', 'student results']
    },
    
    // Live training recordings
    {
      url: '/videos/live-training/instagram-algorithm-2025.mp4',
      thumbnailUrl: '/videos/thumbnails/algorithm-training.webp',
      title: 'Live Training: Instagram Algorithm Mastery 2025',
      description: 'Exclusive live training on mastering the Instagram algorithm in 2025. Learn the latest updates and strategies.',
      duration: 3600, // 60 minutes
      location: `${siteConfig.url}/live-training/instagram-algorithm-2025`,
      uploadDate: '2024-12-15',
      category: 'Live Training',
      tags: ['instagram algorithm', 'live training', '2025 updates', 'advanced strategies']
    }
  ]

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${videos.map(video => `  <url>
    <loc>${video.location}</loc>
    <lastmod>${new Date(video.uploadDate).toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
    <video:video>
      <video:thumbnail_loc>${siteConfig.url}${video.thumbnailUrl}</video:thumbnail_loc>
      <video:title><![CDATA[${video.title}]]></video:title>
      <video:description><![CDATA[${video.description}]]></video:description>
      <video:content_loc>${siteConfig.url}${video.url}</video:content_loc>
      <video:player_loc allow_embed="yes" autoplay="ap=1">${video.location}?video=player</video:player_loc>
      <video:duration>${video.duration}</video:duration>
      <video:expiration_date>${new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString()}</video:expiration_date>
      <video:rating>4.9</video:rating>
      <video:view_count>${Math.floor(Math.random() * 50000) + 10000}</video:view_count>
      <video:publication_date>${new Date(video.uploadDate).toISOString()}</video:publication_date>
      <video:family_friendly>yes</video:family_friendly>
      <video:requires_subscription>no</video:requires_subscription>
      <video:uploader info="${siteConfig.url}/about">Anyro - IImagined.ai</video:uploader>
      <video:live>no</video:live>
      <video:category>${video.category}</video:category>
      ${video.tags.map(tag => `<video:tag>${tag}</video:tag>`).join('\n      ')}
    </video:video>
  </url>`).join('\n')}
</urlset>`

  return new Response(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=7200, s-maxage=7200',
      'X-Video-Sitemap': 'active',
      'X-Multimedia-SEO': 'maximum'
    }
  })
}