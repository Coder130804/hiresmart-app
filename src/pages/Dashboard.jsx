// src/pages/Dashboard.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import './dashboard.css';

const Dashboard = () => {
  const [consented, setConsented] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [checkboxChecked, setCheckboxChecked] = useState(false);

  useEffect(() => {
    const cookieConsent = Cookies.get('userConsent');
    if (cookieConsent === 'true') {
      setConsented(true);
      setShowBanner(false);
    } else {
      setShowBanner(true);
    }
  }, []);

  const handleConsentSubmit = () => {
    Cookies.set('userConsent', 'true', { expires: 30 });
    setConsented(true);
    setShowBanner(false);
  };

  return (
    <div className="dashboard-container">
      {/* ───────────── NAVBAR ───────────── */}
      <nav className="navbar">
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/017/210/724/small/h-s-letter-logo-design-with-swoosh-design-concept-free-vector.jpg"
            alt="Logo"
            style={{ height: '30px', width: '30px', marginRight: '10px', borderRadius: '4px' }}
          />
          <h2 className="logo">HireSol</h2>
        </div>

        <ul>
          <li><Link className={consented ? '' : 'disabled-link'} to="/">Home</Link></li>
          <li><Link className={consented ? '' : 'disabled-link'} to="/give-interview">Give Interview</Link></li>
          <li><Link className={consented ? '' : 'disabled-link'} to="/score-feedback">Score & Feedback</Link></li>
          <li><Link className={consented ? '' : 'disabled-link'} to="/profile">My Profile</Link></li>
          <li><Link className={consented ? '' : 'disabled-link'} to="/contact">Contact Us</Link></li>
          <li>
  <div className="logout-wrapper">
    <button
      className="logout-disabled"
      disabled
      title="Logout is only allowed after feedback is generated"
    >
      Logout
    </button>
  </div>
</li>
        </ul>
      </nav>

      {/* ───────────── WELCOME ───────────── */}
      <header className="dashboard-welcome">
        <h1>Welcome to HireSol</h1>
        <p>Your smart interview assistant!🏅</p>
      </header>

      {/* ───────────── HOW IT WORKS ───────────── */}
      <div className="how-it-works-box">
        <h2>🛠️ How HireSol Works</h2>
        <ol>
          <li><strong>Sign Up / Login</strong> to create your account.</li>
          <li><strong>Complete Profile</strong> so we know your background.</li>
          <li><strong>Give Interview</strong> – answer 10 questions on camera.</li>
          <li><strong>Our Automated System</strong> reviews your answers automatically.</li>
          <li><strong>See Score & Feedback</strong> – see how you performed.</li>
        </ol>
      </div>

      {/* ───────────── COOKIE BANNER ───────────── */}
      {showBanner && (
        <div className="cookie-banner">
          <p>
            🍪 This website uses cookies to store your profile and interview data for better user experience.
          </p>
          <div>
            <label style={{ fontSize: '0.9rem' }}>
              <input
                type="checkbox"
                checked={checkboxChecked}
                onChange={() => setCheckboxChecked(!checkboxChecked)}
              />&nbsp;
              This website records videos and personal information.
              I understand and accept the data usage policy.
            </label>
            <button
              className="consent-btn"
              disabled={!checkboxChecked}
              onClick={handleConsentSubmit}
            >
              Submit & Accept
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;


