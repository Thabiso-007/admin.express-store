import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaLock } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import * as yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";

import logo from '../../../assets/logo/logo.png';
import Meta from '../../../components/meta/Meta';
import { login } from '../../../features/user/authSlice';

let schema = yup.object().shape({
  email: yup
    .string()
    .email("Email should be valid")
    .required("Email is Required"),
  password: yup.string().required("Password is Required"),
});

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(login(values));
    },
  });
  const authState = useSelector((state) => state);

  const { user, isError, isSuccess, isLoading, message } = authState.auth;

  useEffect(() => {
    if (isSuccess) {
      navigate("admin");
    } else {
      navigate("");
    }
  }, [navigate, isSuccess]);

  return (
    <>
      <Meta title="Login" />
      <div className="auth-background">
        <div className="transparent">
          <div className="container">
            <div className="row vh-100 align-items-center justify-content-center">
              <div className="col-sm-10 col-md-8 col-lg-6 bg-dark rounded p-4 shadow">
                <div className="row justify-content-center mb-4">
                  <img src={logo} alt='logo' className="w-25" />
                  <h3 className="text-center text-white">Admin Panel</h3>
                </div>
                <div className="error text-center">
                  {message.message === "Rejected" ? "You are not an Admin" : ""}
                </div>
                <form onSubmit={formik.handleSubmit}>
                  <div className="mb-4">
                    <div className="input-group flex-nowrap">
                      <span className="input-group-text" id="addon-wrapping"><MdEmail /></span>
                      <input 
                        type="email" 
                        className="form-control"
                        placeholder="Enter your email" 
                        aria-label="email" 
                        aria-describedby="addon-wrapping" 
                        id="email"
                        name="email"
                        onChange={formik.handleChange("email")}
                        onBlur={formik.handleBlur("email")}
                        value={formik.values.email}
                      /> 
                    </div>
                    <div className="error mt-2">
                      {formik.touched.email && formik.errors.email}
                    </div>
                    <div className="input-group flex-nowrap mt-3">
                      <span className="input-group-text" id="addon-wrapping"><FaLock /></span>
                      <input 
                        type="password" 
                        className="form-control" 
                        placeholder="Enter your password" 
                        aria-label="password" 
                        aria-describedby="addon-wrapping"
                        id="pass"
                        name="password"
                        onChange={formik.handleChange("password")}
                        onBlur={formik.handleBlur("password")}
                        value={formik.values.password}
                      /> 
                    </div>
                    <div className="error mt-2">
                      {formik.touched.password && formik.errors.password}
                    </div>
                    <button type="button" className="btn btn-warning w-100 mt-3">Login</button>
                    <hr />
                    <div>
                      <Link 
                      className="float-right link"
                      to="/forgot-password">Forgot password</Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login