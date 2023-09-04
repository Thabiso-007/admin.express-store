import React from 'react'
import { Link } from 'react-router-dom';
import { MdEmail } from 'react-icons/md';

import logo from '../../../assets/logo/logo.png';
import Meta from '../../../components/meta/Meta';

export const ForgotPassword = () => {
  return (
    <>
      <Meta title="Forgot password" />
      <div className="auth-background">
        <div className="transparent">
          <div className="container">
            <div className="row vh-100 align-items-center justify-content-center">
              <div className="col-sm-10 col-md-8 col-lg-6 bg-secondary rounded p-4 shadow">
                <div className="row justify-content-center mb-4">
                  <img src={logo} alt='logo' className="w-25" />
                  <h3 className="text-center text-white">Admin Panel</h3>
                </div>
                <form>
                  <div className="mb-4">
                    <div class="input-group flex-nowrap">
                      <span class="input-group-text" id="addon-wrapping"><MdEmail /></span>
                      <input type="email" class="form-control" placeholder="Enter your email" aria-label="email" aria-describedby="addon-wrapping" /> 
                    </div>
                    <button type="button" className="btn btn-primary w-100 mt-3">Submit</button>
                    <hr />
                    <div>
                      <Link 
                      className="float-right link"
                      to="/">Login</Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ForgotPassword
