'use strict';

angular.module('dummyApp')
  .controller('HomeCtrl', function ($scope, citiesApi) {

      $scope.search = {
          city: '',
          year: '',
          gender: ''
      };

      //Load init search
      citiesApi.getAllCities()
        .success(function(citiesList) {
           //Init Filters
           _initCityFilter(citiesList);
           _updateYears();
           _initGenderFilter();
           _updateMap();
	      })
	      .error(function(error) {
	         console.log('Error:' + error);
	    });

      /**
       *  Event Listeners Actions
      **/
      $scope.updateYears = function() {
          _updateYears();
      };

      $scope.generateGraph = function() {
          _generateGraph();
      };

      /**
       * Private Functions
      **/

       function _initCityFilter(citiesList){
          $scope.citiesArray = citiesList;
          $scope.search.city = citiesList[0];
       }

       function _updateYears(){
         _updateMap();
         citiesApi.getAllYears($scope.search.city)
           .success(function(yearsList) {
              $scope.yearsArray = yearsList;
              $scope.search.year = yearsList[0];
              _generateGraph();

           })
           .error(function(error) {
              console.log('Error:' + error);
         });
       }

       function _initGenderFilter(){
         $scope.genderArray = ['male', 'female'];
         $scope.search.gender = $scope.genderArray[0];
       }

       function _updateMap(){
         var city = $scope.search.city;

         var geocoder = new google.maps.Geocoder();

        geocoder.geocode( { 'address': city}, function(results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
              var mapOptions = {
                 zoom: 10,
                 center: results[0].geometry.location
               };

               var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
               var marker = new google.maps.Marker({
                 position: results[0].geometry.location,
                 map: map,
                 title: city
               });
            }
        });

       }

       function _generateGraph(){
         citiesApi.getPopulation($scope.search)
           .success(function(population) {
               $scope.myData = _calculatePercent(population);
               $scope.average = _calculateAverage(population);
           })
           .error(function(error) {
              console.log('Error:' + error);
         });
       }

       function _calculatePercent(population){
          //Get Statadistics
           var sumCount = 0;
           population.forEach(function(pop){
              sumCount = sumCount + pop.count;
          });

          var percentArray = [];
          population.forEach(function(pop){
              var percent = ((pop.count * 100) / sumCount).toFixed(2);
              percentArray.push({
                'age': pop.age,
                'percent': percent
              });
         });
         return percentArray;
       }

       function _calculateAverage(population){
          //Get Statadistics
           var sumCount = 0,
               sumAge = 0;
           population.forEach(function(pop){
              sumCount = sumCount + pop.count;
              sumAge = sumAge + pop.age;
          });

          var average = {
              'averageCount':  sumCount / population.length,
              'averageAge':  sumAge / population.length,
          };

          return average;
       }
  });
