'use strict';

const Restaurants = require('../../models/restaurant');
const router = require('../index.js');

router.get('/api/restaurants', (req, res, next) => {
  Restaurants.findAll()
  .then(function(allRest) {
    res.json(allRest);
  })
  .catch(next);
});

module.exports = router;
