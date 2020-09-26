const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { User } = require('../models');

const signin = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username }).exec();

    if (!user) {
      return res.status(404).send({ message: 'User Not found.' });
    }
    const passwordIsValid = bcrypt.compareSync(
      req.body.password,
      user.password,
    );

    if (!passwordIsValid) {
      return res.status(401).send({
        accessToken: null,
        message: 'Invalid Password!',
      });
    }

    const token = jwt.sign({ id: user.id }, process.env.AUTH_SECRET, {
      expiresIn: 86400, // 24 hours
    });

    const authorities = [];

    for (let i = 0; i < user.roles.length; i++) {
      authorities.push(`ROLE_${user.roles[i].toUpperCase()}`);
    }
    res.status(200).send({
      id: user._id,
      username: user.username,
      email: user.email,
      roles: authorities,
      accessToken: token,
    });
  } catch (e) {
    res.status(500).send({ message: 'Server error' });
  }

  // .populate('roles', '-__v')
};

module.exports = { signin };
