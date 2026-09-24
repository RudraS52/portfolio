import React from 'react';
import './Resume.css'; // if you created a separate CSS file

const Resume = () => {
  return (
    <section id="resume" className="resume-section">
      <h2>📄 My Resume</h2>
      <p>You can download or view my resume below:</p>


    <a href="./Rudra_SE_Developer.pdf" download className="download-btn">
  Download Resume
</a>

    </section>
  );
};

export default Resume;  // ✅ This line is mandatory
