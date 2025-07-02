import React from 'react';
import './Portfolio.css';

// Example images (replace with your project images)
import project1 from '../assets/project1.jpg';
import project2 from '../assets/project2.jpg';

const projects = [
  {
    id: 1,
    title: "Product Comparison App",
    description: "A responsive React app that compares product features side-by-side with interactive filtering.",
    image: project1,
    codeLink: "https://github.com/yourusername/product-comparison-app",
    liveLink: "https://your-live-site.com"
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "My personal portfolio built with React and styled with modern UI practices.",
    image: project2,
    codeLink: "https://github.com/yourusername/portfolio",
    liveLink: "https://your-portfolio-site.com"
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio-section">
      <h2>🚀 My Work</h2>
      <div className="portfolio-grid">
        {projects.map((project) => (
          <div className="portfolio-card" key={project.id}>
            <img src={project.image} alt={project.title} className="portfolio-image" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="portfolio-links">
              <a href={project.codeLink} target="_blank" rel="noopener noreferrer">Code</a>
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer">Live Demo</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
