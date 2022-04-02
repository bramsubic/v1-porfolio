import React from 'react'
import '../index.css'

const Experience = () => {
  return (
    <div className="grid place-items-center h-screen px-6">
        <div className="border-2 border-indigo-500 mb-0">
        <p className="title text-white">Experience</p>
            <p className="text-white">Full Stack Developer <span className="text-pink"> @ Atelier C3 </span> </p>
            <p className="text-gray"> October 2021 - Present </p>
            <ul className="text-gray list-disc list-inside">
                <li>Increased direct bookings by 20% by driving more traffic to the website through marketing and advanced search engine optimization strategies</li>
                <li>Developed and maintained code for in-house website using HTML, CSS and JavaScript</li>
                <li>Created application with a mobile-first approach and tested site in various browsers and devices to ensure cross-browser compatibility and mobile responsiveness</li>
                <li>Performed routine accessibility and UX audits</li>
            </ul>
        </div>
        <div className="border-2 border-indigo-500 mb-0">
            <p className="text-white">Front End Developer <span className="text-pink"> @ Ode Toronto </span> </p>
            <p className="text-gray"> December 2017 - February 2022 </p>
            <ul className="text-gray list-disc list-inside">
                <li>Increased direct bookings by 20% by driving more traffic to the website through marketing and advanced search engine optimization strategies</li>
                <li>Developed and maintained code for in-house website using HTML, CSS and JavaScript</li>
                <li>Created application with a mobile-first approach and tested site in various browsers and devices to ensure cross-browser compatibility and mobile responsiveness</li>
                <li>Performed routine accessibility and UX audits</li>
            </ul>
        </div>
    </div>
  );
}

export default Experience