'use strict';
var test = require('tape');
var childProcess = require('child_process');

test('User name validation check', function (t) {
	t.plan(1);
	childProcess.execFile('./cli.js', [''], {cwd: __dirname}, function (err, stdout) {
		t.equal('User name required', stdout, 'Both strings are equal');
	});
});
