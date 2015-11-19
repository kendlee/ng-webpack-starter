'use strict';

var express = require('express'),
    app = express(),
    browserSync = require('browser-sync'),
    PORT = process.env.PORT || 8080;

require('./backend/routes')(app);

app.listen(PORT, listening);

function listening() {
  browserSync.init({
    open: false,
    port: 3000,
    proxy: 'localhost:' + PORT,
    files: ['app/**/*.{js,css,html}']
  }, function() {
    console.log('Browser sync running on port: ' + 3000);
  });
}
