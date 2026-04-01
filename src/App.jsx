import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import Tools from './components/Tools/Tools'
import Cart from './components/Cart/Cart'
import Steps from './components/Steps/Steps'
import Pricing from './components/Pricing/Pricing'
import WorkFlow from './components/WorkFlow/WorkFlow'
import Footer from './components/Footer/Footer'
import { ToastContainer } from 'react-toastify';
import './App.css'

const getTools = async () => {
    const res = await fetch("/tools.json")
    return res.json();
  }
  
  const toolPromise = getTools();

function App() {
  const [tabActive, setTabActive] = useState("Tools")
  const [carts, setCarts] = useState([])

  return (
    <>
      <Navbar carts={carts}/>
      <Banner/>
      <div className="tabs tabs-box justify-center">
        <input type="radio" name="my_tabs_1" className={`tab ${tabActive === "Tools" ? "bg-purple-700 text-white" : "bg-none"}`} aria-label="Products" onClick={() => setTabActive("Tools")}
         defaultChecked/>
        <input type="radio" name="my_tabs_1" className={`tab ${tabActive === "Cart" ? "bg-purple-700 text-white" : "bg-none"}`} aria-label={`Cart(${carts.length})`} onClick={() => setTabActive("Cart")} />
      </div>
      
      {tabActive === "Tools" && <Tools toolPromise={toolPromise} carts={carts} setCarts={setCarts}/>}
      {tabActive === "Cart" && <Cart carts={carts} setCarts={setCarts}/>}
      
      <Steps/>
      <Pricing/>
      <WorkFlow/>
      <Footer/>
      <ToastContainer />
    </>
  )
}

export default App
