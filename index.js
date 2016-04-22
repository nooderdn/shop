'use strict';


var kraken = require('kraken-js'),
    express = require('express'),
    app = require('express')(),
    options = require('./lib/spec')(),
    port = process.env.PORT || 8000;

app.use(kraken(options));

app.listen(port, function (err) {
    console.log('[%s] Listening on http://localhost:%d', app.settings.env, port);
});
