// src/components/Dashboard.js
import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';

import './Dashboard.css'
import Profileuser from './Profile';
import Header from './Header';

const Dashboard = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProtectedData = async () => {
      const token = localStorage.getItem('token');

      if (!token) {
        setError('No token found, please login');
        return;
      }

      try {
        const response = await fetch('http://localhost:5000/protected-route', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`, // Include JWT in Authorization header
          },
        });

        const result = await response.json();
        if (response.ok) {
          setData(result);
        } else {
          setError('Failed to fetch protected data');
        }
      } catch (err) {
        setError('An error occurred');
      }
    };

    fetchProtectedData();
  }, []);

  return (
    <div>

      {/* {error && <p style={{ color: 'red' }}>{error}</p>}
      {data ? null : <p>Loading...</p>} */}
      <div className='total-container-1'>
        <div className='block-1-sidebar'>
         <Sidebar />

        </div>
        
        <div className='block-2-remaining'>
        <Header />
        <div className='profile-block'>
            <Profileuser />
        </div>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;
