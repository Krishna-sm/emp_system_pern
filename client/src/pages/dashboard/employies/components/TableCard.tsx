import React from 'react'
import { GoPlusCircle } from 'react-icons/go'
import EditEmp from './EditEmp'

const TableCard = ({i}:{i:number}) => {
  return (
    <>
    

    <tr > 
                                                                                <td className="border text-center">{i+1}</td>
                                                                                <td className="border text-center">krishna</td>
                                                                                <td className="border text-center hidden lg:block">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, odio quod. Amet.</td>
                                                                                <td className="border text-center">
                                                                                        <button className="p-3 rounded-full outline-none border-none bg-green-500 animate-pulse"></button>
                                                                                </td>
                                                                                <td className="border py-2 ">
                                                                                {/* <button className="px-5 py-2 rounded-md flex items-center gap-x-2 bg-indigo-500 mx-auto">
                                                View <GoPlusCircle/>


                                        </button>     */}
                                        <EditEmp id={i} />
                                                                                </td>
                                                                                </tr>
                                                                               
    
    </>
  )
}

export default TableCard