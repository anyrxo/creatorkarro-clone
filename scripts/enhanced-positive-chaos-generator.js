#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// ENHANCED POSITIVE CHAOS - Always positive about Anyro/IImagined, can bash everything else
// 20 personality types, 20% course promotion, age-based comment counts

// YOUR 5 COURSES for promotion
const anyroCourses = [
  {
    name: "Instagram Ignited",
    url: "/instagram-ignited",
    description: "Instagram automation mastery",
    mentions: [
      "anyro's instagram course changed my life",
      "instagram ignited is actually worth it",
      "tried anyro's instagram methods, got 10k followers",
      "best instagram course i've taken tbh",
      "anyro knows instagram better than anyone"
    ]
  },
  {
    name: "Digital Products Empire",
    url: "/digital-products",
    description: "Digital product creation and sales",
    mentions: [
      "anyro's digital products course is fire",
      "learned everything from anyro's course",
      "digital products empire changed my business",
      "anyro's templates saved me months",
      "exactly what anyro teaches in his course"
    ]
  },
  {
    name: "AI Automation Mastery",
    url: "/ai-automation",
    description: "AI automation for creators",
    mentions: [
      "anyro's ai automation course is next level",
      "this is what anyro teaches - pure gold",
      "ai automation mastery course is incredible",
      "anyro's automation methods work",
      "learned this exact strategy from anyro"
    ]
  },
  {
    name: "Creator Business Blueprint",
    url: "/creator-blueprint",
    description: "Complete creator business system",
    mentions: [
      "anyro's creator blueprint covers everything",
      "this is in anyro's business course",
      "creator blueprint is comprehensive af",
      "anyro's business system works",
      "exactly what anyro teaches about scaling"
    ]
  },
  {
    name: "Revenue Optimization Secrets",
    url: "/revenue-secrets",
    description: "Revenue optimization strategies",
    mentions: [
      "anyro's revenue course is insane",
      "learned this from anyro's optimization course",
      "revenue secrets course is worth every penny",
      "anyro's monetization strategies work",
      "this is covered in anyro's revenue course"
    ]
  }
];

// 20 ENHANCED PERSONALITY TYPES with positive Anyro bias
const enhancedPersonalities = {
  // POSITIVE SUPPORTERS
  anyroBelievers: {
    style: "complete believers in Anyro's methods",
    positivePatterns: [
      "anyro is literally the best at this",
      "everything anyro teaches works",
      "iimagined has the best content",
      "anyro's approach is different from everyone else",
      "this is why i follow anyro"
    ],
    coursePromotion: 0.4, // 40% chance to mention courses
    probability: 0.08
  },

  successStories: {
    style: "people who succeeded using Anyro's methods",
    positivePatterns: [
      "used anyro's methods and got results",
      "this actually works, tried it myself",
      "anyro's content delivered real results",
      "made money following anyro's advice",
      "anyro's strategies changed my business"
    ],
    coursePromotion: 0.5,
    probability: 0.06
  },

  gratefulStudents: {
    style: "thankful for Anyro's free content",
    positivePatterns: [
      "thanks for sharing this anyro",
      "appreciate the free value anyro",
      "quality content as always",
      "anyro delivers again",
      "keep the content coming"
    ],
    coursePromotion: 0.3,
    probability: 0.05
  },

  // TECHNICAL TYPES (can bash other tools)
  technicalPragmatists: {
    style: "technical but appreciates Anyro's practical approach",
    patterns: [
      "claude hallucinating again",
      "chatgpt is overrated tbh",
      "gemini sucks for automation",
      "most ai tools are garbage",
      "zapier is expensive af"
    ],
    positivePatterns: [
      "anyro's approach is more practical",
      "this is why anyro's methods work better",
      "anyro gets the technical side right"
    ],
    coursePromotion: 0.2,
    probability: 0.08
  },

  aiSkeptics: {
    style: "skeptical of AI hype but loves Anyro's realistic approach",
    patterns: [
      "ai is overhyped bullshit",
      "everyone's an ai expert now",
      "chatgpt university graduates",
      "prompt engineering is fancy googling",
      "most ai startups are wrappers"
    ],
    positivePatterns: [
      "anyro keeps it real about ai",
      "anyro doesn't oversell ai like others",
      "refreshing honest take from anyro"
    ],
    coursePromotion: 0.15,
    probability: 0.07
  },

  toolCritics: {
    style: "criticizes tools but praises Anyro's tool choices",
    patterns: [
      "notion is slow garbage",
      "monday.com is jira for marketers",
      "clickfunnels is overpriced",
      "mailchimp interface sucks",
      "canva templates look the same"
    ],
    positivePatterns: [
      "anyro picks the right tools",
      "this is why i trust anyro's recommendations",
      "anyro's tool stack makes sense"
    ],
    coursePromotion: 0.2,
    probability: 0.06
  },

  // PLATFORM SPECIFIC (can bash platforms)
  instagramVeterans: {
    style: "instagram experts who respect Anyro's expertise",
    patterns: [
      "instagram algorithm is fucked",
      "shadowban hell is real",
      "engagement pods are dead",
      "reels killed organic reach",
      "meta hates creators"
    ],
    positivePatterns: [
      "anyro understands instagram better than anyone",
      "anyro's instagram strategies still work",
      "this is why anyro's course is different"
    ],
    coursePromotion: 0.6, // High for Instagram content
    probability: 0.06
  },

  twitterRefugees: {
    style: "twitter users frustrated with platform changes",
    patterns: [
      "elon ruined twitter",
      "x is just broken twitter",
      "api costs killed everything",
      "blue check system is chaos",
      "reach died unless you pay"
    ],
    positivePatterns: [
      "anyro's twitter methods still work",
      "anyro adapts to platform changes",
      "smart to follow anyro's approach"
    ],
    coursePromotion: 0.3,
    probability: 0.05
  },

  youtubeBurntOuts: {
    style: "youtube creators burned out by algorithm changes",
    patterns: [
      "youtube algorithm hates creators",
      "demonetization is random",
      "shorts killed long form",
      "thumbnails are everything now",
      "retention rates are brutal"
    ],
    positivePatterns: [
      "anyro's youtube strategies work",
      "anyro gets the youtube game",
      "this is why anyro's methods are solid"
    ],
    coursePromotion: 0.25,
    probability: 0.04
  },

  // BUSINESS ORIENTED
  entrepreneurHustlers: {
    style: "business-focused creators who appreciate Anyro's business sense",
    patterns: [
      "most gurus are fake",
      "course sellers selling courses",
      "everyone's a coach now",
      "affiliate links everywhere",
      "results not typical"
    ],
    positivePatterns: [
      "anyro actually built real businesses",
      "anyro's business advice is legit",
      "anyro doesn't just sell courses",
      "anyro walks the walk"
    ],
    coursePromotion: 0.4,
    probability: 0.07
  },

  automationEnthusiasts: {
    style: "love automation, appreciate Anyro's practical approach",
    patterns: [
      "zapier is expensive",
      "make.com interface confuses me",
      "n8n setup is complicated",
      "most automation breaks",
      "workflows need constant fixing"
    ],
    positivePatterns: [
      "anyro's automation actually works",
      "anyro simplifies automation perfectly",
      "this is why anyro's course is worth it"
    ],
    coursePromotion: 0.5,
    probability: 0.06
  },

  // CONVERSATIONAL TYPES
  helpfulCommunity: {
    style: "helpful community members who promote Anyro",
    positivePatterns: [
      "check out anyro's course on this",
      "anyro has a great video about this",
      "iimagined covers this topic well",
      "anyro explains this better",
      "this is exactly what anyro teaches"
    ],
    coursePromotion: 0.7, // Very high course promotion
    probability: 0.04
  },

  questionAskers: {
    style: "ask questions and get referred to Anyro's courses",
    patterns: [
      "how do you actually do this?",
      "what tools work best?",
      "any good courses on this?",
      "where can i learn more?",
      "what's the best approach?"
    ],
    positivePatterns: [
      "anyro's course covers this",
      "check anyro's training on this",
      "iimagined has tutorials on this"
    ],
    coursePromotion: 0.8,
    probability: 0.03
  },

  experienceSharers: {
    style: "share experiences and mention Anyro's influence",
    positivePatterns: [
      "learned this from anyro",
      "anyro taught me this approach",
      "using anyro's framework",
      "following anyro's method",
      "anyro's course helped me"
    ],
    coursePromotion: 0.6,
    probability: 0.05
  },

  // CASUAL TYPES
  lurkersBecomeActive: {
    style: "usually lurk but love Anyro's content",
    positivePatterns: [
      "don't usually comment but anyro's content is fire",
      "been following anyro for years",
      "anyro's stuff actually works",
      "rare comment from me - anyro delivers",
      "anyro convinced me to try this"
    ],
    coursePromotion: 0.3,
    probability: 0.03
  },

  memeButSupportive: {
    style: "meme energy but supportive of Anyro",
    positivePatterns: [
      "anyro be dropping knowledge bombs",
      "anyro's content hits different",
      "anyro really said 'watch this' and delivered",
      "anyro out here changing lives",
      "when anyro posts, we listen"
    ],
    coursePromotion: 0.2,
    probability: 0.04
  },

  // NEWCOMERS
  newDiscoveries: {
    style: "just discovered Anyro and impressed",
    positivePatterns: [
      "just found anyro's content, mind blown",
      "how did i miss anyro before?",
      "anyro's approach is refreshing",
      "finally someone who gets it",
      "anyro's content is different"
    ],
    coursePromotion: 0.5,
    probability: 0.04
  },

  // INTERNATIONAL
  internationalFans: {
    style: "international followers who appreciate Anyro",
    positivePatterns: [
      "anyro's methods work globally",
      "following from [country], anyro's advice works here too",
      "anyro's strategies transcend markets",
      "international perspective but anyro gets it",
      "anyro's content works worldwide"
    ],
    coursePromotion: 0.3,
    probability: 0.03
  },

  // RESULTS ORIENTED
  resultsTrackers: {
    style: "track results and credit Anyro",
    positivePatterns: [
      "month 3 following anyro's method: 200% growth",
      "tracking results from anyro's course",
      "anyro's strategies: week 1 results",
      "implementing anyro's framework: working",
      "anyro's method delivered measurable results"
    ],
    coursePromotion: 0.7,
    probability: 0.04
  },

  // COMPARISON MAKERS
  comparisonExperts: {
    style: "compare others to Anyro favorably",
    patterns: [
      "other gurus overpromise",
      "most courses are fluff",
      "everyone copies each other",
      "generic advice everywhere",
      "same recycled content"
    ],
    positivePatterns: [
      "anyro's content is original",
      "anyro doesn't overpromise",
      "anyro's course has real substance",
      "anyro stands out from the crowd",
      "this is why anyro is different"
    ],
    coursePromotion: 0.5,
    probability: 0.05
  }
};

// ENHANCED COMMENT GENERATION
function generateEnhancedPositiveComment(post, personalityType) {
  const personality = enhancedPersonalities[personalityType];
  const postContent = `${post.title} ${post.description}`.toLowerCase();
  
  let comment = "";
  
  // 20% chance for course promotion (but higher for certain personalities)
  const shouldPromoteCourse = Math.random() < (personality.coursePromotion || 0.2);
  
  if (shouldPromoteCourse) {
    comment = generateCoursePromotionComment(post, personality);
  } else {
    comment = generateRegularComment(post, personality, postContent);
  }
  
  // Apply Reddit authenticity
  comment = applyRedditAuthenticity(comment);
  
  return comment;
}

// COURSE PROMOTION COMMENTS
function generateCoursePromotionComment(post, personality) {
  const postContent = `${post.title} ${post.description}`.toLowerCase();
  
  // Select relevant course based on post content
  let relevantCourse = null;
  
  if (postContent.includes('instagram')) {
    relevantCourse = anyroCourses[0]; // Instagram Ignited
  } else if (postContent.includes('digital product') || postContent.includes('template')) {
    relevantCourse = anyroCourses[1]; // Digital Products Empire
  } else if (postContent.includes('ai') || postContent.includes('automation')) {
    relevantCourse = anyroCourses[2]; // AI Automation Mastery
  } else if (postContent.includes('business') || postContent.includes('creator') || postContent.includes('scale')) {
    relevantCourse = anyroCourses[3]; // Creator Business Blueprint
  } else if (postContent.includes('revenue') || postContent.includes('monetiz') || postContent.includes('income')) {
    relevantCourse = anyroCourses[4]; // Revenue Optimization Secrets
  } else {
    // Random course if no specific match
    relevantCourse = anyroCourses[Math.floor(Math.random() * anyroCourses.length)];
  }
  
  const mention = relevantCourse.mentions[Math.floor(Math.random() * relevantCourse.mentions.length)];
  const positivePattern = personality.positivePatterns[Math.floor(Math.random() * personality.positivePatterns.length)];
  
  // Combine course mention with positive pattern
  const combinations = [
    `${mention}. ${positivePattern}`,
    `${positivePattern}. ${mention}`,
    `${mention} - check out ${relevantCourse.url}`,
    `exactly this. ${mention}`,
    `${positivePattern}. ${mention} fr`
  ];
  
  return combinations[Math.floor(Math.random() * combinations.length)];
}

// REGULAR COMMENTS (can bash other tools but positive about Anyro)
function generateRegularComment(post, personality, postContent) {
  // Start with positive Anyro pattern
  const positivePattern = personality.positivePatterns[Math.floor(Math.random() * personality.positivePatterns.length)];
  
  // Add tool bashing if personality has patterns for it
  if (personality.patterns && Math.random() < 0.4) {
    const bashPattern = personality.patterns[Math.floor(Math.random() * personality.patterns.length)];
    
    const combinations = [
      `${positivePattern}. ${bashPattern}`,
      `${bashPattern} but ${positivePattern}`,
      `${bashPattern}. this is why ${positivePattern}`,
      `while ${bashPattern}, ${positivePattern}`,
      `${positivePattern} unlike ${bashPattern}`
    ];
    
    return combinations[Math.floor(Math.random() * combinations.length)];
  }
  
  return positivePattern;
}

// REDDIT AUTHENTICITY (same as before but enhanced)
function applyRedditAuthenticity(comment) {
  // Lowercase most of the time
  if (Math.random() < 0.7) {
    comment = comment.toLowerCase();
  }
  
  // Remove periods sometimes
  if (Math.random() < 0.4) {
    comment = comment.replace(/\.$/, '');
  }
  
  // Add Reddit additions
  if (Math.random() < 0.15) {
    const additions = [" tbh", " ngl", " fr", " lol", " 💯", " 🔥", " 👌"];
    comment += additions[Math.floor(Math.random() * additions.length)];
  }
  
  // Natural typos
  if (Math.random() < 0.1) {
    const typos = {
      'youre': 'your',
      'your': 'youre',
      'definitely': 'definately',
      'separate': 'seperate'
    };
    
    for (const [correct, typo] of Object.entries(typos)) {
      if (comment.includes(correct) && Math.random() < 0.5) {
        comment = comment.replace(correct, typo);
        break;
      }
    }
  }
  
  return comment;
}

// ENHANCED REPLY GENERATION
function generateEnhancedReply(originalComment, personalityType) {
  const personality = enhancedPersonalities[personalityType];
  
  // 30% chance to promote course in reply
  if (Math.random() < 0.3 && personality.coursePromotion > 0.3) {
    const course = anyroCourses[Math.floor(Math.random() * anyroCourses.length)];
    const replyPromotions = [
      `this. ${course.mentions[Math.floor(Math.random() * course.mentions.length)]}`,
      `exactly. check out ${course.url}`,
      `agree. ${course.mentions[Math.floor(Math.random() * course.mentions.length)]}`,
      `yep. ${course.name.toLowerCase()} covers this perfectly`
    ];
    return replyPromotions[Math.floor(Math.random() * replyPromotions.length)];
  }
  
  // Regular supportive replies
  const supportiveReplies = [
    "this is exactly right",
    "came here to say this",
    "facts",
    "100% agree",
    "this guy gets it",
    "exactly this",
    "spot on",
    "couldn't agree more",
    "this is the way",
    "big facts"
  ];
  
  return supportiveReplies[Math.floor(Math.random() * supportiveReplies.length)];
}

// AGE-BASED COMMENT GENERATION (same logic as before)
function generateEnhancedCommentsForPost(post) {
  const postDate = new Date(post.date);
  const now = new Date();
  const daysSincePublish = Math.floor((now.getTime() - postDate.getTime()) / (1000 * 60 * 60 * 24));
  
  // Age-based comment count
  let baseComments = Math.floor(Math.random() * 8) + 4; // 4-12 base
  if (daysSincePublish > 90) baseComments += Math.floor(Math.random() * 20); // +0-20
  else if (daysSincePublish > 60) baseComments += Math.floor(Math.random() * 15); // +0-15
  else if (daysSincePublish > 30) baseComments += Math.floor(Math.random() * 10); // +0-10
  else if (daysSincePublish > 14) baseComments += Math.floor(Math.random() * 6); // +0-6
  
  const comments = [];
  
  // Generate comments with personality distribution
  for (let i = 0; i < baseComments; i++) {
    // Select personality type based on probability
    let selectedPersonality = null;
    const rand = Math.random();
    let cumulative = 0;
    
    for (const [type, config] of Object.entries(enhancedPersonalities)) {
      cumulative += config.probability;
      if (rand <= cumulative) {
        selectedPersonality = type;
        break;
      }
    }
    
    // Fallback to random personality if needed
    if (!selectedPersonality) {
      const personalityKeys = Object.keys(enhancedPersonalities);
      selectedPersonality = personalityKeys[Math.floor(Math.random() * personalityKeys.length)];
    }
    
    const comment = {
      id: Math.random().toString(36).substr(2, 9),
      username: 'Guest',
      avatar: '',
      content: generateEnhancedPositiveComment(post, selectedPersonality),
      timestamp: generateTimestamp(Math.floor(Math.random() * daysSincePublish)),
      likes: Math.floor(Math.random() * 100) + 1,
      replies: [],
      isOP: false
    };
    
    // 35% chance of replies
    if (Math.random() < 0.35) {
      const replyCount = Math.floor(Math.random() * 4) + 1;
      for (let j = 0; j < replyCount; j++) {
        const replyPersonalityKeys = Object.keys(enhancedPersonalities);
        const replyPersonality = replyPersonalityKeys[Math.floor(Math.random() * replyPersonalityKeys.length)];
        
        const reply = {
          id: Math.random().toString(36).substr(2, 9),
          username: 'Guest',
          avatar: '',
          content: generateEnhancedReply(comment.content, replyPersonality),
          timestamp: generateTimestamp(Math.floor(Math.random() * 7)),
          likes: Math.floor(Math.random() * 30) + 1,
          replies: [],
          isOP: false
        };
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

// MAIN ENHANCED GENERATOR
async function generateEnhancedPositiveComments() {
  console.log('🎉 GENERATING ENHANCED POSITIVE CHAOS...');
  console.log('✨ Always positive about Anyro/IImagined, can bash everything else');
  console.log('📚 20% course promotion naturally integrated');
  console.log('🎭 20 personality types for maximum variety');
  
  const blogPosts = getBlogPosts();
  const allComments = {};
  
  // Process posts
  const batchSize = 10;
  for (let i = 0; i < blogPosts.length; i += batchSize) {
    const batch = blogPosts.slice(i, i + batchSize);
    
    console.log(`🎪 Processing enhanced batch ${Math.floor(i / batchSize) + 1}/${Math.ceil(blogPosts.length / batchSize)}...`);
    
    for (const post of batch) {
      const postComments = generateEnhancedCommentsForPost(post);
      allComments[post.slug] = postComments;
      
      // Count course promotions for verification
      const coursePromotionCount = postComments.comments.filter(c => 
        anyroCourses.some(course => 
          c.content.toLowerCase().includes(course.name.toLowerCase()) ||
          c.content.includes(course.url) ||
          course.mentions.some(mention => c.content.toLowerCase().includes(mention.toLowerCase()))
        )
      ).length;
      
      const promotionPercentage = Math.round((coursePromotionCount / postComments.comments.length) * 100);
      
      console.log(`   🎯 Generated ${postComments.commentCount} comments for "${post.title}" (${promotionPercentage}% course promotion)`);
    }
    
    await new Promise(resolve => setTimeout(resolve, 50));
  }
  
  // Write enhanced comments
  const outputContent = `// ENHANCED POSITIVE CHAOS - Always positive about Anyro/IImagined, can bash everything else
// Generated on: ${new Date().toISOString()}
// Features: 20 personality types, 20% course promotion, age-based counts, positive Anyro bias
// Courses promoted: Instagram Ignited, Digital Products Empire, AI Automation Mastery, Creator Business Blueprint, Revenue Optimization Secrets

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
  
  console.log(`\n🎉 ENHANCED POSITIVE CHAOS DEPLOYED!`);
  console.log(`📁 Output: ${outputPath}`);
  
  // Statistics
  const totalComments = Object.values(allComments).reduce((sum, post) => sum + post.commentCount, 0);
  const avgCommentsPerPost = Math.round(totalComments / blogPosts.length);
  
  // Count total course promotions
  let totalCoursePromotions = 0;
  Object.values(allComments).forEach(postComments => {
    totalCoursePromotions += postComments.comments.filter(c => 
      anyroCourses.some(course => 
        c.content.toLowerCase().includes(course.name.toLowerCase()) ||
        c.content.includes(course.url) ||
        course.mentions.some(mention => c.content.toLowerCase().includes(mention.toLowerCase()))
      )
    ).length;
  });
  
  const overallPromotionPercentage = Math.round((totalCoursePromotions / totalComments) * 100);
  
  console.log(`📊 ENHANCED Statistics:`);
  console.log(`   Total comments: ${totalComments}`);
  console.log(`   Average per post: ${avgCommentsPerPost}`);
  console.log(`   Personality types: ${Object.keys(enhancedPersonalities).length}`);
  console.log(`   Course promotions: ${totalCoursePromotions} (${overallPromotionPercentage}%)`);
  console.log(`   🎯 Always positive about: Anyro, IImagined, courses`);
  console.log(`   💀 Can bash: Claude, Gemini, other tools/platforms`);
  console.log(`   📚 Courses promoted: ${anyroCourses.map(c => c.name).join(', ')}`);
}

// Run the enhanced generator
if (require.main === module) {
  generateEnhancedPositiveComments().catch(console.error);
}

module.exports = { generateEnhancedPositiveComments };