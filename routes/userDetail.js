var express   =    require("express");
var router = express.Router();

router.get('/', function (req, res) {
	res.render('userDetail', { name: "Albert Tri adrian"} );
	// res.render('userDetail.html');
	// res.render('index');
});

module.exports = router;