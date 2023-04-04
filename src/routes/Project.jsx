import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'

//images
import img1 from '../images/portfolio-image-1.png'
import img2 from '../images/portfolio-image-2.png'
import img3 from '../images/portfolio-image-3.png'

const Project = () => {
  return (
    <section className='section' id='project'>
      <div className='container mx-auto'>
        <div className='text-text flex flex-col lg:flex-row gap-x-10'>
          <div className='flex-1 flex flex-col mb-10 lg:mb-0'>
            
            <motion.div
            variants={fadeIn('down', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: true, amount: 0.3}}
            >
              <h2 className='h2 leading-tight text-accent lg:text-[70px]'>My Latest<br/>Projects
              </h2>
              <p className='max-w-sm mb-16 font-text2'>
                Here is my latests works and sample projects. This is just a basic styling and simple designs and will be change once I've created real projects.
              </p>
            </motion.div>
            
          <motion.div 
          variants={fadeIn('up', 0.7)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: true, amount: 0.3}}
          className='group relative overflow-hidden  border-2 border-black rounded-xl'
          >
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                <img className='group-hover:scale-125 transition-all duration-500' src={img1} alt='' />
                <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                  <span className='text-gradient font-text'>UI Design</span>
                  </div>
                <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                  <span className='text-3xl text-white'>Sample Portfolio</span>
                </div>
            </motion.div>
          </div>
              <motion.div 
              variants={fadeIn('left', 0.5)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once: true, amount: 0.3}}
              className='flex-1 flex flex-col gap-y-10'
              >
              <div className='group relative overflow-hidden  border-2 border-black rounded-xl'>
                <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                  <img className='group-hover:scale-125 transition-all duration-500' src={img2} alt='' />
                  <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                    <span className='text-gradient font-text'>UI/UX Design</span>
                    </div>
                  <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                    <span className='text-3xl text-white'>Sample Valorant Web</span>
                  </div>
                </div>

            <div className='group relative overflow-hidden  border-2 border-black rounded-xl'>
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                <img className='group-hover:scale-125 transition-all duration-500' src={img3} alt='' />
                <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                  <span className='text-gradient font-text'>Graphic Design</span>
                  </div>
                <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                  <span className='text-3xl text-white'>Sample Graphic Designs</span>
                </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
    
  )
}

export default Project