import React, { useRef } from 'react'
import './Contact.css'
import { FaFacebookSquare } from 'react-icons/fa';
import { BsLinkedin } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { AiOutlineGithub } from 'react-icons/ai';
import { FaPhoneSquareAlt } from 'react-icons/fa';
import { CgMail } from 'react-icons/cg';




function Contact() {
  const usernameRef = useRef();
  const userPasswordRef = useRef();
  const userMassageRef = useRef();

  const handelClick = (e) => {
    e.preventDefault()
    const userName = usernameRef.current.value;
    const userPassword = userPasswordRef.current.value;
    const userMassage = userMassageRef.current.value;
    usernameRef.current.value = "";
    userPasswordRef.current.value = "";
    userMassageRef.current.value = '';
    const alertMassage = `
      your username :${userName}
      your username :${userPassword}
      your UserMassage:${userMassage}
      `
    alert(alertMassage)
  }
  return (
    <div className='container' id='contact'>
      <section className='contact-section ' id='About'>
        <div className='row'>
          <div className='contact-left'>
            <h1>Contact Me</h1>
            <div className='email-icon'>
              <FaPhoneSquareAlt className='icons' /><p>01708638785</p>
            </div>
            <div className='email-icon'>
              <CgMail className='icons' /><p>antor789@gmail.com</p>
            </div>

            <div className='social-icons'>
              <a href="https://www.facebook.com/antor.kumar.3154284" target={'_blank'}><FaFacebookSquare className='s-icon' /></a>
              <a href="https://www.linkedin.com/in/antor-kumar-481682219/" target={'_blank'}><BsLinkedin className='s-icon' /></a>
              <a href="https://www.instagram.com/" target={'_blank'}><BsInstagram className='s-icon' /></a>
              <a href="https://github.com/Antor-Kumar" target={'_blank'}><AiOutlineGithub className='s-icon' /></a>
            </div>
            <button className='btn btn1'>Download cv</button>
          </div>
          <div className='contact-right'>
            <form onSubmit={e => handelClick(e)}>
              <input type="text" placeholder='Enter Your Name' ref={usernameRef} required />
              <input type="text" placeholder='Enter Your Email' ref={userPasswordRef} required />
              <textarea name="message" rows="6" placeholder='Enter Your Message' ref={userMassageRef}></textarea><br></br>
              <button className='btn' id='right-btn' type='submit'>Submit</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact