// src/components/Navbar.js
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Header from './Header';
import './navbar.css'

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const token = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove JWT token
    navigate('/login'); // Redirect to login page
  };

  // Do not display the Navbar on the login or signup page
  if (location.pathname === '/login' || location.pathname === '/signup') {
    return null;
  }

  // If the user is not logged in (no token), also do not show the Navbar
  if (!token) {
    return null;
  }

  return (
    <nav>
      
        <div className='navbar-block-1-351'>
        
        <button className="logout-button"  onClick={handleLogout} >Logout</button>
        </div>
      
    </nav>
  );
};

export default Navbar;
