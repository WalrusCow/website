/*
 * Route for projects page.
 */

function main(req, res) {
  res.render('projects', { title : 'Projects' });
}

module.exports = projects;
