"strict mode";
var express = require('express');//we use require to access the modules listed in our package.json. Require automatically knows to look for the specified module in node_modules
var port = 2000;
var server = express();//express is a function. Here, we're assigning the express function to server.
var nodemailer = require('nodemailer');
var bodyParser = require('body-parser');// Parses body of ajax || route . 
var mongoose = require('mongoose'); 
var session = require('express-session'); // Allows us to have cookies 

mongoose.connect('mongodb://localhost/econ');
var topics = require('./models/topics.js');//this is how we access our database. we're designating the specific location of our database for require to look up.

var unemployment = new topics();//create a new instance of our topic model
unemployment.subject = "Macro";
unemployment.title = "Unemployment";
unemployment.description="This is a description of unemployment.";
unemployment.icon="image link";
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

server.post('/about/send', function(req, res){
	var transporter = nodemailer.createTransport({
		service: 'Gmail',
		auth: {
			user: 'showmetheecon@gmail.com',
			pass: 'dave&sis'
		}
	});

	var mailOptions = {
		from: 'Charity-Joy Acchiardo <showmetheecon@gmail.com>',
		to: 'showmetheecon@gmail.com',
		subject: 'Website Submission',
		text: 'You have a submission with the following details... Name: '+req.body.name+'Email: '+req.body.email+ 'Message: '+req.body.message,
		html: '<p>You have a submission with the following details...</p><ul><li>Name: '+req.body.name+'</li><li>Email: '+req.body.email+'</li><li>Message: '+req.body.message+'</li></ul>'
	};

	transporter.sendMail(mailOptions, function(error, info){
		if(error){
			console.log(error);
			res.redirect('/');
		} else {
			console.log('Message Sent: '+info.response);
			res.redirect('/#/about');
		}
	});
});


server.listen(port, function ()  {console.log('Server running on port ' + 2000);});
