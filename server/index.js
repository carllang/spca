/* eslint-disable no-console */
const express = require('express');
const mongoose = require('mongoose');
const { User } = require('./models');
const { createUsers } = require('./scripts/inserts');
require('dotenv').config();

const app = express();
app.use(express.json());
require('./routes')(app);

const eraseDatabaseOnSync = true;

// eslint-disable-next-line max-len
const connectDb = () => mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });
connectDb().then(async () => {
  if (eraseDatabaseOnSync) {
    await Promise.all([
      User.deleteMany(),
    ]);

    createUsers();
  }
  app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}!`);
  });
});
