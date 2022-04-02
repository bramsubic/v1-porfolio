import React from 'react'
import '../index.css'

const About = () => {
  return (
    <div className="grid place-items-center h-screen">
      <div className="px-6 border-2 border-indigo-500">
         <p className="title text-white">About</p>
         <p className="summary text-gray">
             I am a Software Engineer and I have a background in Psychology and Neuroscience from the University of Toronto. During my undergrad I discovered my interest in programming while working as a research assistant. I developed a passion for finding creative technical solutions and although I still appreciate learning about people, what makes me happiest is building solutions that improve the experience of humans.
        I've recently graduated from General Assembly's Software Engineering Immersive Program. As a software engineer, I enjoy working on complex problems and learning new and more efficient ways to create seamless user experiences. I’m looking for opportunities to be challenged, learn and grow alongside smart and innovative people.
        </p>
      </div>
    </div>
  );
}

export default About