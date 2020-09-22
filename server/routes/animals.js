const express = require('express');
const { body, validationResult } = require('express-validator');
const { authJWT } = require('../middleware');
const { Animal } = require('../models');

const router = express.Router();

router.get('/animals', [authJWT.verifyToken], async (req, res) => {
  const result = await Animal.find();

  res.send(result);
});

router.get('/animals/:id', async (req, res) => {
  try {
    const result = await Animal.findById(req.params.id).exec();
    res.send(result);
  } catch (e) {
    res.status(400).send({});
  }
});

router.post(
  '/animals',
  [
    body('name').isAlpha(),
    body('species').isAlpha(),
    body('gender').isAlpha(),
    body('breed').isAlpha(),
    body('description').isAlpha(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const newAnimal = new Animal({
      name: req.body.name,
      species: req.body.species,
      gender: req.body.gender,
      breed: req.body.breed,
      description: req.body.description,
    });

    try {
      const result = newAnimal.save();
      res.status(201).send(result);
    } catch (e) {
      res.status(400).send(e);
    }
  },
);

module.exports = router;
