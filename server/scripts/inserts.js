const bcrypt = require('bcrypt');
const { User, Role } = require('../models');

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

module.exports = { createUsers, initialRoles };
