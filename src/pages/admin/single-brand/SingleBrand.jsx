import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import { useDispatch, useSelector } from 'react-redux';

import Meta from '../../../components/meta/Meta';
import { resetState, updateABrand } from '../../../features/brand/brandSlice';
import { brandSchema } from '../../../utils/validation';

const SingleBrand = () => {
  const navigate = useNavigate();
  const params = useParams();
  const id = params.id;
  const dispatch = useDispatch();
  const location = useLocation();
  const getBrandId = location.pathname.split("/")[3];

  const brandState = useSelector((state) => state.brand);
  const { brands, isSuccess, isError, isLoading,brandName, updatedBrand  } = brandState;
  
  useEffect(() => {
    if (isSuccess && updatedBrand) {
      toast.success("Brand Updated Successfullly!");
      navigate(-1);
    }

    if (isError) {
      toast.error("Something Went Wrong!");
    }
  }, [isSuccess, isError, isLoading, updatedBrand, navigate]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: brandName || "",
    },
    validationSchema: brandSchema,
    onSubmit: (values) => {
      if (getBrandId !== undefined) {
        const data = { id: getBrandId, brandData: values };
        dispatch(updateABrand(data));
        dispatch(resetState());
      } 
    },
  });

  const metadata = () => {
    for (let i = 0; i < brands.length; i++) {
      if (brands[i]._id === id) {
        const name = brands[i].title;
        //console.log(name.toString())
        return name.toString();
        
      }
    }
  }

  return (
    <>
      <Meta title={metadata()} />
      <div className="container">
        <div className="bg-white p-3 rounded">
          <form>
            <div className="mb-3">
              <label htmlFor="brand" className="col-form-label">Edit Brand name:</label>
              <input 
                type="text" 
                className="form-control" 
                id="brand" 
                name="title"
                onChange={formik.handleChange("title")}
                onBlur={formik.handleBlur("title")}
                value={formik.values.title}  
              />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" onClick={formik.handleSubmit}>Edit Brand</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default SingleBrand