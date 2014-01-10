/*
 * Route for projects page.
 */

var bgSelect = require('./bgSelect');

function main(req, res) {
  var bg = bgSelect();

  res.render('projects', { title : 'Projects', background: bg });
}

module.exports = main;
