#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Realistic usernames for different types of users
const creatorUsernames = [
  'ContentKing_92', 'CreatorLife', 'DigitalNomadSarah', 'BuildingMyEmpire', 'SoloPreneur23',
  'CreativeHustle', 'GrowthHacker_', 'MarketingMaven', 'TechCreator', 'ScaleUpStudio',
  'AutomationAndy', 'PassiveIncomeJoe', 'CreatorCodex', 'InfluencerMike', 'StartupSally'
];

const techUsernames = [
  'DevLife2024', 'CodeMaster_X', 'APIGuru', 'FullStackFred', 'ReactDev_', 'PytonPro',
  'CloudArchitect', 'DataScienceD', 'MLEngineer99', 'DevOpsDaily', 'TechStack_',
  'BackendBeast', 'FrontendPhil', 'MobileFirst', 'ServerlessSteve'
];

const businessUsernames = [
  'EntrepreneurE', 'BusinessBuilder', 'StartupSucc3ss', 'GrowthExpert', 'RevenueOptimizer',
  'ScalingUp_', 'BusinessMinded', 'ROI_Focused', 'StrategySteve', 'ProfitMaximizer',
  'DigitalBiz', 'OnlineEmpire', 'BusinessHacks', 'MonetizeThis', 'SaaSFounder'
];

const generalUsernames = [
  'DigitalDreamer', 'FutureBuilder', 'TechEnthusiast', 'InnovationSeeker', 'SuccessPath',
  'GrowthMindset', 'LearningDaily', 'NextLevel_', 'OnTheGrind', 'HustleHard24',
  'GoalGetter_', 'MindsetMatters', 'SuccessDriven', 'AmbitionDaily', 'WinningFormula'
];

// Comment templates by category and type
const commentTemplates = {
  ai: {
    experience: [
      "Been using {tool} for my content creation and it's a total game changer. The time savings alone justify the cost.",
      "Started implementing AI workflows 6 months ago and my productivity has literally 3x'd. This article nails the key points.",
      "Anyone else finding that AI tools are getting scary good? I'm automating things I never thought possible.",
      "This reminds me of when I first discovered {tool} - mind blown. Now I can't imagine working without AI.",
      "Real talk - I was skeptical about AI replacing creative work, but after trying these methods, I'm a convert."
    ],
    question: [
      "Has anyone tried combining this with {tool}? Wondering if there's synergy there.",
      "Quick question - what's the learning curve like for someone with zero AI experience?",
      "This looks amazing but is it worth it for smaller creators? Seems like it might be overkill.",
      "Which AI tool would you recommend starting with? The options are overwhelming tbh.",
      "How do you handle the ethical concerns around AI-generated content? Struggling with this."
    ],
    technical: [
      "The API integration section is solid. Though I'd add that rate limiting can be tricky with {platform}.",
      "Pro tip: if you're getting errors with the setup, make sure your environment variables are properly configured.",
      "Great breakdown of the technical implementation. One thing to watch out for is token limits.",
      "For anyone struggling with the API calls, I found using async/await made debugging much easier.",
      "The architecture diagram really helped me understand how all the pieces fit together."
    ],
    skeptical: [
      "Sounds too good to be true. Has anyone actually gotten these results consistently?",
      "I've tried similar approaches before and hit major roadblocks. What makes this different?",
      "The promised ROI seems optimistic. Would love to see some actual case studies.",
      "Not trying to be negative but I've been burned by overhyped automation tools before.",
      "These AI solutions always look great in demos but struggle in real-world scenarios."
    ]
  },
  automation: {
    experience: [
      "Built something similar for my agency and it's been running smoothly for 8 months. Total lifesaver.",
      "This automation saved me 15+ hours per week. Now I can focus on actual strategy instead of busywork.",
      "Started with manual processes, then gradually automated. This guide would have saved me months of trial and error.",
      "The ROI on automation is insane once you get it dialed in. Initial setup time is worth it 100%.",
      "Been preaching automation for years. Finally seeing more creators catch on to the potential."
    ],
    technical: [
      "One thing to add - make sure you have proper error handling in place. Learned this the hard way.",
      "The webhook configuration can be tricky. I recommend testing thoroughly before going live.",
      "Great tutorial! For anyone using {platform}, there's a simpler way to set up the triggers.",
      "The code examples are clean but you'll want to add retry logic for production use.",
      "Pro tip: use environment variables for all your API keys. Security 101."
    ],
    concern: [
      "My biggest worry with automation is losing that personal touch. How do you balance efficiency with authenticity?",
      "What happens when the platform changes their API? Seems like a lot of maintenance overhead.",
      "Are there legal considerations around automated posting/engagement? Don't want to violate ToS.",
      "How do you handle edge cases? Automation is great until something unexpected happens.",
      "The upfront time investment is significant. How long before you see actual results?"
    ]
  },
  business: {
    experience: [
      "Implemented this strategy in my SaaS and saw 40% revenue increase in Q3. The framework is solid.",
      "Been running my online business for 5 years and wish I had this roadmap from day one.",
      "These principles work. Applied them to my digital product launch and exceeded projections by 200%.",
      "Started following this approach 6 months ago and finally hit my first $10k month. Game changer.",
      "The mindset shift around pricing was huge for me. Stopped undervaluing my work immediately."
    ],
    strategy: [
      "The key insight about customer lifetime value really resonated. Most people focus too much on acquisition cost.",
      "Love the emphasis on systems over hustle. Sustainable growth beats burnout every time.",
      "This aligns perfectly with what I learned from {book/course}. Consistency compounds.",
      "The data-driven approach is refreshing. Too many 'gurus' rely on anecdotes instead of metrics.",
      "Finally someone talking about the unglamorous side of building a business. Reality check needed."
    ],
    question: [
      "How do you scale this approach for service-based businesses vs product-based?",
      "What metrics should I track in the early stages? Feeling overwhelmed by all the KPIs.",
      "This seems resource-intensive. Any advice for solo entrepreneurs just starting out?",
      "How long did it take you to see meaningful results with this strategy?",
      "What's the biggest mistake you see people make when implementing this?"
    ]
  },
  marketing: {
    experience: [
      "Used this exact funnel structure for my course launch and converted at 12%. These principles work.",
      "Been in marketing for 10 years and this is spot on. The psychology behind it is everything.",
      "Tried this approach across 3 different niches and got consistent results. Well researched.",
      "The content calendar framework saved my sanity. Finally have a system that works.",
      "Applied these tactics to my client's campaign and saw 300% improvement in engagement."
    ],
    practical: [
      "For anyone implementing this - start small and test. Don't try to change everything at once.",
      "The email sequence templates are gold. Saved me hours of copywriting time.",
      "Pro tip: the timing of your posts matters more than most people realize. Test different windows.",
      "A/B testing is crucial here. What works for one audience might flop for another.",
      "Don't sleep on the organic strategies. Paid ads are great but organic builds long-term value."
    ],
    platforms: [
      "Does this work equally well across all platforms? Instagram vs LinkedIn have such different dynamics.",
      "TikTok's algorithm seems to change weekly. How do you adapt these strategies?",
      "Anyone tried this on newer platforms like {emerging platform}? Wondering about first-mover advantage.",
      "The platform-specific tips are helpful. Each one really does require a different approach.",
      "Cross-platform consistency is harder than it looks. This framework helps streamline that."
    ]
  },
  development: {
    technical: [
      "Clean code examples. The error handling approach is particularly well thought out.",
      "Been working with this stack for 2 years and these optimizations are legit. Performance gains are noticeable.",
      "The architecture decisions make sense for scale. Would love to see load testing results.",
      "Great use of design patterns. The separation of concerns is textbook perfect.",
      "For production deployment, you'll want to add monitoring and logging. Otherwise solid foundation."
    ],
    learning: [
      "As someone new to {technology}, this breakdown was exactly what I needed. Thank you!",
      "The step-by-step approach is perfect for intermediate developers. Not too basic, not overwhelming.",
      "Coming from {other tech}, the mental model shift took some time but this guide helps bridge that gap.",
      "Finally understand the why behind these patterns. Context makes all the difference.",
      "This filled in gaps I didn't even know I had. The fundamentals are crucial."
    ],
    practical: [
      "Implemented this in our production app last week. Deployment was smooth and performance improved.",
      "The testing strategy section is gold. Too many developers skip this critical step.",
      "Security considerations are spot on. See too many projects that ignore these basics.",
      "Documentation quality matters more than most realize. This example sets a good standard.",
      "The migration path from legacy systems is well thought out. Incremental changes > big bang."
    ]
  }
};

// Reply templates for threaded conversations
const replyTemplates = [
  "Exactly! I've seen this work in practice and the results speak for themselves.",
  "Interesting perspective. Have you considered {alternative approach}?",
  "Thanks for sharing your experience. How long did it take to see results?",
  "This is super helpful. Do you have any resources you'd recommend for learning more?",
  "I tried something similar but struggled with {specific issue}. Any tips?",
  "Great point about {topic}. Most people overlook this crucial detail.",
  "Appreciate the real-world example. Theory is one thing, implementation is another.",
  "100% agree. The mindset shift is often harder than the technical implementation.",
  "This is why I love this community. Actual actionable insights, not just fluff.",
  "Bookmarking this thread. So much value in these comments.",
  "Different approach but similar results. There's definitely multiple paths to success.",
  "The learning curve was steep for me too, but totally worth pushing through.",
  "Mind sharing what tools you used for this? Always looking for new solutions.",
  "This thread is better than most paid courses I've taken. Amazing insights.",
  "Can relate to the struggles. Persistence pays off though."
];

// Get blog posts from data file
function getBlogPosts() {
  const dataPath = path.join(__dirname, '../src/data/blog-posts.ts');
  const content = fs.readFileSync(dataPath, 'utf8');
  
  // Extract the JSON data from the TypeScript file
  const jsonMatch = content.match(/export const allBlogPosts: BlogPost\[\] = (.*?);/s);
  if (!jsonMatch) {
    throw new Error('Could not extract blog posts data');
  }
  
  return JSON.parse(jsonMatch[1]);
}

// Determine comment category based on blog post topic
function getCommentCategory(slug, title) {
  const keywords = slug.toLowerCase() + ' ' + title.toLowerCase();
  
  if (keywords.includes('ai') || keywords.includes('machine learning') || keywords.includes('gpt') || keywords.includes('claude')) {
    return 'ai';
  }
  if (keywords.includes('automation') || keywords.includes('workflow') || keywords.includes('bot')) {
    return 'automation';
  }
  if (keywords.includes('business') || keywords.includes('revenue') || keywords.includes('monetize') || keywords.includes('income')) {
    return 'business';
  }
  if (keywords.includes('marketing') || keywords.includes('growth') || keywords.includes('seo') || keywords.includes('content')) {
    return 'marketing';
  }
  if (keywords.includes('development') || keywords.includes('coding') || keywords.includes('programming') || keywords.includes('api')) {
    return 'development';
  }
  
  // Default to business for other topics
  return 'business';
}

// Get appropriate username pool based on category
function getUsernamePool(category) {
  switch (category) {
    case 'ai':
    case 'automation':
    case 'development':
      return [...techUsernames, ...creatorUsernames];
    case 'business':
      return [...businessUsernames, ...creatorUsernames];
    case 'marketing':
      return [...creatorUsernames, ...businessUsernames];
    default:
      return generalUsernames;
  }
}

// Generate realistic timestamp
function generateTimestamp(daysAgo = null) {
  const now = new Date();
  const randomDays = daysAgo || Math.floor(Math.random() * 30); // Up to 30 days ago
  const randomHours = Math.floor(Math.random() * 24);
  const randomMinutes = Math.floor(Math.random() * 60);
  
  const timestamp = new Date(now);
  timestamp.setDate(timestamp.getDate() - randomDays);
  timestamp.setHours(timestamp.getHours() - randomHours);
  timestamp.setMinutes(timestamp.getMinutes() - randomMinutes);
  
  return timestamp.toISOString();
}

// Make comments more specific to the topic
function customizeComment(template, slug, title, category) {
  let comment = template;
  
  // Replace placeholders with topic-specific content
  const topicWords = slug.split('-');
  const mainTopic = topicWords[0];
  
  // Tool suggestions based on category
  const toolSuggestions = {
    ai: ['ChatGPT', 'Claude', 'Midjourney', 'RunwayML', 'Jasper'],
    automation: ['Zapier', 'Make', 'n8n', 'Pipedream', 'Integromat'],
    marketing: ['HubSpot', 'Mailchimp', 'Buffer', 'Hootsuite', 'ConvertKit'],
    development: ['VS Code', 'GitHub', 'Docker', 'AWS', 'Vercel'],
    business: ['Stripe', 'Notion', 'Airtable', 'QuickBooks', 'Salesforce']
  };
  
  const tools = toolSuggestions[category] || ['great tools'];
  const randomTool = tools[Math.floor(Math.random() * tools.length)];
  
  comment = comment.replace(/{tool}/g, randomTool);
  comment = comment.replace(/{platform}/g, mainTopic);
  comment = comment.replace(/{topic}/g, mainTopic.replace('-', ' '));
  
  return comment;
}

// Generate a realistic comment
function generateComment(slug, title, category, usernamePool, isReply = false) {
  const templates = commentTemplates[category];
  const templateTypes = Object.keys(templates);
  const randomType = templateTypes[Math.floor(Math.random() * templateTypes.length)];
  const templateArray = templates[randomType];
  const template = templateArray[Math.floor(Math.random() * templateArray.length)];
  
  const content = isReply 
    ? replyTemplates[Math.floor(Math.random() * replyTemplates.length)]
    : customizeComment(template, slug, title, category);
    
  const username = usernamePool[Math.floor(Math.random() * usernamePool.length)];
  const likes = isReply 
    ? Math.floor(Math.random() * 15) + 1
    : Math.floor(Math.random() * 50) + 5;
    
  return {
    id: Math.random().toString(36).substr(2, 9),
    username,
    avatar: '', // Will be generated by the component
    content,
    timestamp: generateTimestamp(),
    likes,
    replies: [],
    isOP: false
  };
}

// Generate comments for a specific blog post
function generateCommentsForPost(post) {
  const category = getCommentCategory(post.slug, post.title);
  const usernamePool = getUsernamePool(category);
  
  // Generate 3-8 main comments
  const commentCount = Math.floor(Math.random() * 6) + 3;
  const comments = [];
  
  for (let i = 0; i < commentCount; i++) {
    const comment = generateComment(post.slug, post.title, category, usernamePool);
    
    // 40% chance of having replies
    if (Math.random() < 0.4) {
      const replyCount = Math.floor(Math.random() * 3) + 1;
      for (let j = 0; j < replyCount; j++) {
        const reply = generateComment(post.slug, post.title, category, usernamePool, true);
        reply.timestamp = generateTimestamp(Math.floor(Math.random() * 7)); // Replies are more recent
        comment.replies.push(reply);
      }
    }
    
    comments.push(comment);
  }
  
  return {
    postSlug: post.slug,
    comments,
    commentCount: comments.length + comments.reduce((sum, c) => sum + c.replies.length, 0)
  };
}

// Generate comments for all blog posts
async function generateAllComments() {
  console.log('🚀 Starting realistic comment generation for all blog posts...');
  
  const blogPosts = getBlogPosts();
  const allComments = {};
  
  // Process posts in batches to avoid overwhelming the system
  const batchSize = 10;
  for (let i = 0; i < blogPosts.length; i += batchSize) {
    const batch = blogPosts.slice(i, i + batchSize);
    
    console.log(`📝 Processing batch ${Math.floor(i / batchSize) + 1}/${Math.ceil(blogPosts.length / batchSize)}...`);
    
    for (const post of batch) {
      const postComments = generateCommentsForPost(post);
      allComments[post.slug] = postComments;
      
      console.log(`   ✅ Generated ${postComments.commentCount} comments for "${post.title}"`);
    }
    
    // Small delay between batches
    await new Promise(resolve => setTimeout(resolve, 100));
  }
  
  // Write comments data to file
  const outputContent = `// Auto-generated realistic blog comments
// Generated on: ${new Date().toISOString()}

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
  
  console.log(`\n🎉 Successfully generated comments for ${blogPosts.length} blog posts!`);
  console.log(`📁 Output: ${outputPath}`);
  
  // Calculate statistics
  const totalComments = Object.values(allComments).reduce((sum, post) => sum + post.commentCount, 0);
  const avgCommentsPerPost = Math.round(totalComments / blogPosts.length);
  
  console.log(`📊 Statistics:`);
  console.log(`   Total comments: ${totalComments}`);
  console.log(`   Average per post: ${avgCommentsPerPost}`);
  console.log(`   Posts with threaded conversations: ${Object.values(allComments).filter(post => 
    post.comments.some(comment => comment.replies.length > 0)
  ).length}`);
}

// Run the generator
if (require.main === module) {
  generateAllComments().catch(console.error);
}

module.exports = { generateAllComments, generateCommentsForPost };