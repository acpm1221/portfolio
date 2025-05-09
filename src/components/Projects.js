import React from "react";
import "./Projects.css";

const Projects = ({ id }) => {
  return (
    <section id={id} className="projects-section">
      <h1>Projects</h1>

      <div className="project-list">
        <div className="project-item">
          <h3>Money-Mate(Expense Tracker)</h3>
          <h4>MERN </h4>
          <br></br>
          <p>
            A full-stack web application that allows users to track their income
            and expenses in real-time. Built with React for the frontend,
            Node.js and Express for the backend, and MongoDB for data storage.
            Users can log in, add or delete transactions, view financial
            summaries, and manage their personal finances securely and
            efficiently.
          </p>
        </div>
        <div className="project-item">
          <h3>Personal portfolio</h3>
          <h4>React</h4>
          <br></br>
          <p>
            A modern, responsive portfolio website built with React to showcase
            projects, skills, education, and certifications. Designed with
            smooth navigation and clean UI to reflect personal branding and
            highlight development experience.
          </p>
        </div>
        <div className="project-item">
          <h3>GeeksFood</h3>
          <h4>MERN</h4>
          <br></br>
          <p>
            A full-stack food ordering platform built using the MERN stack
            (MongoDB, Express.js, React, Node.js). Users can browse restaurants,
            view menus, place orders, and track delivery status in real-time.
            Includes user authentication, order management, and a responsive,
            intuitive interface.
          </p>
        </div>
        <div className="project-item">
          <h3>Youtube homepage clone</h3>
          <h4>HTML CSS JavaScript</h4>
          <br></br>
          <p>
            A static clone of the YouTube homepage built using HTML and CSS,
            replicating the layout, styling, and responsive design of the
            original interface.
          </p>
        </div>
        <div className="project-item">
          <h3>Emoji search app</h3>
          <h4>HTML CSS JavaScript</h4>
          <br></br>
          <p>
            A simple and fast emoji search tool built with Vanilla JavaScript
            that lets users filter and copy emojis in real-time using keyword
            input.
          </p>
        </div>
        <div className="project-item">
          <h3>Weather App</h3>
          <h4>HTML CSS JavaScript</h4>
          <br></br>
          <p>
            A dynamic weather application built with Vanilla JavaScript that
            fetches real-time weather data using a public API. Users can search
            any city to view current temperature, conditions, and weather icons.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
