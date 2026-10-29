import React, { useEffect, useState } from 'react';
import "@fontsource/poppins";
import './App.css';
import Resume from './components/Resume';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

// AI Assistant
import AiAssistant from "./components/AIAssistants/AIAssistant";

import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function App() {
  const [visitorCount, setVisitorCount] = useState(null);

  useEffect(() => {
    fetch('https://portfolio-jade-nine-36.vercel.app/api/visitor-count')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch visitor count');
        }
        return response.json();
      })
      .then((data) => setVisitorCount(data.count))
      .catch((error) => {
        console.error('Visitor counter error:', error);
      });
  }, []);

  return (
    <div className="App">
      <Navbar />

      <header className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 style={{ letterSpacing: "0.6px" }}>Hi, I'm Rudra Singh</h1>
            <p style={{ color: "black", letterSpacing: "0.5px" }}>
              Frontend Developer specializing in React.js, JavaScript, responsive UI development, and ASP.NET MVC/.NET.
            </p>
            <a href="#projects" className="cta-button">Explore my work →</a>
          </div>
        </div>
      </header>

      <main className="main-content">
        <About />
        <Projects />
        <Certifications />
        <Blog />
        <Resume />
        <Contact />
      </main>

      {/* AI Assistant */}
      <AiAssistant />

      <footer className="footer">
        <div className="footer-content">
          <p>© {new Date().getFullYear()} Rudra Singh | All rights reserved.</p>

          <p className="visitor-count" aria-live="polite">
            {visitorCount !== null
              ? `Total Visitors: ${visitorCount}`
              : 'Loading visitor count...'}
          </p>

          <div className="footer-socials">
            <a href="https://github.com/RudraS52" target="_blank" rel="noopener noreferrer">
              <FaGithub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/web-developer-rp-singh/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={20} />
            </a>
            <a href="mailto:rpsingh.developer@gmail.com">
              <FaEnvelope size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;