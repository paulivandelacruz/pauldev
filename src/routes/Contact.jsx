import React from 'react'

//motion and variants
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'

const Contact = () => {
  return (
    <section className='py-16 lg:selection' id='contact'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>

          <div>
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
          className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start lg:ml-[200px]'
          >
            
            <input className='bg-transparent border-b py-3 outline-none w-full focus:border-accent transition-all' type='text' placeholder='Name'/>

            <input className='bg-transparent border-b py-3 outline-none w-full focus:border-accent transition-all' type='text' placeholder='Email'/>

            <textarea className='bg-transparent border-b py-12 outline-none w-full focus:border-accent transition-all resize-none mb-12' placeholder='Message'>
            </textarea>
            <button className='text-gradient btn-link btn-lg font-text text-xl tracking-widest'>Send Message</button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact