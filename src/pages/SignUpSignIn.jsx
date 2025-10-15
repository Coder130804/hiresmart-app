import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUpSignIn.css';

const SignUpSignIn = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) navigate('/dashboard');
  }, [navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // First try to login (Sign In)
      let res = await fetch('https://hiresmart-backend1.onrender.com/api/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      let data = await res.json();

      if (res.ok && data.success) {
        alert('✅ Logged in successfully!');
        localStorage.setItem('token', data.token);
        navigate('/dashboard');
      } else {
        // If login fails, try to register (Sign Up)
        res = await fetch('https://hiresmart-backend1.onrender.com/api/auth/signup', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });
        data = await res.json();

        if (res.ok && data.success) {
          alert('✅ Signed up successfully!');
          localStorage.setItem('token', data.token);
          navigate('/dashboard');
        } else {
          alert(`❌ ${data.message || 'Unknown error occurred'}`);
        }
      }
    } catch (err) {
      alert('❌ Server error. Is the backend running?');
    }
  };

  return (
  <div className="signup-container">
    <div className="signup-box">
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/017/210/724/small/h-s-letter-logo-design-with-swoosh-design-concept-free-vector.jpg"
          alt="Logo"
          style={{
            height: '100px',
            width: '100px',
            borderRadius: '100px',
            marginBottom: '10px'
          }}
        />
        <h1 className="app-title">HireSol</h1>
      </div>

        <p className="app-description">
          Video Interview Bot for Smart & Fair Hiring
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit">Login / Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignUpSignIn;
