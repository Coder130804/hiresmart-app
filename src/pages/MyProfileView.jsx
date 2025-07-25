// ✅ MyProfileView.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import './myprofile.css';

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

  if (!profile) return <h2>Profile Loading...</h2>;

  return (
    <div className="profile-view-container">
      <h2> Your Profile </h2>
      <div className="profile-info-box">
        <p><strong>Name:</strong> {profile.name}</p>
        <p><strong>Email:</strong> {profile.email}</p>
        <p><strong>Phone:</strong> {profile.phone}</p>
        <p><strong>DOB:</strong> {profile.dob}</p>
        <p><strong>Experience:</strong> {profile.experience}</p>
        <p><strong>Previous Company:</strong> {profile.previousCompany}</p>
        <p><strong>Previous Salary:</strong> {profile.previousSalary}</p>
        <p><strong>Expected Salary:</strong> {profile.salaryExpectations}</p>
        <p><strong>Area of Interest:</strong> {profile.areaOfInterest}</p>
        <p><strong>Qualifications:</strong> {profile.qualifications}</p>
        <p><strong>Skills:</strong> {profile.skills}</p>
        <p><strong>Languages:</strong> {profile.languages}</p>
        <p><strong>City:</strong> {profile.city}</p>
        <p><strong>State:</strong> {profile.state}</p>
        <p><strong>Country:</strong> {profile.country}</p>
        <p><strong>Job Type:</strong> {profile.jobType}</p>
        <p><strong>Address:</strong> {profile.address}</p>
        <p><strong>CV:</strong> <a href={`https://hiresmart-backend1.onrender.com/uploads/${profile.cv}`} target="_blank" rel="noreferrer">Download CV</a></p>
      </div>

      <button onClick={() => navigate('/profile')}>✏️ Edit Profile</button>
    </div>
  );
};

export default MyProfileView;
