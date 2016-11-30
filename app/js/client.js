'use strict';

const angular = require('angular');
const ngRoute = require('angular-route');

const app = angular.module('twentyfourtyeightApp', [ngRoute]);

require('./game')(app);
require('./grid')(app);
require('./keyboard')(app);

app.config(function ($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: './views/main.html'
  });
});
