const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      unique: true,
      required: true,
    },
    roles: [String],
    firstName: String,
    lastName: String,
  },
  { timestamps: true },
);

module.exports = mongoose.model('User', userSchema);
