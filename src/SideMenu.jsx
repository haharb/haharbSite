import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './SideMenu.css';

function SideMenu({ headers, scrollToSection, sdrRef, tdsRef, activeSection }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleMenu = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleScrollToSection = (id) => {
    if (id === 'sdr') {
      scrollToSection(sdrRef, id);
    } else if (id === 'tds') {
      scrollToSection(tdsRef, id);
    } else {
      console.warn(`No section found for id: ${id}`);
    }
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
            <button 
              onClick={() => handleScrollToSection(header.id)}
              className={activeSection === header.id ? 'active' : ''}
            >
              {header.text}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideMenu;
