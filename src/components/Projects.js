
import React from 'react';
import './Projects.css';

import project1 from '../assets/project1.jpg';
import project2 from '../assets/project2.jpg';
import project3 from '../assets/project-placeholder.png';
import project4 from '../assets/project4.png';
import project6 from '../assets/project6.jpeg';
import project7 from '../assets/project7.png';

const projectList = [
  {
    title: 'Mission Control Dashboard',
    image: project3, // Replace with your actual MCD screenshot
    description:
      'Built a responsive React dashboard that displays live International Space Station (ISS) location data through REST API integration. Implemented reusable components, loading and error states, automatic data refresh, orbital visualization, and telemetry charts.',
    tech: [
      'React',
      'JavaScript',
      'REST API',
      'useState',
      'useEffect',
      'useRef',
      'Recharts',
      'Responsive Design',
    ],
    liveLink:
      'https://rudras52.github.io/mission-control-dashboard/',
    codeLink: '',
  },
  {
    title: 'Job Tracker App',
    image: project7,
    description:
      'Developed a React application to organize job applications across Applied, Interview, Selected, and Rejected stages. Built reusable UI components and application-management features, with browser-based data persistence and a dashboard-style interface.',
    tech: [
      'React',
      'JavaScript',
      'React Hooks',
      'React Router',
      'Firebase',
      'LocalStorage',
      'CRUD',
      'CSS3',
    ],
    liveLink: 'https://rudras52.github.io/job-tracker-app/',
    codeLink: 'https://github.com/RudraS52/job-tracker-app',
  },
  {
    title: 'Product Comparison App',
    image: project2,
    description:
      'Created a responsive React application for comparing products side by side. Focused on reusable UI elements, interactive state management, clean layouts, and a consistent experience across desktop and mobile devices.',
    tech: [
      'React',
      'JavaScript',
      'useState',
      'CSS',
      'Flexbox',
      'GitHub Pages',
      'Responsive Design',
    ],
    liveLink: 'https://rudras52.github.io/product-comparison-app/',
    codeLink: 'https://github.com/RudraS52/project-comparison-app',
  },
  {
    title: 'Preserva Wellness E-Commerce',
    image: project1,
    description:
      'Designed and developed a responsive wellness e-commerce website with custom UI components, payment integration, and product and order management. Also handled SEO, website administration tools, and promotional graphics.',
    tech: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'jQuery',
      'ASP.NET MVC',
      'SQL Server',
      'SEO',
      'Responsive Design',
    ],
    liveLink: 'https://preservawellness.com',
    codeLink: '',
  },
  {
    title: 'PIMCO Asset Management Web Portal',
    image: project3,
    description:
      'Worked on a secure asset-management web portal, converting wireframes into responsive interfaces and contributing to UI enhancements and application development within a .NET Core MVC architecture.',
    tech: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'jQuery',
      'Bootstrap',
      'Razor',
      '.NET Core 7',
      'AWS',
    ],
    liveLink: '',
    codeLink: '',
    note: 'Client project. Source code and access are confidential.',
  },
  {
    title: 'DPH Software Services',
    image: project4,
    description:
      'Independently developed a business website, handling UI design, responsive layouts, backend integration, SEO, and graphic design. Focused on cross-browser compatibility and usability across devices.',
    tech: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'jQuery',
      'PHP',
      'MySQL',
      'SEO',
      'Responsive Design',
    ],
    liveLink: 'http://dph-india.com/',
    codeLink: '',
    note: 'Originally developed independently.',
  },
  {
    title: 'Maestro Marpai Health TPA',
    image: project6,
    description:
      'Maintained and modernized a legacy healthcare application by resolving browser compatibility issues, updating deprecated VBScript functionality, and fixing UI layout problems across browsers.',
    tech: [
      'Classic ASP',
      'SQL Server',
      'VBScript',
      'JavaScript',
      'UI Fixes',
      'Cross-Browser Compatibility',
    ],
    liveLink: '',
    codeLink: '',
    note: 'Confidential client project. Source code is not public.',
  },
  {
    title: 'Citibank – UI Enhancement',
    image: project3,
    description:
      'Enhanced a client web application by implementing JavaScript-driven forms, login and logout interfaces, and DataTables features for filtering and sorting, with a focus on usability and browser compatibility.',
    tech: [
      'HTML5',
      'JavaScript',
      'DataTables',
      'Responsive Design',
      'Cross-Browser Compatibility',
    ],
    liveLink: '',
    codeLink: '',
    note: 'Confidential client project. Source code is not public.',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-heading">💼 My Projects</h2>

      <div className="projects-grid">
        {projectList.map((proj) => (
          <article className="project-card" key={proj.title}>
            <img
              className="project-image"
              src={proj.image}
              alt={`${proj.title} project preview`}
              loading="lazy"
            />

            <div className="project-content">
              <h3>{proj.title}</h3>

              <p className="project-description">
                {proj.description}
              </p>

              <div className="tech-stack">
                <strong>Tech Stack</strong>
                <div className="tech-badges">
                  {proj.tech.map((techItem) => (
                    <span className="tech-badge" key={techItem}>
                      {techItem}
                    </span>
                  ))}
                </div>
              </div>

              {proj.note && (
                <p className="project-note">{proj.note}</p>
              )}

              <div className="project-links">
                {proj.liveLink && (
                  <a
                    href={proj.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link project-link-primary"
                  >
                    Live Demo ↗
                  </a>
                )}

                {proj.codeLink && (
                  <a
                    href={proj.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link project-link-secondary"
                  >
                    Source Code ↗
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
