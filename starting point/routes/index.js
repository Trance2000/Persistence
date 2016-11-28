var Promise = require('bluebird');
var router = require('express').Router();
var Hotel = require('../models/hotel');
var Restaurant = require('../models/restaurant');
var Activity = require('../models/activity');
var hotelsRouter = require('./api/hotels');
var activityRouter = require('./api/activities');
var restaurantRouter = require('./api/restaurants');
var dayRouter = require('./api/days');

router.get('/', function(req, res, next) {
  Promise.all([
    Hotel.findAll(),
    Restaurant.findAll(),
    Activity.findAll()
  ])
  .spread(function(dbHotels, dbRestaurants, dbActivities) {
    res.render('index', {
      templateHotels: dbHotels,
      templateRestaurants: dbRestaurants,
      templateActivities: dbActivities
    });
  })
  .catch(next);
});

router.use('/api/hotels', hotelsRouter);
router.use('/api/restaurants', restaurantRouter);
router.use('/api/activities', activityRouter);
router.use('/api/days', dayRouter);

module.exports = router;
