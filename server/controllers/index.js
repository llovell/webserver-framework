/**
 * Dependencies
*/

const indexModel = require('../models/index');

/**
 * Exports
*/

module.exports = (router) => {
  const model = indexModel();

  router.get('/', (req, res) => {
    res.render('index', model);
  });
};
