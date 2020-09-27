const mongoose = require('mongoose');

const peopleSchema = new mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    tel: String,
    image: String,
    address1: String,
    adress2: String,
    description: String,
  },
  { timestamps: true },
);

module.exports = mongoose.model('People', peopleSchema);
