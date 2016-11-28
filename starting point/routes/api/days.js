'use strict';

const Day = require('../../models/day.js');
const router = require('express').Router();



router.get('/', (req, res, next) => {
  Day.findAll()
  .then(function(allDays) {
    res.json(allDays);
  })
  .catch(next);
});

router.get('/:id', (req, res, next) => {
  Day.findById(req.params.id)
  .then(function(foundDay) {
    res.json(foundDay);
  })
  .catch(next);
});


router.post('/', (req, res, next) => {
  Day.create(req.body)
  .then(function(createdDay) {
    res.sendStatus(201).json(createdDay);
  })
  .catch(next);
});


// router.post('/:id/restaurants', (req, res, next) => {
//   Day.findById(req.params.id)
//   .then(function(foundDay) {
//     return foundDay.addRestaurant(req.body.id); //I MAY CHANGEEEEEEEEE
//   })
//   .then(function(addedRest) {
//     res.sendStatus(203).json(addedRest);
//   })
//   .catch(next);
// });

module.exports = router;
