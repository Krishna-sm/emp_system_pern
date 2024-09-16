import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const BreadCrums = ({title}:{title:string}) => {

    const location = useLocation()

  return (
    <>
         <div className="hidden items-center lg:flex justify-between ">
         <h1 className="text-6xl text-zinc-300 poppins-bold capitalize ">{title}</h1>
            <p className="text-zinc-200 text-lg poppins-regular">/dashboard/<Link to={location.pathname}>{title}</Link></p>
         </div>
    </>
  )
}

export default BreadCrums