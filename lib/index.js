var fs = require('fs');
var crox = require('crox');

exports.cache = {};

crox.__express = crox.renderFile = exports.renderFile = function(path, options, fn) {
  // support callback API
  if ('function' == typeof options) {
    fn = options, options = undefined;
  }
  if (typeof fn === 'function') {
    var res;
    try {
      res = exports.renderFile(path, options);
    } catch (ex) {
      return fn(ex);
    }
    return fn(null, res);
  }

  options = options || {};

  var key = path + ':crox';

  options.filename = path;
  var str = options.cache
    ? exports.cache[key] || (exports.cache[key] = fs.readFileSync(path, 'utf-8'))
    : fs.readFileSync(path, 'utf-8');
  return crox.render(str, options);
};

