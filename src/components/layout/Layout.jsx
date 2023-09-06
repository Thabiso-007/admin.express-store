import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';

import SideBar from '../sidebar/SideBar';

const Layout = () => {
  const [navVisible, showNavbar] = useState(false);
  return (
    <div className="admin-body d-flex">
      <div className="App"> 
        <SideBar visible={navVisible} show={showNavbar} />  
        <div className={!navVisible ? "page" : "page page-with-navbar"}>
          <Outlet />
			  </div>  
      </div>
    </div>
  )
}

export default Layout