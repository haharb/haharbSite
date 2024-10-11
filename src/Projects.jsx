import React, { useRef, useState } from 'react';
import './App.css';
import './Header.css';
import './Footer.css';
import './DarkMode.css';
import './LightMode.css';
import './SideMenu.css';
import SideMenu from './SideMenu';

import sdr1 from './photos/SDR 1.png';
import sdr2 from './photos/SDR 2.png';
import sdr3 from './photos/SDR 3.png';
import sdr4 from './photos/SDR 4.png';

import tds1 from './photos/TDSV2 1.png';
import tds6 from './photos/TDSV2 6.png';


import qasop1 from './photos/QASOP.png';
import qasop2 from './photos/QASOP2.png';
import qasop3 from './photos/QASOP 3.png';

import ImageContainer from './ImageContainer';

function Projects() {
  const headers = [
    { id: 'sdr', text: 'SDR' },
    { id: 'tds', text: 'TDSV2' },
    { id: 'qasop', text: 'QASOP' },
  ];

  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isSDRSectionCollapsed, setSDRSectionCollapsed] = useState(false);
  const [isTDSSectionCollapsed, setTDSSectionCollapsed] = useState(false);
  const [isQASOPSectionCollapsed, setQASOPSectionCollapsed] = useState(false);

  const [activeSection, setActiveSection] = useState('sdr');

  const sdrRef = useRef(null);
  const tdsRef = useRef(null);
  const qasopRef = useRef(null);


  const toggleMenu = () => {
    setIsCollapsed(!isCollapsed);
  };

  const toggleSDRSection = () => {
    setSDRSectionCollapsed(!isSDRSectionCollapsed);
  };

  const toggleTDSSection = () => {
    setTDSSectionCollapsed(!isTDSSectionCollapsed);
  };

  const toggleQASOPSection = () => {
    setQASOPSectionCollapsed(!isQASOPSectionCollapsed);
  };

  const scrollToSection = (sectionRef, id) => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id); 
    }
  };

  return (
    <div className="projects-page">
      <SideMenu 
        headers={headers} 
        isCollapsed={isCollapsed} 
        toggleMenu={toggleMenu} 
        scrollToSection={scrollToSection}
        sdrRef={sdrRef}
        tdsRef={tdsRef}
        qasopRef={qasopRef}
        activeSection={activeSection} 
      />
      <div className={`tab-content ${isCollapsed ? 'collapsed' : ''}`}>
        <div className="section" ref={sdrRef}>
          <h2 className="boxed-header section-header" onClick={toggleSDRSection}>
            SDR: Scuba Dive Log Record (Keeping) {isSDRSectionCollapsed ? '▲' : '▼'}
          </h2>
          {!isSDRSectionCollapsed && (
            <>
              <h3>About</h3>
              <p>The application was developed for the Reservoir Management team's SCUBA diving team to
                log and track dives for OSHA purposes. </p>
              <h3>Tech</h3>
              <p>Developed with .NET 6 C#, under the MVVM (Model-View-ViewModel) architecture, and in Visual Studio as a WPF project. Connected to a Oracle 19c database. </p>
              <ImageContainer src={sdr1} alt="SDR application"></ImageContainer>
              <ImageContainer src={sdr2} alt="SDR application"></ImageContainer>
              <ImageContainer src={sdr3} alt="SDR application"></ImageContainer>
              <ImageContainer src={sdr4} alt="SDR application"></ImageContainer>
            </>
          )}
        </div>

        <div className="section" ref={tdsRef}>
          <h2 className="boxed-header section-header" onClick={toggleTDSSection}>
          TDSV2: Total Dissolved Solids Version 2  {isTDSSectionCollapsed ? '▲' : '▼'}
          </h2>
          {!isTDSSectionCollapsed && (
            <>
              <h3>About</h3>
              <p>The application was a remake to migrate to a newer technology and modernize the original.
                The purpose is to track analytes and their data value, save to a separate database, for the most recent data to be viewed and compared.</p>
              <h3>Tech</h3>
              <p>Developed with .NET 6 C#, under the MVC (Model-View-Controller) architecture, and in Visual Studio as a WPF project. Connected to a Oracle 19c database. </p>
              <ImageContainer src={tds1} alt="TDSV2 application" subtitle="Hello"></ImageContainer>
              <ImageContainer src={tds6} alt="TDSV2 application"></ImageContainer>
            </>
          )}
        </div>
        <div className="section" ref={qasopRef}>
          <h2 className="boxed-header section-header" onClick={toggleQASOPSection}>
          QASOP: Quality Assurance Standard Operating Procedures (Manager) {isQASOPSectionCollapsed ? '▲' : '▼'}
          </h2>
          {!isQASOPSectionCollapsed && (
            <>
              <h3>About</h3>
              <p>This application was created to help the QA team query data from Microsoft SharePoint and make comparisons.
                The purpose is to track and compare editable and final versions of Standard Operating Procedures, and ensure consistency.</p>
              <h3>Tech</h3>
              <p>Developed with .NET 6 C#, under the MVC (Model-View-Controller) architecture, and in Visual Studio as a WPF project. Connected to a Oracle 19c database. </p>
              <ImageContainer src={qasop1} alt="QASOP application"></ImageContainer>
              <ImageContainer src={qasop2} alt="QASOP application"></ImageContainer>
              <ImageContainer src={qasop3} alt="QASOP application"></ImageContainer>
              
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Projects;
