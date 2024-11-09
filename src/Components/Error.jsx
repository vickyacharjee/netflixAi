// Error.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Error = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/');
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-red-900 via-black to-black text-white">
      <h1 className="text-6xl font-bold animate-pulse">404</h1>
      <p className="text-2xl mt-4">Oops! Page not found.</p>
      <p className="text-lg mt-2">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
      <button 
        onClick={goHome} 
        className="mt-8 px-6 py-3 bg-red-700 hover:bg-red-800 rounded-lg text-lg font-medium shadow-lg transition transform hover:scale-105">
        Go Home
      </button>
    </div>
  );
};

export default Error;
