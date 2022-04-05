import React from 'react'
import '../index.css'
import pdf from "../resume.pdf";

const Header = () => {
  return (
    <div className="flex h-screen justify-center items-center">  
      <div className="px-6">
         <p className="name text-white"> Brittney Ramsubick </p>
         <p className="position text-gray"> Full-Stack Developer </p>
         <div className="summary-width">
         <p className="summary text-gray mb-10"> I’m a software engineer who builds scalable, user-centered things for the web. I'm currently freelancing and I am always open to new opportunities. </p>
         </div>
          <a href={pdf} target="_blank" rel="noreferrer" className="resume-link text-pink border p-3 rounded-lg">
              Resume
            </a>
      </div>
    </div>
  );
}

export default Header