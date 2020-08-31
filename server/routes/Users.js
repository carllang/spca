const express = require('express');
const models = require('../models');

const router = express.Router();

router.get('/users', async (req, res) => {
  const result = await models.Users.find();

  res.send(result);
});

module.exports = router;
