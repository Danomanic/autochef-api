const db = require('monk')('localhost/autochef');
const collection = db.get('cupboard');

exports.getAll = function(req, res) {
	collection.find({}, function(err, items){
		if (err) res.status(500).json(err);
		else res.json(items);
	});
};

exports.create = function(req, res) {
	var body = req.body;
	collection.insert(body, function(err, item){
		if (err) res.status(500).json(err);
		else res.status(201).json(item);
	});
};

exports.get = function(req, res) {
	var id = req.params.id;
	collection.findById(id, function(err, item){
		if (err) res.status(500).json(err);
		else if (item) res.json(item);
		else res.send(404);
	});
};

exports.update = function(req, res) {
	var id = req.params.id;
	var body = req.body;
	delete body._id;
	collection.findAndModify({_id: id}, {$set: body}, {multi:false}, function(err, item){
		if (err) res.status(500).json(err);
		else if (item) res.json(item);
		else res.send(404);
	});
};

exports.del = function(req, res) {
	var id = req.params.id;
	collection.remove({_id: id}, function(err){
		if (err) res.status(500).json(err);
		else res.send(204);
	});
};