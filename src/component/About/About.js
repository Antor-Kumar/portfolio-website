import React from 'react'
import './About.css'
import AboutImage from '../Images/about-1.png'



function About() {
  return (
    <div className='container' id='about'>
      <section className='about-section'>
        <div className='about-item'>
          <div className='left-col'>
            <img src={AboutImage} alt="" />
          </div>
          <div className='right-col'>
            <h2 className='about-heading'>About Me</h2>
            <p className='about-text'>Hi, My Name's Antor. I'am a Student I study in Engineering from Dinajpur Polytechnic Institute in Computer Technology. Recently i will complete my industrial training form European It.I am a front-end web developer. I can provide clean code and pixel perfect design. I also make the website more and more interactive with web animations. A responsive design makes your website accessible to all users, regardless of their device.</p>
            <div className='sub-text'>
              <h2 className='skill-text sub-links active-links'>Eduction</h2>
              {/* <h2 className='sub-links'>I Learn</h2> */}
            </div>
            <div className='sub-contents sub-cont-active' id='eduction'>
              <ul>
                <li><span>2022</span><br></br>Internship at React js From European It</li>
                <li><span>2022</span><br></br>Web DevelopMent training at European It</li>
                <li><span>2023</span><br></br>Diploma In Computer Technology</li>
              </ul>
            </div>
            {/* <div className='sub-contents' id='i-learn'>
              <ul>
                <li><span>JavScript</span><br></br>From Programming Hero</li>
                <li><span>React Js</span><br></br>From Programming Hero</li>
                <li><span></span></li>
              </ul>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About