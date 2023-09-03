import React from 'react';
import { Outlet } from 'react-router-dom';

import SideBar from '../sidebar/SideBar';

const Layout = () => {
  return (
    <>
      <SideBar />
      <Outlet />  
    </>
  )
}

export default Layout