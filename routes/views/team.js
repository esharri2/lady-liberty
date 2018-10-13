var keystone = require('keystone');
var async = require('async');

module.exports = function (req, res) {

    var view = new keystone.View(req, res);
    var locals = res.locals;
    locals.section = 'team';


    var Person = keystone.list('Person');

    view.on('init', function (next) {
        var q = Person.model.find().populate('category');
        q.exec(function (err, results) {
            //Create an array of the categories
            const categoriesArray = results.map(person => person.category.name);
            const categories = [...new Set(categoriesArray)];
            const everyone = [];

            //Build team array with team members organized by category
            categories.forEach(item => {
                everyone.push(
                    {
                        label: item,
                        team: results.filter(person => person.category.name === item)
                    })
            }
            )

            console.log(everyone)
            locals.everyone = everyone;

            next(err);
        })


    })


    view.render('team');
};