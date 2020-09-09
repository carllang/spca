const users = require('./Users');
const authRoutes = require('./authRoutes');

function allRoutes(app) {
  // app.use((req, res, next) => {
  //   res.header(
  //     'Access-Control-Allow-Headers',
  //     'x-access-token, Origin, Content-Type, Accept',
  //   );
  //   // next();
  // });

  app.use(process.env.API_VERSION, authRoutes);
  app.use(process.env.API_VERSION, users);
}

module.exports = allRoutes;
