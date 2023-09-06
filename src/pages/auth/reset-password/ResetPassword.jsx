import React from 'react'
import { Link } from 'react-router-dom';
import { FaLock } from 'react-icons/fa';

import logo from '../../../assets/logo/logo.png';
import Meta from '../../../components/meta/Meta';

const ResetPassword = () => {
  return (
    <>
      <Meta title="Reset password" />
      <div className="auth-background">
        <div className="transparent">
          <div className="container">
            <div className="row vh-100 align-items-center justify-content-center">
              <div className="col-sm-10 col-md-8 col-lg-6 bg-dark rounded p-4 shadow">
                <div className="row justify-content-center mb-4">
                  <img src={logo} alt='logo' className="w-25" />
                  <h3 className="text-center text-white">Admin Panel</h3>
                </div>
                <form>
                  <div className="mb-4">
                    <div class="input-group flex-nowrap">
                      <span class="input-group-text" id="addon-wrapping"><FaLock /></span>
                      <input type="password" class="form-control" placeholder="Enter your password" aria-label="password" aria-describedby="addon-wrapping" /> 
                    </div>
                    <div class="input-group flex-nowrap mt-3">
                      <span class="input-group-text" id="addon-wrapping"><FaLock /></span>
                      <input type="password" class="form-control" placeholder="Confirm your password" aria-label="password" aria-describedby="addon-wrapping" /> 
                    </div>
                    <button type="button" className="btn btn-warning w-100 mt-3">Submit</button>
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

export default ResetPassword