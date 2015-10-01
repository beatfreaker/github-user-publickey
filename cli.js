#!/usr/bin/env node
'use strict';
var githubUserPublicKey = require('./');

githubUserPublicKey('beatfreaker', function (err, data) {
    for (var i = 0; i < data.length; i++) {
        console.log(i + 1 + ') ' + data[i]);
    }
});
