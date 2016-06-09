var express = require('express');
var app = express();
var bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

var touchstream = require('./routes/touchstream-routes')(app);

var server = app.listen(3002, function () {
    console.log('Server running at http://127.0.0.1:3000/');
});