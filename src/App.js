import React, { useState } from 'react';
import Navbar from '../src/components/Navbar';
import Home from '../src/components/Home';
import About from '../src/components/About';
import Skills from '../src/components/Skills';
import Projects from '../src/components/Projects';
import Contact from '../src/components/Contact';
import Certification from '../src/components/Certification';
import Education from "../src/components/Education"
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (section) => {
    setActiveSection(section);
    document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="portfolio">
      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />
      <Home id="home" />
      <About id="about" />
      <Education id="education"/>
      <Certification id="certification"/>
      <Skills id="skills" />
      <Projects id="projects" />
      <Contact id="contact" />
      
    </div>
  );
}

export default App;