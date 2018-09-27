var keystone = require('keystone');
var Types = keystone.Field.Types;

var Image = new keystone.List('Image', {
    label: "Behind-the-scenes images",
    singular:"Image",
    plural: "Images"
});

Image.add({
    image:{ type: Types.CloudinaryImage }
});

Image.register();
