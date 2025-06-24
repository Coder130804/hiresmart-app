// 📄 src/pages/MyProfileView.jsx

import React, { useEffect, useState } from 'react';
import './myprofile.css';
import { useNavigate } from 'react-router-dom';

const MyProfileView = () => {
  const [profile, setProfile] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    fetch('http://localhost:5000/api/profile', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setProfile(data))
      .catch((err) => console.error('Fetch error:', err));
  }, []);

  if (!profile) {
    return <div className="profile-wrapper"><h2>Loading Profile...</h2></div>;
  }

  return (
    <>
      <nav className="navbar">
        <h2 className="logo">FaceHire</h2>
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

      <div className="profile-wrapper">
        <h2>👤 Your Profile</h2>
        <div className="profile-display">
          <p><strong>Name:</strong> {profile.name}</p>
          <p><strong>Email:</strong> {profile.email}</p>
          <p><strong>Phone:</strong> {profile.phone}</p>
          <p><strong>DOB:</strong> {profile.dob}</p>
          <p><strong>Experience:</strong> {profile.experience} years</p>
          <p><strong>City:</strong> {profile.city}</p>
          <p><strong>State:</strong> {profile.state}</p>
          <p><strong>Country:</strong> {profile.country}</p>
          <p><strong>Local Address:</strong> {profile.address}</p>
        </div>
        <button className="save-button" onClick={() => navigate('/profile')}>Update Profile</button>
      </div>
    </>
  );
};

export default MyProfileView;
