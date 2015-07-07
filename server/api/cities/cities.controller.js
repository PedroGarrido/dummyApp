'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var _ = require('lodash');

var CitiesSchema = new Schema({
  city: String,
  year: Number,
  population: [
    {
      age: Number,
      gender: String,
      count: Number
    }
  ]
});


var CityMongo = mongoose.model('cities', CitiesSchema);

/**
 * Get an array[String] of a list of cities
 **/
exports.getCitiesList = function(req, res) {
    CityMongo.distinct('city', function (err, docs) {
      return res.json(docs);
   });
};

/**
 * Get an array[String] of a list of registered years from specific city
 **/
exports.getYearsList = function(req, res) {
    var cityName = req.param('id');
    CityMongo.distinct('year',{city: cityName}, function (err, docs) {
      return res.json(docs);
   });
};

/**
 * Returns an array of objects {age, count} respect to a specific search
 **/
exports.getPopulation = function(req, res) {
    var cityName = req.param('city'),
        year = req.param('year'),
        gender = req.param('gender');
    CityMongo.distinct('population',{city: cityName, year: year}, function (err, docs) {
    var population = _.where(docs, {gender: gender});
    return res.json(population);
   });
};

/**
 *   Return database from Mongolab
 */
exports.getAllDB = function(req, res) {
    CityMongo.find({}, function (err, docs) {
      return res.json(docs);
   });
};
