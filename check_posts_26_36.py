#!/usr/bin/env python3
from pathlib import Path

# Posts 26-36 from Blog Guide (AI Influencers Course)
posts_26_36 = {
    26: ("ai-influencer-marketing-45b-market-opportunity", "AI Influencer Marketing"),
    27: ("virtual-influencer-statistics-2026-complete-data", "Virtual Influencer Statistics"),
    28: ("ai-influencer-examples-earning-100k-month", "AI Influencer Examples"),
    29: ("cgi-influencer-business-model-revenue-guide", "CGI Influencer Business Model"),
    30: ("synthetic-media-marketing-future-brand-partnerships", "Synthetic Media Marketing"),
    31: ("instagram-ai-influencer-build-virtual-creators-2026", "Instagram AI Influencer"),
    32: ("ai-instagram-model-photorealistic-virtual-creators", "AI Instagram Model"),
    33: ("virtual-influencer-instagram-growth-0-to-100k-followers", "Virtual Influencer Instagram Growth"),
    34: ("instagram-algorithm-ai-content-what-works-2026", "Instagram Algorithm for AI Content"),
    35: ("ai-influencer-aesthetic-design-styles-followers", "AI Influencer Aesthetic"),
    36: ("ai-influencer-generator-top-12-tools-2026", "AI Influencer Generator"),
    37: ("lora-training-influencer-perfect-face-consistency", "LoRA Training for Influencers"),
}

blog_dir = Path("src/app/blog")
existing_posts = [d.name for d in blog_dir.iterdir() if d.is_dir()]

print(f"\n{'='*70}")
print(f"CHECKING POSTS 26-37 FROM BLOG GUIDE")
print(f"{'='*70}\n")

found = []
missing = []

for post_num, (slug, title) in posts_26_36.items():
    if slug in existing_posts:
        found.append((post_num, slug, title))
        print(f"✓ Post {post_num}: {title}")
        print(f"  Slug: {slug}\n")
    else:
        missing.append((post_num, slug, title))
        print(f"✗ Post {post_num}: {title} - MISSING")
        print(f"  Expected slug: {slug}\n")

print(f"{'='*70}")
print(f"SUMMARY:")
print(f"  Found: {len(found)} / {len(posts_26_36)}")
print(f"  Missing: {len(missing)}")
print(f"{'='*70}")

if missing:
    print(f"\nMISSING POSTS:")
    for post_num, slug, title in missing:
        print(f"  - Post {post_num}: {title} ({slug})")
else:
    print(f"\n✅ ALL POSTS 26-37 ARE PRESENT!")

