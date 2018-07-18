/* eslint-disable import/no-extraneous-dependencies */
import { DefinePlugin } from 'webpack'
import Config from 'webpack-config'
import { resolve } from 'path'
import CleanWebpackPlugin from 'clean-webpack-plugin'
import UglifyJSPlugin from 'uglifyjs-webpack-plugin'

const appPath = resolve(__dirname, 'src')

export default new Config().extend('webpack.base.babel.js').merge({
  entry: ['babel-polyfill', appPath],

  output: {
    filename: 'js/app.js',
    path: resolve(__dirname, 'build'),
    publicPath: '/',
  },

  plugins: [
    new DefinePlugin({
      'process.env': {
        DEMO: process.env.DEMO,
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),

    new CleanWebpackPlugin(['build'], {
      root: resolve(__dirname),
      verbose: true,
      dry: false,
    }),

    new UglifyJSPlugin({
      uglifyOptions: {
        // fix - Uncaught ReferenceError: n is not defined
        // https://github.com/videojs/videojs-contrib-hls/issues/600#issuecomment-332627109
        compress: {
          comparisons: false,
        },
      },
    }),
  ],
})
