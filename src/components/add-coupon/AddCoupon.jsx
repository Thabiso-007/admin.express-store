import React, { useEffect } from 'react'
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import { useDispatch, useSelector } from 'react-redux';

import {
  createCoupon,
  getACoupon,
  resetState,
  updateACoupon,
} from "../../features/coupon/couponSlice";
import { couponSchema } from '../../utils/validation';

const AddCoupon = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const getCouponId = location.pathname.split("/")[3];

  const newCoupon = useSelector((state) => state.coupon);
  const {
    isSuccess,
    isError,
    isLoading,
    createdCoupon,
    couponName,
    couponDiscount,
    couponExpiry,
    updatedCoupon,
  } = newCoupon;

  const changeDateFormet = (date) => {
    const newDate = new Date(date).toLocaleDateString();
    const [month, day, year] = newDate.split("/");
    return [year, month, day].join("-");
  };

  useEffect(() => {
    if (getCouponId !== undefined) {
      dispatch(getACoupon(getCouponId));
    } else {
      dispatch(resetState());
    }
  }, [getCouponId, dispatch]);

  useEffect(() => {
    if (isSuccess && createdCoupon) {
      toast.success("Coupon Added Successfullly!");
    }
    if (isSuccess && updatedCoupon) {
      toast.success("Coupon Updated Successfullly!");
    }
    if (isError && couponDiscount && couponDiscount && couponExpiry) {
      toast.error("Something Went Wrong!");
    }
  }, [isSuccess, isError, isLoading, createdCoupon, updatedCoupon, couponExpiry, couponDiscount]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: couponName || "",
      expiry: changeDateFormet(couponExpiry) || "",
      discount: couponDiscount || "",
    },
    validationSchema: couponSchema,
    onSubmit: (values) => {
      if (getCouponId !== undefined) {
        const data = { id: getCouponId, couponData: values };
        dispatch(updateACoupon(data));
        dispatch(resetState());
      } else {
        dispatch(createCoupon(values));
        formik.resetForm();
        setTimeout(() => {
          dispatch(resetState);
        }, 300);
      }
    },
  });

  return (
    <>
    <div className="text-center">
          <button 
            type="button" 
            className="btn btn-primary" 
            data-bs-toggle="modal" 
            data-bs-target="#coupon" 
            data-bs-whatever="@getbootstrap">
              {getCouponId !== undefined ? "Edit" : "Add"} Coupon
            </button>
        </div>
        <div className="modal fade" id="coupon" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">{getCouponId !== undefined ? "Edit" : "Add"} Coupon</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="product-title" className="col-form-label">Enter coupon name:</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="product-title"
                      onChange={formik.handleChange("name")}
                      onBlur={formik.handleBlur("name")}
                      value={formik.values.name}
                    />
                  </div>
                  <div className="error">
                    {formik.touched.name && formik.errors.name}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="product-price" className="col-form-label">Enter Expiry Data:</label>
                    <input 
                      type="date" 
                      className="form-control" 
                      id="product-price" 
                      onChange={formik.handleChange("expiry")}
                      onBlur={formik.handleBlur("expiry")}
                      value={formik.values.expiry}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="discount" className="col-form-label">Enter Discount:</label>
                    <input 
                      type="number" 
                      className="form-control" 
                      id="discount" 
                      name="discount"
                      onChange={formik.handleChange("discount")}
                      onBlur={formik.handleBlur("discount")}
                      value={formik.values.discount}  
                    />
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button 
                      type="button" 
                      className="btn btn-primary"
                      onClick={formik.handleSubmit}
                      >
                        {getCouponId !== undefined ? "Edit" : "Add"} Coupon
                      </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
    </>  
  )
}

export default AddCoupon