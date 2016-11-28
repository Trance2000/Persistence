'use strict';

const router = require('express').Router();
const Restaurants = require('../../models/restaurant');


router.get('/', (req, res, next) => {
  Restaurants.findAll()
  .then(function(allRest) {
    res.json(allRest);
  })
  .catch(next);
});

module.exports = router;
