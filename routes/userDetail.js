var express   =    require("express");
var router = express.Router();

router.get('/', function (req, res) {
	res.render('userDetail');
	// res.render('userDetail.html');
	// res.render('index');
});

module.exports = router;