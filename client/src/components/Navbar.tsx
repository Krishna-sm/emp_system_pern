import React from 'react'
import { IoMenuOutline } from 'react-icons/io5'
import { Link, useLocation } from 'react-router-dom'
import { useSidebar } from '../context/Sidebar'
import ProfileButton from './ProfileButton'

const Navbar = () => {

  const location = useLocation()
  const {toggleSidebar,toggleHide} = useSidebar()

  return (
    <>
          <header className="text-white body-font bg-slate-800  poppins-regular">
  <div className=" flex flex-wrap p-5 flex-col md:flex-row items-center xl:w-[90%] mx-auto">
    <div className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            {location.pathname.startsWith("/dashboard") && 
              <>
              <button onClick={toggleSidebar} className='p-2 bg-white rounded-full md:block hidden text-slate-700'>
              <IoMenuOutline className='text-4xl' />
            </button>
            <button onClick={toggleHide} className='p-2 bg-white rounded-full block md:hidden text-slate-700'>
              <IoMenuOutline className='text-4xl' />
            </button>
              </>
            }
      <Link to={'/'} className="ml-3 text-2xl">Emp System</Link>
    </div>
    <nav className="md:ml-auto flex gap-x-5 flex-wrap items-center text-base justify-center">
    
               {!location.pathname.startsWith("/dashboard") 
                  &&
                    <>

<Link to='/'>Home</Link>
                <Link to='/'>About</Link>
                <Link to='/'>Contact</Link>
                <Link to='/login'>Login</Link>
                <Link to='/dashboard'>Dashboard</Link>
                    </>
               }
               {location.pathname.startsWith("/dashboard") && <ProfileButton/>}
    </nav>
    
  </div>
</header>

    </>
  )
}

export default Navbar