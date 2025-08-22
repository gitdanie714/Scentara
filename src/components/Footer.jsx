import React from 'react'
import "../styles/componentstyle.css"
import { FiFacebook } from "react-icons/fi";
import { FaInstagram, FaPinterest, FaTiktok, FaYoutube } from "react-icons/fa6";
import { CiTwitter } from "react-icons/ci";
function Footer() {
  return (
    <div className='footer-area'>
      <div className="signup">
        <h2>Sign up for Our Newsletter!</h2>
        <p>Join us and get exclusive sales, product launches,
          hair care tips and so much more
         directly delivered to your inbox</p>
        <form>
          <div className="email">
            <label htmlFor="email">Email ^ </label>
             <input type="email" placeholder="Enter email address" required />
          </div>
          <button type="submit">Subscribe</button>
        </form>
      </div>
      <div className="contact-us">
        <h1>Contact Us</h1>
        <p>Call:09384848218 </p>
        <p>Email:</p>
        <div className="footer-icons">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FiFacebook className='footer-icon' />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className='footer-icon' />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <FaYoutube className='footer-icon' />
          </a>
          <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer">
            <FaPinterest className='footer-icon' />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <CiTwitter className='footer-icon' /> 
          </a>
          <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
            <FaTiktok className='footer-icon' />
          </a>
        </div>
          
      </div>
    </div>
  )
}

export default Footer