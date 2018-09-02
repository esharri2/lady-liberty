exports.initLocals = function (req, res, next) {
	res.locals.navLinks = [
		{ label: 'About', key: 'about', href: '/about' },
		{ label: 'News', key: 'blog', href: '/blog' },
		{ label: 'Contact', key: 'contact', href: '/contact' },
	];
	res.locals.user = req.user;
	next();
};