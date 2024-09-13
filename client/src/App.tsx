import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"

 

const App = () => {
  return (
    <>
    <Navbar/>
       <section className="xl:w-[90%] mx-auto">
          <Outlet/>
       </section>
    </>
  )
}

export default App

