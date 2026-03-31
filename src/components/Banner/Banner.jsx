import React from 'react'
import BannerImg from '../../assets/banner.png'
import PlayIcon from '../../assets/Play.png'

const Banner = () => {
  return (
    <div>
      
      {/*heading and description*/}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between px-4 sm:px-8 lg:px-16 py:10 lg:py-16 gap-10">
        <div className="space-y-4">
          <span className="bg-[#E1E7FF] rounded-full px-3 py-1 text-sm inline-block">New: AI-Powered Tools Available</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-4">Supercharge Your <br></br>Digital Workflow</h1>
          <p>Access premium AI tools, design assets, templates, and productivity
software—all in one place. Start creating faster today.<br></br>
Explore Products</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-4 lg:justify-start">
            <button className="bg-gradient-to-r from-blue-700 to-purple-700 p-4 rounded-full text-white">Explore Products</button>
            <button className="text-purple-700 flex items-center border border-purple-700 p-4 rounded-full hover:bg-purple-700 hover:text-white gap-2 justify-center"><img src={PlayIcon}/>Watch Demo</button>
          </div>
        </div>
        
           {/*Image*/}
        <div>
          <img src={BannerImg} alt="Banner Image" />
        </div>
      </div>
      
      {/*rating*/}
      <div className="bg-purple-700 grid grid-cols-1 sm:grid-cols-3 text-center px-6 sm:px-12 lg:px-20 py-8 gap-6 text-white mb-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold">50k+</h1>
          <p>Active Users</p>
        </div>
        <div className="text-center">
          <h1 className="text-2xl font-bold">200+</h1>
          <p>Premium Tools</p>
        </div>
        <div className="text-center">
          <h1 className="text-2xl font-bold">4.9</h1>
          <p>Rating</p>
        </div>
      </div>
    </div>
  )
}

export default Banner