/**
 * Dependencies
*/

const webpack = require('webpack'); // eslint-disable-line import/no-extraneous-dependencies
const WebpackDevServer = require('webpack-dev-server'); // eslint-disable-line import/no-extraneous-dependencies

/**
 * Setup Dev Server
*/

const webpackConfig = require('./webpack.development.config.js');

const compiler = webpack(webpackConfig);
const server = new WebpackDevServer(compiler, {
  hot: true,
  filename: webpackConfig.output.filename,
  publicPath: webpackConfig.output.publicPath,
  stats: {
    colors: true,
  },
});

/**
 * Run Dev Server
*/

server.listen(8080, 'localhost', () => {});
