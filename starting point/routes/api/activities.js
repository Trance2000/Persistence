'use strict';


const router = require('express').Router();
// const router = require('../index.js');
const Activities = require('../../models/activity');

router.get('/', (req, res, next) => {
  Activities.findAll()
  .then(function(allActs) {
    console.log(allActs);
    res.json(allActs);
  })
  .catch(next);
});

module.exports = router;
