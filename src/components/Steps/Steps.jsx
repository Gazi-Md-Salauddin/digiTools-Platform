import React from 'react'
import UserImage from '../../assets/user.png'
import Package from '../../assets/package.png'
import Rocket from '../../assets/rocket.png'

const Steps = () => {
  return (
    <div>
      <div className="text-center mt-8 space-y-2 mb-4">
        <h1 className="text-2xl font-bold">Get Started in 3 Steps</h1>
        <p>Start using premium digital tools in minutes, not hours.</p>
      </div>
      
      <div className="md:flex justify-between">
        <div className="text-center px-4 py-8 flex flex-col items-center border border-gray-200 rounded-md">
          <span className="bg-purple-600 text-white rounded-full p-2 ml-60 mb-2">01</span>
          <img src={UserImage} alt="User" className="w-10 h-10 bg-purple-200 rounded-full p-2" />
          <h2 className="text-2xl font-bold">Create Account</h2>
          <p>Sign up for free in seconds. <br></br>No credit card required to get started.</p>
        </div>
        
        <div className="text-center px-4 py-8 flex flex-col items-center border border-gray-200 rounded-md">
          <span className="bg-purple-600 text-white rounded-full p-2 ml-60 mb-2">02</span>
          <img src={Package} alt="Package" className="w-10 h-10 bg-purple-200 rounded-full p-2" />
          <h2 className="text-2xl font-bold">Choose Products</h2>
          <p>Browse our catalog and select the tools<br></br>that fit your needs.</p>
        </div>
        
        <div className="text-center items-center px-4 py-8 flex flex-col items-center border border-gray-200 rounded-md">
          <span className="bg-purple-600 text-white rounded-full p-2 ml-60 mb-2">03</span>
          <img src={Rocket} alt="Rocket" className="w-10 h-10 bg-purple-200 rounded-full p-2" />
          <h2 className="text-2xl font-bold">Start Creating</h2>
          <p>Download and start using your premium <br></br>tools immediately.</p>
        </div>
      </div>
    </div>
  )
}

export default Steps