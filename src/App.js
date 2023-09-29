import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
import Category from './pages/admin/single-category/Category';
import SingleBrand from './pages/admin/single-brand/SingleBrand';
import SingleBlogCategory from './pages/admin/single-blog-category/SingleBlogCategory';
import SingleCoupon from './pages/admin/single-coupon/SingleCoupon';
import SingleColor from './pages/admin/single-color/SingleColor';

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
          <Route path='brand/:id' element={<SingleBrand />} />
          <Route path='categories' element={<Categories />} />
          <Route path='category/:id' element={<Category />} />
          <Route path='blogs' element={<Blogs />} />
          <Route path='blog-categories' element={<BlogCategories />} />
          <Route path='blog-category/:id' element={<SingleBlogCategory />} />
          <Route path='enquiries' element={<Enquiries />} />
          <Route path='enquiries/:id' element={<ViewEnquiry />} />
          <Route path='authorities' element={<Authority />} />
          <Route path='coupons' element={<Coupons />} />
          <Route path='coupon/:id' element={<SingleCoupon />} />
          <Route path='colors' element={<Colors />} />
          <Route path='color/:id' element={<SingleColor />} />
        </Route> 
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
