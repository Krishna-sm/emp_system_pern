import React from 'react'
import { CiUser } from 'react-icons/ci'
import UserShowingCharts from './components/index/UserShowing.charts'
import UserShowingChartbar from './components/index/UserShowingBar.charts copy'

const Dashboard = () => {
  return (
    <>
              <div className="flex items-center w-full gap-y-4  flex-wrap ">
              {
            Array(3).fill(null).map((cur,i)=>{
              return <Card key={i} />
            })
          }
              </div>

                  <div className="flex flex-wrap py-10">
                  <UserShowingCharts/>
                  <UserShowingChartbar/>
                  </div>
    </>
  )
}

export default Dashboard


const Card =()=>{
  return <>
        <div className=" w-full md:w-[48%] xl:w-[31%] mx-auto ">
        <div className=" bg-white/5 shadow-lg rounded-md  justify-between   px-4 py-3 flex items-center">
          <CiUser className='text-4xl' /> 
            <div className="flex flex-col gap-y-1">
              <h1 className='text-3xl'>Users</h1>
              <h1 className="text-end text-2xl">25</h1>
            </div>
      </div>
        </div>
  </>
}