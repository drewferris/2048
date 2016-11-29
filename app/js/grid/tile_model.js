'use strict';

module.exports = function (app) {
  app.factory('TileModel', function () {
    const Tile = function (pos, val) {
      this.x = pos.x;
      this.y = pos.y;
      this.value = val || 2;
    };

    return Tile;
  });
};
