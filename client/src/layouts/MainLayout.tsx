import React, { ReactNode } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { RxDashboard } from 'react-icons/rx';
import { useSidebar } from '../context/Sidebar';
import { FaArrowAltCircleRight } from 'react-icons/fa';

interface SidebarItemProps {
    label:string
    Icon:ReactNode
    link:string
}

const SidebarItem = (props:SidebarItemProps)=>{


        const location = useLocation()

    return   <MenuItem icon={props.Icon}  component={<Link to={"/dashboard"+props.link} />} className= {`${location.pathname === "/dashboard"+props.link?'bg-slate-600':'bg-slate-500'} hover:bg-slate-800 shadow-xl my-3 transition-all duration-300 rounded-md`}> {props.label} </MenuItem>
               
}

const MainLayout = () => {

        const {isOpen,isHide,toggleHide,toggleSidebar} = useSidebar()

  return (
    <>
                    <div className="flex items-start gap-x-2">
                                {/* sidebar */}
                                <Sidebar onBackdropClick={toggleHide}  collapsed={isOpen} toggled={isHide} breakPoint='md' className='min-h-screen  bg-slate-900 md:bg-white/5 outline-none !border-none '>
  <Menu className=' py-10 px-2'>
                        <button  onClick={toggleSidebar} className='px-2 py-3 text-3xl  mx-auto rounded-md md:hidden'>
        <FaArrowAltCircleRight/> 

                        </button>
            <SidebarItem label='Dashboard' Icon={<RxDashboard className='text-3xl' />} link=''   />
            <SidebarItem label='Profile' Icon={<RxDashboard className='text-3xl' />} link='/profile'   />
    
              



  </Menu>
</Sidebar>
                                {/* content */}
                                <div className="py-10 px-2">
                                    <Outlet/>
                                </div>
                        </div>  
    </>
  )
}

export default MainLayout