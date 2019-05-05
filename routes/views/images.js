var keystone = require("keystone");
var async = require("async");

module.exports = function(req, res) {
  var view = new keystone.View(req, res);
  var locals = res.locals;
  locals.section = "images";
  var Image = keystone.list("Image");
  view.on("init", function(next) {
    var q = Image.model.find();
    q.exec(function(err, results) {
      results = results || [];
      const numOfColumns = 3;
      //To do - create these dynamically based on "numOfColumns"
      const columns = {
        col1: [],
        col2: [],
        col3: []
      };
      const col1 = [];
      const col2 = [];
      const col3 = [];
      const columnQuantity = results.length / numOfColumns;
      results.forEach((painting, index) => {
        if (index >= 0 && index < columnQuantity) {
          columns.col1.push(painting);
        } else if (index >= columnQuantity && index < columnQuantity * 2) {
          columns.col2.push(painting);
        } else {
          columns.col3.push(painting);
        }
      });
      locals.images = columns;
      next(err);
    });
  });
  view.render("images");
};
