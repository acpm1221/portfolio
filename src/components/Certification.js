import React from 'react';
import './Certification.css';

const certifications = [
  {
    title: 'Mastery in Java Programming ',
    issuer: 'Geekster',
    year: '2023-2024',
    link: 'https://drive.google.com/file/d/1MQIrD5IJXPt_aHRTczy70QK3rm1pdj50/view?usp=sharing'
  },
  {
    title: 'Mastery in JavaScript ',
    issuer: 'Geekster',
    year: '2023-2024',
    link: 'https://drive.google.com/file/d/1MQIrD5IJXPt_aHRTczy70QK3rm1pdj50/view?usp=sharing'
  },
  {
    title: 'Full Stack Development',
    issuer: 'Geekster',
    year: '2023-2024',
    link: 'https://drive.google.com/file/d/1PK0UeK0-7pt6yPzQ4r4AjzIMXDHQ29Oq/view?usp=sharing'
  }
];

const Certification = ({ id }) => {
  return (
    <section id={id} className="certification-section">
      <h1>Certifications</h1>
      <div className="certification-list">
        {certifications.map((cert, index) => (
          <div className="certification-item" key={index}>
            <h3>{cert.title}</h3>
            <p><strong>Issued by:</strong> {cert.issuer}</p>
            <p><strong>Year:</strong> {cert.year}</p>
            <a 
              href={cert.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="view-btn"
            >
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certification;
