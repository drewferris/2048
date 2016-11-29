'use strict';

module.exports = function (app) {
  app.directive('tile', function () {
    return {
      restrict: 'A',
      scope: {
        ngModel: '='
      },
      templateUrl: './views/tile.html'
    };
  });
};
