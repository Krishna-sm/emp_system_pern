import Navbar from "./components/Navbar"
import HomePage from "./pages/HomePage"

 

const App = () => {
  return (
    <>
    <Navbar/>
       <section className="xl:w-[90%] mx-auto">
       <HomePage/>
       </section>
    </>
  )
}

export default App

