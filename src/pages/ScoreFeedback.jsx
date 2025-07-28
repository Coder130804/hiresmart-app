import React, { useEffect, useState } from 'react';
import './scorefeedback.css';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import Cookies from 'js-cookie';

const ScoreFeedback = () => {
  const [feedback, setFeedback] = useState(null);
  const [error, setError] = useState('');
  const [allowLogout, setAllowLogout] = useState(false);

  useEffect(() => {
    const token = Cookies.get('token');
    if (!token) {
      setError('Not authenticated!');
      return;
    }

    const fetchFeedback = async () => {
      try {
        const res = await fetch('https://hiresmart-backend1.onrender.com/api/ai-feedback', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (!res.ok) throw new Error('Failed to fetch feedback');

        const data = await res.json();

        if (data.totalScore !== undefined && data.results?.length > 0) {
          setFeedback(data);
          setAllowLogout(true);
        } else {
          setError('Feedback not available yet. Try again later.');
        }
      } catch (err) {
        console.error('Feedback fetch error:', err);
        setError('Something went wrong while loading feedback.');
      }
    };

    fetchFeedback();
  }, []);

  if (error) return <div className="feedback-box"><p>{error}</p></div>;
  if (!feedback) return <div className="feedback-box"><p>Loading...</p></div>;

  const chartData = {
    labels: ['Score', 'Remaining'],
    datasets: [
      {
        data: [feedback.totalScore, 10 - feedback.totalScore],
        backgroundColor: ['#4caf50', '#ddd'],
      },
    ],
  };

  return (
    <div className="score-feedback-page">
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
          <li><a href="/">Home</a></li>
          <li><a href="/give-interview">Give Interview</a></li>
          <li><a href="/score-feedback">Score & Feedback</a></li>
          <li><a href="/profile">My Profile</a></li>
          <li><a href="/contact">Contact Us</a></li>
          <li>
            <button
              onClick={() => window.location.href = '/logout-allowed'}
              disabled={!allowLogout}
              style={{
                opacity: allowLogout ? 1 : 0.5,
                cursor: allowLogout ? 'pointer' : 'not-allowed'
              }}
            >
              Logout
            </button>
          </li>
        </ul>
      </nav>

      <div className="feedback-box">
        <h1>📊 Your Interview Feedback</h1>

        <div className="chart-container">
          <Pie data={chartData} options={{ maintainAspectRatio: false }} />
        </div>

        <p className="summary">
          💡 AI Summary: <strong>{feedback.summary}</strong><br />
          🧮 Score: <strong>{feedback.totalScore} / 10</strong><br />
          📈 Percentage: <strong>{(feedback.totalScore * 10).toFixed(1)}%</strong>
        </p>

        <div className="question-feedback">
          {feedback.results.map((item, idx) => (
            <div key={idx} style={{ marginBottom: '25px' }}>
              <p><strong>Q{idx + 1}: {item.question}</strong></p>
              <p>🗣️ Your Answer: <em>{item.transcript || "No answer detected"}</em></p>
              <p>🔑 Matched Keywords: {item.matchedKeywords?.length > 0 ? item.matchedKeywords.join(', ') : 'None'}</p>
              <p>✅ Score: <strong>{item.score}</strong> / 1</p>
            </div>
          ))}
        </div>

        <footer>© All Rights Reserved</footer>
      </div>
    </div>
  );
};

export default ScoreFeedback;
