#!/usr/bin/env node
'use strict';
var meow = require('meow');
var githubUserPublicKey = require('./');

var cli = meow({
	help: [
		'Example',
		'  $ github-user-publickey beat',
		'  ssh-rsa AAA.....'
	]
});

if (!cli.input.length) {
	console.error('User name required');
	process.exit(1);
}

githubUserPublicKey(cli.input[0], function (err, data) {
	if (err) {
		console.error(err.message);
		process.exit(1);
	}
	for (var i = 0; i < data.length; i++) {
		console.log(i + 1 + ') ' + data[i]);
	}
});
