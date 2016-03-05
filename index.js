"strict mode";
var express = require('express');//we use require to access the modules listed in our package.json. Require automatically knows to look for the specified module in node_modules
var port = 2000;
var server = express();//express is a function. Here, we're assigning the express function to server.

var bodyParser = require('body-parser');// Parses body of ajax || route . 
var mongoose = require('mongoose'); 
var session = require('express-session'); // Allows us to have cookies 

mongoose.connect('mongodb://localhost/econ');
var topics = require('./models/topics.js');//this is how we access our database. we're designating the specific location of our database for require to look up.

var unemployment = new topics();//create a new instance of our topic model
unemployment.subject = "Macro";
unemployment.title = "Unemployment";
unemployment.description="This is a description of unemployment.";
unemployment.icon="imgage link";
unemployment.resources=[];

server.use(bodyParser.json({limit: '50mb'}));
server.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
server.use(express.static(__dirname + '/public'));

server.use(session({
    secret: "somethingC0mPl1Cat3dMayb3",
    resave: false,
    saveUninitialized: true,
}));

server.get('/',function (req,res) {
	
});

server.listen(port, () => console.log(`Server running on port ${port}`));
