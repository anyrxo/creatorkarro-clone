// BLOG DISABLED - NO CONTENT
// All blog posts removed due to poor quality content
// The entire blog consisted of sales-focused content with revenue promises
// Keeping minimal structure to avoid build errors

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  description: string;
  category: string;
  date: string;
  readTime: number;
  featured: boolean;
  tags: string[];
}

// Empty blog posts array
export const allBlogPosts: BlogPost[] = [];

// Empty exports to maintain compatibility
export const categories: string[] = [];
export const tags: string[] = [];
export const featuredPosts: BlogPost[] = [];