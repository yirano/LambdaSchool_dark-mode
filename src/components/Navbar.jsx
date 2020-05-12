import React from 'react';
import { useDarkMode } from './hooks/useDarkMode.jsx'

const Navbar = () => {
  const [darkMode, toggleMode] = useDarkMode('dark-mode', false);

  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;


// you're creating a custom hook that adds or removes a class called 'dark-mode' to the body. --> Example: document.body.classList.add('dark-mode') 

// the class 'dark-mode' is added when the darkMode is set to true and vice versa --> Hint* Use a ternary conditional statement here.

// Forget using the localStorage for now to make this problem easier to solve. Use the useState hook. 


