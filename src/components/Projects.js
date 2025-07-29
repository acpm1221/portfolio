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
          <a href="https://github.com/acpm1221/money_mate_repo" target="_blank">View on GitHub</a><br></br>
          <a href="https://money-mate-repo.vercel.app/" target="_blank">Hosted Link</a>
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
          <h3>Food Delivery</h3>
          
          <h4>MERN </h4>
          <a href="https://github.com/acpm1221/food-del" target="_blank">View on GitHub</a><br></br>
          <a href="https://app-food-tomato.netlify.app/" target="_blank">Hosted Link</a>
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
          <h3>Tab_Form</h3>
          
          <h4>React</h4>
          <a href="https://github.com/acpm1221/tab-form" target="_blank">View on GitHub</a><br></br>
          <a href="https://drive.google.com/file/d/1ZaZNQ7kC-HXx-pFky5SWm5VDNddGxI7d/view?usp=sharing" target="_blank">Hosted Link</a>
          <br></br>
          <p>
              A simple and responsive multi-tab form built with React. 
              The app allows users to navigate between different sections like Profile,
              Interests, and Settings using tabs. Each tab displays its own form or content,
              and all data is managed centrally using React's useState for a seamless user experience.
              Perfect for organizing user inputs in a clean, modular layout.
          </p>
        </div>

              <div className="project-item">
          <h3>Tab_Form</h3>
          
          <h4>React</h4>
          <a href="https://github.com/acpm1221/tab-form" target="_blank">View on GitHub</a><br></br>
          <a href="https://drive.google.com/file/d/1ZaZNQ7kC-HXx-pFky5SWm5VDNddGxI7d/view?usp=sharing" target="_blank">Hosted Link</a>
          <br></br>
          <p>
              A simple and responsive multi-tab form built with React. 
              The app allows users to navigate between different sections like Profile,
              Interests, and Settings using tabs. Each tab displays its own form or content,
              and all data is managed centrally using React's useState for a seamless user experience.
              Perfect for organizing user inputs in a clean, modular layout.
          </p>
        </div>


              <div className="project-item">
          <h3>Real time chat App</h3>
          
          <h4>MERN </h4>
          <a href="https://github.com/acpm1221/PingIt" target="_blank">View on GitHub</a><br></br>
          <a href="https://drive.google.com/file/d/1K7VO_aCmmt6i3I3PckaXcrHHXgjkJ_8O/view?usp=sharing" target="_blank">Hosted Link</a>
          <br></br>
          <p>
            Real-Time Chat App is a full-stack web application built using MongoDB,
            Express.js, React, and Node.js, featuring real-time messaging with 
            Socket.io. Users can sign up, log in, and chat instantly with others
            in a sleek, responsive interface. Messages are stored securely in MongoDB,
            and the app provides a smooth user experience with real-time updates, 
            online status, and typing indicators.
          </p>
        </div>

              
        <div className="project-item">
          <h3>Personal portfolio</h3>
          <h4>React</h4>
          <a href="https://github.com/acpm1221/portfolio" target="_blank">View on GitHub</a><br></br>
          
          <br></br>
          <p>
            A modern, responsive portfolio website built with React to showcase
            projects, skills, education, and certifications. Designed with
            smooth navigation and clean UI to reflect personal branding and
            highlight development experience.
          </p>
        </div>
        
        <div className="project-item">
          <h3>Youtube homepage clone</h3>
          <h4>HTML CSS JavaScript</h4>
          <a href="https://github.com/acpm1221/youtube-clone" target="_blank">View on GitHub</a><br></br>
          <a href="https://stately-halva-d1f837.netlify.app/" target="_blank">Hosted Link</a>
          <br></br>
          <p>
            A static clone of the YouTube homepage built using HTML and CSS,
            replicating the layout, styling, and responsive design of the
            original interface.
          </p>
        </div>
        <div className="project-item">
          <h3>Pokemon search app</h3>
          <h4>HTML CSS JavaScript</h4>
          <a href="https://github.com/acpm1221/pokemon" target="_blank">View on GitHub</a><br></br>
          <a href="https://acpm1221.github.io/pokemon/" target="_blank">Hosted Link</a>
          <br></br>
          <p>
            A simple and fast Pokemon search tool built with Vanilla JavaScript
            that lets users filter pokemon in real-time using keyword
            input.
          </p>
        </div>
        <div className="project-item">
          <h3>Weather App</h3>
          <h4>HTML CSS JavaScript</h4>
          <a href="https://github.com/acpm1221/weather" target="_blank">View on GitHub</a><br></br>
          <a href="https://gregarious-taffy-b06274.netlify.app/" target="_blank">Hosted Link</a>
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
