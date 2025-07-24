// 📄 src/pages/MyProfile.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import './myprofile.css';

const MyProfile = () => {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', dob: '', experience: '',
    previousCompany: '', previousSalary: '', salaryExpectations: '',
    areaOfInterest: '', qualifications: '', skills: '',
    languages: '', city: '', state: '', country: '', address: ''
  });

  const [cv, setCV] = useState(null);
  const [isEdit, setIsEdit] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await fetch('https://hiresmart-backend1.onrender.com/api/profile', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });
        const data = await res.json();
        if (data && data.name) {
          setForm(data);
          setIsEdit(true);
          Cookies.set('profile_filled', 'true', { expires: 30 });
          navigate('/profile-view');
        }
      } catch (err) {
        console.error('❌ Error fetching profile:', err.message);
      }
    };
    fetchProfile();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    Object.entries(form).forEach(([key, value]) => {
      formData.append(key, value);
    });
    if (cv) formData.append('cv', cv);

    try {
      const res = await fetch('https://hiresmart-backend1.onrender.com/api/profile', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        },
        body: formData
      });

      const data = await res.json();
      if (data.success) {
        alert('✅ Profile saved successfully!');
        Cookies.set('profile_filled', 'true', { expires: 30 });
        navigate('/profile-view');
      } else {
        alert('❌ Error saving profile: ' + data.message);
      }
    } catch (err) {
      alert('❌ Upload error: ' + err.message);
    }
  };

  const indianStates = ["Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"];

  const indianCities = ["Mumbai", "Jamshedpur" , "Delhi", "Bengaluru", "Hyderabad", "Ahmedabad", "Chennai", "Kolkata", "Surat", "Pune", "Jaipur", "Lucknow", "Kanpur", "Nagpur", "Indore", "Thane", "Bhopal", "Visakhapatnam", "Patna", "Vadodara", "Ghaziabad"];

  const indianCountries = ["India"];

  return (
    <div className="profile-wrapper">
      <nav className="navbar">
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/017/210/724/small/h-s-letter-logo-design-with-swoosh-design-concept-free-vector.jpg"
            alt="Logo"
            style={{ height: '30px', width: '30px', marginRight: '10px', borderRadius: '4px' }}
          />
          <h2 className="logo">HireSmart</h2>
        </div>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/give-interview">Give Interview</a></li>
          <li><a href="/score-feedback">Score & Feedback</a></li>
          <li><a href="/profile">My Profile</a></li>
          <li><a href="/contact">Contact Us</a></li>
          <li><button onClick={() => {
            localStorage.removeItem('token');
            Cookies.remove('profile_filled');
            window.location.href = '/';
          }}>Logout</button></li>
        </ul>
      </nav>

      <div className="form-container">
        <h2>{isEdit ? '✏️ Edit Profile' : '👤 My Profile'}</h2>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
          <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required />
          <input name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} required />
          <input name="dob" type="date" placeholder="DOB" value={form.dob} onChange={handleChange} required />

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
          <input name="languages" placeholder="Languages Known" value={form.languages} onChange={handleChange} />

          <select name="city" value={form.city} onChange={handleChange} required>
            <option value="">Select City</option>
            {indianCities.map((city, idx) => <option key={idx} value={city}>{city}</option>)}
          </select>

          <select name="state" value={form.state} onChange={handleChange} required>
            <option value="">Select State</option>
            {indianStates.map((state, idx) => <option key={idx} value={state}>{state}</option>)}
          </select>

          <select name="country" value={form.country} onChange={handleChange} required>
            <option value="">Select Country</option>
            {indianCountries.map((country, idx) => <option key={idx} value={country}>{country}</option>)}
          </select>

          <textarea name="address" placeholder="Address" value={form.address} onChange={handleChange} required></textarea>
          <input type="file" name="cv" accept="application/pdf" onChange={(e) => setCV(e.target.files[0])} />
          <button type="submit">{isEdit ? 'Update Profile' : 'Save Profile'}</button>
        </form>
      </div>
    </div>
  );
};

export default MyProfile;
