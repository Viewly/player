#!/bin/sh
npm run build
if [ -d "build" ]; then
  cd build
  aws s3 sync . s3://viewly-player-dev
  # aws cloudfront create-invalidation --distribution-id XXXXXXXXXXX --paths /index.html
fi

while true; do echo 'sleeping'; sleep 3600; done
