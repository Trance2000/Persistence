'use strict';

const Activities = require('../../models/activity');
const router = require('../index.js');

router.get('/api/activities', (req, res, next) => {
  Activities.findAll()
  .then(function(allActs) {
    res.json(allActs);
  })
  .catch(next);
});

module.exports = router;
