import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './pages/auth/login/Login';
import ResetPassword from './pages/auth/reset-password/ResetPassword';
import NotFound from './pages/errors/404/NotFound';
import Layout from './components/layout/Layout';
import Dashboard from './pages/admin/dashboard/Dashboard';
import Customer from './pages/admin/customer/Customer';
import ForgotPassword from './pages/auth/forgot-password/ForgotPassword';

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
          <Route path='customer' element={<Customer />} />
        </Route> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
