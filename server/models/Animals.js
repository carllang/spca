const mongoose = require('mongoose');

const animalSchema = new mongoose.Schema(
  {
    name: String,
    species: String,
    image: String,
    gender: String,
    breed: String,
    description: String,
  },
  { timestamps: true },
);

module.exports = mongoose.model('Animal', animalSchema);
