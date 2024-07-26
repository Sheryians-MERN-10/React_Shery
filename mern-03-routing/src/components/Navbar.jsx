import React from 'react'

import { Link } from 'react-router-dom';

const Nav = () => {
    return (
      
      <nav className="navbar">
          <div className="navbar-container">
              <div className="navbar-logo">MyApp</div>
              <ul className="navbar-links">
                  <li>
                      <Link to="/" className="navbar-link">Home</Link>
                  </li>
                  <li>
                      <Link to="/about" className="navbar-link">About</Link>
                  </li>
                  <li>
                      <Link to="/contact" className="navbar-link">Contact</Link>
                  </li>
              </ul>
          </div>
      </nav>
  )
}

export default Nav