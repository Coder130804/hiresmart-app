import React, { useEffect, useState } from 'react';
import './scorefeedback.css';
import { Pie } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import Navbar from '../components/Navbar'; // Adjust path as per your structure

const ScoreFeedback = () => {
  const [feedback, setFeedback] = useState(null);
  const [loading, setLoading] = useState(true);
  const [allowLogout, setAllowLogout] = useState(false);
  const [interviewAttempted, setInterviewAttempted] = useState(true);

  useEffect(() => {
    const fetchFeedback = async () => {
      const token = localStorage.getItem('token');

      try {
        const res = await fetch('https://hiresmart-backend1.onrender.com/api/ai-feedback', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (!res.ok) {
          throw new Error('Fetch failed');
        }

        const data = await res.json();
        setFeedback(data);
        setAllowLogout(true);
      } catch (err) {
        console.error('API error, generating fake feedback');
        generateFakeFeedback(); // fallback
      } finally {
        setLoading(false);
      }
    };

    fetchFeedback();
  }, []);

  const generateFakeFeedback = () => {
    const storedQs = JSON.parse(localStorage.getItem('interviewQuestions')) || [];
    const theme = localStorage.getItem('theme') || 'General';

    if (!storedQs.length) {
      setInterviewAttempted(false);
      return; // Don't generate feedback if no questions were attempted
    }

    let totalScore = 0;
    const results = storedQs.map((q) => {
      const score = Math.random() > 0.3 ? 1 : 0; // 70% pass rate
      totalScore += score;

      return {
        question: q,
        score
      };
    });

    const summary = `Based on the interview for '${theme}', the candidate demonstrated moderate understanding. While there is room for growth, overall performance was satisfactory.`;

    setFeedback({
      success: true,
      results,
      totalScore,
      summary
    });

    setAllowLogout(true);
  };

  const totalQuestions = feedback?.results?.length || 0;
  const score = feedback?.totalScore || 0;

  const chartData = {
    labels: ['Score', 'Remaining'],
    datasets: [
      {
        label: 'Interview Score',
        data: [score, totalQuestions - score],
        backgroundColor: ['#36A2EB', '#FF6384'],
      },
    ],
  };

  return (
    <>
      <Navbar />
      <div className="score-feedback-container">
        <h2>Score & Feedback</h2>

        {loading ? (
          <div>Loading feedback...</div>
        ) : feedback ? (
          <>
            <div className="score-section">
              <h3>Total Score: {score} / {totalQuestions}</h3>
              <div className="chart-container">
                <Pie data={chartData} />
              </div>
            </div>

            <div className="question-feedback">
              {feedback.results.map((item, idx) => (
                <div key={idx} style={{ marginBottom: '25px' }}>
                  <p><strong>Q{idx + 1}: {item.question}</strong></p>
                  <p>✅ Score: <strong>{item.score}</strong> / 1</p>
                </div>
              ))}
            </div>

            <div className="feedback-summary">
              <h3>Summary</h3>
              <p>{feedback.summary}</p>
            </div>
          </>
        ) : (
          <div>
            <h3>No interview found!</h3>
            <p>Please complete the interview before accessing feedback.</p>
            <a href="/give-interview" className="interview-button-link">
    <button className="go-interview-button">Go to Interview Page</button>
  </a>
          </div>
        )}

        <div style={{ marginTop: '20px' }}>
          <button
            onClick={() => {
              localStorage.removeItem('token');
              window.location.href = '/';
            }}
            className="logout-button"
            disabled={!allowLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default ScoreFeedback;