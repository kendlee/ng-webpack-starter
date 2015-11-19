'use strict';

var express = require('express'),
    app = express(),
    PORT = process.env.PORT || 8080;

require('./backend/routes')(app);

app.listen(PORT, function() {
    console.log('Server running on port: ' + PORT);
});
