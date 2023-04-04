import React from 'react'
import Image from '../images/MyPicture.svg'
import {AiOutlineCodepen, AiOutlineLinkedin, AiOutlineGithub, AiOutlineFacebook, AiOutlineInstagram} from 'react-icons/ai'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'

const Home = () => {
  
  return (
    <section className='min-h-[85vh] lg:min-h-[70vh] flex items-center' id='home'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-10'>
          <div className='text-text flex-1 text-center lg:text-left'>
            <motion.h1
              variants={fadeIn('up', 0.3)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once: true, amount: 0.7}}
              className='text-[55px] font-bold leading-[0.8] lg:text-[90px]'
            >
              Hello I'm <span>Paul</span>
            </motion.h1>
          
            <motion.div 
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: true, amount: 0.7}}
            className='mb-6 text-[36px] lg:text-[60px] leading-[1] text-text'>
              <span classname='mr-4'>A </span>
              <TypeAnimation sequence={[
                'Web Developer',
                2000,
                'Graphic Designer',
                2000,
                'Freelancer',
                2000,
              ]}
                speed={50}
                className='text-accent'
                wrapper='span'
                repeat={Infinity}
              />
            </motion.div>
          <motion.p 
          variants={fadeIn('up', 0.5)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: true, amount: 0.7}}
          className='text-text mb-4 max-w-lg mx-auto lg:mx-0'>Reach me out if you need website for your business.
          </motion.p>

            <motion.div 
            variants={fadeIn('up', 0.6)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: true, amount: 0.7}}
            className='text-text flex text-[20px] gap-x-4 max-w-max mx-auto lg:mx-0' id='social-links'>
              <a href='https://www.facebook.com/plvndlcrz'>
                <AiOutlineFacebook/>
              </a>
              <a href='https://www.instagram.com/_paulivan.dlcrz/'>
                <AiOutlineInstagram/>
              </a>
              <a href='https://www.linkedin.com/in/paul-ivan-dela-cruz-806788241/'>
                <AiOutlineLinkedin/>
              </a>
              <a href='https://github.com/paulivandelacruz'>
                <AiOutlineGithub/>
              </a>
              <a href='https://codepen.io/paulivandev'>
                <AiOutlineCodepen/>
              </a>
            </motion.div>
            </div>

          <motion.div 
          variants={fadeIn('down', 0.5)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: true, amount: 0.7}}
          className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[700px] mx-auto'>
            <img src={Image} alt=''/>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Home