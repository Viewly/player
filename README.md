# View.ly Video player ★★

## Setup

Tested with node 8.x

```
$ npm install
```

## npm tasks

* `npm start` - starts video player in dev mode and uses params from src/constants/dev-options
* `npm run build:staging` - build video player with staging API
* `npm run build:production` - build video player with production API
* `npm run build` - same as `build:staging`
* `npm run deploy:staging` - runs `build:staging`, deploys it to AWS staging bucket and invalidates cache
* `npm run deploy:production` - runs `build:production`, deploys it to AWS production bucket and invalidates cache

Visit `http://localhost:8080/` from your browser of choice.
Server is visible from the local network as well.
