import React from 'react';
import { Outlet } from 'react-router-dom';

import SideBar from '../sidebar/SideBar';
import NavBar from '../navbar/NavBar';

const Layout = () => {
  return (
    <>
      <div className="admin-body d-flex"> 
        <SideBar />
        <div className="w-100">
          <NavBar />
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default Layout