'use strict';

const Hotels = require('../../models/hotel');
const router = require('express').Router();

router.get('/', (req, res, next) => {
  Hotels.findAll()
  .then(function(allHotels) {
    res.json(allHotels);
  })
  .catch(next);
});

module.exports = router;
