import React from 'react';
import { Link } from 'react-router-dom';
import './contactus.css';

const ContactUs = () => {
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
          <li><Link to="/">Home</Link></li>
          <li><Link to="/give-interview">Give Interview</Link></li>
          <li><Link to="/score-feedback">Score & Feedback</Link></li>
          <li><Link to="/profile">My Profile</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
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

      <div className="contact-page">
        <div className="contact-box">
          <h1>📞 Contact Us</h1>
          <p><strong>Phone:</strong> +91 9876543210</p>
          <p><strong>Telephone:</strong> (0674) 123-4567</p>
          <p><strong>Email 1:</strong> support@facehire.in</p>
          <p><strong>Email 2:</strong> careers@facehire.in</p>
        </div>

        <div className="footer">
          &copy; {new Date().getFullYear()} HireSmart. All Rights Reserved.
        </div>
      </div>
    </>
  );
};

export default ContactUs;
