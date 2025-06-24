const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: String,
  email: String,
  phone: String,
  dob: String,
  experience: String,
  city: String,
  state: String,
  country: String,
  address: String
});

module.exports = mongoose.model('Profile', profileSchema);
