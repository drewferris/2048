'use strict';

module.exports = function(app) {
  app.controller('GameController', ['GameManager', function(GameManager, KeyboardService) {
    this.game = GameManager;

    this.newGame = function () {
      KeyboardService.init();
      this.game.newGame();
      this.startGame();
    };

    this.startGame = function () {
      var self = this;
      KeyboardService.on(function (key) {
        self.game.move(key);
      });
    };

    this.newGame();
  }]);
};
