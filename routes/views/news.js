var keystone = require('keystone');
var async = require('async');

module.exports = function (req, res) {

    var view = new keystone.View(req, res);
    var locals = res.locals;
    locals.section = 'news';
    locals.posts = []


    var Post = keystone.list('Post');

    view.on('init', function (next) {
      //This gets all posts; in future may want to implement pagination
        var q = Post.model.find().where({state:'published'}).sort({ publishedDate: -1 });
          q.exec(function(err, results){
          locals.posts = results;         
          next(err);
        })
      })

    view.render('news');
  };