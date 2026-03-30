import React from 'react'
import BannerImg from '../../assets/banner.png'
import PlayIcon from '../../assets/Play.png'

const Banner = () => {
  return (
    <div>
      
      {/*heading and description*/}
      <div className="flex justify-between px-[80px] py-[60px]">
        <div className="space-y-4">
          <span className="bg-[#E1E7FF] rounded-full p-2">New: AI-Powered Tools Available</span>
          <h1 className="text-3xl font-extrabold mt-4">Supercharge Your <br></br>Digital Workflow</h1>
          <p>Access premium AI tools, design assets, templates, and productivity
software—all in one place. Start creating faster today.<br></br>
Explore Products</p>
          <div className="flex space-x-2">
            <button className="bg-gradient-to-r from-blue-700 to-purple-700 p-4 rounded-full text-white">Explore Products</button>
            <button className="text-purple-700 flex items-center border border-purple-700 p-4 rounded-full hover:bg-purple-700 hover:text-white gap-2"><img src={PlayIcon}/>Watch Demo</button>
          </div>
        </div>
        
           {/*Image*/}
        <div>
          <img src={BannerImg} alt="Banner Image" />
        </div>
      </div>
      
      {/*rating*/}
      <div className="bg-purple-700 flex justify-between px-[150px] py-8 text-white">
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