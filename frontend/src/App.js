import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

function App() {

  const [elfbars, setElfbar] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Let`s play football
        </p>
        <a
          className="App-link"
          href="https://github.com/goloburdaivan/rzhad-elfbar"
          target="_blank"
          rel="noopener noreferrer"
        >
          World cup
        </a>
      </header>
    </div>
  );
}

export default App;
