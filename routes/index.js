/*
 * Index route. Also expose all other routes.
 */

var bgSelect = require('./bgSelect');

exports.projects = require('./projects');

exports.index = function(req, res) {
  // Generate a random background
  var bg = bgSelect();

  res.render('index', { title: 'William McDonald', background: bg });
};
