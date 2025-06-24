import { useState } from 'react';
import axios from 'axios';

const AuthPage = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [form, setForm] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const url = `http://localhost:5000/api/auth/${isSignUp ? 'signup' : 'signin'}`;
      const res = await axios.post(url, form);
      if (res.data.success) {
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('role', res.data.user?.role);
        setMessage('✅ Success! Redirecting...');
        setTimeout(() => {
          window.location.href = '/dashboard';
        }, 1000);
      } else {
        setMessage(res.data.message || '❌ Failed. Try again.');
      }
    } catch (err) {
      setMessage('❌ Server Error');
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url('https://i0.wp.com/connectusrecruitment.co.uk/wp-content/uploads/2024/08/interview-feedback-cover-1.jpg?fit=1000%2C553&ssl=1')` }}
    >
      <div className="bg-white bg-opacity-90 p-8 rounded-2xl shadow-2xl w-[90%] max-w-md">
        <h1 className="text-3xl font-bold text-center mb-2 text-blue-700">FaceHire</h1>
        <p className="text-sm text-gray-600 text-center mb-4">
          AI-powered Interview Bot to Analyze Your Responses
        </p>

        <div className="flex justify-center gap-4 mb-4">
          <button
            onClick={() => { setIsSignUp(true); setMessage(''); }}
            className={`px-4 py-1 rounded-full ${isSignUp ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          >
            Sign Up
          </button>
          <button
            onClick={() => { setIsSignUp(false); setMessage(''); }}
            className={`px-4 py-1 rounded-full ${!isSignUp ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          >
            Sign In
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="border p-2 rounded"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="border p-2 rounded"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
          >
            {isSignUp ? 'Create Account' : 'Login'}
          </button>
        </form>

        {message && <p className="text-center text-sm mt-2 text-red-600">{message}</p>}
      </div>
    </div>
  );
};

export default AuthPage;
