import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';
import Header from './Header';
import Footer from './Footer';
import './App.css';
import './Header.css';
import './Footer.css';
import './DarkMode.css';
import './LightMode.css';

function App() {
 

  return (
    <Router>
      <div className="app-container">
        <Header />
        <div className="wrapper">
          <div className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
