// ✅ Final Updated GiveInterview.jsx

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
  const [questions] = useState([
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
  ]);

  const [currentQ, setCurrentQ] = useState(0);
  const [interviewDone, setInterviewDone] = useState(false);

  useEffect(() => {
    const given = Cookies.get('interviewGiven');
    if (given === 'true') {
      alert("⚠️ You have already given the interview. Please wait for feedback.");
      window.location.href = '/';
    } else {
      Cookies.set('disableNavDuringInterview', 'true');
    }
  }, []);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      videoRef.current.srcObject = stream;
      videoRef.current.play();

      chunks.current = [];
      const recorder = new MediaRecorder(stream);

      recorder.ondataavailable = (e) => {
        if (e.data.size > 0) chunks.current.push(e.data);
      };

      recorder.onstop = async () => {
        const blob = new Blob(chunks.current, { type: 'video/webm' });
        setVideoBlob(blob);
        stream.getTracks().forEach(track => track.stop());

        const reader = new FileReader();
        reader.onloadend = async () => {
          const base64data = reader.result.split(',')[1];
          try {
            const res = await fetch('https://hiresmart-backend1.onrender.com/api/interview/upload', {
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

            const data = await res.json();
            if (!data.success) alert("❌ Upload failed: " + data.message);

          } catch (err) {
            alert("❌ Upload error: " + err.message);
          }
        };
        reader.readAsDataURL(blob);
      };

      mediaRecorderRef.current = recorder;
      recorder.start();
      setRecording(true);
    } catch (err) {
      alert('❌ Error accessing webcam or microphone. Please allow permissions.');
    }
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
      alert("🎉 Interview complete! Thank you.");
      setInterviewDone(true);
      Cookies.set('interviewGiven', 'true', { expires: 30 });
      Cookies.remove('disableNavDuringInterview');
    }
  };

  const disableNav = Cookies.get('disableNavDuringInterview') === 'true';

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
          <li><Link className={disableNav ? 'disabled-link' : ''} to="/">Home</Link></li>
          <li><Link className={disableNav ? 'disabled-link' : ''} to="/give-interview">Give Interview</Link></li>
          <li><Link className={disableNav ? 'disabled-link' : ''} to="/score-feedback">Score & Feedback</Link></li>
          <li><Link className={disableNav ? 'disabled-link' : ''} to="/profile">My Profile</Link></li>
          <li><Link className={disableNav ? 'disabled-link' : ''} to="/contact">Contact Us</Link></li>
          <li><button onClick={() => {
            localStorage.removeItem('token');
            Cookies.remove('disableNavDuringInterview');
            window.location.href = '/';
          }}>Logout</button></li>
        </ul>
      </nav>

      <div className="interview-page">
        <h1>🎥 AI Video Interview</h1>
        <p><strong>Question {currentQ + 1}:</strong> {questions[currentQ]}</p>

        <div className="video-split">
          <div className="video-container">
            <video ref={videoRef} className="video-player" muted></video>
            <div className="button-row">
              {!recording && <button onClick={startRecording}>Start Recording</button>}
              {recording && <button onClick={stopRecording}>Stop Recording</button>}
              <button onClick={nextQuestion}>Next Question</button>
            </div>
          </div>

          {videoBlob && (
            <div className="recorded-preview">
              <h3>Answer Preview</h3>
              <video className="video-preview" src={URL.createObjectURL(videoBlob)} controls></video>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default GiveInterview;
