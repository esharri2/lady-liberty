var keystone = require('keystone');
var Types = keystone.Field.Types;

var TeamRole = new keystone.List('TeamRoles');

TeamRole.add({
    name: { type: String, required: true },
    order: { type: Types.Number, required: true, initial: true }
});

TeamRole.relationship({ ref: 'Person', refPath: 'category' });

TeamRole.register();