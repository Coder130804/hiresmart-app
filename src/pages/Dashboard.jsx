import React from 'react';
import { Link } from 'react-router-dom';
import './dashboard.css';

const Dashboard = () => {
  return (
    <>
      <div className="dashboard-container">
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
            <li><Link to="/">Home</Link></li>
            <li><Link to="/give-interview">Give Interview</Link></li>
            <li><Link to="/score-feedback">Score & Feedback</Link></li>
            <li><Link to="/profile">My Profile</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li>
              <button
                onClick={() => {
                  localStorage.removeItem('token');
                  window.location.href = '/';
                }}
              >
                Logout
              </button>
            </li>
          </ul>
        </nav>

        <div className="dashboard-welcome">
          <h1>Hi! Welcome to HireSmart Dashboard</h1>
          <p>Select an option from above to begin your AI-powered interview journey!</p>
        </div>

        <div className="how-it-works-box">
  <h2>🛠️ How HireSmart Works</h2>
  <ol>
    <li><strong>Sign Up or Login:</strong> Create your account to access all features.</li>
    <li><strong>Complete Your Profile:</strong> Fill in your personal and professional details. This helps us understand your background.</li>
    <li><strong>Give AI Interview:</strong> You'll be asked 10 common interview questions. Your responses are recorded through your webcam.</li>
    <li><strong>AI Reviews Your Answers:</strong> Our AI analyzes your video responses and provides feedback on how well you answered.</li>
    <li><strong>Check Your Score & Feedback:</strong> Get a score out of 10 and see which questions you answered or missed.</li>
    <li><strong>Use the Insights:</strong> Use your score and AI tips to improve for real interviews!</li>
  </ol>
</div>

      </div>
    </>
  );
};

export default Dashboard;
