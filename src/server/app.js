'use strict';

// Module Configuration 
var express = require('express');
var app     = express();
var swig    = require('swig');

// Set up view engine
app.engine('html', swig.renderFile);

app.set('view engine','html');
app.set('views', __dirname + '/views');

// Set the public static resource folder
app.use(express.static(__dirname + '/../client/'));

// Set up port
var port = process.env.PORT || 1337;

// Set up routes
require('./routes/index.js')(app);

// Start the server
app.listen(port);

// Shout out to the user
console.log(`Magic is happening on port ${port}`);