'use strict';

const angular = require('angular');
require('angular-mocks');
require('../../../app/js/client');

describe('Game Mobule', function () {
  describe('GameManager', function () {

    let GameManagerService;

    beforeEach(() => {
      angular.mock.module('twentyfourtyeightApp');
      angular.mock.inject(function (GameManager) {
        GameManagerService = GameManager;
      });
    });

    it('should work', () => {
      expect(true).toBe(true);
    });
  });
});
