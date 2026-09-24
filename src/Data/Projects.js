import project1 from '../assets/project1.jpg';
import project2 from '../assets/project2.jpg';
import project4 from '../assets/project4.png';
import project6 from '../assets/project6.jpeg';
import project3 from '../assets/project-placeholder.png';

const projects = [
  {
    title: "Product Comparison App",
    image: project2,
    description: "Developed a responsive React-based web application to compare multiple products side by side with a clean, interactive UI. Built using React JS (latest version), React Hooks (useState), npm package management, GitHub version control, and deployed via GitHub Pages.",
    tech: ["React", "useState", "npm", "CSS Modules", "Flexbox", "GitHub", "GitHub Pages", "Responsive Design"],
    liveLink: "https://rudras52.github.io/product-comparison-app/",
    codeLink: "https://github.com/RudraS52/project-comparison-app"
  },
  {
    title: "Presera Wellness E-Commerce",
    image: project1,
    description: "Designed and developed a fully responsive wellness storefront with custom UI components, seamless payment integration, and a user-friendly admin panel...",
    tech: ["HTML5", "CSS3", "JavaScript", "jQuery", "ASP .NET MVC", "SQL Server", "SEO", "Graphic Design", "Responsive Design"],
    liveLink: "https://preservawellness.com",
    codeLink: "#"
  },
  // ...other projects here
];

export default projects;
