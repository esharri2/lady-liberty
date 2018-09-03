exports.initLocals = function (req, res, next) {
	res.locals.navLinks = [
		{ label: 'About', key: 'about', href: '/about' },
		{ label: 'News', key: 'news', href: '/news' },
		{ label: 'Contact', key: 'contact', href: '/contact' },
	];
	res.locals.companyName = "Lorem Impus Productions"
	res.locals.user = req.user;
	next();
};