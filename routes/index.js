/*
 * Expose all routes.
 */

var bgSelect = require('./bgSelect');

// All sorts of almost-static routes
var getRoutes = {
  '/': {
    view: 'index',
    title: 'William McDonald'
  },
  '/projects': {
    view: 'projects',
    title: 'Projects'
  },
  '/projects/life': {
    view: 'life',
    title: 'Game of Life'
  },
  '/projects/tetvas': {
    view: 'tetvas',
    title: 'Tetvas'
  },
  '/projects/snake': {
    view: 'snake',
    title: 'Snake'
  }
};

function createRoute(info) {
  /* Return a new routing function based on `info`. */
  return function(req, res) {
    var bg = bgSelect();
    res.render(info.view, { title: info.title, background: bg });
  };
}

// Build routes
exports.get = {};
for (var path in getRoutes) {
  exports.get[path] = createRoute(getRoutes[path]);
}
