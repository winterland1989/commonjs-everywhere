// Generated by CoffeeScript 2.0.0-beta4
void function () {
  var path;
  path = require('path');
  module.exports = function (root, file) {
    return '/' + path.relative(root, file);
  };
}.call(this);