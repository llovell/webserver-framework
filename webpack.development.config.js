/**
 * Dependencies
*/

const { resolve } = require('path');
const { NamedModulesPlugin, HotModuleReplacementPlugin } = require('webpack'); // eslint-disable-line import/no-extraneous-dependencies

/**
 * Exports
*/

module.exports = {
  devtool: 'source-map',
  entry: {
    app: [
      './client/app.js',
      'webpack/hot/dev-server',
      'webpack-dev-server/client?http://localhost:8080',
    ],
  },
  plugins: [
    new NamedModulesPlugin(),
    new HotModuleReplacementPlugin(),
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: [
        'babel-loader',
      ],
      exclude: '/node_modules/',
    }],
  },
  output: {
    path: resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].js',
  },
};
