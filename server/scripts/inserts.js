const { User, Role } = require('../models');

const createUsers = async () => {
  const user1 = new User({
    username: 'admin',
    password: 'spca1610',
    firstName: 'Carl',
    lastName: 'Lang',
    roles: ['admin'],
  });

  const user2 = new User({
    username: 'adminadmin',
    password: 'adminadmin',
    firstName: 'admin',
    lastName: 'admin',
    roles: ['admin'],
  });

  const user3 = new User({
    username: 'staff',
    password: 'staff',
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
