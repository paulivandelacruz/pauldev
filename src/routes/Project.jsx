import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'

//images
import img1 from '../images/cleaningly.png'
import img2 from '../images/portfolio-image-6.png'
import img3 from '../images/portfolio-image-5.png'
import img4 from '../images/portfolio-image-4.png'



const Project = () => {
  return (
    <section className='section' id='project'>
      <div className='container mx-auto mt-[21rem]'>
        <div className='text-text flex flex-col lg:flex-row gap-x-10 lg:mt-[5rem]'>
          <div className='flex-1 flex flex-col mb-10 lg:mb-0'>
            
            <motion.div
              variants={fadeIn('down', 0.3)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once: true, amount: 0.3}}
            >
              <h2 className='h2 leading-tight text-[50px] text-accent lg:text-[70px]'>My Latest<br/>Projects
              </h2>
              <p className='max-w-sm mb-12 font-text2'>
                These are my current outputs as I experience working in Web Development projects and designs 
                during my Internship and Freelancing. 
              </p>
            </motion.div>

          <motion.div 
              variants={fadeIn('up', 0.7)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once: true, amount: 0.3}}
              className='group relative overflow-hidden  border-2 border-black rounded-xl mt-4'
            >
                <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                  <img className='group-hover:scale-125 transition-all duration-500' src={img1} alt='' />
                  <div className='absolute -bottom-full left-6 lg:left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                    <span className='text-gradient font-text'>Web Development</span>
                    </div>
                  <div className='absolute -bottom-full left-6 lg:left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                    <span className='text-2xl lg:text-3xl text-white'>Cleaningly Home Services</span>
                  </div>
                  <div className='absolute -bottom-full left-6 lg:left-12 group-hover:bottom-4 transition-all duration-1000 z-50 text-white'>
                    <div className='flex items-start'>
                      <h3 className=' hover:text-blue-300'>
                        <a href='https://booking.cleaningly.com.au/'>View Website</a>
                      </h3>
                    </div>
                </div>
          </motion.div>

          <motion.div 
              variants={fadeIn('up', 0.7)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once: true, amount: 0.3}}
              className='group relative overflow-hidden  border-2 border-black rounded-xl mt-7'
            >
                <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                  <img className='group-hover:scale-125 transition-all duration-500' src={img4} alt='' />
                  <div className='absolute -bottom-full left-6 lg:left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                    <span className='text-gradient font-text'>Web Development</span>
                    </div>
                  <div className='absolute -bottom-full left-6 lg:left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                    <span className='text-2xl lg:text-3xl text-white'>Personal Portfolio</span>
                  </div>
                  <div className='absolute -bottom-full left-6 lg:left-12 group-hover:bottom-4 transition-all duration-1000 z-50 text-white'>
                    <div className='flex justify-between items-center'>
                      <h3 className=' hover:text-blue-300'>
                        <a href='https://paulivandelacruz.github.io/pauldev/'>View Website</a>
                      </h3>
                    </div>
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
                  <div className='absolute -bottom-full left-6 lg:left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                    <span className='text-gradient font-text'>Web Development</span>
                    </div>
                  <div className='absolute -bottom-full left-6 lg:left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                    <span className='text-2xl lg:text-3xl text-white'>The Grown Merchandising Inc.</span>
                  </div>

                  <div className='absolute -bottom-full left-6 lg:left-12 group-hover:bottom-4 transition-all duration-1000 z-50 text-white'>
                    <div className='flex items-center gap-x-1 max-w-max mx-auto'>
                      <h3 className='hover:text-blue-300'>
                        View Website
                      </h3>
                    </div>
                  </div>
                </div>

                

                <div className='group relative overflow-hidden  border-2 border-black rounded-xl'>
                  <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                  <img className='group-hover:scale-125 transition-all duration-500' src={img3} alt='' />
                    <div className='absolute -bottom-full left-6 lg:left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                      <span className='text-gradient font-text'>Web Development</span>
                      </div>
                    <div className='absolute -bottom-full left-6 lg:left-12 group-hover:bottom-7 transition-all duration-700 z-50'>
                      <span className='text-2xl lg:text-3xl text-white'>PCU-Interactive Society of<br/>Computer Engineering Students</span>
                    </div>

                    <div className='absolute -bottom-full left-6 lg:left-12 group-hover:bottom-1 transition-all duration-1000 z-50 text-white'>
                      <div className='flex items-center gap-x-1 max-w-max mx-auto'>
                        <h3 className='hover:text-blue-300'>
                          <a href='https://pcu-pisces.netlify.app/'>View Website</a>
                        </h3>
                      </div>
                  </div>
                </div>

          </motion.div>
        </div>
      </div>
    </section>
    
  )
}

export default Project