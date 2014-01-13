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
app.use(express.favicon(path.join(__dirname, 'public/images/icon.gif')));

app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());

app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

for (var path in routes.get) {
  app.get(path, routes.get[path]);
}
app.get('/resume', function(req, res) {
  res.redirect('/resume.pdf');
});

http.createServer(app).listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});
