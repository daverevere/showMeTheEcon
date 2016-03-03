"strict mode";
var express = require('express');
var port = 2000;
var app = express();

var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var session = require('express-session');


mongoose.connect('mongodb://localhost/econ');

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(express.static(__dirname + '/public'));

app.use(session({
    secret: "somethingC0mPl1Cat3dMayb3",
    resave: false,
    saveUninitialized: true,
}));


app.listen(port, () => console.log(`Server running on port ${port}`));
