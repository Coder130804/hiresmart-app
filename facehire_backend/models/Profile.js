// ✅ Profile.js (Backend Schema)
const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
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
  languages: String, // now a text field
  city: String,
  state: String,
  country: String,
  address: String,
  cvFileName: String,
  hasGivenInterview: { type: Boolean, default: false }
});

module.exports = mongoose.model('Profile', profileSchema);