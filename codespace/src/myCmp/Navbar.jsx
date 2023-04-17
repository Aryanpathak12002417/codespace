import React from 'react'
import './style/navbar.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";

export default function Navbar() {
  return (
    <nav className='navbar'>

        {/* Logo */}
        <div className='nav-logo'>
            <h3 className='nav-letter nav-text-logo'>Codespace</h3>
        </div>
        
        {/* listItem */}
        <ul className='nav-items nav-letter'>
            <li><Link to='/' style={{textDecoration:'none',color:'black'}}>Home</Link></li>
            <li><Link to='/problems'style={{textDecoration:'none',color:'black'}}>Problems</Link></li>
            <li><Link to='/courses'style={{textDecoration:'none',color:'black'}}>Courses</Link></li>
            <li><Link to='/pricing'style={{textDecoration:'none',color:'black'}}>Pricing</Link></li>
            <li><Link to='/contact'style={{textDecoration:'none',color:'black'}}>Contact</Link></li>
        </ul>

        <div className='nav-auth'>
            <button className='nav-letter nav-auth-item nav-sign-in-btn'>
            <Link to='/login'style={{textDecoration:'none',color:'black'}}>Login</Link>
            </button>
            <button className='nav-letter nav-auth-item nav-sign-out-btn'>
            <Link to='/register'style={{textDecoration:'none',color:'black'}}>Register</Link>
            </button>
        </div>

    </nav>
  )
}
