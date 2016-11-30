'use strict';

module.exports = function (app) {
  app.service('GridService', function (TileModel) {

    let service = this;

    this.grid = [];
    this.tiles = [];
    this.startingTileNumber = 2;

    this. buildStartingPosition = function () {
      for(var x = 0; x < this.startingTileNumber; x++) {
        this.randomlyInsertNewTile();
      }
    };

    this.availableCells = function () {
      var cells = [],
        self = this;

      this.forEach(function (x,y) {
        var foundTile = self.getCellAt({x:x, y:y});
        if(!foundTile) {
          cells.push({x:x, y:y});
        }
      });

      return cells;
    };

    this.randomAvailableCell = function () {
      var cells = this.availableCells();
      if(cells.length > 0) {
        return cells[Math.floor(Math.random() * cells.length)];
      }
    };

    this.randomlyInsertNewTile = function () {
      var cell = this.randomAvailableCell(),
        tile = new TileModel(cell, 2);
      this.insertTile(tile);
    };

    this.insertTile = function (tile) {
      var pos = this._coordinatesToPosition(tile);
      this.tiles[pos] = tile;
    };

    this.removeTile = function (pos) {
      var pos = this._coordinatesToPosition(pos);
      delete this.tiles[pos];
    };

    this.size = 4;

    this.forEach = function (cb) {
      var totalSize = this.size * this.size;
      for(var i = 0; i < totalSize; i++) {
        var pos = this._positionToCoordinates(i);
        cb(pos.x, pos.y, this.tiles[i]);
      }
    };

    this.setCellAt = function(pos, tile) {
      if(this.withinGrid(pos)) {
        var xPos = this._coordinatesToPosition(pos);
        this.tiles[xPos] = tile;
      }
    };

    this.getCellAt = function (pos) {
      if(this.withinGrid(pos)) {
        var x = this._coordinatesToPosition(pos);
        return this.tiles[x];
      } else {
        return null;
      }
    };

    this.withinGrid = function (cell) {
      return cell.x >= 0 && cell.x < this.size && cell.y >= 0 && cell.y < this.size;
    };

    this.buildEmptyGameBoard = function () {
      let self = this;

      for(var i = 0; i < service.size * service.size; i++) {
        this.grid[i] = null;
      }

      this.forEach(function (x,y) {
        self.setCellAt({x:x, y:y}, null);
      });
    };

    this._positionToCoordinates = function (i) {
      var x = i % service.size,
        y = (i - x) / service.size;
      return {
        x: x,
        y: y
      };
    };

    this._coordinatesToPosition = function (pos) {
      return (pos.y * service.size) + pos.x;
    };


  });
};
