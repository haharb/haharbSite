// SideMenu.js
import React from 'react';
import './App.css';
import './Header.css';
import './Footer.css';
import './DarkMode.css';
import './LightMode.css';
import './SideMenu.css';

const SideMenu = ({ headers }) => {
  return (
    <nav className="side-menu">
      <ul>
        {headers.map((header, index) => (
          <li key={index}>
            <a href={`#${header.id}`}>{header.text}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SideMenu;
