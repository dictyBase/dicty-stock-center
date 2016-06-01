'use strict';

var express = require('express');
var fs = require('fs');
var morgan = require('morgan');

var app = express();
var staticStats = fs.statSync( '/www' );
if (staticStats.isDirectory()) {
    app.use(morgan('combined'));
    var assetPath = '/assets';
    if (process.env.ASSET_BASE) {
        assetPath = process.env.ASSET_BASE + '/assets';
    }
    console.log('using assetpath %s', assetPath);
    app.use(assetPath, express.static( '/www' ));
    app.get('/*', function(req, res, next) {
        // Just send the index.html for other files to support HTML5Mode
        res.sendFile('index.html', { root: '/www' });
    });

    var server = app.listen(9596);
    console.log('Express static server listening on http://%s:%d', server.address().address,9596);
}
else {
    console.log('No /www folder, did not start the server');
}
