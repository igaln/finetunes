var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

/* GET coming soon page */
router.get('/comingsoon', function(req, res, next) {
  res.render('comingsoon', { title: 'Coming Soon' });
});

module.exports = router;
