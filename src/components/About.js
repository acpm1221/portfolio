import React from 'react';
import './About.css';

const About = ({ id }) => {
  return (
    <section id={id} className="about-section">
      <div className="about-container">
        <h1 className="about-title">About Me</h1>
        <div className="about-content">
          <p>
            Hi, I'm <span className="highlight">Anmol Kumar</span>, a passionate and detail-oriented <span className="highlight">MERN Stack Developer</span> with a strong foundation in building full-stack web applications using MongoDB, Express.js, React.js, and Node.js.
          </p>
          <p>
            I specialize in creating responsive, high-performance web applications that offer seamless user experiences. Whether it's designing intuitive front-end interfaces or developing robust back-end APIs, I thrive on solving complex problems and bringing ideas to life through clean, scalable code.
          </p>
          <p>
            I'm always eager to learn new technologies and stay up-to-date with industry trends. Currently, I'm looking for opportunities where I can grow as a developer and contribute to meaningful projects that make a difference.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;