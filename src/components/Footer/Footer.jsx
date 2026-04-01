import React from 'react'
import { MdOutlineFacebook } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      
      <div className="bg-[#101727] text-white px-4 py-2 max-w-6xl mx-auto md:py-[60px] px-[80px]">
        <div className="space-y-4 text-center md:flex justify-between">
          
            {/*heading and description*/}
          <div className="mt-6">
            <h1 className="text-2xl font-bold">DigiTools</h1>
            <p>Premium digital tools for creators,<br></br> professionals, and businesses. Work smarter<br></br> with our suite of powerful tools.</p>
          </div>
          
                 {/*product*/}
          <div>
            <h2 className="text-xl font-semibold">Product</h2>
            <ul>
              <li><a>Features</a></li>
              <li><a>Pricing</a></li>
              <li><a>Templates</a></li>
              <li><a>Integrations</a></li>
            </ul>
          </div>
                
                {/*company*/}
          <div>
            <h2 className="text-xl font-semibold">Company</h2>
            <ul>
              <li><a>About</a></li>
              <li><a>Blog</a></li>
              <li><a>Careers</a></li>
              <li><a>Press</a></li>
            </ul>
          </div>
          
                  {/*Resources*/}
          <div>
            <h2 className="text-xl font-semibold">Resources</h2>
            <ul>
              <li><a>Documentation</a></li>
              <li><a>Help Center</a></li>
              <li><a>Community</a></li>
              <li><a>Contact</a></li>
            </ul>
          </div>
           
                {/*social media icon*/}
          <div>
            <h2 className="text-xl font-semibold">Social Links</h2>
            <div className="flex justify-center gap-4">
              <MdOutlineFacebook />
              <FaInstagram />
              <FaXTwitter />
            </div>
          </div>
        </div>
        
               {/*copyright*/}
        <div className="mt-4 mb-2 space-y-2 md:flex justify-between mt-[60px] mb-4">
            <p>&copy; 2026 DigiTools. All rights reserved. </p>
            <div className="text-center md:flex justify-between gap-3">
              <p>Privacy Plicy</p>
              <p>Terms of Service</p>
              <p>Cookies</p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Footer