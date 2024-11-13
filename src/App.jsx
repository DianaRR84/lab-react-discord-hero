// src/App.jsx
import React from 'react';
import './App.css';
import logo from './assets/discord-logo-white.png'; // Assuming you have the logo as an image asset
import menuIcon from './assets/menu-icon.png';       // Import Menu icon

function App() {
  return (
    <div className="landing-page">
      {/* Navbar */}
      <nav className="navbar">
        <img src={logo} alt="Discord Logo" className="logo" />
        <img src={menuIcon} alt="Menu Icon" className="menu-icon" />
      </nav>

      {/* Main Content */}
      <div className="main-content">
        <div className="text-content">
          <h1>IMAGINE A PLACE...</h1>
          <p>
            ...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.
          </p>
          <div className="buttons">
            <button className="download-btn">Download for Mac</button>
            <button className="browser-btn">Open Discord in your browser</button>
          </div>
        </div>
        
        {/* Placeholder for Illustration */}
        <div className="illustration">
          {/* You can place an image or illustration here */}
          <img src="src/assets/discord-background.png" alt="Discord Characters" />
        </div>
      </div>
    </div>
  );
}

export default App;
