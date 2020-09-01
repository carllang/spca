const models = require('../models');

const createUsers = async () => {
  const user1 = new models.Users({
    username: 'admin',
    password: 'spca1610',
    firstName: 'Carl',
    lastName: 'Lang',
    roles: ['admin'],
  });

  const user2 = new models.Users({
    username: 'adminadmin',
    password: 'adminadmin',
    firstName: 'admin',
    lastName: 'admin',
    roles: ['admin'],
  });

  const user3 = new models.Users({
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

module.exports = { createUsers };
