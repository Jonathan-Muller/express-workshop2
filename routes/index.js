var express = require('express');
var router = express.Router();
const { cache } = require("../jsml/fcache.js");

function getOptions() {
  let allCats = cache.fetch()
  let options = ['all']
  for (let i = 0; i < allCats.length; i++) {
    const cat = allCats[i];
    const found = options.find(item => item.breed === cat.breed)
    if (!found) options.push(cat.breed)
  }
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
  res.render('targil', {});
});

// router.get('/filter', function (req, res, next) {
//   let allCats = cache.fetch()
//   if (req.query.breed !== 'all') {
//     allCats = allCats.filter(item => item.breed === req.query.breed)
//   }
//   res.render('cats', {
//     cats: allCats,
//     options: getOptions(),
//     breed: req.query.breed
//   });

// });

router.post('/add-cat', function (req, res, next) {
  cache.add(req.body);
  res.render('targil', {});
})

router.get('/cache', function (req, res, next) {
  let allCats = cache.fetch()
  console.log('req.query.breed: ', req.query.breed);
  if (req.query.breed && req.query.breed !== 'all') {
    allCats = allCats.filter(item => item.breed === req.query.breed)
  }
  console.log("req.query.breed || 'all: ", req.query.breed || 'all');
  res.render('cats', {
    cats: allCats,
    options: getOptions(),
    breed: req.query.breed || 'all'
  });
})

module.exports = router;
