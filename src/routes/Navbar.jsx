import React, {useState} from 'react'
import './Navbar.css'

const Navbar = () => {
  
  const [active,setActive] = useState("nav-lists");
  const [toggleIcon, setToggleIcon] = useState ("nav-toggle");

    const navToggle = () => {
      active === 'nav-lists' ? setActive ('nav-lists nav_activate') : setActive ('nav-lists')

    //Toggle Animation
    
      toggleIcon === 'nav-toggle' ? setToggleIcon ('nav-toggle toggle') : setToggleIcon ('nav-toggle')

    };

  return (
    <>
    <nav className="nav">
        <a href='#' className='navlinks'>POL</a>
        <ul className={active}>
            <li className='navMenu'><a href='#' className='nav-items'>Home</a></li>
            <li className='navMenu'><a href='#' className='nav-items'>Project</a></li>
            <li className='navMenu'><a href='#' className='nav-items'>About</a></li>
            <li className='navMenu'><a href='#' className='nav-items'>Contact</a></li>
        </ul>
        <div onClick={navToggle} className={toggleIcon}>
            <div className="navline1"></div>
            <div className="navline2"></div>
            <div className="navline3"></div>
        </div>
    </nav>
    </>
  )
}

export default Navbar