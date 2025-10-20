#!/bin/bash

# Fix syntax errors in blog files by adding missing closing brace
cd "/Users/anyro/Downloads/New-Project(10)/creatorkarro-clone"

# Function to fix a file
fix_file() {
    local file="$1"
    if tail -1 "$file" | grep -q "^  )$"; then
        echo "Fixing: $file"
        echo "}" >> "$file"
    fi
}

# Fix all tsx files in blog directory
find src/app/blog -name "*.tsx" -type f | while read file; do
    fix_file "$file"
done

# Also fix the specific file with different pattern
if grep -q "return <BlogComingSoon />$" "src/app/blog/[slug]/BlogComingSoon.tsx"; then
    echo "Fixing: src/app/blog/[slug]/BlogComingSoon.tsx"
    sed -i '' 's/return <BlogComingSoon \/>$/return <BlogComingSoon \/>\n}/' "src/app/blog/[slug]/BlogComingSoon.tsx"
fi

echo "Done fixing syntax errors"