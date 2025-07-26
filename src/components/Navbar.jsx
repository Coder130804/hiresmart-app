import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // style reuse

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <img src="https://static.vecteezy.com/system/resources/thumbnails/017/210/724/small/h-s-letter-logo-design-with-swoosh-design-concept-free-vector.jpg" alt="Logo" />
        <h2 className="logo">HireSmart</h2>
      </div>
      <ul>
        <li><Link className="disabled-link" to="/">Home</Link></li>
        <li><Link className="disabled-link" to="/give-interview">Give Interview</Link></li>
        <li><Link className="disabled-link" to="/score-feedback">Score & Feedback</Link></li>
        <li><Link className="disabled-link" to="/profile">My Profile</Link></li>
        <li><Link className="disabled-link" to="/contact">Contact Us</Link></li>
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
  );
};

export default Navbar;

