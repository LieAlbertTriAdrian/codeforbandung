var express   =    require("express");
var router = express.Router();
var Promise = require('bluebird');
var Timeline = require('../models/Timeline.js');

router.get('/:projectId', function (req, res) {
	var id = req.params.projectId;
	Timeline.readOne(id, function (response) {
		console.log("After Query");
		res.status(response.status).json(response);
	});
});

router.post('/', function (req, res) {
	var activity = req.body.activity;
	var startDate = req.body.startDate;
	var endDate = req.body.endDate;
	var projectId = req.body.projectId;
	var data = [activity, startDate, endDate, projectId];

	Timeline.create(data, function (response) {
		console.log("After Query");
		res.status(response.status).json(response);
	});
});

router.put('/:id', function (req, res) {
	var id = req.params.id;
	var activity = req.body.activity;
	var startDate = req.body.startDate;
	var endDate = req.body.endDate;
	var data = [activity, startDate, endDate, id];

	Timeline.update(data, function (response) {
		console.log("After Query");
		res.status(response.status).json(response);
	});
});

router.delete('/:id', function (req, res) {
	var id = req.params.id;

	Timeline.delete(id, function (response) {
		console.log("After Query");
		res.status(response.status).json(response);
	});
});

module.exports = router;