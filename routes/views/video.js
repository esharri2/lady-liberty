var keystone = require('keystone');
var async = require('async');

module.exports = function (req, res) {

    var view = new keystone.View(req, res);
    var locals = res.locals;
    locals.section = 'video';

    var Video = keystone.list('Video');

    view.on('init', function (next) {
        var q = Video.model.find();
        q.exec(function (err, results) {
            locals.videos = results;
            next(err);
        })
    })

    view.render('video');
};