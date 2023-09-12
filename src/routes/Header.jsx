import React from 'react'
import Logo from '../images/MyLogo.svg'

const Header = () => {
  return (
    <header className= 'py-8'>
        <div className='container mx-auto'>
            <div className='flex justify-between items-center'>
            <a href='/'>
                <img src={Logo} alt=''/>
            </a>
            <h1 className='tracking-widest text-xl text-text'>Explore my Portfolio!</h1>
            </div>
        </div>
    </header>
  )
}

export default Header