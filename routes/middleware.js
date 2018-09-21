exports.initLocals = function (req, res, next) {
	res.locals.navLinks = [
		{ label: 'Home', key: 'index', href: '/' },
		{ label: 'About', key: 'about', href: '/about' },
		{ label: 'News', key: 'news', href: '/news' },
		{ label: 'Contact', key: 'contact', href: '/contact' },
		{ label: 'Team', key: 'team', href: '/team' },
		{ label: 'Events', key: 'event', href: '/events' },
	];
	res.locals.companyName = "Lady Liberty"
	res.locals.user = req.user;
	next();
};