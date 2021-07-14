var express = require('express');
var router = express.Router();
const { cache } = require("../jsml/fcache.js");

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('targilB', { title: 'TargilB' });
});

module.exports = router;
