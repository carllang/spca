const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const models = require('./models');
const { createUsers } = require('./scripts/inserts');
require('dotenv').config();

const app = express();
require('./routes')(app);

const eraseDatabaseOnSync = true;
console.log('(process.env.DATABASE_URL', process.env.DATABASE_URL);

const connectDb = () => mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
connectDb().then(async () => {
  if (eraseDatabaseOnSync) {
    await Promise.all([
      models.Users.deleteMany(),
    ]);

    createUsers();
  }
  app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}!`);
  });
});
