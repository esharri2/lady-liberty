var keystone = require('keystone');
var async = require('async');

module.exports = function (req, res) {

    var view = new keystone.View(req, res);
    var locals = res.locals;
    locals.section = 'team';
    locals.team = []


    var Person = keystone.list('Person');

    view.on('init', function (next) {
        //This gets all Persons; in future may want to implement pagination
        var q = Person.model.find();
        q.exec(function (err, results) {
            locals.team = results;
            console.log(results);
            next(err);
        })
    })

    view.render('team');
};