/**
 * Dependencies
*/

const indexModel = require('../models/index');

/**
 * Exports
*/

module.exports = (router) => {
  router.get('/', (req, res) => {
    res.render('index', Object.assign({},
                                      indexModel(),
                                      req.app.locals.chunkManifest)); // provide chunkManifest
  });
};
