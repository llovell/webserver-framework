/**
 * Dependencies
*/

const express = require('express');

/**
 * Setup Server
 */

const server = express();

server.set('view engine', 'ejs');

server.get('*', (req, res) => {
  res.send('hello world');
});

/**
 * Run Server
 */

server.listen(8000, () => {
  console.log('Server up: 8000'); // eslint-disable-line no-console
});
