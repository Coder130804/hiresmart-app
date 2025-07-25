// src/pages/GiveInterview.jsx
import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import './giveinterview.css';

const GiveInterview = () => {
  const videoRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const chunks = useRef([]);
  const [recording, setRecording] = useState(false);
  const [videoBlob, setVideoBlob] = useState(null);
  const [currentQ, setCurrentQ] = useState(0);
  const [interviewDone, setInterviewDone] = useState(false);

  const questions = [
    "Tell me about yourself.",
    "Describe your project mentioned in your CV.",
    "Tell me about your achievements.",
    "What was your last job/project about?",
    "Why do you want to work with us?",
    "What are your strengths and weaknesses?",
    "Where do you see yourself in the next 5 years?",
    "Describe a challenging situation and how you handled it.",
    "What are your salary expectations?",
    "Do you have any questions for us?"
  ];

  useEffect(() => {
    const done = Cookies.get('interviewDone');
    if (done === 'true') {
      setInterviewDone(true);
    }
  }, []);

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
    videoRef.current.srcObject = stream;
    videoRef.current.play();
    chunks.current = [];
    const recorder = new MediaRecorder(stream);
    recorder.ondataavailable = e => { if (e.data.size > 0) chunks.current.push(e.data); };
    recorder.onstop = async () => {
      const blob = new Blob(chunks.current, { type: 'video/webm' });
      setVideoBlob(blob);
      stream.getTracks().forEach(t => t.stop());

      const reader = new FileReader();
      reader.onloadend = async () => {
        const base64data = reader.result.split(',')[1];
        await fetch('https://hiresmart-backend1.onrender.com/api/interview/upload', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${Cookies.get('token')}` },
          body: JSON.stringify({ question: questions[currentQ], videoType: 'video/webm', videoBase64: base64data })
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

  if (interviewDone) {
    return (
      <div className="interview-complete">
        <h2>You have already given the interview. Please wait for feedback.</h2>
        <Link to="/">Go to Home</Link>
      </div>
    );
  }

  return (
    <div className="interview-page">
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
            <button onClick={() => { Cookies.remove('token'); Cookies.remove('interviewDone'); window.location.href = '/'; }}>Logout</button>
          </li>
        </ul>
      </nav>

       <h3 style={{ textAlign: 'center', marginTop: '20px', fontSize: '1.4rem', color: '#1e3a8a' }}>🎥 Video Interview In Progress</h3>

      <div className="interview-container">
        <aside className="live-section">
          <h3>Question {currentQ + 1}</h3>
          <p>{questions[currentQ]}</p>
          <video ref={videoRef} className="live-video" muted></video>
          <div className="button-row">
            {!recording && <button onClick={startRecording}>Start Recording</button>}
            {recording && <button onClick={stopRecording}>Stop Recording</button>}
            <button onClick={nextQuestion} disabled={recording}>Next Question</button>
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
  );
};

export default GiveInterview;
