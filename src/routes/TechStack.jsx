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
import { motion } from 'framer-motion'
import {fadeIn} from '../variants'

const TechStack = () => {
  return (
    <section className='section' id='techstack'>
        <div className='container mx-auto p-4 flex flex-col justify-center w-full h-full '>
            <div className='mt-[350px] lg:mt-0 lg:gap-y-0 h-screen '>
                <motion.h1
                variants={fadeIn('down', 0.3)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once: false, amount: 0.3}}
                className='text-text text-4xl inline border-b-4 border-black lg:text-[70px]'
                
                >Technology Stack
                </motion.h1>
                
                <motion.div 
                variants={fadeIn('down', 0.3)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once: false, amount: 0.3}}
                className='w-full grid grid-cols-3 sm:grid-cols-5 gap-4 text-center py-8 '
                >
                    <div className='shadow-md shadow-[orange] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={html} alt=''/>
                        <p className='text-text my-4'>HTML</p>
                    </div>

                    <div className='shadow-md shadow-[blue] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={css} alt=''/>
                        <p className='text-text my-4'>CSS</p>
                    </div>

                    <div className='shadow-md shadow-[yellow] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={javascript} alt=''/>
                        <p className='text-text my-4'>Javascript</p>
                    </div>

                    <div className='shadow-md shadow-[#2c5dff] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={typescript} alt=''/>
                        <p className='text-text my-4'>Typescript</p>
                    </div>

                    <div className='shadow-md shadow-[#2eabff] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={reactjs} alt=''/>
                        <p className='text-text my-4'>React</p>
                    </div>

                    <div className='shadow-md shadow-[green] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={nodejs} alt=''/>
                        <p className='text-text my-4'>Node JS</p>
                    </div>

                    <div className='shadow-md shadow-[#29fde1] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={tailwind} alt=''/>
                        <p className='text-text my-4'>Tailwind</p>
                    </div>

                    <div className='shadow-md shadow-[#e51fff] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={bootstrap} alt=''/>
                        <p className='text-text my-4'>Bootstrap</p>
                    </div>

                    <div className='shadow-md shadow-[black] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={nextjs} alt=''/>
                        <p className='text-text my-4'>Next JS</p>
                    </div>

                    <div className='shadow-md shadow-[#3d27fc] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={material} alt=''/>
                        <p className='text-text my-4'>Material UI</p>
                    </div>
                </motion.div>
            </div>
        </div>
    </section>
  )
}

export default TechStack