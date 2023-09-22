import React from 'react'
import { useRef } from 'react'
import emailjs from '@emailjs/browser';

import toast, { Toaster } from 'react-hot-toast'

//motion and variants
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'


const Contact = () => {
  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_m2m8iyy', 
      'template_0ugac49', 
      form.current, 
      'AwngpqGfhFe5eyh3A'
      )
      .then((result) => {
          console.log(result.text);
          toast.success('Email has been sent')
      }, (error) => {
          console.log(error.text);
          toast.error('Error sending email')
      });
  };


  return (
    <section className='py-16 lg:selection lg:mt-[31rem]' id='contact'>
      <div className='text-text container mx-auto'>
        <div className='flex flex-col lg:flex-row'>

          <div>
            <Toaster />
            <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: true, amount: 0.3}}
            >
              <h4 className='text-text text-xl font-medium mb-2 tracking-wide'>
                Get in touch with me
              </h4>
              <h2 className='text-[45px] lg:text-[90px] leading-none mb-12 text-accent'>
                Contact<br/>Me
              </h2>
              <p className='text-text'>
                Gmail: paulivandelacruz28@gmail.com
                <br/>Contact No.: +6392-8369-8348
              </p>
            </motion.div>
          </div>

          <motion.form
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: true, amount: 0.3}} 
            className='font-rubik flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start lg:ml-[200px]'
            ref={form}
            onSubmit={sendEmail}
          >
            
            <input 
              className='bg-transparent border-b py-3 outline-none w-full focus:border-accent transition-all' type='text' 
              placeholder='Name' 
              name='user_name'
            />

            <input 
              className='bg-transparent border-b py-3 outline-none w-full focus:border-accent transition-all' type='text' 
              placeholder='Email' 
              name='user_email'
            />

            <textarea 
              className='bg-transparent border-b py-12 outline-none w-full focus:border-accent transition-all resize-none mb-12' 
              placeholder='Message'
              name='message'
            ></textarea>
            
            <button 
              className='font-rubik w-1/3 my-1 py-2 bg-accent shadow-lg shadow-black-500
              /50 font-semibold rounded-lg text-white tracking-widest'
              value='Send'
              >Send Message
            </button>
          </motion.form>
          
        </div>
      </div>
    </section>
  )
}

export default Contact