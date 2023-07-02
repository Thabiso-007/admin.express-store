import React from 'react'
import { HiLockClosed } from 'react-icons/hi'

import logo from '../../assets/logo.png'

const ResetPassword = () => {
  return (
    <div className="login">
      <div className="container">
        <div className="wrapper">
          <img src={logo} alt='logo' className="center"/>
          <h1>Reset Password</h1>
          <div className="form">
            <form>
              <div class="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping"><HiLockClosed size={20} /></span>
                <input 
                  type="password" 
                  className="form-control" 
                  placeholder="Enter your password" 
                  aria-label="Please enter your new password." 
                  aria-describedby="addon-wrapping" 
                  id="pass"
                  />
              </div>
              <div class="input-group flex-nowrap mt-3">
                <span className="input-group-text" id="addon-wrapping"><HiLockClosed size={20} /></span>
                <input 
                  type="password" 
                  className="form-control" 
                  placeholder="Re-enter your new password" 
                  aria-label="Username" 
                  aria-describedby="addon-wrapping"
                  id="email"
                  />
              </div>
              <div className='d-flex justify-content-center mt-3'>
                <button type="submit" className="btn btn-primary mt-20 w-50">Reset password</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResetPassword