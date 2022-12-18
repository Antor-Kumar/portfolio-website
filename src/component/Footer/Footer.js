import React from 'react'
import './Footer.css'
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillTwitterSquare } from 'react-icons/ai';
function Footer() {
  return (
    <div className='container'>
      <section className='footer-section'>
        <div className='footer'>
          <div className='footer-item nav-effects'>
            <h3>Useful links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skill">Skill</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#contact">Contact </a></li>
            </ul>
          </div>
          <div className='footer-item center-item'>
            <h3>Newsletter</h3>
            <input type="text" placeholder='Enter Email Address' /><br />
            <button className='foot-btn'>SUBSCRIBE</button>
          </div>
          <div className='footer-item footer-right'>
            <h3>Contact</h3>
            <p className='p-text'>Mirpur-11,</p>
            <p className='p-text'>Road 10,blog C,</p>
            <p className='p-text'>Mirpur,Dhaka</p>

            <a href="https://www.facebook.com/antor.kumar.3154284" target="_blank" rel="noopener noreferrer"><AiFillFacebook className='footer-icon' /></a>
            <a href="https://www.linkedin.com/in/antor-kumar-481682219/" target="_blank" rel="noopener noreferrer"><AiFillLinkedin className='footer-icon' /></a>
            <a href="https://twitter.com/i/flow/login" target="_blank" rel="noopener noreferrer"><AiFillTwitterSquare className='footer-icon' /></a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><AiFillInstagram className='footer-icon' /></a>
          </div>
        </div>
        <div className='footer-text'>
          <h6>@Copyright antor,All Rights Reserved</h6>
          <p>Created by Antor</p>
        </div>
      </section>
    </div>
  )
}

export default Footer