import React from 'react'
import './home.css'

function Home() {
  return (
    <div className='home-total'>
    <div className='home-page'>
        <div className='home-top-img-left-aligned' data-aos="fade-up" >
            <img src='home-logo.png' alt='logo'></img>
        </div>
        <div className='home-bottom'>
            <h1 data-aos="fade-up" className='home-h1'><span className='spl-text-with-pink'>Creative</span> Full‑Stack<br></br>Developer &<br></br>Designer</h1>
            <div className='home-bottom-right'>
                <p data-aos="fade-up" className='home-p'>I design expressive UIs, build full‑stack MERN apps, and craft bold digital experiences.</p>
                <a data-aos="fade-up" className= "home-btn" href='#hire'>Hire Me</a>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Home