#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// All users are "Guest" by default - real users can submit comments for approval
const defaultUsername = 'Guest';

// Different personality types with unique communication styles
const personalityTypes = {
  professional: {
    style: 'proper grammar, technical language, formal tone',
    case: 'mixed', // Proper capitalization
    punctuation: true,
    emojis: false
  },
  casual_proper: {
    style: 'casual but grammatically correct',
    case: 'mixed',
    punctuation: true,
    emojis: 'occasional'
  },
  internet_native: {
    style: 'lowercase, abbreviations, internet slang',
    case: 'lower',
    punctuation: false,
    emojis: 'frequent'
  },
  emotional: {
    style: 'passionate, uses caps for emphasis',
    case: 'mixed_caps',
    punctuation: true,
    emojis: 'emotional'
  },
  technical_expert: {
    style: 'deep technical knowledge, specific terms',
    case: 'mixed',
    punctuation: true,
    emojis: false
  },
  skeptical: {
    style: 'questioning, critical thinking',
    case: 'mixed',
    punctuation: true,
    emojis: 'rare'
  },
  enthusiastic: {
    style: 'excited, lots of positive energy',
    case: 'mixed',
    punctuation: true,
    emojis: 'frequent'
  },
  brief: {
    style: 'short, to the point, sometimes dismissive',
    case: 'lower',
    punctuation: false,
    emojis: false
  }
};

// Topic-specific comment templates with personality variations
const commentTemplates = {
  // AI-related posts (Claude, ChatGPT, etc.)
  ai: {
    professional: [
      "This is an excellent analysis of the current AI landscape. The technical implementation details are particularly valuable for enterprise adoption.",
      "I've been evaluating similar AI tools for our development team. The performance metrics you've shared here are quite impressive.",
      "From a technical perspective, the integration patterns you describe align well with industry best practices."
    ],
    casual_proper: [
      "Been using Claude for a few months now and it's honestly a game changer. The code quality is way better than I expected.",
      "This matches my experience with AI tools - they're getting scary good but you still need to know what you're doing.",
      "Great breakdown! I was skeptical about AI coding but articles like this are changing my mind 😊"
    ],
    internet_native: [
      "claude absolutely destroys gpt-4 for coding ngl... been saying this for months",
      "finally someone who gets it!! ai is wild rn but most people using it wrong lol",
      "tried this exact setup and holy shit the results 🔥 my productivity through the roof"
    ],
    emotional: [
      "THIS is exactly what I've been trying to explain to my team! AI isn't going to replace us - it's going to make us SUPERHUMAN!",
      "I'm honestly getting emotional reading this because it perfectly captures why I fell in love with AI development in the first place.",
      "FINALLY someone who understands the real potential here! Most people are still stuck thinking AI is just a fancy autocomplete."
    ],
    technical_expert: [
      "The tokenization approach you describe here is solid, but watch out for context window limitations with longer conversations.",
      "Have you tested this with different model temperatures? I've found 0.3-0.7 works best for code generation tasks.",
      "Interesting implementation. You might want to consider adding retry logic for API timeouts - learned that the hard way in production."
    ],
    skeptical: [
      "Sounds impressive, but what's the actual success rate in production? These AI demos always look perfect until you hit edge cases.",
      "I'm curious about the real costs here. Everyone focuses on the cool factor but the API bills add up fast.",
      "Have you run into hallucination issues? I've had AI confidently generate completely wrong code that compiled but did nothing useful."
    ],
    enthusiastic: [
      "OMG this is EXACTLY what I needed! 🚀 Been struggling with this problem for weeks and your solution is perfect!",
      "This is the future!! 🤯 I can't believe how far AI has come. Already implementing this in my project!",
      "YESSS! 🙌 Finally someone who explains AI properly! Bookmarking this and sharing with everyone I know!"
    ],
    brief: [
      "works",
      "tried it. good stuff",
      "nice",
      "this but faster"
    ]
  },
  // Automation posts (bots, workflows, etc.)
  automation: {
    professional: [
      "The automation framework you've outlined here is exactly what we've been looking for to streamline our content operations.",
      "This is a well-structured approach to automation. The error handling and retry logic are particularly important for production environments.",
      "Excellent documentation of the automation pipeline. Have you considered implementing rate limiting to prevent API abuse?"
    ],
    casual_proper: [
      "Been looking for something like this for months! The step-by-step setup guide makes it way less intimidating.",
      "Love how you broke down the automation process. Finally something that doesn't assume I'm already an expert 😅",
      "This is super helpful. I've been doing everything manually and it's killing my productivity."
    ],
    internet_native: [
      "yooo this automation setup is fire 🔥 bout to save me like 10 hours a week no cap",
      "finally!! been doing this shit manually for months like an idiot lmaooo",
      "automation gang rise up 🤖 this guide slaps hard ngl"
    ],
    emotional: [
      "This is LIFE CHANGING! I've been drowning in manual tasks and this automation is going to save my sanity!",
      "I'm literally crying happy tears right now - this solves EVERY problem I've been having with my workflow!",
      "THANK YOU for making this so easy to understand! Most automation guides are written by engineers FOR engineers."
    ],
    technical_expert: [
      "Solid implementation. You might want to add exponential backoff for API retries and consider implementing circuit breakers for resilience.",
      "Nice work on the webhook handling. Are you using any queuing system for high-volume scenarios?",
      "The automation logic is sound, but make sure you're logging everything for debugging. Production issues are a nightmare without proper logs."
    ],
    skeptical: [
      "What happens when the API changes and breaks everything? These automation setups seem fragile.",
      "Looks impressive but what's the real maintenance overhead? I've seen too many 'set it and forget it' solutions that require constant babysitting.",
      "How do you handle rate limits and API quotas? Most guides skip these real-world problems."
    ],
    enthusiastic: [
      "AUTOMATION IS THE FUTURE! 🚀 This guide is incredible - already setting this up for my business!",
      "OMG yes!! 🙌 Been waiting for someone to explain automation this clearly! You're a lifesaver!",
      "This is AMAZING! 💯 Sharing this with my entire team right now!"
    ],
    brief: [
      "works great",
      "solid automation",
      "nice setup",
      "helpful"
    ]
  },
  // Business/monetization posts
  business: {
    professional: [
      "This revenue optimization strategy aligns perfectly with current market trends. The data-driven approach is particularly compelling.",
      "Excellent analysis of the monetization landscape. The LTV calculations are spot-on for subscription-based models.",
      "From a business development perspective, this framework addresses the key challenges we see in digital product scaling."
    ],
    casual_proper: [
      "This is exactly what I needed to hear! Been struggling with pricing my digital products and this gives me a clear path forward.",
      "Love the real-world examples here. So many business guides are just theory but this actually shows what works 💪",
      "Been following your content for a while and this might be your best breakdown yet. Really practical advice."
    ],
    internet_native: [
      "finally some real talk about making money online instead of the usual bs courses",
      "bruh this revenue strategy is actually legit... bout to implement this asap 💰",
      "monetization game strong af 🔥 this is how you actually build wealth online"
    ],
    emotional: [
      "This is EXACTLY why I started my business! Thank you for showing that ethical monetization is possible!",
      "I'm so tired of scammy get-rich-quick schemes - this is real, honest business advice that actually works!",
      "FINALLY someone who talks about building sustainable income instead of just chasing quick wins!"
    ],
    technical_expert: [
      "The funnel metrics you've outlined here are solid. Have you tested cohort-based revenue analysis for better LTV predictions?",
      "Interesting pricing strategy. You might want to consider psychological pricing anchors to optimize conversion rates.",
      "The retention mechanics are well thought out. Are you using any behavioral analytics to track user engagement patterns?"
    ],
    skeptical: [
      "These revenue numbers seem optimistic. What's the actual conversion rate from free to paid users?",
      "How sustainable is this model when competition increases? These strategies work until everyone starts doing them.",
      "I'm curious about the churn rates. Most digital products struggle with retention after the initial excitement wears off."
    ],
    enthusiastic: [
      "THIS IS GOLD! 🏆 Already implementing these strategies in my business and seeing results!",
      "OMG YES! 💰 This is the business advice I've been searching for! You just saved me months of trial and error!",
      "INCREDIBLE VALUE! 🚀 This single post is worth more than most paid courses I've taken!"
    ],
    brief: [
      "solid business advice",
      "this works",
      "good revenue tips",
      "helpful"
    ]
  },

  // Marketing/growth posts  
  marketing: {
    professional: [
      "This marketing framework demonstrates a sophisticated understanding of modern consumer psychology and digital engagement patterns.",
      "The attribution model you've described here would be valuable for organizations looking to optimize their marketing spend efficiency.",
      "Excellent breakdown of the customer acquisition funnel. The retention strategies are particularly well-researched."
    ],
    casual_proper: [
      "This marketing approach is genius! I've been struggling with organic reach and this gives me a clear strategy to follow.",
      "Love how you explain complex marketing concepts in simple terms. Finally something I can actually implement 📈",
      "Been doing marketing for my small business and this hits all the pain points I've been dealing with."
    ],
    internet_native: [
      "marketing game on point 🎯 this strategy gonna blow up my engagement fr",
      "finally someone who understands how to actually grow online without buying fake followers lol",
      "this marketing guide hits different... actually useful advice instead of generic tips"
    ],
    emotional: [
      "This is REVOLUTIONARY! I've been spinning my wheels with marketing for months and this just changed everything!",
      "I'm getting chills reading this because it perfectly explains why my previous marketing efforts failed!",
      "THANK YOU for making marketing feel approachable instead of this scary, complex thing!"
    ],
    technical_expert: [
      "The attribution modeling here is solid. Are you using multi-touch attribution or last-click for your conversion tracking?",
      "Nice work on the segmentation strategy. Have you tested dynamic content personalization based on user behavior?",
      "The funnel optimization approach makes sense. You might want to consider implementing progressive profiling for better lead qualification."
    ],
    skeptical: [
      "These engagement rates seem high. Are you accounting for bot traffic and fake engagement in your metrics?",
      "What's the actual ROI on this marketing spend? The strategies look good but the economics need to work.",
      "How do you maintain this level of content quality at scale? Most marketing systems break down when you try to grow them."
    ],
    enthusiastic: [
      "MARKETING MASTERY! 🚀 This strategy is exactly what my business needed! Already seeing improvements!",
      "YESSSS! 🎉 Finally someone who gets modern marketing! This is going to transform my growth strategy!",
      "INCREDIBLE INSIGHTS! 💡 Bookmarking this and sharing with my entire marketing team!"
    ],
    brief: [
      "solid marketing",
      "this works",
      "good growth tips",
      "useful"
    ]
  },

  // Development/coding posts
  development: {
    professional: [
      "This is an excellent technical implementation. The architecture decisions are well-justified and the code quality is production-ready.",
      "The development methodology outlined here follows industry best practices. Particularly appreciate the emphasis on testing and documentation.",
      "Solid engineering approach. The scalability considerations and performance optimizations are exactly what we need for enterprise applications."
    ],
    casual_proper: [
      "This coding tutorial is amazing! Finally someone who explains complex concepts without making me feel stupid 😅",
      "Been struggling with this exact problem for weeks. Your solution is so much cleaner than what I was trying to build.",
      "Love the step-by-step approach here. Perfect for developers who want to understand the 'why' behind the code."
    ],
    internet_native: [
      "code is clean af 🔥 been looking for this exact solution for ages",
      "dev skills on point... this implementation destroys what i was working on lmao",
      "finally some quality code instead of the usual stackoverflow copy-paste garbage"
    ],
    emotional: [
      "This is BEAUTIFUL code! I'm getting emotional because it's so elegant and well-structured!",
      "FINALLY someone who cares about code quality! This is exactly how development should be done!",
      "I'm literally in tears - this solution is so much better than the hacky workaround I've been using!"
    ],
    technical_expert: [
      "Nice implementation. You might want to consider adding input validation and implementing proper error boundaries for production use.",
      "The algorithm choice is solid, but have you benchmarked this against alternative approaches? Memory usage could be optimized further.",
      "Clean code structure. Are you using any static analysis tools? The cyclomatic complexity looks manageable but worth monitoring."
    ],
    skeptical: [
      "Looks good in theory, but how does this perform under load? Most elegant solutions break down with real-world data volumes.",
      "The code is clean but what about security considerations? I don't see any input sanitization or authentication layers.",
      "Have you tested this across different environments? Code that works on localhost often has issues in production."
    ],
    enthusiastic: [
      "AMAZING CODE! 💻 This is exactly the solution I needed! Already integrating this into my project!",
      "GENIUS IMPLEMENTATION! 🚀 You just saved me hours of debugging! This is incredible!",
      "PERFECT! 🎯 This is how all tutorials should be written! Clear, practical, and actually works!"
    ],
    brief: [
      "good code",
      "works perfectly",
      "clean implementation",
      "helpful"
    ]
  }
};

// Reply templates with personality variations
const replyTemplates = {
  professional: [
    "Excellent point. I've observed similar results in our implementation.",
    "Thank you for sharing this insight. The practical application is quite valuable.",
    "This aligns with our experience. Have you documented the specific metrics?",
    "Interesting approach. What was your evaluation criteria for selecting this method?"
  ],
  casual_proper: [
    "Exactly! I've seen this work in my projects too.",
    "Thanks for sharing! How long did it take you to see results?",
    "Super helpful advice. Do you have any resources you'd recommend?",
    "Great point about the mindset shift. That's often the hardest part."
  ],
  internet_native: [
    "yesss exactly!! this is the way",
    "ngl this thread is better than most paid courses lol",
    "bookmarking this fr... good stuff",
    "facts... persistence is everything",
    "different approach but same results... love it"
  ],
  emotional: [
    "THIS is exactly what I needed to hear! Thank you so much!",
    "You just saved me SO much time and frustration!",
    "I'm so grateful people like you share this knowledge!",
    "This gives me hope that I can actually make this work!"
  ],
  technical_expert: [
    "Have you considered implementing retry logic for edge cases?",
    "What's your error handling strategy for production environments?",
    "Interesting choice. Have you benchmarked this against alternatives?",
    "Solid approach. Are you monitoring performance metrics?"
  ],
  skeptical: [
    "Sounds good in theory, but what about real-world complications?",
    "What's the maintenance overhead for this solution?",
    "Have you tested this with larger datasets?",
    "How does this perform when things go wrong?"
  ],
  enthusiastic: [
    "OMG YES! 🚀 This is amazing advice!",
    "EXACTLY! 🙌 Finally someone who gets it!",
    "This is GOLD! 💎 Thanks for sharing!",
    "LOVE THIS! 💯 Implementing right now!"
  ],
  brief: [
    "this",
    "agreed",
    "yep",
    "facts",
    "same here",
    "works"
  ]
};

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

// Select random personality type
function selectPersonality() {
  const personalities = Object.keys(personalityTypes);
  return personalities[Math.floor(Math.random() * personalities.length)];
}

// Apply personality styling to comment content
function applyPersonalityStyle(content, personality) {
  const style = personalityTypes[personality];
  let styledContent = content;
  
  // Apply case styling
  if (style.case === 'lower') {
    styledContent = styledContent.toLowerCase();
  } else if (style.case === 'mixed_caps') {
    // Add some CAPS for emphasis (emotional style)
    const words = styledContent.split(' ');
    const capsWords = ['THIS', 'AMAZING', 'PERFECT', 'EXACTLY', 'LOVE', 'INCREDIBLE', 'GENIUS', 'FINALLY'];
    styledContent = words.map(word => {
      if (Math.random() < 0.1 && capsWords.includes(word.toUpperCase())) {
        return word.toUpperCase();
      }
      return word;
    }).join(' ');
  }
  
  // Remove punctuation for certain styles
  if (!style.punctuation) {
    styledContent = styledContent.replace(/[.!?]+$/, '');
  }
  
  // Add emojis based on personality
  if (style.emojis === 'frequent' && Math.random() < 0.7) {
    const emojis = ['🔥', '💯', '🚀', '⚡', '🎯', '✨', '👌', '💪', '🙌'];
    styledContent += ' ' + emojis[Math.floor(Math.random() * emojis.length)];
  } else if (style.emojis === 'occasional' && Math.random() < 0.3) {
    const emojis = ['😊', '👍', '💪', '🙌', '✨'];
    styledContent += ' ' + emojis[Math.floor(Math.random() * emojis.length)];
  } else if (style.emojis === 'emotional' && Math.random() < 0.8) {
    const emojis = ['🚀', '💯', '🔥', '🙌', '💪', '⚡', '🎯', '💎', '🏆'];
    styledContent += ' ' + emojis[Math.floor(Math.random() * emojis.length)];
  }
  
  return styledContent;
}

// Make comments more specific to the blog post
function makeCommentSpecific(content, slug, title, category) {
  // Extract key terms from the blog post title and slug
  const titleWords = title.toLowerCase().split(' ');
  const slugWords = slug.toLowerCase().split('-');
  
  // Find relevant keywords
  const techKeywords = ['ai', 'automation', 'bot', 'api', 'code', 'algorithm', 'tool', 'system'];
  const businessKeywords = ['revenue', 'profit', 'business', 'money', 'income', 'sales', 'growth'];
  const platformKeywords = ['instagram', 'twitter', 'youtube', 'tiktok', 'linkedin', 'telegram'];
  
  const relevantTech = techKeywords.find(keyword => titleWords.includes(keyword) || slugWords.includes(keyword));
  const relevantBusiness = businessKeywords.find(keyword => titleWords.includes(keyword) || slugWords.includes(keyword));
  const relevantPlatform = platformKeywords.find(keyword => titleWords.includes(keyword) || slugWords.includes(keyword));
  
  // Replace generic placeholders with specific content
  let specificContent = content;
  
  if (relevantTech) {
    specificContent = specificContent.replace(/this tool/g, relevantTech);
    specificContent = specificContent.replace(/these tools/g, `${relevantTech} tools`);
  }
  
  if (relevantPlatform) {
    specificContent = specificContent.replace(/the platform/g, relevantPlatform);
    specificContent = specificContent.replace(/this platform/g, relevantPlatform);
  }
  
  if (relevantBusiness) {
    specificContent = specificContent.replace(/your business/g, `${relevantBusiness} strategy`);
  }
  
  return specificContent;
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

// Generate a realistic comment with personality
function generateComment(slug, title, category, usernamePool, isReply = false, parentPersonality = null) {
  // Select personality type
  const personality = isReply && parentPersonality ? parentPersonality : selectPersonality();
  
  let content;
  
  if (isReply) {
    // Generate reply based on personality
    const replyOptions = replyTemplates[personality] || replyTemplates.casual_proper;
    content = replyOptions[Math.floor(Math.random() * replyOptions.length)];
  } else {
    // Generate main comment based on category and personality
    const categoryTemplates = commentTemplates[category] || commentTemplates.business;
    const personalityTemplates = categoryTemplates[personality] || categoryTemplates.casual_proper;
    content = personalityTemplates[Math.floor(Math.random() * personalityTemplates.length)];
    
    // Make content specific to the blog post
    content = makeCommentSpecific(content, slug, title, category);
  }
  
  // Apply personality styling
  content = applyPersonalityStyle(content, personality);
  
  const username = defaultUsername; // Always Guest
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
    isOP: false,
    personality // Store for reply generation
  };
}

// Generate comments for a specific blog post
function generateCommentsForPost(post) {
  const category = getCommentCategory(post.slug, post.title);
  
  // Generate 3-8 main comments
  const commentCount = Math.floor(Math.random() * 6) + 3;
  const comments = [];
  
  for (let i = 0; i < commentCount; i++) {
    const comment = generateComment(post.slug, post.title, category, [], false);
    
    // 40% chance of having replies
    if (Math.random() < 0.4) {
      const replyCount = Math.floor(Math.random() * 3) + 1;
      for (let j = 0; j < replyCount; j++) {
        // Replies can have similar or different personalities (50/50 chance)
        const useParentPersonality = Math.random() < 0.5;
        const reply = generateComment(
          post.slug, 
          post.title, 
          category, 
          [], 
          true, 
          useParentPersonality ? comment.personality : null
        );
        reply.timestamp = generateTimestamp(Math.floor(Math.random() * 7)); // Replies are more recent
        
        // Remove personality from final output (don't need it in the JSON)
        delete reply.personality;
        comment.replies.push(reply);
      }
    }
    
    // Remove personality from main comment too
    delete comment.personality;
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