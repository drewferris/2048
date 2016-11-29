'use strict';

const angular = require('angular');
const ngRoute = require('angular-route');

const app = angular.module('twentyfourtyeightApp', [ngRoute]);

require('./game')(app);

app.config(function ($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: './views/main.html'
  });
});
