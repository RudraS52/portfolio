import React from 'react';
import './Projects.css';
import project1 from '../assets/project1.jpg';
import project2 from '../assets/project2.jpg';

const projectList = [
  {
    title: "Product Comparison App",
    image: project2,
    description: "A responsive React-based app to compare multiple products side by side. Built as a UI/UX test assignment.",
    tech: "React, CSS Modules, Flexbox",
    liveLink: "https://rudras52.github.io/product-comparison-app/",
    codeLink: "https://github.com/rudrapratap/project-comparison-app"
  },
  {
    title: "Presera Wellness E-Commerce",
    image: project1,
    description: "Designed and developed a wellness storefront with custom UI components, payment flow and admin panel.",
    tech: "HTML5, CSS, JavaScript, jQuery, ASP .NET MVC, SQL Server, RWD",
    liveLink: "https://preservawellness.com",
    codeLink: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 style={{font: "50px"}}>💼 My Projects</h2>
      <div className="projects-grid">
        {projectList.map((proj, index) => (
          <div className="project-card" key={index}>
            <img src={proj.image} alt={proj.title} />
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
            <span className="tech-stack">{proj.tech}</span>
            <div className="project-links">
              <a href={proj.liveLink} target="_blank" rel="noreferrer">Live</a>
              <a href={proj.codeLink} target="_blank" rel="noreferrer">Code</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
