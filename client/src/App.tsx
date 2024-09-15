import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"

 

const App = () => {
  return (
    <>
    <Navbar/>
       <section className=" mx-auto">
          <Outlet/>
       </section>
    </>
  )
}

export default App

