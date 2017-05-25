/**
 * Dependencies
*/

const express = require('express');
const kraken = require('kraken-js');

/**
 * Setup Server
 */

const server = express();

server.use(kraken());

server.on('start', () => {
  console.log('%s server running port 8000', server.kraken.get('env:env')); // eslint-disable-line no-console
});

/**
 * Run Server
 */

server.listen(8000);
