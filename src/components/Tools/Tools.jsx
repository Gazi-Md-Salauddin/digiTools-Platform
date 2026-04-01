import { use } from 'react'
import ToolCard from '../ToolCard/ToolCard'

const Tools = ({ toolPromise, carts, setCarts }) => {
  const tools = use(toolPromise)
  
  
  return (
    <div>
      <div className="text-center mt-8 space-y-2 mb-4">
        <h1 className="text-2xl font-bold">Premium Digital Tools</h1>
        <p>Choose from our curated collection of premium digital products designed<br></br>to boost your productivity and creativity.</p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6 justify-items-center">
        {tools.map((tool) => (
        <ToolCard tool={tool}
        carts={carts}
        setCarts={setCarts}/>
        
        ))}
        
      </div>
    </div>  
    
    
  )
}

export default Tools