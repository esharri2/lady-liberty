var keystone = require('keystone');
var Types = keystone.Field.Types;

var Person = new keystone.List('Person', {
    map: { name: 'name' },
    label: "Team",
    singular: "Person",
    plural: "People"

});

Person.add({
    name: { type: String, required: true, initial: true },
    role: { type: String, note: 'Optional. The person\'s job or role/character they played.' },
    category: { type: Types.Relationship, ref: 'TeamRoles', many: false, required: true, initial: true },
    link: { type: Types.Url, note: 'Optional. You must include https:// at the start of the url.' },
    bio: { type: Types.Html, wysiwyg: true, note: 'Optional.' },
    image: { type: Types.CloudinaryImage, note: 'Optional' },
    order: {type: Types.Number, default:null}
});

Person.defaultColumns = 'name, role';
Person.register();
