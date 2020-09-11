const express = require('express');
const bcrypt = require('bcrypt');
const { body, validationResult } = require('express-validator');
const { authJWT } = require('../middleware');
const { User } = require('../models');

const router = express.Router();

router.get('/users', [authJWT.verifyToken], async (req, res) => {
  const result = await User.find();

  res.send(result);
});

router.get('/users/:id', async (req, res) => {
  try {
    const result = await User.findById(req.params.id).exec();
    res.send(result);
  } catch (e) {
    res.status(400).send({});
  }
});

router.post(
  '/users',
  [
    body('username').isEmail(),
    body('password').isLength({ min: 5 }),
    body('firstName').isAlpha(),
    body('lastName').isAlpha(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // hash the password
    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(req.body.password, salt);
    const newUser = new User({
      username: req.body.username,
      password,
      firstName: req.body.password,
      lastName: req.body.password,
      roles: ['moderator'],
    });

    try {
      const result = newUser.save();
      res.status(201).send(result);
    } catch (e) {
      res.status(400).send(e);
    }
  },
);

module.exports = router;
