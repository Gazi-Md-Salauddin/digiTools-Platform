import React from 'react'

const WorkFlow = () => {
  return (
    <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-center space-y-4">
      <div className="space-y-2 pt-6">
        <h1 className="text-2xl text-white font-bold">Ready To Transform Your Workflow</h1>
        <p className="text-white">Join thousands of professionals who are already using Digitools to work smarter. Start your free trial today.</p>
      </div>
      
      <div>
        <div className="flex justify-center gap-4">
          <button className="bg-white text-purple-500 p-2 rounded-full">Explore Products</button>
          <button className="text-white border border-white p-2 rounded-full">View Pricing</button>
        </div>
        <p className="text-white mt-4 py-6">14-day free trial • No credit card required • Cancel anytime</p>
      </div>
    </div>
  )
}

export default WorkFlow