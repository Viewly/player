#!/bin/sh
##################################
##                              ##
##     please run using npm     ##
##  $npm run deploy:production  ##
##                              ##
##################################
if [ -d "build" ]; then
  cd build
  # aws s3 sync . s3://viewly-player-dev
  # aws cloudfront create-invalidation --distribution-id E1QZAKZNN6JR1G --paths /index.html
fi

echo 'Deployed to production.'
echo 'Test URL: https://player.view.ly/?videoId=EoIV9tlT6q2b'
