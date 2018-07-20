#!/bin/sh
##################################
##                              ##
##     please run using npm     ##
##  $npm run deploy:production  ##
##                              ##
##################################
npm run deploy:production
if [ -d "build" ]; then
  cd build
  aws s3 sync . s3://viewly-player
  aws cloudfront create-invalidation --distribution-id E1PKMHDTE0T2K7 --paths /index.html
fi

echo 'Deployed to production.'
echo 'Test URL: https://player.view.ly/?videoId=EoIV9tlT6q2b'

# don't restart kubernetes pod
# this is a hack which gives us deployment logging for free
while true; do echo 'sleeping'; sleep 3600; done
