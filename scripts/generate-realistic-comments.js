#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// All users are "Guest" by default - real users can submit comments for approval
const defaultUsername = 'Guest';

// Comment templates by category and type - Reddit/casual style
const commentTemplates = {
  ai: {
    experience: [
      "been using {tool} for like 3 months now and honestly its pretty sick. saves me so much time",
      "tried this workflow thing and ngl my productivity went through the roof. worth checking out",
      "ai tools are getting insane lately. doing stuff i never thought possible lol",
      "remember when i first found {tool}? mind = blown. cant work without it now",
      "was super skeptical about ai replacing humans but... yeah this stuff actually works"
    ],
    question: [
      "anyone tried mixing this with {tool}? wondering if they work together",
      "whats the learning curve like? complete noob here",
      "looks cool but is it worth it for small creators? seems like overkill maybe",
      "which tool should i start with? so many options its overwhelming af",
      "how do yall handle the whole ai ethics thing? kinda struggling with it"
    ],
    technical: [
      "api integration looks solid but heads up - rate limiting with {platform} can be a pain",
      "if ur getting setup errors check ur env variables first. learned that the hard way",
      "decent breakdown but watch out for token limits. they sneak up on you",
      "pro tip: async/await makes debugging way easier if ur having api issues",
      "that diagram finally made it click for me. was confused before"
    ],
    skeptical: [
      "sounds too good to be true tbh. anyone actually getting these results?",
      "tried similar stuff before and it was a disaster. why is this different",
      "those roi numbers seem optimistic... got any real case studies?",
      "not trying to be negative but ive been burned by hyped tools before",
      "these demos always look amazing then fall apart in real life"
    ]
  },
  automation: {
    experience: [
      "built something like this for my side hustle. been running for 8 months no issues",
      "this saved me like 15 hrs a week lol. finally can focus on actual work instead of boring stuff",
      "wish i had this guide when i started. would've saved me months of screwing around",
      "roi on automation is nuts once you figure it out. setup sucks but totally worth it",
      "been saying this for years. glad people are finally catching on"
    ],
    technical: [
      "make sure you add error handling. learned that lesson the hard way when everything broke",
      "webhook setup is annoying. test everything before going live trust me",
      "nice tutorial. btw theres an easier way to do triggers on {platform}",
      "code looks good but youll want retry logic for production. just saying",
      "use env variables for api keys. basic security stuff"
    ],
    concern: [
      "my biggest fear is losing the human touch. how do you keep it authentic?",
      "what happens when they change the api? seems like constant maintenance",
      "are there legal issues with automated posting? dont wanna get banned",
      "edge cases always break automation. how do you handle weird stuff?",
      "takes forever to set up. how long till you actually see results?"
    ]
  },
  business: {
    experience: [
      "tried this on my saas and revenue went up 40% last quarter. actually works",
      "been doing online biz for 5 years. wish i had this from the start",
      "used these ideas for my product launch. made way more than expected",
      "started doing this 6 months ago and finally hit 10k/month. crazy",
      "the pricing mindset shift was huge. stopped undercharging immediately"
    ],
    strategy: [
      "the ltv thing really hit me. most people just focus on getting customers",
      "love that its about systems not grinding 24/7. burnout is real",
      "this matches what i learned from {book/course}. consistency wins",
      "finally someone using actual data instead of just stories",
      "glad someone talks about the boring parts. building a business sucks sometimes"
    ],
    question: [
      "how does this work for services vs products? seems different",
      "what should i track early on? theres so many metrics its confusing",
      "seems like it needs a lot of resources. what about solo people?",
      "how long till you saw real results?",
      "whats the biggest mistake people make with this?"
    ]
  },
  marketing: {
    experience: [
      "used this funnel for my course launch. got 12% conversion which is sick",
      "been doing marketing for 10 years. this nails the psychology part",
      "tried this on 3 different niches. worked every time",
      "the content calendar thing saved my life. finally organized",
      "used these tactics for a client. engagement went up 300%"
    ],
    practical: [
      "start small with this stuff. dont try to change everything at once",
      "those email templates are amazing. saved me hours of writing",
      "timing matters way more than people think. test different times",
      "a/b test everything. what works for one audience fails for another",
      "organic > paid ads for long term. ads are good but organic lasts"
    ],
    platforms: [
      "does this work on all platforms? instagram and linkedin are so different",
      "tiktok algorithm changes every week lol. how do you keep up?",
      "anyone try this on newer platforms? thinking about first mover advantage",
      "platform specific tips are helpful. each one needs different approach",
      "cross platform stuff is hard. this helps keep it consistent"
    ]
  },
  development: {
    technical: [
      "clean code examples. error handling looks good",
      "been using this stack for 2 years. these optimizations are solid",
      "architecture makes sense for scaling. would love to see load tests",
      "nice design patterns. separation of concerns is on point",
      "add monitoring and logging for production. otherwise looks good"
    ],
    learning: [
      "new to {technology} and this breakdown helped a lot. thanks",
      "perfect for intermediate devs. not too basic but not overwhelming",
      "coming from {other tech} and this helped bridge the gap",
      "finally understand why we do these patterns. context helps",
      "this filled gaps i didnt know i had. fundamentals matter"
    ],
    practical: [
      "deployed this last week. worked smooth and performance improved",
      "testing section is gold. too many devs skip testing",
      "security stuff is important. see too many projects ignore basics",
      "good docs matter more than people think. nice example",
      "migration path is smart. incremental changes beat big rewrites"
    ]
  }
};

// Reply templates for threaded conversations - casual Reddit style
const replyTemplates = [
  "exactly! ive seen this work too",
  "interesting. did you try {alternative approach}?",
  "thanks for sharing. how long till you saw results?",
  "super helpful. got any good resources for this?",
  "tried something similar but hit {specific issue}. any tips?",
  "good point about {topic}. people miss this",
  "appreciate the real example. theory vs practice is so different",
  "100% agree. mindset is harder than the tech stuff",
  "this is why i love reddit. actual useful info",
  "bookmarking this. good stuff here",
  "different way but same results. multiple solutions work",
  "learning curve was brutal for me too but worth it",
  "what tools did you use? always looking for new stuff",
  "this thread > most paid courses lol",
  "can relate. persistence is key"
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

// All users are "Guest" by default
function getUsernamePool(category) {
  return [defaultUsername];
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