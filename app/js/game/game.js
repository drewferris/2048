'use strict';

module.exports = function (app) {
  app.factory('GameManager', function (GridService) {
    const service = {};

    service.newGame = function () {
      GridService.buildEmptyGameBoard();
      GridService.buildStartingPosition();
      service.reinit();
    };

    service.reinit = function () {
      service.gameOver = false;
      service.win = false;
      service.currentScore = 0;
      service.highScore = 0;
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
