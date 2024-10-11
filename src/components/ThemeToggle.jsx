import React from 'react';
import { BsSun, BsMoon } from 'react-icons/bs';

function ThemeToggle({ isDarkMode, toggleTheme }) {
  return (
    <button 
      onClick={toggleTheme} 
      className="btn btn-outline-secondary position-fixed"
      style={{ top: '70px', right: '20px' }}
    >
      {isDarkMode ? <BsSun /> : <BsMoon />}
    </button>
  );
}

export default ThemeToggle;