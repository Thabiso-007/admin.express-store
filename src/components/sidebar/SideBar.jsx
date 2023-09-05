import React from 'react';
import { MdEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo/logo.png';

const SideBar = () => {
  return (
    <div className="admin-background sidebar p-0">
      <div className="p-0">
        <img className="admin-logo" src={logo} alt="logo" />        
      </div>
      <hr className="text-dark"/>
      <div className="list-group list-group-flush">
        <Link to="/admin" className="d-flex gap-2 list-group-item py-2">
          <MdEmail />
          <p>Dashboard</p>
        </Link>
        <Link to="/admin" className="d-flex gap-2 list-group-item py-2">
          <MdEmail />
          <p>Dashboard</p>
        </Link>
        <Link to="/admin" className="d-flex gap-2 list-group-item py-2">
          <MdEmail />
          <p>Dashboard</p>
        </Link>  
        <Link to="/admin" className="d-flex gap-2 list-group-item py-2">
          <MdEmail />
          <p>Dashboard</p>
        </Link>
        <Link to="/admin" className="d-flex gap-2 list-group-item py-2">
          <MdEmail />
          <p>Dashboard</p>
        </Link>
      </div>
    </div>
  )
}

export default SideBar