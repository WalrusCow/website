/*
 * Index route. Also expose all other routes.
 */

var path = require('path');
var fs = require('fs');

exports.projects = require('./projects');

function randInt(min, max) {
  /* Return random integer in interval [min, max]. */
  return Math.floor(Math.random() * (max - min + 1) + min);
}

exports.index = function(req, res) {
  // Generate a random background
  var rootDir = path.dirname(__dirname);
  var bgFiles = fs.readdirSync(path.join(rootDir, 'public', 'images', 'bg'));
  console.log(bgFiles);
  var bgIndex = randInt(0, bgFiles.length - 1);
  var bg = bgFiles[bgIndex];

  res.render('index', { title: 'William McDonald', background: bg });
};
