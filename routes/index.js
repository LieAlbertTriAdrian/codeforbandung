var express   =    require("express");
var router = express.Router();
var Promise = require('bluebird');

router.get('/', function (req, res) {
	console.log("Index");
// app.get('/api/projects', function(req, res) {
//   fs.readFile(PROJECTS_FILE, function(err, data) {
//     if (err) {
//       console.error(err);
//       process.exit(1);
//     }
//     res.json(JSON.parse(data));
//   });
// });

});

module.exports = router;