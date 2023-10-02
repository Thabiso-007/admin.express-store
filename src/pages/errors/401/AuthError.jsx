import React from 'react'
import { Link } from 'react-router-dom';

import logo from '../../../assets/logo/logo.png';

const AuthError = () => {
  return (
    <div className="container">
      <div className="row vh-100 align-items-center justify-content-center">
        <div className="col-sm-10 col-md-8 col-lg-6 bg-dark rounded p-4 shadow">
          <div className="row justify-content-center mb-4">
            <img src={logo} alt='logo' className="w-25" />
            <h2 className="text-center text-white">401 Unauthorized</h2>
            <p className="text-center text-white mt-3">Access to this page is restricted unless you login.</p>
            <Link to="/" className="btn btn-warning w-100 mt-3">Login</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthError