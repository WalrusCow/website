/*
 * Main server file.
 */

var http = require('http');
var path = require('path');

var express = require('express');
var routes = require('./routes');

var app = express();

// Port to run on
app.set('port', process.env.PORT || 80);

// Views folder to use
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// Site icon
app.use(express.favicon(path.join(__dirname, '/public/images/icon.gif')));

// Dev only
app.use(express.logger('dev'));
app.use(express.json());

app.use(express.urlencoded());
app.use(express.methodOverride());

app.use(app.router);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', routes.index);
app.get('/projects', routes.projects);

http.createServer(app).listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});
