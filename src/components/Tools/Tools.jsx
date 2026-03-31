import { use } from 'react'

const Tools = ({toolPromise}) => {
  const tools = use(toolPromise)
  
  return (
    <div>
      <div className="text-center mt-8 space-y-2 mb-4">
        <h1 className="text-2xl font-bold">Premium Digital Tools</h1>
        <p>Choose from our curated collection of premium digital products designed<br></br>to boost your productivity and creativity.</p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {tools.map(tool => (
        <div key={tool.id} className="card w-full max-w-sm bg-base-100 shadow-sm">
          <div className="card-body">
            <img/>
            <span className="badge badge-xs badge-warning flex justify-end ml-60">{tool.tag}</span>
            
            <div className="">
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
              <button className="btn bg-purple-700 text-white btn-block rounded-full">Buy Now</button>
            </div>
          </div>
        </div>
        
        ))}
        
      </div>
    </div>  
    
    
  )
}

export default Tools