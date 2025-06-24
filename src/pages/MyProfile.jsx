// 📄 src/pages/MyProfile.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './myprofile.css';

const MyProfile = () => {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', dob: '',
    experience: '', city: '', state: '', country: '', address: ''
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      const res = await fetch('http://localhost:5000/api/profile', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      const data = await res.json();
      if (data) setForm(data);
    };
    fetchProfile();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:5000/api/profile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify(form)
    });
    const data = await res.json();
    if (data.success) {
      alert('✅ Profile saved successfully!');
      navigate('/profile-view');
    } else {
      alert('❌ Error saving profile');
    }
  };

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
            window.location.href = '/';
          }}>Logout</button></li>
        </ul>
      </nav>

      <div className="form-container">
        <h2>👤 My Profile</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
          <input type="text" name="phone" placeholder="Phone (10 digits)" value={form.phone} onChange={handleChange} required />
          <input type="date" name="dob" placeholder="DOB" value={form.dob} onChange={handleChange} required />
          <select name="experience" value={form.experience} onChange={handleChange} required>
            <option value="">Years of Experience</option>
            {Array.from({ length: 21 }, (_, i) => (
              <option key={i} value={`${i} years`}>{i} years</option>
            ))}
          </select>
          <input type="text" name="city" placeholder="City" value={form.city} onChange={handleChange} required />
          <input type="text" name="state" placeholder="State" value={form.state} onChange={handleChange} required />
          <input type="text" name="country" placeholder="Country" value={form.country} onChange={handleChange} required />
          <textarea name="address" placeholder="Local Address" value={form.address} onChange={handleChange} required></textarea>
          <button type="submit">Save Profile</button>
        </form>
      </div>
    </div>
  );
};

export default MyProfile;
