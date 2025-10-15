// src/pages/HomePage.jsx
import React from 'react';

const HomePage = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
  <img
    src="https://static.vecteezy.com/system/resources/thumbnails/017/210/724/small/h-s-letter-logo-design-with-swoosh-design-concept-free-vector.jpg"
    alt="Logo"
    style={{ height: '30px', width: '30px', marginRight: '10px', borderRadius: '4px' }}
  />
  <h2 className="logo">HireSol</h2>
</div>

      <div className="how-it-works-box">
  <h2>🛠️ How HireSol Works</h2>
  <ol>
    <li><strong>Sign Up or Login:</strong> Create your account to access all features.</li>
    <li><strong>Complete Your Profile:</strong> Fill in your personal and professional details. This helps us understand your background.</li>
    <li><strong>Give AI Interview:</strong> You'll be asked 10 common interview questions. Your responses are recorded through your webcam.</li>
    <li><strong>AI Reviews Your Answers:</strong> Our system analyzes your video responses and provides feedback on how well you answered.</li>
    <li><strong>Check Your Score & Feedback:</strong> Get a score out of 10 and see which questions you answered or missed.</li>
    <li><strong>Use the Insights:</strong> Use your score and AI tips to improve for real interviews!</li>
  </ol>
</div>
    </div>
  );
};

export default HomePage;
