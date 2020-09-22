const bcrypt = require('bcrypt');
const { User, Animal, Role } = require('../models');

const createUsers = async () => {
  const salt = await bcrypt.genSalt(10);
  let password = await bcrypt.hash('spca1610', salt);
  const user1 = new User({
    username: 'admin',
    password,
    firstName: 'Carl',
    lastName: 'Lang',
    roles: ['admin'],
  });
  password = await bcrypt.hash('adminadmin', salt);
  const user2 = new User({
    username: 'adminadmin',
    password,
    firstName: 'admin',
    lastName: 'admin',
    roles: ['admin'],
  });
  password = await bcrypt.hash('staff', salt);

  const user3 = new User({
    username: 'staff',
    password,
    firstName: 'John',
    lastName: 'Smith',
    roles: ['staff'],
  });

  await user1.save();
  await user2.save();
  await user3.save();
};

const createAnimals = async () => {
  const animal1 = new Animal({
    name: 'Dodger',
    species: 'dog',
    gender: 'male',
    breed: 'Great Perinese',
    description: 'Big and fluffy and cuddly, very food motivated.',
  });

  const animal2 = new Animal({
    name: 'Cloud',
    species: 'dog',
    gender: 'female',
    breed: 'Chow Chow',
    description: 'Well groomed and fluffy.',
  });

  const animal3 = new Animal({
    name: 'Sherman',
    species: 'LLama',
    gender: 'male',
    breed: 'Alpaca',
    description: 'Will eat anything including humans',
  });

  const animal4 = new Animal({
    name: 'Oliver',
    species: 'cat',
    gender: 'male',
    breed: 'moggy',
    description: 'Likes treats and belly rubs',
  });

  await animal1.save();
  await animal2.save();
  await animal3.save();
  await animal4.save();
};

function initialRoles() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: 'user',
      }).save((err) => {
        if (err) {
          console.log('error', err);
        }

        console.log("added 'user' to roles collection");
      });

      new Role({
        name: 'moderator',
      }).save((err) => {
        if (err) {
          console.log('error', err);
        }

        console.log("added 'moderator' to roles collection");
      });

      new Role({
        name: 'admin',
      }).save((err) => {
        if (err) {
          console.log('error', err);
        }

        console.log("added 'admin' to roles collection");
      });
    }
  });
}

module.exports = { createUsers, createAnimals, initialRoles };
