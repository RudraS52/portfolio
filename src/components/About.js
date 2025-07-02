
import React from 'react';
import profileImage from '../assets/rudra_profile.jpg'; // ✅ Correct relative path

import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      
      <div className="about-content">
        <div className="about-text">
          { <h2>Introduction 👋 </h2> }<br></br>
          <p>Hello! <bold>I’m Rudra</bold> — a passionate and self-motivated Web UI Designer and Full Stack Developer with over 7 years of experience transforming ideas into engaging, pixel-perfect, and responsive user interfaces. I began my journey as a backend .NET developer, but my growing fascination with creative problem-solving and visual storytelling led me to shift into the dynamic world of UI/UX design.

          With a strong eye for detail and a flair for design, I blend technical expertise with artistic sensibility to craft interfaces that are not only functional but delightful to use. Whether it’s building intuitive dashboards, revamping legacy UIs, or converting raw wireframes into production-ready code — I bring energy, empathy, and precision to every project.</p>
         <br></br> <p>I work confidently across a modern tech stack that includes HTML5, CSS3, JavaScript,
           jQuery, React, Photoshop, .NET Core, Bootstrap, Git, and REST APIs. My design philosophy centers 
           around creating clean, responsive, accessible, and consistent interfaces — because I believe great 
           design isn’t just seen, it’s experienced. With every project, my goal is to build something
           meaningful, purposeful, and user-focused.</p>

          <a href="#portfolio" className="about-cta">Check out my work →</a>
         
        </div>

        <div className="about-image">

<img src={profileImage} alt="Rudra Pratap Singh" />
</div>
      </div>
    </section>
  );
};

export default About;
