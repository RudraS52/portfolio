import React from 'react';
import './Projects.css';
import project1 from '../assets/project1.jpg';
import project2 from '../assets/project2.jpg';
import project4 from '../assets/project4.png';
import project6 from '../assets/project6.jpeg';
import project3 from '../assets/project-placeholder.png'; // Placeholder image for PIMCO project

const projectList = [
 {
  title: "Product Comparison App",
  image: project2,
  description: "Developed a responsive React-based web application to compare multiple products side by side with a clean, interactive UI. Built using React JS (latest version), React Hooks (useState), npm package management, GitHub version control, and deployed via GitHub Pages. The app is fully responsive and optimized for both desktop and mobile devices.",
  tech: ["React", "useState", "npm", "CSS Modules", "Flexbox", "GitHub", "GitHub Pages", "Responsive Design"],
  liveLink: "https://rudras52.github.io/product-comparison-app/",
  codeLink: "https://github.com/RudraS52/project-comparison-app"
},

  {
    title: "Presera Wellness E-Commerce",
    image: project1,
    description: "Designed and developed a fully responsive wellness storefront with custom UI components, seamless payment integration, and a user-friendly admin panel for product and order management. In addition to the core development, I independently handled search engine optimization (SEO), Google Webmaster Tool configuration, and social media optimization (SMO) to improve online visibility. I also created marketing banners for exhibitions and digital campaigns to support the brand's outreach initiatives.",
    tech: ["HTML5", "CSS3", "JavaScript", "jQuery", "ASP .NET MVC", "SQL Server", "SEO", "Graphic Design", "Responsive Design"],
    liveLink: "https://preservawellness.com",
    codeLink: "#"
  },
  {
    title: "PIMCO Asset Management Web Portal",
    image: project3,
    description: "Developed and enhanced a secure asset management system for PIMCO, a U.S.-based asset management firm. Focused on converting wireframes to responsive web pages using modern UI techniques while also contributing to backend development in .NET Core 7.0.",
    tech: ["HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap", "Razor Syntax", "MVC", ".NET Core 7.0", "AWS"],
    liveLink: "",
    codeLink: "",
    note: "Project under strict confidentiality. Access restricted."
  },
  {
  title: "DPH Software Services",
  image: project4, // Replace with your actual image import
  description: "Designed, developed, and deployed a fully functional business website for DPH Software Services with complete end-to-end ownership. Managed every aspect of the project independently, including UI/UX design, responsive web development, backend integration, SEO optimization, graphic design, and social media alignment. Also ensured cross-browser compatibility, performance optimization, and seamless user experience across all devices.",
  tech: ["HTML5", "CSS3", "JavaScript", "jQuery", "PHP", "WAMP", "MySQL", "SEO", "Graphic Design"],
  liveLink: "http://dph-india.com/",
  codeLink: "#",
  note: "Website fully developed and designed independently."
},
{
  title: "Maestro Marpai Health TPA – Legacy System Modernization",
  image: project6, // You can use a placeholder image if no screenshot is available
  description: "Worked on a legacy healthcare project using Classic ASP and SQL Server. Resolved cross-browser compatibility issues, upgraded deprecated VBScript to JavaScript, and fixed UI layout problems. Focused on ensuring system stability across modern browsers including Internet Explorer, Chrome, Firefox, and Edge.",
  tech: ["Classic ASP", "SQL Server", "VBScript", "JavaScript", "Cross-Browser Compatibility", "UI Fixes"],
  liveLink: "#", // You can keep it "#" if the project is private
  codeLink: "#", // Source code is not required for client projects
  note: "Worked on a client-secured legacy healthcare project. Source code is confidential."
},
{
  title: "Citibank Project – UI Enhancement and Integration",
  image: project3, // Use a placeholder image if no screenshot is available
  description: "Enhanced the UI for the Citibank web application by developing dynamic JavaScript-driven forms, integrating login and logout pages, and implementing datatables for advanced filtering and sorting. Focused on improving browser compatibility and UI responsiveness across devices.",
  tech: ["HTML5", "JavaScript", "DataTables", "Responsive Design", "Cross-Browser Compatibility"],
  liveLink: "#", // Project is private
  codeLink: "#",
  note: "Worked on a client-secured system; source code and assets are confidential."
}
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 style={{ fontSize: "50px" }}>💼 My Projects</h2>
      <div className="projects-grid">
        {projectList.map((proj, index) => (
          <div className="project-card" key={index}>
            <img src={proj.image} alt={proj.title} />
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
      <div className="tech-stack">
  <strong>Tech Stack:</strong>{" "}
  {proj.tech.map((techItem, idx) => (
    <span className="tech-badge" key={idx}>
      {techItem}
    </span>
  ))}
</div>


            {proj.note && <p style={{ fontStyle: "italic", color: "gray" }}>{proj.note}</p>}
            <div className="project-links">
              {proj.liveLink && proj.liveLink !== "#" && (
                <a href={proj.liveLink} target="_blank" rel="noreferrer">Live</a>
              )}
              {proj.codeLink && proj.codeLink !== "#" && (
                <a href={proj.codeLink} target="_blank" rel="noreferrer">Code</a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
