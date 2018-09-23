var keystone = require('keystone');
var Types = keystone.Field.Types;

var Video = new keystone.List('Video', {
    map: { name: 'title' },
});

Video.add({
    title: { type: String, required: true, initial:true, note:'For example, Trailer or Clip'},
    url: { type: Types.Url, required: true, initial:true,  note:'You must include https:// at the start of the url.'},
	platform: { type: Types.Select, required: true, initial:true, options: 'vimeo, youtube', default: 'other', index: true},
	
});

//I think this defines what shows in the adminUI
Video.defaultColumns = 'showPlatformAs, address';
Video.register();
