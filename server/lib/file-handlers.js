/**
 * Dependencies
*/

const { resolve } = require('path');
const find = require('find');

/**
 * File Handlers
*/

const getChunkManifest = () => {
  const chunkManifest = {};

  // find and attach manifest file
  chunkManifest.manifestfile = find.fileSync(/manifest\./,
                                             resolve(__dirname, '../public/dist'))
                                             .pop().split('/').slice(-1)[0];

  // find and attach vendor file
  chunkManifest.vendorfile = find.fileSync(/vendor\./,
                                           resolve(__dirname, '../public/dist'))
                                           .pop().split('/').slice(-1)[0];

  // find and attach app file
  chunkManifest.appfile = find.fileSync(/app\./,
                                        resolve(__dirname, '../public/dist'))
                                        .pop().split('/').slice(-1)[0];

  return chunkManifest;
};

/**
 * Exports
*/

module.exports.getChunkManifest = getChunkManifest;
