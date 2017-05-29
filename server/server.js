/**
 * Dependencies
*/

const express = require('express');
const kraken = require('kraken-js');
const { getChunkManifest } = require('./lib/file-handlers.js');
/**
 * Setup Server
 */

const server = express();

server.use(kraken());

// add chunk-manifest keys to app.locals for script refs
if (server.get('env') === 'production') {
  server.locals.chunkManifest = getChunkManifest();
}

server.on('start', () => {
  console.log('%s server running port 8000', server.kraken.get('env:env')); // eslint-disable-line no-console
});

/**
 * Run Server
 */

server.listen(8000);
