import React, { useState, useEffect } from 'react';
import './blog.css';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';

const blogs = [
  {
    date: "Apr 16, 2026",
    title: "Building a Digital Barter Economy: SkillExchange Architecture",
    desc: "A full-stack MERN application featuring real-time Socket.io communication, complex Mongoose multi-way relationships, and secure JWT authentication for seamless skill swapping.",
    dateColor: "#0ea5e9",
  },
  {
    date: "Jun 12, 2026",
    title: "Exciting Project Update: Flood Detection System 🌊🤖",
    desc: "An asynchronous FastAPI backend paired with Next.js and Groq AI API to instantly calculate telemetry data and analyze real-time flood risks.",
    dateColor: "#3c00e0ff",
  },
  {
    date: "June 15, 2026",
    title: "Project Launch: Full-Stack AI Text Transformer App",
    desc: "A Next.js application leveraging Groq API for precise text manipulation, featuring robust error recovery and optimized asynchronous state handling behaviors.",
    dateColor: "#e000b3ff",
  },
  
];

function Blog() {
  const [start, setStart] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  // Dynamically update the layout limits based on screen widths
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 480) {
        setVisibleCount(1); // Android/Mobile
      } else if (window.innerWidth <= 1024) {
        setVisibleCount(2); // Tablet
      } else {
        setVisibleCount(3); // Desktop
      }
    };

    handleResize(); // Trigger on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Safe boundary click handlers
  const prev = () => setStart(s => Math.max(0, s - 1));
  const next = () => setStart(s => Math.min(blogs.length - visibleCount, s + 1));

  // Reset index baseline if screen size changes overflow the array footprint
  useEffect(() => {
    if (start + visibleCount > blogs.length) {
      setStart(Math.max(0, blogs.length - visibleCount));
    }
  }, [visibleCount, start]);

  const visibleBlogs = blogs.slice(start, start + visibleCount);

  return (
    <div className="blog-page" data-aos="fade-up">
      <img src="blogs-img.png" alt="hand-drawn arrow" className='blog-img' />

      <div className="blog-slider">
        <button
          className="blog-btn-arrow"
          onClick={prev}
          disabled={start === 0}
          aria-label="Previous"
        >
          {/* Shift visual alignment slightly for centering icon within circular paths */}
          <MdArrowBackIos style={{ transform: 'translateX(3px)' }} />
        </button>

        <div className="blog-cards">
          {visibleBlogs.reverse().map((blog, i) => (
            <div className="blog-card" key={i}>
              <p className="blog-date" style={{ color: blog.dateColor }}>{blog.date}</p>
              <h2 className="blog-title">{blog.title}</h2>
              <p className="blog-desc">{blog.desc}</p>
            </div>
          ))}
        </div>

        <button
          className="blog-btn-arrow"
          onClick={next}
          disabled={start + visibleCount >= blogs.length}
          aria-label="Next"
        >
          <MdArrowForwardIos />
        </button>
      </div>
    </div>
  );
}

export default Blog;