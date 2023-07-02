import React from 'react'

import logo from '../../assets/logo.png'

const MinWidth = () => {
  return (
    <div className="max-width-container">
        <div className="wrapper">
            <div className="container">
                <img src={logo} alt='logo' className='center' />
                <h1>Express store admin panel</h1>
                <p>You can only view this application on a computer</p>
                <p>Or in any device with a screen above 1020 pixels.</p>
            </div>
        </div>
    </div>
  )
}

export default MinWidth