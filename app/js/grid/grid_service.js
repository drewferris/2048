'use strict';

module.exports = function (app) {
  app.factory('GridService', function () {
    const service = {};

    service.grid = [];
    service.tiles = [];

    service.size = 4;

    return service;
  });
};
