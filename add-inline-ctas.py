import os
import re
from pathlib import Path

base_path = Path("C:/Users/manna/Downloads/iimaginedaii/creatorkarro-clone/src/app/blog")

# Get all blog post page.tsx files
blog_posts = list(base_path.glob("*/page.tsx"))

print(f"Found {len(blog_posts)} blog posts\n")

def find_contextual_insertion_point(content, blog_slug):
    """
    Intelligently find the BEST place to insert inline CTA.
    Look for natural transition points where readers would be thinking
    "I want to learn more about this" or "How do I actually do this?"
    """

    lines = content.split('\n')

    # Strong contextual triggers that indicate "this is where they want to learn more"
    strong_triggers = {
        # After explaining a complex concept
        'how to': {'weight': 10, 'after_lines': 5},
        'step-by-step': {'weight': 10, 'after_lines': 5},
        'complete guide': {'weight': 9, 'after_lines': 3},
        'master': {'weight': 9, 'after_lines': 3},

        # After showing results/benefits
        'revenue': {'weight': 10, 'after_lines': 8},
        'income': {'weight': 10, 'after_lines': 8},
        'monetize': {'weight': 10, 'after_lines': 8},
        'brand deal': {'weight': 10, 'after_lines': 8},
        'sponsorship': {'weight': 9, 'after_lines': 8},

        # After showing the problem
        'common mistakes': {'weight': 8, 'after_lines': 10},
        'why most': {'weight': 8, 'after_lines': 10},
        'the truth': {'weight': 7, 'after_lines': 8},

        # After value demonstration
        'framework': {'weight': 9, 'after_lines': 5},
        'system': {'weight': 9, 'after_lines': 5},
        'strategy': {'weight': 8, 'after_lines': 5},
        'workflow': {'weight': 8, 'after_lines': 5},

        # After technical explanation (for AI/automation posts)
        'automation': {'weight': 9, 'after_lines': 5},
        'ai influencer': {'weight': 10, 'after_lines': 5},
        'comfyui': {'weight': 10, 'after_lines': 5},
        'n8n': {'weight': 10, 'after_lines': 5},

        # After growth content
        'follower': {'weight': 8, 'after_lines': 5},
        'viral': {'weight': 8, 'after_lines': 5},
        'algorithm': {'weight': 8, 'after_lines': 5},
    }

    # Find all potential insertion points with scores
    candidates = []

    for i, line in enumerate(lines):
        line_lower = line.lower()

        # Skip if we're in a code block, comment, or already near a CTA
        if any(x in line for x in ['```', 'SmartCTA', '/*', '*/', '//']):
            continue

        # Check for strong triggers
        for trigger, config in strong_triggers.items():
            if trigger in line_lower:
                # Calculate score based on:
                # 1. Trigger weight
                # 2. Position in article (prefer 30-60%)
                # 3. Whether it's end of section (look for closing tags)

                position_score = 0
                total_lines = len(lines)
                position_pct = i / total_lines

                # Prefer 30-60% through article
                if 0.30 <= position_pct <= 0.60:
                    position_score = 10
                elif 0.20 <= position_pct <= 0.70:
                    position_score = 7
                else:
                    position_score = 3

                # Check if this is end of a section (after N lines)
                section_end_score = 0
                check_lines = min(config['after_lines'], total_lines - i - 1)

                for j in range(1, check_lines + 1):
                    next_line = lines[i + j] if i + j < total_lines else ""

                    # Look for section ending markers
                    if any(marker in next_line for marker in ['</div></div>', '###', '##', '---', '</section>']):
                        section_end_score = 10
                        insertion_point = i + j
                        break
                else:
                    # Default: insert after specified lines
                    insertion_point = min(i + config['after_lines'], total_lines - 1)

                # Total score
                total_score = config['weight'] + position_score + section_end_score

                candidates.append({
                    'line': insertion_point,
                    'score': total_score,
                    'trigger': trigger,
                    'position_pct': position_pct
                })

    if not candidates:
        # Fallback: 40% mark after a closing div
        fallback_line = int(len(lines) * 0.40)
        for i in range(fallback_line, min(fallback_line + 100, len(lines))):
            if '</div>' in lines[i]:
                return i + 1
        return fallback_line

    # Sort by score (highest first)
    candidates.sort(key=lambda x: x['score'], reverse=True)
    best = candidates[0]

    print(f"    Best placement: line {best['line']} ({best['position_pct']*100:.0f}% through)")
    print(f"    Trigger: '{best['trigger']}' (score: {best['score']})")

    return best['line']

def add_inline_cta(file_path):
    """Add inline CTA to a blog post in the most contextually relevant place."""

    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()

        # Extract blog slug from path
        blog_slug = file_path.parent.name

        # Check if already has inline CTA
        if 'variant="inline"' in content:
            print(f"[SKIP] {blog_slug} - already has inline CTA")
            return False

        # Check if has SmartCTA import
        if 'SmartCTA' not in content:
            print(f"[SKIP] {blog_slug} - no SmartCTA component")
            return False

        print(f"[ANALYZING] {blog_slug}...")

        # Find best insertion point
        insertion_line = find_contextual_insertion_point(content, blog_slug)

        lines = content.split('\n')

        # Create contextual inline CTA
        inline_cta = f'\n        {{/* Inline CTA - Contextually Placed */}}\n        <SmartCTA blogSlug="{blog_slug}" variant="inline" />\n'

        # Insert the inline CTA
        lines.insert(insertion_line, inline_cta)

        # Write back
        new_content = '\n'.join(lines)
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)

        print(f"[OK] {blog_slug} - inline CTA added\n")
        return True

    except Exception as e:
        print(f"[ERROR] {file_path.parent.name} - {e}\n")
        return False

# Process all blog posts
updated_count = 0
for blog_post_path in sorted(blog_posts):
    if add_inline_cta(blog_post_path):
        updated_count += 1

print(f"\n{'='*60}")
print(f"Successfully added inline CTAs to {updated_count} blog posts")
print(f"Total processed: {len(blog_posts)}")
print(f"\nAll CTAs placed contextually after relevant content sections")
