#!/usr/bin/env python3
"""
Fix JSX syntax errors in blog posts by escaping < and > characters in text content
"""

import os
import re
from pathlib import Path

def fix_jsx_file(file_path):
    """Fix JSX syntax issues in a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()

        original_content = content
        changes_made = []

        # Common patterns that need fixing (be careful not to replace valid JSX)
        patterns = [
            # Fix comparison operators in text
            (r'([><=]\s*\d+[KMB]?\s*(?:tokens|images|queries|requests|steps|users|followers|views|ms|hours))', lambda m: m.group(0).replace('>', '&gt;').replace('<', '&lt;')),
            (r'(\d+\s*[<>]\s*\d+)', lambda m: m.group(0).replace('>', '&gt;').replace('<', '&lt;')),
            (r'(ROAS\s*[<>]\s*[\d.]+x)', lambda m: m.group(0).replace('>', '&gt;').replace('<', '&lt;')),
            (r'(confidence\s*[<>]\s*\d+%)', lambda m: m.group(0).replace('>', '&gt;').replace('<', '&lt;')),
            (r'(total\s*[<>]\s*\$\d+)', lambda m: m.group(0).replace('>', '&gt;').replace('<', '&lt;')),
            (r'(saves\s*[<>]\s*\d+)', lambda m: m.group(0).replace('>', '&gt;').replace('<', '&lt;')),
            (r'(clicks\s*[<>]\s*\d+)', lambda m: m.group(0).replace('>', '&gt;').replace('<', '&lt;')),
            (r'(Impressions\s*[<>]\s*\d+[KM]?)', lambda m: m.group(0).replace('>', '&gt;').replace('<', '&lt;')),
            (r'(requires\s*[<>]\s*\d+)', lambda m: m.group(0).replace('>', '&gt;').replace('<', '&lt;')),
            (r'(needs\s*[<>]\s*\d+)', lambda m: m.group(0).replace('>', '&gt;').replace('<', '&lt;')),
            (r'(< \d+[KM]?\s+(?:tokens|users|requests|queries))', lambda m: m.group(0).replace('<', '&lt;')),
        ]

        for pattern, replacement in patterns:
            new_content = re.sub(pattern, replacement, content, flags=re.IGNORECASE)
            if new_content != content:
                changes_made.append(f"Applied pattern: {pattern[:50]}")
                content = new_content

        # Save if changes were made
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return True, changes_made

        return False, []

    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False, []

def main():
    """Process all blog post files"""
    blog_dir = Path('src/app/blog')
    total_files = 0
    fixed_files = 0

    # Find all page.tsx files
    for page_file in blog_dir.rglob('page.tsx'):
        total_files += 1
        was_fixed, changes = fix_jsx_file(page_file)

        if was_fixed:
            fixed_files += 1
            print(f"Fixed: {page_file.relative_to(blog_dir)}")
        else:
            pass  # Don't print skipped files

    print(f"\n{'='*60}")
    print(f"Summary: Fixed {fixed_files}/{total_files} files")
    print(f"{'='*60}")

if __name__ == '__main__':
    main()
