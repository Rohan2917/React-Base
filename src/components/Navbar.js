import React from "react"
import { Link } from "react-router-dom"
import "../assets/css/navbar.css"

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li><Link to="/" className="navbar-link">Home</Link></li>
        <li><Link to="/about" className="navbar-link">About</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
