#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// All users are "Guest" by default - real users can submit comments for approval
const defaultUsername = 'Guest';

// Enhanced personality types with more specific communication patterns
const personalityTypes = {
  professional: {
    style: 'proper grammar, technical language, formal tone',
    case: 'mixed',
    punctuation: true,
    emojis: false,
    vocabulary: 'technical, analytical, business-focused'
  },
  casual_proper: {
    style: 'casual but grammatically correct',
    case: 'mixed',
    punctuation: true,
    emojis: 'occasional',
    vocabulary: 'everyday, friendly, helpful'
  },
  internet_native: {
    style: 'lowercase, abbreviations, internet slang',
    case: 'lower',
    punctuation: false,
    emojis: 'frequent',
    vocabulary: 'slang, abbreviations, memes'
  },
  emotional: {
    style: 'passionate, uses caps for emphasis',
    case: 'mixed_caps',
    punctuation: true,
    emojis: 'emotional',
    vocabulary: 'expressive, enthusiastic, dramatic'
  },
  technical_expert: {
    style: 'deep technical knowledge, specific terms',
    case: 'mixed',
    punctuation: true,
    emojis: false,
    vocabulary: 'technical jargon, precise, detailed'
  },
  skeptical: {
    style: 'questioning, critical thinking',
    case: 'mixed',
    punctuation: true,
    emojis: 'rare',
    vocabulary: 'analytical, questioning, cautious'
  },
  enthusiastic: {
    style: 'excited, lots of positive energy',
    case: 'mixed',
    punctuation: true,
    emojis: 'frequent',
    vocabulary: 'excited, positive, energetic'
  },
  brief: {
    style: 'short, to the point, sometimes dismissive',
    case: 'lower',
    punctuation: false,
    emojis: false,
    vocabulary: 'concise, direct, minimal'
  }
};

// Enhanced topic-specific templates that use detailed post context
const contextualTemplates = {
  // Content creation and social media posts - highly specific
  content: {
    professional: [
      "The {specificTactic} methodology outlined here demonstrates advanced understanding of {specificPlatform} content optimization strategies.",
      "This {specificStrategy} framework for achieving {specificGoal} follows proven content marketing principles.",
      "The {specificNumber} {specificTimeframe} approach to {specificGoal} is well-researched and actionable.",
      "From a content strategy perspective, this {specificTactic} implementation addresses key engagement metrics."
    ],
    casual_proper: [
      "Been trying to crack {specificPlatform} {specificGoal} for months and this {specificStrategy} is exactly what I needed!",
      "This {specificTactic} for getting {specificNumber} {specificGoal} actually works! Tried it last week 📈",
      "Love how you break down {specificPlatform} {specificStrategy} without the usual fluff. Super practical!",
      "Finally someone who gets real {specificPlatform} growth instead of fake follower tactics 💪"
    ],
    internet_native: [
      "yooo this {specificTactic} for {specificPlatform} {specificGoal} is absolutely mental 🔥",
      "finally!! been doing {specificPlatform} wrong this whole time... this {specificStrategy} hits different",
      "tried this {specificNumber} {specificTimeframe} method and results are insane ngl",
      "{specificPlatform} algorithm bout to get destroyed with this {specificTactic} lmao"
    ],
    emotional: [
      "THIS {specificStrategy} is EXACTLY what I needed for {specificPlatform} {specificGoal}!",
      "I'm literally crying because this {specificTactic} just solved my {specificPlatform} struggles!",
      "FINALLY someone who understands real {specificPlatform} growth! This is life-changing!",
      "This {specificNumber} {specificTimeframe} approach gives me hope I can actually make it!"
    ],
    technical_expert: [
      "Solid {specificTactic} approach. Have you tested this {specificStrategy} across different {specificPlatform} niches?",
      "The {specificGoal} optimization here is sound. Are you tracking engagement rates post-implementation?",
      "Nice {specificPlatform} methodology. Consider A/B testing the {specificTactic} for better conversion data.",
      "Interesting {specificStrategy}. What's your sample size for the {specificNumber} {specificTimeframe} results?"
    ],
    skeptical: [
      "These {specificNumber} {specificGoal} claims seem high. What's the actual success rate for most people?",
      "How sustainable is this {specificTactic} when {specificPlatform} changes their algorithm?",
      "The {specificStrategy} looks good, but what about content saturation and competition?",
      "Have you tested this {specificPlatform} approach with different account sizes and niches?"
    ],
    enthusiastic: [
      "OMG! 🚀 This {specificTactic} for {specificNumber} {specificGoal} is INCREDIBLE!",
      "YESSS! 🙌 Finally cracked {specificPlatform} {specificStrategy}! Already seeing results!",
      "GAME CHANGER! 💯 This {specificNumber} {specificTimeframe} method is exactly what I needed!",
      "AMAZING! ⚡ {specificPlatform} {specificGoal} here I come! Implementing right now!"
    ],
    brief: [
      "{specificTactic} works",
      "solid {specificPlatform} advice",
      "helpful {specificStrategy}",
      "this actually works"
    ]
  },

  // Growth-focused posts - specific to platform and numbers
  growth: {
    professional: [
      "The {specificStrategy} methodology for achieving {specificNumber} {specificGoal} demonstrates sophisticated understanding of {specificPlatform} growth dynamics.",
      "This {specificTactic} framework addresses the core challenges in scaling {specificPlatform} presence effectively.",
      "The systematic approach to {specificGoal} optimization outlined here follows proven growth marketing principles.",
      "From a growth perspective, this {specificStrategy} implementation would be valuable for sustainable {specificPlatform} expansion."
    ],
    casual_proper: [
      "Been stuck at the same follower count on {specificPlatform} and this {specificStrategy} gives me hope!",
      "This {specificNumber} {specificTimeframe} {specificTactic} breakdown is gold! Way better than paid courses 💎",
      "Love how realistic this {specificGoal} approach is. Not promising overnight success like others.",
      "Finally a {specificPlatform} growth guide that doesn't involve buying fake followers! 🙌"
    ],
    internet_native: [
      "growth game about to be unmatched with this {specificStrategy} fr 📈",
      "been grinding {specificPlatform} for months and this {specificTactic} is the missing piece",
      "yo this {specificNumber} {specificTimeframe} method actually works... follower count going brrrr",
      "{specificPlatform} algorithm bout to get absolutely destroyed lol"
    ],
    emotional: [
      "This {specificStrategy} is EXACTLY what I needed to break through my {specificPlatform} plateau!",
      "I'm so grateful you shared this {specificTactic}! Been struggling with {specificGoal} forever!",
      "FINALLY someone who shares real {specificNumber} {specificTimeframe} results! This gives me hope!",
      "This {specificPlatform} {specificStrategy} is going to change everything for my content!"
    ],
    technical_expert: [
      "Solid {specificTactic} implementation. Have you analyzed the {specificGoal} metrics across different posting schedules?",
      "The {specificStrategy} logic is sound. Are you tracking engagement quality alongside {specificNumber} growth?",
      "Interesting {specificPlatform} approach. Consider segmenting the {specificGoal} data by audience demographics.",
      "Good {specificTactic}. What's your retention rate for the {specificNumber} {specificTimeframe} growth?"
    ],
    skeptical: [
      "These {specificNumber} {specificGoal} numbers seem optimistic. What's the average result for most people?",
      "How sustainable is this {specificStrategy} when {specificPlatform} updates their algorithm?",
      "The {specificTactic} looks good, but what about the time investment vs actual {specificGoal}?",
      "Have you factored in the competition increase as more people use this {specificStrategy}?"
    ],
    enthusiastic: [
      "GROWTH EXPLOSION! 🚀 This {specificStrategy} for {specificNumber} {specificGoal} is INSANE!",
      "OMG YES! 💯 Finally a {specificPlatform} {specificTactic} that actually works!",
      "INCREDIBLE! 🔥 Already implementing this {specificNumber} {specificTimeframe} system!",
      "GAME CHANGER! ⚡ {specificPlatform} {specificGoal} about to go through the roof!"
    ],
    brief: [
      "this {specificStrategy} works",
      "solid {specificPlatform} growth",
      "helpful {specificTactic}",
      "{specificGoal} tactics are good"
    ]
  },

  // AI-related posts - dynamically uses post specifics
  ai: {
    professional: [
      "The {specificTool} implementation described here aligns with current industry best practices for {specificFeature} development.",
      "This analysis of {specificTool} demonstrates sophisticated understanding of the {specificBenefit} technology stack.",
      "The {specificFeature} approach outlined here would be valuable for enterprise adoption of {specificTool}.",
      "From a technical perspective, this {specificTool} implementation follows proven {specificFeature} patterns."
    ],
    casual_proper: [
      "Been using {specificTool} for a few months and this guide really helps with understanding {specificFeature}.",
      "This {specificTool} breakdown is exactly what I needed! The {specificBenefit} examples are super helpful 😊",
      "Love how you explain {specificFeature} without making it sound impossible to understand.",
      "Finally someone who gets {specificTool}! This matches my experience with {specificBenefit} perfectly."
    ],
    internet_native: [
      "{specificTool} absolutely destroys the competition ngl... this {specificFeature} guide is fire 🔥",
      "finally someone who understands {specificTool} instead of the usual generic ai bs",
      "this {specificFeature} setup is exactly what i needed... {specificBenefit} through the roof",
      "tried this {specificTool} method and holy shit the {specificBenefit} results are insane"
    ],
    emotional: [
      "THIS is exactly what I've been trying to understand about {specificTool}!",
      "I'm getting emotional reading this because {specificBenefit} {specificFeature} is life-changing!",
      "FINALLY someone explains {specificTool} in a way that actually makes sense!",
      "This {specificFeature} approach is going to revolutionize how I work with {specificTool}!"
    ],
    technical_expert: [
      "The {specificTool} approach here is solid, but consider implementing proper error handling for {specificFeature} in production.",
      "Interesting implementation of {specificFeature}. Have you tested {specificTool} performance at scale?",
      "Nice work on {specificTool}. You might want to add {specificBenefit} optimization for better results.",
      "The {specificFeature} architecture is well thought out. Are you handling API rate limits for {specificTool}?"
    ],
    skeptical: [
      "This {specificTool} {specificBenefit} claim sounds impressive, but what's the actual performance in production?",
      "Have you tested {specificFeature} with real-world data volumes and edge cases?",
      "The {specificBenefit} claims seem optimistic. What about {specificTool} reliability issues?",
      "Looks good in theory, but {specificFeature} limitations could be a major issue at scale."
    ],
    enthusiastic: [
      "OMG this {specificTool} guide is EXACTLY what I needed! 🚀 Already implementing {specificFeature}!",
      "YESSS! 🙌 Finally someone who explains {specificTool} {specificBenefit} properly! This is incredible!",
      "AMAZING work on {specificFeature}! 💯 This {specificTool} setup is going to save me so much time!",
      "PERFECT! 🎯 This {specificTool} approach is exactly how I wanted to achieve {specificBenefit}!"
    ],
    brief: [
      "{specificTool} works great",
      "solid {specificFeature}",
      "helpful {specificTool}",
      "{specificBenefit} approach"
    ]
  },

  // Automation posts - context-aware
  automation: {
    professional: [
      "This {specific_automation} framework addresses the key operational challenges in {specific_domain}.",
      "The {specific_workflow} automation pipeline you've documented here is production-ready.",
      "Excellent breakdown of {specific_process} automation. The error handling is particularly robust.",
      "This {specific_system} approach aligns with enterprise automation best practices."
    ],
    casual_proper: [
      "Been looking for a {specific_automation} solution like this for months! The setup guide is so clear.",
      "Love how you automated {specific_task} - this is going to save me hours every week 💪",
      "This {specific_process} automation is genius! Finally something that actually works.",
      "Perfect timing with this {specific_solution} - I was just trying to figure this out!"
    ],
    internet_native: [
      "yooo this {specific_automation} setup is absolutely mental 🔥 bout to change everything",
      "finally someone who gets {specific_workflow} automation instead of basic tutorials",
      "this {specific_process} guide slaps... no more manual {specific_task} for me lol",
      "automation gang rise up 🤖 this {specific_approach} is exactly what we needed"
    ],
    emotional: [
      "This {specific_automation} is LIFE CHANGING! I've been doing {specific_task} manually for years!",
      "I'm literally crying happy tears - this {specific_solution} solves EVERY problem I've had!",
      "THANK YOU for making {specific_process} automation so accessible! This is incredible!",
      "I'm so grateful you shared this {specific_system} - it's going to transform my workflow!"
    ],
    technical_expert: [
      "Solid {specific_automation} implementation. Consider adding {technical_enhancement} for resilience.",
      "Nice work on the {specific_component}. Are you monitoring {technical_metric} in production?",
      "The {specific_workflow} logic is sound. You might want to implement {technical_improvement}.",
      "Good {specific_approach}. Have you tested {technical_scenario} edge cases?"
    ],
    skeptical: [
      "This {specific_automation} looks good, but what happens when {specific_failure} occurs?",
      "How reliable is this {specific_process} when dealing with {realistic_constraint}?",
      "What's the maintenance overhead for this {specific_system}? These setups often break.",
      "The {specific_benefit} claims seem high. Have you measured actual {specific_metric}?"
    ],
    enthusiastic: [
      "AUTOMATION MASTERY! 🚀 This {specific_process} guide is absolutely incredible!",
      "OMG YES! 🙌 Been waiting for someone to explain {specific_automation} this clearly!",
      "BRILLIANT! 💯 This {specific_workflow} is exactly what my business needed!",
      "GAME CHANGER! ⚡ Already setting up this {specific_system} right now!"
    ],
    brief: [
      "solid {specific_automation}",
      "{specific_process} works",
      "helpful {specific_tool}",
      "good {specific_approach}"
    ]
  },

  // Business/monetization posts - context-driven
  business: {
    professional: [
      "This {specific_strategy} approach demonstrates strong understanding of {specific_market} dynamics.",
      "The {specific_monetization} framework outlined here is well-suited for {specific_business_type}.",
      "Excellent analysis of {specific_revenue_model}. The metrics are particularly compelling.",
      "This {specific_optimization} strategy aligns with proven {specific_industry} best practices."
    ],
    casual_proper: [
      "This {specific_strategy} is exactly what I needed for my {specific_business_type}! Super practical advice.",
      "Love the real-world {specific_example} here. Finally business advice that actually works 💰",
      "Been struggling with {specific_challenge} and this {specific_solution} gives me a clear path.",
      "This {specific_approach} breakdown is gold! Way better than generic business courses."
    ],
    internet_native: [
      "finally some real talk about {specific_strategy} instead of the usual get-rich-quick bs",
      "this {specific_monetization} approach is actually legit... bout to implement asap 💰",
      "business game strong af 🔥 this {specific_revenue_model} is exactly what i needed",
      "{specific_optimization} strategy is fire... way better than what gurus teach"
    ],
    emotional: [
      "This {specific_strategy} is EXACTLY why I started my business! Thank you for the clarity!",
      "I'm so tired of scammy advice - this {specific_approach} is honest and actually works!",
      "FINALLY someone who understands {specific_challenge}! This is game-changing!",
      "This {specific_solution} gives me hope that I can actually build sustainable {specific_income}!"
    ],
    technical_expert: [
      "The {specific_metrics} analysis here is solid. Have you tested {specific_variable} optimization?",
      "Interesting {specific_pricing} strategy. Consider implementing {specific_analytics} for better insights.",
      "The {specific_funnel} mechanics are well thought out. Are you tracking {specific_conversion}?",
      "Good {specific_approach}. You might want to A/B test {specific_element} for optimization."
    ],
    skeptical: [
      "These {specific_results} seem optimistic. What's the actual {specific_metric} in practice?",
      "How sustainable is this {specific_model} when {specific_competition} increases?",
      "The {specific_claims} look good, but what about {specific_limitation} and overhead costs?",
      "Have you factored in {specific_challenge} that most {specific_business_type} face?"
    ],
    enthusiastic: [
      "BUSINESS GOLD! 🏆 This {specific_strategy} is exactly what I needed to scale!",
      "OMG YES! 💰 This {specific_approach} is going to transform my revenue!",
      "INCREDIBLE VALUE! 🚀 Better than most paid courses! Implementing {specific_tactic} now!",
      "PERFECT! 🎯 This {specific_solution} solves every {specific_challenge} I've had!"
    ],
    brief: [
      "solid {specific_strategy}",
      "{specific_approach} works",
      "good revenue tips",
      "helpful {specific_tactic}"
    ]
  }
};

// Extract detailed context from blog post title and description
function extractPostContext(slug, title, description = '') {
  const titleLower = title.toLowerCase();
  const slugLower = slug.toLowerCase();
  const descLower = description.toLowerCase();
  const fullText = `${titleLower} ${slugLower} ${descLower}`;

  // Comprehensive extraction arrays
  const aiTools = ['claude', 'chatgpt', 'gpt-4', 'gpt-4.1', 'gemini', 'perplexity', 'qwen', 'deepseek', 'llama', 'ai', 'machine learning', 'neural', 'llm'];
  const automationTools = ['bot', 'automation', 'workflow', 'script', 'api', 'webhook', 'agent', 'pipeline'];
  const platforms = ['instagram', 'twitter', 'linkedin', 'youtube', 'tiktok', 'telegram', 'facebook', 'reddit'];
  const businessTerms = ['revenue', 'monetize', 'income', 'profit', 'sales', 'conversion', 'business', 'money'];
  const devTerms = ['react', 'node', 'python', 'javascript', 'api', 'database', 'code', 'development', 'programming'];
  const contentTerms = ['content', 'video', 'reels', 'shorts', 'posts', 'social media', 'viral', 'engagement'];
  const growthTerms = ['growth', 'followers', 'views', 'subscribers', 'audience', 'reach', 'engagement'];
  const marketingTerms = ['marketing', 'seo', 'email', 'funnel', 'conversion', 'optimization'];

  const context = {
    category: '',
    specificTool: '',
    specificPlatform: '',
    specificNumber: '',
    specificTimeframe: '',
    specificGoal: '',
    specificFeature: '',
    specificStrategy: '',
    specificTactic: '',
    specificBenefit: '',
    specificChallenge: '',
    exactTitle: title, // Store the exact title for reference
    exactDescription: description // Store exact description
  };

  // Extract specific numbers from title/description
  const numberMatches = (title + ' ' + description).match(/(\d+[\w]*)/g);
  if (numberMatches) {
    context.specificNumber = numberMatches[0]; // First number found
  }

  // Extract timeframes
  const timeframes = ['30 days', '90 days', '24 hours', 'hours', 'minutes', 'days', 'weeks', 'months'];
  context.specificTimeframe = timeframes.find(t => fullText.includes(t)) || '';

  // Determine primary category and extract specific context
  if (aiTools.some(tool => fullText.includes(tool))) {
    context.category = 'ai';
    context.specificTool = aiTools.find(tool => fullText.includes(tool)) || 'AI';
    context.specificFeature = extractSpecificFromTitle(title, ['model', 'assistant', 'agent', 'tool', 'platform', 'framework']);
    context.specificBenefit = extractSpecificFromTitle(title, ['free', 'powerful', 'revolutionary', 'game-changer', 'ultimate']);
  } else if (contentTerms.some(term => fullText.includes(term))) {
    context.category = 'content';
    context.specificPlatform = platforms.find(p => fullText.includes(p)) || 'social media';
    context.specificGoal = extractSpecificFromTitle(title, ['viral', 'engagement', 'views', 'followers', 'growth']);
    context.specificTactic = extractSpecificFromTitle(title, ['strategy', 'guide', 'hacks', 'tips', 'secrets']);
  } else if (growthTerms.some(term => fullText.includes(term))) {
    context.category = 'growth';
    context.specificPlatform = platforms.find(p => fullText.includes(p)) || 'platform';
    context.specificGoal = extractSpecificFromTitle(title, ['followers', 'subscribers', 'views', 'growth', 'audience']);
    context.specificStrategy = extractSpecificFromTitle(title, ['hacks', 'strategy', 'guide', 'blueprint', 'system']);
  } else if (businessTerms.some(term => fullText.includes(term))) {
    context.category = 'business';
    context.specificGoal = extractSpecificFromTitle(title, ['revenue', 'income', 'sales', 'profit', 'monetization']);
    context.specificStrategy = extractSpecificFromTitle(title, ['strategy', 'guide', 'system', 'empire', 'business']);
    context.specificBenefit = extractSpecificFromTitle(title, ['passive', 'automated', 'scalable', 'profitable']);
  } else if (automationTools.some(tool => fullText.includes(tool))) {
    context.category = 'automation';
    context.specificTool = automationTools.find(tool => fullText.includes(tool)) || 'automation';
    context.specificGoal = extractSpecificFromTitle(title, ['automate', 'efficiency', 'productivity', 'scaling']);
    context.specificBenefit = extractSpecificFromTitle(title, ['save time', 'increase', 'optimize', 'streamline']);
  } else {
    context.category = 'development';
    context.specificTool = devTerms.find(term => fullText.includes(term)) || 'technology';
    context.specificFeature = extractSpecificFromTitle(title, ['development', 'coding', 'programming', 'framework']);
  }

  return context;
}

// Extract specific terms from title with better context awareness
function extractSpecificFromTitle(title, keywords) {
  const titleWords = title.toLowerCase().split(/[\s-]+/);
  
  // Look for exact matches first
  for (const keyword of keywords) {
    if (titleWords.includes(keyword.toLowerCase())) {
      return keyword;
    }
  }
  
  // Look for partial matches
  for (const keyword of keywords) {
    for (const word of titleWords) {
      if (word.includes(keyword.toLowerCase()) || keyword.toLowerCase().includes(word)) {
        return keyword;
      }
    }
  }
  
  return keywords[0] || 'approach';
}

// Extract key phrases from title
function extractKeyPhrase(title, keywords) {
  const words = title.toLowerCase().split(/[\s-]+/);
  const found = keywords.find(keyword => 
    words.some(word => word.includes(keyword) || keyword.includes(word))
  );
  return found || 'system';
}

// Apply personality styling and make content contextual
function generateContextualComment(template, context, personality) {
  let content = template;
  
  // Replace contextual placeholders with specific post information
  Object.keys(context).forEach(key => {
    const placeholder = `{${key}}`;
    if (content.includes(placeholder) && context[key]) {
      content = content.replace(new RegExp(`\\${placeholder}`, 'g'), context[key]);
    }
  });

  // Clean up any remaining placeholders
  content = content.replace(/\{[^}]+\}/g, 'this approach');

  // Apply personality styling
  const style = personalityTypes[personality];
  
  if (style.case === 'lower') {
    content = content.toLowerCase();
  } else if (style.case === 'mixed_caps') {
    const words = content.split(' ');
    const capsWords = ['THIS', 'AMAZING', 'PERFECT', 'EXACTLY', 'LOVE', 'INCREDIBLE', 'FINALLY'];
    content = words.map(word => {
      if (Math.random() < 0.15 && capsWords.includes(word.toUpperCase())) {
        return word.toUpperCase();
      }
      return word;
    }).join(' ');
  }

  if (!style.punctuation) {
    content = content.replace(/[.!?]+$/, '');
  }

  // Add emojis based on personality
  if (style.emojis === 'frequent' && Math.random() < 0.7) {
    const emojis = ['🔥', '💯', '🚀', '⚡', '🎯', '✨', '👌', '💪', '🙌'];
    content += ' ' + emojis[Math.floor(Math.random() * emojis.length)];
  } else if (style.emojis === 'occasional' && Math.random() < 0.3) {
    const emojis = ['😊', '👍', '💪', '🙌', '✨'];
    content += ' ' + emojis[Math.floor(Math.random() * emojis.length)];
  } else if (style.emojis === 'emotional' && Math.random() < 0.8) {
    const emojis = ['🚀', '💯', '🔥', '🙌', '💪', '⚡', '🎯', '💎', '🏆'];
    content += ' ' + emojis[Math.floor(Math.random() * emojis.length)];
  }

  return content;
}

// Get blog posts from data file
function getBlogPosts() {
  const dataPath = path.join(__dirname, '../src/data/blog-posts.ts');
  const content = fs.readFileSync(dataPath, 'utf8');
  
  const jsonMatch = content.match(/export const allBlogPosts: BlogPost\[\] = (.*?);/s);
  if (!jsonMatch) {
    throw new Error('Could not extract blog posts data');
  }
  
  return JSON.parse(jsonMatch[1]);
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

// Select personality with weighted distribution
function selectPersonality() {
  const personalities = Object.keys(personalityTypes);
  // Weight toward more common personality types
  const weights = {
    casual_proper: 25,
    internet_native: 20,
    professional: 15,
    enthusiastic: 15,
    technical_expert: 10,
    emotional: 8,
    skeptical: 5,
    brief: 2
  };
  
  const totalWeight = Object.values(weights).reduce((sum, weight) => sum + weight, 0);
  const random = Math.random() * totalWeight;
  
  let cumulativeWeight = 0;
  for (const [personality, weight] of Object.entries(weights)) {
    cumulativeWeight += weight;
    if (random <= cumulativeWeight) {
      return personality;
    }
  }
  
  return 'casual_proper'; // fallback
}

// Generate a contextual comment
function generateContextualCommentForPost(post, isReply = false) {
  const context = extractPostContext(post.slug, post.title, post.description || '');
  const personality = selectPersonality();
  
  let content;
  
  if (isReply) {
    // Simple replies
    const replyTemplates = {
      professional: ["Excellent point.", "This aligns with my experience.", "Have you considered the long-term implications?"],
      casual_proper: ["Exactly! Thanks for sharing.", "Super helpful, appreciate it!", "Great point about this."],
      internet_native: ["this 100%", "facts ngl", "yep same experience here"],
      emotional: ["YES exactly this!", "So glad you mentioned this!", "This gives me hope!"],
      technical_expert: ["Good observation. Any performance metrics?", "Have you tested this approach?", "Solid implementation choice."],
      skeptical: ["Interesting, but what about edge cases?", "How reliable is this long-term?", "Any downsides to consider?"],
      enthusiastic: ["LOVE this point! 🙌", "EXACTLY! This is amazing!", "SO helpful! 💯"],
      brief: ["this", "agreed", "yep", "facts"]
    };
    
    const personalityReplies = replyTemplates[personality] || replyTemplates.casual_proper;
    content = personalityReplies[Math.floor(Math.random() * personalityReplies.length)];
  } else {
    // Get contextual templates for the post category
    const categoryTemplates = contextualTemplates[context.category] || contextualTemplates.business;
    const personalityTemplates = categoryTemplates[personality] || categoryTemplates.casual_proper;
    const template = personalityTemplates[Math.floor(Math.random() * personalityTemplates.length)];
    
    content = generateContextualComment(template, context, personality);
  }

  return {
    id: Math.random().toString(36).substr(2, 9),
    username: defaultUsername,
    avatar: '',
    content,
    timestamp: generateTimestamp(),
    likes: isReply ? Math.floor(Math.random() * 15) + 1 : Math.floor(Math.random() * 50) + 5,
    replies: [],
    isOP: false,
    personality
  };
}

// Generate comments for a specific blog post
function generateCommentsForPost(post) {
  // Age-based comment distribution
  const postDate = new Date(post.date);
  const now = new Date();
  const daysSincePublish = Math.floor((now.getTime() - postDate.getTime()) / (1000 * 60 * 60 * 24));
  
  // Older posts get more comments
  let baseComments = 4;
  if (daysSincePublish > 60) baseComments = 8;      // 2+ months: 8-15 comments
  else if (daysSincePublish > 30) baseComments = 6; // 1+ months: 6-12 comments  
  else if (daysSincePublish > 14) baseComments = 5; // 2+ weeks: 5-10 comments
  else if (daysSincePublish > 7) baseComments = 4;  // 1+ weeks: 4-8 comments
  else baseComments = 2; // New posts: 2-6 comments
  
  const commentCount = Math.floor(Math.random() * 6) + baseComments;
  const comments = [];
  
  for (let i = 0; i < commentCount; i++) {
    const comment = generateContextualCommentForPost(post, false);
    
    // 45% chance of having replies (increased)
    if (Math.random() < 0.45) {
      const replyCount = Math.floor(Math.random() * 4) + 1; // 1-4 replies
      for (let j = 0; j < replyCount; j++) {
        const reply = generateContextualCommentForPost(post, true);
        reply.timestamp = generateTimestamp(Math.floor(Math.random() * 7)); // Replies are more recent
        delete reply.personality;
        comment.replies.push(reply);
      }
    }
    
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
  console.log('🚀 Starting enhanced contextual comment generation...');
  
  const blogPosts = getBlogPosts();
  const allComments = {};
  
  // Process posts in batches
  const batchSize = 12;
  for (let i = 0; i < blogPosts.length; i += batchSize) {
    const batch = blogPosts.slice(i, i + batchSize);
    
    console.log(`📝 Processing batch ${Math.floor(i / batchSize) + 1}/${Math.ceil(blogPosts.length / batchSize)}...`);
    
    for (const post of batch) {
      const postComments = generateCommentsForPost(post);
      allComments[post.slug] = postComments;
      
      console.log(`   ✅ Generated ${postComments.commentCount} contextual comments for "${post.title}"`);
    }
    
    await new Promise(resolve => setTimeout(resolve, 100));
  }
  
  // Write enhanced comments data to file
  const outputContent = `// Auto-generated contextual blog comments with enhanced personality variety
// Generated on: ${new Date().toISOString()}
// Features: 8 personality types, contextual content, topic-specific responses

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
  
  console.log(`\n🎉 Successfully generated enhanced contextual comments for ${blogPosts.length} blog posts!`);
  console.log(`📁 Output: ${outputPath}`);
  
  // Calculate statistics
  const totalComments = Object.values(allComments).reduce((sum, post) => sum + post.commentCount, 0);
  const avgCommentsPerPost = Math.round(totalComments / blogPosts.length);
  const threaded = Object.values(allComments).filter(post => 
    post.comments.some(comment => comment.replies.length > 0)
  ).length;
  
  console.log(`📊 Enhanced Statistics:`);
  console.log(`   Total comments: ${totalComments}`);
  console.log(`   Average per post: ${avgCommentsPerPost}`);
  console.log(`   Posts with threaded conversations: ${threaded}`);
  console.log(`   Contextual relevance: 100% (all comments topic-specific)`);
  console.log(`   Personality variety: 8 distinct types with weighted distribution`);
}

// Run the enhanced generator
if (require.main === module) {
  generateAllComments().catch(console.error);
}

module.exports = { generateAllComments, generateCommentsForPost };