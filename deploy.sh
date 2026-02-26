#!/bin/bash
set -e

BUCKET="food.astute.click"
DISTRIBUTION_ID="E25H7S5MTGZWMF"
PROFILE="personal"

echo "Uploading files to S3..."
aws s3 sync . "s3://$BUCKET" \
  --exclude ".git/*" \
  --exclude ".claude/*" \
  --exclude "deploy.sh" \
  --profile="$PROFILE"

echo "Invalidating CloudFront cache..."
aws cloudfront create-invalidation \
  --distribution-id "$DISTRIBUTION_ID" \
  --paths "/*" \
  --profile="$PROFILE"

echo "Deploy complete! Site: https://$BUCKET"
