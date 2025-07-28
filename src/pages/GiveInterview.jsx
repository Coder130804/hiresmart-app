// src/pages/GiveInterview.jsx
import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import './giveinterview.css';
import Navbar from '../components/Navbar';

import { drcrQuestions } from '../questions/drcr';
import { eduQuestions } from '../questions/edu';
import { genderQuestions } from '../questions/gender';
import { hnQuestions } from '../questions/hn';
import { hrQuestions } from '../questions/hr';
import { infraQuestions } from '../questions/infra';
import { lsdQuestions } from '../questions/lsd';
import { merQuestions } from '../questions/mer';
import { mlrQuestions } from '../questions/mlr';
import { tribalQuestions } from '../questions/tribal';
import { volunteerQuestions } from '../questions/volunteer';
import { washQuestions } from '../questions/wash';
import { youthQuestions } from '../questions/youth';

const themeMap = {
  "Education & Learning": eduQuestions,
  "Livelihoods & Skill Development": lsdQuestions,
  "Health & Nutrition": hnQuestions,
  "Water, Sanitation & Hygiene (WASH)": washQuestions,
  "Tribal Development & Inclusion": tribalQuestions,
  "Disaster Relief & Climate Resilience": drcrQuestions,
  "Sustainable Infrastructure": infraQuestions,
  "Volunteerism & Community Engagement": volunteerQuestions,
  "Gender Equality & Women’s Empowerment": genderQuestions,
  "Migration & Labour Rights": mlrQuestions,
  "Youth & Sports Development": youthQuestions,
  "Monitoring, Evaluation & Research (MER)": merQuestions
};

const initialHR = [
  "Tell me about yourself.",
  "What influenced you to choose this career?",
  "What are your short term and long term goals? And how do you plan to achieve them?"
];

const finalHR = [
  "What experience / projects / knowledge do you have in this field?",
  "What are your expectations from us?"
];

const GiveInterview = () => {
  const videoRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const chunks = useRef([]);
  const [recording, setRecording] = useState(false);
  const [videoBlob, setVideoBlob] = useState(null);

  const [interviewDone, setInterviewDone] = useState(false);
  const [interviewStarted, setInterviewStarted] = useState(false);

  const [jobTheme, setJobTheme] = useState('');
  const [questions, setQuestions] = useState([]);
  const [currentQ, setCurrentQ] = useState(0);

  useEffect(() => {
    const done = Cookies.get('interviewDone');
    if (done === 'true') setInterviewDone(true);
  }, []);

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
    videoRef.current.srcObject = stream;
    videoRef.current.play();
    chunks.current = [];

    const recorder = new MediaRecorder(stream);
    recorder.ondataavailable = e => {
      if (e.data.size > 0) chunks.current.push(e.data);
    };

    recorder.onstop = async () => {
      const blob = new Blob(chunks.current, { type: 'video/webm' });
      setVideoBlob(blob);
      stream.getTracks().forEach(t => t.stop());

      const reader = new FileReader();
      reader.onloadend = async () => {
        const base64data = reader.result.split(',')[1];
        await fetch('https://hiresmart-backend1.onrender.com/api/interview/upload', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          },
          body: JSON.stringify({
            question: questions[currentQ],
            videoType: 'video/webm',
            videoBase64: base64data
          })
        });
      };
      reader.readAsDataURL(blob);
    };

    mediaRecorderRef.current = recorder;
    recorder.start();
    setRecording(true);
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && recording) {
      mediaRecorderRef.current.stop();
      setRecording(false);
    }
  };

  const nextQuestion = () => {
    if (currentQ < questions.length - 1) {
      setCurrentQ(currentQ + 1);
      setVideoBlob(null);
    } else {
      Cookies.set('interviewDone', 'true', { expires: 30 });
      setInterviewDone(true);
      alert("🎉 Interview complete! Please check back later for feedback.");
    }
  };

  const handleStartInterview = async () => {
    const domainQuestions = [...themeMap[jobTheme]]
      .sort(() => 0.5 - Math.random())
      .slice(0, 5)
      .map(q => typeof q === 'string' ? q : q.question);

    const fullQs = [...initialHR, ...domainQuestions, ...finalHR];
    setQuestions(fullQs);
    setInterviewStarted(true);

    // 🔥 Save to backend for analysis
    try {
      const token = Cookies.get('token');
      const response = await fetch('https://hiresmart-backend1.onrender.com/api/interview/session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({
          jobTheme,
          questions: fullQs
        })
      });

      const data = await response.json();
      if (!data.success) console.error('❌ Failed to save session:', data.message);
      else console.log('✅ Questions saved to backend');
    } catch (err) {
      console.error('❌ Error saving session:', err.message);
    }
  };

  return (
    <>
      <Navbar />

      {interviewDone ? (
        <div className="interview-complete">
          <h2>You have already given the interview. Please wait for feedback.</h2>
          <Link to="/">Go to Home</Link>
        </div>
      ) : !interviewStarted ? (
        <div className="interview-start">
          <div className="theme-box">
            <h2>🎯 Select a Job Theme to Start Your Interview</h2>
            <select value={jobTheme} onChange={(e) => setJobTheme(e.target.value)}>
              <option value="">-- Select a Theme --</option>
              {Object.keys(themeMap).map((theme, idx) => (
                <option key={idx} value={theme}>{theme}</option>
              ))}
            </select>
            <br /><br />
            <button onClick={handleStartInterview} disabled={!jobTheme}>
              🎥 Proceed to Interview
            </button>
          </div>
        </div>
      ) : (
        <div className="interview-page">
          <h3 style={{ textAlign: 'center', marginTop: '20px', fontSize: '1.4rem', color: '#1e3a8a' }}>
            🎥 Video Interview In Progress
          </h3>

          <div className="interview-container">
            <aside className="live-section">
              <h3>Question {currentQ + 1} of {questions.length}</h3>
              <p>{questions[currentQ]}</p>
              <video ref={videoRef} className="live-video" muted></video>
              <div className="button-row">
                {!recording && <button onClick={startRecording}>Start Recording</button>}
                {recording && <button onClick={stopRecording}>Stop Recording</button>}
                <button onClick={nextQuestion} disabled={recording || !videoBlob}>Next Question</button>
              </div>
            </aside>

            <aside className="preview-section">
              {videoBlob && (
                <>
                  <h3>Answer Preview</h3>
                  <video className="preview-video" src={URL.createObjectURL(videoBlob)} controls />
                </>
              )}
            </aside>
          </div>
        </div>
      )}
     
    </>
  );
};

export default GiveInterview;