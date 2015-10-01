'use strict';

var got = require('got');
var url = 'https://api.github.com/users/';
var publickeys = [];

module.exports = function (user, cb) {
	if (typeof user !== 'string') {
		throw new Error('User name required');
	}

	url += user + '/keys';
	got(url).then(function (response) {
	   var arr = JSON.parse(response.body);
	   for (var i = 0; i < arr.length; i++) {
	       publickeys.push(arr[i].key);
	   }
	   cb(null, publickeys);
	});
};
