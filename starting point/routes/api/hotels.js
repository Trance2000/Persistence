'use strict';

const Hotels = require('../../models/hotel');
const router = require('../index.js');

router.get('/api/hotels', (req, res, next) => {
  Hotels.findAll()
  .then(function(allHotels) {
    res.json(allHotels);
  })
  .catch(next);
});

module.exports = router;
