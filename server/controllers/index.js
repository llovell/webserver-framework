/**
 * Dependencies
*/

const indexModel = require('../models/index');

/**
 * Exports
*/

module.exports = (router) => {
  router.get('/', (req, res) => {
    res.render('index', indexModel());
  });
};
