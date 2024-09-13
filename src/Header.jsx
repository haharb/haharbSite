import React from 'react';
import { Link } from 'react-router-dom';
import ModeSwitch from './ModeSwitch';

function Header() {
  return (
    <header className="header">
      <div className="tab-header">
        {/*<Link to="/" className="tab-link">Home</Link>*/}
        <Link to="/projects" className="tab-link">Projects</Link>
        {/*<Link to="/about" className="tab-link">About Me</Link>*/}
        <Link to="/contact" className="tab-link">Contact</Link>
        <ModeSwitch/>
      </div>
    </header>
    
  );
}

export default Header;
