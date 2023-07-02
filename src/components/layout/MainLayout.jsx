import React, { useState } from 'react';
import { useNavigate, Outlet, Link } from 'react-router-dom';
import { Button, Layout, Menu, theme } from 'antd';
import { 
  AiOutlineDashboard, 
  AiOutlineShoppingCart, 
  AiOutlineUser,
  AiOutlineUnorderedList,
  AiOutlineBgColors,
  AiOutlinePicLeft,
  AiOutlinePicRight
} from 'react-icons/ai'
import { TbBrandApple, TbBrandDenodo } from 'react-icons/tb'
import { BiCategoryAlt } from 'react-icons/bi'
import { TfiLayoutListLargeImage } from 'react-icons/tfi'
import { HiOutlineColorSwatch, } from 'react-icons/hi'
import { HiQueueList } from 'react-icons/hi2'
import { FaBlog, FaBlogger } from 'react-icons/fa'
import { MdOutlineListAlt, MdNotifications } from 'react-icons/md'

import thabiso from '../../assets/thabiso.jpg'

const { Header, Sider, Content } = Layout;

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  
  const navigate = useNavigate()
  const { token: { colorBgContainer },} = theme.useToken();

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">
          <h3 className='text-center fs-5 text-white py-4 mb-0'>
            <span className='sm-logo'>ES</span>
            <span className='lg-logo'>Express Store</span>
          </h3>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          onClick={({ key }) => {
            if (key === 'signout') {

            } else {
              navigate(key)
            }
          }}
          items={[
            {
              key: '',
              icon: <AiOutlineDashboard />,
              label: 'Dashboard',
            },
            {
              key: 'customers',
              icon: <AiOutlineUser />,
              label: 'Customer',
            },
            {
              key: 'catalog',
              icon: <AiOutlineShoppingCart />,
              label: 'Catalog',
              children: [
                {
                  key: 'product',
                  icon: <AiOutlineShoppingCart />,
                  label: 'Add Product',
                },
                {
                  key: 'product-list',
                  icon: <AiOutlineUnorderedList />,
                  label: 'Product-list',
                },
                {
                  key: 'brand',
                  icon: <TbBrandApple />,
                  label: 'Add brand',
                },
                {
                  key: 'brand-list',
                  icon: <TbBrandDenodo />,
                  label: 'Brand list',
                },
                {
                  key: 'category',
                  icon: <BiCategoryAlt />,
                  label: 'Add category',
                },
                {
                  key: 'category-list',
                  icon: <TfiLayoutListLargeImage />,
                  label: 'Category list',
                },
                {
                  key: 'color',
                  icon: <AiOutlineBgColors />,
                  label: 'Add color',
                },
                {
                  key: 'color-list',
                  icon: <HiOutlineColorSwatch />,
                  label: 'Color list',
                },
              ]
            },
            {
              key: 'orders',
              icon: <HiQueueList />,
              label: 'Orders',
            },
            {
              key: '',
              icon: <FaBlog />,
              label: 'Blog',
              children: [
                {
                  key: 'blog',
                  icon: <FaBlog />,
                  label: 'Add blog',
                },
                {
                  key: 'blog-list',
                  icon: <FaBlogger />,
                  label: 'Blog list',
                },
                {
                  key: 'blog-category',
                  icon: <BiCategoryAlt />,
                  label: 'Add blog Category',
                },
                {
                  key: 'blog-category-list',
                  icon: <AiOutlineUnorderedList />,
                  label: 'Blog category list',
                },
              ]
            },
            {
              key: 'enquiries',
              icon: <MdOutlineListAlt />,
              label: 'Enquiries',
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          className="d-flex justify-content-between pe-3 px-5"
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <AiOutlinePicRight /> : <AiOutlinePicLeft />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
          <div className="d-flex gap-3 align-items-center">
            <div className='position-relative'>
              <MdNotifications size={24} />
              <span className='badge bg-primary rounded-circle p-1 position-absolute'>3</span>
            </div>
            <div className="d-flex gap-3 align-items-center">
              <div>
                <img src={thabiso} alt='' className='pro-image' />
              </div> 
              <div role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                <h5 className='mb-0'>Thabiso</h5>
                <p className='mb-0'>thabiso.hlatshwayo24@gmail.com</p>
              </div>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li><Link className="dropdown-item py-1 mb-1" style={{ height: "auto", lineHeight: "20px"}} to="#">View profile</Link></li>
                <li><Link className="dropdown-item py-1 mb-1" style={{ height: "auto", lineHeight: "20px"}} to="#">Signout</Link></li>
              </div>
            </div>
          </div>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          
            <Outlet />
          
        </Content>
      </Layout>
    </Layout>
  );
};
export default MainLayout;