module.exports = function (app) {
  require('./game_controller')(app);
  require('./game')(app);
};
