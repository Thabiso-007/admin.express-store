import React from 'react'
import { HiUserCircle } from 'react-icons/hi'

import logo from '../../assets/logo.png'

const ForgotPassword = () => {
  return (
    <div className="login">
      <div className="container">
        <div className="wrapper">
          <img src={logo} alt='logo' className="center"/>
          <h1>Forgot Password</h1>
          <div className="form">
            <form>
              <div class="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping"><HiUserCircle size={20} /></span>
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Please enter your email." 
                  aria-label="Username" 
                  aria-describedby="addon-wrapping"
                  id="email"
                />
              </div>
              <div className='d-flex justify-content-center mt-3'>
                <button type="submit" className="btn btn-primary mt-20 w-50">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword