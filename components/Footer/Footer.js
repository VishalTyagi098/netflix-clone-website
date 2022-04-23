import React from 'react'
import LangDropdown from '../Navbar/LangDropdown'

function Footer() {
  return (
    <div className='flex justify-center items-center'>
      <div className="grid grid-rows-3 gap-6 border border-white w-3/5 text-[#757575]">

        <div className="flex items-end text-lg">Questions? Call 000-800-040-1843</div>
        
        <div className="grid grid-cols-4 gap-4 text-sm">
          <a href=""><li className="list-none text-justify">FAQ</li></a>
          <a href=""><li className="list-none text-justify">Help Centre</li></a>
          <a href=""><li className="list-none text-justify">Account</li></a>
          <a href=""><li className="list-none text-justify">Media Centre</li></a>
          <a href=""><li className="list-none text-justify">Investor Relations</li></a>
          <a href=""><li className="list-none text-justify">Jobs</li></a>
          <a href=""><li className="list-none text-justify">Ways to Watch</li></a>
          <a href=""><li className="list-none text-justify">Terms of Use</li></a>
          <a href=""><li className="list-none text-justify">Privacy</li></a>
          <a href=""><li className="list-none text-justify">Cookie Preferences</li></a>
          <a href=""><li className="list-none text-justify">Corporate Information</li></a>
          <a href=""><li className="list-none text-justify">Contact Us</li></a>
          <a href=""><li className="list-none text-justify">Speed Test</li></a>
          <a href=""><li className="list-none text-justify">Legal Notices</li></a>
          <a href=""><li className="list-none text-justify">Only on Netflix</li></a>
        </div>

        <div className="">
          <div className=""><LangDropdown/></div>
          <div className="text-sm">Netflix India</div>
        </div>

        
      </div>
    </div>
  )
}

export default Footer