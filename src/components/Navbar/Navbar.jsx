import React from 'react'

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm md:px-[75px]">
        
        {/*humberger menu*/}
        <div className="md:hidden">
          <div className="dropdown dropdown-start">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
            </div>
            <ul
             tabIndex="-1"
             className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li><a>Products</a></li>
              <li><a>Features</a></li>
              <li><a>Pricing</a></li>
              <li><a>Testimonial</a></li>
              <li><a>FAQ</a></li>
            </ul>
          </div>
        </div>
        
        {/*Title*/}
        <div className="flex-1">
          <a className="text-xl font-bold bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent">DigiTools</a>
        </div>
        
        {/*menu*/}
        <div className="flex-1 flex justify-center hidden md:block">
          <ul className="flex gap-4 px-3">
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
            <button className="px-3 md:px-4 bg-gradient-to-r from-blue-700 to-purple-700 rounded-full text-white">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar