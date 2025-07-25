// 📁 src/pages/LogoutAfterScore.jsx
import React from 'react';
import Cookies from 'js-cookie';
import './logoutafterscore.css';

const LogoutAfterScore = () => {
  const handleFinalLogout = () => {
    Cookies.remove('token');
    Cookies.remove('interviewDone');
    Cookies.remove('profileDone');
    Cookies.remove('consent');
    // clear all other cookies you use if needed
    window.location.href = '/'; 
  };

  return (
    <div className="logoutafterscore-page">
      <div className="logout-box">
        <h2>🎉 You have reached The End!</h2>
        <p>All your interview data and session details will now be deleted.</p>
        <p>Are you sure you want to <strong>sign out permanently?</strong></p>
        <button onClick={handleFinalLogout} className="signout-btn">Sign Out</button>
      </div>
    </div>
  );
};

export default LogoutAfterScore;
