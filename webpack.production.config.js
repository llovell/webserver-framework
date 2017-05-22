/**
 * Dependencies
*/

const { resolve } = require('path');
const webpack = require('webpack'); // eslint-disable-line import/no-extraneous-dependencies
const ChunkManifestPlugin = require('chunk-manifest-webpack-plugin'); // eslint-disable-line import/no-extraneous-dependencies
const WebpackChunkHash = require('webpack-chunk-hash'); // eslint-disable-line import/no-extraneous-dependencies

/**
 * Exports
*/

module.exports = {
  entry: {
    app: './client/app.js',
    vendor: './client/vendor.js',
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['vendor', 'manifest'],
      minChunks: Infinity,
    }),
    new webpack.HashedModuleIdsPlugin(),
    new WebpackChunkHash(),
    new ChunkManifestPlugin({
      filename: 'chunk-manifest.json',
      manifestVariable: 'webpackManifest',
      inlineManifest: true,
    }),
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
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js',
  },
};
