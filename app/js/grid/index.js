module.exports = function (app) {
  require('./grid_service')(app);
  require('./grid_directive')(app);
};