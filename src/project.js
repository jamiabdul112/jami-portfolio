import React from 'react'
import './project.css'
import { useState } from 'react';

const allProjects = [
  {
    href: "https://ai-text-transform-two.vercel.app/",
    github: "https://github.com/jamiabdul112/ai-text-transform",
    img: "ai-text.png",
    title: "AI Text Transformer",
    desc: "Transform text using advanced NLP models with instant results.",
    tag: "AI Integrated",
    gridClass: "grid-4",
    bottomClass: "grid-bottom-4",
    btnClass: "",
  },
  {
    href: "https://flood-detection-ai-frontend.vercel.app/",
    github: "https://github.com/jamiabdul112/flood-detection-ai-frontend",
    githubBackend: "https://github.com/jamiabdul112/flood-detection-ai-backend",
    img: "flood-ai.png",
    title: "Flood Detect AI",
    desc: "AI-powered flood risk prediction with real-time decision support.",
    tag: "AI Decision Support",
    gridClass: "grid-3",
    bottomClass: "grid-bottom-3",
    btnClass: "",
  },
  {
    href: "https://learnloop-ybgi.onrender.com/",
    github: "https://github.com/jamiabdul112/LearnLoop",
    img: "learnLoop.png",
    title: "Learn Loop (MERN)",
    desc: "Full-stack e-learning platform with course management and user auth.",
    tag: "Full-Stack App",
    gridClass: "grid-4",
    bottomClass: "grid-bottom-4",
    btnClass: "color2",
  },
  {
    href: "https://e-commerce-app-frontend-1.onrender.com/",
    github: "https://github.com/jamiabdul112/e-commerce-app-frontend",
    githubBackend: "https://github.com/jamiabdul112/E-Commerce-app-backend",
    img: "e-com.png",
    title: "E-Commerce-Site (MERN)",
    desc: "MERN stack shopping app with cart, auth, and payment integration.",
    tag: "Full-Stack App",
    gridClass: "grid-1",
    bottomClass: "grid-bottom-1",
    btnClass: "color1",
  },
  {
    href: "https://zostel-hotel-booking.onrender.com/",
    github: "https://github.com/jamiabdul112/zostel-hotel-booking-frontend",
    githubBackend:"https://github.com/jamiabdul112/zostel-hotel-booking-backend",
    img: "hotel-booking.png",
    title: "Hotel Booking (MERN)",
    desc: "Hotel booking platform with room listings, filters, and reservations.",
    tag: "Full-Stack App",
    gridClass: "grid-2",
    bottomClass: "grid-bottom-3",
    btnClass: "",
  },
  {
    href: "https://kundhanfood.netlify.app/",

    img: "food.png",
    title: "Food Restaurant Website",
    desc: "Responsive restaurant website with menu, gallery, and contact section.",
    tag: "Frontend",
    gridClass: "grid-4",
    bottomClass: "grid-bottom-4",
    btnClass: "color1",
  },
];

const extraProjects = [
  {
    href: "https://squad-cube.netlify.app/",

    img: "squad-cube.png",
    title: "Squadcube Landing Page",
    desc: "Clean and modern landing page built for a client brand.",
    tag: "Frontend",
    gridClass: "grid-1",
    bottomClass: "grid-bottom-1",
    btnClass: "",
  },
  {
    href: "https://instagram-clone-1-nao0.onrender.com/",
    github: "https://github.com/jamiabdul112/instagram-clone",
    img: "insta-clone.png",
    title: "Instagram Clone (MERN)",
    desc: "Social media clone with posts, likes, follow system and real-time feed.",
    tag: "Full-Stack App",
    gridClass: "grid-2",
    bottomClass: "grid-bottom-2",
    btnClass: "",
  },
  {
    href: "https://finalpcbyjami.netlify.app/",

    img: "port.png",
    title: "Port Website",
    desc: "Personal portfolio website showcasing projects and skills.",
    tag: "Self Project",
    gridClass: "grid-4",
    bottomClass: "grid-bottom-4",
    btnClass: "",
  },
  {

    img: "tv home.png",
    title: "BBNL TV Launcher",
    desc: "Designed 40+ screens for a TV launcher app — freelance UI project.",
    tag: "UI Design",
    gridClass: "grid-4",
    bottomClass: "grid-bottom-4",
    btnClass: "color2",
  },
  {
    href: "https://abdultravels.netlify.app/",

    img: "car-rental.png",
    title: "Car Rental Showcase",
    desc: "Client project — travel and car rental showcase with booking UI.",
    tag: "Client Project",
    gridClass: "grid-3",
    bottomClass: "grid-bottom-3",
    btnClass: "",
  },
];

function ProjectCard({ project }) {
  const { href, github, img, title, desc, tag, gridClass, bottomClass, btnClass, githubBackend } = project;

  const Wrapper = href ? 'a' : 'div';
  const wrapperProps = href
    ? { href, target: "_blank", rel: "noopener noreferrer", style: { textDecoration: "none" } }
    : {};

  return (
    <Wrapper {...wrapperProps} className={gridClass}>
        
      <img className='image-box' src={img} alt={title} />
      <div className={bottomClass} style={{marginTop: "0.6rem"}}>
        <p>{title}</p>
        <button className={btnClass}>{tag}</button>
      </div>
      <p style={{ fontSize: '13px', color: '#555', margin: '4px 0 0', lineHeight: '1.4' }}>
        {desc}
      </p>
      
      <div style={{ display: 'flex', gap: '8px', marginTop: '6px' }}>
        {href && (
            <a href={href} target="_blank" rel="noopener noreferrer"
            onClick={e => e.stopPropagation()}
            className='project-btn-demo'
            style={{
                flex: 1, padding: '7px 0', background: '#111', color: '#fff',
                border: 'none', borderRadius: '6px', fontWeight: '700',
                fontSize: '12px', textAlign: 'center', textDecoration: 'none', cursor: 'pointer'
            }}>
            Live Demo
            </a>
        )}
        {github && (
            <a href={github} target="_blank" rel="noopener noreferrer"
            onClick={e => e.stopPropagation()}
            className="project-btn-github"
            style={{
                flex: 1, padding: '7px 0', background: '#fff', color: '#111',
                border: '2px solid #111', borderRadius: '6px', fontWeight: '700',
                fontSize: '12px', textAlign: 'center', textDecoration: 'none', cursor: 'pointer'
            }}>
            {githubBackend ? 'Frontend Repo' : 'GitHub'}
            </a>
        )}
        {githubBackend && (
            <a href={githubBackend} target="_blank" rel="noopener noreferrer"
            onClick={e => e.stopPropagation()}
            className='project-btn-github'
            style={{
                flex: 1, padding: '7px 0', background: '#fff', color: '#111',
                border: '2px solid #111', borderRadius: '6px', fontWeight: '700',
                fontSize: '12px', textAlign: 'center', textDecoration: 'none', cursor: 'pointer'
            }}>
            Backend Repo
            </a>
        )}
        </div>
    </Wrapper>
  );
}

function Project() {
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      <div id='project'></div>
      <div className='project-page'>
        <div className='project-box'>
          <div className='project-left-box'>
            <img src='project-logo.png' data-aos="fade-up" alt='logo' />
            <p className='project-p' data-aos="fade-up">Crafting bold digital experiences with code</p>
          </div>
          <div className='project-right-box'>
            <div className='projects-grids' data-aos="fade-up">
              {allProjects.map((project, i) => (
                <ProjectCard key={i} project={project} />
              ))}
              {showMore && extraProjects.map((project, i) => (
                <ProjectCard key={i} project={project} />
              ))}
            </div>
            {!showMore && (
              <button
                data-aos="fade-up"
                className="home-btn"
                style={{ marginTop: "3rem" }}
                onClick={() => setShowMore(true)}
              >
                Show More
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;