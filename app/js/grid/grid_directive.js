'use strict';

module.exports = function (app) {
  app.directive('grid', function() {
    return {
      restrict: 'A',
      require: 'ngModel',
      scope: {
        ngModel: '='
      },
      templateUrl: './views/grid.html'
    };
  });
};
