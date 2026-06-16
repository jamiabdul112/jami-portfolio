import React from 'react';
import './techStack.css';

const techs = [
  { name: 'React',       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Next.js',     icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'TypeScript',  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'Tailwind CSS',icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'Node.js',     icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Express.js',  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
  { name: 'MongoDB',     icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'Python',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'Figma',       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
  { name: 'Git',         icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
];

function TechStack() {
  // Duplicate the list so the loop is seamless
  const items = [...techs, ...techs];

  return (
    <div className='techstack-page'>
        <div className='techstack-head' data-aos="fade-up" >
            <img src="tech-stack.png" alt="hand-drawn arrow" />
        </div>
    <div className="techstack-wrapper" data-aos="fade-up">
        
      <div className="techstack-track" >
        {items.map((tech, i) => (
          <div className="techstack-pill" key={i}>
            <img src={tech.icon} alt={tech.name} className="techstack-icon" />
            <span className="techstack-name">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default TechStack;