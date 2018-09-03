var keystone = require('keystone');

var User = new keystone.List('User', {
    map: { name: 'email' }
});

//Learn more about field types here:
//https://keystonejs.com/api/field/
User.add({
    displayName: { type: String },
    password: { type: keystone.Field.Types.Password },
    email: { type: keystone.Field.Types.Email, unique: true },
});

//All users can log in to admin
User.schema.virtual('canAccessKeystone').get(function () {
    return true;
});

//What to show in the UI
User.defaultColumns = 'id, displayName, email';

User.register();
