import React, { useEffect, useState } from 'react';
import './scorefeedback.css';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';

const ScoreFeedback = () => {
  const [feedback, setFeedback] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fakeUser = localStorage.getItem('token'); // simulate per user
    if (!fakeUser) {
      setError('Not authenticated!');
      return;
    }

    // Simulate fake feedback per user
    const randomScore = Math.floor(Math.random() * 6) + 5; // 5–10
    const questions = [
      "Tell me about yourself.",
      "Describe your project mentioned in your CV.",
      "Tell me about your achievements.",
      "What was your last job/project about?",
      "Why do you want to work with us?",
      "What are your strengths and weaknesses?",
      "Where do you see yourself in 5 years?",
      "Describe a challenge you overcame.",
      "What are your salary expectations?",
      "Do you have any questions for us?"
    ];

    const answers = questions.map((q, index) => ({
      question: q,
      answered: Math.random() > 0.2
    }));

    setFeedback({
      score: randomScore,
      answers,
      summary: randomScore > 7 ? "Strong candidate" : "Needs improvement"
    });
  }, []);

  if (error) return <div className="feedback-box"><p>{error}</p></div>;

  if (!feedback) return <div className="feedback-box"><p>Loading...</p></div>;

  const chartData = {
    labels: ['Scored', 'Remaining'],
    datasets: [
      {
        data: [feedback.score, 10 - feedback.score],
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
          <li><button onClick={() => {
            localStorage.removeItem('token');
            window.location.href = '/';
          }}>Logout</button></li>
        </ul>
      </nav>

      <div className="feedback-box">
        <h1>📊 Your Interview Feedback</h1>
        <div className="chart-container">
          <Pie data={chartData} options={{ maintainAspectRatio: false }} />
        </div>

        <p className="summary">💡 AI Summary: <strong>{feedback.summary}</strong></p>

        <div className="question-feedback">
          {feedback.answers.map((ans, idx) => (
            <p key={idx}><strong>{ans.question}</strong>: {ans.answered ? "✅ Answered" : "❌ Unanswered"}</p>
          ))}
        </div>

        <footer>© All Rights Reserved</footer>
      </div>
    </div>
  );
};

export default ScoreFeedback;
