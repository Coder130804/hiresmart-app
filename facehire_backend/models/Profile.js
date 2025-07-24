// 📄 models/Profile.js
const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
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
  languages: String, // ✅ plain text field now
  city: String,
  state: String,
  country: String,
  address: String,
  cvFileName: String, // ✅ stores CV filename only
  hasGivenInterview: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('Profile', profileSchema);
