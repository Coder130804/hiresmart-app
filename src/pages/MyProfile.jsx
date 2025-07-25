// ✅ Updated MyProfile.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import './myprofile.css';

const indianStates = ["Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal", "Delhi", "Jammu and Kashmir"];

const indianCities = [
  "Agartala", "Agra", "Ahmedabad", "Aizawl", "Ajmer", "Aligarh", "Allahabad", "Amritsar", "Asansol", "Aurangabad",
  "Bangalore", "Bareilly", "Belgaum", "Bhilai", "Bhopal", "Bhubaneswar", "Bikaner", "Bilaspur", "Chandigarh",
  "Chennai", "Coimbatore", "Cuttack", "Dehradun", "Delhi", "Dhanbad", "Durgapur", "Faridabad", "Ghaziabad", "Goa",
  "Gorakhpur", "Gulbarga", "Guntur", "Guwahati", "Gwalior", "Hubli", "Hyderabad", "Imphal", "Indore", "Jabalpur",
  "Jaipur", "Jalandhar", "Jammu", "Jamshedpur", "Jhansi", "Jodhpur", "Kalyan", "Kanpur", "Kochi", "Kolhapur",
  "Kolkata", "Kozhikode", "Lucknow", "Ludhiana", "Madurai", "Malappuram", "Mangalore", "Meerut", "Moradabad",
  "Mumbai", "Mysore", "Nagpur", "Nanded", "Nashik", "Navi Mumbai", "Noida", "Patna", "Pimpri-Chinchwad",
  "Pondicherry", "Prayagraj", "Pune", "Raipur", "Rajkot", "Ranchi", "Rourkela", "Salem", "Siliguri", "Solapur",
  "Srinagar", "Surat", "Thane", "Thiruvananthapuram", "Tiruchirappalli", "Tirunelveli", "Udaipur", "Vadodara",
  "Varanasi", "Vasai-Virar", "Vijayawada", "Visakhapatnam", "Warangal"
];

const countries = ["India"];
const jobTypes = ["On-site", "Remote", "Hybrid"];

const MyProfile = () => {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', dob: '', experience: '',
    previousCompany: '', previousSalary: '', salaryExpectations: '',
    areaOfInterest: '', qualifications: '', skills: '', languages: '',
    city: '', state: '', country: '', address: '', jobType: ''
  });
  const [cv, setCV] = useState(null);
  const [isEdit, setIsEdit] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const email = localStorage.getItem('email');
    if (Cookies.get(`profileFilled-${email}`)) {
      navigate('/profile-view');
      return;
    }

    const fetchProfile = async () => {
      try {
        const res = await fetch('https://hiresmart-backend1.onrender.com/api/profile/email/' + email);
        const data = await res.json();
        if (data && data.name) {
          setForm(data);
          setIsEdit(true);
        }
      } catch (err) {
        console.error('Fetch error:', err);
      }
    };
    fetchProfile();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      Object.entries(form).forEach(([key, value]) => formData.append(key, value));
      if (cv) formData.append('cv', cv);

      const res = await fetch('https://hiresmart-backend1.onrender.com/api/profile', {
        method: 'POST',
        body: formData
      });

      const data = await res.json();

      if (data.success) {
        Cookies.set(`profileFilled-${form.email}`, 'true', { expires: 30 });
        localStorage.setItem('email', form.email);
        alert('✅ Profile saved!');
        navigate('/profile-view');
      } else {
        alert('❌ Save failed: ' + data.message);
      }
    } catch (err) {
      alert('❌ Upload error: ' + err.message);
    }
  };

  return (
    <div className="profile-wrapper">
      <div className="form-container">
        <h2>{isEdit ? '✏️ Edit Profile' : '👤 My Profile'}</h2>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
          <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required />
          <input name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} required />
          <input name="dob" type="date" value={form.dob} onChange={handleChange} required />

          <select name="experience" value={form.experience} onChange={handleChange} required>
            <option value="">Years of Experience</option>
            {Array.from({ length: 21 }, (_, i) => (
              <option key={i} value={`${i} years`}>{i} years</option>
            ))}
          </select>

          <input name="previousCompany" placeholder="Previous Company" value={form.previousCompany} onChange={handleChange} />
          <input name="previousSalary" placeholder="Previous Salary" value={form.previousSalary} onChange={handleChange} />
          <input name="salaryExpectations" placeholder="Expected Salary" value={form.salaryExpectations} onChange={handleChange} />
          <input name="areaOfInterest" placeholder="Area of Interest" value={form.areaOfInterest} onChange={handleChange} />
          <input name="qualifications" placeholder="Qualifications" value={form.qualifications} onChange={handleChange} />
          <input name="skills" placeholder="Skills" value={form.skills} onChange={handleChange} />
          <input name="languages" placeholder="Languages (comma-separated)" value={form.languages} onChange={handleChange} />

          <select name="city" value={form.city} onChange={handleChange} required>
            <option value="">Select City</option>
            {indianCities.map(city => <option key={city} value={city}>{city}</option>)}
          </select>

          <select name="state" value={form.state} onChange={handleChange} required>
            <option value="">Select State</option>
            {indianStates.map(state => <option key={state} value={state}>{state}</option>)}
          </select>

          <select name="country" value={form.country} onChange={handleChange} required>
            <option value="">Select Country</option>
            {countries.map(c => <option key={c} value={c}>{c}</option>)}
          </select>

          <select name="jobType" value={form.jobType} onChange={handleChange} required> 
            <option value="">Select Job Type</option>
            <option value="On-site">On-site</option> 
            <option value="Remote">Remote</option>
            <option value="Hybrid">Hybrid</option>
          </select>

          <textarea name="address" placeholder="Address" value={form.address} onChange={handleChange} required />
          <input type="file" name="cv" accept="application/pdf" onChange={(e) => setCV(e.target.files[0])} />

          <button type="submit">{isEdit ? 'Update Profile' : 'Save Profile'}</button>
        </form>
      </div>
    </div>
  );
};
