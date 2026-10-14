
import React from 'react';
import profileImage from '../assets/rudra_profile.jpg'; // ✅ Correct relative path

import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      
      <div className="about-content">
        <div className="about-text">
          { <h2>Introduction 👋 </h2> }<br></br>
          <p>I'm a web developer with 8+ years of experience building responsive user interfaces and enterprise web applications. My background includes frontend development, ASP.NET MVC/.NET, and UI enhancements. My recent projects include a React-based Mission Control Dashboard with live ISS API integration and a Job Tracker built with React and Firebase.</p>
<br></br>
          <a href="#portfolio" className="about-cta">Check out my work →</a><br></br>
         
        </div>

        <div className="about-image">

<img  src={profileImage} alt="Rudra Pratap Singh" />
</div>
      </div>
    </section>
  );
};

export default About;
