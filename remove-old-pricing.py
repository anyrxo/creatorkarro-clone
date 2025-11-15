import re
from pathlib import Path

# Files that still need old pricing removed
files_to_fix = [
    "src/app/blog/comfyui-advanced-techniques-professional-workflows/page.tsx",
    "src/app/blog/digital-product-validation-test-idea-before-building/page.tsx",
    "src/app/blog/sales-page-psychology/page.tsx",
    "src/app/blog/n8n-crm-automation-pipedrive-hubspot-salesforce/page.tsx",
    "src/app/blog/n8n-beginners-guide/page.tsx",
    "src/app/blog/instagram-hashtag-strategy-2025-what-actually-works/page.tsx",
    "src/app/blog/instagram-content-pillars-build-engaged-audience/page.tsx",
    "src/app/blog/how-to-sell-templates/page.tsx",
    "src/app/blog/alpha-evolve-ai-business-empire/page.tsx",
    "src/app/blog/online-course-platform-comparison-teachable-gumroad-thinkific/page.tsx",
    "src/app/blog/make-app-automation/page.tsx",
]

base_path = Path("C:/Users/manna/Downloads/iimaginedaii/creatorkarro-clone")

def remove_old_cta_sections(content):
    """
    Remove old CTA sections that contain $189 or $5,959 pricing
    Strategy: Find sections that contain old pricing and remove the entire section
    """

    # Pattern to match sections with old pricing
    # This pattern looks for <section> tags that contain both $189 and $5,959
    lines = content.split('\n')
    new_lines = []
    i = 0
    sections_removed = 0

    while i < len(lines):
        # Check if we're at a section start
        if '<section' in lines[i]:
            # Look ahead to find the closing </section>
            section_start = i
            section_lines = [lines[i]]
            j = i + 1
            section_depth = 1

            while j < len(lines) and section_depth > 0:
                section_lines.append(lines[j])
                if '<section' in lines[j]:
                    section_depth += 1
                if '</section>' in lines[j]:
                    section_depth -= 1
                    if section_depth == 0:
                        break
                j += 1

            # Check if this section contains old pricing
            section_text = '\n'.join(section_lines)
            has_old_pricing = ('$189' in section_text or '$5,959' in section_text or 'Save $5,770' in section_text)

            # Additional check: make sure it's actually a CTA (has a Link component and old pricing)
            is_cta = 'Link href=' in section_text or '<Link' in section_text or 'href=' in section_text

            if has_old_pricing and is_cta:
                # Skip this section (don't add to new_lines)
                print(f"  Removing old CTA section at lines {section_start+1}-{j+1}")
                sections_removed += 1
                i = j + 1
                continue
            else:
                # Keep this section
                new_lines.extend(section_lines)
                i = j + 1
        else:
            # Not a section start, keep the line
            new_lines.append(lines[i])
            i += 1

    return '\n'.join(new_lines), sections_removed

# Process each file
total_sections_removed = 0

for file_path in files_to_fix:
    full_path = base_path / file_path

    if not full_path.exists():
        print(f"File not found: {file_path}")
        continue

    print(f"\nProcessing: {file_path}")

    try:
        with open(full_path, 'r', encoding='utf-8') as f:
            content = f.read()

        # Check if file has old pricing
        if '$189' not in content and '$5,959' not in content:
            print(f"  No old pricing found, skipping")
            continue

        # Remove old CTA sections
        new_content, sections_removed = remove_old_cta_sections(content)

        if sections_removed > 0:
            # Write back the file
            with open(full_path, 'w', encoding='utf-8') as f:
                f.write(new_content)

            print(f"  [OK] Removed {sections_removed} old CTA section(s)")
            total_sections_removed += sections_removed
        else:
            print(f"  No sections removed (old pricing might be in non-CTA context)")

    except Exception as e:
        print(f"  [ERROR] Error: {e}")

print(f"\n{'='*60}")
print(f"Total sections removed: {total_sections_removed}")
print(f"Files processed: {len(files_to_fix)}")
