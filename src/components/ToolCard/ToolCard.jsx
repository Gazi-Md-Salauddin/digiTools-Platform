import React, { useState } from 'react'
import { toast } from 'react-toastify';

const ToolCard = ({tool, carts, setCarts}) => {
  const [isBuy, setIsBuy] = useState(false)
  const handleBuyNow = () => {
    setIsBuy(true)
    const isFound = carts.find((item) => item.id === tool.id)
    if(isFound){
      toast.error("item Already exist!")
      return;
    }
    
    setCarts([...carts, tool])
    toast.success("item added to cart")
  }
  return (
    <div key={tool.id} className="card w-full max-w-sm bg-base-100 shadow-sm">
          <div className="card-body">
            <span className="badge badge-xs badge-warning flex justify-end ml-48">{tool.tag}</span>

            <div className="w-12 h-12 bg-white p-2 rounded-full shadow">
            <img src={tool.icon} alt={tool.name}/>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold">{tool.name}</h2>
              <p className="py-2">{tool.description}</p>
              <span className="text-xl">${tool.price}/Mo</span>
            </div>
            
            <ul className="mt-6 flex flex-col gap-2 text-xs">
              {tool.features.map((feature, index) => (
              <li key={index}>
                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                <span>{feature}</span>
              </li>
              ))}
              
            </ul>
            <div className="mt-6">
              <button onClick={handleBuyNow} className={`btn btn-block rounded-full ${isBuy ? "bg-green-500 text-white" : "bg-purple-700 text-white"}`}>{isBuy ? "Added to cart" : "Buy Now"}</button>
            </div>
          </div>
        </div>
  )
}

export default ToolCard