/* eslint-disable no-console */
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { User, Animal, People } = require('./models');
const { createUsers, createAnimals, createPeople } = require('./scripts/inserts');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

require('./routes')(app);

const eraseDatabaseOnSync = true;

// eslint-disable-next-line max-len
const connectDb = () => mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });
connectDb().then(async () => {
  if (eraseDatabaseOnSync) {
    await Promise.all([
      User.deleteMany(),
      Animal.deleteMany(),
      People.deleteMany(),
    ]);

    createUsers();
    createAnimals();
    createPeople();
  }
  app.listen(process.env.BACKEND_PORT, () => {
    console.log(`Listening on port ${process.env.BACKEND_PORT}!`);
  });
});
