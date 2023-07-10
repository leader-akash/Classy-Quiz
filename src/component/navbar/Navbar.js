import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='nav-container'>
        <Link className='home-btn' to="/">
        <div className='classyquiz'><span className='logo-design'>C</span>lassy <span className='logo-design'>Q</span>uiz</div>
        </Link>
        <div className='nav-links'>
        <span className='brightness'>🔆</span>
          
          <Link className='login-btn' to="/login"><i className="fa-regular fa-user"></i>
          </Link>
        
       </div>
    </nav>
  )
}

export default Navbar