import React from 'react'
import SpotlightCard from './components/SpotlightCard'
import "./card.css"

function Card() {
  return (
    <div className='card-page'>
        <div className='card-top-what-i-do-img' data-aos="fade-up">
            <img src='card-logo.png' alt='img'></img>
        </div>
        <div className='card-width'>
        <div className='card-wrapper' data-aos="fade-up">
            <SpotlightCard className="custom-spotlight-card-1" spotlightColor="rgba(255, 153, 0, 1)">
                <div className='card-1-top-right-aligned'>
                    <p className='card-1-p'>Pen/Paper</p>
                </div>
                <div className='card-1-bottom-left-aligned'>
                    <img src='pencil.png' alt='img'></img>
                    <h3 className='card-1-h3'>User Research Design</h3>
                </div>
            </SpotlightCard>
            <SpotlightCard className="custom-spotlight-card-2" spotlightColor="rgba(0, 132, 255, 1)">
                <div className='card-1-top-right-aligned'>
                    <p className='card-1-p'>Figma</p>
                </div>
                <div className='card-1-bottom-left-aligned'>
                    <img src='eye.png' alt='img'></img>
                    <h3 className='card-1-h3'>UI & Product Design</h3>
                </div>
            </SpotlightCard>
            <SpotlightCard className="custom-spotlight-card-3" spotlightColor="rgba(255, 0, 179, 1)">
                <div className='card-1-top-right-aligned'>
                    <p className='card-1-p'>React</p>
                </div>
                <div className='card-1-bottom-left-aligned'>
                    <img src='star.png' alt='img'></img>
                    <h3 className='card-1-h3'>Code Development</h3>
                </div>
            </SpotlightCard>
            
        </div>
        </div>
    </div>
  )
}

export default Card