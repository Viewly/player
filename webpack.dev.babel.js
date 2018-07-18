/* eslint-disable import/no-extraneous-dependencies */
import Config from 'webpack-config'
import { DefinePlugin, HotModuleReplacementPlugin, NamedModulesPlugin, SourceMapDevToolPlugin } from 'webpack'
import { resolve } from 'path'

const appPath = resolve(__dirname, 'src')

export default new Config().extend('webpack.base.babel.js').merge({
  entry: [
    'babel-polyfill',
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://0.0.0.0:8080',
    'webpack/hot/only-dev-server',
    appPath,
  ],

  output: {
    filename: 'js/app.js',
    publicPath: '/',
  },

  devServer: {
    contentBase: appPath,
    historyApiFallback: true,
    hot: true,
    host: '0.0.0.0',
    stats: {
      colors: true,
    },
  },

  plugins: [
    new DefinePlugin({
      'process.env': {
        DEV: true,
      },
    }),

    new SourceMapDevToolPlugin(),
    new HotModuleReplacementPlugin(),
    new NamedModulesPlugin(),
  ],
})
