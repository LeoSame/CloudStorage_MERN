const config = require('config');
const path = require('path');

function serverPath(path) {
  return function (req, res, next) {
    if (path.includes('Desktop')) {
      req.serverPath = path;
    } else {
      req.serverPath = config.get('serverPath');
    }

    next();
  };
}

module.exports = serverPath;
