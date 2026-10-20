
import React from 'react';
import './Resume.css';

const Resume = () => {
  const resumePath = './Rudra_SE_Developer.pdf';

  return (
    <section id="resume" className="resume-section">
      <h2>My Resume</h2>

      <p className="resume-intro">
        Frontend Developer specializing in React.js, JavaScript,
        responsive UI development, and ASP.NET MVC/.NET.
      </p>

      <p className="resume-description">
        Explore my professional experience, technical skills,
        and projects.
      </p>

      <div className="resume-actions">
        <a
          href={resumePath}
          download
          className="download-btn"
        >
          Download Resume | View Resume
        </a>

        <a
          href={resumePath}
          target="_blank"
          rel="noopener noreferrer"
          className="view-resume-btn"
        >
          View Resume
        </a>
      </div>
    </section>
  );
};

export default Resume;
