// 📄 src/pages/MyProfileView.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './myprofile.css';

const ProfileView = () => {
  const [profile, setProfile] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      const res = await fetch('https://hiresmart-backend1.onrender.com/api/profile', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      const data = await res.json();
      setProfile(data);
    };
    fetchProfile();
  }, []);

  if (!profile) return <p>Loading profile...</p>;

  return (
    <div className="profile-display">
      <h2>👤 Profile Details</h2>
      {Object.entries(profile).map(([key, val]) => {
        if (key === 'cv') {
          return (
            <p key={key}>
              CV: <a href={`https://hiresmart-backend1.onrender.com/uploads/${val}`} target="_blank" rel="noreferrer">View CV</a>
            </p>
          );
        }
        if (key === 'languages') {
          return <p key={key}>Languages: {val.join(', ')}</p>;
        }
        return <p key={key}>{key.charAt(0).toUpperCase() + key.slice(1)}: {val}</p>;
      })}
      <button onClick={() => navigate('/profile')}>✏️ Edit</button>
    </div>
  );
};

export default ProfileView;
