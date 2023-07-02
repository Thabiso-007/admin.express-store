import React from 'react'
import { useNavigate } from 'react-router-dom'

const Error404 = () => {
  const navigate = useNavigate()

  const redirect = (path) => {
    navigate(path)
  }
  return (
    <div className="login">
      <div className="container">
        <div className="wrapper">
          <div style={{ padding: "40px"}}>
            <h1 className='error'>Error</h1>
            <p className="not-found">404</p>
            <p className="oops">Oops! page not found.</p>
            <p className="exist">Sorry the page you looking for doesn't exist.</p>
            <div className='d-flex justify-content-center mt-3 gap-2'>
              <button type="submit" className="btn btn-primary ml-2 mt-20 w-50" onClick={() => redirect('/')}>Login</button>
              <button type="submit" className="btn btn-primary mt-20 w-50" onClick={() => redirect('/admin')}>Dashboard</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Error404