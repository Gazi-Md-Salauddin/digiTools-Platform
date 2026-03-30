import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import Tools from './components/Tools/Tools'
import ToolsCard from './components/ToolsCard/ToolsCard'
import Cart from './components/Cart/Cart'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {
  const [tabActive, setTabActive] = useState("ToolsCard")

  return (
    <>
      <Navbar/>
      <Banner/>
      <Tools/>
      <div className="tabs tabs-box justify-center">
        <input type="radio" name="my_tabs_1" className="tab" aria-label="Products" onClick={() => setTabActive(ToolsCard)}
  defaultChecked/>
        <input type="radio" name="my_tabs_1" className="tab" aria-label="Cart" onClick={() => setTabActive(Cart)} />
      </div>
      
      {tabActive === "ToolsCard" && <ToolsCard/>}
      {tabActive === "Cart" && <Cart/>}
      
      <Footer/>
    </>
  )
}

export default App
