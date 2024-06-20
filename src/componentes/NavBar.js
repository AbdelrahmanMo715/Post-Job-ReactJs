import React from 'react'
import Logo from './Logo'
import "../styles/NavBar.css";
import MenuIcon from '@mui/icons-material/Menu';
import Button  from '../componentes/Button.js';
function NavBar() {
  return (
<nav className="navbar navbar-expand-lg custom-navbar">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      <Logo/>
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarText"
      aria-controls="navbarText"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span style={{color:"#6de754", fontSize : "1.5rem"}}><MenuIcon/></span>
      
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-center">
        <li className="nav-item">
          <a className="nav-link" href="#">
          AI Cover Letter Generator
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
          Resume Template
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
          Pricing
          </a>
        </li>
      </ul>
      <div className="d-flex  gap-3 text-center justify-content-center">
        <Button type="secondary dark">Sign In</Button>
        <Button type="primary">Get Started</Button>
      </div>
    </div>
  </div>
</nav>

  )
}

export default NavBar
