import React from 'react'
import "./header.css"


function Header() {
  

  return (
    <div className='header-fixed'>
    <div className='header-page'>
        <img src='logo.png' alt='logo'></img>
        
        <nav className="nav-links desktop">
          <div className='nav-menuss'>
          <a href="#project">Projects</a>
          <a href="#hire" className='spl-text-with-pink-s'>Hire Me</a>
          
          
          </div>
          
        </nav>
      
    
    </div>
    </div>
  )
}

export default Header