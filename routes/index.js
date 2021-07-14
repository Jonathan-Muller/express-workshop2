var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'The Best Sadna ever' });
});

router.get('/params', function (req, res, next) {
  res.render('params',
    {
      params: JSON.stringify(req.query, undefined, 4),
      degree: Math.ceil(Math.random() * 360)
    });
});

module.exports = router;
