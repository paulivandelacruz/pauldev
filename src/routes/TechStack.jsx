import React from 'react'


//images
import html from '../images/HTML.png'
import css from '../images/CSS.png'
import javascript from '../images/JAVASCRIPT.png'
import typescript from '../images/typescript.png'
import reactjs from '../images/reactjs.png'
import nodejs from '../images/nodejs.png'
import nextjs from '../images/nextjs.png'
import tailwind from '../images/Tailwind.png'
import bootstrap from '../images/bootstrap.png'
import material from '../images/material.png'

const TechStack = () => {
  return (
    <section className='section' id='techstack'>
        <div className='container mx-auto'>
            <div className=''>
                <h1 className='text-text text-4xl'>Technology Stack</h1>
            

            <div>
                <div>
                    <img className='w-20 mx-auto' src={html} alt=''/>
                    <p className='text-text'>HTML</p>
                </div>
            </div>
        </div>
        </div>
    </section>
  )
}

export default TechStack