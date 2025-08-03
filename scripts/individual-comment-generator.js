#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// INDIVIDUAL COMMENT GENERATOR - One post at a time, actually intelligent
// Analyzes each blog post individually and creates relevant discussions

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

// DEEP CONTENT ANALYSIS - Actually understand what the post is about
function analyzePostContent(post) {
  const title = post.title.toLowerCase();
  const description = post.description.toLowerCase();
  const tags = post.tags.join(' ').toLowerCase();
  const content = `${title} ${description} ${tags}`;
  
  console.log(`\n🔍 ANALYZING: "${post.title}"`);
  console.log(`📝 Description: ${post.description.substring(0, 100)}...`);
  console.log(`🏷️ Tags: ${post.tags.join(', ')}`);
  
  const analysis = {
    mainTopic: '',
    specificTools: [],
    techniques: [],
    platforms: [],
    businessAspects: [],
    challenges: [],
    results: [],
    courseRelevance: null
  };
  
  // Determine main topic and extract specific details
  if (content.includes('manus') && content.includes('automation')) {
    analysis.mainTopic = 'Manus AI Automation';
    analysis.specificTools = ['Manus AI', 'automation agent', 'business process automation'];
    analysis.techniques = ['agent implementation', 'workflow automation', 'efficiency optimization'];
    analysis.businessAspects = ['business transformation', 'process efficiency', 'cost reduction'];
    analysis.challenges = ['setup complexity', 'integration challenges', 'learning curve'];
    analysis.results = ['streamlined processes', 'reduced manual work', 'improved efficiency'];
    analysis.courseRelevance = 'AI Automation Mastery';
  } else if (content.includes('telegram') && content.includes('monetiz')) {
    analysis.mainTopic = 'Telegram Bot Monetization';
    analysis.specificTools = ['Telegram Bot API', 'payment processing', 'subscription systems'];
    analysis.techniques = ['bot development', 'payment integration', 'user engagement'];
    analysis.platforms = ['Telegram'];
    analysis.businessAspects = ['revenue generation', 'subscription models', 'user retention'];
    analysis.challenges = ['telegram api limits', 'payment processing', 'user acquisition'];
    analysis.results = ['recurring revenue', 'automated income', 'scalable business'];
    analysis.courseRelevance = 'Revenue Optimization Secrets';
  } else if (content.includes('twitter') || content.includes(' x ')) {
    analysis.mainTopic = 'Twitter/X Growth Strategy';
    analysis.specificTools = ['Twitter API', 'scheduling tools', 'analytics platforms'];
    analysis.techniques = ['content automation', 'engagement optimization', 'follower growth'];
    analysis.platforms = ['Twitter', 'X'];
    analysis.businessAspects = ['audience building', 'brand awareness', 'lead generation'];
    analysis.challenges = ['algorithm changes', 'api rate limits', 'content saturation'];
    analysis.results = ['increased followers', 'better engagement', 'more leads'];
    analysis.courseRelevance = 'Creator Business Blueprint';
  } else if (content.includes('instagram')) {
    analysis.mainTopic = 'Instagram Growth & Automation';
    analysis.specificTools = ['Instagram API', 'growth tools', 'content schedulers'];
    analysis.techniques = ['growth hacking', 'content optimization', 'engagement strategies'];
    analysis.platforms = ['Instagram'];
    analysis.businessAspects = ['brand building', 'influencer marketing', 'e-commerce integration'];
    analysis.challenges = ['shadowbans', 'algorithm updates', 'content competition'];
    analysis.results = ['follower growth', 'increased engagement', 'brand awareness'];
    analysis.courseRelevance = 'Instagram Ignited';
  } else if (content.includes('ai') || content.includes('automation')) {
    analysis.mainTopic = 'AI & Automation Strategy';
    analysis.specificTools = ['AI tools', 'automation platforms', 'workflow systems'];
    analysis.techniques = ['ai integration', 'process automation', 'efficiency optimization'];
    analysis.businessAspects = ['productivity improvement', 'cost savings', 'scalability'];
    analysis.challenges = ['implementation complexity', 'tool selection', 'training requirements'];
    analysis.results = ['time savings', 'improved accuracy', 'reduced costs'];
    analysis.courseRelevance = 'AI Automation Mastery';
  } else if (content.includes('digital product') || content.includes('template')) {
    analysis.mainTopic = 'Digital Product Creation';
    analysis.specificTools = ['design tools', 'marketplace platforms', 'payment systems'];
    analysis.techniques = ['product development', 'market research', 'pricing strategies'];
    analysis.businessAspects = ['passive income', 'scalable products', 'market positioning'];
    analysis.challenges = ['market saturation', 'pricing competition', 'quality standards'];
    analysis.results = ['recurring revenue', 'scalable income', 'brand authority'];
    analysis.courseRelevance = 'Digital Products Empire';
  } else if (content.includes('revenue') || content.includes('monetiz')) {
    analysis.mainTopic = 'Revenue Optimization';
    analysis.specificTools = ['analytics tools', 'conversion tracking', 'pricing tools'];
    analysis.techniques = ['conversion optimization', 'pricing psychology', 'revenue streams'];
    analysis.businessAspects = ['profit maximization', 'growth strategies', 'market expansion'];
    analysis.challenges = ['conversion rates', 'customer acquisition', 'retention issues'];
    analysis.results = ['increased revenue', 'better margins', 'sustainable growth'];
    analysis.courseRelevance = 'Revenue Optimization Secrets';
  }
  
  console.log(`🎯 Main Topic: ${analysis.mainTopic}`);
  console.log(`🔧 Tools: ${analysis.specificTools.join(', ')}`);
  console.log(`📊 Techniques: ${analysis.techniques.join(', ')}`);
  console.log(`💰 Course: ${analysis.courseRelevance || 'None specific'}`);
  
  return analysis;
}

// INTELLIGENT PERSONALITIES - Each discusses content differently
const intelligentPersonalities = {
  technicalExpert: {
    style: "Deep technical analysis of implementation",
    getComment: (analysis) => {
      const tool = analysis.specificTools[0] || 'this approach';
      const technique = analysis.techniques[0] || 'implementation';
      const challenge = analysis.challenges[0] || 'technical complexity';
      
      return [
        `${tool} implementation looks solid, but ${challenge} can be tricky. The ${technique} approach here is actually well thought out.`,
        `Been working with ${tool} for months - the ${technique} strategy mentioned here addresses the main ${challenge} issues most people face.`,
        `Good breakdown of ${tool}. Most tutorials skip the ${technique} part but that's crucial for avoiding ${challenge}.`
      ][Math.floor(Math.random() * 3)];
    }
  },
  
  businessFocused: {
    style: "ROI and business impact analysis",
    getComment: (analysis) => {
      const business = analysis.businessAspects[0] || 'business improvement';
      const result = analysis.results[0] || 'positive outcomes';
      const tool = analysis.specificTools[0] || 'this solution';
      
      return [
        `The ${business} potential here is huge. Implemented similar approach and saw ${result} within first month.`,
        `From a business perspective, ${tool} makes sense for ${business}. The ${result} alone justifies the investment.`,
        `ROI on ${tool} is excellent for ${business}. ${result} typically pays for itself in 2-3 months.`
      ][Math.floor(Math.random() * 3)];
    }
  },
  
  experienceSharer: {
    style: "Personal experience with the topic",
    getComment: (analysis) => {
      const technique = analysis.techniques[0] || 'this method';
      const result = analysis.results[0] || 'good results';
      const challenge = analysis.challenges[0] || 'some challenges';
      
      return [
        `Tried ${technique} last quarter and got ${result}. Had to work through ${challenge} but worth it.`,
        `Can confirm ${technique} works. Took 3 weeks to see ${result} but the ${challenge} part was manageable.`,
        `Been using ${technique} for 6 months. The ${result} is real, just prepare for ${challenge} during setup.`
      ][Math.floor(Math.random() * 3)];
    }
  },
  
  questionAsker: {
    style: "Asks specific questions about implementation",
    getComment: (analysis) => {
      const tool = analysis.specificTools[0] || 'this';
      const challenge = analysis.challenges[0] || 'implementation issues';
      const technique = analysis.techniques[0] || 'this approach';
      
      return [
        `How do you handle ${challenge} with ${tool}? Running into issues with the ${technique} part.`,
        `What's your experience with ${challenge} when using ${tool}? The ${technique} seems complex.`,
        `Anyone else facing ${challenge} with ${tool}? The ${technique} documentation is lacking.`
      ][Math.floor(Math.random() * 3)];
    }
  },
  
  resultsFocused: {
    style: "Shares specific metrics and outcomes",
    getComment: (analysis) => {
      const result = analysis.results[0] || 'improvements';
      const technique = analysis.techniques[0] || 'this method';
      const timeframe = ['2 weeks', '1 month', '6 weeks', '2 months'][Math.floor(Math.random() * 4)];
      const metric = ['40%', '60%', '80%', '120%', '200%'][Math.floor(Math.random() * 5)];
      
      return [
        `Implemented ${technique} and saw ${metric} ${result} in ${timeframe}. Numbers don't lie.`,
        `Week 3 of using ${technique}: ${result} up ${metric}. Tracking everything in spreadsheet.`,
        `Month 2 results: ${technique} delivered ${metric} improvement in ${result}. Worth the effort.`
      ][Math.floor(Math.random() * 3)];
    }
  },
  
  toolCritic: {
    style: "Compares tools and criticizes alternatives",
    getComment: (analysis) => {
      const tool = analysis.specificTools[0] || 'this solution';
      const challenge = analysis.challenges[0] || 'common issues';
      
      const alternatives = ['Zapier', 'Make.com', 'generic solutions', 'expensive alternatives', 'overhyped tools'];
      const alternative = alternatives[Math.floor(Math.random() * alternatives.length)];
      
      return [
        `${tool} beats ${alternative} hands down. No more ${challenge} like with other platforms.`,
        `Finally something that works unlike ${alternative}. The ${challenge} issue is actually solved here.`,
        `Switched from ${alternative} to ${tool}. Night and day difference, especially for ${challenge}.`
      ][Math.floor(Math.random() * 3)];
    }
  },
  
  coursePromotions: {
    style: "Naturally mentions relevant courses",
    getComment: (analysis, courseUrl) => {
      const technique = analysis.techniques[0] || 'this approach';
      const courseName = analysis.courseRelevance || 'relevant course';
      
      return [
        `This ${technique} is exactly what's covered in ${courseName}. Anyro's course goes much deeper on implementation.`,
        `Learned this ${technique} from ${courseName}. The course has step-by-step breakdown plus troubleshooting.`,
        `${courseName} covers this ${technique} plus 10 other strategies. Anyro's approach is comprehensive.`
      ][Math.floor(Math.random() * 3)];
    }
  }
};

// GENERATE INTELLIGENT COMMENT for specific post
function generateIntelligentComment(post, personalityType) {
  const analysis = analyzePostContent(post);
  const personality = intelligentPersonalities[personalityType];
  
  if (personalityType === 'coursePromotions' && analysis.courseRelevance) {
    return personality.getComment(analysis, analysis.courseRelevance);
  } else if (personalityType !== 'coursePromotions') {
    return personality.getComment(analysis);
  }
  
  // Fallback generic comment
  return `Interesting approach to ${analysis.mainTopic.toLowerCase()}. The implementation details are solid.`;
}

// GENERATE COMMENTS FOR SINGLE POST
function generateCommentsForSinglePost(post, commentCount = 8) {
  console.log(`\n🎭 GENERATING ${commentCount} INTELLIGENT COMMENTS FOR: "${post.title}"`);
  
  const personalities = Object.keys(intelligentPersonalities);
  const comments = [];
  
  // Ensure course promotion (20% chance)
  const shouldIncludeCourse = Math.random() < 0.2;
  
  for (let i = 0; i < commentCount; i++) {
    let selectedPersonality;
    
    if (shouldIncludeCourse && i === 0) {
      selectedPersonality = 'coursePromotions';
    } else {
      selectedPersonality = personalities[Math.floor(Math.random() * (personalities.length - 1))]; // Exclude coursePromotions
    }
    
    const content = generateIntelligentComment(post, selectedPersonality);
    
    const comment = {
      id: Math.random().toString(36).substr(2, 9),
      username: 'Guest',
      avatar: '',
      content: content,
      timestamp: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toISOString(),
      likes: Math.floor(Math.random() * 50) + 1,
      replies: [],
      isOP: false
    };
    
    console.log(`   ${i + 1}. [${selectedPersonality}] "${content}"`);
    comments.push(comment);
  }
  
  return {
    postSlug: post.slug,
    comments,
    commentCount: comments.length
  };
}

// INTERACTIVE GENERATOR - One post at a time
async function generateIndividualComments() {
  console.log('🎯 INDIVIDUAL INTELLIGENT COMMENT GENERATOR');
  console.log('✨ Analyzes each post individually for relevant discussions\n');
  
  const blogPosts = getBlogPosts();
  console.log(`📚 Found ${blogPosts.length} blog posts\n`);
  
  // Start with first post
  const firstPost = blogPosts[0];
  const comments = generateCommentsForSinglePost(firstPost, 8);
  
  console.log(`\n✅ Generated ${comments.commentCount} intelligent comments for "${firstPost.title}"`);
  console.log('\n🔍 SAMPLE COMMENTS:');
  comments.comments.forEach((comment, i) => {
    console.log(`${i + 1}. "${comment.content}"`);
  });
  
  return comments;
}

if (require.main === module) {
  generateIndividualComments().catch(console.error);
}

module.exports = { generateCommentsForSinglePost, generateIntelligentComment, analyzePostContent };