import React from 'react'
import './exp.css'

function Exp() {
  return (
    <div className="experience-page">
        <div className='experience-layout'>
        <div className='left-experience' >
            <img src='exp-logo.png' data-aos="fade-up" alt='logo'></img>
            <p className='exp-p' data-aos="fade-up">Building expressive designs and scalable web since the start of my college career.</p>
        </div>
        <div className='right-experience' data-aos="fade-up">
            <div className='exp-card-1'>
                <button>1</button>
                <div className='card-content'>
                    <p className='exp-lite-big-p'>Self‑Initiated Projects</p>
                    <p className='exp-lite-small-p'>Designed fictional apps like Zyra, Prompta etc</p>
                    <p className='exp-fade-p'>Ongoing</p>
                </div>
            </div>
            <div className='exp-card-2'>
                <button>2</button>
                <div className='card-content'>
                    <p className='exp-lite-big-p'>Freelance Collaboration</p>
                    <p className='exp-lite-small-p'>Built a full React landing page with dynamic sections</p>
                    <p className='exp-fade-p'>2025</p>
                </div>
            </div>
            <div className='exp-card-3'>
                <button>3</button>
                <div className='card-content'>
                    <p className='exp-lite-big-p'>Freelance Collaboration</p>
                    <p className='exp-lite-small-p'>Designed over 40 screens for TV launcher app</p>
                    <p className='exp-fade-p'>2025</p>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Exp