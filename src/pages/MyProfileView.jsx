// ✅ MyProfileView.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import './myprofileview.css';

const MyProfileView = () => {
  const [profile, setProfile] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const email = localStorage.getItem('email');
    if (!email || !Cookies.get(`profileFilled-${email}`)) {
      navigate('/profile');
      return;
    }

    const fetchProfile = async () => {
      try {
        const res = await fetch('https://hiresmart-backend1.onrender.com/api/profile/email/' + email);
        const data = await res.json();
        setProfile(data);
      } catch (err) {
        console.error('Error loading profile view:', err);
      }
    };
    fetchProfile();
  }, []);

  if (!profile) return <div className="loading-view"><h2>Profile Loading...</h2></div>;

  return (
    <div className="page-scroll-wrapper">
      <nav className="navbar">
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/017/210/724/small/h-s-letter-logo-design-with-swoosh-design-concept-free-vector.jpg"
            alt="Logo"
            style={{ height: '30px', width: '30px', marginRight: '10px', borderRadius: '4px' }}
          />
          <h2 className="logo">HireSmart - Viewing My Profile</h2>
        </div>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/give-interview">Give Interview</a></li>
          <li><a href="/score-feedback">Score & Feedback</a></li>
          <li><a href="/profile-view" className="active-tab">My Profile</a></li>
          <li><a href="/contact">Contact Us</a></li>
          <li><button onClick={() => {
            localStorage.removeItem('token');
            window.location.href = '/';
          }}>Logout</button></li>
        </ul>
      </nav>

      <div className="profile-view-container">
        <h2>👤 Your Profile</h2>
        <div className="profile-section-container">

          <div className="section-box">
            <p><strong>Name:</strong> {profile.name}</p>
            <p><strong>Email:</strong> {profile.email}</p>
            <p><strong>Phone:</strong> {profile.phone}</p>
            <p><strong>DOB:</strong> {profile.dob}</p>
          </div>

          <div className="section-box">
            <p><strong>City:</strong> {profile.city}</p>
            <p><strong>State:</strong> {profile.state}</p>
            <p><strong>Country:</strong> {profile.country}</p>
            <p><strong>Address:</strong> {profile.address}</p>
          </div>

          <div className="section-box">
            <p><strong>Experience:</strong> {profile.experience}</p>
            <p><strong>Previous Company:</strong> {profile.previousCompany}</p>
            <p><strong>Previous Salary:</strong> {profile.previousSalary}</p>
            <p><strong>Expected Salary:</strong> {profile.salaryExpectations}</p>
          </div>

          <div className="section-box">
            <p><strong>Area of Interest:</strong> {profile.areaOfInterest}</p>
            <p><strong>Qualifications:</strong> {profile.qualifications}</p>
            <p><strong>Skills:</strong> {profile.skills}</p>
            <p><strong>Languages:</strong> {profile.languages}</p>
            <p><strong>Job Type:</strong> {profile.jobType}</p>
          </div>

          <div className="section-box">
            <p><strong>CV:</strong> <a href={`https://hiresmart-backend1.onrender.com/uploads/${profile.cv}`} target="_blank" rel="noreferrer">Download CV</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfileView;
