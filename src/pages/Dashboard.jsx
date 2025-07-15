import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './dashboard.css';

const Dashboard = () => {
  const [consented, setConsented] = useState(false);

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
          <h2 className="logo">HireSmart</h2>
        </div>

        <ul>
          <li><Link className={consented ? '' : 'disabled-link'} to="/">Home</Link></li>
          <li><Link className={consented ? '' : 'disabled-link'} to="/give-interview">Give Interview</Link></li>
          <li><Link className={consented ? '' : 'disabled-link'} to="/score-feedback">Score &amp; Feedback</Link></li>
          <li><Link className={consented ? '' : 'disabled-link'} to="/profile">My Profile</Link></li>
          <li><Link className={consented ? '' : 'disabled-link'} to="/contact">Contact Us</Link></li>
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

      {/* ───────────── HERO / WELCOME ───────────── */}
      <header className="dashboard-welcome">
        <h1>Welcome&nbsp;to&nbsp;HireSmart</h1>
        <p>Your AI‑powered interview assistant</p>
      </header>

      {/* ───────────── HOW‑IT‑WORKS + CONSENT ───────────── */}
      <div className="how-it-works-box">
        <h2>🛠️ How HireSmart Works</h2>
        <ol>
          <li><strong>Sign Up / Login</strong> to create your account.</li>
          <li><strong>Complete Profile</strong> so we understand your background.</li>
          <li><strong>Give AI Interview</strong> – answer 10 questions on camera.</li>
          <li><strong>AI Reviews</strong> your answers automatically.</li>
          <li><strong>See Score &amp; Feedback</strong> See how you performed. </li>
        </ol>

        {/* ───── Consent form ───── */}
        <div className="consent-box">
          <label>
            <input
              type="checkbox"
              checked={consented}
              onChange={e => setConsented(e.target.checked)}
            />
            &nbsp;I understand that my personal details and interview videos will be captured and stored for analysis.
          </label>
          <button
            className="consent-btn"
            disabled={!consented}
            onClick={() => alert('Consent saved! You can now give your personal information and give interview.')}
          >
            Submit &amp; Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
