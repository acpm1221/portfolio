import React from 'react';
import './About.css';

const About = ({ id }) => {
  return (
    <section id={id} className="about-section">
      <div className="about-container">
        <h1 className="about-title">About Me</h1>
        <div className="about-content">
          <p>
            A dedicated and enthusiastic <span className="highlight">Full Stack Developer</span> specializing in the <span className="highlight">MERN stack</span> (MongoDB, Express.js, React.js, and Node.js).
          </p>
          <p>
            I recently completed comprehensive full-stack development training, where I worked on multiple hands-on projects including an expense tracker, food delivery app, and hospital management system. These projects helped me strengthen my understanding of REST APIs, authentication, and responsive UI design.
          </p>
          <p>
            I have experience working with tools like Git, GitHub, Postman, Netlify, and Render. I enjoy the process of building web applications from the ground up and solving real-world problems through code.
          </p>
          <p>
            Apart from technical skills, I’ve actively participated in <span className="highlight">Geekathons</span> as a team member, which gave me exposure to collaboration, version control, and agile-style development.
          </p>
          <p>
            I’m now looking forward to starting my career in web development, where I can contribute, grow, and learn continuously. I’m particularly excited about joining a team where I can work on meaningful projects and get mentorship from experienced developers.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
