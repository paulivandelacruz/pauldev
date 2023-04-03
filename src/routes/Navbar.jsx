import { AiOutlineHome, AiOutlineUser, AiOutlineProject, AiOutlinePhone  } from 'react-icons/ai'
import { Link } from 'react-scroll'


const Navbar = () => {


  return (
  <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
    <div className="container mx-auto">
      <div className='w-full bg-black/20 h-[96px] backdrop-blur-2x1 rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center text-2x1 text-black'>
        <Link
          to='home'
          activeClass='active'
          smooth={true}
          spy={true}
          offset={-200}
          className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
            <AiOutlineHome />
        </Link>

        <Link 
          to='about'
          activeClass='active'
          smooth={true}
          spy={true}
          className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
            <AiOutlineUser />
        </Link>

        <Link 
          to='project'
          activeClass='active'
          smooth={true}
          spy={true}
          className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
            <AiOutlineProject />
        </Link>

        <Link
          to='contact'
          activeClass='active'
          smooth={true}
          spy={true}
          className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
            <AiOutlinePhone />
        </Link>
      </div>
    </div>
  </nav>
  );
};

export default Navbar