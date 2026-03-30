import React from 'react'

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm px-[80px]">

        {/*Title*/}
        <div className="flex-1">
          <a className="text-xl font-bold bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent">DigiTools</a>
        </div>
        
        {/*menu*/}
        <div className="flex-1 flex justify-center">
          <ul className="flex gap-4 px-4">
            <li><a>Products</a></li>
            <li><a>Features</a></li>
            <li><a>Pricing</a></li>
            <li><a>Testimonials</a></li>
            <li><a>FAQ</a></li>
          </ul>
        </div>
        
        {/*cart*/}
        <div className="flex-1 flex justify-end gap-4">
          <div className="dropdown">
            <div role="button" className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg>
                <span className="badge badge-sm bg-red-500 text-white rounded-full indicator-item">0</span>
              </div>
            </div>
          </div>
          
          
          {/*Buttons*/}
          <div className="flex gap-2">
            <button>LogIn</button>
            <button className="btn bg-gradient-to-r from-blue-700 to-purple-700 rounded-full text-white">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar