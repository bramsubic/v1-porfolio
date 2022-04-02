import React from 'react'
import '../index.css'

const Header = () => {
  return (
    <div className="grid place-items-center h-screen border">
      <div className="px-6 border-2 border-indigo-500">
         <p className="name text-white"> Brittney Ramsubick </p>
         <p className="position text-gray"> Full-Stack Developer </p>
         <p className="summary text-gray"> I’m a software engineer who builds scalable, user-centered things for the web. I'm currently freelancing and I am always open to new opportunities. </p>
          <a href="/resume.pdf" className="resume-link">
              Resume
            </a>
      </div>
    </div>
  );
}

export default Header