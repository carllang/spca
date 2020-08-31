const users = require('./Users');

function allRoutes(app) {
  app.use(process.env.API_VERSION, users);
}

module.exports = allRoutes;
