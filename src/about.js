import React from 'react';
import { FaRocket } from 'react-icons/fa'; // Importing the rocket icon
import './about.css';

function About() {
  return (
    <div className="about-container">
      <div className="about-left" data-aos="fade-up">
        <img src="about-me-logo.png" alt="Hand-drawn arrow" />
        <p className="about-subtitle">A bit about my journey</p>
      </div>
      <div className="about-right" data-aos="fade-up">
        <div className="about-card">
          <div className="about-card-badge">
            <FaRocket className="about-badge-icon" />
          </div>
          <p className="about-card-text">
            I'm a passionate full-stack developer and college student who started
            building digital experiences from day one of my campus life. I love turning
            complex problems into simple, beautiful, and intuitive designs.
          </p>
          <span className="about-card-footer">
            BUILDING SINCE 2025
          </span>
        </div>
      </div>
    </div>
  );
}

export default About;