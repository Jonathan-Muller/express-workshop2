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

/* GET cats listing. */
router.get('/', function (req, res, next) {
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