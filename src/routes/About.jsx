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
      <div className='container mx-auto lg:flex'>
        <div className='flex-1 h-[540px] lg:h-[300px]'>
          <img src={img} alt=''></img>
        </div>
        <div className='text-text flex-1'>
          <h2 className='h2 lg:text-[50px]'>About me</h2>
          <h3 className='h3 text-blue-700 mb-4 lg:text-[40px]'>Hello, I am Paul Ivan Dela Cruz</h3>
          <p className='mb-6'>A 21-years-old Computer Engineering Student, and aspiring Software Engineer | Full Stack Developer. I am an enthusiastic, self-motivated, reliable, responsible and hard working person. I am a mature team worker and adaptable to all challenging situations. I am able to work well both in a team environment as well as using own initiative and I want to secure the position of the computer engineer where I can utilize my technical and management skills for achieving the target and delivering the best performance in the esteemed organization. Strong written and verbal communications.</p>
      <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
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
            Awards<br/>Recieved
          </div>
        </div>
        
      </div>
        <button className='btn btn-lg font-tertiary' id='button'>RESUME</button>
        </div>
      </div>
    </section>
  )
}

export default About