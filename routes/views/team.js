var keystone = require('keystone');
var async = require('async');

module.exports = function (req, res) {

    var view = new keystone.View(req, res);
    var locals = res.locals;
    locals.section = 'team';
    locals.team = []


    var Person = keystone.list('Person');

    view.on('init', function (next) {
        var q = Person.model.find().populate('category');
        q.exec(function (err, results) {
            const categories = results.map(person => person.category.name);
            locals.categories = categories;
            locals.team = results;
            next(err);
        })
    })

    view.render('team');
};