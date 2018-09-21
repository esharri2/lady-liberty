var keystone = require('keystone');
var Types = keystone.Field.Types;

var TeamRole = new keystone.List('TeamRoles');

TeamRole.add({
    name: { type: String, required: true },
});

TeamRole.relationship({ref: 'Person',  refPath: 'category' });

TeamRole.register();