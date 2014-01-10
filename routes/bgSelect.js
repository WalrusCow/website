/*
 * Randomly select a background for use.
 */

var fs = require('fs');
var path = require('path');

function randInt(min, max) {
  /* Return random integer in interval [min, max]. */
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function bgSelect() {
  /* Select a random background and return the file name. */
  var rootDir = path.dirname(__dirname);
  var bgFiles = fs.readdirSync(path.join(rootDir, 'public', 'images', 'bg'));
  var bgIndex = randInt(0, bgFiles.length - 1);
  return bgFiles[bgIndex];
}

module.exports = bgSelect;
