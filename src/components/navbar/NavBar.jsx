import React from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'

const NavBar = () => {
  return (
    <nav className="nav">
      <div className="btn">
        <FaBars />
      </div>
      <div class="dropdown">
        <button class="dropbtn">Dropdown</button>
        <div class="dropdown-content">
          <Link to="#">Link 1</Link>
          <Link to="#">Link 2</Link>
          <Link to="#">Link 3</Link>
        </div>
      </div>
    </nav>
  )
}

export default NavBar