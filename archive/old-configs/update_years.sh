#!/bin/bash

# Update all 2024 references to 2025 in the codebase
# Excluding datePublished and dateModified fields

echo "Updating 2024 to 2025 across all files..."

# Function to update a file
update_file() {
    local file=$1
    echo "Processing: $file"
    
    # Create a temporary file
    temp_file="${file}.tmp"
    
    # Read the file line by line and update
    while IFS= read -r line; do
        # Skip lines with datePublished or dateModified
        if [[ $line =~ datePublished|dateModified ]]; then
            echo "$line"
        else
            # Replace 2024 with 2025
            echo "${line//2024/2025}"
        fi
    done < "$file" > "$temp_file"
    
    # Replace the original file
    mv "$temp_file" "$file"
}

# Find all TypeScript/JavaScript files and update them
find src/app -type f \( -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" \) | while read -r file; do
    if grep -q "2024" "$file"; then
        update_file "$file"
    fi
done

echo "Update complete!"