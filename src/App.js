import React, { Component } from 'react';
import Header from './components/Header'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Footer from './components/Footer'
import './index.css'

class App extends React.Component {
  state = {
    currentTab: 1
  };
  
  updateTab(incomingTab) {
    this.setState({currentTab: incomingTab});
  }
  render() {
  return (
    <div className="App">
      <Header/>
      <About/>

    <div className=" px-6 flex h-screen justify-center items-center">
        <div>
        <p className="title text-white">Experience</p>
      
        <div className="experience border-b border-gray flex text-center mb-8 justify-around">
          <div className={this.state.currentTab === 1 ? "ode-btn" : "atelier-btn" } onClick={()=>{this.updateTab(1)}}>
            Ode Toronto
          </div>
          
          <div className={this.state.currentTab === 2 ? "ode-btn" : "atelier-btn"} onClick={()=>{this.updateTab(2)}}>Atelier C3</div>
        </div>

          { this.state.currentTab === 1 ? (
            <div className="experience">
                  <p className="exp-position text-white">Front End Developer <span className="text-pink"> @ Ode Toronto </span> </p>
                      <p className="date text-gray"> December 2017 - February 2022 </p>
                      <ul className="text-gray list-disc list-outside pl-4">
                          <li>Increased direct bookings by 20% by driving more traffic to the website through marketing and advanced search engine optimization strategies</li>
                          <li>Developed and maintained code for in-house website using HTML, CSS and JavaScript</li>
                          <li>Created application with a mobile-first approach and tested site in various browsers and devices to ensure cross-browser compatibility and mobile responsiveness</li>
                          <li>Performed routine accessibility and UX audits</li>
                      </ul>



                </div>
          ) : (
                <div className="experience">
                        <p className="exp-position text-white">Full Stack Developer <span className="text-pink"> @ Atelier C3 </span> </p>
                      <p className="date text-gray"> October 2021 - Present </p>
                      <ul className="text-gray list-disc list-outside pl-4">
                          <li>Write maintainable, efficient, and robust code for in-house and client websites primarily using HTML, CSS/Sass, JavaScript, React</li>
                          <li>Interface and collaborate with a multi-disciplinary team of engineers, designers and clients on a daily basis</li>
                        <li>Manually test sites in various browsers and mobile devices to ensure cross-browser compatibility and responsiveness</li>
                      </ul>
                </div>
              )}
    </div>
    </div>

      <Projects/>
      <Footer/>
    </div>

  );
}
}

export default App;
