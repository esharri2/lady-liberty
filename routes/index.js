var keystone = require('keystone');
var importRoutes = keystone.importer(__dirname);
var middleware = require('./middleware');

//Sets up navLinks object for default template
keystone.pre('routes', middleware.initLocals);

//Import route controllers
var routes = {
  views: importRoutes('./views'),
};

//Setup route bindings
exports = module.exports = function (app) {
  app.get('/', routes.views.index);
  app.get('/about', routes.views.about);
  app.get('/contact', routes.views.contact);
  app.get('/team', routes.views.team);
  app.get('/video', routes.views.video);
  app.get('/images', routes.views.images);


};