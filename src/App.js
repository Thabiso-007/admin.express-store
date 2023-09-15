import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './pages/auth/login/Login';
import ResetPassword from './pages/auth/reset-password/ResetPassword';
import NotFound from './pages/errors/404/NotFound';
import Layout from './components/layout/Layout';
import Dashboard from './pages/admin/dashboard/Dashboard';
import Customer from './pages/admin/customer/Customer';
import ForgotPassword from './pages/auth/forgot-password/ForgotPassword';
import Products from './pages/admin/products/Products';
import Orders from './pages/admin/orders/Orders';
import Blogs from './pages/admin/blogs/Blogs';
import Categories from './pages/admin/categories/Categories';
import Brand from './pages/admin/brand/Brand';
import BlogCategories from './pages/admin/blog-categories/BlogCategories';
import Enquiries from './pages/admin/enquiries/Enquiries';
import Authority from './pages/admin/authorities/Authorities';
import Coupons from './pages/admin/coupons/Coupons';
import Colors from './pages/admin/color/Colors';
import ViewOrder from './pages/admin/view-order/ViewOrder';
import ViewEnquiry from './pages/admin/view-enquiry/ViewEnquiry';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/reset-password' element={<ResetPassword />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/admin' element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path='customers' element={<Customer />} />
          <Route path='products' element={<Products />} />
          <Route path='orders' element={<Orders />} />
          <Route path='orders/:id' element={<ViewOrder />} />
          <Route path='brand' element={<Brand />} />
          <Route path='categories' element={<Categories />} />
          <Route path='blogs' element={<Blogs />} />
          <Route path='blog-categories' element={<BlogCategories />} />
          <Route path='enquiries' element={<Enquiries />} />
          <Route path='enquiries/:id' element={<ViewEnquiry />} />
          <Route path='authorities' element={<Authority />} />
          <Route path='coupons' element={<Coupons />} />
          <Route path='colors' element={<Colors />} />
        </Route> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
