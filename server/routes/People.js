const express = require('express');
const { body, validationResult } = require('express-validator');
const { authJWT } = require('../middleware');
const { People } = require('../models');

const router = express.Router();

router.get('/people', [authJWT.verifyToken], async (req, res) => {
  try {
    const result = await People.find();
    res.json(result);
  } catch (e) {
    res.status(400).send({ message: 'Error fetching records' });
  }
});

router.get('/people/:id', [authJWT.verifyToken], async (req, res) => {
  try {
    const result = await People.findById(req.params.id).exec();
    res.json(result);
  } catch (e) {
    res.status(400).send({ message: 'Error fetching record' });
  }
});

router.post(
  '/people',
  [
    body('firstName').isAlpha(),
    body('lastName').isAlpha(),
    body('tel').isAlpha(),
    body('address1').isAlpha(),
    body('address2').isAlpha(),
    body('description').isAlpha(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const newPeople = new People({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      tel: req.body.tel,
      address1: req.body.address1,
      address2: req.body.address2,
      description: req.body.description,
    });

    try {
      const result = newPeople.save();
      res.status(201).send(result);
    } catch (e) {
      res.status(400).send({ message: 'Error creating record' });
    }
  },
);

module.exports = router;
