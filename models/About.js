var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Post Model
 * 
 * ==========
 */

var About = new keystone.List('About',
	{
		nocreate: true,
		nodelete: false,
		label: "About",
		path: "about",
		sortable:false
	});

About.track = {
	updatedAt: true,
	updatedBy: true,
}

About.add({
	title:
	content: { type: Types.Html, wysiwyg: true },
});

About.register();
