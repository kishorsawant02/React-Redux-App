var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),

module.exports = function() {
    /**
     * set client landing folder
     */
    app.use(express.static(__dirname));
    /**
     *use body parser
     */
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: false
    }));

    /**
     *Define dynamic routes
     */
    app.get('/*', function(req, res) {
        res.sendFile(__dirname + req.url);
    });
    return app;
};