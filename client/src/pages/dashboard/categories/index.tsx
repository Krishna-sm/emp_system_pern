import BreadCrums from "../../../components/BreadCrums"
import { GoPlusCircle } from "react-icons/go";
import TableCard from "./components/TableCard";
import AddEmp from "./components/AddEmp";
const Categories = ()=>{
        return <div className=" w-full lg:w-[90%] mx-auto">
                <BreadCrums title="categories" />
                                <div className="add flex justify-end">
                                        {/* <button className="px-5 py-2 rounded-md flex items-center gap-x-2 bg-red-500">
                                                Add <GoPlusCircle/>


                                        </button> */}
                                        <AddEmp  />
                                </div>

                                <div className="show py-10    ">

                                                        <table className="w-full border py-10">
                                                                <tr className="border">
                                                                        <th className="border text-center">ID</th>
                                                                        <th className="border text-center">Title</th>
                                                                        <th className="border text-center hidden lg:block">Desc</th>
                                                                        <th className="border text-center">isActive</th>
                                                                        <th className="border text-center">Action</th>
                                                                </tr>
                                                               <tbody>
                                                                {
                                                                        Array(10).fill(null).map((cur,i)=>{
                                                                                return <TableCard i={i} key={i}/>
                                                                        })
                                                                }
                                                               </tbody>
                                                        </table>

                                </div>
        </div>
}

export default Categories