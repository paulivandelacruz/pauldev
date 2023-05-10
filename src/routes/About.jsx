import React from 'react'
import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'
import img from '../images/about-me.svg'

const About = () => {
  
  const [ref, inView] = useInView ({
    threshold: 0.5,
  });

  return (
    <section className='section' id='about' ref={ref}>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
        <motion.div 
        variants={fadeIn('right', 0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: true, amount: 0.3}}
        className='flex-1 h-[640px]'
        >
          <img src={img} alt=''></img>
        </motion.div>
        
        <motion.div 
        variants={fadeIn('left', 0.5)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: true, amount: 0.3}}
        className='text-text flex-1'
        >
          <h2 className='h2 lg:text-[70px] tracking-wider'>About me</h2>
          <h3 className='h3 text-blue-700 mb-4 lg:text-[40px] tracking-wide'>Hello, I am Paul Ivan Dela Cruz</h3>
          <p className='mb-6 font-text2'>A 21-years-old Computer Engineering Student, and aspiring Software Engineer. I am able to work well both in a team environment as well as using own initiative and I want to secure the position of the computer engineer where I can utilize my technical and management skills for achieving the target and delivering the best performance in the esteemed organization.</p>
      <div className='flex gap-x-6 lg:gap-x-10 mb-4'>
        <div>
          <div className='text-[40px] text-gradient mb-2'>
            {inView ? <CountUp start={0} end={5} duration={3} /> : null}
          </div>
          <div className='text-sm tracking-[2px]'>
            Years of <br/>Experience
          </div>
        </div>
        <div>
          <div className='text-[40px] text-gradient mb-2'>
            {inView ? <CountUp start={0} end={3} duration={3} /> : null}
            +
          </div>
          <div className='text-sm tracking-[2px]'>
            Projects<br/>Completed
          </div>
        </div>
        <div>
          <div className='text-[40px] text-gradient mb-2'>
            {inView ? <CountUp start={0} end={5} duration={3} /> : null}
            +
          </div>
          <div className='text-sm tracking-[2px]'>
            Awards<br/>Received
          </div>
        </div>
      </div>
        <div className='flex gap-x-7 items-center'>
        <button className='btn btn-lg font-text tracking-[5px] text-xl' id='button'>
          <a href='https://docs.google.com/document/d/1tgH01uc_x9Cqbq2IcXDUMPp-KjoGZsjQGymxS7DDy5E/edit?usp=sharing'>
          RESUME
          </a>
        </button>
        </div>
        </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About