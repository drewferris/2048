'use strict';

module.exports = function(app) {
  app.controller('DemoController', ['$http', function($http) {
    this.$http = $http;
    this.message = 'Hello Angular';
  }]);
};
