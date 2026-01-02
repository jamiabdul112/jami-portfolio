import React from 'react'
import './project.css'
import { useState } from 'react';

function Project() {
    const [showMore, setShowMore] = useState(false);
  return (
    <>
    <div id='project'></div>
    <div className='project-page'>
        <div className='project-box'>
            <div className='project-left-box' >
                <img src='project-logo.png' data-aos="fade-up" alt='logo'></img>
                <p className='project-p' data-aos="fade-up">Crafting bold digital experiences with code</p>
            </div>
            <div className='project-right-box'>
                <div className='projects-grids' data-aos="fade-up">
                    <a href="https://squad-cube.netlify.app/" style={{ textDecoration: "none" }} target="_blank" rel="noopener noreferrer" className="grid-1" >
                        <img className='image-box' src='e-com.png' alt='image-box'></img>
                        <div className='grid-bottom-1'>
                            <p>E-Commerce-Site (MERN)</p>
                            <button className='color1'>Full-Stack App</button>
                        </div>
                    </a>
                    <a href="https://squad-cube.netlify.app/" style={{textDecoration:"none"}} target="_blank" rel="noopener noreferrer" className="grid-1" >
                        <img className='image-box' src='squad-cube.png' alt='image-box'></img>
                        <div className='grid-bottom-1'>
                            <p>Squadcube Landing Page</p>
                            <button>Frontend</button>
                        </div>
                    </a>
                    <a href="https://instagram-clone-1-nao0.onrender.com/" style={{textDecoration:"none"}} target="_blank" rel="noopener noreferrer" className="grid-2" >
                        <img className='image-box' src='insta-clone.png' alt='image-box'></img>
                        <div className='grid-bottom-2'>
                            <p>Instgram Clone (MERN)</p>
                            <button>Full‑Stack App</button>
                        </div>
                    </a>
                    <a href="https://kundhanfood.netlify.app/" style={{textDecoration:"none"}} target="_blank" rel="noopener noreferrer" className="grid-4" >
                            <img className='image-box' src='food.png' alt='image-box' />
                            <div className='grid-bottom-4'>
                            <p>Food Restaurant Website</p>
                            <button className='color1'>Frontend</button>
                            </div>
                        </a>

                    
                   
                    {/* Extra grids only show when showMore = true */}
                    {showMore && (
                        <>
                        <a href="https://finalpcbyjami.netlify.app/" style={{ textDecoration: "none" }} target="_blank" rel="noopener noreferrer" className="grid-4" >
                            <img className='image-box' src='port.png' alt='image-box'></img>
                            <div className='grid-bottom-4'>
                                <p>Port Website</p>
                                <button>Self Project</button>
                            </div>
                        </a>
                        <div className='grid-4'>
                            <img className='image-box' src='tv home.png' alt='image-box' />
                            <div className='grid-bottom-4'>
                            <p>BBNL Launcher</p>
                            <button className='color2'>UI Design</button>
                            </div>
                        </div>
                        <a href="https://abdultravels.netlify.app/" style={{textDecoration:"none"}} target="_blank" rel="noopener noreferrer" className="grid-3" >
                            <img className='image-box' src='car-rental.png' alt='image-box'></img>
                            <div className='grid-bottom-3'>
                                <p>Car Rental Showcase</p>
                                <button>Client Project</button>
                            </div>
                        </a>
                        </>
                    )}
                </div>
                 {/* Show More button */}
                {!showMore && (
                <button data-aos="fade-up" className= "home-btn" style={{marginTop:"3rem"}} onClick={() => setShowMore(true)}>
                    Show More
                </button>
                )}
            </div>
        </div>
    </div>
    </>
  )
}

export default Project