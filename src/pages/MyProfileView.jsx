// 📄 src/pages/MyProfileView.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './myprofileview.css';

const MyProfileView = () => {
  const [profile, setProfile] = useState(null);
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
        setProfile(data);
      } catch (err) {
        alert('❌ Failed to load profile: ' + err.message);
      }
    };
    fetchProfile();
  }, []);

  if (!profile) return <div>Loading...</div>;

  return (
    <>
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

      <div className="profile-view">
        <h2>👁️‍🗨️ Profile Preview</h2>
        <ul>
          <li><strong>Name:</strong> {profile.name}</li>
          <li><strong>Email:</strong> {profile.email}</li>
          <li><strong>Phone:</strong> {profile.phone}</li>
          <li><strong>DOB:</strong> {profile.dob}</li>
          <li><strong>Experience:</strong> {profile.experience}</li>
          <li><strong>Previous Company:</strong> {profile.previousCompany}</li>
          <li><strong>Previous Salary:</strong> {profile.previousSalary}</li>
          <li><strong>Expected Salary:</strong> {profile.salaryExpectations}</li>
          <li><strong>Area of Interest:</strong> {profile.areaOfInterest}</li>
          <li><strong>Qualifications:</strong> {profile.qualifications}</li>
          <li><strong>Skills:</strong> {profile.skills}</li>
          <li><strong>Languages:</strong> {profile.languages}</li>
          <li><strong>City:</strong> {profile.city}</li>
          <li><strong>State:</strong> {profile.state}</li>
          <li><strong>Country:</strong> {profile.country}</li>
          <li><strong>Address:</strong> {profile.address}</li>
          <li>
            <strong>CV:</strong> {profile.cvFileName ? (
              <a
                href={`https://hiresmart-backend1.onrender.com/uploads/${profile.cvFileName}`}
                target="_blank"
                rel="noreferrer"
              >
                View CV
              </a>
            ) : 'Not uploaded'}
          </li>
        </ul>

        <button onClick={() => navigate('/profile')}>✏️ Edit Profile</button>
      </div>
    </>
  );
};

export default MyProfileView;
