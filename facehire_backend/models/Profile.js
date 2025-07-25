// ✅ Profile.js (Model)
const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  name: String,
  email: { type: String, required: true },
  phone: String,
  dob: String,
  experience: String,
  previousCompany: String,
  previousSalary: String,
  salaryExpectations: String,
  areaOfInterest: String,
  qualifications: String,
  skills: String,
  languages: String,
  city: String,
  state: String,
  country: String,
  jobType: String,
  address: String,
  cv: String
}, { timestamps: true });

module.exports = mongoose.model('Profile', profileSchema);
