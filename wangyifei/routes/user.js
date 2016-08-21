var express = require('express');

var router = express.Router();

router.get('/reg', function(req, res, next) {
  res.render('user/reg')
});
router.get('/login', function(req, res, next) {
  res.render('user/login')
});
router.get('/logout', function(req, res, next) {
  res.send('登出');
});
module.exports = router;
