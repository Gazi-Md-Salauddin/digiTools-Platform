import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import Tools from './components/Tools/Tools'
import Cart from './components/Cart/Cart'
import Footer from './components/Footer/Footer'
import './App.css'

const getTools = async () => {
    const res = await fetch("/tools.json")
    return res.json();
  }
  
  const toolPromise = getTools();

function App() {
  const [tabActive, setTabActive] = useState("Tools")
  

  return (
    <>
      <Navbar/>
      <Banner/>
      <div className="tabs tabs-box justify-center">
        <input type="radio" name="my_tabs_1" className={`tab ${tabActive === "Tools" ? "bg-purple-700 text-white" : "bg-none"}`} aria-label="Products" onClick={() => setTabActive("Tools")}
  defaultChecked/>
        <input type="radio" name="my_tabs_1" className={`tab ${tabActive === "Cart" ? "bg-purple-700 text-white" : "bg-none"}`} aria-label="Cart" onClick={() => setTabActive("Cart")} />
      </div>
      
      {tabActive === "Tools" && <Tools/>}
      {tabActive === "Cart" && <Cart/>}
      
      <Footer/>
    </>
  )
}

export default App
