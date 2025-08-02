// ✅ MODIFIED GiveInterview.jsx
import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import './giveinterview.css';
import Navbar from '../components/Navbar';

import agriQuestions from '../questions/agri';
import cseQuestions from '../questions/cse';
import commQuestions from '../questions/comm';
import cdQuestions from '../questions/cd';
import daQuestions from '../questions/da';
import disabilityInclusionQuestions from '../questions/dis';
import eduQuestions from '../questions/edu';
import financeQuestions from '../questions/fna';
import genderQuestions from '../questions/gender';
import grassQuestions from '../questions/grass';
import infraQuestions from '../questions/infra';
import peopleQuestions from '../questions/people';
import pnaQuestions from '../questions/pna';
import hrQuestions from '../questions/hr';
import pbQuestions from '../questions/pb';
import lsdQuestions from '../questions/lsd';
import sports from '../questions/sports';
import supplyQuestions from '../questions/supply';
import tribalQuestions from '../questions/tribal';
import urbanDevelopmentQuestions from '../questions/udev';
import uhab from '../questions/uhab';
import wecoQuestions from '../questions/weco';

const themeMap = {
  "Agriculture": agriQuestions,
  "Civil Society Engagement": cseQuestions,
  "Communications": commQuestions,
  "Community development": cdQuestions,
  "Digital & Analytics": daQuestions,
  "Disability": disabilityInclusionQuestions,
  "Education": eduQuestions,
  "Finance & Accounts": financeQuestions,
  "Gender & CE": genderQuestions,
  "Grassroot Governance and Decentralised Planning": grassQuestions,
  "Infrastructure": infraQuestions,
  "People": peopleQuestions,
  "Planning & Analytics": pnaQuestions,
  "Public Health": pbQuestions,
  "Skill Development": lsdQuestions,
  "Sports": sports,
  "Supply Chain": supplyQuestions,
  "Tribal Identity": tribalQuestions,
  "Urban Development": urbanDevelopmentQuestions,
  "Urban Habitat": uhab,
  "Workplace Ecosystem": wecoQuestions
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
  const [loading, setLoading] = useState(false);
  const videoRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const chunks = useRef([]);
  const recognitionRef = useRef(null);

  const [recording, setRecording] = useState(false);
  const [videoBlob, setVideoBlob] = useState(null);
  const [transcript, setTranscript] = useState('');
  const [recordedQs, setRecordedQs] = useState({});

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
            videoBase64: base64data,
            transcript
          })
        });
      };
      reader.readAsDataURL(blob);

      setRecordedQs(prev => ({ ...prev, [currentQ]: true }));
    };

    mediaRecorderRef.current = recorder;
    recorder.start();
    setRecording(true);

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = false;
    recognition.lang = 'en-US';

    recognition.onresult = e => {
      const text = Array.from(e.results).map(r => r[0].transcript).join(' ');
      setTranscript(text);
    };

    recognitionRef.current = recognition;
    recognition.start();
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && recording) {
      mediaRecorderRef.current.stop();
      setRecording(false);
      if (recognitionRef.current) recognitionRef.current.stop();
    }
  };

  const nextQuestion = () => {
    setTranscript('');
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
    setLoading(true);
    const domainQuestions = [...themeMap[jobTheme]]
      .sort(() => 0.5 - Math.random())
      .slice(0, 5)
      .map(q => typeof q === 'string' ? q : q.question);

    const fullQs = [...initialHR, ...domainQuestions, ...finalHR];
    localStorage.setItem('theme', jobTheme);
    localStorage.setItem('interviewQuestions', JSON.stringify(fullQs));
    setQuestions(fullQs);
    setInterviewStarted(true);
    setCurrentQ(0);

    try {
      const response = await fetch('https://hiresmart-backend1.onrender.com/api/interview/session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({
          jobTheme,
          questions: fullQs.map(q => ({
            question: q,
            theme: jobTheme,
            scoreMode: "keyword",
            keywords: []
          }))
        })
      });

      const data = await response.json();
      if (!data.success) console.error('❌ Failed to save session:', data.message);
      else console.log('✅ Questions saved to backend');
    } catch (err) {
      console.error('❌ Error saving session:', err.message);
    }

    setTimeout(() => {
      startRecording(); // Auto start on first question
      setLoading(false); // Stop spinner
    }, 500);
  };

  useEffect(() => {
    if (interviewStarted && currentQ !== 0) {
      startRecording(); // Auto start on every question after 0
    }
  }, [currentQ]);

if (loading) {
  return <div className="loading-overlay">Loading Interview Setup...</div>;
}

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
            <button onClick={handleStartInterview} disabled={!jobTheme}>🎥 Proceed to Interview</button>
          </div>
        </div>
      ) : (
        <div className="interview-page">
          <div className="black-banner">
            🎥 Video Interview In Progress
          </div>

          <div className="interview-container">
            <aside className="live-section">
              <h3>Question {currentQ + 1} of {questions.length}</h3>
              <p>{questions[currentQ]}</p>
              <video ref={videoRef} className="live-video" muted></video>
              <div className="button-row">
                <button onClick={stopRecording} disabled={!recording}>Stop Recording</button>
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
