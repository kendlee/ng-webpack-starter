'use strict';

var express = require('express'),
    app = express(),
    browserSync = require('browser-sync'),
    PORT = process.env.PORT || 8080,
    BROWSERSYNC_PORT = process.env.BROWSERSYNC_PORT || 3000;

require('./backend/routes')(app);

app.listen(PORT, listening);

function listening() {
  browserSync.init({
    open: false,
    port: BROWSERSYNC_PORT,
    proxy: 'localhost:' + PORT,
    files: ['app/**/*.{js,css,html}']
  }, function() {
    console.log('Browser sync running on port: ' + BROWSERSYNC_PORT);
  });
}
