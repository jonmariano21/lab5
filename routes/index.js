// Get all of our friend data
//This loads our JSON db into data. Will be printed to the console.log when you load the page
var data = require('../data.json');

exports.view = function(req, res){
	console.log(data);
	res.render('index');
};