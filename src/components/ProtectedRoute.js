// src/components/ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');

  if (!token) {
    // If no token found, redirect to login
    return <Navigate to="/login" />;
  }

  return children; // Render the protected component (e.g., Dashboard) if token exists
};

export default ProtectedRoute;
