var keystone = require('keystone');
var Types = keystone.Field.Types;

var Post = new keystone.List('Post', {
	map: { name: 'title' }
});

Post.add({
	title: { type: String, required: true, initial:true },
	state: { type: Types.Select, options: 'draft, published, archived', default: 'draft', index: true },

	publishedDate: { type: Types.Date, index: true, dependsOn: { state: 'published' } },
	content: { type: Types.Html, wysiwyg: true}
});



//I think this defines what shows in the adminUI
Post.defaultColumns = 'title, state, publishedDate';
Post.register();
