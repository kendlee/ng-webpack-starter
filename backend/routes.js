var express = require('express');

module.exports = function(app) {
  app.use('/static',express.static('bower_components'));
  app.use(express.static('app'));
};
