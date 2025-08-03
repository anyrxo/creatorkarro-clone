#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Revolutionary comment system with GENIUS variation per post
// Each post gets completely unique comment personalities and content

// Human archetypes with distinct communication DNA
const humanArchetypes = {
  // Tech professionals with different specialties
  senior_dev: {
    patterns: ['solid implementation', 'scalable approach', 'production concerns', 'edge cases', 'performance implications'],
    style: 'technical depth with real-world experience',
    vocabulary: ['architecture', 'implementation', 'scalability', 'performance', 'production'],
    personality: 'experienced, helpful, slightly pedantic'
  },
  
  startup_founder: {
    patterns: ['business impact', 'market opportunity', 'mvp approach', 'customer validation', 'growth metrics'],
    style: 'business-focused with urgency and vision',
    vocabulary: ['traction', 'product-market fit', 'metrics', 'scaling', 'validation'],
    personality: 'ambitious, data-driven, fast-moving'
  },
  
  indie_hacker: {
    patterns: ['bootstrapping', 'solo building', 'revenue generation', 'side projects', 'passive income'],
    style: 'scrappy entrepreneur mindset',
    vocabulary: ['bootstrapped', 'mvp', 'revenue', 'indie', 'side hustle'],
    personality: 'resourceful, optimistic, community-focused'
  },

  // Content creators with platform expertise
  youtube_creator: {
    patterns: ['content strategy', 'audience retention', 'monetization', 'algorithm optimization', 'creator economy'],
    style: 'content creation with platform knowledge',
    vocabulary: ['subscribers', 'retention', 'thumbnails', 'algorithm', 'monetization'],
    personality: 'creative, analytical about content performance'
  },

  tiktok_native: {
    patterns: ['viral content', 'trends', 'short-form strategy', 'gen-z marketing', 'algorithm hacks'],
    style: 'trend-aware, fast-paced content thinking',
    vocabulary: ['viral', 'trending', 'fyp', 'algorithm', 'content'],
    personality: 'trend-conscious, quick-moving, platform-native'
  },

  // Marketing specialists
  growth_marketer: {
    patterns: ['funnel optimization', 'conversion rates', 'a/b testing', 'user acquisition', 'retention'],
    style: 'data-driven marketing with growth focus',
    vocabulary: ['conversion', 'funnel', 'acquisition', 'retention', 'optimization'],
    personality: 'analytical, experiment-driven, results-focused'
  },

  // Technical specialists  
  ai_researcher: {
    patterns: ['model performance', 'training data', 'evaluation metrics', 'research implications', 'technical limitations'],
    style: 'deep technical AI knowledge with research background',
    vocabulary: ['model', 'training', 'inference', 'evaluation', 'research'],
    personality: 'academically-minded, precise, cautious about claims'
  },

  automation_expert: {
    patterns: ['workflow optimization', 'tool integration', 'efficiency gains', 'process automation', 'productivity'],
    style: 'systems thinking with practical automation experience',
    vocabulary: ['workflow', 'automation', 'integration', 'efficiency', 'productivity'],
    personality: 'systematic, efficiency-focused, tool-savvy'
  },

  // Business roles
  digital_marketer: {
    patterns: ['campaign performance', 'audience targeting', 'content strategy', 'brand building', 'roi optimization'],
    style: 'marketing professional with campaign experience',
    vocabulary: ['campaigns', 'targeting', 'roi', 'brand', 'strategy'],
    personality: 'strategic, brand-conscious, performance-driven'
  },

  // Regular users with different backgrounds
  college_student: {
    patterns: ['learning resources', 'skill building', 'career preparation', 'budget constraints', 'future planning'],
    style: 'eager to learn, resource-conscious, future-focused',
    vocabulary: ['learning', 'skills', 'career', 'budget', 'future'],
    personality: 'curious, optimistic, resource-conscious'
  },

  frustrated_marketer: {
    patterns: ['past failures', 'tool limitations', 'budget constraints', 'skepticism', 'cautious optimism'],
    style: 'experienced but cynical from past disappointments',
    vocabulary: ['tried before', 'failed', 'skeptical', 'cautious', 'realistic'],
    personality: 'skeptical, experienced, wants proof'
  },

  // Power users
  agency_owner: {
    patterns: ['client results', 'scaling operations', 'team management', 'service delivery', 'profit margins'],
    style: 'business operator focused on client success',
    vocabulary: ['clients', 'scaling', 'operations', 'delivery', 'margins'],
    personality: 'business-focused, client-centric, operationally-minded'
  }
};

// Genius comment generation based on post content analysis
function generateGeniusCommentForPost(post, archetype, context) {
  const human = humanArchetypes[archetype];
  
  // Extract key elements from the post
  const postAnalysis = analyzePostContent(post);
  
  // Create comment based on human archetype + post content
  const comment = craftGeniusComment(postAnalysis, human, context);
  
  return comment;
}

// Deep post content analysis
function analyzePostContent(post) {
  const title = post.title.toLowerCase();
  const description = (post.description || '').toLowerCase();
  const content = `${title} ${description}`;
  
  const analysis = {
    mainTopic: '',
    platform: '',
    technique: '',
    outcome: '',
    timeframe: '',
    difficulty: '',
    audience: '',
    businessModel: '',
    tools: [],
    painPoints: [],
    benefits: [],
    numbers: [],
    controversy: '',
    trendiness: ''
  };

  // Detect main topic
  if (content.includes('instagram')) analysis.mainTopic = 'Instagram marketing';
  else if (content.includes('twitter') || content.includes(' x ')) analysis.mainTopic = 'Twitter/X growth';
  else if (content.includes('youtube')) analysis.mainTopic = 'YouTube strategy';
  else if (content.includes('tiktok')) analysis.mainTopic = 'TikTok content';
  else if (content.includes('ai') || content.includes('chatgpt') || content.includes('claude')) analysis.mainTopic = 'AI tools';
  else if (content.includes('automation')) analysis.mainTopic = 'Business automation';
  else if (content.includes('revenue') || content.includes('monetiz')) analysis.mainTopic = 'Monetization';
  else if (content.includes('email')) analysis.mainTopic = 'Email marketing';
  else analysis.mainTopic = 'Digital business';

  // Extract numbers
  const numberMatches = content.match(/(\d+[k]?)/g);
  if (numberMatches) analysis.numbers = numberMatches.slice(0, 3);

  // Detect difficulty/complexity
  if (content.includes('beginner') || content.includes('start') || content.includes('guide')) {
    analysis.difficulty = 'beginner-friendly';
  } else if (content.includes('advanced') || content.includes('expert') || content.includes('master')) {
    analysis.difficulty = 'advanced';
  } else {
    analysis.difficulty = 'intermediate';
  }

  // Detect controversy/hot topics
  if (content.includes('secret') || content.includes('hack') || content.includes('exposed')) {
    analysis.controversy = 'controversial-claims';
  } else if (content.includes('mistake') || content.includes('avoid') || content.includes('fail')) {
    analysis.controversy = 'failure-focused';
  }

  // Detect business model
  if (content.includes('passive') || content.includes('income')) analysis.businessModel = 'passive income';
  else if (content.includes('saas') || content.includes('subscription')) analysis.businessModel = 'saas';
  else if (content.includes('agency') || content.includes('service')) analysis.businessModel = 'services';
  else if (content.includes('product') || content.includes('digital')) analysis.businessModel = 'digital products';

  return analysis;
}

// Craft genius-level authentic comment
function craftGeniusComment(postAnalysis, human, context) {
  const templates = getContextualTemplates(postAnalysis, human);
  const template = templates[Math.floor(Math.random() * templates.length)];
  
  // Fill template with post-specific content
  let comment = template
    .replace('{topic}', postAnalysis.mainTopic)
    .replace('{difficulty}', postAnalysis.difficulty)
    .replace('{business_model}', postAnalysis.businessModel)
    .replace('{number}', postAnalysis.numbers[0] || 'these')
    .replace('{controversy}', postAnalysis.controversy);

  // Apply human personality styling
  comment = applyHumanPersonality(comment, human);
  
  return comment;
}

// Get highly specific templates based on post analysis + human archetype
function getContextualTemplates(postAnalysis, human) {
  const templates = [];
  
  // Senior dev commenting on different topics
  if (human.personality.includes('experienced')) {
    if (postAnalysis.mainTopic.includes('AI')) {
      templates.push(
        "Good breakdown of {topic}. In production, you'll want to consider rate limiting and error handling for these API calls.",
        "Solid {topic} approach. We implemented something similar last quarter - make sure to monitor token usage costs.",
        "Nice {topic} tutorial. One thing to watch out for is prompt injection attacks if you're building customer-facing features."
      );
    } else if (postAnalysis.mainTopic.includes('automation')) {
      templates.push(
        "This {topic} setup looks clean. Have you tested it under load? We had issues with rate limits at scale.",
        "Good {topic} architecture. Consider adding dead letter queues for failed jobs.",
        "Solid automation framework. In our implementation, we added monitoring for each step."
      );
    } else if (postAnalysis.mainTopic.includes('Instagram')) {
      templates.push(
        "From a technical perspective, this {topic} approach is sound. Just watch Instagram's API rate limits.",
        "Nice {topic} strategy. We built something similar for a client - make sure to handle shadow bans gracefully.",
        "Good {topic} breakdown. The engagement patterns you're describing match what we see in our analytics."
      );
    }
  }
  
  // Startup founder commenting
  else if (human.personality.includes('ambitious')) {
    if (postAnalysis.mainTopic.includes('AI')) {
      templates.push(
        "This {topic} approach could be a game-changer for customer acquisition. What's your go-to-market strategy?",
        "Love the {topic} positioning. We're seeing 40% better conversion with AI-powered onboarding.",
        "Solid {topic} play. Have you thought about white-labeling this for agencies? Huge market opportunity."
      );
    } else if (postAnalysis.businessModel === 'saas') {
      templates.push(
        "This {business_model} model is exactly what we're building. What's your customer acquisition cost looking like?",
        "Smart {business_model} approach. We're seeing similar metrics - retention is everything in this space.",
        "Love the {business_model} positioning. Have you considered enterprise pricing tiers?"
      );
    }
  }

  // If no specific templates, use generic ones for the archetype
  if (templates.length === 0) {
    templates.push(
      `Interesting take on ${postAnalysis.mainTopic}. ${human.patterns[0]} is definitely key here.`,
      `Good ${postAnalysis.mainTopic} breakdown. I've seen ${human.patterns[1]} work well in practice.`,
      `Solid ${postAnalysis.mainTopic} strategy. ${human.patterns[2]} is something more people should focus on.`
    );
  }
  
  return templates;
}

// Apply human personality to comment
function applyHumanPersonality(comment, human) {
  // Add personality-specific modifications
  if (human.personality.includes('skeptical')) {
    if (Math.random() < 0.3) {
      comment = "Hmm, " + comment.toLowerCase();
    }
    if (Math.random() < 0.2) {
      comment += " What's the sample size on this data?";
    }
  }
  
  if (human.personality.includes('optimistic')) {
    if (Math.random() < 0.3) {
      comment += " Excited to try this!";
    }
  }
  
  if (human.personality.includes('casual')) {
    comment = comment.toLowerCase();
    comment = comment.replace(/\./g, '');
    if (Math.random() < 0.3) {
      comment += " 👍";
    }
  }

  return comment;
}

// Generate revolutionary comments for a blog post
function generateRevolutionaryCommentsForPost(post) {
  const postDate = new Date(post.date);
  const now = new Date();
  const daysSincePublish = Math.floor((now.getTime() - postDate.getTime()) / (1000 * 60 * 60 * 24));
  
  // Age-based comment count (older posts get more)
  let baseComments = 3;
  if (daysSincePublish > 60) baseComments = 7;
  else if (daysSincePublish > 30) baseComments = 5;
  else if (daysSincePublish > 14) baseComments = 4;
  
  const commentCount = Math.floor(Math.random() * 5) + baseComments;
  const comments = [];
  
  // Select diverse archetypes for this post
  const archetypeKeys = Object.keys(humanArchetypes);
  const selectedArchetypes = [];
  
  // Ensure diversity by picking different archetypes
  for (let i = 0; i < commentCount; i++) {
    let archetype;
    do {
      archetype = archetypeKeys[Math.floor(Math.random() * archetypeKeys.length)];
    } while (selectedArchetypes.includes(archetype) && selectedArchetypes.length < archetypeKeys.length);
    
    selectedArchetypes.push(archetype);
  }
  
  // Generate genius comments
  selectedArchetypes.forEach((archetype, index) => {
    const comment = {
      id: Math.random().toString(36).substr(2, 9),
      username: 'Guest',
      avatar: '',
      content: generateGeniusCommentForPost(post, archetype, { isFirst: index === 0 }),
      timestamp: generateTimestamp(Math.floor(Math.random() * daysSincePublish)),
      likes: Math.floor(Math.random() * 45) + 5,
      replies: [],
      isOP: false
    };
    
    // 40% chance of replies
    if (Math.random() < 0.4) {
      const replyCount = Math.floor(Math.random() * 3) + 1;
      for (let j = 0; j < replyCount; j++) {
        const replyArchetype = archetypeKeys[Math.floor(Math.random() * archetypeKeys.length)];
        const reply = {
          id: Math.random().toString(36).substr(2, 9),
          username: 'Guest',
          avatar: '',
          content: generateReplyComment(post, replyArchetype, comment.content),
          timestamp: generateTimestamp(Math.floor(Math.random() * 7)),
          likes: Math.floor(Math.random() * 20) + 1,
          replies: [],
          isOP: false
        };
        comment.replies.push(reply);
      }
    }
    
    comments.push(comment);
  });
  
  return {
    postSlug: post.slug,
    comments,
    commentCount: comments.length + comments.reduce((sum, c) => sum + c.replies.length, 0)
  };
}

// Generate contextual reply
function generateReplyComment(post, archetype, originalComment) {
  const human = humanArchetypes[archetype];
  
  const replyTemplates = [
    "Exactly! " + human.patterns[0] + " is crucial.",
    "This. " + human.patterns[1] + " from my experience.",
    "100% agree on " + human.patterns[2] + ".",
    "Same here. " + human.patterns[0] + " was the game changer.",
    "Good point about " + human.patterns[1] + "."
  ];
  
  let reply = replyTemplates[Math.floor(Math.random() * replyTemplates.length)];
  
  // Apply personality
  if (human.personality.includes('casual')) {
    reply = reply.toLowerCase().replace(/\./g, '');
  }
  
  return reply;
}

// Generate realistic timestamp
function generateTimestamp(daysAgo = null) {
  const now = new Date();
  const randomDays = daysAgo || Math.floor(Math.random() * 30);
  const randomHours = Math.floor(Math.random() * 24);
  const randomMinutes = Math.floor(Math.random() * 60);
  
  const timestamp = new Date(now);
  timestamp.setDate(timestamp.getDate() - randomDays);
  timestamp.setHours(timestamp.getHours() - randomHours);
  timestamp.setMinutes(timestamp.getMinutes() - randomMinutes);
  
  return timestamp.toISOString();
}

// Get blog posts
function getBlogPosts() {
  const dataPath = path.join(__dirname, '../src/data/blog-posts.ts');
  const content = fs.readFileSync(dataPath, 'utf8');
  
  const jsonMatch = content.match(/export const allBlogPosts: BlogPost\[\] = (.*?);/s);
  if (!jsonMatch) {
    throw new Error('Could not extract blog posts data');
  }
  
  return JSON.parse(jsonMatch[1]);
}

// Main generator function
async function generateRevolutionaryComments() {
  console.log('🚀 Starting REVOLUTIONARY comment generation with genius variation...');
  
  const blogPosts = getBlogPosts();
  const allComments = {};
  
  // Process posts with genius-level variation
  const batchSize = 10;
  for (let i = 0; i < blogPosts.length; i += batchSize) {
    const batch = blogPosts.slice(i, i + batchSize);
    
    console.log(`🧠 Processing genius batch ${Math.floor(i / batchSize) + 1}/${Math.ceil(blogPosts.length / batchSize)}...`);
    
    for (const post of batch) {
      const postComments = generateRevolutionaryCommentsForPost(post);
      allComments[post.slug] = postComments;
      
      console.log(`   ⚡ Generated ${postComments.commentCount} GENIUS comments for "${post.title}"`);
    }
    
    await new Promise(resolve => setTimeout(resolve, 50));
  }
  
  // Write revolutionary comments
  const outputContent = `// REVOLUTIONARY comment system with genius-level variation per post
// Generated on: ${new Date().toISOString()}
// Features: 12+ human archetypes, post-specific content analysis, authentic personalities

export interface Comment {
  id: string;
  username: string;
  avatar: string;
  content: string;
  timestamp: string;
  likes: number;
  replies: Comment[];
  isOP?: boolean;
}

export interface PostComments {
  postSlug: string;
  comments: Comment[];
  commentCount: number;
}

export const blogComments: Record<string, PostComments> = ${JSON.stringify(allComments, null, 2)};

// Helper function to get comments for a specific post
export function getCommentsForPost(slug: string): PostComments | null {
  return blogComments[slug] || null;
}
`;
  
  const outputPath = path.join(__dirname, '../src/data/blog-comments.ts');
  fs.writeFileSync(outputPath, outputContent);
  
  console.log(`\n🎉 REVOLUTIONARY comment system deployed!`);
  console.log(`📁 Output: ${outputPath}`);
  
  // Statistics
  const totalComments = Object.values(allComments).reduce((sum, post) => sum + post.commentCount, 0);
  const avgCommentsPerPost = Math.round(totalComments / blogPosts.length);
  
  console.log(`📊 GENIUS Statistics:`);
  console.log(`   Total comments: ${totalComments}`);
  console.log(`   Average per post: ${avgCommentsPerPost}`);
  console.log(`   Human archetypes: ${Object.keys(humanArchetypes).length}`);
  console.log(`   Genius variation: MAXIMUM AUTHENTICITY ACHIEVED`);
}

// Run the revolutionary generator
if (require.main === module) {
  generateRevolutionaryComments().catch(console.error);
}

module.exports = { generateRevolutionaryComments };