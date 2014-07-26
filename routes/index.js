/*
 * Expose all routes.
 */

var bgSelect = require('./bgSelect');

// All sorts of almost-static routes
var getRoutes = {
  '/': {
    view: 'index',
    title: 'William McDonald',
    nav: 'home',
  },
  '/projects': {
    view: 'projects',
    title: 'Projects',
    nav: 'projects',
  },
  '/projects/life': {
    view: 'life',
    title: 'Game of Life',
    nav: 'projects',
  },
  '/projects/tetvas': {
    view: 'tetvas',
    title: 'Tetvas',
    nav: 'projects',
  },
  '/projects/snake': {
    view: 'snake',
    title: 'Snake',
    nav: 'projects',
  },
};

function createRoute(info) {
  /* Return a new routing function based on `info`. */
  return function(req, res) {
    var bg = bgSelect();
    res.render(info.view, { title: info.title, background: bg, nav: info.nav });
  };
}

// Build routes
exports.get = {};
for (var path in getRoutes) {
  exports.get[path] = createRoute(getRoutes[path]);
}
