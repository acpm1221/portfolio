import React, { useState, useEffect } from 'react';
import './Home.css';

const titles = ['Full Stack Developer', 'Web Developer', 'Frontend Developer'];

const Home = ({ id }) => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const fullText = titles[currentTitleIndex];
    let typingSpeed = isDeleting ? 30 : 100;

    const timer = setTimeout(() => {
      setDisplayedText((prev) =>
        isDeleting ? fullText.substring(0, prev.length - 1) : fullText.substring(0, prev.length + 1)
      );

      if (!isDeleting && displayedText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayedText === '') {
        setIsDeleting(false);
        setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentTitleIndex]);

  return (
    <section id={id} className="home-section">
      <div className="home-content">
        <div className="text-content">
          <h1 className="greeting">Hello, Myself</h1>
          <h1 className="name">Anmol Kumar</h1>
          <div className="typing-container">
            <h2 className="typing">I am a {displayedText}</h2>
            <span className="cursor">|</span>
          </div>
          
          <div className="button-group">
            <a 
              href="https://drive.google.com/file/d/1SJB5hEND8B9aphtGla3mIRbLMm_XdyPf/view?usp=sharing" 
              className="btn resume-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Resume
            </a>
            {!isMobile && (
              <a 
                href="#contact" 
                className="btn contact-btn"
              >
                Contact Me
              </a>
            )}
          </div>
        </div>
        {!isMobile && (
          <div className="image-content">
            <img 
              src="https://png.pngtree.com/png-vector/20240204/ourmid/pngtree-avatar-job-student-flat-portrait-of-man-png-image_11606890.png" 
              alt="Profile" 
              className="profile-image"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Home;