'use strict';

module.exports = function (app) {
  app.factory('GameManager', function (GridService) {
    const service = {};

    service.newGame = function () {

    };

    service.move = function () {

    };

    service.updateScore = function (newScore) {

    };

    service.movesAvailable = function () {
      return GridService.anyCellsAvailable() || GridService.tileMatchesAvailable();
    };

    return service;
  });
};
