var fs = require('fs');
var crox = require('crox');

module.exports = function(app) {
  var cache = {};

  crox.__express = crox.renderFile = function renderFile(path, options, fn) {
    // support callback API
    if ('function' == typeof options) {
      fn = options, options = undefined;
    }
    if (typeof fn === 'function') {
      var res;
      try {
        res = renderFile(path, options);
      } catch (ex) {
        return fn(ex);
      }
      return fn(null, res);
    }

    options = options || {};

    var key = path + ':crox';

    options.filename = path;
    var str = options.cache ? cache[key] || (cache[key] = fs.readFileSync(path, 'utf-8')) : fs.readFileSync(path, 'utf-8');
    return crox.render(str, options);
  };

  if (app.handle) {
    app.engine('crox', crox.__express);
  }
};

