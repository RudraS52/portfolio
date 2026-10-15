
import React from 'react';
import './Projects.css';

import project1 from '../assets/project1.jpg';
import project2 from '../assets/project2.jpg';
import project3 from '../assets/project-placeholder.png';
import project4 from '../assets/project4.png';
import project6 from '../assets/project6.jpeg';
import project7 from '../assets/project7.png';
import missionControlDashboard from '../assets/Mission-Control-Dashboard.png';
import pimco from '../assets/pimco.png';
import citibank from '../assets/citibank.png';

const projectList = [
  {
    title: 'Mission Control Dashboard',
    image: missionControlDashboard,
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
      '3D Visualization',
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
    title: 'PIMCO Asset Management Web Portal',
    image: pimco,
    description:
      'Developed and optimized data-intensive enterprise UI screens featuring configurable tables, multi-level filtering, pagination, and detailed record views with multiple tabs. Worked with Razor partial views, SQL Server data models, and complex ASP.NET Core MVC controllers and business logic. Also contributed to role-based user access provisioning and automated email triggers across time zones.',
    tech: [
  'HTML5',
  'CSS3',
  'JavaScript',
  'jQuery',
  'Bootstrap',
  'C#',
  'ASP.NET Core 7 MVC',
  'Razor Views',
  'Partial Views',
  'SQL Server',
  'LINQ',
  'AWS S3',
],
    liveLink: '',
    codeLink: '',
    note: 'Client project. Source code and production access are confidential.',
  },
  
  {
    title: 'Maestro Marpai Health TPA',
    image: project6,
    description:
      'Resolved legacy browser-compatibility issues by replacing VBScript-based functionality with JavaScript to ensure reliable data rendering and improve application usability. Troubleshot issues where data failed to display correctly and updated client-side functionality to support more consistent browser behavior.',
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
    note: 'Confidential client project. Source code is not publicly available.',
  },
  {
    title: 'Citibank – UI Enhancement',
    image: citibank,
    description:
      'Enhanced a client-facing web application by developing JavaScript-driven forms, designing login and logout interfaces, and implementing jQuery DataTables features for data sorting, filtering, and responsive tabular displays. Focused on usability and cross-browser compatibility.',
    tech: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'jQuery',
      'DataTables',
      'Responsive Design',
      'Cross-Browser Compatibility',
    ],
    liveLink: '',
    codeLink: '',
    note: 'Confidential client project. Source code is not publicly available.',
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
    liveLink: 'http://www.dph.co.in',
    codeLink: '',
    note: 'Originally developed independently.',
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
