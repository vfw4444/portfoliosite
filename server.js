//  OpenShift sample Node application
var express = require('express'),
    fs = require('fs'),
    app = express(),
    morgan = require('morgan');

Object.assign = require('object-assign')
app.use(express.static(__dirname + '/dist')); // set the static files location /public/img will be /img for users
app.engine('html', require('ejs').renderFile);
app.use(morgan('combined'))

var port = process.env.PORT || process.env.PORT || 8080,
    ip = process.env.IP || process.env.IP || '0.0.0.0'

app.get('/pagecount', function(req, res) {
    res.send('{ pageCount: -1 }');
});

app.get('*', function(req, res) {
    // try to initialize the db on every request if it's not already
    // initialized.
    //res.render('dist/index.html', { pageCountMessage: null });
    res.sendFile(__dirname + '/dist/index.html');

});
// error handling
app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something bad happened!');
});

app.listen(port, ip);
console.log('Server running on http://%s:%s', ip, port);

module.exports = app;