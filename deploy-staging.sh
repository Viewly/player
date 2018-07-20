#!/bin/sh
##################################
##                              ##
##     please run using npm     ##
##   $ npm run deploy:staging   ##
##                              ##
##################################
if [ -d "build" ]; then
  cd build
  aws s3 sync . s3://viewly-player-dev
  aws cloudfront create-invalidation --distribution-id E1QZAKZNN6JR1G --paths /index.html
fi

echo 'Deployed to staging.'
echo 'Test URL: https://player-staging.view.ly/?videoId=4SKNbZdCoI0c'