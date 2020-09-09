const express = require('express');
// const { verifySignUp } = require('../middleware');
const { signin } = require('../controllers/authController');

const router = express.Router();

router.post('/auth/signin', signin);

module.exports = router;
