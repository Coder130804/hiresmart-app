import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './giveinterview.css';

const GiveInterview = () => {
  const videoRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const chunks = useRef([]); // for recording
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
            const res = await fetch('http://localhost:5000/api/interview/upload', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
              },
              body: JSON.stringify({
                question: questions[currentQ],
                videoType: 'video/webm',
                videoBase64: base64data
              })
            });

            const data = await res.json();
            if (data.success) {
              alert("✅ Video uploaded successfully!");
            } else {
              alert("❌ Upload failed: " + data.message);
            }
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
      alert("Interview complete! Thank you.");
    }
  };

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
          <li><Link to="/">Home</Link></li>
          <li><Link to="/give-interview">Give Interview</Link></li>
          <li><Link to="/score-feedback">Score & Feedback</Link></li>
          <li><Link to="/profile">My Profile</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li>
            <button onClick={() => {
              localStorage.removeItem('token');
              window.location.href = '/';
            }}>Logout</button>
          </li>
        </ul>
      </nav>

      {/* 🔷 Interview Section */}
      <div className="interview-page">
        <h1 style={{ fontSize: '3rem', marginBottom: '10px' }}>AI Video Interview</h1>
        <p><strong>Question {currentQ + 1}:</strong> {questions[currentQ]}</p>

        <div className="video-container">
          <video ref={videoRef} className="video-player" muted></video>
        </div>

        <div className="button-row">
          {!recording && <button onClick={startRecording}>Start Recording</button>}
          {recording && <button onClick={stopRecording}>Stop Recording</button>}
          <button onClick={nextQuestion}>Next Question</button>
        </div>

        {videoBlob && (
          <div className="recorded-preview">
            <h3>Answer Preview:</h3>
            <video className="video-preview" src={URL.createObjectURL(videoBlob)} controls></video>
          </div>
        )}
      </div>
    </>
  );
};

export default GiveInterview;
