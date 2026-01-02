import React from 'react'
import './footer.css'

function Footer() {
  return (
    <div className="footer-page" >
        <div className='img-bar'>
            <img src='logo.png' alt='logo'></img>
        </div>
        <div className='social-medias'>
            {/* <p className='footer-p'>Twitter X</p> */}
            <a style={{textDecoration:"none"}} href="https://github.com/jamiabdul112" className='footer-p'>GitHub</a>
            <a style={{textDecoration:"none"}} href="https://www.linkedin.com/in/mohamed-jamiyalam-666579397/" className='footer-p'>LinkedIn</a>
            {/* <p className='footer-p'>Instgram</p> */}
        </div>
    </div>
  )
}

export default Footer