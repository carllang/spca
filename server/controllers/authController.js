const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { User } = require('../models');

const signin = (req, res) => {
  console.log('REQUEST', req.body);
  User.findOne({
    username: req.body.username,
  })
  // .populate('roles', '-__v')
    .exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      if (!user) {
        return res.status(404).send({ message: `User Not found.${err}` });
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
        authorities.push(`ROLE_${user.roles[i].name.toUpperCase()}`);
      }
      res.status(200).send({
        id: user._id,
        username: user.username,
        email: user.email,
        roles: authorities,
        accessToken: token,
      });
    });
};

module.exports = { signin };
