const models = require('../models');

const createUsers = async () => {
  const user1 = new models.Users({
    username: 'carl',
    password: 'carl',
    firstName: 'Carl',
    lastName: 'Lang',
  });

  const user2 = new models.Users({
    username: 'sam',
    password: 'sam',
    firstName: 'Samantha',
    lastName: 'Graves',
  });

  await user1.save();
  await user2.save();
};

module.exports = { createUsers };
