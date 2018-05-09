var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  return res.render('admin');
});

router.get('/api/list-all', function(req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  res.send()
});

module.exports = router;
