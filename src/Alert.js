import React, { useState } from 'react';

const DarkModeToggle = ({ message, type, onClose }) => {

  const [darkMode, setDarkMode] = useState(false);

  const handleDarkMode = () => {
    setDarkMode(!darkMode); // Toggle the darkMode state
  }

  return (
    <div className={`alert ${type}`}>
      <p>{message}</p>
      <span className="close-btn" onClick={onClose}>&times;</span>
    </div>
  );
};

export default DarkModeToggle;
