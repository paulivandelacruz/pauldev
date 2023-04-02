import React from 'react'
import Image from '../images/MyPicture.svg'
import {AiOutlineCodepen, AiOutlineLinkedin, AiOutlineGithub, AiOutlineFacebook, AiOutlineInstagram} from 'react-icons/ai'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'
import { FadeIn } from 'react-fade-in'

const Home = () => {
  
  return (
    <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-10'>
          <div className='text-text flex-1 text-center lg:text-left'>
            <h1 className='text-[55px] font-bold leading-[0.8] lg:text-[100px]'
            >
              Hello I'm <span>Paul</span>
            </h1>
          
            <div className='mb-6 text-[36px] lg:text-[60px] leading-[1] text-text'>
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
            </div>
          <p className='text-text mb-8 max-w-lg mx-auto lg:mx-0'>Reach me out if you need website for your business.
          </p>
            <div className='text-text flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
              <a href='#'>
                <AiOutlineFacebook/>
              </a>
              <a href='#'>
                <AiOutlineInstagram/>
              </a>
              <a href='#'>
                <AiOutlineLinkedin/>
              </a>
              <a href='#'>
                <AiOutlineGithub/>
              </a>
              <a href='#'>
                <AiOutlineCodepen/>
              </a>
            </div>
            </div>
          <div className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[700px] mx-auto'>
            <img src={Image} alt=''/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home