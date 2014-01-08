/*
 * Index route. Also expose all other routes.
 */

exports.index = function(req, res) {
  res.render('index', { title: 'William McDonald' });
};
