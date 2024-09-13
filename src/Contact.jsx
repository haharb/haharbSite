import React from 'react';
import './App.css';
import './Header.css';
import './Footer.css';
import './DarkMode.css';
import './LightMode.css';
import './SideMenu.css';
import './Contact.css';
import Header from './Header';
import githubLogo from './photos/github-logo.png';
import linkedinLogo from './photos/linkedIn_logo.png';
import gmailLogo from './photos/gmail-logo.png';

function Contact() {
  return (
    <div>

      <div className="tab-content">
        <div className="logo-container">
          <a 
            href="https://github.com/haharb" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="github-link"
          >
            <img 
              src={githubLogo} 
              alt="GitHub" 
              className="logo"
            />
          </a>
          <a 
            href="https://www.linkedin.com/in/hassan-harb-5a2553190/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="linkedin-link"
          >
            <img 
              src={linkedinLogo} 
              alt="LinkedIn" 
              className="logo"
            />
          </a>
          <a 
            href="mailto:hassanharbonly@gmail.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="email-link"
          >
            <img 
              src={gmailLogo} 
              alt="Gmail" 
              className="logo"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
