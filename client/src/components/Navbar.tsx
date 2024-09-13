import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
          <header className="text-white body-font bg-teal-500  poppins-regular">
  <div className=" flex flex-wrap p-5 flex-col md:flex-row items-center xl:w-[90%] mx-auto">
    <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
      
      <Link to={'/'} className="ml-3 text-2xl">Emp System</Link>
    </a>
    <nav className="md:ml-auto flex gap-x-5 flex-wrap items-center text-base justify-center">
    
                <Link to='/'>Home</Link>
                <Link to='/'>About</Link>
                <Link to='/'>Contact</Link>
                <Link to='/login'>Login</Link>
    </nav>
    
  </div>
</header>

    </>
  )
}

export default Navbar