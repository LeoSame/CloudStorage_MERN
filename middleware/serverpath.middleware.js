const config = require('config');
const path = require('path');

function serverPath(path) {
  return function (req, res, next) {
    if (process.env.NODE_ENV === 'production') {
      req.serverPath = config.get('serverPath');
    } else {
      req.serverPath = path;
    }
    next();
  };
}

module.exports = serverPath;
