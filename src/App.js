import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function App() {
  return (
    <div className="App">
      <Navbar />

      <header className="hero">
        <div className="hero-content">
          {/* <img src="/profile.jpg" alt="Rudra Pratap Singh" className="hero-photo" /> */}
          <div className="hero-text">
            <h1>Hi, I’m Rudra Singh</h1>
            <p style={{color: "black"}}
            >Senior Web UI Designer & Front‑end Developer specializing in clean, accessible, and impactful digital experiences.</p>
            <a href="#projects" className="cta-button">Explore My Work →</a>
          </div>
        </div>
      </header>

      <main className="main-content">
        <About />
        <Projects />  {/* You can add thumbnails here */}    
        <Certifications /> {/* You can add thumbnails here */}
        <Portfolio /> {/* You can add thumbnails here */}
         
        <Blog /> {/* You can add thumbnails here */}
        <Contact />
      </main>

      <footer className="footer">
  <div className="footer-content">
    <p>©{new Date().getFullYear()} Rudra Singh | All rights reserved.</p>
    <div className="footer-socials">
      <a href="https://github.com/RudraS52" target="_blank" rel="noopener noreferrer"><FaGithub size={20} /></a>
<a href="https://www.linkedin.com/in/web-developer-rp-singh/" target="_blank" rel="noopener noreferrer"><FaLinkedin size={20} /></a>
<a href="mailto:rpsingh.developer@gmail.com"><FaEnvelope size={20} /></a>
</div>
  </div>
</footer>

    </div>
  );
}

export default App;
