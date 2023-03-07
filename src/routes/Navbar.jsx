import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <>
    <nav className="nav">
        <a href='#' className='navlinks'>PIDC</a>
        <ul>
            <li className='navMenu'><a href='#' className='nav-items'>Home</a></li>
            <li className='navMenu'><a href='#' className='nav-items'>Project</a></li>
            <li className='navMenu'><a href='#' className='nav-items'>About</a></li>
            <li className='navMenu'><a href='#' className='nav-items'>Contact</a></li>
        </ul>
        <div className="nav-toggle">
            <div className="navline1"></div>
            <div className="navline2"></div>
            <div className="navline3"></div>
        </div>
    </nav>
    </>
  )
}

export default Navbar