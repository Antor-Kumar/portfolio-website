import React from 'react'
import './Home.css'
import Image2 from '../Images/pattern.png'
import Image1 from '../Images/home copy.png'
import {FaWindowClose} from 'react-icons/fa'
import {HiMenu} from 'react-icons/hi'

function Home() {
 
  return (
    <div className='container' id='home'>
       <section className='header-section'>
            <div className='header-item'>
                <h4 className='header-logo'>ANT<span>OR</span></h4>
                <nav className='nav-links nav-effect' id='navLinks'>
                <FaWindowClose className='hide-icon'/>
                    <ul className='nav-item'>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="#skill">Skills</a></li>
                        <li><a href="#contact">Contact Us</a></li>
                        
                    </ul>
                </nav>
                <HiMenu className='hide-icon'/>
            </div>
             <div className='header-text'>
                 <h2>Hi, I'm <span style={{color:"#d2691e"}}>Antor</span></h2>
                 <p> I Am Front-End Developer This is My Portfolio Website.</p>
                 <button className='btn'>More Info</button>
             </div>
             <div className='img-box'>
                <img className='back-img' src={Image2} alt="" />
                <img className='font-img' src={Image1} alt="" />
             </div>
       </section>
    </div>
  )
}

export default Home