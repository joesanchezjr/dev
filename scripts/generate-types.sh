#!/bin/bash

# Check for an environment-specific .env file
ENV_FILE=".env"

# Determine the environment based on an argument or default to "development"
if [ "$1" ]; then
  ENV_FILE=".env.$1"
fi

# Load environment variables from the selected .env file
if [ -f "$ENV_FILE" ]; then
  source "$ENV_FILE"
else
  echo "Error: $ENV_FILE not found."
  exit 1
fi

# Use regex to extract a substring of the SUPABASE_PROJECT_ID
if [[ "$NEXT_PUBLIC_SUPABASE_URL" =~ https://(.+).supabase.co ]]; then
    # Extracted substring is the first match in BASH_REMATCH
    SUPABASE_PROJECT_ID="${BASH_REMATCH[1]}"
    echo "🔍 Found project id: $SUPABASE_PROJECT_ID"
else
    echo "Error: NEXT_PUBLIC_SUPABASE_URL does not match the expected pattern."
    exit 1
fi

echo "✨ Generating types..."

# Run the supabase command with the PROJECT_ID environment variable
npx supabase gen types typescript --project-id "$SUPABASE_PROJECT_ID" > src/types/database.types.ts

echo "✅ Done! Find types at src/types/database.types.ts"

