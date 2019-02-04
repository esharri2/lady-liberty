var keystone = require("keystone");
var handlebars = require("express-handlebars");
require("dotenv").config();

//Read about more options here:
//https://keystonejs.com/documentation/configuration/
keystone.init({
  "cookie secret": process.env.KEYSTONESECRET,
  // 'cookie secret': "test",
  name: "ladyliberty",
  sass: "public",
  static: "public",
  "user model": "User",
  "auto update": true,
  auth: true,
  port: process.env.PORT,
  mongo: process.env.MONGO_URI || "mongodb://localhost/prodco",
  views: "templates/views",
  "view engine": ".hbs",
  "custom engine": handlebars.create({
    layoutsDir: "templates/views/layouts",
    partialsDir: "templates/views/partials",
    defaultLayout: "default",
    helpers: new require("./templates/views/helpers")(),
    extname: ".hbs"
  }).engine,
  "cloudinary config": process.env.CLOUDINARY_URL
});

keystone.set("routes", require("./routes"));

keystone.import("models");

keystone.start();
