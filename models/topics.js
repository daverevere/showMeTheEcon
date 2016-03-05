var mongoose = require('mongoose');

var topicsSchema = mongoose.Schema({

	subject: {type:String},
	title: {type:String},
	description: {type:String},
	icon:{type:String},
	resources: {type: Array}
});

var topicsDb = mongoose.model('topic', topicsSchema);
//mongoose.model creates the database named topic that uses the rules set up in topicsSchema.

module.exports = topicsDb;
//this exports topicsDb(makes it available for use). Now we can use it in index.js.
