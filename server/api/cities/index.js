'use strict';

var express = require('express');
var controller = require('./cities.controller');
var config = require('../../config/environment');

var router = express.Router();


//EndPoints of cities
router.get('/', controller.getCitiesList);
router.get('/:id', controller.getYearsList);
//router.get('/search', controller.getPopulation);
router.get('/:city/:year/:gender', controller.getPopulation);

router.get('/all', controller.getAllDB);

module.exports = router;
