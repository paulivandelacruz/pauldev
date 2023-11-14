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
import mongodb from '../images/mongodb.png'
import redux from '../images/redux.png'
import mysql from '../images/mysql.png'
import ruby from '../images/ruby.png'
import rails from '../images/rails.png'
import postgresql from '../images/postgresql.png'
import photoshop from '../images/photoshop.png'
import canva from '../images/canva.png'
import illustrator from '../images/illustrator.png'
import github from '../images/github.png'
import git from '../images/git.png'
import davinci from '../images/davinci.png'
import linux from '../images/linux.png'

//motion and variants
import { motion } from 'framer-motion'
import {fadeIn} from '../variants'

const TechStack = () => {
  return (
    <section className='section' id='techstack'>
        <div className='container mx-auto p-4 flex flex-col justify-center w-full h-full '>
            <div className='mt-[45rem] lg:mt-0 lg:gap-y-0 h-screen '>
                <motion.h1
                variants={fadeIn('down', 0.3)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once: true, amount: 0.3}}
                className='text-text text-[50px] lg:text-[70px]'
                
                >Technology Stack
                </motion.h1>
                
                <motion.div 
                variants={fadeIn('down', 0.3)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once: true, amount: 0.3}}
                className='w-full flex flex-col gap-5 items-center justify-center lg:flex lg:flex-row lg:gap-5 mt-10'
                >
                    <div className='w-full h-[18rem] md:h-[19rem] text-text shadow-md shadow-slate-500 rounded-lg'>
                        <h1 className='font-bold font-rubik text-md flex items-center justify-center m-5 lg:text-xl'>
                            Frontend Tools & Frameworks
                        </h1>
                        <div className='grid grid-cols-4 place-items-center gap-y-4'>
                            <img className='w-[3.5rem] hover:scale-125 duration-500' src={html} alt='...' />
                            <img className='w-[3.5rem] hover:scale-125 duration-500' src={css} alt='...' />
                            <img className='w-[3.5rem] hover:scale-125 duration-500' src={material} alt='...' />
                            <img className='w-[3.5rem] hover:scale-125 duration-500' src={tailwind} alt='...' />
                            <img className='w-[3.5rem] hover:scale-125 duration-500' src={bootstrap} alt='...' />
                            <img className='w-[3.5rem] hover:scale-125 duration-500' src={nextjs} alt='...' />
                            <img className='w-[3.5rem] hover:scale-125 duration-500' src={reactjs} alt='...' />
                            <img className='w-[3.5rem] hover:scale-125 duration-500' src={javascript} alt='...' />
                            <img className='w-[3.5rem] hover:scale-125 duration-500' src={typescript} alt='...' />
                        </div>
                    </div>

                    <div className='w-full h-[18rem] md:h-[19rem] text-text shadow-md shadow-slate-500 rounded-lg'>
                        <h1 className='font-bold font-rubik text-md flex items-center justify-center m-5 lg:text-xl'>
                            Backend Tools & Frameworks
                        </h1>
                        <div className='grid grid-cols-4 place-items-center gap-y-4'>
                            <img className='w-[3.5rem] hover:scale-125 duration-500' src={ruby} alt='...' />
                            <img className='w-[3.5rem] hover:scale-125 duration-500' src={rails} alt='...' />
                            <img className='w-[3.5rem] hover:scale-125 duration-500' src={nodejs} alt='...' />
                            <img className='w-[3.5rem] hover:scale-125 duration-500' src={mongodb} alt='...' />
                            <img className='w-[3.5rem] hover:scale-125 duration-500' src={mysql} alt='...' />
                            <img className='w-[3.5rem] hover:scale-125 duration-500' src={postgresql} alt='...' />
                        </div>
                    </div>

                    <div className='w-full h-[18rem] md:h-[19rem] text-text shadow-md shadow-slate-500 rounded-lg'>
                        <h1 className='font-bold font-rubik text-md flex items-center justify-center m-5 lg:text-xl'>
                            Other Tools
                        </h1>
                        <div className='grid grid-cols-4 place-items-center gap-y-4'>
                            <img className='w-[3.5rem] hover:scale-125 duration-500' src={linux} alt='...' />
                            <img className='w-[3.5rem] hover:scale-125 duration-500' src={redux} alt='...' />
                            <img className='w-[3.5rem] hover:scale-125 duration-500' src={github} alt='...' />
                            <img className='w-[3.5rem] hover:scale-125 duration-500' src={git} alt='...' />
                            <img className='w-[3.5rem] hover:scale-125 duration-500' src={photoshop} alt='...' />
                            <img className='w-[3.5rem] hover:scale-125 duration-500' src={illustrator} alt='...' />
                            <img className='w-[3.5rem] hover:scale-125 duration-500' src={canva} alt='...' />
                            <img className='w-[3.5rem] hover:scale-125 duration-500' src={davinci} alt='...' />
                        </div>
                    </div>

                </motion.div>
            </div>
        </div>
    </section>
  )
}

export default TechStack