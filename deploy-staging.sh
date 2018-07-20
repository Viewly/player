#!/bin/sh
##################################
##                              ##
##     please run using npm     ##
##   $ npm run deploy:staging   ##
##                              ##
##################################
npm run deploy:staging
if [ -d "build" ]; then
  cd build
  aws s3 sync . s3://viewly-player-dev
  aws cloudfront create-invalidation --distribution-id E1QZAKZNN6JR1G --paths /index.html
fi

echo 'Deployed to staging.'
echo 'Test URL: https://player-staging.view.ly/?videoId=4SKNbZdCoI0c'

# don't restart kubernetes pod
# this is a hack which gives us deployment logging for free
while true; do echo 'sleeping'; sleep 3600; done
