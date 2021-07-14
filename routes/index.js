var express = require('express');
var router = express.Router();
const { cache } = require("../jsml/fcache.js");

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/params', function (req, res, next) {
  res.render('params',
    {
      params: JSON.stringify(req.query, undefined, 4),
      degree: Math.ceil(Math.random() * 360)
    });
});

router.get('/targil', function (req, res, next) {
  res.render('targil', { catsToAdd: 1 });
});

router.get('/targil-add', function (req, res, next) {
  cache.add(req.query.cats);
  res.redirect('targil');
})

router.get('/cache', function (req, res, next) {
  res.render('cats', { cats: cache.fetch() });
})

module.exports = router;
