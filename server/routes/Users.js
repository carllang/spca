const express = require('express');
const models = require('../models');

const router = express.Router();

// router.use((req, res, next) =>{
// sanitise
//   next()
// })

router.get('/users', async (req, res) => {
  const result = await models.Users.find();

  res.send(result);
});

router.get('/users/:id', async (req, res) => {
  try {
    const result = await models.Users.findById(req.params.id).exec();
    res.send(result);
  } catch (e) {
    res.status(400).send({});
  }
});

module.exports = router;
