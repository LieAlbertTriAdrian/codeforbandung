var express   =    require("express");
var router = express.Router();
var Promise = require('bluebird');
var ProjectMember = require('../models/ProjectMember.js');

router.get('/', function (req, res) {
	ProjectMember.read(function (response) {
		console.log("After Query");
		res.status(response.status).json(response);
	});
});

router.post('/', function (req, res) {
	var userId = req.body.userId;
	var projectId = req.body.projectId;
	var projectPosition = req.body.projectPosition;
	var jobDescription = req.body.jobDescription;
	var data = [userId, projectId, projectPosition, jobDescription];

	ProjectMember.create(data, function (response) {
		console.log("After Query");
		res.status(response.status).json(response);
	});
});

router.put('/:id', function (req, res) {
	var id = req.params.id;
	var projectPosition = req.body.projectPosition;
	var jobDescription = req.body.jobDescription;
	var data = [projectPosition, jobDescription,id];

	ProjectMember.update(data, function (response) {
		console.log("After Query");
		res.status(response.status).json(response);
	});
});

router.delete('/:id', function (req, res) {
	var id = req.params.id;

	ProjectMember.delete(id, function (response) {
		console.log("After Query");
		res.status(response.status).json(response);
	});
});

module.exports = router;