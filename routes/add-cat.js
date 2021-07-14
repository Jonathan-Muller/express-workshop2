var express = require('express');
var router = express.Router();

const { cache } = require("../jsml/fcache.js");


/* GET cats listing. */
router.get('/', function (req, res, next) {
    //after adding one cat successfully change render to add-many-cats
    res.render('add-cat-page');
});

router.post('/add-one', function (req, res, next) {
    //use cache.addOne to add new cat
    //add your code here:


    res.redirect('/filter');
})

router.get('/add-many', function (req, res, next) {
    if (req.query.cats && req.query.cats.length) cache.addMany(req.query.cats);
    res.redirect('/filter');
})

module.exports = router;