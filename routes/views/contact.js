var keystone = require('keystone');
var async = require('async');

module.exports = function (req, res) {

    var view = new keystone.View(req, res);
    var locals = res.locals;
    locals.name="Evan";

    var User = keystone.list('User');

    view.on('init', function (next) {
        var q = User.model.find();
        q.exec(function(err, results){
            console.log(results);
            locals.users = results[0];
            next(err);
        })
      })

    view.render('contact');
  };