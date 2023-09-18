import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import SideBar from '../sidebar/SideBar';
import ScreenWidth from '../../pages/errors/screen-width/ScreenWidth'

const Layout = () => {
  const [navVisible, showNavbar] = useState(false)
  const [width, setWidth] = useState(window.innerWidth);

  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  });

  return (
    <>
      {width > 999 ? (
        <div className="admin-body d-flex">
          <div className="App"> 
            <SideBar visible={navVisible} show={showNavbar} />  
            <div className={!navVisible ? "page" : "page page-with-navbar"}>
              <Outlet />
			      </div>  
          </div>
        </div>
      ) : (
        <ScreenWidth />
      )}
    </>
  )
}

export default Layout