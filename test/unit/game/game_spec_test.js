'use strict';

const angular = require('angular');
require('angular-mocks');
require('../../../app/js/client');

describe('Game Mobule', function () {
  describe('GameManager', function () {

    let gameManager;
    let _gridService;

    beforeEach(($provide) => {
      angular.mock.module('twentyfourtyeightApp');
      angular.mock.inject(function (GameManager) {
        gameManager = GameManager;
      });

      _gridService = {
        anyCellsAvailable: angular.noop,
        tileMatchesAvailable: angular.noop
      };
      angular.mock.provide('GridService', _gridService);
    });


    describe('.movesAvailable', function () {
      it('should report true if there are cells available', function () {
        spyOn(_gridService, 'anyCellsAvailable').andReturn(true);
        expect(gameManager.movesAvailable()).toBeTruthy();
      });
    });
  });
});
