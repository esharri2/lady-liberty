var keystone = require('keystone');
var Types = keystone.Field.Types;

var Person = new keystone.List('Person', {
    map: { name: 'name' },
    plural: "Team"
});

Person.add({
	name: { type: String, required: true, initial:true },
	role: { type: String},
    description: { type: Types.Html, wysiwyg: true},
    image:{ type: Types.CloudinaryImage }
});

Person.defaultColumns = 'name, role';
Person.register();
