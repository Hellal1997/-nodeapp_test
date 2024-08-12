var express = require('express');
var app = express();

app.get('/will', function(req, res) {
    res.json({ response: 'Hello World' });
});

module.exports = app;
