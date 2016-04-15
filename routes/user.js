var express   =    require("express");
var router = express.Router();
var Promise = require('bluebird');
var User = require('../models/User.js');

router.get('/', function (req, res) {
	User.read(function (response) {
		console.log("After Query");
		res.status(response.status).json(response);
	});
});

router.get('/:id', function (req, res) {
	var userId = req.params.id;
	User.readOne(userId, function (response) {
		console.log(response);
		res.status(response.status).json(response);
	});
});

router.post('/', function (req, res) {
	var name = req.body.name;
	var position = req.body.position;
	var handphone = req.body.handphone;
	var email = req.body.email;
	var data = [name, position, handphone, email];

	User.create(data, function (response) {
		console.log("After Query");
		res.status(response.status).json(response);
	});
});

router.put('/:id', function (req, res) {
	var id = req.params.id;
	var name = req.body.name;
	var position = req.body.position;
	var handphone = req.body.handphone;
	var email = req.body.email;
	var data = [name, position, handphone, email, id];

	User.update(data, function (response) {
		console.log("After Query");
		res.status(response.status).json(response);
	});
});

router.delete('/:id', function (req, res) {
	var id = req.params.id;

	User.delete(id, function (response) {
		console.log("After Query");
		res.status(response.status).json(response);
	});
});

module.exports = router;