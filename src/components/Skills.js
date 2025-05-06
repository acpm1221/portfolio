import React from 'react';
import './Skills.css';

const Skills = ({ id }) => {
  return (
    <section id={id} className="skills-section">
      
      <h2>My Skills</h2>
      
      <div className="skills-grid">
        <div className="skill-category">
          <h3>Libraries</h3>
          <img src='https://www.pngall.com/wp-content/uploads/15/React-Logo-PNG-Photos.png' alt='react'></img>
        </div>
        <div className="skill-category">
          <h3>Programming Languages</h3>
          <img src='https://cdn.iconscout.com/icon/free/png-256/free-java-logo-icon-download-in-svg-png-gif-file-formats--programming-language-coding-logos-icons-1720088.png?f=webp' alt='java'></img>
          <img src='https://logos-world.net/wp-content/uploads/2023/02/JavaScript-Symbol.png' alt='js'></img>
        </div>
        <div className="skill-category">
          <h3>Database</h3>
          <img src='https://cdn.iconscout.com/icon/free/png-256/free-mongodb-logo-icon-download-in-svg-png-gif-file-formats--wordmark-programming-langugae-freebies-pack-logos-icons-1175140.png?f=webp' alt='mongodb'></img>
        </div>
        <div className="skill-category">
          <h3>Tools</h3>
          <img src='https://www.prooktatas.hu/assets/img/vs_code_icon.jpeg' alt='vscode'></img>
          <img src='https://logowik.com/content/uploads/images/postman-api-platform6643.logowik.com.webp' alt='postman'></img>
          <img src='https://logos-world.net/wp-content/uploads/2020/11/GitHub-Logo.png' alt='github'></img>
          <img src='https://images.ctfassets.net/frd5oskxgr96/16e2P31DJ0brzyiwNvC564/1fa51988d47f3572d9efd14f15dc2246/Vercel_logo_PNG_clr.svg' alt='vercel'></img>
        </div>
        <div className="skill-category">
          <h3>MarkUp-Languages</h3>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYk594AhSKw5Eb3iHkPHs_XmpCqaRVgu0mvg&s' alt='html'></img>
          <img src='https://images.seeklogo.com/logo-png/18/1/css3-logo-png_seeklogo-186678.png' alt='css'></img>
        </div>
        <div className="skill-category">
          <h3>Extras</h3>
          <img src='https://uoa-academy.com/wp-content/uploads/2024/01/microsoft-excel.png' alt='excel'></img>
          
        </div>
      </div>
    </section>
  );
};

export default Skills;