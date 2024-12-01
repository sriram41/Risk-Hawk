// src/components/Signup.js
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Signup = () => {
  const [username, setUsername] = useState('');  // Change to username
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),  // Send username instead of email
      });

      const data = await response.json();
      if (data.token) {
        localStorage.setItem('token', data.token); // Save token in localStorage
        navigate('/dashboard'); // Redirect to dashboard
      } else {
        setError('Signup failed. Please try again.');
      }
    } catch (error) {
      setError('Something went wrong. Please try again.');
    }
  };

  return (
    <div className='total-login-block-1041'>
        <div className='section-login-2-054'>
        <div className="logo">
        <img className='total-logo-1211' src="/assets/riskhawk-logo.png" alt="Risk Hawk" />
      </div>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>  {/* Change label to Username */}
          <input
            type="text"
            value={username}  // Update to username
            onChange={(e) => setUsername(e.target.value)}  // Update handler for username
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Sign Up</button>
      </form>

      {/* Link to Login Page */}
      <p>
        Already have an account? <Link to="/login">Login here</Link>
      </p>
    </div>
    </div>
  );
};

export default Signup;
