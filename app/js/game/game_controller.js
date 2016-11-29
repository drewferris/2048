'use strict';

module.exports = function(app) {
  app.controller('GameController', ['GameManager', function(GameManager) {
    this.game = GameManager;
  }]);
};
