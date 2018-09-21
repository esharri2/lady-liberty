var keystone = require('keystone');
var Types = keystone.Field.Types;

var Person = new keystone.List('Person', {
    map: { name: 'name' },
    label: "Team",
    singular:"Person",
    plural:"People"

});

Person.add({
    name: { type: String, required: true, initial:true },    
    role: { type: String},
    category:{ type: Types.Relationship, ref: 'TeamRoles', many: false },
    link: { type: Types.Url }

    // description: { type: Types.Html, wysiwyg: true}
    // image:{ type: Types.CloudinaryImage }
});

Person.defaultColumns = 'name, role';
Person.register();
