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

/**
 * Run Server
 */

server.listen(8000, () => {
  console.log('Server up: 8000'); // eslint-disable-line no-console
});
