import React from 'react'
import './Home.css'
import Img from '../images/web-development.webp'
import {FaFacebook,FaInstagram,FaGithub,FaLinkedin} from 'react-icons/fa'

const Home = () => {
  
  return (
    <div className = 'my-container'>
      <div className='left-container'>
        <div className='left-container-wrap'>
            <h2 className='my-first-p'>Hello I'm</h2>
            <h1 className='my-name'><span>Paul Ivan</span> Dela Cruz</h1>
            <p className='intro-p'>Reach me out if you need website for your business.</p>
          <div className='socials'>
            <a href='#' className='social-links'>
              <FaFacebook/>
            </a>
            <a href='#' className='social-links'>
              <FaInstagram/>
            </a>
            <a href='#' className='social-links'>
              <FaGithub/>
            </a>
            <a href='#' className='social-links'>
              <FaLinkedin/>
            </a>
          </div>
        </div>
      </div>
      <div className='right-container'>
        <div className='my-bg1'></div>
        <img src={Img} alt='' className='image-1'></img>
      </div>
    </div>
  )
}

export default Home