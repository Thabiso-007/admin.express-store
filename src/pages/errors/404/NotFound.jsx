import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import logo from '../../../assets/logo/logo.png';

const NotFound = () => {
  const authState = useSelector((state) => state.auth);
  const { user } = authState;

  return (
    <div className="auth-background">
      <div className="transparent">
        <div className="container">
          <div className="row vh-100 align-items-center justify-content-center">
            <div className="col-sm-10 col-md-8 col-lg-6 bg-dark rounded p-4 shadow">
              <div className="row justify-content-center mb-4">
                <img src={logo} alt='logo' className="w-25" />
                <h2 className="text-center text-white">404, ooops page not found</h2>
                <p className="text-center text-white">We apologize, but the page you are trying to access is not available.</p>
                {user ? (
                  <Link to="/admin" className="btn btn-warning w-100 mt-3">
                      Dashboard
                  </Link>
                ) : (
                  <Link to="/" className="btn btn-warning w-100 mt-3">
                    Login
                  </Link>
                )}
              </div>                    
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFound