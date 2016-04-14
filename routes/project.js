var express   =    require("express");
var router = express.Router();
var Promise = require('bluebird');
var Project = Promise.promisifyAll(require('../models/Project.js'));

router.get('/', function (req, res) {
	Project.read(function (response) {
		console.log("After Query");
		res.status(response.status).json(response);
	});
});

router.post('/', function (req, res) {
	var title = req.body.title;
	var description = req.body.description;
	var projectManager = req.body.projectManager;
	var deadline = req.body.deadline;
	var data = [title, description, projectManager, deadline];

	Project.create(data, function (response) {
		console.log("After Query");
		res.status(response.status).json(response);
	});
});

router.put('/:id', function (req, res) {
	var id = req.params.id;
	var title = req.body.title;
	var description = req.body.description;
	var memberCount = req.body.memberCount;
	var deadline = req.body.deadline;
	var data = [title, description, memberCount, deadline, id];

	Project.update(data, function (response) {
		console.log("After Query");
		res.status(response.status).json(response);
	});
});

router.delete('/:id', function (req, res) {
	var id = req.params.id;

	Project.delete(id, function (response) {
		console.log("After Query");
		res.status(response.status).json(response);
	});
});

module.exports = router;