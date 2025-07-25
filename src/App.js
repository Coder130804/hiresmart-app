import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUpSignIn from './pages/SignUpSignIn';
import Dashboard from './pages/Dashboard';
import GiveInterview from './pages/GiveInterview';
import ScoreFeedback from './pages/ScoreFeedback';
import MyProfile from './pages/MyProfile';
import ContactUs from './pages/ContactUs';
import MyProfileView from './pages/MyProfileView';
import LogoutAfterScore from './pages/LogoutAfterScore';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUpSignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/give-interview" element={<GiveInterview />} />
        <Route path="/score-feedback" element={<ScoreFeedback />} />
        <Route path="/profile" element={<MyProfile />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/profile-view" element={<MyProfileView />} />
        <Route path="/logout-allowed" element={<LogoutAfterScore />} />
      </Routes>
    </Router>
  );
}

export default App;
