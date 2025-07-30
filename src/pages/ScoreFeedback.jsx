import React, { useEffect, useState } from 'react';
import './scorefeedback.css';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import Navbar from '../components/Navbar'; // ✅ Use existing Navbar with logo + disabled links

const ScoreFeedback = () => {
  const [feedback, setFeedback] = useState(null);
  const [error, setError] = useState('');
  const [allowLogout, setAllowLogout] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      setError('⚠️ Please login first to view feedback.');
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

        if (data.success && data.totalScore !== undefined && data.results?.length > 0) {
          setFeedback(data);
          setAllowLogout(true);
        } else {
          setError('🕐 Feedback not available yet. Please complete your interview first.');
        }
      } catch (err) {
        console.error('Feedback fetch error:', err);
        setError('❌ Error while loading feedback. Try again later.');
      }
    };

    fetchFeedback();
  }, []);

  return (
    <div className="score-feedback-page">
      {/* ✅ Always display Navbar */}
      <Navbar allowLogout={allowLogout} />

      {/* ✅ Content based on feedback */}
      <div className="feedback-box">
        {error && (
          <>
            <p>{error}</p>
            <p><a href="/give-interview">👉 Give Interview Now</a></p>
          </>
        )}

        {!error && !feedback && <p>Loading...</p>}

        {feedback && (
          <>
            <h1>📊 Your Interview Feedback</h1>

            <div className="chart-container">
              <Pie
                data={{
                  labels: ['Score', 'Remaining'],
                  datasets: [
                    {
                      data: [feedback.totalScore, 10 - feedback.totalScore],
                      backgroundColor: ['#4caf50', '#ddd'],
                    },
                  ],
                }}
                options={{ maintainAspectRatio: false }}
              />
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
          </>
        )}
      </div>
    </div>
  );
};

export default ScoreFeedback;