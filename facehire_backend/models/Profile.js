// 📄 facehire_backend/models/Profile.js
const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: String,
  email: String,
  phone: String,
  dob: String,
  experience: String,
  previousCompany: String,
  previousSalary: String,
  salaryExpectations: String,
  areaOfInterest: String,
  qualifications: String,
  skills: String,
  languages: [String],
  cv: String, // file path or filename
  city: String,
  state: String,
  country: String,
  address: String
});

module.exports = mongoose.model('Profile', profileSchema);
