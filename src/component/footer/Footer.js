import React from 'react'
import "./Footer.css";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
        <div className="footer">
            <hr className="footer-line" />
            <div className='footer-content'>Connect with me on</div>
            <div className='footer-icon'>
                <Link className='contact-link' to="https://github.com/leader-akash"  target="_blank"><i class=" footer-icon fab fa-github"></i></Link>
                <Link className='contact-link' to="https://www.linkedin.com/in/hi-akash/" target="_blank"><i class=" footer-icon fab fa-twitter"></i></Link>
                <Link className='contact-link' to="https://twitter.com/AkashAk50675432" target="_blank"><i class=" footer-icon fab fa-linkedin"></i></Link>
            </div>
        </div>
  )
}

export default Footer