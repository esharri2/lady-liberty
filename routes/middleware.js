exports.initLocals = function(req, res, next) {
  res.locals.navLinks = [
    { label: "Home", key: "index", href: "/" },
    { label: "The Story", key: "about", href: "/about" },
    { label: "Trailer", key: "video", href: "/video" },
    { label: "Cast and crew", key: "team", href: "/team" },
    { label: "Behind the scenes", key: "images", href: "/images" },
    { label: "Contact", key: "contact", href: "/contact" }
  ];
  res.locals.companyName = "Lady Liberty";
  res.locals.user = req.user;
  next();
};
