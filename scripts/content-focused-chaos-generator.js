#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// CONTENT-FOCUSED CHAOS - All personalities discuss actual blog post content
// Using all 20 personalities + chaos patterns to discuss specific post topics

// YOUR 5 COURSES for relevant promotion
const anyroCourses = [
  {
    name: "Instagram Ignited",
    url: "/instagram-ignited",
    keywords: ["instagram", "social media", "growth", "followers", "engagement"],
    mentions: [
      "this is covered in instagram ignited",
      "anyro's instagram course goes deeper on this",
      "learned this exact method in instagram ignited",
      "instagram ignited has the full strategy"
    ]
  },
  {
    name: "Digital Products Empire",
    url: "/digital-products",
    keywords: ["digital", "product", "template", "sell", "create", "pricing"],
    mentions: [
      "digital products empire covers this pricing strategy",
      "this is exactly what anyro teaches in digital products empire",
      "learned this approach from digital products empire",
      "anyro's digital products course explains this better"
    ]
  },
  {
    name: "AI Automation Mastery",
    url: "/ai-automation",
    keywords: ["ai", "automation", "chatgpt", "claude", "workflow", "bot"],
    mentions: [
      "ai automation mastery goes deep on this",
      "this automation is covered in anyro's ai course",
      "learned this workflow from ai automation mastery",
      "anyro's automation course has this exact setup"
    ]
  },
  {
    name: "Creator Business Blueprint",
    url: "/creator-blueprint",
    keywords: ["business", "creator", "scale", "revenue", "brand", "strategy"],
    mentions: [
      "creator business blueprint covers this scaling strategy",
      "this is in anyro's business blueprint course",
      "learned this business approach from creator blueprint",
      "anyro's business course explains this framework"
    ]
  },
  {
    name: "Revenue Optimization Secrets",
    url: "/revenue-secrets",
    keywords: ["revenue", "monetization", "income", "profit", "conversion", "sales"],
    mentions: [
      "revenue optimization secrets has this exact strategy",
      "this monetization method is in anyro's revenue course",
      "learned this from revenue optimization secrets",
      "anyro's revenue course covers this conversion technique"
    ]
  }
];

// ALL PERSONALITIES (20 + chaos patterns) - Now discuss actual post content
const allPersonalities = {
  // TECHNICAL PERSONALITIES
  technicalAbsurdist: {
    style: "overengineers solutions with humor but discusses actual techniques",
    discussionPatterns: [
      "this {technique} approach is solid but you'll need {technical_detail}",
      "tried this {method} and ended up with {absurd_technical_result}",
      "the {strategy} works but implementing it requires {complex_setup}",
      "good {topic} breakdown, just don't forget {technical_warning}"
    ],
    bashTargets: ["complicated setups", "over-engineering", "dependency hell"],
    coursePromotion: 0.15,
    probability: 0.05
  },

  seniorDev: {
    style: "experienced developer perspective on automation/tools",
    discussionPatterns: [
      "solid {technique} implementation but watch out for {production_concern}",
      "been using this {method} for years, works until {real_world_issue}",
      "good {strategy} guide, just remember {practical_limitation}",
      "this {approach} scales well if you handle {technical_challenge}"
    ],
    bashTargets: ["rate limits", "api instability", "scaling issues"],
    coursePromotion: 0.2,
    probability: 0.06
  },

  automationExpert: {
    style: "focuses on workflow efficiency and practical automation",
    discussionPatterns: [
      "this {workflow} setup is clean, tested it with {specific_result}",
      "the {automation} approach works but {improvement_suggestion}",
      "good {process} breakdown, similar to what i built for {use_case}",
      "this {system} handles {specific_scenario} better than {alternative}"
    ],
    bashTargets: ["zapier costs", "workflow complexity", "maintenance overhead"],
    coursePromotion: 0.3,
    probability: 0.07
  },

  // AI/TOOL CRITICS
  aiSkeptic: {
    style: "skeptical of AI hype but appreciates practical applications",
    discussionPatterns: [
      "this {ai_technique} actually makes sense unlike most ai bullshit",
      "practical use of {ai_tool} here, not just hype",
      "good {ai_strategy} that solves real problems",
      "this {ai_approach} has substance behind the marketing"
    ],
    bashTargets: ["ai hype", "prompt engineering", "chatgpt university"],
    coursePromotion: 0.1,
    probability: 0.08
  },

  toolCritic: {
    style: "criticizes popular tools but appreciates good recommendations",
    discussionPatterns: [
      "finally someone recommending {good_tool} instead of {bad_tool}",
      "this {tool_choice} makes sense, {popular_tool} is overrated",
      "good {software} pick, beats {expensive_alternative}",
      "smart to use {recommended_tool}, {mainstream_tool} sucks"
    ],
    bashTargets: ["expensive tools", "bloated software", "popular but bad tools"],
    coursePromotion: 0.2,
    probability: 0.06
  },

  // PLATFORM EXPERTS
  instagramVeteran: {
    style: "instagram expert discussing specific growth strategies",
    discussionPatterns: [
      "this {instagram_strategy} still works despite {platform_change}",
      "tried this {growth_method} and got {specific_result}",
      "the {content_strategy} beats {outdated_method}",
      "good {ig_technique} for {specific_scenario}"
    ],
    bashTargets: ["algorithm changes", "shadowbans", "engagement pods"],
    coursePromotion: 0.4,
    probability: 0.05
  },

  twitterRefugee: {
    style: "twitter/x user discussing social media strategies",
    discussionPatterns: [
      "this {twitter_strategy} works better than {old_method}",
      "good {x_technique} since the platform changes",
      "this {social_approach} adapts to {platform_limitation}",
      "smart {posting_strategy} for current {platform_state}"
    ],
    bashTargets: ["elon changes", "api costs", "reach limitations"],
    coursePromotion: 0.25,
    probability: 0.04
  },

  youtubeBurnout: {
    style: "youtube creator discussing video/content strategies",
    discussionPatterns: [
      "this {youtube_strategy} addresses {platform_problem}",
      "good {content_approach} for {specific_challenge}",
      "this {video_technique} works when {common_issue}",
      "smart {channel_strategy} considering {platform_limitation}"
    ],
    bashTargets: ["algorithm changes", "demonetization", "shorts dominance"],
    coursePromotion: 0.3,
    probability: 0.04
  },

  // SUCCESS STORIES
  successStory: {
    style: "shares specific results from trying the techniques",
    discussionPatterns: [
      "tried this {technique} and got {specific_result} in {timeframe}",
      "implemented this {strategy} last month, {outcome}",
      "this {method} worked for my {use_case}, {details}",
      "following this {approach} led to {measurable_result}"
    ],
    bashTargets: [], // Usually positive
    coursePromotion: 0.5,
    probability: 0.06
  },

  resultsTracker: {
    style: "tracks and shares metrics from implementing strategies",
    discussionPatterns: [
      "week 3 using this {method}: {metric} increased by {percentage}",
      "month 2 of this {strategy}: {specific_numbers}",
      "tracking this {approach}: {before} to {after}",
      "implemented this {technique}: {measurable_outcome}"
    ],
    bashTargets: [], // Data focused
    coursePromotion: 0.4,
    probability: 0.04
  },

  // BUSINESS ORIENTED
  entrepreneurHustler: {
    style: "business-focused discussion of strategies and ROI",
    discussionPatterns: [
      "this {business_strategy} has better roi than {alternative}",
      "good {revenue_method}, beats {common_approach}",
      "this {monetization_technique} scales well",
      "smart {business_approach} for {specific_market}"
    ],
    bashTargets: ["fake gurus", "get rich quick", "unrealistic promises"],
    coursePromotion: 0.35,
    probability: 0.06
  },

  agencyOwner: {
    style: "agency perspective on scaling and client delivery",
    discussionPatterns: [
      "using this {client_strategy} for our {service_type} clients",
      "this {delivery_method} works well for {client_size}",
      "good {process} for managing {specific_challenge}",
      "this {approach} scales when handling {agency_scenario}"
    ],
    bashTargets: ["client management issues", "scaling problems"],
    coursePromotion: 0.3,
    probability: 0.05
  },

  // COMMUNITY TYPES
  helpfulExplainer: {
    style: "breaks down complex concepts and helps others understand",
    discussionPatterns: [
      "great explanation of {concept}, to add to this {additional_insight}",
      "this {technique} works because {explanation}",
      "for anyone confused about {topic}, {clarification}",
      "the key with this {method} is {important_detail}"
    ],
    bashTargets: [], // Helpful nature
    coursePromotion: 0.25,
    probability: 0.05
  },

  questionAsker: {
    style: "asks specific questions about the techniques mentioned",
    discussionPatterns: [
      "how do you handle {specific_challenge} with this {method}?",
      "what about {edge_case} when using this {technique}?",
      "any tips for {specific_scenario} with this {approach}?",
      "how does this {strategy} work for {particular_situation}?"
    ],
    bashTargets: [], // Question focused
    coursePromotion: 0.2,
    probability: 0.04
  },

  // CASUAL TYPES
  casualUser: {
    style: "casual discussion of trying the methods",
    discussionPatterns: [
      "gonna try this {technique} for my {use_case}",
      "this {method} looks doable for {scenario}",
      "might test this {approach} on {project}",
      "this {strategy} could work for {situation}"
    ],
    bashTargets: [], // Casual and positive
    coursePromotion: 0.15,
    probability: 0.05
  },

  lurkerActive: {
    style: "usually quiet but speaks up about good content",
    discussionPatterns: [
      "don't usually comment but this {technique} is solid",
      "rarely post but this {method} is worth sharing",
      "lurker here, this {strategy} actually works",
      "had to comment, this {approach} is different"
    ],
    bashTargets: [], // Rare commenter
    coursePromotion: 0.2,
    probability: 0.03
  },

  // CHAOS PERSONALITIES (from reddit samples)
  oneWordReactor: {
    style: "minimal reactions to specific tools/techniques mentioned",
    discussionPatterns: [
      "{mentioned_tool}",
      "this.",
      "{technique_name} 👍",
      "exactly this"
    ],
    bashTargets: [], // Minimal
    coursePromotion: 0.05,
    probability: 0.08
  },

  memeReactor: {
    style: "meme energy about the techniques/tools",
    discussionPatterns: [
      "this {technique} hits different",
      "{method} go brrr",
      "when {strategy} actually works 🔥",
      "{approach} built different"
    ],
    bashTargets: [], // Meme focused
    coursePromotion: 0.1,
    probability: 0.04
  },

  frustratedVeteran: {
    style: "experienced but cynical about tools/methods",
    discussionPatterns: [
      "tried {technique} before, works until {limitation}",
      "this {method} is fine but {realistic_expectation}",
      "{strategy} works in theory, practice is different",
      "good {approach} if you can avoid {common_pitfall}"
    ],
    bashTargets: ["overpromising", "complexity", "maintenance"],
    coursePromotion: 0.15,
    probability: 0.06
  },

  internationalUser: {
    style: "discusses how techniques work in different markets",
    discussionPatterns: [
      "this {strategy} works in {region} too",
      "tried this {method} from {country}, {result}",
      "good {technique} that translates across markets",
      "this {approach} adapts well to {international_context}"
    ],
    bashTargets: [], // Global perspective
    coursePromotion: 0.2,
    probability: 0.03
  }
};

// EXTRACT CONTENT FROM BLOG POST
function extractContentContext(post) {
  const title = post.title.toLowerCase();
  const description = (post.description || '').toLowerCase();
  const content = `${title} ${description}`;
  
  const context = {
    mainTopic: '',
    techniques: [],
    tools: [],
    platforms: [],
    numbers: [],
    challenges: [],
    benefits: [],
    strategies: [],
    methods: []
  };
  
  // Extract main topic
  if (content.includes('instagram')) {
    context.mainTopic = 'instagram marketing';
    context.platforms.push('instagram');
    context.techniques.push('growth hacking', 'engagement strategy', 'content optimization');
  } else if (content.includes('twitter') || content.includes(' x ')) {
    context.mainTopic = 'twitter growth';
    context.platforms.push('twitter', 'x');
    context.techniques.push('tweet strategy', 'thread creation', 'audience building');
  } else if (content.includes('youtube')) {
    context.mainTopic = 'youtube strategy';
    context.platforms.push('youtube');
    context.techniques.push('video optimization', 'channel growth', 'monetization');
  } else if (content.includes('tiktok')) {
    context.mainTopic = 'tiktok content';
    context.platforms.push('tiktok');
    context.techniques.push('viral strategy', 'trend analysis', 'algorithm optimization');
  } else if (content.includes('ai') || content.includes('chatgpt') || content.includes('claude')) {
    context.mainTopic = 'ai automation';
    context.tools.push('chatgpt', 'claude', 'ai tools');
    context.techniques.push('prompt engineering', 'workflow automation', 'ai integration');
  } else if (content.includes('automation')) {
    context.mainTopic = 'business automation';
    context.techniques.push('workflow optimization', 'process automation', 'tool integration');
  } else if (content.includes('digital product')) {
    context.mainTopic = 'digital products';
    context.techniques.push('product creation', 'pricing strategy', 'sales optimization');
  } else if (content.includes('revenue') || content.includes('monetiz')) {
    context.mainTopic = 'monetization';
    context.techniques.push('revenue optimization', 'conversion strategy', 'pricing tactics');
  }
  
  // Extract numbers
  const numberMatches = content.match(/(\d+[k%]?)/g);
  if (numberMatches) context.numbers = numberMatches.slice(0, 3);
  
  // Extract common tools mentioned
  const toolKeywords = ['zapier', 'notion', 'airtable', 'canva', 'mailchimp', 'clickfunnels', 'shopify'];
  toolKeywords.forEach(tool => {
    if (content.includes(tool)) context.tools.push(tool);
  });
  
  // Extract strategies mentioned
  if (content.includes('growth')) context.strategies.push('growth strategy');
  if (content.includes('scale') || content.includes('scaling')) context.strategies.push('scaling approach');
  if (content.includes('optimize') || content.includes('optimization')) context.strategies.push('optimization method');
  
  return context;
}

// GENERATE CONTENT-FOCUSED COMMENT
function generateContentFocusedComment(post, personalityType) {
  const personality = allPersonalities[personalityType];
  const contentContext = extractContentContext(post);
  
  // Select discussion pattern
  const pattern = personality.discussionPatterns[Math.floor(Math.random() * personality.discussionPatterns.length)];
  
  // Fill pattern with actual post content
  let comment = fillPatternWithContent(pattern, contentContext, post);
  
  // Add tool bashing if personality has bash targets
  if (personality.bashTargets && personality.bashTargets.length > 0 && Math.random() < 0.3) {
    const bashTarget = personality.bashTargets[Math.floor(Math.random() * personality.bashTargets.length)];
    comment = addToolBashing(comment, bashTarget);
  }
  
  // Add course promotion if applicable
  if (Math.random() < personality.coursePromotion) {
    comment = addRelevantCoursePromotion(comment, contentContext, post);
  }
  
  // Apply reddit authenticity
  comment = applyRedditAuthenticity(comment);
  
  return comment;
}

// FILL PATTERN WITH ACTUAL CONTENT
function fillPatternWithContent(pattern, context, post) {
  let comment = pattern;
  
  // Replace placeholders with actual content
  comment = comment.replace(/{technique}/g, context.techniques[0] || 'approach');
  comment = comment.replace(/{method}/g, context.techniques[1] || 'method');
  comment = comment.replace(/{strategy}/g, context.strategies[0] || 'strategy');
  comment = comment.replace(/{approach}/g, context.techniques[2] || 'technique');
  comment = comment.replace(/{topic}/g, context.mainTopic || 'topic');
  comment = comment.replace(/{tool}/g, context.tools[0] || 'tool');
  comment = comment.replace(/{platform}/g, context.platforms[0] || 'platform');
  
  // Add specific details based on content
  comment = comment.replace(/{technical_detail}/g, getRelevantTechnicalDetail(context));
  comment = comment.replace(/{specific_result}/g, getRelevantResult(context));
  comment = comment.replace(/{use_case}/g, getRelevantUseCase(context));
  comment = comment.replace(/{timeframe}/g, getRandomTimeframe());
  comment = comment.replace(/{percentage}/g, getRandomPercentage());
  
  return comment;
}

// GET RELEVANT TECHNICAL DETAILS
function getRelevantTechnicalDetail(context) {
  const details = {
    'instagram marketing': ['api rate limits', 'engagement tracking', 'hashtag optimization'],
    'twitter growth': ['twitter api v2', 'thread automation', 'engagement metrics'],
    'ai automation': ['token management', 'prompt optimization', 'error handling'],
    'business automation': ['webhook setup', 'data validation', 'workflow monitoring'],
    'default': ['proper setup', 'error handling', 'monitoring']
  };
  
  const relevantDetails = details[context.mainTopic] || details.default;
  return relevantDetails[Math.floor(Math.random() * relevantDetails.length)];
}

// GET RELEVANT RESULTS
function getRelevantResult(context) {
  const results = {
    'instagram marketing': ['2k new followers', '40% engagement boost', '300% reach increase'],
    'twitter growth': ['10k impressions', '500 new followers', '50% engagement up'],
    'ai automation': ['80% time saved', '5x faster processing', '90% accuracy'],
    'business automation': ['60% cost reduction', '3x productivity', '50% faster delivery'],
    'default': ['significant improvement', 'great results', 'positive outcome']
  };
  
  const relevantResults = results[context.mainTopic] || results.default;
  return relevantResults[Math.floor(Math.random() * relevantResults.length)];
}

// GET RELEVANT USE CASES
function getRelevantUseCase(context) {
  const useCases = {
    'instagram marketing': ['personal brand', 'ecommerce store', 'service business'],
    'twitter growth': ['tech blog', 'personal brand', 'saas company'],
    'ai automation': ['content creation', 'customer service', 'data processing'],
    'business automation': ['lead generation', 'client onboarding', 'reporting'],
    'default': ['project', 'business', 'use case']
  };
  
  const relevantCases = useCases[context.mainTopic] || useCases.default;
  return relevantCases[Math.floor(Math.random() * relevantCases.length)];
}

// HELPER FUNCTIONS
function getRandomTimeframe() {
  return ['2 weeks', '1 month', '3 months', '6 weeks', '2 months'][Math.floor(Math.random() * 5)];
}

function getRandomPercentage() {
  return ['200%', '150%', '80%', '300%', '250%'][Math.floor(Math.random() * 5)];
}

// ADD TOOL BASHING
function addToolBashing(comment, bashTarget) {
  const bashings = [
    `${comment} unlike ${bashTarget}`,
    `${comment} but ${bashTarget}`,
    `while ${bashTarget}, ${comment}`,
    `${comment}. ${bashTarget} sucks though`
  ];
  
  return bashings[Math.floor(Math.random() * bashings.length)];
}

// ADD RELEVANT COURSE PROMOTION
function addRelevantCoursePromotion(comment, context, post) {
  // Find most relevant course
  let relevantCourse = null;
  
  for (const course of anyroCourses) {
    for (const keyword of course.keywords) {
      if (context.mainTopic.includes(keyword) || post.title.toLowerCase().includes(keyword)) {
        relevantCourse = course;
        break;
      }
    }
    if (relevantCourse) break;
  }
  
  // Default to random course if no match
  if (!relevantCourse) {
    relevantCourse = anyroCourses[Math.floor(Math.random() * anyroCourses.length)];
  }
  
  const mention = relevantCourse.mentions[Math.floor(Math.random() * relevantCourse.mentions.length)];
  
  const combinations = [
    `${comment}. ${mention}`,
    `${comment} - ${mention}`,
    `${mention}. ${comment}`,
    `exactly. ${mention}`
  ];
  
  return combinations[Math.floor(Math.random() * combinations.length)];
}

// REDDIT AUTHENTICITY
function applyRedditAuthenticity(comment) {
  // Lowercase
  if (Math.random() < 0.7) {
    comment = comment.toLowerCase();
  }
  
  // Remove periods
  if (Math.random() < 0.4) {
    comment = comment.replace(/\.$/, '');
  }
  
  // Add reddit additions
  if (Math.random() < 0.15) {
    const additions = [" tbh", " ngl", " fr", " lol", " 💯", " 🔥"];
    comment += additions[Math.floor(Math.random() * additions.length)];
  }
  
  // Typos
  if (Math.random() < 0.1) {
    const typos = {
      'youre': 'your',
      'your': 'youre',
      'definitely': 'definately'
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

// CONTENT-FOCUSED REPLY GENERATION
function generateContentFocusedReply(originalComment, personalityType, contentContext) {
  const personality = allPersonalities[personalityType];
  
  // Course promotion in reply
  if (Math.random() < 0.2) {
    const course = anyroCourses.find(c => 
      c.keywords.some(k => contentContext.mainTopic.includes(k))
    ) || anyroCourses[Math.floor(Math.random() * anyroCourses.length)];
    
    return `this. ${course.mentions[Math.floor(Math.random() * course.mentions.length)]}`;
  }
  
  // Topic-specific replies
  const topicReplies = {
    'instagram marketing': ['tried this strategy', 'engagement is key', 'algorithm changes suck'],
    'ai automation': ['prompt engineering is everything', 'tokens add up fast', 'error handling crucial'],
    'business automation': ['workflows break constantly', 'monitoring is essential', 'setup takes time'],
    'default': ['exactly this', 'spot on', 'good point']
  };
  
  const replies = topicReplies[contentContext.mainTopic] || topicReplies.default;
  return replies[Math.floor(Math.random() * replies.length)];
}

// MAIN GENERATION (same structure as before but content-focused)
function generateContentFocusedCommentsForPost(post) {
  const postDate = new Date(post.date);
  const now = new Date();
  const daysSincePublish = Math.floor((now.getTime() - postDate.getTime()) / (1000 * 60 * 60 * 24));
  
  // Age-based comment count
  let baseComments = Math.floor(Math.random() * 8) + 4;
  if (daysSincePublish > 90) baseComments += Math.floor(Math.random() * 20);
  else if (daysSincePublish > 60) baseComments += Math.floor(Math.random() * 15);
  else if (daysSincePublish > 30) baseComments += Math.floor(Math.random() * 10);
  else if (daysSincePublish > 14) baseComments += Math.floor(Math.random() * 6);
  
  const comments = [];
  const contentContext = extractContentContext(post);
  
  // Generate content-focused comments
  for (let i = 0; i < baseComments; i++) {
    // Select personality
    let selectedPersonality = null;
    const rand = Math.random();
    let cumulative = 0;
    
    for (const [type, config] of Object.entries(allPersonalities)) {
      cumulative += config.probability;
      if (rand <= cumulative) {
        selectedPersonality = type;
        break;
      }
    }
    
    if (!selectedPersonality) {
      const personalityKeys = Object.keys(allPersonalities);
      selectedPersonality = personalityKeys[Math.floor(Math.random() * personalityKeys.length)];
    }
    
    const comment = {
      id: Math.random().toString(36).substr(2, 9),
      username: 'Guest',
      avatar: '',
      content: generateContentFocusedComment(post, selectedPersonality),
      timestamp: generateTimestamp(Math.floor(Math.random() * daysSincePublish)),
      likes: Math.floor(Math.random() * 100) + 1,
      replies: [],
      isOP: false
    };
    
    // Replies
    if (Math.random() < 0.35) {
      const replyCount = Math.floor(Math.random() * 4) + 1;
      for (let j = 0; j < replyCount; j++) {
        const replyPersonalityKeys = Object.keys(allPersonalities);
        const replyPersonality = replyPersonalityKeys[Math.floor(Math.random() * replyPersonalityKeys.length)];
        
        const reply = {
          id: Math.random().toString(36).substr(2, 9),
          username: 'Guest',
          avatar: '',
          content: generateContentFocusedReply(comment.content, replyPersonality, contentContext),
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

function getBlogPosts() {
  const dataPath = path.join(__dirname, '../src/data/blog-posts.ts');
  const content = fs.readFileSync(dataPath, 'utf8');
  
  const jsonMatch = content.match(/export const allBlogPosts: BlogPost\[\] = (.*?);/s);
  if (!jsonMatch) {
    throw new Error('Could not extract blog posts data');
  }
  
  return JSON.parse(jsonMatch[1]);
}

// MAIN CONTENT-FOCUSED GENERATOR
async function generateContentFocusedComments() {
  console.log('🎯 GENERATING CONTENT-FOCUSED COMMENTS...');
  console.log('📝 Comments discuss actual blog post content and techniques');
  console.log('🎭 Using all 20 personalities + chaos patterns');
  console.log('📚 20% relevant course promotion');
  
  const blogPosts = getBlogPosts();
  const allComments = {};
  
  const batchSize = 10;
  for (let i = 0; i < blogPosts.length; i += batchSize) {
    const batch = blogPosts.slice(i, i + batchSize);
    
    console.log(`🎪 Processing content-focused batch ${Math.floor(i / batchSize) + 1}/${Math.ceil(blogPosts.length / batchSize)}...`);
    
    for (const post of batch) {
      const postComments = generateContentFocusedCommentsForPost(post);
      allComments[post.slug] = postComments;
      
      console.log(`   📝 Generated ${postComments.commentCount} content-focused comments for "${post.title}"`);
    }
    
    await new Promise(resolve => setTimeout(resolve, 50));
  }
  
  const outputContent = `// CONTENT-FOCUSED CHAOS - Comments discuss actual blog post content
// Generated on: ${new Date().toISOString()}
// Features: All personalities discuss specific techniques, tools, and strategies mentioned in each post
// Course promotion: Relevant to post topic (20% average)

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

export function getCommentsForPost(slug: string): PostComments | null {
  return blogComments[slug] || null;
}
`;
  
  const outputPath = path.join(__dirname, '../src/data/blog-comments.ts');
  fs.writeFileSync(outputPath, outputContent);
  
  console.log(`\n🎉 CONTENT-FOCUSED COMMENTS DEPLOYED!`);
  console.log(`📁 Output: ${outputPath}`);
  
  const totalComments = Object.values(allComments).reduce((sum, post) => sum + post.commentCount, 0);
  const avgCommentsPerPost = Math.round(totalComments / blogPosts.length);
  
  console.log(`📊 Content-Focused Statistics:`);
  console.log(`   Total comments: ${totalComments}`);
  console.log(`   Average per post: ${avgCommentsPerPost}`);
  console.log(`   Personalities: ${Object.keys(allPersonalities).length}`);
  console.log(`   🎯 Focus: Actual blog post content discussion`);
  console.log(`   📚 Course promotion: Relevant to post topics`);
}

if (require.main === module) {
  generateContentFocusedComments().catch(console.error);
}

module.exports = { generateContentFocusedComments };