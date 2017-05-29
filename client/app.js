/**
 * Dependencies
*/

const React = require('react');
const ReactDOM = require('react-dom');

ReactDOM.render(
  <h1>Hello from client</h1>, // eslint-disable-line react/jsx-filename-extension
  document.getElementById('app'),
);

/**
 * Development - Hot Module Replacement
*/

if (module.hot) {
  module.hot.accept();
}
