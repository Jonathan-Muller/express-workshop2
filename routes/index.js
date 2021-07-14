var express = require('express');
var router = express.Router();
const { cache } = require("../jsml/fcache.js");

function getOptions() {
  let allCats = cache.fetch()
  const options = allCats.reduce((prev, curr) => {
    const found = prev.find(item => item === curr.breed)
    if (!found) prev.push(curr.breed);
    return prev;
  }, ["all"])
  return options
}

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

router.get('/add-cat', function (req, res, next) {
  if (req.query.cats && req.query.cats.length) cache.add(req.query.cats);
  res.redirect('/filter');
})

router.get('/filter', function (req, res, next) {
  let allCats = cache.fetch()
  if (req.query.breed && req.query.breed !== 'all') {
    allCats = allCats.filter(item => item.breed === req.query.breed)
  }
  res.render('cats', {
    cats: allCats,
    options: getOptions(),
    breed: req.query.breed || 'all'
  });
})

module.exports = router;
