import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './SideMenu.css';

function SideMenu({ headers }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleMenu = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`side-menu ${isCollapsed ? 'collapsed' : ''}`}>
      <button className="toggle-button" onClick={toggleMenu}>
        <FontAwesomeIcon icon={isCollapsed ? faBars : faTimes} />
      </button>
      <h2>Menu</h2>
      <ul>
        {headers.map(header => (
          <li key={header.id}>
            <a href={`#${header.id}`}>{header.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideMenu;
