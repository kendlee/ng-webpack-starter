'use strict';

var express = require('express'),
    app = express(),
    browserSync = require('browser-sync'),
    PORT = process.env.PORT || 8080;

require('./backend/routes')(app);

app.listen(PORT, listening);

function listening() {
  console.log('Server running on port: ' + PORT);
  browserSync({
    proxy: 'localhost:' + PORT,
    files: ['app/**/*.{js,css,html}']
  });
}
