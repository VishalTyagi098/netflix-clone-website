import React from 'react'

function Footer() {
  return (
    <div>
      <div className="grid grid-rows-4 gap-4">

        <div className="">Questions? Call 000-800-040-1843</div>
        
        <div className="grid grid-cols-4 gap-4">
          <a href=""><li className="list-none text-center hover:border-b">FAQ</li></a>
          <a href=""><li className="">Help Centre</li></a>
          <a href=""><li className="">Account</li></a>
          <a href=""><li className="">Media Centre</li></a>
          <a href=""><li className="">Investor Relations</li></a>
          <a href=""><li className="">Jobs</li></a>
          <a href=""><li className="">Ways to Watch</li></a>
          <a href=""><li className="">Terms of Use</li></a>
          <a href=""><li className="">Privacy</li></a>
          <a href=""><li className="">Cookie Preferences</li></a>
          <a href=""><li className="">Corporate Information</li></a>
          <a href=""><li className="">Contact Us</li></a>
          <a href=""><li className="">Speed Test</li></a>
          <a href=""><li className="">Legal Notices</li></a>
          <a href=""><li className="">Only on Netflix</li></a>
        </div>

        <div className="">
          change language
        </div>

        <div className="">Netflix India</div>
      </div>
    </div>
  )
}

export default Footer