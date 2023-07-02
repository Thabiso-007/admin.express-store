import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'react-quill/dist/quill.snow.css';

import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/login/Login";
import ResetPassword from "./pages/reset-password/ResetPassword";
import ForgotPassword from "./pages/forgot-password/ForgotPassword";
import MainLayout from "./components/layout/MainLayout";
import MinWidth from "./components/min-width/MinWidth";
import Error404 from "./pages/404/Error404";
import Enquiries from "./pages/enquiries/Enquiries";
import BlogList from "./pages/blog-list/BlogList";
import BlogCategoryList from "./pages/blog-category-list/BlogCategoryList";
import Orders from "./pages/orders/Orders";
import Customers from "./pages/customers/Customers";
import ColorList from "./pages/color-list/ColorList";
import CategoryList from "./pages/category-list/CategoryList";
import BrandList from "./pages/brand-list/BrandList";
import ProductList from "./pages/product-list/ProductList";
import AddBlog from "./pages/add-blog/AddBlog";
import AddBlogCategory from "./pages/add-blog-category/AddBlogCategory";
import AddColor from "./pages/add-color/AddColor";
import AddCategory from "./pages/add-category/AddCategory";
import AddBrand from "./pages/add-brand/AddBrand";
import AddProduct from "./pages/add-product/AddProduct";

function App() {
  return (
    <>
      {window.innerWidth > 1020 ? (
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/reset-password' element={<ResetPassword />} />
            <Route path='/forgot-password' element={<ForgotPassword />} />
            <Route path='*' element={<Error404 />} />
            <Route path='/admin' element={<MainLayout />}>
              <Route index element={<Dashboard/>} />
              <Route path='enquiries' element={<Enquiries />} />
              <Route path='blog-list' element={<BlogList />} />
              <Route path='blog-category-list' element={<BlogCategoryList />} />
              <Route path='orders' element={<Orders />} />Customers
              <Route path='customers' element={<Customers />} />
              <Route path='color-list' element={<ColorList />} />
              <Route path='category-list' element={<CategoryList />} />
              <Route path='brand-list' element={<BrandList />} />
              <Route path='product-list' element={<ProductList />} />
              <Route path='blog' element={<AddBlog />} />
              <Route path='blog-category' element={<AddBlogCategory />} />
              <Route path='color' element={<AddColor />} />
              <Route path='category' element={<AddCategory />} />
              <Route path='brand' element={<AddBrand />} />
              <Route path='product' element={<AddProduct />} />
              <Route path='*' element={<Error404 />} />
            </Route>
          </Routes>
        </BrowserRouter>
      ): (
        <>
          <MinWidth />
        </>
      )}
    </>
  );
}

export default App;