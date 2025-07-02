import React from 'react';
import './Certifications.css';

// Example images should be replace with actual paths)
import cert1 from '../assets/certificate1.png';
import cert2 from '../assets/certificate2.png';
import cert3 from '../assets/certificate3.png';

const certifications = [
  {
    id: 1,
    title: 'UI/UX Design Certificate',
    issuer: 'Coursera',
    date: 'June 2024',
    image: cert1
  },
  {
    id: 2,
    title: 'Frontend Developer Award',
    issuer: 'freeCodeCamp',
    date: 'April 2024',
    image: cert2
  },
  {
    id: 3,
    title: 'Developer Hackathon Participation',
    issuer: 'C# Corner',
    date: 'March 2024',
    image: cert3
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="certifications-section">
      <h2>🎓 Certifications & Awards</h2>
      <div className="cert-grid">
        {certifications.map(cert => (
          <div className="cert-card" key={cert.id}>
            <img src={cert.image} alt={cert.title} className="cert-image" />
            <h3>{cert.title}</h3>
            <p>{cert.issuer} – {cert.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
