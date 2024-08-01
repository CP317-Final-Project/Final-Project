import React from 'react';
import { useLocation } from 'react-router-dom';
import './WelcomePage.css';

const WelcomePage = () => {
  const location = useLocation();
  const { username } = location.state;

  return (
    <div className="welcome-container">
      <h1>Welcome</h1>
      <p>Hi {username}</p>
    </div>
  );
};

export default WelcomePage;
