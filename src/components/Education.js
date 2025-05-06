import React from 'react';
import './Education.css';

const Education = ({ id }) => {
  return (
    <section id={id} className="education-section">
      <h1>Education</h1>
      <div className="education-container">
        <div className="education-item">
          <div className="education-header">
            <h3>Bachelor of Technology in CSE</h3>
            
          </div>
          <p>United college of engineering and management, prayagraj</p>
          <p>(AKTU Lucknow)</p>
          <p className="education-marks">Percentage: 63.65%</p>
        </div>

        <div className="education-item">
          <div className="education-header">
            <h3>Class 12th </h3>
            
          </div>
          <p>R.P. Adarsh inter college </p>
          <p>Uttar Pradesh State Board</p>
          <p>Mankapur</p>
          <p className="education-marks">Percentage: 83.85%</p>
        </div>

        <div className="education-item">
          <div className="education-header">
            <h3>Class 10th </h3>
            
          </div>
          <p>Kendriya Vidyalaya, ITI Mankapur</p>
          <p>CBSE</p>
          <p className="education-marks">CGPA: 5.8</p>
        </div>
      </div>
    </section>
  );
};

export default Education;