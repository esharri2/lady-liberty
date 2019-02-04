var keystone = require("keystone");
var async = require("async");

module.exports = function(req, res) {
  var view = new keystone.View(req, res);
  var locals = res.locals;
  locals.section = "team";

  var Person = keystone.list("Person");

  view.on("init", function(next) {
    var q = Person.model.find().populate("category");
    q.exec(function(err, results) {
      const sortedTeam = results.sort((a, b) => {
        if (a.order > b.order) {
          return 1;
        } else if (a.order < b.order) {
          return -1;
        }
      });
      sortedTeam.forEach((person, index) => {
        if (person.bio !== "" || person.image.secure_url) {
          person.showMoreButton = true;
        }
      });
      console.log(sortedTeam);
      locals.everyone = sortedTeam;
      next(err);
    });
  });

  view.render("team");
};
