import React from 'react';


import Meta from '../../../components/meta/Meta';
import logo from '../../../assets/logo/logo.png';

const ScreenWidth = () => {
  return (
    <>
        <Meta title="Screen width error" />
        <div className="auth-background">
            <div className="transparent">
                <div className="container">
                    <div className="row vh-100 align-items-center justify-content-center">
                        <div className="col-sm-10 col-md-8 col-lg-6 bg-dark rounded p-4 shadow">
                            <div className="row justify-content-center mb-4 text-white">
                                <img src={logo} alt='logo' className="w-25" />
                                <h1 className="text-center fs-3">Screen width error</h1>
                                <p className="text-center">Your screen size should not be 1000 pixels or less.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ScreenWidth