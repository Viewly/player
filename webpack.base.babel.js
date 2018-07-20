/* eslint-disable import/no-extraneous-dependencies */
import { optimize } from 'webpack'
import { resolve } from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import Dotenv from 'dotenv'
import Autoprefixer from 'autoprefixer'

// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin; // eslint-disable-line

Dotenv.config()

const appPath = resolve(__dirname, 'src')

const isProd = process.env.NODE_ENV === 'production'

const scssLoaderOptions = {
  data: '@import "variables";',
  includePaths: [resolve(__dirname, 'src/scss'), resolve(__dirname, 'node_modules')],
  sourceMap: !isProd,
}

module.exports = {
  module: {
    rules: [
      {
        test: /\.js?$/,
        include: [appPath],
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.(jpg|jpeg|gif|png|svg|)$/,
        include: [appPath],
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: '/img/[name].[ext]',
        },
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: '/font/[name].[ext]',
        },
      },
      {
        test: /\.(scss|css)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: !isProd,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: () => [Autoprefixer],
                sourceMap: !isProd,
              },
            },
            {
              loader: 'sass-loader',
              options: scssLoaderOptions,
            },
          ],
        }),
      },
    ],
  },

  plugins: [
    // new BundleAnalyzerPlugin(),

    new HtmlWebpackPlugin({
      title: process.env.APP_TITLE || 'Embedded mediaplayer',
      template: resolve(__dirname, 'index.ejs'),
      inject: 'body',
      hash: !isProd,
    }),

    new ExtractTextPlugin({
      disable: !isProd,
      filename: 'css/app-[hash].css',
    }),

    new optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: isProd ? 'js/vendor-[hash].js' : 'js/vendor.js',
      minChunks: module => module.resource && /node_modules/.test(module.resource),
    }),
  ],

  resolve: {
    modules: [resolve('node_modules'), appPath],
  },
}
